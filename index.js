// select all buttons with class drum
const numberOfDrumButtons = document.querySelectorAll(".drum");

// Detecting button click and playing sound
numberOfDrumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonKey = this.textContent;

    playSound(buttonKey);
    animateButton(buttonKey);
  });
});

// Detecting keyboard press and playing sound
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  // Only accept the seven drum keys
  if ("wasdjkl".includes(key) && key.length === 1) {
    playSound(key);
    animateButton(key);
  }
});

// Function to play sound
function playSound(key) {
  let soundFile;

  switch (key) {
    case "w":
      soundFile = "tom-1.mp3";
      break;
    case "a":
      soundFile = "tom-2.mp3";
      break;
    case "s":
      soundFile = "tom-3.mp3";
      break;
    case "d":
      soundFile = "tom-4.mp3";
      break;
    case "j":
      soundFile = "snare.mp3";
      break;
    case "k":
      soundFile = "crash.mp3";
      break;
    case "l":
      soundFile = "kick-bass.mp3";
      break;
    default:
      return;
  }

  // Create a new audio object for each drum hit
  const audio = new Audio("sounds/" + soundFile);
  audio.play().catch(function (error) {
    console.error("Error playing sound:", error);
  });
}

// Function to animate button
function animateButton(key) {
  const activeButton = document.querySelector("." + key);

  if (activeButton === null) {
    return;
  }

  // Add the pressed class
  activeButton.classList.add("pressed");

  // Remove the pressed class after 150 milliseconds
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}
