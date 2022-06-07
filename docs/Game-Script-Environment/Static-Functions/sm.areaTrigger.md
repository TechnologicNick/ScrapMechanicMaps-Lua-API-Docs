---
sidebar_position: 4
title: sm.areaTrigger
hide_title: true
sidebar-label: 'sm.areaTrigger'
---

<br></br>

## sm.areaTrigger

**Associated object type:** [AreaTrigger](/lua/Game-Script-Environment/Userdata/AreaTrigger)

An area trigger is an invisible collider in the world that can trigger events when objects move in or out of it. <br></br>
This allows the script to, for instance, detect when a character enters a door or count the number of shapes that are in a room.

[Constants](/lua/Game-Script-Environment/Constants#smareatriggerfilter)

## Functions

### createAttachedBox

```lua
sm.areaTrigger.createAttachedBox( interactable, dimension, position, rotation, filter, userdata )
```

Creates a new area trigger box with a given size that stays attached to an [Interactable](/lua/Game-Script-Environment/Userdata/Interactable).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](/lua/Game-Script-Environment/Constants#smareatriggerfilter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 <code>dimension</code> values (x, y, z) will cause a game crash!
:::

<strong>Arguments:</strong> <br></br>

- <code>interactable</code> [<strong> interactable </strong>]: The host interactable.
- <code>dimension</code> [<strong> vec3 </strong>]: The trigger size.
- <code>position</code> [<strong> vec3 </strong>]: The position offset (defaults to none).
- <code>rotation</code> [<strong> quat </strong>]: The rotation offset (defaults to none)
- <code>filter</code> [<strong> int </strong>]: The filter. Defaults to no filter.
- <code>userdata</code> [<strong> table </strong>]: A table of data that can be retrieved using <code>areaTrigger:getUserData()</code>.

<strong>Returns:</strong> <br></br>

- [<strong> areaTrigger </strong>]: The created areaTrigger.

```lua title="Example Usage"
MyShape = class()

function MyShape.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )

    self.myTrigger = sm.areaTrigger.createAttachedBox( self.interactable, size )
end
```

```lua title="Example with a filter"
MyShape = class()

function MyShape.server_onCreate( self )
    local position = self.shape:getWorldPosition()
    local size = sm.vec3.new( 1, 1, 1 )
    
    --Only detect characters
    local filter = sm.areaTrigger.filter.character

    self.myTrigger = sm.areaTrigger.createAttachedBox( self.interactable, size, _, _, filter )
end
```

---

### createAttachedSphere

```lua
sm.areaTrigger.createAttachedSphere( interactable, radius, position, rotation, filter, userdata )
```

Creates a new area trigger sphere with a given size that stays attached to an [Interactable](/lua/Game-Script-Environment/Userdata/Interactable).

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](/lua/Game-Script-Environment/Constants#smareatriggerfilter) for more information about filters.

<strong>Arguments:</strong> <br></br>

- <code>interactable</code> [<strong> interactable </strong>]: The host interactable.
- <code>radius</code> [<strong> number </strong>]: The trigger radius.
- <code>position</code> [<strong> vec3 </strong>]: The position offset (defaults to none).
- <code>rotation</code> [<strong> quat </strong>]: The rotation offset (defaults to none)
- <code>filter</code> [<strong> int </strong>]: The filter. Defaults to no filter.
- <code>userdata</code> [<strong> table </strong>]: A table of data that can be retrieved using <code>areaTrigger:getUserData()</code>.

<strong>Returns:</strong> <br></br>

- [<strong> areaTrigger </strong>]: The created areaTrigger.

---

### createBox

```lua
sm.areaTrigger.createBox( size, position, rotation, filter, userdata )
```

Creates a new area trigger box.

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](/lua/Game-Script-Environment/Constants#smareatriggerfilter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 <code>size</code> values (x, y, z) will cause a game crash!
:::

<strong>Arguments:</strong> <br></br>

- <code>size</code> [<strong> vec3 </strong>]: The trigger size.
- <code>position</code> [<strong> vec3 </strong>]: The position.
- <code>rotation</code> [<strong> quat </strong>]: The rotation (defaults to <code>sm.quat.identity</code>).
- <code>filter</code> [<strong> int </strong>]: The filter. Defaults to no filter.
- <code>userdata</code> [<strong> table </strong>]: A table of data that can be retrieved using <code>areaTrigger:getUserData()</code>.

<strong>Returns:</strong> <br></br>

- [<strong> areaTrigger </strong>]: The created areaTrigger.

---

### createBoxWater

```lua
sm.areaTrigger.createBoxWater( size, position, rotation, filter, userdata )
```

Creates a new area trigger box that represents water, ie. certain objects can't be placed in it.

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](/lua/Game-Script-Environment/Constants#smareatriggerfilter) for more information about filters.

:::caution warning
Creating an area trigger with zero in any of the 3 <code>size</code> values (x, y, z) will cause a game crash!
:::

<strong>Arguments:</strong> <br></br>

- <code>size</code> [<strong> vec3 </strong>]: The trigger size.
- <code>position</code> [<strong> vec3 </strong>]: The position.
- <code>rotation</code> [<strong> quat </strong>]: The rotation (defaults to <code>sm.quat.identity</code>).
- <code>filter</code> [<strong> int </strong>]: The filter. Defaults to no filter.
- <code>userdata</code> [<strong> table </strong>]: A table of data that can be retrieved using <code>areaTrigger:getUserData()</code>.

<strong>Returns:</strong> <br></br>

- [<strong> areaTrigger </strong>]: The created areaTrigger.

---

### createSphere

```lua
sm.areaTrigger.createSphere( radius, position, rotation, filter, userdata )
```

Creates a new area trigger sphere.

If a filter is specified, the trigger area will only be able to detects objects of that certain type.

See [sm.areaTrigger.filter](/lua/Game-Script-Environment/Constants#smareatriggerfilter) for more information about filters.

<strong>Arguments:</strong> <br></br>

- <code>radius</code> [<strong> number </strong>]: The trigger radius.
- <code>position</code> [<strong> vec3 </strong>]: The position.
- <code>rotation</code> [<strong> quat </strong>]: The rotation (defaults to <code>sm.quat.identity</code>).
- <code>filter</code> [<strong> int </strong>]: The filter. Defaults to no filter.
- <code>userdata</code> [<strong> table </strong>]: A table of data that can be retrieved using <code>areaTrigger:getUserData()</code>.

<strong>Returns:</strong> <br></br>

- [<strong> areaTrigger </strong>]: The created areaTrigger.

---

### destroy

```lua
sm.areaTrigger.destroy( trigger )
```

Destroys an areaTrigger.

<strong>Arguments:</strong> <br></br>

- <code>trigger</code> [<strong> areaTrigger </strong>]: The trigger to destroy.

---













