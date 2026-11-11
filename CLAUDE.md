# Survival Horror (working title)

An **original** survival-horror game told through text, running in the browser.
It is a homage to the classic survival-horror genre, **not a remake** of any existing game. All setting, characters, story, map and puzzles are original.

## How to work with me
- Mentor style: guide me step by step and explain why. Don't hand over finished code unless I ask for it.
- Review what I paste and point out problems, then let me fix them.

## Tech stack
- Plain HTML, CSS and JavaScript, with no frameworks or build step.
- Run it with the VS Code Live Server extension. Audio needs a local server.
- Git is used for version control. The game will be pushed to a public repo.

## File layout
- `index.html`: three regions: a text panel (narration), a choice panel (buttons) and a status bar
- `style.css`: the mood styling
- `game.js`: game state, the narration renderer and the choice handlers
- `data/rooms.js`: room data as a JS object, so the page also works without a server
- `audio/`: ambient loops and sound effects

## Design principles
- **Data-driven:** content lives in `data/`, and the engine stays generic.
- **Atmosphere first:** dark palette (background about `#0b0b0c`, text about `#c9c4b8`, accent about `#7a1e1e`), a serif or typewriter font, a column about 60 characters wide, and a vignette overlay.
- **Narration:** lines fade in one at a time with deliberate pauses, and choices are disabled until narration finishes.
- **Input:** clickable choices, not a typed parser.
- **Locked exits** are still shown, with a descriptive hint about what opens them.

## Room data shape
- `id`, `name`, `description`
- `exits`: direction → `{ target, lockedBy: itemId | null }`
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

## Current step
Build `index.html` with its three regions, then the mood styling in `style.css`.
