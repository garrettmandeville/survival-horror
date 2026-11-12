# Survival Horror (working title)

An **original** survival-horror game told through text, running in the browser.
It is a homage to the classic survival-horror genre, **not a remake** of any existing game. All setting, characters, story, map and puzzles are original.

## How to work with me
- Mentor style: guide me step by step and explain why. Don't hand over finished code unless I ask for it.
- Review what I paste and point out problems, then let me fix them.
- Comments are the exception: when I ask, edit comments directly. Use JSDoc above functions and inline comments only for *why*, not *what*.

## Tech stack
- Plain HTML, CSS and JavaScript, with no frameworks or build step.
- Run it with the VS Code Live Server extension. Audio needs a local server.
- Git is used for version control. The game will be pushed to a public repo.

## File layout
- `index.html`: inside `#game`: `#status` (status bar), `#description` (narration), `#options` (action choice buttons) and `#compass` (six movement buttons, hidden until the game starts)
- `style.css`: the mood styling; colors are CSS custom properties on `:root` (`--text`, `--background`, `--accent`)
- `game.js`: game state, the narration renderer and the choice handlers
- `data/rooms.js`: room data as a JS object, so the page also works without a server
- `audio/`: ambient loops and sound effects

## Design principles
- **Data-driven:** content lives in `data/`, and the engine stays generic.
- **Atmosphere first:** dark palette (background about `#0b0b0c`, text about `#c9c4b8`, accent about `#7a1e1e`), a serif or typewriter font, a column about 60 characters wide, and a vignette overlay.
- **Narration:** lines fade in one at a time with deliberate pauses, and choices are disabled until narration finishes.
- **Input:** no typed parser. Movement uses a clickable compass (N/S/E/W arrows in a cross, plus Up/Down) that shows only the current room's exits. Actions (take, examine, use) are text buttons in `#options`.
- **`hidden` vs `disabled`:** `hidden` means "no exit this way" and is set only by `showRoom`. `disabled` means "wait, narration is playing" and is set only by `narrate`. Keep them separate.
- **Locked exits** are still shown, with a descriptive hint about what opens them.

## Room data shape
- `id`, `name`, `description`
- `exits`: direction → `{ target, lockedBy: itemId | null }`. Directions are `north`, `south`, `east`, `west`, `up` and `down`, matching the compass buttons' `data-direction`. Exits are one-way, so a passage needs an exit in both rooms.
- `items`: a list of item ids
- `enemies`: a list of enemy ids
- `flags`: for example `saveRoom`, `storageBox` or `dark`

## Planned mechanics (build in this order)
1. A three-room test map: one locked door, one key item, one save room
2. A slot-limited inventory (6–8 slots)
3. Shared storage boxes, with one global box reachable from any box location
4. Turn-based combat with scarce, stacking ammo
5. Limited saves (possibly costing a consumable), with state serialized to JSON in localStorage
6. Persistent enemies: the dead stay dead
7. Ambient audio per area, stings and low-health screen effects

## Premise
Not chosen yet. Candidates:
- **The Hollow Light:** an island lighthouse station, the relief boat never came, tunnels beneath the rock
- **Ward Nine:** a closed 1950s sanatorium in winter; you wake up as a patient with no records
- **Deepwater Station Kessler:** an oil-platform research module, storm-isolated

## Progress
- Done: page structure, mood styling, choice and compass button styles, paced narration (`showLine`, `narrate`), room data for a four-room line (basement → hallway → stairwell → upper hallway, with the stairwell's `up` exit locked by `upperHallwayKey`), and `showRoom`, which narrates a room and shows only its exits on the compass.
- Not done yet for mechanic 1: the key item, the save room flag, and descriptive hints for locked exits. Room descriptions are one line each and could be split for better pacing.
- Deferred: the original three-line opening intro, to be restored as a lead-in before the first room.

## Current step
Step 5 of the room work: make clicking a compass arrow move the player. Write `handleMove(direction)`: look up the exit in `rooms[currentRoomId].exits`; if `lockedBy` is set, narrate a locked message and stay; otherwise call `showRoom(exit.target)`. Connect all six compass buttons to it in a loop at the bottom of `game.js`. Then decide whether locked messages should add to the room description instead of replacing it.
