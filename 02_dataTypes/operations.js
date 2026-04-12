/* ** Arithmetic Operations**

JavaScript supports various arithmetic operations that can be performed on numbers. Here are some of the basic arithmetic operators:

1. Addition (+): Adds two numbers together.
2. Subtraction (-): Subtracts one number from another.
3. Multiplication (*): Multiplies two numbers.
4. Division (/): Divides one number by another.
5. Modulus (%): Returns the remainder of a division operation.
6. Exponentiation (**): Raises a number to the power of another.

Here are some examples of these operations in action: 
*/

let a = 10;
let b = 5;

console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0 
console.log("Exponentiation:", a ** b); // 100000

/* ** Operator Precedence**

Operator precedence determines the order in which operations are performed in an expression. In JavaScript, the operator precedence is as follows (from highest to lowest):

1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -

For example, in the expression `3 + 4 * 2`, 
the multiplication is performed first, resulting in `3 + 8`, 
which then gives `11`. If we want to change the order of operations,
we can use parentheses: `(3 + 4) * 2` will first add `3 + 4` to get `7`, 
and then multiply by `2` to get `14`.

Understanding operator precedence is crucial for writing correct and efficient code, as it ensures that expressions are evaluated in the intended order.
*/

console.log("Operator Precedence Example:", 3 + 4 * 2); // 11
console.log("Operator Precedence with Parentheses:", (3 + 4) * 2); // 14

/* String Concatenation

In JavaScript, the `+` operator can also be used for string concatenation. 
When one or both operands are strings, the `+` operator concatenates them instead of performing addition. 

*/
// Example of string concatenation
let firstName = "Saurabh";
let lastName = "Jaiswal";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // "Saurabh Jaiswal"

// If one operand is a string and the other is a number, the number will be converted to a string and concatenated
let age = 30;
let ageMessage = "I am " + age + " years old.";
console.log(ageMessage); // "I am 30 years old."

// Tricky case: If the first operand is a number and the second is a string, it will also concatenate
let trickyMessage = age + " is my age.";
console.log(trickyMessage); // "30 is my age."

// ++ and -- operators
let count = 5;
console.log("Initial Count:", count); // 5

// Using the increment operator (++)
count++;
console.log("After Increment:", count); // 6

// Using the decrement operator (--)
count--;
console.log("After Decrement:", count); // 5    

// Using the increment operator in a prefix form
console.log("Prefix Increment:", ++count); // 6 - count is incremented before being logged
console.log("Current Count:", count); // 6

// Using the decrement operator in a prefix form
console.log("Prefix Decrement:", --count); // 5 - count is decremented before being logged
console.log("Current Count:", count); // 5  

// Using the increment operator in a postfix form
console.log("Postfix Increment:", count++); // 5 - count is logged before being incremented
console.log("Current Count:", count); // 6

// Using the decrement operator in a postfix form
console.log("Postfix Decrement:", count--); // 6 - count is logged before being decremented
console.log("Current Count:", count); // 5

// Tricky cases with multiple operands:
console.log("Tricky Case:", 1 + 2 + "3"); // "33" - because 1 + 2 is evaluated first to get 3, and then "3" is concatenated to get "33"
console.log("Tricky Case with Parentheses:", 1 + (2 + "3")); // "123" - because 2 + "3" is evaluated first to get "23", and then 1 is concatenated to get "123"
console.log("Tricky Case with Parentheses:", (1 + 2) + "3"); // "33" - because 1 + 2 is evaluated first to get 3, and then "3" is concatenated to get "33"

console.log("Tricky Case +true :", +true); // 1 - because the unary plus operator converts true to 1
console.log("Tricky Case +false :", +false); // 0 - because the unary plus operator converts false to 0
console.log("Tricky Case +null :", +null); // 0 - because the unary plus operator converts null to 0
console.log("Tricky Case +undefined :", +undefined); // NaN - because the unary plus operator converts undefined to NaN