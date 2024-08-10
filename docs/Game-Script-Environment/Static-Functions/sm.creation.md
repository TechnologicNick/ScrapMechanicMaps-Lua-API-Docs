---
sidebar_position: 15
title: sm.creation
hide_title: true
sidebar-label: 'sm.creation'
---

<br></br>

## sm.creation

A <strong>Creation</strong> represent a collection of [bodies](/lua/Game-Script-Environment/Userdata/Body) linked together by [joints](/lua/Game-Script-Environment/Userdata/Joint).

## Functions

### exportToString

```lua
sm.creation.exportToString( body, exportTransforms, forceDynamic )
```
<code>Server-Only</code> <br></br>

Exports a creation to a blueprint formatted json string.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: Any body in the creation.
- <code>exportTransforms</code> [<strong> bool </strong>]: Export the current world transform of bodies. Defaults to false.
- <code>forceDynamic</code> [<strong> bool </strong>]: Force export to dynamic bodies. Defaults to false.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The blueprint json string.

---

### exportToTable

```lua
sm.creation.exportToTable( body, exportTransforms, forceDynamic )
```
<code>Server-Only</code> <br></br>

Exports a creation to a blueprint Lua table.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: Any body in the creation.
- <code>exportTransforms</code> [<strong> bool </strong>]: Export the current world transform of bodies. Defaults to false.
- <code>forceDynamic</code> [<strong> bool </strong>]: Force export to dynamic bodies. Defaults to false.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The blueprint Lua table.

---

### importFromFile

```lua
sm.creation.importFromFile( world, pathString, worldPosition, worldRotation, importTransforms, indestructible )
```
<code>Server-Only</code> <br></br>

Imports a blueprint json file into the world.

If <code>importTransforms</code> is enabled, the world position and rotation are applied to the imported transform.

:::caution warning
If the blueprint was not exported with transforms, the importer will treat it as if <code>importTransforms</code> was disabled.
:::

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> world </strong>]: The world to import to.
- <code>pathString</code> [<strong> string </strong>]: The path to the blueprint file.
- <code>worldPosition</code> [<strong> vec3 </strong>]: The world position of the creation. Defaults to <code>sm.vec3.zero()</code>
- <code>worldRotation</code> [<strong>quat </strong>]: The world rotation of the creation. Defaults to <code>sm.quat.identity()</code>
- <code>importTransforms</code> [<strong> bool </strong>]: Import world transforms from bodies. Defaults to false.
- <code>indestructible</code> [<strong> bool </strong>]: (DEPRECATED, use <code>setDestructable</code> on each body in the creation.)

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of bodies created from the blueprint.

---

### importFromString

```lua
sm.creation.importFromString( world, jsonString, worldPosition, worldRotation, importTransforms, forceInactive )
```
<code>Server-Only</code> <br></br>

Imports a blueprint json string into the world.

If <code>importTransforms</code> is enabled, the world position and rotation are applied to the imported transform.

:::caution warning
If the blueprint was not exported with transforms, the importer will treat it as if <code>importTransforms</code> was disabled.
:::

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> world </strong>]: The world to import to.
- <code>jsonString</code> [<strong> string </strong>]: The blueprint json string.
- <code>worldPosition</code> [<strong> vec3 </strong>]: The world position of the creation. Defaults to <code>sm.vec3.zero()</code>
- <code>worldRotation</code> [<strong>quat </strong>]: The world rotation of the creation. Defaults to <code>sm.quat.identity()</code>
- <code>importTransforms</code> [<strong> bool </strong>]: Import world transforms from bodies. Defaults to false.
- <code>forceInactive</code> [<strong> bool </strong>]: Sets whether interactables are forced inactive when imported or not. Defaults to false.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of bodies created from the blueprint.

---

### buildBlueprintShape

```lua
sm.creation.buildBlueprintShape( shapeUuid, position, rotation, localPosition, meshRotation )
```

Unknown function, is referenced in the scripts but does not actually exist in the API. <br></br>
Very likely unreleased Chapter 2 content.

<strong>Arguments:</strong> <br></br>

- <code>shapeUuid</code> [<strong> Uuid </strong>]: The blueprint shape uuid.
- <code>position</code> [<strong> Vec3 </strong>]: The world position of the shape.
- <code>rotation</code> [<strong> Quat </strong>]: The world rotation of the shape.
- <code>localPosition</code> [<strong>Vec3 </strong>]: The local position of the shape.
- <code>meshRotation</code> [<strong> Quat </strong>]: The local rotation of the shape.

<strong>Returns:</strong> <br></br>

- [<strong> Unknown </strong>]: [unknown]

---
