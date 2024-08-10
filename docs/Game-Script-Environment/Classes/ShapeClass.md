---
sidebar_position: 2
title: ShapeClass
hide_title: true
sidebar-label: 'ShapeClass'
---

<br></br>

### ShapeClass
A script class that is instanced for every "scripted" [Interactable Shape](/lua/Game-Script-Environment/Userdata/Interactable) in the game.

An interactable part is a [Shape](/lua/Game-Script-Environment/Userdata/Shape) that is usually built by the player and can be interacted with, for example a button or an engine.

The class can receive events sent with [sm.event.sendToInteractable](/lua/Game-Script-Environment/Static-Functions/sm.event#sendtointeractable).

The fields below are accessed using <code>self.fieldName</code> in the ShapeClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) | interactable | The [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) game object belonging to this class instance. The same as <code>shape.interactable</code>. |
| [Shape](/lua/Game-Script-Environment/Userdata/Shape) | shape | The [Shape](/lua/Game-Script-Environment/Userdata/Shape) game object that the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) is attached to. (The same as interactable.shape) |
| [Network](/lua/Game-Script-Environment/Userdata/Network) | network | A [Network](/lua/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Data from the <code>data</code> entry in the shape's JSON file entry. |
| any | params | Parameter set with [Interactable:setParams](/lua/Game-Script-Environment/Userdata/Interactable#setparams) when created from a script. |


<strong>Constants:</strong> <br></br>

[colorHighlight](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[colorNormal](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[connectionInput](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[connectionOutput](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[maxChildCount](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[maxParentCount](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>
[poseWeightCount](/lua/Game-Script-Environment/Constants#shapeclass) <br></br>

<strong>Callbacks:</strong> <br></br>

## Server + Client

### onProjectile

```lua
function ShapeClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
function ShapeClass.client_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
end
```
Called when the [Shape](/lua/Game-Script-Environment/Userdata/Shape) is hit by a projectile.

:::info note
If the shooter is destroyed before the projectile hits, the shooter value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the projectile hit the Shape.
- <code>airTime</code> [<strong> number </strong>]: The time, in seconds, that the projectile spent flying before the hit.
- <code>velocity</code> [<strong> vec3 </strong>]: The velocity of the projectile at impact.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the projectile.
- <code>customData</code> [<strong> any </strong>]: A Lua object that can be defined at shoot time using <code>sm.projectile.customProjectileAttack</code> or any other custom version.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

---

### onMelee

```lua
function ShapeClass.server_onMelee( self, position, attacker, damage, power, direction, normal )
end
function ShapeClass.client_onMelee( self, position, attacker, damage, power, direction, normal )
end
```
Called when the [Shape](/lua/Game-Script-Environment/Userdata/Shape) is hit by a melee attack.

:::info note
If the attacker is destroyed before the hit lands, the attacker value will be nil.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the Shape was hit.
- <code>attacker</code> [<strong> player/nil </strong>]: The attacker. Can be a Player or nil if unknown. Attacks made by a Unit will be nil on the client.
- <code>damage</code> [<strong> int </strong>]: The damage value of the melee hit.
- <code>power</code> [<strong> number </strong>]: The physical impact of the hit.
- <code>direction</code> [<strong> vec3 </strong>]: The direction of the melee attack.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.

---

### onCollision

```lua
function ShapeClass.server_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
function ShapeClass.client_onCollision( self, other, position, selfPointVelocity, otherPointVelocity, normal )
end
```
Called when the [Shape](/lua/Game-Script-Environment/Userdata/Shape) collides with another object.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>other</code> [<strong> shape/character/harvestable/lift/nil </strong>]: The other object. Nil if terrain.
- <code>position</code> [<strong> player/nil </strong>]: The position in world space where the collision occurred.
- <code>selfPointVelocity</code> [<strong> int </strong>]: The velocity that that the Shape had at the point of collision.
- <code>otherPointVelocity</code> [<strong> number </strong>]: The velocity that that the other object had at the point of collision.
- <code>normal</code> [<strong> vec3 </strong>]: The collision normal between the Shape and the other object.

---

### canErase

```lua
function ShapeClass.server_canErase( self )
	return true --true or false, default true
end
function ShapeClass.client_canErase( self )
	return true --true or false, default true
end
```
Called to check whether the [Shape](/lua/Game-Script-Environment/Userdata/Shape) can be erased at this moment.

:::info note
This can be used to override restrictions. (See [Shape.erasable](/lua/Game-Script-Environment/Userdata/Shape))
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the Shape can be erased or not. (Defaults to true)

---

## Server-only

### onUnload

```lua
function ShapeClass.server_onUnload( self )
end
```
Called when the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) is unloaded from the game because no [Player](/lua/Game-Script-Environment/Userdata/Player)'s [Character](/lua/Game-Script-Environment/Userdata/Character) is close enough to it. <br></br>
Also called when exiting the game.

:::info note
The creation, consisting of one or more [bodies](/lua/Game-Script-Environment/Userdata/Body), consisting of one or more [shapes](/lua/Game-Script-Environment/Userdata/Shape) joined together with [joints](/lua/Game-Script-Environment/Userdata/Joint) are always unloaded at the same time.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onExplosion

```lua
function ShapeClass.server_onExplosion( self, center, destructionLevel )
end
```
Called when the [Shape](/lua/Game-Script-Environment/Userdata/Shape) is hit by an explosion. <br></br>

For more information about explosions, see [sm.physics.explode](/lua/Game-Script-Environment/Static-Functions/sm.physics#explode).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>center</code> [<strong> vec3 </strong>]: The center of the explosion.
- <code>destructionLevel</code> [<strong> int </strong>]: The level of destruction done by this explosion. Corresponds to the <code>durability</code> rating of a Shape.

---

### onSledgehammer

```lua
function ShapeClass.server_onSledgehammer( self )
end
```
:::caution deprecated
Use [onMelee](#onMelee) instead.
:::

---

## Client-only

### onInteract

```lua
function ShapeClass.client_onInteract( self, character, state )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) is interacting with the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) by pressing the <code>Use</code> key (default <code>E</code>) <br></br>
or pressing <code>0-9</code> if the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) is connected to a seat (See: [Interactable:pressSeatInteractable](/lua/Game-Script-Environment/Userdata/Interactable#pressseatinteractable)).

:::info note
If this method is defined, the player will see the interaction text <code>E Use</code> when looking at the Shape.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is interacting with the Interactable.
- <code>state</code> [<strong> bool </strong>]: The interaction state (<code>true</code> if pressed, <code>false</code> if released).

```lua title="Example Usage"
-- Example of interaction
function MySwitch.client_onInteract( self, character, state ) 
	if state then
		self.network:sendToServer( 'sv_n_toggle' )
	end
end

function MySwitch.sv_n_toggle( self ) 
	-- Toggle on and off
	self.interactable.active = not self.interactable.active
end
```

---

### canInteract

```lua
function ShapeClass.client_canInteract( self, character )
	return true --true or false, default true if onInteract is implemented
end
```
Called to check whether the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) can be interacted with at this moment.

:::info note
This callback can also be used to change the interaction text shown to the player using [sm.gui.setInteractionText](/lua/Game-Script-Environment/Static-Functions/sm.gui#setinteractiontext) (Defaults to <code>E Use</code>).

This can be used to override restrictions (See [Shape.usable](/lua/Game-Script-Environment/Userdata/Shape)).
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is looking at the Shape.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the interactable can be interacted with or not (Defaults to true if <code>client_onInteract</code> is implemented, otherwise false).


---

### onTinker

```lua
function ShapeClass.client_onTinker( self, character, state )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) is interacting with the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) by pressing the <code>Tinker</code> key (default <code>U</code>).

:::info note
Tinkering usually means opening the upgrade menu for seats.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is tinkering with the Interactable.
- <code>state</code> [<strong> bool </strong>]: The interaction state (<code>true</code> if pressed, <code>false</code> if released).

---

### canTinker

```lua
function ShapeClass.client_canTinker( self, character )
	return true --true or false, default true if onTinker is implemented
end
```
Called to check whether the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) can be tinkered with at this moment.

:::info note
Tinkering usually means opening the upgrade menu for seats.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is looking at the Shape.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the interactable can be tinkered with or not (Defaults to true if <code>client_onTinker</code> is implemented, otherwise false).

---

### onInteractThroughJoint

```lua
function ShapeClass.client_onInteractThroughJoint( self, character, state, joint )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) is interacting with the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) through a connected [Joint](/lua/Game-Script-Environment/Userdata/Joint).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is interacting with the Interactable.
- <code>state</code> [<strong> bool </strong>]: The interaction state. Always true. <code>client_onInteractThroughJoint</code> only receives the key down event.
- <code>joint</code> [<strong> joint </strong>]: The Joint that the Player interacted through.

---

### canInteractThroughJoint

```lua
function ShapeClass.client_canInteractThroughJoint( self, character )
	return true --true or false, default true if onInteractThroughJoint is implemented
end
```
Called to check whether the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) can be interacted with through a child [Joint](/lua/Game-Script-Environment/Userdata/Joint) at this moment.

:::info note
This callback can also be used to change the interaction text shown to the player using [sm.gui.setInteractionText](/lua/Game-Script-Environment/Static-Functions/sm.gui#setinteractiontext) (Defaults to <code>E Use</code>)
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>character</code> [<strong> character </strong>]: The Character of the Player that is looking at the Joint.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the interactable can be interacted with or not (Defaults to true if <code>client_onInteractThroughJoint</code> is implemented, otherwise false).

---

### onAction

```lua
function ShapeClass.client_onAction( self, action, state )
	return true --or false
end
```
Called when the interactable receives input from a [Player](/lua/Game-Script-Environment/Userdata/Player) with the [Character](/lua/Game-Script-Environment/Userdata/Character) locked to the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable).

When a [Character](/lua/Game-Script-Environment/Userdata/Character) is seated in an [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) [Shape](/lua/Game-Script-Environment/Userdata/Shape) with a <code>seat</code> component, the [Character](/lua/Game-Script-Environment/Userdata/Character) is also considered locked to the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable).

Details about the <code>action</code> value are in [sm.interactable.actions](/lua/Game-Script-Environment/Constants#sminteractableactions).

If the return value is <code>true</code>, the action is "consumed", e.g. if <code>W</code> is pressed, the player does **not** move forwards. <br></br>
If the return value is <code>false</code>, the action is **not** consumed, e.g. if <code>W</code> is pressed, the player also moves forwards.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>action</code> [<strong> int </strong>]: The action as an integer value.
- <code>state</code> [<strong> bool </strong>]: True on begin action, false on end action.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the action is "consumed" or not.

---

### canCarry

```lua
function ShapeClass.client_canCarry( self )
	return true --true or false, default false
end
```
Called to check if the shape must be carried instead of put in the inventory.

:::info note
Shapes with the <code>carryItem</code> attribute are always carried.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether the interacable must be carried or not. (Defaults to false)

---

### getAvailableParentConnectionCount

```lua
function ShapeClass.client_getAvailableParentConnectionCount( self, connectionType )
	return int --The number of available connections.
end
```
Called to check how many more parent (input) connections with the given [connectionType](/lua/Game-Script-Environment/Constants#sminteractableconnectiontype) the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) will accept. <br></br>
Return 1 or more to allow a connection of this type.

See [sm.interactable.connectionType](/lua/Game-Script-Environment/Constants#sminteractableconnectiontype) for details about the connection type.

:::info note
The [maxParentCount](/lua/Game-Script-Environment/Constants#shapeclass) constant must be 1 or more for this callback to be called.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>connectionType</code> [<strong> int </strong>]: The connection type(s).

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The number of available connections.

```lua title="Example Usage"
-- Example of implementation where logic and power shares the same slot but electricity counts as separate
MyInteractable.maxParentCount = 2
MyInteractable.connectionInput = sm.interactable.connectionType.logic + sm.interactable.connectionType.power + sm.interactable.connectionType.electricity

function MyInteractable.client_getAvailableParentConnectionCount( self, connectionType )
	if bit.band( connectionType, bit.bor( sm.interactable.connectionType.logic, sm.interactable.connectionType.power ) ) ~= 0 then
		return 1 - self:getParents( bit.bor( sm.interactable.connectionType.logic, sm.interactable.connectionType.power ) )
	end
	if bit.band( connectionType, sm.interactable.connectionType.electricity ) ~= 0 then
		return 1 - self:getParents( sm.interactable.connectionType.electricity )
	end
	return 0
end
```

---

### getAvailableChildConnectionCount

```lua
function ShapeClass.client_getAvailableChildConnectionCount( self, connectionType )
	return int --The number of available connections.
end
```
Called to check how many more child (output) connections with the given [connectionType](/lua/Game-Script-Environment/Constants#sminteractableconnectiontype) the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) will accept. <br></br>
Return 1 or more to allow a connection of this type.

See [sm.interactable.connectionType](/lua/Game-Script-Environment/Constants#sminteractableconnectiontype) for details about the connection type.

:::info note
The [maxChildCount](/lua/Game-Script-Environment/Constants#shapeclass) constant must be 1 or more for this callback to be called.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>connectionType</code> [<strong> int </strong>]: The connection type(s).

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The number of available connections.

```lua title="Example Usage"
-- Example of implementation that accepts 10 logic connections and 1 power connection
MyInteractable.maxChildCount = 11
MyInteractable.connectionOutput = sm.interactable.connectionType.logic + sm.interactable.connectionType.power

function MyIteractable.client_getAvailableChildConnectionCount( self, connectionType )
	if bit.band( connectionType, sm.interactable.connectionType.logic ) ~= 0 then
		return 10 - self:getParents( sm.interactable.connectionType.logic )
	end
	if bit.band( connectionType, sm.interactable.connectionType.power ) ~= 0 then
		return 1 - self:getParents( sm.interactable.connectionType.power )
	end
	return 0
end
```

---
