/**
 * The game map. Each room is stored under its id so exits can look it up with rooms[target].
 *
 * Room shape:
 *   id          - must match the room's key in this object
 *   name        - shown to the player
 *   description - array of lines, narrated one at a time
 *   exits       - direction -> { target, lockedBy }
 *                 target:   id of the room the exit leads to
 *                 lockedBy: id of the item that unlocks it, or null if open
 *
 * Exits are one-way: a two-way passage needs a matching exit in both rooms.
 */
const rooms = {
    basement: {
        id: "basement",
        name: "Dusty Basement",
        description: ["A dark, musty basement filled with cobwebs and old furniture."],
        exits: {
            east: { target: "hallway", lockedBy: null }
        }
    },
    hallway: {
        id: "hallway",
        name: "Dim Hallway",
        description: ["A dimly lit hallway with peeling wallpaper and a faint smell of mildew."],
        exits: {
            west: { target: "basement", lockedBy: null },
            north: { target: "stairwell", lockedBy: null }
        }
    },
    stairwell: {
        id: "stairwell",
        name: "Creaky Stairwell",
        description: ["A narrow stairwell with creaky wooden steps leading to the upper floors."],
        exits: {
            south: { target: "hallway", lockedBy: null },
            up: { target: "upperHallway", lockedBy: "upperHallwayKey" }
        }
    },
    upperHallway: {
        id: "upperHallway",
        name: "Upper Hallway",
        description: ["An upper hallway with ornate decorations and a sense of grandeur."],
        exits: {
            down: { target: "stairwell", lockedBy: null }
        }
    },
};
