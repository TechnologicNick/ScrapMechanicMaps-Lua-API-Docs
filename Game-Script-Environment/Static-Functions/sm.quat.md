---
sidebar_position: 41
title: sm.quat
hide_title: true
sidebar-label: 'sm.quat'
---

<br></br>

## sm.quat

**Associated object type:** [Quat](/lua/Game-Script-Environment/Userdata/Quat)

A quaternion is used to represent rotation as a [generalization of complex numbers](https://en.wikipedia.org/wiki/Quaternion).

To create one, use [sm.quat.new](#new).

:::caution warning
It is uncommon to modify individual X, Y, Z, W components directly. <br></br>
To create a new quaternion, consider using [sm.vec3.getRotation](/lua/Game-Script-Environment/Static-Functions/sm.vec3#getRotation).
:::

## Functions

### angleAxis

```lua
sm.quat.angleAxis( angle, axis )
```

Creates a new quaternion from angle and axis.

:::info note
The angle is counterclockwise.
:::

<strong>Arguments:</strong> <br></br>

- <code>angle</code> [<strong> number </strong>]: The rotation angle in radians.
- <code>axis</code> [<strong> vec3 </strong>]: The axis vector to rotate around.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The quaternion for rotating angle radians around an axis.

---

### fromEuler

```lua
sm.quat.fromEuler( euler )
```

Create a new quaternion from an euler angle vector.

<strong>Arguments:</strong> <br></br>

- <code>euler</code> [<strong> vec3 </strong>]: The euler angle vector.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The quaternion.

---

### getAt

```lua
sm.quat.getAt( quat )
```

Returns the quaternion's at vector.

This does the same as doing <code>quat * sm.vec3.new( 0, 0, 1 )</code>.

<strong>Arguments:</strong> <br></br>

- <code>quat</code> [<strong> quat </strong>]: The quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The at vector.

---

### getRight

```lua
sm.quat.getRight( quat )
```

Returns the quaternion's right vector.

This does the same as doing <code>quat * sm.vec3.new( 1, 0, 0 )</code>.

<strong>Arguments:</strong> <br></br>

- <code>quat</code> [<strong> quat </strong>]: The quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The right vector.

---

### getUp

```lua
sm.quat.getUp( quat )
```

Returns the quaternion's up vector.

This does the same as doing <code>quat * sm.vec3.new( 0, 1, 0 )</code>.

<strong>Arguments:</strong> <br></br>

- <code>quat</code> [<strong> quat </strong>]: The quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The up vector.

---

### identity

```lua
sm.quat.identity()
```

Creates a new identity quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The created quaternion.

---

### inverse

```lua
sm.quat.inverse( quat )
```

Inverts the quaternion.

<strong>Arguments:</strong> <br></br>

- <code>quat</code> [<strong> quat </strong>]: The quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The inverted quaternion.

---

### lookRotation

```lua
sm.quat.lookRotation( at, up )
```

:::caution warning
This function is deprecated.
:::

Creates a new quaternion from direction vectors.

<strong>Arguments:</strong> <br></br>

- <code>at</code> [<strong> vec3 </strong>]: The forward vector.
- <code>up</code> [<strong> vec3 </strong>]: The up vector.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The quaternion.

---

### new

```lua
sm.quat.new( x, y, z, w )
```

Creates a new quaternion.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>z</code> [<strong> number </strong>]: The Z value.
- <code>w</code> [<strong> number </strong>]: The W value.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The created quaternion.

---

### round90

```lua
sm.quat.round90( quat )
```

Rounds the quaternion rotation into 90 degree steps.

<strong>Arguments:</strong> <br></br>

- <code>quat</code> [<strong> quat </strong>]: The quaternion.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The rounded quaternion.

---

### slerp

```lua
sm.quat.slerp( quat1, quat2, t )
```

Performs a spherical linear interpolation between two quaternion.

<strong>Arguments:</strong> <br></br>

- <code>quat1</code> [<strong> quat </strong>]: The first quaternion.
- <code>quat2</code> [<strong> quat </strong>]: The second quaternion.
- <code>t</code> [<strong> number </strong>]: The Interpolation amount between the two inputs.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The interpolated quaternion.

---