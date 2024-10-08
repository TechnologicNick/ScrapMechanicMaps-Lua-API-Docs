---
sidebar_position: 48
title: sm.util
hide_title: true
sidebar-label: 'sm.util'
---

<br></br>

## sm.util

The <strong>util</strong> library offers various math-related functions.

## Functions

### axesToQuat

```lua
sm.util.axesToQuat( xAxis, zAxis )
```

Constructs a quaternion from an X and Z axis.

<strong>Arguments:</strong> <br></br>

- <code>xAxis</code> [<strong> vec3 </strong>]: The X axis.
- <code>zAxis</code> [<strong> vec3 </strong>]: The Z axis.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The created quaternion.

---

### bezier2

```lua
sm.util.bezier2( c0, c1, c2, t )
```

Quadratic Bezier interpolation. One dimensional bezier curve.

<strong>Arguments:</strong> <br></br>

- <code>c0</code> [<strong> number </strong>]: The start value.
- <code>c1</code> [<strong> number </strong>]: The control point.
- <code>c2</code> [<strong> number </strong>]: The the end value.
- <code>t</code> [<strong> number </strong>]: The interpolation step.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The interpolated value.

---

### bezier3

```lua
sm.util.bezier3( c0, c1, c2, c3, t )
```

Cubic Bezier interpolation. One dimensional bezier curve.

<strong>Arguments:</strong> <br></br>

- <code>c0</code> [<strong> number </strong>]: The start value.
- <code>c1</code> [<strong> number </strong>]: The first control point.
- <code>c2</code> [<strong> number </strong>]: The second control point.
- <code>c3</code> [<strong> number </strong>]: The the end value.
- <code>t</code> [<strong> number </strong>]: The interpolation step.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The interpolated value.

---

### clamp

```lua
sm.util.clamp( value, min, max )
```

Restricts a value to a given range.

<strong>Arguments:</strong> <br></br>

- <code>value</code> [<strong> number </strong>]: The value.
- <code>min</code> [<strong> number </strong>]: The lower limit.
- <code>max</code> [<strong> number </strong>]: The upper limit.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The clamped value.

---

### easing

```lua
sm.util.easing( easing, p )
```

Applies an easing function to a given input.

| Easing function names |
| -----------		|
| linear			|
| easeInQuad		|
| easeOutQuad		|
| easeInOutQuad		|
| easeInCubic		|
| easeOutCubic		|
| easeInOutCubic	|
| easeInQuart		|
| easeOutQuart		|
| easeInOutQuart	|
| easeInQuint		|
| easeOutQuint		|
| easeInOutQuint	|
| easeInSine		|
| easeOutSine		|
| easeInOutSine		|
| easeInCirc		|
| easeOutCirc		|
| easeInOutCirc		|
| easeInExpo		|
| easeOutExpo		|
| easeInOutExpo		|
| easeInElastic		|
| easeOutElastic	|
| easeInOutElastic	|
| easeInBack		|
| easeOutBack		|
| easeInOutBack		|
| easeInBounce		|
| easeOutBounce		|
| easeInOutBounce	|

<strong>Arguments:</strong> <br></br>

- <code>easing</code> [<strong> string </strong>]: The easing function name.
- <code>p</code> [<strong> number </strong>]: The easing function input.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The output.

---

### lerp

```lua
sm.util.lerp( a, b, t )
```

Linear interpolation between two values. This is known as a lerp.

<strong>Arguments:</strong> <br></br>

- <code>a</code> [<strong> number </strong>]: The first value.
- <code>b</code> [<strong> number </strong>]: The second value.
- <code>t</code> [<strong> number </strong>]: The interpolation step.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The interpolated value.

---

### positiveModulo

```lua
sm.util.positiveModulo( x, n )
```

Returns the positive remainder after division of <code>x</code> by <code>n</code>.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> integer </strong>]: The number.
- <code>n</code> [<strong> integer </strong>]: The modulo value.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The value.

---

### smootherstep

```lua
sm.util.smootherstep( edge0, edge1, x )
```

An improved version of the smoothstep function which has zero 1st and 2nd order derivatives at <code>x = edge0</code> and <code>x = edge1</code>.

<strong>Arguments:</strong> <br></br>

- <code>edge0</code> [<strong> number </strong>]: The value of the lower edge of the Hermite function.
- <code>edge1</code> [<strong> number </strong>]: The value of the upper edge of the Hermite function.
- <code>x</code> [<strong> number </strong>]: The source value for interpolation.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The value.

---

### smoothstep

```lua
sm.util.smoothstep( edge0, edge1, x )
```

Performs smooth Hermite interpolation between 0 and 1 when <code>edge0 < x < edge1</code>. <br></br>
This is useful in cases where a threshold function with a smooth transition is desired.

<strong>Arguments:</strong> <br></br>

- <code>edge0</code> [<strong> number </strong>]: The value of the lower edge of the Hermite function.
- <code>edge1</code> [<strong> number </strong>]: The value of the upper edge of the Hermite function.
- <code>x</code> [<strong> number </strong>]: The source value for interpolation.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The value.

---