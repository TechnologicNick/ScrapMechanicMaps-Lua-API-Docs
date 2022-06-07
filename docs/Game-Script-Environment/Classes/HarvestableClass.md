---
sidebar_position: 7
title: HarvestableClass
hide_title: true
sidebar-label: 'HarvestableClass'
---

<br></br>

### HarvestableClass
A script class that is instanced for every [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) in the game.

A tree or a plant that can be harvested is a typical case of a harvestable.

The class can receive events sent with [sm.event.sendToHarvestable](/lua/Game-Script-Environment/Static-Functions/sm.event#sendtoharvestable).

The fields below are accessed using <code>self.fieldName</code> in the HarvestableClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) | harvestable | The [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) game object belonging to this class instance. |
| [Network](/lua/Game-Script-Environment/Userdata/Network) | network | A [Network](/lua/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Data from the <code>data</code> entry in the harvestable's JSON file entry. |
| any | params | Parameters given to <code>sm.harvestable.create</code> or set in the terrain generation script. |

<strong>Constants:</strong> <br></br>

[poseWeightCount](/Game-Script-Environment/Constants#harvestableclass)

<strong>Callbacks:</strong> <br></br>

## Server + Client

### onProjectile

```lua
function HarvestableClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
function HarvestableClass.client_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
```
Called when the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) is hit by a projectile.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the projectile hit the Harvestable.
- <code>airTime</code> [<strong> number </strong>]: The time, in seconds, that the projectile spent flying before the hit.
- <code>velocity</code> [<strong> vec3 </strong>]: The velocity of the projectile at impact.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the projectile.
- <code>customData</code> [<strong> any </strong>]: A Lua object that can be defined at shoot time using <code>sm.projectile.customProjectileAttack</code> or any other custom version.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

---

### onCollision

```lua
function HarvestableClass.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
function HarvestableClass.client_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
```
Called when the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) collides with another object.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>other</code> [<strong> shape/character/harvestable/lift/nil </strong>]: The other object. Nil if terrain.
- <code>position</code> [<strong> player/nil </strong>]: The position in world space where the collision occurred.
- <code>selfPointVelocity</code> [<strong> int </strong>]: The velocity that that the Harvestable had at the point of collision.
- <code>otherPointVelocity</code> [<strong> number </strong>]: The velocity that that the other object had at the point of collision.
- <code>normal</code> [<strong> vec3 </strong>]: The collision normal between the Harvestable and the other object.

---

### onMelee

```lua
function HarvestableClass.server_onMelee( self, position, attacker, damage, power, direction, normal )
end
function HarvestableClass.client_onMelee( self, position, attacker, damage, power, direction, normal )
end
```
Called when the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) is hit by a melee attack.

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the Harvestable was hit.
- <code>attacker</code> [<strong> player/nil </strong>]: The attacker. Can be a Player or nil if unknown. Attacks made by a Unit will be nil on the client.
- <code>damage</code> [<strong> int </strong>]: The damage value of the melee hit.
- <code>power</code> [<strong> number </strong>]: The physical impact of the hit.
- <code>direction</code> [<strong> vec3 </strong>]: The direction of the melee attack.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.

---

### canErase

```lua
function HarvestableClass.server_canErase( self )
	return true --true or false, default false
end
function HarvestableClass.client_canErase( self )
	return true --true or false, default false
end
```
Called to check whether the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) can be erased at this moment.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the Harvestable can be erased or not. Defaults to "removable" json value which defaults to false.

---

## Server-only

### onUnload

```lua
function HarvestableClass.server_onUnload( self )
end
```
Called when the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) is unloaded from the game because no [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is close enough to it. <br></br>
Also called when exiting the game.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onReceiveUpdate

```lua
function HarvestableClass.server_onReceiveUpdate( self )
end
```
Called occasionally on the HarvestableClass to indicate that some time has passed.

For performance reasons it is recommended to use this instead of [server_onFixedUpdate](/Game-Script-Environment/Classes/CommonCallbacks#onfixedupdate) for updates that do not need to happen frequently.

Use [sm.game.getCurrentTick](/lua/Game-Script-Environment/Static-Functions/sm.game#getcurrenttick) to calculate the time.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onExplosion

```lua
function HarvestableClass.server_onExplosion( self, center, destructionLevel )
end
```
Called when the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) is hit by an explosion. <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>center</code> [<strong> vec3 </strong>]: The center of the explosion.
- <code>destructionLevel</code> [<strong> int </strong>]: The level of destruction done by this explosion. Corresponds to the <code>durability</code> rating of a Shape.

---

### onRemoved

```lua
function HarvestableClass.server_onRemoved( self, player )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) wants to remove the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable).

:::info note
The <code>HarvestableClass</code> is responsible for doing the remove using [Harvestable:destroy](/lua/Game-Script-Environment/Userdata/Harvestable#destroy).
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>player</code> [<strong> player </strong>]: The Player that wants to remove the Harvestable.

---

## Client-only

### onInteract

```lua
function HarvestableClass.client_onInteract( self, character, state )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) is interacting with the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) by pressing the <code>Use</code> key (default <code>E</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is interacting with the Harvestable.
- <code>state</code> [<strong> bool </strong>]: The interaction state (<code>true</code> if pressed, <code>false</code> if released).

---

### canInteract

```lua
function HarvestableClass.client_canInteract( self, character )
	return true --true or false, default true if onInteract is implemented
end
```
Called to check whether the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable) can be interacted with at this moment.

:::info note
This callback is also responsible for updating interaction text shown to the player using [sm.gui.setInteractionText](/lua/Game-Script-Environment/Static-Functions/sm.gui#setinteractiontext).
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is looking at the Harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the Harvestable can be interacted with or not (Defaults to true if <code>client_onInteract</code> is implemented, otherwise false).

---

### onAction

```lua
function HarvestableClass.client_onAction( self, action, state )
end
```
Called when the Harvestable receives input from a [Player](/lua/Game-Script-Environment/Userdata/Player) with the [Character](/lua/Game-Script-Environment/Userdata/Character) locked to the [Harvestable](/lua/Game-Script-Environment/Userdata/Harvestable).

Details about the <code>action</code> value are in [sm.interactable.actions](/lua/Game-Script-Environment/Constants#sminteractableactions).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>action</code> [<strong> int </strong>]: The action as an integer value.
- <code>state</code> [<strong> bool </strong>]: True on begin action, false on end action.

---