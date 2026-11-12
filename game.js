const startButton = document.getElementById("startButton");
const description = document.getElementById("description");
const compassButtons = document.querySelectorAll("#compass button");
const compass = document.getElementById("compass");

// The id of the room the player is in. Stored as an id, not the room object,
// so it is easy to save later; look the room up with rooms[currentRoomId].
let currentRoomId = "basement";

/**
 * Appends one line of narration to the description panel as its own paragraph.
 * @param {string} text - The line to display.
 */
function showLine(text) {
    const line = document.createElement("p");
    line.textContent = text;
    description.append(line);
}

/**
 * Clears the description panel and reveals the given lines one at a time.
 * The compass stays disabled until every line has appeared.
 * @param {string[]} lines - The lines to display, in order.
 */
function narrate(lines) {
    // Moving mid-narration would mix two rooms' text, because pending timers keep running.
    // `disabled` is separate from `hidden`, so this never reveals arrows for missing exits.
    for (const button of compassButtons) {
        button.disabled = true;
    }
    description.textContent = "";

    // `let` gives each timer its own copy of `i`; with `var` they would all share the final value.
    for (let i = 0; i < lines.length; i++) {
        setTimeout(() => {
            showLine(lines[i]);
        }, i * 3000);
    }

    // `lines.length` rather than `lines.length - 1` adds one extra pause after the last line.
    setTimeout(() => {
        for (const button of compassButtons) {
            button.disabled = false;
        }
    }, lines.length * 3000);
}

/**
 * Moves the player into a room: narrates its description and shows
 * only the compass arrows for exits the room has. Locked exits still show.
 * @param {string} roomId - A key in `rooms`.
 */
function showRoom(roomId) {
    currentRoomId = roomId;
    const room = rooms[roomId];
    narrate(room.description);

    for (const button of compassButtons) {
        const direction = button.dataset.direction;
        if (room.exits[direction]) {
            button.hidden = false;
        } else {
            button.hidden = true;
        }
    }
}

/**
 * Starts the game in the first room. The start button is removed so the
 * game can't be restarted mid-play, and the compass is revealed.
 */
function handleStart() {
    startButton.hidden = true;
    compass.hidden = false;
    showRoom("basement");
}

startButton.addEventListener("click", handleStart);
