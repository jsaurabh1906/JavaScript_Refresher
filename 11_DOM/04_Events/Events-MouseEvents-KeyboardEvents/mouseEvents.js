// Mouse Events
// Mouse events are triggered by user interactions with the mouse, such as clicks, movements, and hovering.

// 1. Click Event
// Add a click event listener to a button
const clickButton = document.getElementById("clickBtn");
clickButton.addEventListener("click", function () {
  alert("Button clicked!");
});

// 2. Mouseover and Mouseout Events
// Add mouseover and mouseout event listeners to a div
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.style.backgroundColor = "lightblue";
});
hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.style.backgroundColor = "lightpink";
});

// 3. Mousemove Event
// Add a mousemove event listener to the document
document.addEventListener("mousemove", function (event) {
  console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
});

// 4. Mousedown and Mouseup Events
// Add mousedown and mouseup event listeners to a button
const dragButton = document.getElementById("dragBtn");
dragButton.addEventListener("mousedown", function () {
  console.log("Mouse button pressed down");
});
dragButton.addEventListener("mouseup", function () {
  console.log("Mouse button released");
});

// 5. Mouseenter and Mouseleave Events
// Add mouseenter and mouseleave event listeners to a div
const enterDiv = document.getElementById("enterDiv");
enterDiv.addEventListener("mouseenter", function () {
  enterDiv.style.backgroundColor = "lightgreen";
});
enterDiv.addEventListener("mouseleave", function () {
  enterDiv.style.backgroundColor = "lightcoral";
});

// 6. Double Click Event
// Add a double click event listener to a button
const dblClickButton = document.getElementById("dblClickBtn");
dblClickButton.addEventListener("dblclick", function () {
  alert("Button double-clicked!");
});

// Note: Mouse events can be used to create interactive and dynamic web pages, allowing users to engage with elements in various ways.
