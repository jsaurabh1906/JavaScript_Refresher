// Comparison operators in JavaScript
// Comparison operators are used to compare two values and return a boolean result (true or false).
// Equality (==) -> checks if two values are equal, performing type coercion if necessary.
// Strict Equality (===) -> checks if two values are equal without performing type coercion.
// Inequality (!=) -> checks if two values are not equal, performing type coercion if necessary.


// Equality (==) and Strict Equality (===)
console.log("Equality (==) Example:", 5 == '5'); // true - because it performs type coercion
console.log("Strict Equality (===) Example:", 5 === '5'); // false - because it does not perform type coercion

// Inequality (!=) and Strict Inequality (!==)
console.log("Inequality (!=) Example:", 5 != '5'); // false - because it performs type coercion
console.log("Strict Inequality (!==) Example:", 5 !== '5'); // true - because it does not perform type coercion

// Greater than (>) and Less than (<)
console.log("Greater than (>) Example:", 10 > 5); // true
console.log("Less than (<) Example:", 10 < 5); // false

// Greater than or equal to (>=) and Less than or equal to (<=)
console.log("Greater than or equal to (>=) Example:", 10 >= 10); // true
console.log("Less than or equal to (<=) Example:", 5 <= 10); // true

// Comparing different data types
console.log("Comparing number and string with == :", 5 == '5'); // true - because it performs type coercion
console.log("Comparing number and string with === :", 5 === '5'); // false - because it does not perform type coercion

// Comparing boolean values
console.log("Comparing boolean values with == :", true == 1); // true - because it performs type coercion
console.log("Comparing boolean values with === :", true === 1); // false - because it does not perform type coercion

// Comparing null and undefined
console.log("Comparing null and undefined with == :", null == undefined); // true - because it performs type coercion
console.log("Comparing null and undefined with === :", null === undefined); // false - because it does not perform type coercion