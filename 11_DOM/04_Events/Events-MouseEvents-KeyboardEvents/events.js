// Events
// An event is an action that occurs in the browser, such as a user interaction (click, hover, etc.) or a change in the state of an element.
// JavaScript allows you to listen for these events and respond to them using event listeners.

// 1. Event Listeners
// Add an event listener to a button
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// 2. Event Object
// Access the event object in an event listener
button.addEventListener("click", function (event) {
  console.log("Event:", event); // Logs the event object
  console.log("Button clicked at coordinates:", event.clientX, event.clientY);
});

// 3. Keyboard Events
// Listen for keydown events on the document
document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});

// 4. Mouse Events
// Listen for mouseover events on a div
const div = document.getElementById("myDiv");
div.addEventListener("mouseover", function (event) {
  console.log("Mouse over div at coordinates:", event.clientX, event.clientY);
});
