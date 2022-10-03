---
sidebar_position: 37
title: sm.physics
hide_title: true
sidebar-label: 'sm.physics'
---

<br></br>

## sm.physics

Contains functions regarding the physics engine.

[Constants](/lua/Game-Script-Environment/Constants#smphysicsfilter)

## Functions

### applyImpulse

```lua
sm.physics.applyImpulse( target, impulse, worldSpace, offset )
```

Applies an impulse to an object, changing its velocity immediately. <br></br>
The impulse is applied to the object's center point with an optional offset.

<strong>Arguments:</strong> <br></br>

- <code>target</code> [<strong> shape/body/character </strong>]: The target that the impulse is applied to.
- <code>impulse</code> [<strong> vec3 </strong>]: The direction and strength of the impulse.
- <code>worldSpace</code> [<strong> bool </strong>]: Whether the impulse is applied in world space (global) coordinates. Defaults to local.
- <code>offset</code> [<strong> vec3 </strong>]: The offset from the center point. Defaults to none.

---

### applyTorque

```lua
sm.physics.applyTorque( target, torque, worldSpace )
```

Applies a torque impulse to a [Body](/lua/Game-Script-Environment/Userdata/Body), changing its angular velocity immediately. <br></br>
The torque is applied along the body's center of mass, making it rotate.

<strong>Arguments:</strong> <br></br>

- <code>target</code> [<strong> body </strong>]: The body that the torque is applied to.
- <code>torque</code> [<strong> vec3 </strong>]: The direction and strength of the torque.
- <code>worldSpace</code> [<strong> bool </strong>]: Whether the torque is applied in world space (global) coordinates. Defaults to local.

---

### distanceRaycast

```lua
sm.physics.distanceRaycast( start, direction )
```

Performs a distance [ray cast](https://en.wikipedia.org/wiki/Ray_casting) from a position in a given direction.

<strong>Arguments:</strong> <br></br>

- <code>start</code> [<strong> vec3 </strong>]: The start position.
- <code>direction</code> [<strong> vec3 </strong>]: The ray's direction and length.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the raycast was successful or not.
- [<strong> number </strong>]: The fraction (0.0 - 1.0) of the distance reached until collision.

---

### explode

```lua
sm.physics.explode( position, level, destructionRadius, impulseRadius, magnitude, effectName, ignore, parameters )
```
<code>Server-Only</code> <br></br>

Creates an explosion at given position. <br></br>
The explosion creates a shockwave that is capable of destroying blocks and pushing characters and creations away.

Shapes that are within the explosion's destruction radius may receive the event [server_onExplosion](/lua/Game-Script-Environment/Classes/ShapeClass#onexplosion).

:::info note
The <strong>destruction level</strong> is the damage effect on blocks and parts, determining how likely it is that they are destroyed. <br></br>
This is related to the <code>qualityLevel</code> found in parts json-files.

Any quality level equal to or less than the destruction level may be destroyed. <br></br>
The effect fades one level every half travelled of the remaining destruction radius.

A quality level of 0 means a block or part is indestructible.
:::

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> vec3 </strong>]: The center point of the explosion.
- <code>level</code> [<strong> int </strong>]: The destruction level affecting nearby objects.
- <code>destructionRadius</code> [<strong> number </strong>]: The destruction radius. Objects inside this sphere may be destroyed.
- <code>impulseRadius</code> [<strong> number </strong>]: The impulse radius. Objects inside this sphere are affected by an impulse.
- <code>magnitude</code> [<strong> number </strong>]: The impulse strength of the explosion. The strength diminishes with distance.
- <code>effectName</code> [<strong> string </strong>]: The name of the effect to be played upon explosion. Optional.
- <code>ignore</code> [<strong> Shape </strong>]: The shape to be ignored. Optional.
- <code>parameters</code> [<strong> table </strong>]: A table containing parameters for the effect. Optional.

---

### getGravity

```lua
sm.physics.getGravity()
```
<code>Server-Only</code> <br></br>

Returns the gravitational acceleration affecting [shapes](/lua/Game-Script-Environment/Userdata/Shape) and [bodies](/lua/Game-Script-Environment/Userdata/Body).

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The gravitational value.

---

### getGroundMaterial

```lua
sm.physics.getGroundMaterial( position )
```

Returns the terrain material at the given position.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> vec3 </strong>]: The position.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The terrain material at the position.

---

### getSphereContacts

```lua
sm.physics.getSphereContacts( position, radius )
```
<code>Server-Only</code> <br></br>

Returns a table of the objects that were found inside the given sphere.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> vec3 </strong>]: The position of the sphere.
- <code>radius</code> [<strong> number </strong>]: The radius of the sphere.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table containing tables of objects found inside the sphere. See structure below.

```lua title="Table Structure"
{
	bodies = {
		Body1,
		Body2,
		...
	},
	characters = {
		Character1,
		Character2,
		...
	},
	harvestables = {
		Harvestable1,
		Harvestable2,
		...
	},
	lifts = {
		Lift1,
		Lift2,
		...
	}
}
```

---

### multicast

```lua
sm.physics.multicast( casts )
```

Performs multiple sphere and/or raycasts given a table of parameters.

Type can be "sphere" or "ray". Radius is ignored for rays.

<strong>Arguments:</strong> <br></br>

- <code>casts</code> [<strong> table </strong>]: The table of casts to perform. See 'casts' table structure below.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: An array of tables containing <code>bool</code> and <code>raycastResult</code> for each cast.

```lua title="'casts' Table Structure"
{
	{
		type = "ray",					--The cast type.
		startPoint = vec3,				--The start point.
		endPoint = vec3,				--The end point.
		mask = sm.physics.filter.all	--The cast filter.
	},
	{
		type = "sphere",				--The cast type.
		startPoint = vec3,				--The start point.
		endPoint = vec3,				--The end point.
		radius = 5,						--The sphere radius.
		mask = sm.physics.filter.all	--The cast filter.
	},
	...									--etc.
}
```
```lua title="Returned Table Structure"
{
	{
		true,			--Whether the cast is valid or not.
		raycastResult	--The cast result data.
	},
	{
		true,			--Whether the cast is valid or not.
		raycastResult	--The cast result data.
	},
	...					--etc.
}
```

---

### raycast

```lua
sm.physics.raycast( startPos, endPos, ignore, mask )
```

Performs a [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions.

The returned [RaycastResult](/lua/Game-Script-Environment/Userdata/RaycastResult) contains information about any object intersected by the ray.

If the ray cast is called from within a shape (e.g. a Sensor), a [Body](/lua/Game-Script-Environment/Userdata/Body) may be provided which the ray will not intersect.

<strong>Arguments:</strong> <br></br>

- <code>startPos</code> [<strong> vec3 </strong>]: The start position.
- <code>endPos</code> [<strong> vec3 </strong>]: The end position.
- <code>ignore</code> [<strong> Shape/Body/Character/? </strong>]: The object to ignore. Defaults to none.
- <code>mask</code> [<strong> int </strong>]: The collision mask. Defaults to <code>sm.physics.filter.default</code>.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the raycast is valid or not.
- [<strong> raycastResult </strong>]: The raycast result data.

---

### raycastTarget

```lua
sm.physics.raycastTarget( startPos, endPos, target )
```

Performs a [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions to find a specific target.

A target [Body](/lua/Game-Script-Environment/Userdata/Body) or [Character](/lua/Game-Script-Environment/Userdata/Character) must be provided.

The returned [RaycastResult](/lua/Game-Script-Environment/Userdata/RaycastResult) contains information about any object intersected by the ray.

<strong>Arguments:</strong> <br></br>

- <code>startPos</code> [<strong> vec3 </strong>]: The start position.
- <code>endPos</code> [<strong> vec3 </strong>]: The end position.
- <code>target</code> [<strong> Body/Character </strong>]: The object be exclusively checked.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the raycast is valid or not.
- [<strong> raycastResult </strong>]: The raycast result data.

---

### setGravity

```lua
sm.physics.setGravity( gravity )
```
<code>Server-Only</code> <br></br>

Sets the gravitational acceleration affecting [shapes](/lua/Game-Script-Environment/Userdata/Shape) and [bodies](/lua/Game-Script-Environment/Userdata/Body).

<strong>Arguments:</strong> <br></br>

- <code>gravity</code> [<strong> number </strong>]: The gravitational value.

---

### sphereContactCount

```lua
sm.physics.sphereContactCount( worldPosition, radius, includeTerrain, includeWater )
```

Returns the number of collision objects that were found inside the given sphere.

<strong>Arguments:</strong> <br></br>

- <code>worldPosition</code> [<strong> vec3 </strong>]: The sphere position.
- <code>radius</code> [<strong> number </strong>]: The sphere radius.
- <code>includeTerrain</code> [<strong> bool </strong>]: Whether terrain should be included in the test. Defaults to false.
- <code>includeWater</code> [<strong> bool </strong>]: Whether water should be included in the test. Defaults to false.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The number of objects.

---

### spherecast

```lua
sm.physics.spherecast( startPos, endPos, radius, ignore, mask )
```

Performs a spherical [ray cast](https://en.wikipedia.org/wiki/Ray_casting) between two positions.

The returned [RaycastResult](/lua/Game-Script-Environment/Userdata/RaycastResult) contains information about any object intersected by the ray.

If the ray cast is called from within a shape (e.g. a Sensor), a [Body](/lua/Game-Script-Environment/Userdata/Body) may be provided which the ray will not intersect.

<strong>Arguments:</strong> <br></br>

- <code>startPos</code> [<strong> vec3 </strong>]: The start position.
- <code>endPos</code> [<strong> vec3 </strong>]: The end position.
- <code>radius</code> [<strong> number </strong>]: The radius of the sphere.
- <code>ignore</code> [<strong> Shape/Body/Character </strong>]: The object to ignore. Defaults to none.
- <code>mask</code> [<strong> int </strong>]: The collision mask. Defaults to <code>sm.physics.filter.default</code>.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the raycast is valid or not.
- [<strong> raycastResult </strong>]: The raycast result data.

---

