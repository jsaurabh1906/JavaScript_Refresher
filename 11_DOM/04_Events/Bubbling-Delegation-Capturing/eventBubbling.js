// Event Bubbling

// Event Bubbling means:
// When an event happens on a child element,
// it first runs on that element,
// then propagates (bubbles up) to its parent,
// then grandparent, and so on till the root.

document.getElementById("child-2").addEventListener(
  "click",
  function () {
    console.log("child li cliked");
  },
  false,
); // false means event bubbling

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("parent ul cliked");
  },
  false,
); // false means event bubbling

// If we click on the child li, the output will be:
// child li cliked
// parent ul cliked

// If we click on the parent ul, the output will be:
// parent ul cliked

// If we want to stop the event from bubbling up, we can use the stopPropagation() method:

document.getElementById("child-3").addEventListener(
  "click",
  function (event) {
    console.log("child li-3 cliked");
    event.stopPropagation(); // This will stop the event from bubbling up
  },
  false,
);
// Now, if we click on the child li-3, the output will be:
// child li-3 cliked
// And the parent ul will not receive the click event, so it will not log "parent ul cliked".

// Note: Event bubbling is the default behavior in JavaScript,
// and it allows us to handle events at a higher level in the DOM tree,
// which can be more efficient than attaching event listeners to each individual element.

// Target and currentTarget:

// In an event handler, we can use the event object to access the target and currentTarget properties:
document.getElementById("container").addEventListener(
  "click",
  function (event) {
    console.log("button cliked");
    console.log("event.target:", event.target); // The element that triggered the event (the button in this case)
    console.log("event.currentTarget:", event.currentTarget); // The element that the event handler is attached to (the container div in this case)
  },
  false,
);
// When we click on the child li-4, the output will be:
// button cliked
// event.target: <button id="btn" type="button">Click Me</button>
// event.currentTarget: <div id="container">...</div>

// Event bubbling enables event delegation.
// Event delegation is a technique where we attach a single event listener to a parent element,
// and it handles events for all of its child elements.
// This can be more efficient than attaching event listeners to each individual child element,
// especially when we have a large number of child elements or when child elements are added dynamically.
// refer eventDelegation.js for more details on event delegation.
