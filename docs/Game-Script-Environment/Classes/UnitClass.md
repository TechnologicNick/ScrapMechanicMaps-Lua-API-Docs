---
sidebar_position: 5
title: UnitClass
hide_title: true
sidebar-label: 'UnitClass'
---

<br></br>

### UnitClass
A script class that is instanced for every [Unit](/lua/Game-Script-Environment/Userdata/Unit) in the game.

A unit represents an AI controlling a [Character](/lua/Game-Script-Environment/Userdata/Character).

The unit script runs only on the server.

The class can receive events sent with [sm.event.sendToUnit](/lua/Game-Script-Environment/Static-Functions/sm.event#sendtounit).

The fields below are accessed using <code>self.fieldName</code> in the UnitClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Unit](/lua/Game-Script-Environment/Userdata/Unit) | unit | The [Unit](/lua/Game-Script-Environment/Userdata/Unit) game object belonging to this class instance. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Data from the <code>data</code> entry in the unit character's JSON file entry. |
| any | params | Parameters passed to <code>sm.unit.createUnit</code> |

<strong>Constants:</strong> <br></br>

[isSaveObject](/Game-Script-Environment/Constants#unitclass)

<strong>Callbacks:</strong> <br></br>

## Server-only

### onProjectile

```lua
function UnitClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
```
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by a projectile.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the projectile hit the Character.
- <code>airTime</code> [<strong> number </strong>]: The time, in seconds, that the projectile spent flying before the hit.
- <code>velocity</code> [<strong> vec3 </strong>]: The velocity of the projectile at impact.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the projectile.
- <code>customData</code> [<strong> any </strong>]: A Lua object that can be defined at shoot time using <code>sm.projectile.customProjectileAttack</code> or any other custom version.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

---

### onExplosion

```lua
function UnitClass.server_onExplosion( self, center, destructionLevel )
end
```
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by an explosion. <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>center</code> [<strong> vec3 </strong>]: The center of the explosion.
- <code>destructionLevel</code> [<strong> int </strong>]: The level of destruction done by this explosion. Corresponds to the <code>durability</code> rating of a Shape.

---

### onMelee

```lua
function UnitClass.server_onMelee( self, position, attacker, damage, power, direction, normal )
end
```
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by a melee attack.

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the Character was hit.
- <code>attacker</code> [<strong> player/nil </strong>]: The attacker. Can be a Player or nil if unknown. Attacks made by a Unit will be nil on the client.
- <code>damage</code> [<strong> int </strong>]: The damage value of the melee hit.
- <code>power</code> [<strong> number </strong>]: The physical impact of the hit.
- <code>direction</code> [<strong> vec3 </strong>]: The direction of the melee attack.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.

---

### onCollision

```lua
function UnitClass.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
```
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit)'s [Character](/lua/Game-Script-Environment/Userdata/Character) collides with another object.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>other</code> [<strong> shape/character/harvestable/lift/nil </strong>]: The other object. Nil if terrain.
- <code>position</code> [<strong> player/nil </strong>]: The position in world space where the collision occurred.
- <code>selfPointVelocity</code> [<strong> int </strong>]: The velocity that that the Character had at the point of collision.
- <code>otherPointVelocity</code> [<strong> number </strong>]: The velocity that that the other object had at the point of collision.
- <code>normal</code> [<strong> vec3 </strong>]: The collision normal between the Character and the other object.

---

### onCollisionCrush

```lua
function UnitClass.server_onCollisionCrush( self )
end
```
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is being crushed.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onUnitUpdate

```lua
function UnitClass.server_onUnitUpdate( self, deltaTime )
end
```
Called occasionally for units based on how many units are active.

It is recommended to do heavier AI decisions here instead of in [server_onFixedUpdate](/lua/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>deltaTime</code> [<strong> number </strong>]: The time, in seconds, since <code>server_onUnitUpdate</code> was last called for this Unit.

---

### onCharacterChangedColor

```lua
function UnitClass.server_onCharacterChangedColor( self, color )
end
```
Called occasionally for units based on how many units are active.
Called when the [Unit](/lua/Game-Script-Environment/Userdata/Unit) [Character](/lua/Game-Script-Environment/Userdata/Character)'s color is changed.
The color can be changed by painting, set using [Character:setColor](/lua/Game-Script-Environment/Userdata/Character#setcolor) or by modifying [Character.color](/lua/Game-Script-Environment/Userdata/Character).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>color</code> [<strong> color </strong>]: The new Color of the Unit's Character.

---
