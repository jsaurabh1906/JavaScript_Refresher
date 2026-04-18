// for in loop
// The for in loop is used to iterate over the properties of an object. 
// It allows you to access the keys of an object and perform operations on them.

// Example of using for in with an object:
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
for (const key in car) {
    console.log(`${key}: ${car[key]}`); // This will print each key and its corresponding value in the car object.
}

// In this example, the for in loop iterates over each key in the car object and prints the key along with its corresponding value.
// The output will be:
// make: Toyota
// model: Camry
// year: 2020
// color: red

// You can also use for in to iterate over the properties of an object that has been created using a constructor function or a class:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Bob", 25);
for (const key in person1) {
    console.log(`${key}: ${person1[key]}`); // This will print each key and its corresponding value in the person1 object.
}
// In this example, the for in loop iterates over the properties of the person1 object created using the Person constructor function and prints each key and its corresponding value.
// The output will be:
// name: Bob
// age: 25

// for in loops can also be used to iterate over the indices of an array, 
// although it is generally recommended to use a traditional for loop or a for of loop for arrays:

const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`); // This will print the index and the corresponding fruit in the fruits array.
}
// In this example, the for in loop iterates over the indices of the fruits array and prints each index along with the corresponding fruit.
// The output will be:
// Index: 0, Fruit: apple
// Index: 1, Fruit: banana
// Index: 2, Fruit: cherry