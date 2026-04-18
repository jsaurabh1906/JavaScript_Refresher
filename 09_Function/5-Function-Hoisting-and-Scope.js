// Function Hoisting

// Function hoisting is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can call a function before it is defined in the code, and it will still work because the function declaration is hoisted to the top.

// Example of function hoisting with a function declaration

greet(); // Output: Hello, World! because it calls the greet function before it is defined, but it works due to function hoisting
function greet() {
    console.log("Hello, World!");
}

// Example of function hoisting with a function expression

// This will result in an error because function expressions are not hoisted
// sayHello(); // Error: sayHello is not defined
const sayHello = function () {
    console.log("Hello, World!");
};
sayHello(); // Output: Hello, World! because it calls the sayHello function after it is defined, and it works as expected

// Note: Only function declarations are hoisted, while function expressions (including arrow functions) are not hoisted.
// Therefore, it's important to be aware of the type of function you are using and how it affects hoisting in your code.


// Scope in Functions

// Scope refers to the accessibility of variables and functions in different parts of the code. 
// In JavaScript, there are three types of scope: global scope, function scope, and block scope.

function outerFunction() {
    var outerVariable = "I am from the outer function"; // This variable is in the function scope of outerFunction  
    console.log(outerVariable); // Output: I am from the outer function because it accesses the outerVariable defined in the outerFunction

    function innerFunction() {
        var innerVariable = "I am from the inner function"; // This variable is in the function scope of innerFunction
        console.log(innerVariable); // Output: I am from the inner function because it accesses the innerVariable defined in the innerFunction
        console.log(outerVariable); // Output: I am from the outer function because it can access variables from its outer scope (outerFunction)
    }
    innerFunction(); // Output: I am from the inner function and I am from the outer function because it calls the innerFunction which accesses both innerVariable and outerVariable
}

outerFunction(); // Output: I am from the outer function, I am from the inner function, and I am from the outer function because it calls the outerFunction which in turn calls the innerFunction, demonstrating the scope of variables in both functions

function blockScopeExample() {
    if (true) {
        var functionScopedVariable = "I am function scoped"; // This variable is function scoped and can be accessed anywhere within the blockScopeExample function
        let blockScopedVariable = "I am block scoped"; // This variable is block scoped and can only be accessed within this if block
        const anotherBlockScopedVariable = "I am also block scoped"; // This variable is also block scoped and can only be accessed within this if block
        console.log(functionScopedVariable); // Output: I am function scoped because it accesses the functionScopedVariable defined in the if block
        console.log(blockScopedVariable); // Output: I am block scoped because it accesses the blockScopedVariable defined in the if block
        console.log(anotherBlockScopedVariable); // Output: I am also block scoped because it accesses the anotherBlockScopedVariable defined in the if block
    }
    console.log(functionScopedVariable); // Output: I am function scoped because it can access the functionScopedVariable defined in the if block due to var being function scoped
    // The following lines will result in errors because blockScopedVariable and anotherBlockScopedVariable are not accessible outside the if block
    // console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
    // console.log(anotherBlockScopedVariable); // Error: anotherBlockScopedVariable is not defined
}
blockScopeExample(); // Output: I am function scoped, I am block scoped, and I am also block scoped because it calls the blockScopeExample function which demonstrates the scope of variables defined with var, let, and const within an if block