// Attributes

// Get an attribute getAttribute()
// The getAttribute() method returns the value of a specified attribute on the element.
//  If the given attribute does not exist, it returns null.
//  The getAttribute() method is case-insensitive.
// It returns the value of the attribute as a string, even if the attribute is a boolean or a number.

const button = document.getElementById("btn");
const attributeValue = button.getAttribute("id");
console.log("Attribute Value:", attributeValue); // Output: "btn"

const nonExistentAttribute = button.getAttribute("nonexistent");
console.log("Non-existent Attribute Value:", nonExistentAttribute); // Output: null

// for below add disabled attribute in html <button id="btn" disabled isLoading="true">Click me</button>
// const booleanAttribute = button.getAttribute("disabled");
// console.log("Boolean Attribute Value:", booleanAttribute); // Output: "" (as a string)

const isLoadingAttribute = button.getAttribute("isLoading");
console.log("isLoading Attribute Value:", isLoadingAttribute); // Output: "true" (as a string)

// Set an attribute setAttribute()
// The setAttribute() method sets the value of a specified attribute on the element.
//  If the attribute already exists, it updates its value; otherwise, it creates a new attribute with the specified name and value.
button.setAttribute("data-info", "This is a button");
console.log(button.getAttribute("data-info")); // Output: "This is a button"

// Remove an attribute removeAttribute()
// The removeAttribute() method removes a specified attribute from the element.
button.removeAttribute("data-info");
console.log(button.getAttribute("data-info")); // Output: null

// Styling

// The style property allows you to get or set the inline styles of an element.
// It returns a CSSStyleDeclaration object that contains all the inline styles of the element.

// Get the current inline style of the button
const currentStyle = button.style;
console.log("Current Style:", currentStyle); // Output: CSSStyleDeclaration { ... }

// Set an inline style
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
console.log("Updated Style:", button.style); // Output: CSSStyleDeclaration { backgroundColor: "black", color: "white", ... }

// Note: The style property only reflects the inline styles of the element.
// It does not reflect styles applied through external stylesheets or <style> tags.
// To get the computed style of an element, you can use the getComputedStyle() method.
const computedStyle = window.getComputedStyle(button);
console.log("Computed Style:", computedStyle); // Output: CSSStyleDeclaration { ... }

// classList
// classList property allows you to manipulate the classes of an element.
// It returns a DOMTokenList which is a collection of the class attributes of the element.

button.classList.add("my-button"); // Adds a class
// button.classList.remove("my-button"); // Removes a class

button.classList.toggle("active"); // Toggles a class (adds if not present, removes if present)
console.log("Class List:", button.classList); // Output: DOMTokenList(2) ["my-button", "active", value: "my-button active"]

button.classList.replace("active", "inactive"); // Replaces a active class with inactive class
console.log("Class List after replace:", button.classList); // Output: DOMTokenList(2) ["my-button", "inactive", value: "my-button inactive"]
