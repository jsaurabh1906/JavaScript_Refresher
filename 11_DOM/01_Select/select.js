// Selecting Elements in the DOM

// 1. getElementById
// Selects an element by its ID
const title = document.getElementById("title");
console.log(`Selected element by ID: ${title}`); // Selected element by ID: <h1 id="title">Hello DOM</h1>

// 2. getElementsByClassName
// Selects elements by their class name (returns a live HTMLCollection)
const textItems = document.getElementsByClassName("text");
console.log(`Selected elements by class name: ${textItems}`); // Selected elements by class name:
// HTMLCollection(2) [p.text, p.text]

console.log(`First element with class 'text': ${textItems[0]}`); // First element with class 'text': <p class="text">Paragraph 1.</p>
console.log(`Second element with class 'text': ${textItems[1]}`); // Second element with class 'text': <p class="text">Paragraph 2.</p>

// 3. getElementsByTagName
// Selects elements by their tag name (returns a live HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log(`Selected elements by tag name: ${paragraphs}`); // Selected elements by tag name: HTMLCollection(2) [p.text, p.text]

// 4. querySelector
// Selects the first element that matches a CSS selector
const firstText = document.querySelector(".text");
console.log(firstText); // <p class="text">Paragraph 1.</p>

// 5. querySelectorAll
// Selects all elements that match a CSS selector (returns a static NodeList)
const allTexts = document.querySelectorAll(".text");
allTexts.forEach((el) => console.log(el));

// Note: getElementById, getElementsByClassName, and getElementsByTagName return live collections,
//  meaning they update automatically when the DOM changes.
// querySelectorAll returns a static NodeList, which does not update when the DOM changes.
