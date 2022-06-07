---
sidebar_position: 6
title: PlayerClass
hide_title: true
sidebar-label: 'PlayerClass'
---

<br></br>

### PlayerClass
A script class that is instanced for every active [Player](/lua/Game-Script-Environment/Userdata/Player) in the game.

A player represents a user controlling a [Character](/lua/Game-Script-Environment/Userdata/Character).

The player script handles actions made by the user.

The class can receive events sent with [sm.event.sendToPlayer](/lua/Game-Script-Environment/Static-Functions/sm.event#sendtoplayer).

The fields below are accessed using <code>self.fieldName</code> in the PlayerClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Player](/lua/Game-Script-Environment/Userdata/Player) | player | The [Player](/lua/Game-Script-Environment/Userdata/Player) game object belonging to this class instance. |
| [Network](/lua/Game-Script-Environment/Userdata/Network) | network | A [Network](/lua/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |

<strong>Callbacks:</strong> <br></br>

## Server-only

### onProjectile

```lua
function PlayerClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by a projectile.

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
function PlayerClass.server_onExplosion( self, center, destructionLevel )
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by an explosion. <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>center</code> [<strong> vec3 </strong>]: The center of the explosion.
- <code>destructionLevel</code> [<strong> int </strong>]: The level of destruction done by this explosion. Corresponds to the <code>durability</code> rating of a Shape.

---

### onMelee

```lua
function PlayerClass.server_onMelee( self, position, attacker, damage, power, direction, normal )
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is hit by a melee attack.

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
function PlayerClass.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) collides with another object.

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
function PlayerClass.server_onCollisionCrush( self )
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is being crushed.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onShapeRemoved

```lua
function PlayerClass.server_onShapeRemoved( self, items )
	--items = { { uuid = uuid, amount = integer, type = string }, .. }
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player) removed a [Shape](/lua/Game-Script-Environment/Userdata/Shape) from the [World](/lua/Game-Script-Environment/Userdata/World).

Will receive a table of tables listing the items removed by this action.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>items</code> [<strong> table </strong>]: A table listing the removed items. See the table format below.

<strong>Table Format:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.
- <code>amount</code> [<strong> int </strong>]: The amount of items with this uuid.
- <code>type</code> [<strong> string </strong>]: Type of shape removed. Can be <code>part</code>, <code>block</code> or <code>joint</code>.

---

### onInventoryChanges

```lua
function PlayerClass.server_onInventoryChanges( self, inventory, changes )
	--changes = { { uuid = Uuid, difference = integer, tool = Tool }, .. }
end
```
Called when the [Player](/lua/Game-Script-Environment/Userdata/Player) has changes in the inventory [Container](/lua/Game-Script-Environment/Userdata/Container).

Will receive a table listing the changes.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>inventory</code> [<strong> container </strong>]: The player's inventory Container.
- <code>changes</code> [<strong> table </strong>]: A table listing the changes. See the table format below.

<strong>Table Format:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The item uuid.
- <code>difference</code> [<strong> int </strong>]: The change in amount. Positive numbers mean item gain, negative item loss.
- <code>tool</code> [<strong> tool/nil </strong>]: (Optional) If the item is a Tool, this is the tool. Otherwise nil.

---

## Client-only

### onInteract

```lua
function PlayerClass.client_onInteract( self, character, state )
end
```
Called when the player presses or releases the <code>Use</code> key (default <code>E</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The player's character. Same as <code>self.player.character</code>.
- <code>state</code> [<strong> bool </strong>]: The interaction state (<code>true</code> if pressed, <code>false</code> if released).

---

### onCancel

```lua
function PlayerClass.client_onCancel( self )
end
```
Called when the player presses the <code>Cancel</code> key (default <code>ESC</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onReload

```lua
function PlayerClass.client_onReload( self )
end
```
Called when the player presses the <code>Reload</code> key (default <code>R</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---
