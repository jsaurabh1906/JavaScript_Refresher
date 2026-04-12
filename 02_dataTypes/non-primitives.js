/**
 * ============================================
 *      NON-PRIMITIVE TYPES (Reference Types)
 * ============================================
 *
 * - Object
 * - Array
 * - Function
 */

// Object
const user = {
  name: "Saurabh",
  role: "Developer",
};

// Array
const numbers = [1, 2, 3];
const mixedArray = [1, "two", true, null];
const nestedArray = [1, [2, 3], { name: "Saurabh" }];

// Function
function greet() {
  return "Hello";
}

console.log(typeof user);     // object
console.log(typeof numbers);  // object (arrays are objects)
console.log(typeof greet);    // function
