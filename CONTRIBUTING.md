# Contributing to this website

When contributing to this website, there are some important things you need to keep in mind.

- [File Structure](#file-structure)
- [What you should never do](#what-you-should-never-do)
  - [Add any non-text element in a header](#add-any-non-text-element-in-a-header)
  - [Mixing different types of text formatting](mixing-different-types-of-text-formatting)
- [When adding or editing content](#when-adding-or-editing-content)
  - [Page Titles and Order](#page-titles-and-order)
  - [Text Formatting and Element Placement](#text-formatting-and-element-placement)
  - [Linking to files and displaying images](#linking-to-files-and-displaying-images)
  - [Additional Notes](#additional-notes)

## File structure

When adding new content, you should use the following file structure:

**Markdown Files** go in `docs/`.<br>
**Images** go in `static/img/`. Try to keep the file size below 3MB.<br>
**Videos** go in `static/videos/`. Try to keep the file size low. 1080p max.<br>
**Other Files** like .zip go in `static/files/`. Max. 300MB.

## What you should **never** do

There are some things that you should **never** do when adding content to the website.<br>
There can be multiple reasons for why you can't do something, but<br>
most of it is simply because it will break the whole website or a feature of it.

#### Add any non-text element in a header

Do **not** add non-text elements (such as links or HTML tags, like \<code>) to a header.<br>
Doing so **will** break direct header links for the entire website.

```
## Some <code>Header</code>
```

#### Mixing different types of text formatting

Do **not** mix different types of text formatting, e.g. use `**bold text**` and `<strong>bold text</strong>` in the same line.<br>
Doing so will break one of the formatting types, causing it to be rendered incorrectly.

**Bad formatting**
```
**This is** <strong>bold text</strong>.
```

**Good formatting**
```
**This is bold text**.

<strong>This is bold text<strong>.
```

## When adding or editing content

Below are some things you need to keep in mind when adding content or editing existing pages.

### Page Titles and Order

When adding a new page, you need to assign it a page number (used for sorting the sidebar) and a page title (displayed in the sidebar).<br>
This is done by editing the settings at the top of the markdown file.

NOTE - Make sure that there is never more than one page with the same page number!<br>
Having multiple pages with the same number will result in a broken sidebar order.

sidebar_position = The position the page should have in the sidebar. Must be a unique, positive integer.<br>
title = The title of the page. This is displayed in the sidebar. Make sure it's not too long (3 words max).<br>
hide_title = Whether the title of the page should be displayed on the page itself or not. I recommend leaving this set to true.<br>
sidebar-label = The same as 'title'. NOTE - you need to set 'title' **and** 'sidebar-label' in order for the text to display properly.
```
---
sidebar_position: 2
title: File Path References
hide_title: true
sidebar-label: 'File Path References'
---

```


### Text Formatting and Element Placement

When adding text, please make sure your text is properly formatted.<br>
Remember to use newline elements ( \<br>\</br>) at the end of lines if necessary.

Example of **bad** text formatting:
```
Some really really really really long text.
Another sentence of really really long text.
A third sentence of really really really long text.
```
The way this text is written is bad because, if there is a line of text right below another line of text,<br>
these lines will be displayed as one line on the actual website. This can lead to the text becoming hard to read.<br>

To fix this, you need to add a newline ( \<br>\</br>) element at the end of each previous line.<br>
NOTE - Even though in normal HTML, the \<br> tag does not need a closing tag, the website does not compile without one.<br>

Example of **good** text formatting:
```
Some really really really really long text. <br></br>
Another sentence of really really long text. <br></br>
A third sentence of really really really long text.
```

In addition to this, certain elements **require** an empty line between each other, else they are not properly rendered on the website.<br>
For example, having a link `[link](/some/other/page)` in or next to the same line as certain other elements will prevent both elements from rendering correctly.

Example of **bad** element placement (ignore the backslashes):
```
## Some Header
\```lua
  function someLuaCode()
    doSomething()
  end
\```
Some example description of a [Lua](https://www.lua.org/) function.
```
The way this is written is bad because, due to there being no empty line between the header and the start of the code box<br>
and no empty line between the end of the code box and the sentence with a link in it, the header, code box *and* link will not render correctly.<br>

To fix this, you need to have an empty line between such elements.

Example of **good** element placement (ignore the backslashes):
```
## Some Header

\```lua
  function someLuaCode()
    doSomething()
  end
\```

Some example description of a [Lua](https://www.lua.org/) function.
```

### Linking to files and displaying images

You can link to local and external files and images using normal markdown links.

NOTE - The root for local file links is the `static` folder, so if you have for example an image in `static/img/myImage.png`,<br>
you can link that image like so: `[someLink](img/myImage.png)`.

To *display* an image instead of linking to it, use an exclamation mark in front of the link, like so `![image](img/myImage.png)`.<br>

### Additional Notes

Please avoid making huge changes in one go (e.g. avoid adding 5 pages with a huge ton of text at once).<br>
Every change is manually reviewed. If a huge amount of content is changed, that means it will take much<br>
longer than usual until the changes are reviewed and applied to the website.




