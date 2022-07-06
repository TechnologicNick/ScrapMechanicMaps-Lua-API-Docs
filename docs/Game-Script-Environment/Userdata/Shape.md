---
sidebar_position: 24
title: Shape
hide_title: true
sidebar-label: 'Shape'
---

<br></br>

## Shape

**Associated namespace:** [sm.shape](/lua/Game-Script-Environment/Static-Functions/sm.shape)

A userdata object representing a <strong>shape</strong> in the game.

<strong>Values:</strong>

- <code>at</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The direction of the shape's front side.


- <code>body</code> [<strong> body </strong>] <br></br>

	- <code>Get</code>: The body that the shape is part of.


- <code>buildable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is buildable or not.


- <code>buoyancy</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The buoyancy multiplier of the shape.


- <code>color</code> [<strong> color </strong>] <br></br>

	- <code>Get</code>: The color of the shape.
	- <code>Set</code>: (Server-Only) Sets the color of the shape.


- <code>connectable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is connectable or not.


- <code>convertableToDynamic</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is convertable to dynamic or not.


- <code>destructable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is destructable or not.


- <code>erasable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is erasable or not.


- <code>id</code> [<strong> id </strong>] <br></br>

	- <code>Get</code>: The shape's id.


- <code>interactable</code> [<strong> interactable </strong>] <br></br>

	- <code>Get</code>: The interactable of the shape, if it exists.


- <code>isBlock</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is a block or not.


- <code>liftable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is liftable or not.


- <code>localPosition</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The local grid position of the shape.


- <code>localRotation</code> [<strong> quat </strong>] <br></br>

	- <code>Get</code>: The local rotation of the shape.


- <code>mass</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The shape's mass.


- <code>material</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The shape's material.


- <code>materialId</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: the shape's material id.


- <code>paintable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is paintable or not.


- <code>right</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The direction of the shape's right side.


- <code>stackedAmount</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The item amount that is stacked in the shape.
	- <code>Set</code>: (Server-Only) Sets the item amount that is stacked in the shape.


- <code>stackedItem</code> [<strong> uuid </strong>] <br></br>

	- <code>Get</code>: The item uuid that is stacked in the shape.
	- <code>Set</code>: (Server-Only) Sets the item uuid that is stacked in the shape.


- <code>up</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The direction of the shape's top side.


- <code>usable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the shape is interactable or not.


- <code>shapeUuid</code> [<strong> uuid </strong>] <br></br>

	- <code>Get</code>: The shape's uuid.


- <code>uuid</code> [<strong> uuid </strong>] <br></br>

	- <code>Get</code>: The shape's uuid.


- <code>velocity</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The shape's linear velocity.


- <code>worldPosition</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The world position of the shape.


- <code>worldRotation</code> [<strong> quat </strong>] <br></br>

	- <code>Get</code>: The world rotation of the shape.


- <code>xAxis</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The local x-axis vector of the shape.


- <code>yAxis</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The local y-axis vector of the shape.


- <code>zAxis</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The local z-axis vector of the shape.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Shape</code> == <code>Shape</code> | Checks if two instances of <code>Shape</code> refer to the same <code>Shape</code>. |

## Functions

### createJoint

```lua
shape:createJoint( uuid, position, direction )
```
<code>Server-Only</code> <br></br>

Creates a joint on the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>uuid</code> [<strong> uuid </strong>]: The joint's uuid.
- <code>position</code> [<strong> vec3 </strong>]: The joint's position.
- <code>direction</code> [<strong> vec3 </strong>]: The joint's normal direction.

<strong>Returns:</strong> <br></br>

- [<strong> joint </strong>]: The created joint.

---

### destroyBlock

```lua
shape:destroyBlock( position, size, attackLevel )
```
<code>Server-Only</code> <br></br>

Destroys a block in the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>position</code> [<strong> vec3 </strong>]: The local position of the removal box corner.
- <code>size</code> [<strong> vec3 </strong>]: The size of the removal box (defaults to 1x1x1).
- <code>attackLevel</code> [<strong> int </strong>]: Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### destroyPart

```lua
shape:destroyPart( attackLevel )
```
<code>Server-Only</code> <br></br>

Destroys the part.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>attackLevel</code> [<strong> int </strong>]: Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### destroyShape

```lua
shape:destroyShape( attackLevel )
```
<code>Server-Only</code> <br></br>

Destroys the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>attackLevel</code> [<strong> int </strong>]: Determines which quality level of block the attack can destroy. Setting it to 0 (default) will destroy any block.

---

### getAt

```lua
shape:getAt()
```

Returns the direction of the shape's front side.

The direction is affected by the shape's rotation in the world.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The direction.

---

### getBody

```lua
shape:getBody()
```

Returns the body that the shape is part of.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> body </strong>]: The body.

---

### getBoundingBox

```lua
shape:getBoundingBox()
```

Returns the bounding box of the shape - the dimensions that the shape occupies.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The bounding box.

---

### getBuoyancy

```lua
shape:getBuoyancy()
```


Returns the buoyancy multiplier of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The buoyancy multiplier.

---

### getClosestBlockLocalPosition

```lua
shape:getClosestBlockLocalPosition( position )
```


Transform a world position to the closest block's local position in a shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>position</code> [<strong> vec3 </strong>]: The world position.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The closest local block position.

---

### getColor

```lua
shape:getColor()
```


Returns the shape's color.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> color </strong>]: The color.

---

### getId

```lua
shape:getId()
```


Returns the shape's id.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id.

---

### getInteractable

```lua
shape:getInteractable()
```


Returns the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) of the shape, if it exists.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> interactable </strong>]: The shape's interactable.

---

### getInterpolatedAt

```lua
shape:getInterpolatedAt()
```


Returns the interpolated direction of the shape's front side.

The direction is affected by the shape's rotation in the world.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The interpolated direction.

---

### getInterpolatedRight

```lua
shape:getInterpolatedRight()
```


Returns the interpolated direction of a shape's right side.

The direction is affected by the shape's rotation in the world.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The interpolated direction.

---

### getInterpolatedUp

```lua
shape:getInterpolatedUp()
```


Returns the interpolated direction of a shape's top side.

The direction is affected by the shape's rotation in the world.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The interpolated direction.

---

### getInterpolatedWorldPosition

```lua
shape:getInterpolatedWorldPosition()
```


Returns the interpolated world position of a shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The interpolated position.

---

### getIsHarvest

```lua
shape:getIsHarvest(uuid)
```


Returns whether the uuid belongs to a harvestable.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the uuid belongs to a harvestable or not.

---

### getIsStackable

```lua
shape:getIsStackable( uuid )
```


Returns whether the uuid belongs to a stackable shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the uuid belongs to a stackable shape or not.

---

### getJoints

```lua
shape:getJoints( onlyChildJoints, onlySubshapes )
```


Returns a table of all [joints](/lua/Game-Script-Environment/Userdata/Joint) that are attached to the shape.

Will return all attached joints when <code>onlyChildJoints</code> is set to false.

Will only get the joints which are subshapes to the shape when <code>onlySubshapes</code> is set to true.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>onlyChildJoints</code> [<strong> bool </strong>]: Filters what joints to return (Optional, defaults to true).
- <code>onlySubshapes</code> [<strong> bool </strong>]: Only get joints which are subshapes to the shape (Optional, defaults to false).

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of attached joints.

---

### getLocalPosition

```lua
shape:getLocalPosition()
```


Returns the local grid position of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The shape's local position.

---

### getLocalRotation

```lua
shape:getLocalRotation()
```


Returns the local grid rotation of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The shape's local rotation.

---

### getMass

```lua
shape:getMass()
```


Returns the shape's mass.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The shape's mass.

---

### getMaterial

```lua
shape:getMaterial()
```


Returns the shape's material.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The material.

---

### getMaterialId

```lua
shape:getMaterialId()
```


Returns the shape's material id.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The material id.

---

### getNeighbours

```lua
shape:getNeighbours()
```
<code>Server-Only</code> <br></br>

Returns a table of "neighbor" shapes that are attached to the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of attached neighbor shapes.

---

### getPipedNeighbours

```lua
shape:getPipedNeighbours()
```
<code>Server-Only</code> <br></br>

Returns a table of piped "neighbor" shapes that are attached to the shape through pipes.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of piped neighbor shapes.

---

### getRight

```lua
shape:getRight()
```


Returns the direction of the shape's right side.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The direction.

---

### getShapeUuid

```lua
shape:getShapeUuid()
```


Returns the shape's uuid.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> uuid </strong>]: The shape's uuid.

---

### getSticky

```lua
shape:getSticky()
```


Returns the sticky directions of the shape for positive xyz and negative xyz.

A value of 1 means that the direction is sticky and a value of 0 means that the direction is not sticky.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The negative sticky directions.
- [<strong> vec3 </strong>]: The positive sticky directions.

---

### getUp

```lua
shape:getUp()
```


Returns the direction of the shape's top side.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The direction.

---

### getVelocity

```lua
shape:getVelocity()
```


Returns the shape's linear velocity.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The velocity.

---

### getWorldPosition

```lua
shape:getWorldPosition()
```


Returns the shape's world position.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The position.

---

### getWorldRotation

```lua
shape:getWorldRotation()
```


Returns the shape's world rotation.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The rotation.

---

### getXAxis

```lua
shape:getXAxis()
```


Returns the local x-axis vector of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The x-axis vector.

---

### getYAxis

```lua
shape:getYAxis()
```


Returns the local y-axis vector of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The y-axis vector.

---

### getZAxis

```lua
shape:getZAxis()
```


Returns the local z-axis vector of the shape.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The z-axis vector.

---

### replaceShape

```lua
shape:replaceShape( uuid )
```
<code>Server-Only</code> <br></br>

Replaces a shape with another.

:::info note
The replacement shape must have the exact same size/bounding box as the current shape!
:::

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the replacement shape.

---

### setColor

```lua
shape:setColor()
```
<code>Server-Only</code> <br></br>

Sets the shape's color.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>color</code> [<strong> color </strong>]: The color.

---

### shapeExists

```lua
shape:shapeExists()
```


:::caution warning
This function is deprecated! <br></br>
Use [sm.exists](/lua/Game-Script-Environment/Static-Functions/sm#exists) instead.
:::

Returns true if the shape exists.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the shape exists or not.

---

### shapesInSphere

```lua
shape.shapesInSphere( center, radius )
```

:::info note
Due to a bug in the game, this function needs to be called with <code>.</code> instead of <code>:</code>.
:::

Returns a table of shapes that are inside the sphere.

<strong>Arguments:</strong> <br></br>

- <code>center</code> [<strong> Vec3 </strong>]: The sphere center position.
- <code>radius</code> [<strong> number </strong>]: The sphere radius.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of shapes in the sphere.

---

### transformDirection

```lua
shape:transformDirection( vector )
```


Transform a world direction to the local shape transform.

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>vector</code> [<strong> vec3 </strong>]: The untransformed direction.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The transformed direction.

---

### transformLocalPoint

```lua
shape:transformLocalPoint( vector )
```


Transforms a local point to world space.

<code>local worldPos = self.shape:transformLocalPoint( localPos )</code> <br></br>

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>vector</code> [<strong> vec3 </strong>]: The local point.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The world point.

---

### transformPoint

```lua
shape:transformPoint( vector )
```


Transforms a world point to the local shape transform.

<code>local localpos = self.shape:transformLocalPoint( worldPos )</code> <br></br>

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>vector</code> [<strong> vec3 </strong>]: The world point.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The local point.

---

### transformRotation

```lua
shape:transformRotation( quat )
```


Transforms a world rotation to the local shape transform.

```lua
local worldUp = sm.vec3.new( 0, 0, 1 )
local worldRot = sm.vec3.getRotation( worldUp, worldDir )
local localRot = self.shape:transformRotation( worldRot )
```

<strong>Arguments:</strong> <br></br>

- <code>shape</code> [<strong> shape </strong>]: The shape.
- <code>quat</code> [<strong> quat </strong>]: The untransformed quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The transformed quaternion.

---

