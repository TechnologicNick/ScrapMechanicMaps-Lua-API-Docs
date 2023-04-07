---
sidebar_position: 11
title: GuiInterface
hide_title: true
sidebar-label: 'GuiInterface'
---

<br></br>

## GuiInterface

A userdata object representing a <strong>GUI interface</strong>.

A <strong>GUI interface</strong> is an adapter between a script and a GUI.

Can only be used on the [client](/lua/#client)

<strong>Values:</strong>

- <code>id</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The id of the effect.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>GuiInterface</code> == <code>GuiInterface</code> | Checks if two instances of <code>GuiInterface</code> refer to the same <code>GuiInterface</code>. |

## Functions

### addGridItem

```lua
guiInterface:addGridItem( gridName, item )
```
<code>Client-Only</code> <br></br>

Adds an item to a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>item</code> [<strong> table </strong>]: The item.

---

### addGridItemsFromFile

```lua
guiInterface:addGridItemsFromFile( gridName, jsonPath, additionalData )
```
<code>Client-Only</code> <br></br>

Adds an item to a grid from a JSON file.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>jsonPath</code> [<strong> string </strong>]: The path to the JSON file.
- <code>additionalData</code> [<strong> table </strong>]: Additional data (optional).

---

### addListItem

```lua
guiInterface:addListItem( listName, itemName, data )
```
<code>Client-Only</code> <br></br>

Appends an item to a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>listName</code> [<strong> string </strong>]: The name of the list.
- <code>itemName</code> [<strong> string </strong>]: The name of the item.
- <code>data</code> [<strong> table </strong>]: Table of data to store.

---

### addToPickupDisplay

```lua
guiInterface:addToPickupDisplay( uuid, amount )
```
<code>Client-Only</code> <br></br>

Adds a block, part or tool to the item pickup display in the bottom right corner.

:::info note
This function only works on a **[Survival HUD](/Game-Script-Environment/Static-Functions/sm.gui#createsurvivalhudgui)** GUI!
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The SurvivalHud guiInterface.
- <code>uuid</code> [<strong> Uuid </strong>]: The uuid of the item that was picked up. Must be a block, part or tool.
- <code>amount</code> [<strong> number </strong>]: The amount of the item that was picked up.

---

### clearGrid

```lua
guiInterface:clearGrid( gridName )
```
<code>Client-Only</code> <br></br>

Clears a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.

---

### clearList

```lua
guiInterface:clearList( listName )
```
<code>Client-Only</code> <br></br>

Clears a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>listName</code> [<strong> string </strong>]: The name of the list.

---

### close

```lua
guiInterface:close()
```
<code>Client-Only</code> <br></br>

Closes the GUI.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.

---

### createDropDown

```lua
guiInterface:createDropDown( widgetName, functionName, options )
```
<code>Client-Only</code> <br></br>

Creates a dropdown menu at the specified widget.

:::info note
The given callback function is also called when [setSelectedDropDownItem](#setselecteddropdownitem) is used!
:::

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>option</code> [<strong> string </strong>]: The option that was selected in the dropdown.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widgetName</code> [<strong> string </strong>]: The name of the widget.
- <code>functionName</code> [<strong> string </strong>]: The name of the callback function.
- <code>options</code> [<strong> table </strong>]: The options in the dropdown menu.

---

### createGridFromJson

```lua
guiInterface:createGridFromJson( gridName, data )
```
<code>Client-Only</code> <br></br>

Creates a grid from a table.

<strong>Valid grid types are:</strong> <br></br>

- <code>processGrid</code>
- <code>materialGrid</code>
- <code>itemGrid</code>

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>data</code> [<strong> table </strong>]: The grid data (see table below).

```lua title="Grid Data Table Structure"
{
	type = string,
	layout = string,
	itemTop = ???,
	itemLeft = ???,
	itemWidth = int,
	itemHeight = int,
	itemCount = int
}
```

---

### createHorizontalSlider

```lua
guiInterface:createHorizontalSlider( widget, range, value, callback, enableNumbers )
```
<code>Client-Only</code> <br></br>

Creates a horizontal slider with the specified widget.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>newPos</code> [<strong> number </strong>]: The new position of the slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>range</code> [<strong> number </strong>]: The slider range.
- <code>value</code> [<strong> number </strong>]: The slider position.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function to be called when the user interacts with the slider.
- <code>enableNumbers</code> [<strong> bool </strong>]: Whether the slider should have numbers on it or not. Defaults to false.

---

### createVerticalSlider

```lua
guiInterface:createVerticalSlider( widget, range, value, callback )
```
<code>Client-Only</code> <br></br>

Creates a vertical slider with the specified widget.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>newPos</code> [<strong> number </strong>]: The new position of the slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>range</code> [<strong> number </strong>]: The slider range.
- <code>value</code> [<strong> number </strong>]: The slider position.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function to be called when the user interacts with the slider.

---

### destroy

```lua
guiInterface:destroy()
```
<code>Client-Only</code> <br></br>

Destroys the guiInterface object.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.

---

### isActive

```lua
guiInterface:isActive()
```
<code>Client-Only</code> <br></br>

Returns whether the GUI is currently open.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the GUI is open or not.

---

### open

```lua
guiInterface:open()
```
<code>Client-Only</code> <br></br>

Opens the GUI.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.

---

### playEffect

```lua
guiInterface:playEffect( widget, effect, restart )
```
<code>Client-Only</code> <br></br>

Plays an effect at a widget.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>effect</code> [<strong> string </strong>]: The name of the effect.
- <code>restart</code> [<strong> bool </strong>]: Whether the effect should restart or not.

---

### playGridEffect

```lua
guiInterface:playGridEffect( gridName, index, effectName, restart )
```
<code>Client-Only</code> <br></br>

Plays an effect at a widget inside a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>index</code> [<strong> number </strong>]: The index of the grid.
- <code>effectName</code> [<strong> string </strong>]: The name of the effect.
- <code>restart</code> [<strong> bool </strong>]: Whether the effect should restart or not.

---

### setButtonCallback

```lua
guiInterface:setButtonCallback( button, callback )
```
<code>Client-Only</code> <br></br>

Binds a Lua callback to a button widget.
The callback is called when the button widget is clicked.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>name</code> [<strong> string </strong>]: The name of the button that was clicked.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>button</code> [<strong> string </strong>]: The name of the button widget.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setButtonState

```lua
guiInterface:setButtonState( button, state )
```
<code>Client-Only</code> <br></br>

Sets the state of a button widget.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>button</code> [<strong> string </strong>]: The name of the button widget.
- <code>state</code> [<strong> bool </strong>]: The state to set.

---

### setColor

```lua
guiInterface:setColor( widget, color )
```
<code>Client-Only</code> <br></br>

Sets the color of a widget.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>color</code> [<strong> color </strong>]: The color to set.

---

### setContainer

```lua
guiInterface:setContainer( gridName, container )
```
<code>Client-Only</code> <br></br>

Sets a container to a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>container</code> [<strong> container </strong>]: The container.

---

### setContainers

```lua
guiInterface:setContainers( gridName, containers )
```
<code>Client-Only</code> <br></br>

Sets multiple containers to a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>container</code> [<strong> table </strong>]: The table of containers.

---

### setData

```lua
guiInterface:setData( widget, data )
```
<code>Client-Only</code> <br></br>

Sets data to a widget.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>data</code> [<strong> table </strong>]: The data.

---

### setFadeRange

```lua
guiInterface:setFadeRange( range )
```
<code>Client-Only</code> <br></br>

Sets the fade range for a world GUI.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>range</code> [<strong> number </strong>]: The fade range.

---

### setFocus

```lua
guiInterface:setFocus( widget )
```
<code>Client-Only</code> <br></br>

Sets a widget to receive key focus.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.

---

### setGridButtonCallback

```lua
guiInterface:setGridButtonCallback( buttonName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when a button inside a grid is pressed

Binds a Lua callback to a button widget inside a grid.
The callback is called when the button widget is clicked.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>buttonName</code> [<strong> string </strong>]: The name of the button that was clicked.
- <code>index</code> [<strong> number </strong>]: The grid index of the button.
- <code>itemData</code> [<strong> table </strong>]: Data set to the grid item using <code>setGridItem</code>.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid containing the button.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>buttonName</code> [<strong> string </strong>]: The name of the button widget.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setGridItem

```lua
guiInterface:setGridItem( gridName, index, item )
```
<code>Client-Only</code> <br></br>

Sets an item in a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>index</code> [<strong> number </strong>]: The item index.
- <code>item</code> [<strong> table </strong>]: The item.

---

### setGridItemChangedCallback

```lua
guiInterface:setGridItemChangedCallback( gridName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when a grid item is changed.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setGridMouseFocusCallback

```lua
guiInterface:setGridMouseFocusCallback( buttonName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when a grid widget gets mouse focus.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>buttonName</code> [<strong> string </strong>]: The name of the button.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setGridSize

```lua
guiInterface:setGridSize( gridName, size )
```
<code>Client-Only</code> <br></br>

Sets the size of a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>size</code> [<strong> number </strong>]: The size.

---

### setHost

```lua
guiInterface:setHost( host, bone )
```
<code>Client-Only</code> <br></br>

Sets the host for a world gui.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>host</code> [<strong> Shape/Character </strong>]: The GUI host.
- <code>bone</code> [<strong> string </strong>]: The animation bone to attach to. Optional.

---

### setIconImage

```lua
guiInterface:setIconImage( ItemBox, uuid )
```
<code>Client-Only</code> <br></br>

Sets the icon image to a shape from a uuid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>ItemBox</code> [<strong> string </strong>]: The name of the ItemBox widget.
- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

---

### setImage

```lua
guiInterface:setImage( ImageBox, image )
```
<code>Client-Only</code> <br></br>

Sets the image of an imagebox.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>ImageBox</code> [<strong> string </strong>]: The name of the ImageBox widget.
- <code>image</code> [<strong> string </strong>]: The path to the image file.

---

### setItemIcon

```lua
guiInterface:setItemIcon( ImageBox, itemResource, itemGroup, itemName )
```
<code>Client-Only</code> <br></br>

Sets the resource, group and item name on an ImageBox widget

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>ImageBox</code> [<strong> string </strong>]: The name of the ImageBox widget.
- <code>itemResource</code> [<strong> string </strong>]: The item resource.
- <code>itemGroup</code> [<strong> string </strong>]: The item group.
- <code>itemName</code> [<strong> string </strong>]: The item name.

---

### setListSelectionCallback

```lua
guiInterface:setListSelectionCallback( listName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when a list selection is changed.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>listName</code> [<strong> string </strong>]: The name of the list.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setMaxRenderDistance

```lua
guiInterface:setMaxRenderDistance( distance )
```
<code>Client-Only</code> <br></br>

Sets the maximum render distance for a world GUI.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>distance</code> [<strong> number </strong>]: The max render distance.

---

### setMeshPreview

```lua
guiInterface:setMeshPreview( widgetName, uuid )
```
<code>Client-Only</code> <br></br>

Sets a mesh preview to display an item from uuid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widgetName</code> [<strong> string </strong>]: The name of the widget.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the item to display.

---

### setOnCloseCallback

```lua
guiInterface:setOnCloseCallback( callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when the GUI is closed.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setRequireLineOfSight

```lua
guiInterface:setRequireLineOfSight( state )
```
<code>Client-Only</code> <br></br>

Sets if a world GUI requires line of sight to be visible.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>state</code> [<strong> bool </strong>]: Whether the GUI requires line of sight or not.

---

### setSelectedDropDownItem

```lua
guiInterface:setSelectedDropDownItem( name, item )
```
<code>Client-Only</code> <br></br>

Selects an option in a dropdown menu.

:::caution warning
Using this function will also trigger the given dropdown's callback function. <br></br>
If used wrong, this can create an infinite loop!
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>name</code> [<strong> string </strong>]: The name of the dropdown menu's host widget.
- <code>item</code> [<strong> string </strong>]: The dropdown item to select.

---

### setSelectedListItem

```lua
guiInterface:setSelectedListItem( listName, itemName )
```
<code>Client-Only</code> <br></br>

Selects an item in a list.

:::info note
Lists are currently not implemented for custom GUI layouts and do not work.
:::

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>listName</code> [<strong> string </strong>]: The name of the list.
- <code>itemName</code> [<strong> string </strong>]: The name of the item.

---

### setSliderCallback

```lua
guiInterface:setSliderCallback( sliderName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when the slider is moved.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>sliderName</code> [<strong> string </strong>]: The name of the slider.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setSliderData

```lua
guiInterface:setSliderData( sliderName, range, position )
```
<code>Client-Only</code> <br></br>

Sets the position and range of a slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>sliderName</code> [<strong> string </strong>]: The name of the slider.
- <code>range</code> [<strong> number </strong>]: The range of the slider.
- <code>position</code> [<strong> number </strong>]: The position of the slider.

---

### setSliderPosition

```lua
guiInterface:setSliderPosition( sliderName, position )
```
<code>Client-Only</code> <br></br>

Sets the position of a slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>sliderName</code> [<strong> string </strong>]: The name of the slider.
- <code>position</code> [<strong> number </strong>]: The position of the slider.

---

### setSliderRange

```lua
guiInterface:setSliderRange( sliderName, range )
```
<code>Client-Only</code> <br></br>

Sets the range of a slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>sliderName</code> [<strong> string </strong>]: The name of the slider.
- <code>range</code> [<strong> number </strong>]: The range of the slider.

---

### setSliderRangeLimit

```lua
guiInterface:setSliderRangeLimit( sliderName, limit )
```
<code>Client-Only</code> <br></br>

Sets the range limit of a slider.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>sliderName</code> [<strong> string </strong>]: The name of the slider.
- <code>limit</code> [<strong> number </strong>]: The range limit of the slider.

---

### setText

```lua
guiInterface:setText( widget, text )
```
<code>Client-Only</code> <br></br>

Sets text on a widget that supports it.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>text</code> [<strong> string </strong>]: The text to set.

---

### setTextAcceptedCallback

```lua
guiInterface:setTextAcceptedCallback( editBoxName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when a user submits <br></br>
text into an EditBox widget.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>name</code> [<strong> string </strong>]: The name of the TextBox that the text was entered into.
- <code>text</code> [<strong> string </strong>]: The text that was submitted.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>editBoxName</code> [<strong> string </strong>]: The name of the EditBox.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setTextChangedCallback

```lua
guiInterface:setTextChangedCallback( editBoxName, callback )
```
<code>Client-Only</code> <br></br>

Sets a callback to be called when the text in an EditBox widget changes.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>name</code> [<strong> string </strong>]: The name of the TextBox that the text was entered into.
- <code>text</code> [<strong> string </strong>]: The new text in the TextBox.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>editBoxName</code> [<strong> string </strong>]: The name of the EditBox.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function.

---

### setVisible

```lua
guiInterface:setVisible( widget, state )
```
<code>Client-Only</code> <br></br>

Sets whether a widget is visible or not.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>state</code> [<strong> bool </strong>]: Whether the widget is visible or not.

---

### setWorldPosition

```lua
guiInterface:setWorldPosition( pos, world )
```
<code>Client-Only</code> <br></br>

Sets the world position for a world GUI.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>pos</code> [<strong> vec3 </strong>]: The position.
- <code>world</code> [<strong> world </strong>]: The world, defaults to same as the script.

---

### stopEffect

```lua
guiInterface:stopEffect( widget, effect, immediate )
```
<code>Client-Only</code> <br></br>

Stops an effect playing at a widget.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>widget</code> [<strong> string </strong>]: The name of the widget.
- <code>effect</code> [<strong> string </strong>]: The name of the effect.
- <code>immediate</code> [<strong> bool </strong>]: Whether the effect should stop immediately or not.

---

### stopGridEffect

```lua
guiInterface:stopGridEffect( gridName, index, effectName )
```
<code>Client-Only</code> <br></br>

Stops an effect playing inside a grid.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>gridName</code> [<strong> string </strong>]: The name of the grid.
- <code>index</code> [<strong> number </strong>]: The grid index.
- <code>effect</code> [<strong> string </strong>]: The name of the effect.

---

### trackQuest

```lua
guiInterface:trackQuest( name, title, mainQuest, questTasks )
```
<code>Client-Only</code> <br></br>

Adds a quest to the quest tracker.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>name</code> [<strong> string </strong>]: The name of the quest.
- <code>title</code> [<strong> string </strong>]: The quest title to be displayed in the tracker.
- <code>mainQuest</code> [<strong> bool </strong>]: Whether the quest is a main quest (displayed on top in the tracker) or not.
- <code>questTasks</code> [<strong> table </strong>]: The table of quest tasks to display in the log task. See structure below.

```lua title="questTasks Table Structure"
{
	name = string,
	text = string,
	count = number,
	target = number,
	complete = bool
}
```

---

### untrackQuest

```lua
guiInterface:untrackQuest( name )
```
<code>Client-Only</code> <br></br>

Removes a quest from the quest tracker.

<strong>Arguments:</strong> <br></br>

- <code>guiInterface</code> [<strong> guiInterface </strong>]: The guiInterface.
- <code>name</code> [<strong> string </strong>]: The name of the quest.

---
