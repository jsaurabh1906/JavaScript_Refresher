// Array

// 1. Array Literals
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
console.log(typeof fruits); // Output: object

// 2. Array Constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(typeof numbers); // Output: object

// Accessing array elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana'

// Traversing an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: 'Apple', 'Banana', 'Cherry'
}