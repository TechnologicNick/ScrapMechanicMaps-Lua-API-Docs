---
sidebar_position: 4
title: Body
hide_title: true
sidebar-label: 'Body'
---

<br></br>

## Body

**Associated namespace:** [sm.body](/lua/Game-Script-Environment/Static-Functions/sm.body)

A userdata object representing a <strong>body</strong> in the game.

<strong>Values:</strong>

- <code>angularVelocity</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The angular velocity of the body.


- <code>buildable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is buildable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is buildable.


- <code>centerOfMassPosition </code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The center of mass world position of a body.


- <code>connectable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is connectable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is connectable.


- <code>convertableToDynamic</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is convertible to dynamic or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is convertible to dynamic.


- <code>destructable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is destructable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is destructable.


- <code>erasable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is erasable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is erasable.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the body.


- <code>liftable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is liftable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is liftable.


- <code>mass</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The mass of the body.


- <code>paintable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is paintable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is paintable.


- <code>usable</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the body is interactable or not.
	- <code>Set</code>: (Server-Only) Controls whether a body is interactable.


- <code>velocity</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The linear velocity of the body.


- <code>worldPosition</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The world position of the body.


- <code>worldRotation</code> [<strong> quat </strong>] <br></br>

	- <code>Get</code>: The world rotation of the body.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Body</code> == <code>Body</code> | Checks if two instances of <code>Body</code> refer to the same <code>Body</code>. |

## Functions

### createBlock

```lua
body:createBlock( uuid, size, position, forceAccept )
```
<code>Server-Only</code> <br></br>

Creates a block on the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>uuid</code> [<strong> uuid </strong>]: 	The uuid of the shape.
- <code>size</code> [<strong> vec3 </strong>]: The shape's size.
- <code>position</code> [<strong> vec3 </strong>]: The shape's local position.
- <code>forceAccept</code> [<strong> bool </strong>]: Set true to force the body to accept the shape. (Defaults to true)

<strong>Returns:</strong> <br></br>

- [<strong> shape </strong>]: The created shape.

---

### createPart

```lua
body:createPart( uuid, position, z-axis, x-axis, forceAccept )
```
<code>Server-Only</code> <br></br>

Creates a part on the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>uuid</code> [<strong> uuid </strong>]: 	The uuid of the shape.
- <code>position</code> [<strong> vec3 </strong>]: The shape's local position.
- <code>z-axis</code> [<strong> Vec3 </strong>]: The shape's local z direction.
- <code>x-axis</code> [<strong> Vec3 </strong>]: The shape's local x direction.
- <code>forceAccept</code> [<strong> bool </strong>]: Set true to force the body to accept the shape. (Defaults to true)

<strong>Returns:</strong> <br></br>

- [<strong> shape </strong>]: The created shape.


---

### getAllSeatedCharacter

```lua
body:getAllSeatedCharacter()
```
<code>Server-Only</code> <br></br>

Returns a table with all seated characters in this body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of all seated characters.

---

### getAngularVelocity

```lua
body:getAngularVelocity()
```
<code>Server + Client</code> <br></br>

Returns the angular velocity of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The body's angular velocity.

---

### getCenterOfMassPosition

```lua
body:getCenterOfMassPosition()
```
<code>Server + Client</code> <br></br>

Returns the center of mass world position of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The body's center of mass position.

---

### getCreationBodies

```lua
body:getCreationBodies()
```
<code>Server + Client</code> <br></br>

Returns a table of all bodies in the creation.

A creation includes all bodies connected by [joints](/lua/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of all bodies in the creation. 

---

### getCreationId

```lua
body:getCreationId()
```
<code>Server-Only</code> <br></br>

Returns the id of the creation.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id of the creation. 

---

### getCreationJoints

```lua
body:getCreationJoints()
```
<code>Server + Client</code> <br></br>

Returns a table of all [joints](/lua/Game-Script-Environment/Userdata/Joint) that are part of the creation.

A creation includes all bodies connected by [joints](/lua/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of joints in the creation.

---

### getCreationShapes

```lua
body:getCreationShapes()
```
<code>Server + Client</code> <br></br>

Returns a table of all [shapes](/lua/Game-Script-Environment/Userdata/Shape) that are part of the creation.

A creation includes all bodies connected by [joints](/lua/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of shapes in the creation.

---

### getId

```lua
body:getId()
```
<code>Server + Client</code> <br></br>

Returns the id of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id of the body.

---

### getInteractables

```lua
body:getInteractables()
```
<code>Server + Client</code> <br></br>

Returns a table of all [interactables](/lua/Game-Script-Environment/Userdata/Interactable) that are part of a body.

This will <strong>not</strong> return interactables in neighbouring bodies connected by [joints](/lua/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of interactables in the body.

---

### getJoints

```lua
body:getJoints()
```
<code>Server + Client</code> <br></br>

Returns a table of all [joints](/lua/Game-Script-Environment/Userdata/Joint) that are part of a body.

This will <strong>not</strong> return joints in neighbouring bodies.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of joints in the body.

---

### getLocalAabb

```lua
body:getLocalAabb()
```
<code>Server + Client</code> <br></br>

Returns the local aabb of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The aabb min.
- [<strong> vec3 </strong>]: The aabb max.

---

### getMass

```lua
body:getMass()
```
<code>Server + Client</code> <br></br>

Returns the mass of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The mass of the body.

---

### getShapes

```lua
body:getShapes()
```
<code>Server + Client</code> <br></br>

Returns a table of all [shapes](/lua/Game-Script-Environment/Userdata/Shape) that are part of the body.

This will <strong>not</strong> return shapes in neighbouring bodies connected by [joints](/lua/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of shapes in the body.

---

### getVelocity

```lua
body:getVelocity()
```
<code>Server + Client</code> <br></br>

Returns the linear velocity of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The linear velocity of the body.

---

### getWorld

```lua
body:getWorld()
```
<code>Server + Client</code> <br></br>

Returns the world that the body exists in.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> world </strong>]: The world of the body.

---

### getWorldAabb

```lua
body:getWorldAabb()
```
<code>Server + Client</code> <br></br>

Returns the world aabb of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The aabb min.
- [<strong> vec3 </strong>]: The aabb max.

---

### getWorldPosition

```lua
body:getWorldPosition()
```
<code>Server + Client</code> <br></br>

Returns the world position of the body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The body's world position.

---

### hasChanged

```lua
body:hasChanged( tick )
```
<code>Server + Client</code> <br></br>

Returns true if the given tick is lower than the tick the body was last changed.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>tick</code> [<strong> int </strong>]: The tick.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True if the body has changed.

---

### isBuildable

```lua
body:isBuildable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is buildable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is buildable or not.

---

### isConnectable

```lua
body:isConnectable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is connectable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is connectable or not.

---

### isConvertibleToDynamic

```lua
body:isConvertibleToDynamic()
```
<code>Server + Client</code> <br></br>

Returns whether the body is convertable to dynamic or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is convertable to dynamic or not.

---

### isDestructable

```lua
body:isDestructable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is destructable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is destructable or not.

---

### isDynamic

```lua
body:isDynamic()
```
<code>Server + Client</code> <br></br>

Returns whether the body is dynamic or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is dynamic or not.

---

### isErasable

```lua
body:isErasable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is erasable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is erasable or not.

---

### isLiftable

```lua
body:isLiftable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is liftable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is liftable or not.

---

### isOnLift

```lua
body:isOnLift()
```
<code>Server + Client</code> <br></br>

Returns whether the body is on a lift or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is on a lift or not.

---

### isPaintable

```lua
body:isPaintable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is paintable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is paintable or not.

---

### isStatic

```lua
body:isStatic()
```
<code>Server + Client</code> <br></br>

Returns whether the body is static or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is static or not.

---

### isUsable

```lua
body:isUsable()
```
<code>Server + Client</code> <br></br>

Returns whether the body is interactable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the body is interactable or not.

---

### setBuildable

```lua
body:setBuildable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is buildable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is buildable or not.

---

### setConnectable

```lua
body:setConnectable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is connectable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is connectable or not.

---

### setConvertibleToDynamic

```lua
body:setConvertibleToDynamic( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is convertible to dynamic or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is convertible to dynamic or not.

---

### setDestructable

```lua
body:setDestructable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is destructable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is destructable or not.

---

### setErasable

```lua
body:setErasable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is erasable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is erasable or not.

---

### setLiftable

```lua
body:setLiftable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is liftable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is liftable or not.

---

### setPaintable

```lua
body:setPaintable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is paintable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is paintable or not.

---

### setUsable

```lua
body:setUsable( state )
```
<code>Server-Only</code> <br></br>

Controls whether the body is interactable or not.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>state</code> [<strong> bool </strong>]: Whether the body is interactable or not.

---

### transformPoint

```lua
body:transformPoint( point )
```
<code>Server + Client</code> <br></br>

Transforms a point from local space to world space.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.
- <code>point</code> [<strong> vec3 </strong>]: The point in local space.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> vec3 </strong>]: The point in world space.

---




















