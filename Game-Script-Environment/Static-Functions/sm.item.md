---
sidebar_position: 26
title: sm.item
hide_title: true
sidebar-label: 'sm.item'
---

<br></br>

## sm.item

Allows checking for static information about items.

## Functions

### getCharacterShape

```lua
sm.item.getCharacterShape( uuid )
```

Returns data for the character [shape](/lua/Game-Script-Environment/Userdata/Shape).

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The character shape data.

---

### getEdible

```lua
sm.item.getEdible( uuid )
```

Returns data for the edible [shape](/lua/Game-Script-Environment/Userdata/Shape).

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The edible shape data.

---

### getFeatureData

```lua
sm.item.getFeatureData( uuid )
```

Returns the shape's feature data.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The feature data.

---

### getInteractablesUuidsOfType

```lua
sm.item.getInteractablesUuidsOfType()
```

Returns a table of all interactable uuids of an interactable type.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of interactable uuids.

---

### getPlantable

```lua
sm.item.getPlantable( uuid )
```

Returns data for the plantable [shape](/lua/Game-Script-Environment/Userdata/Shape).

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The plantable shape data.

---

### getPlantableUuids

```lua
sm.item.getPlantableUuids()
```

Returns a table of all plantable uuids.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of plantable uuids.

---

### getQualityLevel

```lua
sm.item.getQualityLevel( uuid )
```

Returns the quality level of the shape.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The quality level.

---

### getShapeDefaultColor

```lua
sm.item.getShapeDefaultColor( uuid )
```

Returns the default color of the shape.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> color </strong>]: The color.

---

### getShapeOffset

```lua
sm.item.getShapeOffset( uuid )
```

Returns the shape offset.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The offset.

---

### getShapeSize

```lua
sm.item.getShapeSize( uuid )
```

Returns the block dimensions of a shape.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The shape size.

---

### isBlock

```lua
sm.item.isBlock( uuid )
```

Returns whether the item is a block or not.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the item is a block or not.

---

### isHarvestablePart

```lua
sm.item.isHarvestablePart( uuid )
```

Returns whether the uuid belongs to a harvestable shape.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the uuid belongs to a harvestable shape or not.

---

### isJoint

```lua
sm.item.isJoint( uuid )
```

Returns whether the item is a joint or not.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the item is a joint or not.

---

### isPart

```lua
sm.item.isPart( uuid )
```

Returns whether the item is a part or not.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the item is a part or not.

---

### isTool

```lua
sm.item.isTool( uuid )
```

Returns whether the item is a tool or not.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the item is a tool or not.

---




