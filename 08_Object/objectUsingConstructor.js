// Objects 

const instaUser = new Object(); // creating an empty object using constructor syntax
instaUser.id = "saurabh_123";
instaUser.name = "Saurabh";
instaUser.email = "saurabh@insta.com";

console.log(`Insta User:`, instaUser); // Output: Insta User: { id: 'saurabh_123', name: 'Saurabh', email: '

// object within object
const twitterUser = {
    email: "saurabh@twitter.com",
    fullname: {
        firstname: "Saurabh",
        lastname: "Jaiswal"
    }
}

// Accessing nested object properties
console.log("Twitter User's Full Name:", twitterUser.fullname.firstname + " " + twitterUser.fullname.lastname); // Output: Twitter User's Full Name: Saurabh Jaiswal because it accesses the nested object properties using dot notation and concatenates them to form the full name    


// Merging two objects using Object.assign() method
// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
// It returns the target object.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log("Merged Object:", mergedObj); // Output: Merged Object: { a: 1, b: 3, c: 4 } because it merges obj1 and obj2 into a new object and in case of duplicate keys, the value from the last object (obj2) is used

// Merging two objects using spread operator
const mergedObjWithSpread = { ...obj1, ...obj2 };
console.log("Merged Object with Spread Operator:", mergedObjWithSpread); // Output: Merged Object with Spread Operator: { a: 1, b: 3, c: 4 } because it merges obj1 and obj2 into a new object using spread operator and in case of duplicate keys, the value from the last object (obj2) is used

// Accesing object keys and values using Object.keys() and Object.values() methods
// Object.keys() method is used to return an array of a given object's own enumerable property names
// Object.values() method is used to return an array of a given object's own enumerable property values
console.log("Keys of mergedObj:", Object.keys(mergedObj)); // Output: Keys of mergedObj: ['a', 'b', 'c'] because it returns an array of the keys of the mergedObj
console.log("Values of mergedObj:", Object.values(mergedObj)); // Output: Values of mergedObj: [1, 3, 4] because it returns an array of the values of the mergedObj

// Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log("Entries of mergedObj:", Object.entries(mergedObj)); // Output: Entries of mergedObj: [['a', 1], ['b', 3], ['c', 4]] because it returns an array of the key-value pairs of the mergedObj as arrays


// hasOwnProperty() method is used to check if an object has a specific property as its own property (not inherited). It returns true if the object has the specified property, and false otherwise.
console.log("Does mergedObj have property 'a'?", mergedObj.hasOwnProperty('a'));
console.log("Does mergedObj have property 'd'?", mergedObj.hasOwnProperty('d')); // Output: Does mergedObj have property 'd'? false because mergedObj does not have a property 'd'