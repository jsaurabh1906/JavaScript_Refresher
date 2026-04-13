// Number in JavaScript

// using number literal
const price = 29.99;
console.log(price); // Output: 29.99
console.log(typeof price); // Output: number

// using Number constructor 
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]
console.log(typeof balance); // Output: object

// Methods of Number

// toString() method is used to convert a number to a string
console.log(balance.toString()); // Output: '100'

// toFixed() method is used to format a number using fixed-point notation
console.log("toFixed method:", price.toFixed(1)); // Output: '30.0' 30.0 because it rounds the number to one decimal place
console.log("toFixed method:", price.toFixed(2)); // Output: '29.99' 29.99 because it rounds the number to two decimal places
console.log("toFixed method:", price.toFixed(3)); // Output: '29.990' 29.990 because it rounds the number to three decimal places


// toPrecision() method is used to format a number to a specified length
let num = 123.456789;
console.log("toPrecision method:", num.toPrecision(1)); // Output: '1e+2' 1e+2 because it rounds the number to one significant digit
console.log("toPrecision method:", num.toPrecision(2)); // Output: '1.2e+2' 1.2e+2 because it rounds the number to two significant digits
console.log("toPrecision method:", num.toPrecision(3)); // Output: '123' 123 because it rounds the number to three significant digits
console.log("toPrecision method:", num.toPrecision(4)); // Output: '123.5' 123.5 because it rounds the number to four significant digits
console.log("toPrecision method:", num.toPrecision(5)); // Output: '123.46' 123.46 because it rounds the number to five significant digits

// toLocaleString() method is used to convert a number to a string using local language format
// Actual output may vary based on the locale of the environment where the code is executed
const number = 1234567.89;
console.log("toLocaleString method:", number.toLocaleString()); // Output: '1,234,567.89' in US English locale // Actual for me: 12,34,567.89
console.log("toLocaleString method:", number.toLocaleString('en-GB')); // Output: '1,234,567.89' in British English locale
//

// toExponential() method is used to convert a number to exponential notation
const largeNumber = 123456789;
console.log("toExponential method:", largeNumber.toExponential()); // Output: '1.23456789e+8' because it converts the number to exponential notation with one digit before the decimal point
console.log("toExponential method:", largeNumber.toExponential(2)); // Output: '1.23e+8' because it converts the number to exponential notation with two digits after the decimal point