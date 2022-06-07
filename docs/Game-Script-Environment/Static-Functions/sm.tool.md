---
sidebar_position: 46
title: sm.tool
hide_title: true
sidebar-label: 'sm.tool'
---

<br></br>

## sm.tool

**Associated object type:** [Tool](/lua/Game-Script-Environment/Userdata/Tool)

A <strong>tool</strong> is a scripted tool a player holds in their hand. <br></br>
The tool object is focused on handling animations for first and third person view.

For more information about creating your own scripted tools, see [ToolClass](/lua/Game-Script-Environment/Classes/ToolClass).

[Constants](/lua/Game-Script-Environment/Constants#smtoolinteractstate)

## Functions

### checkLiftCollision

```lua
sm.tool.checkLiftCollision( creation, position, rotation )
```

Used to check collisions between the lift and the world.

<strong>Arguments:</strong> <br></br>

- <code>creation</code> [<strong> table </strong>]: A table of all the bodies belonging to the creation placed on the lift.
- <code>position</code> [<strong> vec3 </strong>]: The lift position.
- <code>rotation</code> [<strong> int </strong>]: The rotation of the creation on the lift.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the lift collides with the world or not.
- [<strong> int </strong>]: The lift level.

---

### forceTool

```lua
sm.tool.forceTool( tool )
```
<code>Client-Only</code> <br></br>

Force equip a tool for the local player. <br></br>
Pass nil to unforce an already forced tool.

<strong>Arguments:</strong> <br></br>

- <code>tool</code> [<strong> tool </strong>]: The tool.

---

### preloadRenderables

```lua
sm.tool.preloadRenderables( renderables )
```
<code>Client-Only</code> <br></br>

Pre-loads renderable data to be used by the tool. <br></br>
This eliminates excessive loading during run time.

<strong>Arguments:</strong> <br></br>

- <code>renderables</code> [<strong> table </strong>]: The table of renderable file paths.

---

### uuidExists

```lua
sm.tool.uuidExists( uuid )
```

Returns whether the tool uuid exists.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> uuid </strong>]: The uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the uuid exists or not.

---



