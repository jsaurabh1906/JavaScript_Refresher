// filter method
// The filter method is a non-mutating method available on arrays in JavaScript
// that creates a new array containing only the elements that pass a test function.
// The filter method takes a callback function as an argument, which is executed for each element in the array.
// If the callback function returns true for an element, that element is included in the new array.
// If the callback function returns false for an element, that element is excluded from the new array.

// Example of using filter with an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0; // This will return true for even numbers and false for odd numbers.
});

console.log(evenNumbers); // This will print [2, 4, 6, 8, 10]

// You can also use an arrow function with filter for a more concise syntax:
const oddNumbers = numbers.filter((num) => num % 2 !== 0);

console.log(oddNumbers); // This will print [1, 3, 5, 7, 9]

// using defined function with filter
function isGreaterThanFive(num) {
    return num > 5;
}
const greaterThanFive = numbers.filter(isGreaterThanFive);

console.log(greaterThanFive); // This will print [6, 7, 8, 9, 10]

// The filter method is particularly useful when you want to create a new array containing only certain elements based on a condition.

// You can also use filter with arrays of objects to filter based on object properties:
const products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Phone", price: 499, category: "Electronics" },
    { name: "Tablet", price: 299, category: "Electronics" },
    { name: "Monitor", price: 199, category: "Electronics" },
    { name: "Book", price: 19, category: "Books" },
    { name: "Chair", price: 89, category: "Furniture" },
    { name: "Desk", price: 199, category: "Furniture" },
    { name: "Snack", price: 5, category: "Food" }
];

const expensiveProducts = products.filter((prod) => prod.price > 500);
console.log(expensiveProducts); // This will print [{ name: "Laptop", price: 999 }]

const furnitureProducts = products.filter((prod) => prod.category === "Furniture");
console.log(furnitureProducts); // This will print [{ name: "Chair", price: 89 }, { name: "Desk", price: 199 }]

