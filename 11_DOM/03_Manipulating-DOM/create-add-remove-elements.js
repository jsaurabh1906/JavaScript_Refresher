// Create, Add, and Remove Elements in the DOM

const container = document.getElementById("container");

// 1. createElement
// createElement() is used to create a new element

const newParagraph = document.createElement("p");
newParagraph.textContent =
  "This is a new paragraph.--> using createElement() and appendChild()";
console.log(newParagraph); // <p>This is a new paragraph.</p>

const newButton = document.createElement("button");
newButton.textContent = "Click me";
console.log(newButton); // <button>Click me</button>

// Add the new paragraph to the container
// 2. appendChild
// appendChild() is used to add a new child element to a parent element
container.appendChild(newParagraph);
container.appendChild(newButton);

// 3. prepend
// prepend() is used to add a new child element at the beginning of a parent element
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent =
  "This is another paragraph. --> using createElement() and prepend()";
container.prepend(anotherParagraph);

// 4. remove
// remove() is used to remove an element from the DOM
newButton.remove(); // This will remove the button from the DOM

const item = document.getElementById("remove");
item.remove(); // This will remove the item from the DOM

// using parent
const listItem = document.getElementById("list");
list.removeChild(list.firstElementChild); // This will remove the first item from the list
