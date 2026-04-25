// Event Object
// Event Object is the parent object of all events.
// It contains information about the event that occurred,
// such as the type of event, the target element, and other properties related to the event.

// Example: Click Event
const button = document.getElementById("btn");
button.addEventListener(
  "click",
  function (event) {
    console.log("Event Object:", event);
    console.log("Button clicked!");
    console.log("Event Target:", event.target); // The element that triggered the event
    console.log("Current Target:", event.currentTarget); // The element to which the event handler is attached
    console.log("Event Type:", event.type); // The type of event (e.g., "click")
  },
  false,
);

// The event object contains properties such as:
// - type: The type of event (e.g., "click", "mouseover").
// - target: The element that triggered the event.
// - currentTarget: The element to which the event handler is attached.
// - preventDefault(): A method to prevent the default action of the event.
// - stopPropagation(): A method to stop the event from bubbling up the DOM tree.

// preventDefault() Example:
document.getElementById("link").addEventListener(
  "click",
  function (event) {
    event.preventDefault(); // This will prevent the default action of the link (e.g., navigating to the URL)
    console.log("Link clicked (but default action prevented)");
  },
  false,
);

// stopPropagation() is used to stop the event from bubbling up the DOM tree,
// which means that the event will not trigger any event handlers on ancestor elements.
// This can be useful when we want to handle an event on a specific element and prevent it from affecting other elements.
// stopPropagation() Example:
document.getElementById("child-3").addEventListener(
  "click",
  function (event) {
    console.log("child li-3 cliked");
    event.stopPropagation(); // This will stop the event from bubbling up
  },
  false,
);
