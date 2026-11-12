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
    setTimeout(() => {
        showLine("The air is thick with dust, and the only sound is the creaking of the floorboards beneath your feet.");
    }, 2000);
    setTimeout(() => {
        showLine("You see a faint light coming from the hallway. Do you want to investigate?");
    }, 5000);
}

startButton.addEventListener("click", handleStart);
