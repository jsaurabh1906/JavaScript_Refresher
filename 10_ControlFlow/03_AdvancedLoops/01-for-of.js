// for of 
// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It provides a simpler syntax compared to traditional for loops when you want to access the values of an iterable directly.

// Example of using for of with an array:
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color); // This will print each color in the colors array.
}

// Example of using for of with a string:
const message = "Hello Students!";
for (const char of message) {
    console.log(char); // This will print each character in the message string.
}

// Example of using for of with a Map:
const userRoles = new Map();
userRoles.set("Alice", "admin");
userRoles.set("Bob", "editor");
userRoles.set("Charlie", "viewer");
for (const [user, role] of userRoles) { //
    console.log(`${user}: ${role}`); // This will print each user and their corresponding role.
}

// Example of using for of with a Set:
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (const number of uniqueNumbers) {
    console.log(number); // This will print each unique number in the set.
}

// The for of loop is particularly useful when you don't need to access the index of the elements in an array
// or the keys in a Map, and you just want to work with the values directly.
// It provides a cleaner and more readable syntax for iterating over iterable objects.