---
sidebar_position: 40
title: sm.projectile
hide_title: true
sidebar-label: 'sm.projectile'
---

<br></br>

## sm.projectile

Information about projectiles is located in <code>/Data/Projectiles/projectiles.json</code>.

## Functions

### customProjectileAttack

```lua
sm.projectile.customProjectileAttack( userdata, name_or_uuid, damage, position, velocity, source, fakePosThird, fakePosFirst, delay )
```
<code>Server-Only</code> <br></br>

Performs a customized projectile attack from a player or unit.

<strong>Arguments:</strong> <br></br>

- <code>userdata</code> [<strong> table </strong>]: A table of custom user data.
- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> player/unit </strong>]: The source of the projectile.
- <code>fakePosThird</code> [<strong> vec3 </strong>]: The visual start position in third-person. Defaults to position.
- <code>fakePosFirst</code> [<strong> vec3 </strong>]: The visual start position in first-person. Defaults to position.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### getProjectileMass

```lua
sm.projectile.getProjectileMass( name_or_uuid )
```

Returns the mass of the projectile.

<strong>Arguments:</strong> <br></br>

- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The projectile's mass.

---

### harvestableCustomProjectileAttack

```lua
sm.projectile.harvestableCustomProjectileAttack( userdata, name_or_uuid, damage, position, velocity, source, delay )
```
<code>Server-Only</code> <br></br>

Performs a customized projectile attack from a harvestable.

<strong>Arguments:</strong> <br></br>

- <code>userdata</code> [<strong> table </strong>]: A table of custom user data.
- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> harvestable </strong>]: The source of the projectile.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### harvestableProjectileAttack

```lua
sm.projectile.harvestableProjectileAttack( name_or_uuid, damage, position, velocity, source, delay )
```

Performs a projectile attack from a harvestable.

<strong>Arguments:</strong> <br></br>

- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> harvestable </strong>]: The source of the projectile.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### playerFire

```lua
sm.projectile.playerFire( name_or_uuid, position, velocity, fakePosThird, fakePosFirst, delay )
```
<code>Client-Only</code> <br></br>

Creates and fires a projectile from a player.

The projectile is normally fired from the player's position, <br></br>
but due to the weapon being held off-center it may require a fake position for where the projectile appears to be fired from.

<strong>Arguments:</strong> <br></br>

- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>fakePosThird</code> [<strong> vec3 </strong>]: The visual start position in third-person. Defaults to position.
- <code>fakePosFirst</code> [<strong> vec3 </strong>]: The visual start position in first-person. Defaults to position.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### projectileAttack

```lua
sm.projectile.projectileAttack( name_or_uuid, damage, position, velocity, source, fakePosThird, fakePosFirst )
```

Performs a projectile attack from a player or unit.

<strong>Arguments:</strong> <br></br>

- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> player/unit </strong>]: The source of the projectile.
- <code>fakePosThird</code> [<strong> vec3 </strong>]: The visual start position in third-person. Defaults to position.
- <code>fakePosFirst</code> [<strong> vec3 </strong>]: The visual start position in first-person. Defaults to position.

---

### shapeCustomProjectileAttack

```lua
sm.projectile.shapeCustomProjectileAttack( userdata, name_or_uuid, damage, position, velocity, source, delay )
```
<code>Server-Only</code> <br></br>

Performs a customized projectile attack from a shape.

<strong>Arguments:</strong> <br></br>

- <code>userdata</code> [<strong> table </strong>]: A table of custom user data.
- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> shape </strong>]: The source of the projectile.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### shapeFire

```lua
sm.projectile.shapeFire( source, name_or_uuid, damage, position, velocity, delay )
```
<code>Server-Only</code> <br></br>

Creates and fires a projectile from a Shape.

<strong>Arguments:</strong> <br></br>

- <code>source</code> [<strong> shape </strong>]: The source of the projectile.
- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### shapeProjectileAttack

```lua
sm.projectile.shapeProjectileAttack( name_or_uuid, damage, position, velocity, source, delay )
```

Performs a projectile attack.

:::info note
The fire position is <strong>local to the given shape</strong>.
:::

<strong>Arguments:</strong> <br></br>

- <code>name_or_uuid</code> [<strong> string/uuid </strong>]: The projectile's name or uuid (name is deprecated, use uuid instead).
- <code>damage</code> [<strong> int </strong>]: The damage that the projectile will inflict.
- <code>position</code> [<strong> vec3 </strong>]: The fire position.
- <code>velocity</code> [<strong> vec3 </strong>]: The direction and velocity.
- <code>source</code> [<strong> shape </strong>]: The source of the projectile.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before firing. Defaults to 0.

---

### solveBallisticArc

```lua
sm.projectile.solveBallisticArc( firePos, targetPos, velocity, gravity )
```

Calculate the ballistic arc of a projectile. There are two potential solutions to the problem.

One with a low fire angle and one with a high fire angle. Solutions can be nil if no solution is found.

<strong>Arguments:</strong> <br></br>

- <code>firePos</code> [<strong> vec3 </strong>]: The projectile's fire position.
- <code>targetPos</code> [<strong> vec3 </strong>]: The position the projectile should hit.
- <code>velocity</code> [<strong> number </strong>]: The projectile's fire velocity.
- <code>gravity</code> [<strong> number </strong>]: The gravity (positive down).

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The low angle solution.
- [<strong> vec3 </strong>]: The high angle solution.

---

















