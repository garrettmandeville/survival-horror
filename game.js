const startButton = document.getElementById("startButton");
const description = document.getElementById("description");

function handleStart() {
    description.textContent = "";

    const line1 = document.createElement("p");
    line1.textContent = "You find yourself in a dark, abandoned house.";
    description.append(line1);

    const line2 = document.createElement("p");
    line2.textContent = "The air is thick with dust, and the only sound is the creaking of the floorboards beneath your feet.";
    description.append(line2);
}

startButton.addEventListener("click", handleStart);