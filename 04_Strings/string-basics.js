// String is a data type that represents a sequence of characters.
// String can be created using single quotes, double quotes, or backticks.
let name = 'Saurabh Jaiswal';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;

// String Interpolation allows us to embed expressions inside string literals using backticks.
console.log(`My name is ${name}`); // Using template literals with backticks

// String can also include special characters using escape sequences.
let stringWithNewLine = "Hello,\nWorld!";
console.log(stringWithNewLine); // This will print Hello, then a new line, and then World!

// String using object constructor
let stringObject = new String("This is a string object");
console.log(stringObject); // This will print the string object => [String: 'This is a string object']
console.log(typeof stringObject); // This will print 'object' because it's a String object, not a primitive string

console.log(stringObject[0]); // This will print 'T' - accessing the first character of the string object

// String Prototype Methods
// test on browser console to see the methods available in the string prototype
console.log(stringObject.__proto__); // This will print the prototype of the string object, which contains various string methods 
