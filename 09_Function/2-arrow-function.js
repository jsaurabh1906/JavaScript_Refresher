// Arrow Functions (ES6)

// Arrow functions are a more concise syntax for writing function expressions. 
// They were introduced in ES6 (ECMAScript 2015) and provide a shorter syntax compared to traditional function expressions.
//  Arrow functions also have some differences in behavior, particularly with regard to the `this` keyword.

// Traditional function expression
const add = function (a, b) {
    return a + b;
}
console.log("Sum using traditional function:", add(5, 3)); // Output: Sum using traditional function: 8 because it calls the add function with arguments 5 and 3, returns the sum, and prints it

// Arrow function expression
const subtract = (a, b) => {
    return a - b;
}
console.log("Difference using arrow function:", subtract(5, 3)); // Output: Difference using arrow function: 2 because it calls the subtract function with arguments 5 and 3, returns the difference, and prints it 

// Arrow function with implicit return (when the function body has only one expression, we can omit the curly braces and the return keyword)
const multiply = (a, b) => a * b;
console.log("Product using arrow function with implicit return:", multiply(4, 5)); // Output: Product using arrow function with implicit return: 20 because it calls the multiply function with arguments 4 and 5, returns the product, and prints it

// Arrow function with single parameter (when there is only one parameter, we can omit the parentheses around the parameter)
const square = x => x * x;
console.log("Square using arrow function with single parameter:", square(6)); // Output: Square using arrow function with single parameter: 36 because it calls the square function with argument 6, returns the square, and prints it

// Arrow functions without parameters (when there are no parameters, we need to use empty parentheses)
const greet = () => "Hello, JavaScript!";
console.log("Greeting using arrow function without parameters:", greet()); // Output: Greeting using arrow function without parameters: Hello, JavaScript! because it calls the greet function, returns the greeting message, and prints it

// Note: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding scope. 
// This can lead to different behavior compared to traditional functions, 
// especially when used as methods in objects or when using `this` inside a callback function.
// Example of `this` behavior in arrow functions

const person = {
    name: "Saurabh",
    greet: function () {
        console.log("Hello, " + this.name + "!"); // Output: Hello, Saurabh! because it accesses the name property of the person object using `this`
    },
    greetWithArrow: () => {
        console.log("Hello, " + this.name + "!"); // Output: Hello, undefined! because `this` in arrow functions does not refer to the person object, but inherits from the surrounding scope (which is the global scope in this case)
    }
}

person.greet(); // Output: Hello, Saurabh! because it calls the greet method of the person object and executes the code inside it
person.greetWithArrow(); // Output: Hello, undefined! because it calls the greetWithArrow method of the person object and executes the code inside it, but `this` does not refer to the person object in arrow functions
