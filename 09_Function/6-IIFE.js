// Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined.
// It is a common pattern used to create a new scope and avoid polluting the global namespace with variables and functions.
// IIFEs are often used for data privacy and to create a self-contained module of code.

// Example of an IIFE

(function () {
    var message = "Hello, I am an IIFE!"; // This variable is private to the IIFE and cannot be accessed from outside
    console.log(message); // Output: Hello, I am an IIFE! because it prints the message defined within the IIFE
})(); // The parentheses at the end of the function expression immediately invoke the function, executing the code inside it

// IIFEs can also take parameters   
(function (name) {
    var greeting = "Hello, " + name + "!"; // This variable is private to the IIFE and cannot be accessed from outside
    console.log(greeting); // Output: Hello, Saurabh! because it prints the greeting message using the name parameter passed to the IIFE
})("Saurabh"); // The argument "Saurabh" is passed to the IIFE, which uses it to create a personalized greeting message and prints it

// IIFEs can also return values
const result = (function (a, b) {
    return a + b; // This value is returned from the IIFE and can be assigned to a variable
})(5, 3); // The arguments 5 and 3 are passed to the IIFE, which adds them together and returns the result
console.log(result); // Output: 8 because it prints the result of the IIFE, which is the sum of 5 and 3

// IIFE with arrow function syntax
(() => {
    const message = "Hello from an IIFE with arrow function syntax!"; // This variable is private to the IIFE and cannot be accessed from outside
    console.log(message); // Output: Hello from an IIFE with arrow function syntax! because it prints the message defined within the IIFE using arrow function syntax
})(); // The parentheses at the end of the arrow function expression immediately invoke the function, executing the code inside it


// 👉 Useful for:
// Avoiding global scope pollution