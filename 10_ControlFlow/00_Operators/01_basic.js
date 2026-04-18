// Operators are used to perform operations on variables and values. In JavaScript, there are several types of operators, including:

// 1. Arithmetic Operators: Used for mathematical operations.
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0 (remainder of division)   
console.log(a ** b); // Exponentiation: 100000 (10 raised to the power of 5)

// 2. Assignment Operators: Used to assign values to variables.
let x = 10;
x += 5; // Equivalent to x = x + 5; x is now 15
x -= 3; // Equivalent to x = x - 3; x is now 12
x *= 2; // Equivalent to x = x * 2; x is now 24
x /= 4; // Equivalent to x = x / 4; x is now 6
x %= 5; // Equivalent to x = x % 5; x is now 1  
x **= 3; // Equivalent to x = x ** 3; x is now 1 (1 raised to the power of 3)

// 3. Comparison Operators: Used to compare two values and return a boolean result.
console.log(a == b); // Equality: false (checks value only)
console.log(a === b); // Strict Equality: false (checks value and type)
console.log(a != b); // Inequality: true (checks value only)
console.log(a !== b); // Strict Inequality: true (checks value and type)
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false

// 4. Logical Operators: Used to combine multiple conditions.
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // Logical AND: false (both conditions must be true)
console.log(isAdult || hasID); // Logical OR: true (at least one condition must be true)
console.log(!isAdult); // Logical NOT: false (negates the value)

// 5. Ternary Operator: A shorthand for an if-else statement.
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // If age is 18 or above, canVote is "Yes", otherwise it's "No"
console.log(canVote); // Output: "Yes"      

// 6. Type Operators: Used to check the type of a variable.
console.log(typeof a);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // Note: typeof null returns "object" due to a historical bug in JavaScript   
console.log(typeof {}); // Object
console.log(typeof []); // Object (arrays are also considered objects in JavaScript)

// 7. Bitwise Operators: Used to perform bit-level operations (not commonly used in everyday programming).
let c = 5; // In binary: 0101
let d = 3; // In binary: 0011   
console.log(c & d); // Bitwise AND: 1 (0101 & 0011 = 0001)
console.log(c | d); // Bitwise OR: 7 (0101 | 0011 = 0111)
console.log(c ^ d); // Bitwise XOR: 6 (0101 ^ 0011 = 0110)
console.log(~c); // Bitwise NOT: -6 (~0101 = 1010 in two's complement)
console.log(c << 1); // Left Shift: 10 (0101 << 1 = 1010)
console.log(c >> 1); // Right Shift: 2 (0101 >> 1 = 0010)
console.log(c >>> 1); // Unsigned Right Shift: 2 (0101 >>> 1 = 0010)

