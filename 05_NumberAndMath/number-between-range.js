const min = 10;
const max = 20;

// Generate a random number between min and max
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
// Math.random() * (max - min + 1) generates a random number between 0 (inclusive) and (max - min + 1) (exclusive) // here, it generates a random number between 0 and 11 (exclusive)
// Math.floor() rounds the number down to the nearest integer, so it generates a random integer between 0 and 10 (inclusive)
// Adding min to the result shifts the range to be between min and max (inclusive)  
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 
console.log("Random number between 10 and 20:", randomNum); // Output: a random number between 10 and 20