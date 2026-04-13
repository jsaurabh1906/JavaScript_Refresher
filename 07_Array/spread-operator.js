// Spread Operator

// The spread operator is a powerful feature in JavaScript that allows you to expand elements of an iterable (like an array or string) into individual elements. 
// It is denoted by three dots (...). 

// 1. Spread operator with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("New numbers array:", newNumbers); // Output: [1, 2, 3, 4, 5] because it expands the elements of the numbers array and adds 4 and 5 at the end

const letters = ['a', 'b', 'c'];
const numbersAndLetters = [...numbers, ...letters];
console.log("Numbers and letters array:", numbersAndLetters); // Output: [1, 2, 3, 'a', 'b', 'c'] because it expands the elements of both numbers and letters arrays into a new array

// 2. Spread operator with strings
const greeting = "Hello";
const characters = [...greeting];
console.log("Characters in greeting:", characters); // Output: ['H', 'e', 'l', 'l', 'o'] because it expands the characters of the string into an array
