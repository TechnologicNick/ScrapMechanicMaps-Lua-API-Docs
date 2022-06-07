---
sidebar_position: 5
title: sm.audio
hide_title: true
sidebar-label: 'sm.audio'
---

<br></br>

## sm.audio

The <strong>audio</strong> manager is used to play sound effects in the game.

:::info note
This manager does only produce sound for the local [client](/lua/#client). <br></br>
This is useful for small sound effects such as GUI button sounds.

For more information about sound and particle effects that affect all players, see [sm.effect](/lua/Game-Script-Environment/Static-Functions/sm.effect).
:::

:::caution warning
Audio is deprecated, use [Effects](/lua/Game-Script-Environment/Userdata/Effect) instead.
:::

[Constants](/lua/Game-Script-Environment/Constants#smaudiosoundlist)

## Functions

### play

```lua
sm.audio.play( sound, position )
```
<code>Client-Only</code> <br></br>

Plays a sound.

If position is specified, the sound will play at the given coordinates in the world. Otherwise, the sound will play normally.

For a list of available sounds to play, see [sm.audio.soundList](/lua/Game-Script-Environment/Constants#smaudiosoundlist).

<strong>Arguments:</strong> <br></br>

- <code>sound</code> [<strong> interactable </strong>]: The name of the sound.
- <code>position</code> [<strong> vec3 </strong>]: The sound position (optional).

---










