const startButton = document.getElementById("startButton");
const description = document.getElementById("description");

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
 * The start button stays disabled until every line has appeared.
 * @param {string[]} lines - The lines to display, in order.
 */
function narrate(lines) {
    // Pending timers keep running after a second click, so block it until they finish.
    startButton.disabled = true;
    description.textContent = "";

    // `let` gives each timer its own copy of `i`; with `var` they would all share the final value.
    for (let i = 0; i < lines.length; i++) {
        setTimeout(() => {
            showLine(lines[i]);
        }, i * 3000);
    }

    // `lines.length` rather than `lines.length - 1` adds one extra pause after the last line.
    setTimeout(() => {
        startButton.disabled = false;
    }, lines.length * 3000);
}

/**
 * Plays the opening narration when the player starts the game.
 */
function handleStart() {
    const lines = [
        "You find yourself in a dark, abandoned house.",
        "The air is thick with dust, and the only sound is the creaking of the floorboards beneath your feet.",
        "You see a faint light coming from the hallway. Do you want to investigate?"
    ];
    narrate(lines);
}

startButton.addEventListener("click", handleStart);
