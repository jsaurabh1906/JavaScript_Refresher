// Stack Memory in JavaScript -- for Primitives 

let a = 10; // a is stored in stack memory
let b = a;  // b is stored in stack memory, and it gets a copy of the value of a

console.log("Value of a:", a); // 10
console.log("Value of b:", b); // 10

// Modifying b does not affect a, because they are stored separately in the stack
b = 20;

console.log("After modifying b:");
console.log("Value of a:", a); // 10 (unchanged)
console.log("Value of b:", b); // 20 (changed)

// Heap Memory in JavaScript -- for Objects

let obj1 = { name: "Saurabh" }; // obj1 is stored in stack memory, but the actual object is stored in heap memory
let obj2 = obj1; // obj2 is stored in stack memory, and it gets a reference to the same object in heap memory

console.log("obj1:", obj1); // { name: "Saurabh" }
console.log("obj2:", obj2); // { name: "Saurabh" }

// Modifying obj2 will affect obj1, because they both reference the same object in heap memory
obj2.name = "Jaiswal";

console.log("After modifying obj2:");
console.log("obj1:", obj1); // { name: "Jaiswal" } (changed)
console.log("obj2:", obj2); // { name: "Jaiswal" } (changed)
