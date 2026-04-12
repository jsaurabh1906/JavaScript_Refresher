// Type Coercion in JavaScript

/* Type coercion is the automatic or implicit conversion of values from one data type to another. 
JavaScript performs type coercion in certain situations, such as when using operators with different data types. 
This can lead to unexpected results if you're not careful.

For example, when using the `+` operator with a string and a number, JavaScript will convert the number to a string and concatenate them instead of performing addition:
*/

let result = 'The answer is: ' + 42;
console.log(result); // "The answer is: 42"

/* In this case, the number `42` is coerced into a string and concatenated with the other string.

Type coercion can also occur with other operators. For example, when using the `-` operator with a string and a number, JavaScript will attempt to convert the string to a number:
*/

let subtractionResult = '100' - 50;
console.log(subtractionResult); // 50

/* In this case, the string `'100'` is coerced into the number `100`, and then the subtraction is performed.

It's important to be aware of type coercion in JavaScript, as it can lead to bugs if you're not careful. 
To avoid unexpected results, it's often a good idea to explicitly convert values to the desired type using functions like `Number()`, `String()`, or `Boolean()`.
*/      

// String concatenation with type coercion
let name = "Alice";
let age = 30;
let message = name + " is " + age + " years old.";
console.log(message); // "Alice is 30 years old."

// Using the + operator with different types
let mixedResult = 5 + "10"; // number + string
console.log(mixedResult); // "510" - the number 5 is coerced to a string and concatenated with "10"

// Using the - operator with different types
let anotherMixedResult = "20" - 5; // string - number
console.log(anotherMixedResult); // 15 - the string "20" is coerced to a number and then subtracted by 5

// Using the * operator with different types
let multiplicationResult = "5" * 2; // string * number
console.log(multiplicationResult); // 10 - the string "5" is coerced to a number and then multiplied by 2

// Using the / operator with different types
let divisionResult = "10" / 2; // string / number
console.log(divisionResult); // 5 - the string "10" is coerced to a number and then divided by 2

// Using the % operator with different types
let modulusResult = "15" % 4; // string % number
console.log(modulusResult); // 3 - the string "15" is coerced to a number and then the modulus operation is performed with 4

// Using the ** operator with different types
let exponentiationResult = "2" ** 3; // string ** number
console.log(exponentiationResult); // 8 - the string "2" is coerced to a number and then raised to the power of 3

// Using Boolean coercion
let truthyValue = "Hello"; // non-empty string is truthy
let falsyValue = ""; // empty string is falsy

console.log(Boolean(truthyValue)); // true
console.log(Boolean(falsyValue)); // false

// Boolean coercion with numbers
console.log(Boolean(0)); // false - 0 is falsy
console.log(Boolean(1)); // true - non-zero numbers are truthy
console.log(Boolean(-1)); // true - non-zero numbers are truthy

// Boolean coercion with null and undefined
console.log(Boolean(null)); // false - null is falsy
console.log(Boolean(undefined)); // false - undefined is falsy

// Boolean concatenation with type coercion
let boolConcatResult = true + " is a boolean"; // boolean + string
console.log(boolConcatResult); // "true is a boolean" - the boolean true is coerced to the string "true" and concatenated with " is a boolean"  

let boolSubtractionResult = true - 1; // boolean - number
console.log(boolSubtractionResult); // 0 - the boolean true is coerced to the number 1, and then 1 is subtracted from it to get 0

let boolMultiplicationResult = false * 10; // boolean * number
console.log(boolMultiplicationResult); // 0 - the boolean false is coerced to the number 0, and then multiplied by 10 to get 0

let boolDivisionResult = true / 2; // boolean / number
console.log(boolDivisionResult); // 0.5 - the boolean true is coerced to the number 1, and then divided by 2 to get 0.5

// Using Null and Undefined with type coercion
let nullValue = null;
let undefinedValue;

console.log("Null Value with Number type coercion:", nullValue + 5); // 5 - null is coerced to 0, and then 5 is added to it
console.log("Undefined Value with Number type coercion:", undefinedValue + 5); // NaN - undefined is coerced to NaN, and then 5 is added to it resulting in NaN
