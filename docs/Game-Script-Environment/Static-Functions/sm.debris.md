---
sidebar_position: 17
title: sm.debris
hide_title: true
sidebar-label: 'sm.debris'
---

<br></br>

## sm.debris

<strong>Debris</strong> are visual objects that have no impact on any other object.

## Functions

### createDebris

```lua
sm.debris.createDebris( uuid, position, rotation, velocity, angularVelocity, color, time )
```
<code>Client-Only</code> <br></br>

Create visual debris of a [shape](/lua/Game-Script-Environment/Userdata/Shape) from its [uuid](/lua/Game-Script-Environment/Userdata/Uuid), that collides with world objects but does not have an impact on them.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The shape uuid.
- <code>position</code> [<strong> vec3 </strong>]: The position.
- <code>rotation</code> [<strong> quat </strong>]: The rotation.
- <code>velocity</code> [<strong> vec3 </strong>]: The linear velocity.
- <code>angularVelocity</code> [<strong> vec3 </strong>]: The angular velocity in radians per second around the axes (x,y,z). Defaults to zero.
- <code>color</code> [<strong> color </strong>]: The color. Defaults to the shape's default color.
- <code>time</code> [<strong> number </strong>]: The time after which the debris disappears. Defaults to 10 seconds.

---





















