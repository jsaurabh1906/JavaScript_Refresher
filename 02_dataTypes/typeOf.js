console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof 9007199254740991n); // bigint

// Non-primitive types
console.log(typeof { name: "Saurabh" }); // object
console.log(typeof [1, 2, 3]); // object (arrays are objects)
console.log(typeof function() {}); // function  