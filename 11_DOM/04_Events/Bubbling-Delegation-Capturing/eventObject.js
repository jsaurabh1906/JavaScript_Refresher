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
