// Object in JavaScript
// An object is a collection of properties, where each property is a key-value pair.

// 1. Object Literals
const person = {
    name: 'Saurabh',
    age: 30,
    email: "saurabh@google.com"

};
console.log(person); // Output: { name: 'Saurabh', age: 30, email: 'saurabh@google.com' }
console.log(typeof person); // Output: object

// Accessing object properties
console.log("Name:", person.name);

// Another way to access object properties is using bracket notation
console.log("Email:", person["email"]);
console.log("Age:", person["age"]);

// Special case of accessing and addind Symbol properties of an object
const sym = Symbol("id");
person[sym] = 12345;
console.log("Person object with symbol property:", person); // Output: { name: 'Saurabh', age: 30, email: '
console.log("Symbol property:", person[sym]); // Output: 12345 because

// Changing object properties
person.age = 31;
console.log("Updated age:", person.age); // Output: 31 because we have updated the age property of the person object    

// Freezeing an object to prevent modification
// Object.freeze(person);
// person.name = "John";
// console.log("Name after freezing the object:", person.name); // Output: 'Saurabh' because we cannot modify the properties of a frozen 

// Adding new properties to an object
person.address = "123 Main St";
console.log("Address after freezing the object:", person.address); // Output: undefined because we cannot add new properties to a frozen object

// for below code, we will comment out the freeze method to see the effect of adding new properties to an object

// Adding function as a property of an object
person.greet = function () {
    console.log("Hello, JavaScript!");
}

person.greet(); // Output: 'Hello, JavaScript!' because we have added a function as a property of the person object and called it

console.log(person.greet) // Output: [Function: greet] because it shows the function definition of the greet property of the person object

person.greetHello = function () {
    console.log("Hello, My name is " + this.name);
}

person.greetHello(); // Output: 'Hello, My name is Saurabh' because it uses the this keyword to access the name property of the person object and prints it in the greeting message