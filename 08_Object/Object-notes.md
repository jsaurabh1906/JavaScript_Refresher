# Objects in JavaScript

## What is an Object?
An object in JavaScript is a collection of properties, where each property is a key-value pair. Objects are used to store and organize data in a structured way.

## Creating Objects

### Object Literals
The most common way to create objects using curly braces `{}`.

```javascript
const person = {
    name: 'Saurabh',
    age: 30,
    email: "saurabh@google.com"
};

console.log(person); // { name: 'Saurabh', age: 30, email: 'saurabh@google.com' }
console.log(typeof person); // object
```

### Object Constructor
Using the `new Object()` constructor.

```javascript
const instaUser = new Object();
instaUser.id = "saurabh_123";
instaUser.name = "Saurabh";
instaUser.email = "saurabh@insta.com";

console.log(instaUser); // { id: 'saurabh_123', name: 'Saurabh', email: 'saurabh@insta.com' }
```

## Accessing Object Properties

### Dot Notation
Use dot notation when you know the property name.

```javascript
console.log(person.name); // 'Saurabh'
console.log(person.age);  // 30
```

### Bracket Notation
Use bracket notation when the property name is dynamic or contains special characters.

```javascript
console.log(person["email"]); // 'saurabh@google.com'
console.log(person["age"]);   // 30

// Dynamic property access
const property = "name";
console.log(person[property]); // 'Saurabh'
```

## Modifying Object Properties

```javascript
person.age = 31;
console.log(person.age); // 31
```

## Adding New Properties

```javascript
person.address = "123 Main St";
console.log(person.address); // '123 Main St'
```

## Adding Methods to Objects

```javascript
person.greet = function() {
    console.log("Hello, JavaScript!");
};

person.greet(); // 'Hello, JavaScript!'

person.greetHello = function() {
    console.log("Hello, My name is " + this.name);
};

person.greetHello(); // 'Hello, My name is Saurabh'
```

## Nested Objects

```javascript
const twitterUser = {
    email: "saurabh@twitter.com",
    fullname: {
        firstname: "Saurabh",
        lastname: "Jaiswal"
    }
};

// Accessing nested properties
console.log(twitterUser.fullname.firstname); // 'Saurabh'
console.log(twitterUser.fullname.lastname);  // 'Jaiswal'

// Full name concatenation
console.log("Full Name:", twitterUser.fullname.firstname + " " + twitterUser.fullname.lastname);
```

## Symbol Properties
Symbols can be used as property keys to create unique properties.

```javascript
const sym = Symbol("id");
person[sym] = 12345;

console.log(person[sym]); // 12345
console.log(person); // Shows symbol property (not enumerable by default)
```

## Object Methods

### Object.assign()
Copies properties from source objects to a target object.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// Note: obj2's 'b' overwrites obj1's 'b'
```

### Spread Operator for Merging
Modern way to merge objects.

```javascript
const mergedObjWithSpread = { ...obj1, ...obj2 };
console.log(mergedObjWithSpread); // { a: 1, b: 3, c: 4 }
```

### Object.keys()
Returns an array of the object's own enumerable property names.

```javascript
console.log(Object.keys(mergedObj)); // ['a', 'b', 'c']
```

### Object.values()
Returns an array of the object's own enumerable property values.

```javascript
console.log(Object.values(mergedObj)); // [1, 3, 4]
```

### Object.entries()
Returns an array of the object's own enumerable property [key, value] pairs.

```javascript
console.log(Object.entries(mergedObj)); // [['a', 1], ['b', 3], ['c', 4]]
```

### hasOwnProperty()
Checks if the object has a specific property as its own (not inherited).

```javascript
console.log(mergedObj.hasOwnProperty('a')); // true
console.log(mergedObj.hasOwnProperty('d')); // false
```

## Object Destructuring
Destructuring allows you to unpack properties from objects into distinct variables.

```javascript
const course = {
    title: "JavaScript Refresher",
    instructor: "Saurabh",
    duration: "3 hours",
    level: "Beginner"
};

// Basic destructuring
const { title, instructor, duration, level } = course;
console.log(title);     // 'JavaScript Refresher'
console.log(instructor); // 'Saurabh'

// Destructuring with new variable names
const { title: courseTitle, instructor: courseInstructor } = course;
console.log(courseTitle);     // 'JavaScript Refresher'
console.log(courseInstructor); // 'Saurabh'

// Destructuring with default values
const { title: courseName, difficulty = "Intermediate" } = course;
console.log(courseName);   // 'JavaScript Refresher'
console.log(difficulty);   // 'Intermediate' (default value used)

// Nested destructuring
const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

const { name, address: { city, zip } } = user;
console.log(name); // 'Alice'
console.log(city); // 'New York'
console.log(zip);  // '10001'
```

## Freezing Objects
`Object.freeze()` prevents modification of existing properties and addition of new properties.

```javascript
const frozenPerson = { name: 'John', age: 25 };
Object.freeze(frozenPerson);

// These operations will not work on frozen objects
frozenPerson.age = 26;        // No effect
frozenPerson.newProp = 'test'; // No effect

console.log(frozenPerson); // { name: 'John', age: 25 }
```

## Notes
- Objects are reference types, not primitive types.
- Property names are strings or symbols.
- Methods are functions stored as object properties.
- `this` keyword refers to the object the method is called on.
- Objects can be nested to create complex data structures.
- Destructuring provides a clean way to extract multiple properties at once.
- Use `Object.freeze()` to make objects immutable.