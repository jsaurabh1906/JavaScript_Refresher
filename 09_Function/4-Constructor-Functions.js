// Constructor Functions

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Saurabh", 30);
const person2 = new Person("Alice", 25);

console.log("Person 1:", person1); // Output: Person 1: Person { name: 'Saurabh', age: 30 } because it creates a new instance of the Person constructor function with the name "Saurabh" and age 30
console.log("Person 2:", person2); // Output: Person 2: Person { name: 'Alice', age: 25 } because it creates a new instance of the Person constructor function with the name "Alice" and age 25
