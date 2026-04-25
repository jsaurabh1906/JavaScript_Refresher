// Keyboard Events
// Keyboard events are triggered by user interactions with the keyboard,
// such as key presses and releases.

// 1. Keydown Event
// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  console.log(`Key down: ${event.key}`);
});

// 2. Keyup Event
// Add a keyup event listener to the document
document.addEventListener("keyup", function (event) {
  console.log(`Key up: ${event.key}`);
});
