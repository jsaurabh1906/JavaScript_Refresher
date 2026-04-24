// Manipulating the DOM
// We can manipulate the DOM by changing the content, attributes, styles, and structure of elements.

// const button = document.getElementById("changeTextButton");
const paragraph = document.getElementById("paragraph");

// Text Content
// Here we change the text content of the paragraph
// Example: Changing the text content of an element

paragraph.textContent = "The text has been changed!";

// Inner HTML
// Here we change the inner HTML of the paragraph, which allows us to include HTML tags
// Example: Changing the inner HTML of an element

paragraph.innerHTML =
  "The text has been changed! <strong>This is bold.</strong>"; // This will make "This is bold." appear in bold text

// Inner Text
// Here we change the inner text of the paragraph, which will ignore any HTML tags
// Example: Changing the inner text of an element

paragraph.innerText =
  "The text has been changed! <strong>This will not be bold.</strong>"; // This will display the text without interpreting the HTML tags means it will show "<strong>This will not be bold.</strong>" as plain text
