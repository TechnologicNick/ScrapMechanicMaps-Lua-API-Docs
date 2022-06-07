---
sidebar_position: 3
title: sm.ai
hide_title: true
sidebar-label: 'sm.ai'
---

<br></br>

## sm.ai

AI utility functions.

## Functions

### directPathAvailable

```lua
sm.ai.directPathAvailable( unit, position )
```

Checks if the unit can reach the target position by moving straight.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>position</code> [<strong> vec3 </strong>]: The target position.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the target position is directly reachable or not.

---

### getAimPosition

```lua
sm.ai.getAimPosition( character, target, range, width )
```

Returns true if the character can fire at the target within a given fire lane.

Also returns the aim position that allows the character to succeed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> character </strong>]: The firing character.
- <code>target</code> [<strong> harvestable/character </strong>]: The target.
- <code>range</code> [<strong> number </strong>]: The maximum firing distance.
- <code>width</code> [<strong> number </strong>]: The width of the fire lane.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character can fire at the target or not.
- [<strong> vec3 </strong>]: The aim position, if available.

---

### getBreachablePosition

```lua
sm.ai.getBreachablePosition( unit, position, range, attack )
```

Check if there's an attackable object between the unit and a position.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>position</code> [<strong> vec3 </strong>]: The target position.
- <code>range</code> [<strong> number </strong>]: The distance.
- <code>attack</code> [<strong> int </strong>]: The possible attack level from the attacker.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True if a breachable object was found or no object was found. False if the found object is unbreachable.
- [<strong> vec3 </strong>]: The attackable position, if found.
- [<strong> shape/harvestable/lift </strong>]: The object to attack.

---

### getClosestTree

```lua
sm.ai.getClosestTree( position, world )
```

Find the closest "tree" harvestable in a world.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> vec3 </strong>]: The position.
- <code>world</code> [<strong> world </strong>]: The world.

<strong>Returns:</strong> <br></br>

- [<strong> harvestable </strong>]: The closest found tree.

---

### getClosestVisibleCharacterType

```lua
sm.ai.getClosestVisibleCharacterType( unit, uuid )
```

Returns the closest visible character with matching uuid.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>uuid</code> [<strong> uuid </strong>]: The character uuid.

<strong>Returns:</strong> <br></br>

- [<strong> character </strong>]: The closest visible character.

---

### getClosestVisibleCrop

```lua
sm.ai.getClosestVisibleCrop( unit )
```

Returns the closest visible farming harvestable.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.

<strong>Returns:</strong> <br></br>

- [<strong> harvestable </strong>]: The closest visible farming harvestable.

---

### getClosestVisiblePlayerCharacter

```lua
sm.ai.getClosestVisiblePlayerCharacter( unit )
```

Returns the closest visible player character.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.

<strong>Returns:</strong> <br></br>

- [<strong> character </strong>]: The closest visible player character.

---

### getClosestVisibleTeamOpponent

```lua
sm.ai.getClosestVisibleTeamOpponent( unit, color )
```

Returns the closest visible character that does not have the given color.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>color</code> [<strong> color </strong>]: The color.

<strong>Returns:</strong> <br></br>

- [<strong> character </strong>]: The closest visible team opponent.

---

### getRandomCreationPosition

```lua
sm.ai.getRandomCreationPosition( body )
```

Returns a random position on the given body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> body </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> vec3 </strong>]: The random position.

---

### isReachable

```lua
sm.ai.isReachable( unit, position )
```

Check if the unit can reach the target position by moving along a path.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> unit </strong>]: The unit.
- <code>position</code> [<strong> vec3 </strong>]: The target position.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the position is reachable or not.

---













