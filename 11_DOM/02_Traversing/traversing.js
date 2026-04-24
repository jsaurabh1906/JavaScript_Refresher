// Traversing the DOM

// Traversing the DOM means navigating through the nodes in the DOM tree.
// We can move up, down, and sideways through the tree to access different elements.
// 1. parentNode

//Access the parent node of an element
const parent = document.getElementById("parent");
console.log(parent.parentNode); // <body>...</body>

// 2. childNodes
// Access the child nodes of an element
const children = parent.childNodes;
console.log(children); // NodeList(7) [text, h2, text, p, text, p, text]

// 3. firstElementChild and lastElementChild
// Access the first and last child that is an element (ignoring text nodes)
console.log(parent.firstElementChild); // <h2>...</h2>
console.log(parent.lastElementChild); // <p>...</p>

// 4. nextElementSibling and previousElementSibling
// Access the next and previous sibling that is an element (ignoring text nodes)
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.nextElementSibling); // <p>...</p>
console.log(firstParagraph.previousElementSibling); // <h2>...</h2>

// Note: When traversing the DOM, be aware of text nodes that may be present due to whitespace in the HTML.
// Use element-specific properties (like firstElementChild) to avoid issues with text nodes.

// To summarize, DOM traversal allows us to navigate through the structure of the document and access related elements based on their relationships in the DOM tree.

// BeAware of following mehods that return text nodes as well:
// 1. firstChild and lastChild
// Access the first and last child of an element (including text nodes)
console.log(parent.firstChild); // text node (whitespace)
console.log(parent.lastChild); // text node (whitespace)

// 2. nextSibling and previousSibling
// Access the next and previous sibling of an element (including text nodes)
console.log(firstParagraph.nextSibling); // text node (whitespace)
console.log(firstParagraph.previousSibling); // text node (whitespace)
