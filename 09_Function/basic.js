// Function BASICS
// A function is a reusable block of code that performs a specific task.
// It can take input parameters, perform operations, and return a value.

// Function Declaration
function greet() {
    console.log("Hello, JavaScript!");
}

// Calling the function
greet(); // Output: 'Hello, JavaScript!' because it calls the greet function and executes the code inside it    

// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Saurabh"); // Output: 'Hello, Saurabh!' because it calls the greetPerson function with the argument "Saurabh" and prints the greeting message

// Function with return value
function add(a, b) {
    return a + b;
}

// Calling the function and storing the return value in a variable
const sum = add(5, 3);
console.log("Sum:", sum); // Output: Sum: 8 because it calls the add function with arguments 5 and 3, returns the sum, and assigns it to the variable sum


