 /* 1. TYPES OVERVIEW
 * ============================================
 *
 * JavaScript has 2 main categories:
 *
 * 1. Primitive (immutable, stored by value)
 * 2. Non-Primitive (mutable, stored by reference)
 */

/* 2. PRIMITIVE TYPES
 * ============================================
 *
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol (ES6)
 */

/* 3. PRIMITIVE EXAMPLES
 * ============================================
 */

// String
let name = 'John Doe';
console.log(name); // John Doe

// Number
let age = 30;
console.log(age); // 30

// Boolean
let isStudent = true;
console.log(isStudent); // true

// Null
let emptyValue = null;
console.log(emptyValue); // null 
// Note: Null is an assignment value that represents no value or no object. 
// It is intentionally set to indicate the absence of any object value.    

// Undefined
let notDefined;
console.log(notDefined); // undefined
// Note: A variable that has been declared but not assigned a value is undefined.

// Symbol (ES6)
let uniqueId = Symbol('id');
console.log(uniqueId); // Symbol(id)

// Symbol (unique identifier)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("symbol comparison:", id1 === id2); // false

// Note: Symbols are unique and cannot be changed, making them useful for creating unique identifiers.

// BigInt (ES2020)
let bigNumber = 9007199254740991n; // The 'n' suffix denotes a BigInt
console.log(bigNumber); // 9007199254740991n

/* 4. PRIMITIVE BEHAVIOR
 * ============================================
 *
 * Primitive values are immutable, meaning they cannot be changed after they are created.
 * When you assign a primitive value to a variable, it is stored by value.
 * When you copy a primitive value to another variable, a new copy of the value is created.
 */

let original = 'Hello';
let copy = original;

console.log(original); // Hello
console.log(copy); // Hello

// Modifying the copy does not affect the original
copy = 'Hi';

console.log(original); // Hello
console.log(copy); // Hi
