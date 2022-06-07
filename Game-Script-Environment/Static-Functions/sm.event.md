---
sidebar_position: 20
title: sm.event
hide_title: true
sidebar-label: 'sm.event'
---

<br></br>

## sm.event

Events for communicating between scripts by running callbacks.

## Functions

### sendToCharacter

```lua
sm.event.sendToCharacter( character, callback, data )
```

Sends an event to the specified [Character](/lua/Game-Script-Environment/Userdata/Character)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The character.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the character script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToGame

```lua
sm.event.sendToGame( callback, data )
```

Sends an event to the game script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the game script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToHarvestable

```lua
sm.event.sendToHarvestable( harvestable, callback, data )
```

Sends an event to the specified [harvestable](/lua/Game-Script-Environment/Userdata/Harvestable)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> harvestable </strong>]: The harvestable.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the harvestable script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToInteractable

```lua
sm.event.sendToInteractable( interactable, callback, data )
```

Sends an event to the specified [interactable](/lua/Game-Script-Environment/Userdata/Interactable)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>interactable</code> [<strong> interactable </strong>]: The interactable.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the interactable script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToPlayer

```lua
sm.event.sendToPlayer( player, callback, data )
```

Sends an event to the specified [player](/lua/Game-Script-Environment/Userdata/Player)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> player </strong>]: The player.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the player script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToScriptableObject

```lua
sm.event.sendToScriptableObject( scriptableObject, callback, data )
```

Sends an event to the specified [scriptableObject](/lua/Game-Script-Environment/Userdata/ScriptableObject)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> scriptableObject </strong>]: The scriptable object.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the scriptableObject's script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToTool

```lua
sm.event.sendToTool( tool, callback, data )
```

Sends an event to the specified [tool](/lua/Game-Script-Environment/Userdata/Tool)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>tool</code> [<strong> tool </strong>]: The tool.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the tool script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToUnit

```lua
sm.event.sendToUnit( unit, callback, data )
```

Sends an event to the specified [unit](/lua/Game-Script-Environment/Userdata/Unit)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the unit script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToWorld

```lua
sm.event.sendToWorld( world, callback, data )
```

Sends an event to the specified [world](/lua/Game-Script-Environment/Userdata/World)'s script.
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> world </strong>]: The world.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the world script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---













