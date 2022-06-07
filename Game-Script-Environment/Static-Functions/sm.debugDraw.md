---
sidebar_position: 18
title: sm.debugDraw
hide_title: true
sidebar-label: 'sm.debugDraw'
---

<br></br>

## sm.debugDraw

The <strong>Debug Draw</strong> api can be used for drawing geometric primitives for debug purposes.

## Functions

### addArrow

```lua
sm.debugDraw.addArrow( name, startPos, endPos, color )
```

Adds a named arrow debug draw.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The debug arrow name.
- <code>startPos</code> [<strong> vec3 </strong>]: The start position.
- <code>endPos</code> [<strong> vec3 </strong>]: The end position. Defaults to <code>startPos</code> plus 1 on the Z axis.
- <code>color</code> [<strong> color </strong>]: The color. Defaults to white.

---

### addSphere

```lua
sm.debugDraw.addSphere( name, center, radius, color )
```

Adds a named sphere debug draw.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The debug sphere name.
- <code>center</code> [<strong> vec3 </strong>]: The center position.
- <code>radius</code> [<strong> vec3 </strong>]: The radius. Defaults to 0.125.
- <code>color</code> [<strong> color </strong>]: The color. Defaults to white.

---

### addTransform

```lua
sm.debugDraw.addTransform( name, origin, rotation, scale )
```

Adds a named transform debug draw.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The debug transform name.
- <code>origin</code> [<strong> vec3 </strong>]: The transform origin.
- <code>rotation</code> [<strong> quat </strong>]: The transform rotation.
- <code>scale</code> [<strong> number </strong>]: The transform scale. Defaults to 1.0.

---

### clear

```lua
sm.debugDraw.clear( name )
```

Removes all debug draws beginning with a given name.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The name. Defaults to <code>""</code>, matching all debug draws.

---

### removeArrow

```lua
sm.debugDraw.removeArrow( name )
```

Removes a named arrow debug draw. 

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The name.

---

### removeSphere

```lua
sm.debugDraw.removeSphere( name )
```

Removes a named sphere debug draw. 

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The name.

---

### removeTransform

```lua
sm.debugDraw.removeTransform( name )
```

Removes a named transform debug draw. 

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The name.

---









