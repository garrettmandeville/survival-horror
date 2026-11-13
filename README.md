# Survival Horror (working title)

A browser-based survival-horror text adventure built with plain HTML, CSS and JavaScript.

This is a personal learning project. I'm building it step by step to practice DOM programming, asynchronous timing, data-driven design and version control. It's an original game inspired by the classic survival-horror genre, not a remake of any existing game.

## Status

Early development. Right now you can:

- Start the game and watch narration fade in line by line, with buttons disabled until it finishes
- See the first room of a four-room test map (basement → hallway → stairwell → upper hallway)
- See a compass that shows only the current room's exits

Next up: moving between rooms by clicking the compass, then locked doors and a key item.

## How to run

The game has no build step and no dependencies.

1. Clone the repo:
   ```bash
   git clone https://github.com/garrettmandeville/survival-horror.git
   ```
2. Open the folder in VS Code and start the **Live Server** extension, or open `index.html` directly in a browser.

Audio (planned) will need a local server such as Live Server, because browsers restrict loading audio from `file://` pages.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page layout: status bar, narration panel, action buttons and compass |
| `style.css` | Dark, atmospheric styling built on CSS custom properties |
| `game.js` | Game state, the paced narration renderer and input handlers |
| `data/rooms.js` | Room data (names, descriptions, exits, locks), kept separate from the engine |

## Design approach

- **Data-driven:** rooms live in `data/` and the engine stays generic, so new content means new data, not new code.
- **No text parser:** you move with a clickable compass (N/S/E/W, Up/Down), and actions are buttons.
- **Paced narration:** lines appear one at a time with pauses to build tension.

## Roadmap

1. Three-room test map with a locked door, a key item and a save room
2. Slot-limited inventory
3. Shared storage boxes
4. Turn-based combat with scarce ammo
5. Limited saves stored in `localStorage`
6. Persistent enemies (the dead stay dead)
7. Ambient audio, sound stings and low-health screen effects

## What I'm learning

- Manipulating the DOM without a framework
- Sequencing timed events with `setTimeout`
- Separating data from logic
- Writing clear commits and documenting code with JSDoc

## License

[MIT](LICENSE) © 2026 Garrett Mandeville
