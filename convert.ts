import fs from "fs";
import path from "path";

const createPartitions = (lines: string[], splitOn: RegExp) => {
	const partitions: string[][] = [];
	let currentPartition: string[] = [];

	for (const line of lines) {
		if (line.match(splitOn)) {
			partitions.push(currentPartition);
			currentPartition = [];
		}

		currentPartition.push(line);
	}
	partitions.push(currentPartition);

	return partitions.filter(partition => partition.length > 0);
}

interface H1 {
	title: string;
	lines: string[];
	h2s: H2[];
	h3s: H3[];
}

interface H2 {
	title: string;
	lines: string[];
	h3s: H3[];
}

interface H3 {
	title: string;
	lines: string[];
}

const createHeadingHierarchy = (partitions: string[][], title: string) => {
	const h2RegExp = /^## (?<title>.*)$/;
	const h3RegExp = /^### (?<title>.*)$/;

	const h1: H1 =  {
		title: title,
		lines: [],
		h2s: [],
		h3s: [],
	}

	let currentH2: H2 | null = null;

	for (const partition of partitions) {
		const firstLine = partition[0];
		if (!firstLine) {
			continue;
		}

		if (h2RegExp.exec(firstLine)?.groups?.title) {
			if (currentH2 !== null) {
				h1.h2s.push(currentH2);
			}

			currentH2 = {
				title: h2RegExp.exec(firstLine)?.groups?.title ?? "",
				lines: partition.slice(1),
				h3s: [],
			}
		} else if (h3RegExp.exec(firstLine)?.groups?.title) {
			(currentH2?.h3s ?? h1.h3s).push({
				title: h3RegExp.exec(firstLine)?.groups?.title ?? "",
				lines: partition.slice(1),
			});
		} else {
			h1.lines.push(...partition);
		}
	}

	if (currentH2 !== null) {
		h1.h2s.push(currentH2);
	}

	return h1;
}

class Documentation<T> {

	files: string[];
	environment: string;
	content: { [file: string]: T };
	
	constructor(root: string, environment: string) {
		this.files = fs.readdirSync(root)
			.map(file => path.join(root, file))
			.filter(file => file.endsWith(".md"));

		this.environment = environment;
		this.content = {};
	}

	async parseFiles() {
		await Promise.all(
			this.files.map(async (file) => {
				const contents = (await fs.promises.readFile(file, { encoding: "utf8" })).toString();
				const lines = contents.split(/[\n\r]+/g).filter(line => line.trim());
				const partitions = createPartitions(lines, /^#{2,3}\s.*$/);
				const hierarchy = createHeadingHierarchy(partitions, path.basename(file, ".md"));

				return this.parseFile(file, contents, lines, partitions, hierarchy).catch(reason => {
					console.error(`Failed parsing "${file}": ${reason}`);
				});
			})
		);

		return this;
	}

	async parseFile(file: string, contents: string, lines: string[], partitions: string[][], hierarchy: H1) {
		
	}

	async save(destination: string) {
		if (!fs.existsSync(destination)) {
			fs.mkdirSync(destination);
		}

		await Promise.all(
			Object.entries(this.content).map(([filename, content]) => (
				fs.promises.writeFile(
					path.join(destination, filename),
					JSON.stringify(content, null, "\t")
				).catch(reason => console.error(`Failed saving to "${path.join(destination, filename)}": ${reason}`))
			))
		);
	}

}

interface UserdataDocumentationFile {
	userdata: string;
	namespace_association?: string;
	doc: {
		text: string[];
	};
	usage?: "server only" | "client only" | "server and client";
	serializable?: boolean;
	members: {
		name: string;
		get?: {
			doc: {
				text: string[];
				params: [string, string, string][];
				returns: [string, string][];
				server_only?: boolean;
				client_only?: boolean;
			};
		};
		set?: {
			doc: {
				text: string[];
				params: [[string, string, string], [string, string, string]];
				server_only?: boolean;
				client_only?: boolean;
			};
		}
	}[];
	functions: {
		name: string;
		doc: {
			text: string[];
			params: [string, string, string][];
			return: [string, string][];
			server_only?: boolean;
			client_only?: boolean;
		};
	}[];
	metamethods: {
		name: string;
		doc: {
			meta: [string, string][];
		};
	}[];
}

type Query = string | RegExp | null;

const doesLineMatchQuery = (line: string, query: Query) => {
	if (query === null) {
		return false;
	} else if (typeof query === "string") {
		return line.trim() === query;
	} else if (query instanceof RegExp) {
		return !!line.match(query);
	} else {
		return false;
	}
}

const getLinesBetween = (lines: string[], start: Query, end: Query) => {
	let indexStart = lines.findIndex(line => doesLineMatchQuery(line, start)) + 1;

	let indexEnd = lines.findIndex((line, index) => index >= indexStart && doesLineMatchQuery(line, end));
	if (indexEnd === -1) {
		indexEnd = lines.length;
	}

	return lines.slice(indexStart, indexEnd);
}

const anyLineContains = (lines: string[], searchString: string) => {
	return lines.some(line => line.indexOf(searchString) !== -1);
}

const convertToType = (typeString: string) => {
	const caseConversion = {
		aistate: "[AiState]",
		areatrigger: "[AreaTrigger]",
		blueprintvisualization: "[BlueprintVisualization]",
		body: "[Body]",
		builderguide: "[BuilderGuide]",
		character: "[Character]",
		color: "[Color]",
		container: "[Container]",
		cullspheregroup: "[CullSphereGroup]",
		effect: "[Effect]",
		guiinterface: "[GuiInterface]",
		harvestable: "[Harvestable]",
		interactable: "[Interactable]",
		joint: "[Joint]",
		lift: "[Lift]",
		loadcellhandle: "[LoadCellHandle]",
		network: "[Network]",
		pathnode: "[PathNode]",
		player: "[Player]",
		portal: "[Portal]",
		quat: "[Quat]",
		raycastresult: "[RaycastResult]",
		scriptableobject: "[ScriptableObject]",
		shape: "[Shape]",
		storage: "[Storage]",
		tool: "[Tool]",
		unit: "[Unit]",
		uuid: "[Uuid]",
		vec3: "[Vec3]",
		widget: "[Widget]",
		world: "[World]",
	}

	return caseConversion[typeString?.toLowerCase()] ?? typeString;
}

const parseArgumentsLine = (line: string): [string, string, string] => {
	const { name, type, description } = /^- <code>(?<name>.*?)<\/code> \[<strong> (?<type>.*?) <\/strong>\]: (?<description>.*?)$/.exec(line)?.groups ?? {};
	return [ convertToType(type), name, description ];
}

const parseReturnsLine = (line: string): [string, string] => {
	const { type, description } = /^- \[<strong> (?<type>.*?) <\/strong>\]: (?<description>.*?)$/.exec(line)?.groups ?? {};
	return [ convertToType(type), description ];
}

class UserdataDocumentation extends Documentation<UserdataDocumentationFile> {

	async parseFile(file: string, contents: string, lines: string[], partitions: string[][], hierarchy: H1) {
		const out: UserdataDocumentationFile = {
			userdata: hierarchy.title,
			doc: {
				text: [],
			},
			members: [],
			functions: [],
			metamethods: [],
		}

		out.doc.text.push(...getLinesBetween(hierarchy.h2s[0].lines, null, /<strong>(?:Operations|Values):<\/strong>/));

		if (anyLineContains(hierarchy.h2s[0].lines, "<strong>Values:</strong>")) {
			out.members = getLinesBetween(hierarchy.h2s[0].lines, /<strong>Values:<\/strong>/, /<strong>Operations:<\/strong>/)
				.join("\n")
				.split(/^- /m)
				.filter(memberString => memberString)
				.map(memberString => {
					const [ definition, ...getAndSet ] = memberString.split("\n").filter(line => line);
					const { name, type } = /^<code>(?<name>.*?)<\/code> \[<strong> (?<type>.*?) <\/strong>\] <br><\/br>$/.exec(definition)?.groups ?? {};

					const member: UserdataDocumentationFile["members"][number] = {
						name: name,
					}

					let lastGetterOrSetter: { doc: { text: string[] } } | null = null;

					for (const line of getAndSet) {
						const {
							method,
							description,
							serverOnly,
							clientOnly,
						} = /^\t- <code>(?<method>.*?)<\/code>:(?<serverOnly> \(Server-Only\))?(?<clientOnly> \(Client-Only\))? (?<description>.*?)$/.exec(line)?.groups ?? {};

						if (!method) {
							if (lastGetterOrSetter) {
								lastGetterOrSetter.doc.text.push(line);
							} else {
								console.error(`Not a getter/setter: "${line}"`);
							}
						} else if (method.toLowerCase() === "get") {
							member.get = {
								doc: {
									text: [
										description,
									],
									params: [
										[ convertToType(out.userdata), out.userdata, `The ${out.userdata}.` ],
									],
									returns: [
										[ convertToType(type), description ],
									],
								}
							}

							serverOnly && (member.get.doc.server_only = true);
							clientOnly && (member.get.doc.client_only = true);

							lastGetterOrSetter = member.get;

						} else if (method.toLowerCase() === "set") {
							member.set = {
								doc: {
									text: [
										description,
									],
									params: [
										[ convertToType(out.userdata), out.userdata, `The ${out.userdata}.` ],
										[ convertToType(type), type, `The ${type}.` ],
									],
								}
							}

							serverOnly && (member.set.doc.server_only = true);
							clientOnly && (member.set.doc.client_only = true);

							lastGetterOrSetter = member.set;
						}
					}

					return member;
				});

		}

		out.functions = hierarchy.h2s.find(h2 => h2.title.trim() === "Functions")?.h3s?.map(h3 => {
			const func: UserdataDocumentationFile["functions"][number] = {
				name: h3.title,
				doc: {
					text: getLinesBetween(h3.lines, /<code>(Server|Client)-Only<\/code>/i, /<strong>Arguments:<\/strong>/i),
					params: getLinesBetween(h3.lines, /<strong>Arguments:<\/strong>/i, /^(?:<strong>Returns:<\/strong>|---|[^\-])/i)
						.map(line => parseArgumentsLine(line)),
					return: [],
				}
			}

			if (anyLineContains(h3.lines, "<strong>Returns:</strong>")) {
				func.doc.return = getLinesBetween(h3.lines, /<strong>Returns:<\/strong>/i, /---/)
					.map(line => parseReturnsLine(line))
			}

			if (anyLineContains(h3.lines, "<code>Server-Only</code>")) {
				func.doc.server_only = true;
			}

			if (anyLineContains(h3.lines, "<code>Client-Only</code>")) {
				func.doc.client_only = true;
			}

			return func;
		}) ?? [];

		if (anyLineContains(hierarchy.h2s[0].lines, "<strong>Operations:</strong>")) {
			const addMetamethod = (
				name: UserdataDocumentationFile["metamethods"][number]["name"],
				meta: UserdataDocumentationFile["metamethods"][number]["doc"]["meta"][number],
			) => {
				const found = out.metamethods.find(metamethod => metamethod.name === name);
				if (found) {
					found.doc.meta.push(meta);
				} else {
					out.metamethods.push({
						name: name,
						doc: {
							meta: [
								meta,
							],
						},
					});
				}
			}

			getLinesBetween(hierarchy.h2s[0].lines, /<strong>Operations:<\/strong>/i, /<strong>Values:<\/strong>/i)
				.slice(2) // Skip the table header
				.forEach(line => {
					const {
						typeA,
						operator,
						typeB,
						description,
					} = /\| (?:tostring\( )?(?:<code>(?<typeA>.*?)<\/code> )?(?<operator>.+?) ?<code>(?<typeB>.*?)<\/code>(?: \))? \| (?<description>.*?) \|/.exec(line)?.groups ?? {};

					let name: string;
					if (!typeA && operator === "-") {
						name = "__unm";
					} else {
						name = {
							"+": "__add",
							"/": "__div",
							"==": "__eq",
							"<": "__lt",
							"*": "__mul",
							"-": "__sub",
							"tostring(": "__tostring",
							"<=": "__le",
							"%": "__mod",
							"^": "__pow",
							"..": "__concat",
						}[operator] ?? "__unknown";
					}

					addMetamethod(name, [
						[typeA, typeB].filter(type => type).map(type => convertToType(type)).join(","),
						description,
					]);
				});
		}

		// if (hierarchy.title === "Vec3") {
		// 	console.log(JSON.stringify(hierarchy, null, "  "));
		// 	console.log(JSON.stringify(out, null, "  "));
		// }

		this.content[`userdata_${this.environment}_${out.userdata}.json`] = out;
	}

}

new UserdataDocumentation("./docs/Game-Script-Environment/Userdata", "Game").parseFiles().then(doc => doc.save("./out"));
