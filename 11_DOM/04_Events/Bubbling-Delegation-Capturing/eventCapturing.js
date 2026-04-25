// alert("Event Capturing!");

// Event Capturing
// Event capturing is the opposite of event bubbling.
// In event capturing, the event starts from the root of the document and
// propagates down to the target element. When an event occurs on an element,
// it first triggers any event listeners on the ancestors of that element,
// starting from the root and going down to the target element.

// To enable event capturing, we can pass true as the third argument to the addEventListener method:
document.getElementById("child-2").addEventListener(
  "click",
  function () {
    console.log("child li cliked");
  },
  true,
); // true means event capturing

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("parent ul clicked");
  },
  true,
); // true means event capturing
// If we click on the child li, the output will be:
// parent ul clicked
// child li cliked
// If we click on the parent ul, the output will be:
// parent ul clicked
// Note: Event capturing is less commonly used than event bubbling,
// and it is not supported in all browsers. However, it can be useful in certain
// situations where we want to handle events at a higher level in the DOM tree
// before they reach the target element.
