const startButton = document.getElementById("startButton");
const description = document.getElementById("description");

function showLine(text) {
    const line = document.createElement("p");
    line.textContent = text;
    description.append(line);
}

function handleStart() {
    description.textContent = "";
    showLine("You find yourself in a dark, abandoned house.");
    showLine("The air is thick with dust, and the only sound is the creaking of the floorboards beneath your feet.");
}

startButton.addEventListener("click", handleStart);