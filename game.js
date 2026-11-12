const startButton = document.getElementById("startButton");
const description = document.getElementById("description");

function showLine(text) {
    const line = document.createElement("p");
    line.textContent = text;
    description.append(line);
}

function handleStart() {
    description.textContent = "";
    const lines = [
        "You find yourself in a dark, abandoned house.",
        "The air is thick with dust, and the only sound is the creaking of the floorboards beneath your feet.",
        "You see a faint light coming from the hallway. Do you want to investigate?"
    ];
    for (let i = 0; i < lines.length; i++) {
        setTimeout(() => {
            showLine(lines[i]);
        }, i * 3000);
    }
}

startButton.addEventListener("click", handleStart);
