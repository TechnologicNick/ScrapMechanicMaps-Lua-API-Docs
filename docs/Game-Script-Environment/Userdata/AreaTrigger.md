---
sidebar_position: 2
title: AreaTrigger
hide_title: true
sidebar-label: 'AreaTrigger'
---

<br></br>

## AreaTrigger

**Associated namespace:** [sm.areaTrigger](/lua/Game-Script-Environment/Static-Functions/sm.areaTrigger)

A userdata object representing an <strong>area trigger</strong> in the game.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The ID of the <code>AreaTrigger</code>.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>AreaTrigger</code> == <code>AreaTrigger</code> | Checks if two instances of <code>AreaTrigger</code> refer to the same <code>AreaTrigger</code>. |

## Functions

### bindOnEnter

```lua
AreaTrigger:bindOnEnter( callback, object = nil )
```

Binds an area trigger's <code>onEnter</code> event to a custom callback. <br></br> <br></br>
The <code>onEnter</code> event is triggered when an object enters the trigger area.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>trigger</code> [<strong> AreaTrigger </strong>]: The area trigger instance.
- <code>results</code> [<strong> table </strong>]: A table of objects that entered the trigger area.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>callback</code> [<strong> string </strong>]: 	The name of the Lua function to bind.
- <code>object</code> [<strong> table </strong>]: The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnEnter( "onEnter" )
end

function MyClass.onEnter( self, trigger, results )
    for k, object in ipairs( results ) do
        print( object, "just entered" )
    end
end
```

---

### bindOnExit

```lua
AreaTrigger:bindOnExit( callback, object = nil )
```

Binds an area trigger's <code>onExit</code> event to a custom callback. <br></br>
The <code>onExit</code> event is triggered when an object leaves the trigger area.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>trigger</code> [<strong> AreaTrigger </strong>]: The area trigger instance.
- <code>results</code> [<strong> table </strong>]: A table of objects that left the trigger area.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>callback</code> [<strong> string </strong>]: 	The name of the Lua function to bind.
- <code>object</code> [<strong> table </strong>]: The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnExit( "onExit" )
end

function MyClass.onExit( self, trigger, results )
    for k, object in ipairs( results ) do
        print( object, "just left" )
    end
end
```

---

### bindOnStay

```lua
AreaTrigger:bindOnStay( callback, object = nil )
```

Binds an area trigger's <code>onStay</code> event to a custom callback. <br></br>
The <code>onStay</code> event is triggered every tick as long as an object is staying inside of the trigger area.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>trigger</code> [<strong> AreaTrigger </strong>]: The area trigger instance.
- <code>results</code> [<strong> table </strong>]: A table of objects that are in the trigger area.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>callback</code> [<strong> string </strong>]: 	The name of the Lua function to bind.
- <code>object</code> [<strong> table </strong>]: The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnExit( "onStay" )
end

function MyClass.onStay( self, trigger, results )
    print( #results, "objects inside trigger area" )
end
```

---

### bindOnProjectile

```lua
AreaTrigger:bindOnProjectile( callback, object = nil )
```

Binds an area trigger's <code>onProjectile</code> event to a custom callback. <br></br>
The <code>onProjectile</code> event is triggered if a projectile collides with the trigger area.

<strong>The callback receives:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>trigger</code> [<strong> AreaTrigger </strong>]: The area trigger instance.
- <code>position</code> [<strong> vec3 </strong>]: The position in world space where the projectile hit the trigger.
- <code>airTime</code> [<strong> number </strong>]: The time, in seconds, that the projectile spent flying before the hit.
- <code>velocity</code> [<strong> vec3 </strong>]: The velocity of the projectile at impact.
- <code>projectileName</code> [<strong> string </strong>]: The name of the projectile. (Legacy, use uuid instead)
- <code>shooter</code> [<strong> player/unit/shape/harvestable/nil </strong>]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown.
- <code>damage</code> [<strong> int </strong>]: The damage value of the projectile.
- <code>customData</code> [<strong> any </strong>]: A Lua object that can be defined at shoot time using <code>sm.projectile.customProjectileAttack</code> or any other custom version.
- <code>normal</code> [<strong> vec3 </strong>]: The normal at the point of impact.
- <code>uuid</code> [<strong> uuid </strong>]: The uuid of the projectile.

<strong>The callback must return:</strong> <br></br>

- [<strong> bool </strong>]: Whether the projectile should be kept or not. <code>false</code> = erase the projectile, <code>true</code> = keep the projectile.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>callback</code> [<strong> string </strong>]: 	The name of the Lua function to bind.
- <code>object</code> [<strong> table </strong>]: The object that will receive the callback. (optional)

```lua title="Example Usage"
MyClass = class()

function MyClass.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createBox( size, position )
    self.myTrigger:bindOnProjectile( "onProjectile" )
end

function MyClass.onProjectile( self, trigger, position, airTime, velocity, projectileName, shooter, damage, customData, normal, uuid )
    print( "Detected projectile!" )
	print( "Trigger:", trigger )
	print( "World Position:", position )
	print( "Time spent flying:", airTime, "seconds" )
	print( "Velocity:", velocity )
	print( "Shooter:", shooter )
	print( "Damage:", damage )

	return true	--true or false, true = the projectile stays, false = the projectile is erased
end
```

---

### getContents

```lua
AreaTrigger:getContents()
```

Gets the contents of the area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The objects inside the trigger area.

---

### getHostInteractable

```lua
AreaTrigger:getHostInteractable()
```

Returns the attached host [interactable](/lua/Game-Script-Environment/Userdata/Interactable).

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> interactable </strong>]: The area trigger's host interactable.

---

### getId

```lua
AreaTrigger:getId()
```

Returns the id of the area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The area trigger's id.

---

### getShapes

```lua
AreaTrigger:getShapes()
```

Returns the shapes inside the trigger area.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The shapes inside the trigger area.

---

### getSize

```lua
AreaTrigger:getSize()
```

Returns the size of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The area trigger's size.

---

### getUserData

```lua
AreaTrigger:getUserData()
```

Returns the userdata set on the area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The area trigger's userdata.

---

### getWorldMax

```lua
AreaTrigger:getWorldMax()
```

Returns the world max corner position of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The area trigger's max corner position.

---

### getWorldMin

```lua
AreaTrigger:getWorldMin()
```

Returns the world min corner position of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The area trigger's min corner position.

---

### getWorldPosition

```lua
AreaTrigger:getWorldPosition()
```

Returns the world position of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The area trigger's world position.

---

### getWorldRotation

```lua
AreaTrigger:getWorldRotation()
```

Returns the world rotation of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The area trigger's world rotation.

---

### hasVoxelTerrainContact

```lua
AreaTrigger:hasVoxelTerrainContact()
```

Returns true if the AreaTrigger is in contact with destructable terrain.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Destructable terrain contact.

---

### setShapeDetection

```lua
AreaTrigger:setShapeDetection( detectShapes )
```

Shape detection is off by default.
When set to true the area trigger can calculate which shapes are inside of the
trigger area with a call to [AreaTrigger:getShapes()](#getShapes)

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>detectShapes</code> [<strong> bool </strong>]: Whether shape detection is on or off.

---

### setSize

```lua
AreaTrigger:setSize( size )
```

Sets the new size of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>size</code> [<strong> vec3 </strong>]: The area trigger's new size.

---

### setWorldPosition

```lua
AreaTrigger:setWorldPosition( position )
```

Sets the new world position of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>position</code> [<strong> vec3 </strong>]: The area trigger's new world position.

---

### setWorldRotation

```lua
AreaTrigger:setWorldRotation( rotation )
```

Sets the new world rotation of an area trigger.

<strong>Arguments:</strong> <br></br>

- <code>AreaTrigger</code> [<strong> AreaTrigger </strong>]: The AreaTrigger.
- <code>rotation</code> [<strong> quat </strong>]: The area trigger's new world rotation.

---

