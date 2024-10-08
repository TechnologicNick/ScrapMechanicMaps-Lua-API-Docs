---
sidebar_position: 6
title: Character
hide_title: true
sidebar-label: 'Character'
---

<br></br>

## Character

**Associated namespace:** [sm.character](/lua/Game-Script-Environment/Static-Functions/sm.character)

A userdata object representing a <strong>character</strong> in the game.

<strong>Values:</strong>

- <code>clientPublicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Client-Only) The character's client public data.
	- <code>Set</code>: (Client-Only) Sets the character's client public data.


- <code>color</code> [<strong> color </strong>] <br></br>

	- <code>Get</code>: The character's color.
	- <code>Set</code>: (Server-Only) Sets the character's color.


- <code>direction</code> [<strong> Vec3 </strong>] <br></br>

	- <code>Get</code>: The character's view/aim direction.
	

- <code>smoothDirection</code> [<strong> Vec3 </strong>] <br></br>

	- <code>Get</code>: The view/aim direction, smoother in multiplayer.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the character.


- <code>mass</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The mass of the character.


- <code>movementSpeedFraction</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The character's current movement speed fraction.
	- <code>Set</code>: (Server-Only) Sets the character's movement speed fraction.


- <code>publicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The character's server public data.
	- <code>Set</code>: (Server-Only) Sets the character's server public data.


- <code>velocity</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The velocity of the character.


- <code>worldPosition</code> [<strong> vec3 </strong>] <br></br>

	- <code>Get</code>: The world position of the character.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Character</code> == <code>Character</code> | Checks if two instances of <code>Character</code> refer to the same <code>Character</code>. |

## Functions

### addRenderable

```lua
character:addRenderable( renderable )
```
<code>Client-Only</code> <br></br>

Adds a renderable (file containing model data) to be used for the character in third person view.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>renderable</code> [<strong> string </strong>]: Path to the renderable file.

---

### applyTumblingImpulse

```lua
character:applyTumblingImpulse( impulse )
```

Applies an impulse to the character's tumbling shape.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>impulse</code> [<strong> vec3 </strong>]: The impulse.

---

### bindAnimationCallback

```lua
character:bindAnimationCallback( animationName, triggerTime, callback )
```

Binds the character's animation to a callback function.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>animationName</code> [<strong> string </strong>]: The name of the animation.
- <code>triggerTime</code> [<strong> number </strong>]: The required time that will have elapsed in the animation when the callback is triggered.
- <code>callback</code> [<strong> string </strong>]: The name of the Lua function to bind.

---

### getActiveAnimations

```lua
character:getActiveAnimations()
```

Returns the set of active animations.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The set of active animations.

---

### getAnimationInfo

```lua
character:getAnimationInfo( name )
```
<code>Client-Only</code> <br></br>

[Missing Description]

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>name</code> [<strong> string </strong>]: The name.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The animation info.

---

### getCanSwim

```lua
character:getCanSwim()
```

Returns whether the character will float or sink in liquid.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True if the character floats, false if the character sinks.

---

### getCharacterType

```lua
character:getCharacterType()
```

Returns the uuid of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> uuid </strong>]: The character's UUID.

---

### getClientPublicData

```lua
character:getClientPublicData()
```
<code>Client-Only</code> <br></br>

Returns client public data from the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The character's client public data.

---

### getColor

```lua
character:getColor()
```

Returns the base color of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> color </strong>]: The character's color.

---

### getCurrentMovementNoiseRadius

```lua
character:getCurrentMovementNoiseRadius()
```

Returns the radius around the character where it can be heard.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's noise radius.

---

### getCurrentMovementSpeed

```lua
character:getCurrentMovementSpeed()
```

Returns the current movement speed of the character depending on state and multiplier.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's movement speed.

---

### getDirection

```lua
character:getDirection()
```

Returns the direction in which the character is viewing or aiming.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The character's view direction.

---

### getSmoothViewDirection

```lua
character:getSmoothViewDirection()
```

Returns the direction in which the character is viewing or aiming, in a smoother <br></br>
way when playing in multiplayer.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The character's view direction.

---

### getGlowMultiplier

```lua
character:getGlowMultiplier()
```
<code>Client-Only</code> <br></br>

Returns the character's glow multiplier.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's glow multiplier (0.0 - 1.0).

---

### getHeight

```lua
character:getHeight()
```

Returns the height of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's height.

---

### getId

```lua
character:getId()
```

Returns the id of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The character's id.

---

### getLockingInteractable

```lua
character:getLockingInteractable()
```

Returns the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) that the Character is locked to.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> interactable </strong>]: The interactable.

---

### getMass

```lua
character:getMass()
```

Returns the mass of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's mass.

---

### getMovementSpeedFraction

```lua
character:getMovementSpeedFraction()
```

Returns the current fraction multiplier applied on the character's movement speed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The movement speed fraction.

---

### getPlayer

```lua
character:getPlayer()
```

Returns the player controlling the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> player </strong>]: The character's player.

---

### getPublicData

```lua
character:getPublicData()
```
<code>Server-Only</code> <br></br>

Returns character's server public data.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The character's server public data.

---

### getRadius

```lua
character:getRadius()
```

Returns the radius of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The character's radius.

---

### getSurfaceNormal

```lua
character:getSurfaceNormal()
```

Returns the normal of the character's contact with a surface. <br></br>
Defaults to a zero vector when no contact is found.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The character's surface normal.

---

### getTpBonePos

```lua
character:getTpBonePos( jointName )
```

Returns the world position for a bone in the third person view animation skeleton.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>jointName</code> [<strong> string </strong>]: The joint name.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The joint position.

---

### getTpBoneRot

```lua
character:getTpBoneRot( jointName )
```

Returns the world rotation for a bone in the third person view animation skeleton.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>jointName</code> [<strong> string </strong>]: The joint name.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The joint rotation.

---

### getTumblingExtent

```lua
character:getTumblingExtent()
```

Returns the extent of the characters tumbling shape.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The tumbling shape's extent.

---

### getTumblingLinearVelocity

```lua
character:getTumblingLinearVelocity()
```

Returns the linear velocity of the characters tumbling shape.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The tumbling shape's linear velocity.

---

### getTumblingWorldPosition

```lua
character:getTumblingWorldPosition()
```

Returns the world position of the characters tumbling shape.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The tumbling shape's world position.

---

### getTumblingWorldRotation

```lua
character:getTumblingWorldRotation()
```

Returns the world rotation of the characters tumbling shape.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The tumbling shape's world rotation.

---

### getUnit

```lua
character:getUnit()
```

Returns the unit controlling the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> unit </strong>]: The unit controlling the character.

---

### getVelocity

```lua
character:getVelocity()
```

Returns the velocity of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The character's velocity.

---

### getWorld

```lua
character:getWorld()
```

Returns the world the character exists in.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> world </strong>]: The character's world.

---

### getWorldPosition

```lua
character:getWorldPosition()
```

Returns the world position of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The character's world position.

---

### isAiming

```lua
character:isAiming()
```

Returns whether the character is currently aiming with a weapon.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is aiming or not.

---

### isClimbing

```lua
character:isClimbing()
```

Returns whether the character is currently climbing.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is climbing or not.

---

### isCrouching

```lua
character:isCrouching()
```

Returns whether the character is currently crouching.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is crouching or not.

---

### isDefaultColor

```lua
character:isDefaultColor()
```

Returns true if the character color has its default color.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character has its default color.

---

### isDiving

```lua
character:isDiving()
```

Returns whether the character is currently diving.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is diving or not.

---

### isDowned

```lua
character:isDowned()
```

Returns whether the character is currently downed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is downed or not.

---

### isOnGround

```lua
character:isOnGround()
```

Returns whether the character is currently standing on the ground.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is on the ground or not.

---

### isPlayer

```lua
character:isPlayer()
```

Returns whether the character belongs to a player.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character belongs to a player or not.

---

### isSprinting

```lua
character:isSprinting()
```

Returns whether the character is currently sprinting.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is sprinting or not.

---

### isSwimming

```lua
character:isSwimming()
```

Returns whether the character is currently swimming.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is swimming or not.

---

### isTumbling

```lua
character:isTumbling()
```

Returns whether the character is currently tumbling.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character is tumbling or not.

---

### removeAnimationCallbacks

```lua
character:removeAnimationCallbacks()
```

Removes all of the character's animation callbacks.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.

---

### removeRenderable

```lua
character:removeRenderable( renderable )
```
<code>Client-Only</code> <br></br>

Removes a renderable (file containing model data) that was used for the character in third person view.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>renderable</code> [<strong> string </strong>]: Path to the renderable file.

---

### setAllowTumbleAnimations

```lua
character:setAllowTumbleAnimations( allow )
```
<code>Client-Only</code> <br></br>

Enables or disables event animations.

When set to false no animations can play while tumble is active, <br></br>
when set to true the animations will play while tumbling.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>allow</code> [<strong> bool </strong>]: Whether animations are allowed or not.

---

### setClientPublicData

```lua
character:setClientPublicData( data )
```
<code>Client-Only</code> <br></br>

Sets the character's client public data.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>data</code> [<strong> table </strong>]: The client public data.

---

### setClimbing

```lua
character:setClimbing( state )
```
<code>Server-Only</code> <br></br>

Sets whether the character is climbing.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>state</code> [<strong> bool </strong>]: Whether the character is climbing or not.

---

### setColor

```lua
character:setColor( color )
```
<code>Server-Only</code> <br></br>

Sets the character's color.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>color</code> [<strong> color </strong>]: The color.

---

### setDiving

```lua
character:setDiving( state )
```
<code>Server-Only</code> <br></br>

Sets whether the character is diving.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>state</code> [<strong> bool </strong>]: Whether the character is diving or not.

---

### setDowned

```lua
character:setDowned( state )
```
<code>Server-Only</code> <br></br>

Sets whether the character is downed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>state</code> [<strong> bool </strong>]: Whether the character is downed or not.

---

### setGlowMultiplier

```lua
character:setGlowMultiplier( value )
```
<code>Client-Only</code> <br></br>

Sets a value to multiply the glow from asg texture with.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>value</code> [<strong> number </strong>]: The glow multiplier (0.0 - 1.0).

---

### setLockingInteractable

```lua
character:setLockingInteractable( interactable )
```

Set the [Interactable](/lua/Game-Script-Environment/Userdata/Interactable) that the character is locked to. <br></br>
Set it to <code>nil</code> to unlock.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>interactable</code> [<strong> interactable </strong>]: The interactable.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the locking/unlocking was successful.

---

### setMovementEffects

```lua
character:setMovementEffects( filepath )
```

Sets the movement effect set.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>filepath</code> [<strong> string </strong>]: The effectset file path.

---

### setMovementSpeedFraction

```lua
character:setMovementSpeedFraction( fraction )
```

Sets a fraction multiplier to the character's movement speed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>fraction</code> [<strong> number </strong>]: The movement speed fraction.

---

### setMovementWeights

```lua
character:setMovementWeights( lower, upper )
```
<code>Client-Only</code> <br></br>

Sets the weights for movement animations on the character's upper and lower body.

For a value of 0 no movement animations will play, for a value of 1 the movement animations will fully play unless otherwise overridden.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>lower</code> [<strong> number </strong>]: The lower weight.
- <code>upper</code> [<strong> number </strong>]: The upper weight.

---

### setPublicData

```lua
character:setPublicData( data )
```
<code>Server-Only</code> <br></br>

Sets the character's server public data.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>data</code> [<strong> table </strong>]: The server public data.

---

### setSwimming

```lua
character:setSwimming( state )
```
<code>Server-Only</code> <br></br>

Sets whether the character is swimming.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>state</code> [<strong> bool </strong>]: Whether the character is swimming or not.

---

### setTumbling

```lua
character:setTumbling( state )
```
<code>Server-Only</code> <br></br>

Sets whether the character is tumbling.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>state</code> [<strong> bool </strong>]: Whether the character is tumbling or not.

---

### setUpDirection

```lua
character:setUpDirection( up )
```
<code>Client-Only</code> <br></br>

Sets the upward direction of the character's graphics.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>up</code> [<strong> vec3 </strong>]: The direction.

---

### updateAnimation

```lua
character:updateAnimation( name, time, weight, additive )
```
<code>Client-Only</code> <br></br>

Updates the character animation.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>name</code> [<strong> string </strong>]: The animation name.
- <code>time</code> [<strong> number </strong>]: The time.
- <code>weight</code> [<strong> number </strong>]: The weight. Defaults to <code>-1.0</code>. (Optional)
- <code>additive</code> [<strong> bool </strong>]: Whether the animation will be added to the default animation. Defaults to <code>false</code>. (Optional)

---

### setNameTag

```lua
character:setNameTag( name, color, requiresLoS, renderDistance, fadeDistance )
```
<code>Client-Only</code> <br></br>

Sets the name tag display value for the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>name</code> [<strong> string </strong>]: The name tag text.
- <code>color</code> [<strong> color </strong>]: The the text color. Defaults to white.
- <code>requiresLoS</code> [<strong> bool </strong>]: Whether the tag requires line of sight to be visible or not. Defaults to false.
- <code>renderDistance</code> [<strong> number </strong>]: The max distance the tag will be rendered in. Defaults to 10000.
- <code>fadeDistance</code> [<strong> number </strong>]: The distance above which the tag starts to fade out. Defaults to 9500.

---

### setWorldPosition

```lua
character:setWorldPosition( position )
```
<code>Server-Only</code> <br></br>

Sets the world position of the character.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>position</code> [<strong> vec3 </strong>]: The world position.

---





