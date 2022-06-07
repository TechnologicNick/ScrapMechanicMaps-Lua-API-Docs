---
sidebar_position: 8
title: GameClass
hide_title: true
sidebar-label: 'GameClass'
---

<br></br>

### GameClass
A script class that defines the game mode. Only one instance of this class is made.

This is the first script that will be run.

The game script is responsible for creating and managing [Worlds](/lua/Game-Script-Environment/Userdata/World).

The class can receive events sent with [sm.event.sendToGame](/lua/Game-Script-Environment/Static-Functions/sm.event#sendtogame).

The fields below are accessed using <code>self.fieldName</code> in the GameClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Network](/lua/Game-Script-Environment/Userdata/Network) | network | A [Network](/lua/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/lua/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/lua/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Game start data. |

<strong>Constants:</strong> <br></br>

[defaultInventorySize](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableAggro](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableAmmoConsumption](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableFuelConsumption](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableLimitedInventory](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableRestrictions](/Game-Script-Environment/Constants#gameclass) <br></br>
[enableUpgrade](/Game-Script-Environment/Constants#gameclass) <br></br>


<strong>Callbacks:</strong> <br></br>

## Server-only

### onPlayerJoined

```lua
function GameClass.server_onPlayerJoined( self, player, newPlayer )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) joins the game. <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>player</code> [<strong> player </strong>]: The joining player.
- <code>newPlayer</code> [<strong> bool </strong>]: True if the player has not been in this game before.

---

### onPlayerLeft

```lua
function GameClass.server_onPlayerLeft( self, player )
end
```
Called when a [Player](/lua/Game-Script-Environment/Userdata/Player) leaves the game. <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>player</code> [<strong> player </strong>]: The leaving player.

---

### onReset

```lua
function GameClass.server_onReset( self )
end
```
Called when the user wants to reset the challenge level.

:::info note
Only works in Challenge Mode!
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onRestart

```lua
function GameClass.server_onRestart( self )
end
```
Called when the user wants to restart the challenge level.

:::info note
Only works in Challenge Mode!
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onSaveLevel

```lua
function GameClass.server_onSaveLevel( self )
end
```
Called when the user wants to save the challenge level.

:::info note
Only works in the Challenge Builder!
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onTestLevel

```lua
function GameClass.server_onTestLevel( self )
end
```
Called when the user wants to save and test the challenge level.

:::info note
Only works in the Challenge Builder!
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onStopTest

```lua
function GameClass.server_onStopTest( self )
end
```
Called when the user wants to stop testing the challenge level.

:::info note
Only works in the Challenge Builder!
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

## Client-only

### onLoadingScreenLifted

```lua
function GameClass.client_onLoadingScreenLifted( self )
end
```
Called when the loading screen is lifted when entering a game.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onLanguageChange

```lua
function GameClass.client_onLanguageChange( self, language )
end
```
Called when the user changes the language in the in-game menu.

Valid languages are:
<code>Brazilian</code>, <code>Chinese</code>, <code>English</code>, <code>French</code> <br></br>
<code>German</code>, <code>Italian</code>, <code>Japanese</code>, <code>Korean</code> <br></br>
<code>Polish</code>, <code>Russian</code>, <code>Spanish</code> <br></br>

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>language</code> [<strong> string </strong>]: The new language.

---