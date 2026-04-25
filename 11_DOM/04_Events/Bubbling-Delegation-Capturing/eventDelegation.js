// alert("Event Delegation!");
// Event Delegation

// Event bubbling enables event delegation.
// Event delegation is a technique where we attach a single event listener to a parent element,
// and it handles events for all of its child elements.
// This can be more efficient than attaching event listeners to each individual child element,
// especially when we have a large number of child elements or when child elements are added dynamically.

// Let's see an example of event delegation:

// Instead of adding listeners to multiple children, attach one listener to parent.

document.getElementById("parent").addEventListener("click", function (event) {
  // Check if the clicked element is a child li
  if (event.target.tagName === "LI") {
    console.log("child li clicked:", event.target.textContent);
  } else {
    console.log("parent ul clicked");
  }
});

//
document.getElementById("parent-delegation").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.innerText);
  }
});

// In this example, we have a single click event listener attached to the parent ul element.
// When we click on any of the child li elements, the event bubbles up to the parent ul,
// and the event listener on the parent ul checks if the clicked element (event.target) is an li.
// If it is, it logs the text content of the clicked li. If we click on the parent ul itself,
// it logs "parent ul clicked".
