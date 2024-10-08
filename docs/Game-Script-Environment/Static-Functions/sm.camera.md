---
sidebar_position: 8
title: sm.camera
hide_title: true
sidebar-label: 'sm.camera'
---

<br></br>

## sm.camera

The camera library contains methods related to the [localPlayer](/lua/Game-Script-Environment/Static-Functions/sm.localPlayer)'s camera view.

In first-person view the camera is located inside the player's head, whereas in third-person view it floats behind them.

This library can only be used on the [client](/lua/#client).

[Constants](/lua/Game-Script-Environment/Constants#smcamerastates)

## Functions

### cameraSphereCast

```lua
sm.camera.cameraSphereCast( radius, start, direction )
```
<code>Client-Only</code> <br></br>

Performs a distance convex sweep with the shape of a sphere, from a position with a given direction.

<strong>Arguments:</strong> <br></br>

- <code>radius</code> [<strong> number </strong>]: The radius of the cast sphere.
- <code>start</code> [<strong> vec3 </strong>]: The start position.
- <code>direction</code> [<strong> vec3 </strong>]: The cast direction and range.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The fraction of the distance reached until collision.

---

### getCameraPullback

```lua
sm.camera.getCameraPullback()
```
<code>Client-Only</code> <br></br>

Returns the camera's zoom step.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: How far away the camera is from the player while standing.
- [<strong> number </strong>]: How far away the camera is from the player while seated.

---

### getCameraState

```lua
sm.camera.getCameraState()
```
<code>Client-Only</code> <br></br>

Returns the camera's control state, see [sm.camera.states](/lua/Game-Script-Environment/Constants#smcamerastates).

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The camera state.

---

### getDefaultFov

```lua
sm.camera.getDefaultFov()
```
<code>Client-Only</code> <br></br>

Returns the camera's default FOV angle.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The default FOV.

---

### getDefaultPosition

```lua
sm.camera.getDefaultPosition()
```
<code>Client-Only</code> <br></br>

Returns the world postition where the camera should be by default.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The position.

---

### getDefaultRotation

```lua
sm.camera.getDefaultRotation()
```
<code>Client-Only</code> <br></br>

Returns the world rotation where the camera should be by default.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The rotation.

---

### getDirection

```lua
sm.camera.getDirection()
```
<code>Client-Only</code> <br></br>

Returns the direction the camera is aiming.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The direction.

---

### getFov

```lua
sm.camera.getFov()
```
<code>Client-Only</code> <br></br>

Returns the camera's FOV.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The FOV.

---

### getPosition

```lua
sm.camera.getPosition()
```
<code>Client-Only</code> <br></br>

Returns the camera's world position.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The position.

---

### getRight

```lua
sm.camera.getRight()
```
<code>Client-Only</code> <br></br>

Returns the right-vector perpendicular to the camera's aim.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The camera's right-vector.

---

### getRotation

```lua
sm.camera.getRotation()
```
<code>Client-Only</code> <br></br>

Returns the camera's world rotation.

<strong>Returns:</strong> <br></br>

- [<strong> quat </strong>]: The camera's rotation.

---

### getUp

```lua
sm.camera.getUp()
```
<code>Client-Only</code> <br></br>

Returns the up-vector perpendicular to the camera's aim.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The camera's up-vector.

---

### setCameraPullback

```lua
sm.camera.setCameraPullback( standing, seated )
```
<code>Client-Only</code> <br></br>

Sets the camera's zoom step.

<strong>Arguments:</strong> <br></br>

- <code>standing</code> [<strong> number </strong>]: How far away the camera is from the player while standing.
- <code>seated</code> [<strong> number </strong>]: How far away the camera is from the player while seated.

---

### setCameraState

```lua
sm.camera.setCameraState( state )
```
<code>Client-Only</code> <br></br>

Sets the camera's control state, see [sm.camera.state](/lua/Game-Script-Environment/Constants#smcamerastate).

<strong>Arguments:</strong> <br></br>

- <code>state</code> [<strong> int </strong>]: The camera state.

---

### setDirection

```lua
sm.camera.setDirection( dir )
```
<code>Client-Only</code> <br></br>

Sets the camera's aim direction.

<strong>Arguments:</strong> <br></br>

- <code>dir</code> [<strong> vec3 </strong>]: The direction.

---

### setFov

```lua
sm.camera.setFov( fov )
```
<code>Client-Only</code> <br></br>

Sets the camera's FOV.

<strong>Arguments:</strong> <br></br>

- <code>fov</code> [<strong> number </strong>]: The FOV.

---

### setPosition

```lua
sm.camera.setPosition( position )
```
<code>Client-Only</code> <br></br>

Sets the camera's world position.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> vec3 </strong>]: The position.

---

### setRotation

```lua
sm.camera.setRotation( rotation )
```
<code>Client-Only</code> <br></br>

Sets the camera's world rotation.

<strong>Arguments:</strong> <br></br>

- <code>rotation</code> [<strong> quat </strong>]: The rotation.

---

### setShake

```lua
sm.camera.setShake( strength )
```
<code>Client-Only</code> <br></br>

Sets the camera's shake level.

<strong>Arguments:</strong> <br></br>

- <code>strength</code> [<strong> number </strong>]: The shake level.

---



