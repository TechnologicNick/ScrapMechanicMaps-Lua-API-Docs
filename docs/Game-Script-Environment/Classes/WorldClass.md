---
sidebar_position: 9
title: WorldClass
hide_title: true
sidebar-label: 'WorldClass'
---

<br></br>

### WorldClass
A script class that is instanced for every [World](/lua/Game-Script-Environment/Userdata/World) in the game.

When entering a warehouse floor, the player is entering a new world.

The class can receive events sent with [sm.event.sendToWorld](/lua/Game-Script-Environment/Static-Functions/sm.event).

The fields below are accessed using <code>self.fieldName</code> in the WorldClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [World](/lua/Game-Script-Environment/Userdata/World) | world | The [World](/lua/Game-Script-Environment/Userdata/World) game object belonging to this class instance. |
| [Network](/lua/Game-Script-Environment/Userdata/Network) | network | A [Network](/lua/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Parameters passed to [sm.world.createWorld](/lua/Game-Script-Environment/Static-Functions/sm.world#createworld) |

<strong>Constants:</strong> <br></br>

[cellMaxX](/Game-Script-Environment/Constants#worldclass) <br></br>
[cellMaxY](/Game-Script-Environment/Constants#worldclass) <br></br>
[cellMinX](/Game-Script-Environment/Constants#worldclass) <br></br>
[cellMinY](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableAssets](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableClutter](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableCreations](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableHarvestables](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableKinematics](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableNodes](/Game-Script-Environment/Constants#worldclass) <br></br>
[enableSurface](/Game-Script-Environment/Constants#worldclass) <br></br>
[groundMaterialSet](/Game-Script-Environment/Constants#worldclass) <br></br>
[isIndoor](/Game-Script-Environment/Constants#worldclass) <br></br>
[renderMode](/Game-Script-Environment/Constants#worldclass) <br></br>
[terrainScript](/Game-Script-Environment/Constants#worldclass) <br></br>
[worldBorder](/Game-Script-Environment/Constants#worldclass) <br></br>

<strong>Callbacks:</strong> <br></br>

## Server + Client

### onCollision

```lua
function WorldClass.server_onCollision( self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal )
end
function WorldClass.client_onCollision( self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal )
end
```
Called when a collision occurs in this world.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>objectA</code> [<strong> shape/character/harvestable/lift/nil </strong>]: The first colliding object. Nil if terrain.
- <code>objectB</code> [<strong> shape/character/harvestable/lift/nil </strong>]: The second colliding object. Nil if terrain.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the collision occurred.
- <code>pointVelocityA</code> [<strong> vec3 </strong>]: The velocity that that the first object had at the point of collision.
- <code>pointVelocityB</code> [<strong> vec3 </strong>]: The velocity that that the second object had at the point of collision.
- <code>normal</code> [<strong> vec3 </strong>]: The collision normal from objectA to objectB.

---

## Server-only

### onCellCreated

```lua
function WorldClass.server_onCellCreated( self, x, y )
end
```
Called when a world cell is loaded and feature complete for the first time.

:::info note
[Interactables](/lua/Game-Script-Environment/Userdata/Interactable) created by terrain scripts should be processed here using [sm.cell.getInteractablesByTag](/lua/Game-Script-Environment/Static-Functions/sm.cell#getinteractablesbytag) and [sm.cell.getInteractablesByUuid](/lua/Game-Script-Environment/Static-Functions/sm.cell#getinteractablesbyuuid),
as they are only accessible for 1 tick after being created.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.

---

### onCellLoaded

```lua
function WorldClass.server_onCellLoaded( self, x, y )
end
```
Called when a world cell is loaded and feature complete, but has been before.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.

---

### onCellUnloaded

```lua
function WorldClass.server_onCellUnloaded( self, x, y )
end
```
Called when a world cell is no longer feature complete.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.

---

### onInteractableCreated

```lua
function WorldClass.server_onInteractableCreated( self, interactable )
end
```
Called when an [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) [Shape](/lua/Game-Script-Environment/Userdata/Shape) is built in the world.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>interactable</code> [<strong> interactable </strong>]: The interactable of the built shape.

---

### onInteractableDestroyed

```lua
function WorldClass.server_onInteractableDestroyed( self, interactable )
end
```
Called when an [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) [Shape](/lua/Game-Script-Environment/Userdata/Shape) is removed from the world.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>interactable</code> [<strong> interactable </strong>]: The interactable of the removed shape.

---

### onProjectile

```lua
function WorldClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, target, uuid )
end
```
Called when a projectile hits something in this world.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the projectile hit.
- <code>airTime</code> [<strong> number </strong>]: The time, in seconds, that the projectile spent flying before the hit.
- <code>velocity</code> [<strong> vec3 </strong>]: The velocity of the projectile at impact.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the projectile.
- <code>customData</code> [<strong> any </strong>]: A Lua object that can be defined at shoot time using <code>sm.projectile.customProjectileAttack</code> or any other custom version.
- <code>target</code> [<strong> Character/Shape/Harvestable/Lift/nil </strong>]: The hit target. Can be a Character, Shape, Harvestable, Lift or nil if terrain or unknown.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

---

### onExplosion

```lua
function WorldClass.server_onExplosion( self, center, destructionLevel )
end
```
Called when an explosion occurs in this world.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>center</code> [<strong> vec3 </strong>]: The center of the explosion.
- <code>destructionLevel</code> [<strong> int </strong>]: The level of destruction done by this explosion. Corresponds to the <code>durability</code> rating of a Shape.

---

### onMelee

```lua
function WorldClass.server_onMelee( self, position, attacker, target, damage, power, direction, normal )
end
```
Called when a melee attack hits something in this world.

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the attack hit.
- <code>attacker</code> [<strong> player/nil </strong>]: The attacker. Can be a Player, Unit or nil if unknown.
- <code>target</code> [<strong> Character/Shape/Harvestable/Lift/nil </strong>]: The hit target. Can be a Character, Shape, Harvestable, Lift or nil if terrain or unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the melee hit.
- <code>power</code> [<strong> number </strong>]: The physical impact of the hit.
- <code>direction</code> [<strong> vec3 </strong>]: The direction of the melee attack.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.

---

### onProjectileFire

```lua
function WorldClass.server_onProjectileFire( self, position, velocity, projectileName, shooter, uuid )
end
```
Called when a projectile is fired in this world.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where projectile was fired from.
- <code>velocity</code> [<strong> vec3 </strong>]: The fire velocity of the projectile.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

---

## Client-only

### onCellLoaded

```lua
function WorldClass.client_onCellLoaded( self, x, y )
end
```
Called when a world cell is considered feature complete for a client (has nodes).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.

---

### onCellUnloaded

```lua
function WorldClass.client_onCellUnloaded( self, x, y )
end
```
Called when a world cell is no longer considered feature complete for a client (no longer has nodes).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.

---
