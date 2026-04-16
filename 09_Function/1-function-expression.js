// Function Expression - A function expression is a function that is assigned to a variable.
// These type of functions cannot be hoisted, which means they cannot be called before they are defined in the code.
// Function expression can be anonymous (without a name) or named (with a name).

// Anonymous function expression
const multiply = function (a, b) {
    return a * b;
}

console.log("Product:", multiply(4, 5)); // Output: Product: 20 because it calls the multiply function with arguments 4 and 5, returns the product, and prints it

// Named function expression
const divide = function divideNumbers(a, b) {
    return a / b;
}

console.log("Quotient:", divide(10, 2)); // Output: Quotient: 5 because it calls the divide function with arguments 10 and 2, returns the quotient, and prints it