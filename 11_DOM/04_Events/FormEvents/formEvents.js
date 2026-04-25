// Form Events
// Form events are triggered when a user interacts with a form element,
// such as submitting a form or changing the value of an input field.
// The most common form event is the "submit" event, which occurs when a user submits a form.

const form = document.querySelector("form");
const usernameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#email");

// 1. input event
// input event is triggered when the value of an input field changes
usernameInput.addEventListener("input", function (event) {
  console.log("Username input changed:", event.target.value);
});

passwordInput.addEventListener("input", function (event) {
  console.log("Email input changed:", event.target.value);
});

// 2. submit event
// submit event is triggered when a form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior (e.g., page reload)
  console.log("Form submitted!");
});

// 3. change event
// change event is triggered when an input field loses focus and its value has changed
usernameInput.addEventListener("change", function (event) {
  console.log("Username input changed and lost focus:", event.target.value);
});
passwordInput.addEventListener("change", function (event) {
  console.log("Email input changed and lost focus:", event.target.value);
});

// 4. focus event
// focus event is triggered when an input field gains focus
usernameInput.addEventListener("focus", function (event) {
  console.log("Username input focused");
});
passwordInput.addEventListener("focus", function (event) {
  console.log("Email input focused");
});

// 5. blur event
// blur event is triggered when an input field loses focus
usernameInput.addEventListener("blur", function (event) {
  console.log("Username input blurred");
});
passwordInput.addEventListener("blur", function (event) {
  console.log("Email input blurred");
});
