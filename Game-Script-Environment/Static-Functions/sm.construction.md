---
sidebar_position: 13
title: sm.construction
hide_title: true
sidebar-label: 'sm.construction'
---

<br></br>

## sm.construction

The <strong>Construction</strong> api is used for interacting with the shape construction system.

[Constants](/lua/Game-Script-Environment/Constants#smconstructionconstants)

## Functions

### buildBlock

```lua
sm.construction.buildBlock( uuid, position, target )
```
<code>Server-Only</code> <br></br>

Builds a block.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The block uuid.
- <code>position</code> [<strong> vec3 </strong>]: The block position. Local position if building on a target, global if building on terrain.
- <code>target</code> [<strong> shape/joint/lift/nil </strong>]: The target object to build the block on. Use nil to build on terrain.

---

### validateLocalPosition

```lua
sm.construction.validateLocalPosition( uuid, position, normal, target )
```

Validates whether a block can be built at the target position.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The block uuid.
- <code>position</code> [<strong> vec3 </strong>]: The block position. Local position if building on a target, global if building on terrain.
- <code>normal</code> [<strong> vec3 </strong>]: The normal of the surface to validate placement.
- <code>target</code> [<strong> shape/joint/lift/nil </strong>]: The target object to validate on. Use nil to validate on terrain.

<strong>Arguments:</strong> <br></br>

- [<strong> bool </strong>]: Whether the position is valid or not.

---














