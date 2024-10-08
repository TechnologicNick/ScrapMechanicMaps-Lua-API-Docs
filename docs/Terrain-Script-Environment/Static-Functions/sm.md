---
sidebar_position: 2
title: sm
hide_title: true
sidebar-label: 'sm'
---

<br></br>

## sm

The <strong>sm</strong> namespace contain all API features related to Scrap Mechanic.

[Constants](/lua/Game-Script-Environment/Constants#sm)

## Functions

### exists

```lua
sm.exists( object )
```

Returns whether an object exists in the game. <br></br>
This is useful for checking whether a reference to an object is valid.

<strong>Arguments:</strong> <br></br>

- <code>object</code> [<strong> any </strong>]: The object to check.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the object exists or not.

---

### isServerMode

```lua
sm.isServerMode()
```

Returns whether the script is currently running in [server](/lua/#server) mode. <br></br>
Otherwise, it is running in [client](/lua/#client) mode. Server mode only occurs when [sm.isHost](/lua/Game-Script-Environment/Constants#sm) is true.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the script is running in server mode or not.

---