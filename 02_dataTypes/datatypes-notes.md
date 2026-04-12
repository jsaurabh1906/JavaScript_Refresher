# JavaScript Data Types - Complete Guide

## Table of Contents
1. [Primitive Types](#primitive-types)
2. [Non-Primitive Types](#non-primitive-types)
3. [Type Checking](#type-checking)
4. [Type Conversion](#type-conversion)
5. [Type Coercion](#type-coercion)
6. [Comparisons](#comparisons)
7. [Operations](#operations)

---

## Primitive Types

Primitive types are immutable and stored by value. There are **7 primitive types** in JavaScript:

### 1. **Number**
- Represents both integer and floating-point numbers
- Includes special values: `Infinity`, `-Infinity`, `NaN`

```javascript
let num = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;
console.log(typeof num); // "number"
```

### 2. **String**
- Represents text data
- Immutable - operations return new strings

```javascript
let str = "Hello World";
let str2 = 'Single quotes';
let str3 = `Template literals ${str}`;
console.log(typeof str); // "string"
```

### 3. **Boolean**
- Represents true or false values
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`

```javascript
let bool = true;
let isBool = false;
console.log(typeof bool); // "boolean"
```

### 4. **Undefined**
- Represents an undefined value
- Default value for uninitialized variables

```javascript
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
```

### 5. **Null**
- Represents intentional absence of value
- Special case: `typeof null === "object"` (known quirk)

```javascript
let empty = null;
console.log(typeof empty); // "object" (bug in JS)
console.log(empty === null); // true
```

### 6. **Symbol** *(ES6)*
- Creates unique, immutable identifiers
- Used as object keys

```javascript
let sym = Symbol("id");
let sym2 = Symbol("id");
console.log(sym === sym2); // false
console.log(typeof sym); // "symbol"
```

### 7. **BigInt** *(ES2020)*
- Represents integers larger than `Number.MAX_SAFE_INTEGER`
- Suffix: `n`

```javascript
let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
console.log(typeof big); // "bigint"
```

---

## Non-Primitive Types

Non-primitive types are mutable and stored by reference.

### 1. **Object**
- Collection of key-value pairs
- Most flexible data structure

```javascript
let obj = { name: "John", age: 30 };
console.log(typeof obj); // "object"
```

### 2. **Array**
- Ordered collection of elements
- Also an object (`typeof array === "object"`)

```javascript
let arr = [1, 2, 3, "four"];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
```

### 3. **Function**
- Callable objects
- First-class citizens in JavaScript

```javascript
function greet() { return "Hello"; }
let arrow = () => "Hi";
console.log(typeof greet); // "function"
console.log(typeof arrow); // "function"
```

### 4. **Date**
- Represents date/time values

```javascript
let date = new Date();
console.log(typeof date); // "object"
console.log(date instanceof Date); // true
```

### 5. **RegExp**
- Regular expressions for pattern matching

```javascript
let regex = /hello/i;
console.log(typeof regex); // "object"
console.log(regex instanceof RegExp); // true
```

---

## Type Checking

### `typeof` Operator
```javascript
console.log(typeof 42); // "number"
console.log(typeof "string"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof BigInt(123)); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof null); // "object" (doesn't work perfectly)
```

### `instanceof` Operator
```javascript
let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

let date = new Date();
console.log(date instanceof Date); // true
```

### Other Methods
```javascript
Array.isArray([1, 2]); // true
Number.isInteger(5); // true
Number.isNaN(NaN); // true
Object.prototype.toString.call(value); // "[object Type]"
```

---

## Type Conversion

### Explicit Conversion

#### String Conversion
```javascript
String(123); // "123"
String(true); // "true"
String(null); // "null"
(123).toString(); // "123"
String(undefined); // "undefined"
```

#### Number Conversion
```javascript
Number("123"); // 123
Number("3.14"); // 3.14
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number("hello"); // NaN
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45
```

#### Boolean Conversion
```javascript
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("string"); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean([]); // true (arrays are truthy)
Boolean({}); // true (objects are truthy)
```

---

## Type Coercion

Automatic conversion of types in operations.

### String Coercion
```javascript
"5" + 3; // "53" (number coerced to string)
"Hello" + null; // "Hellonull"
"5" + true; // "5true"
```

### Number Coercion
```javascript
"5" - 2; // 3 (strings coerced to numbers)
"10" * "2"; // 20
"10" / "2"; // 5
true + 1; // 2 (true becomes 1)
false + 1; // 1 (false becomes 0)
```

### Loose Equality (==) Coercion
```javascript
"5" == 5; // true (coerces string to number)
null == undefined; // true
0 == false; // true (false coerced to 0)
"" == 0; // true
[] == ![]; // true (complex coercion)
```

### Strict Equality (===) No Coercion
```javascript
"5" === 5; // false
null === undefined; // false
true === 1; // false
```

---

## Comparisons

### Equality Operators
```javascript
// Loose Equality (use cautiously)
console.log(5 == "5"); // true
console.log(null == undefined); // true
console.log(0 == false); // true

// Strict Equality (preferred)
console.log(5 === "5"); // false
console.log(null === undefined); // false
console.log(0 === false); // false
```

### Relational Operators
```javascript
5 > 3; // true
"a" < "b"; // true (string comparison)
"10" > "9"; // false (string comparison lexicographically)
10 > "9"; // true (number comparison due to coercion)
```

### NaN Comparison
```javascript
NaN == NaN; // false
NaN === NaN; // false
Number.isNaN(NaN); // true (correct way)
Object.is(NaN, NaN); // true
```

### Object Comparison
```javascript
let obj1 = { name: "John" };
let obj2 = { name: "John" };
let obj3 = obj1;

obj1 == obj2; // false (different references)
obj1 === obj2; // false (different references)
obj1 === obj3; // true (same reference)
```

---

## Operations

### Arithmetic Operations
```javascript
5 + 3; // 8
5 - 3; // 2
5 * 3; // 15
5 / 2; // 2.5
5 % 2; // 1 (modulo)
2 ** 3; // 8 (exponentiation)
```

### Unary Operations
```javascript
let num = 5;
++num; // 6 (prefix increment)
num++; // 5 (postfix increment)
--num; // 4 (prefix decrement)
num--; // 4 (postfix decrement)
+true; // 1 (unary plus coerces to number)
-true; // -1 (unary minus)
!""; // true (logical NOT)
```

### String Operations
```javascript
"Hello" + " " + "World"; // "Hello World"
"test".toUpperCase(); // "TEST"
"TEST".toLowerCase(); // "test"
"hello".length; // 5
"hello"[0]; // "h" (indexing)
"hello".charAt(0); // "h"
"hello".substring(0, 3); // "hel"
"hello world".split(" "); // ["hello", "world"]
```

### Logical Operations
```javascript
true && false; // false
true || false; // true
!true; // false
5 > 3 && 2 < 4; // true
5 > 10 || 2 == 2; // true
```

### Nullish Coalescing (??)
```javascript
null ?? "default"; // "default"
undefined ?? "default"; // "default"
0 ?? "default"; // 0 (0 is not nullish)
"" ?? "default"; // "" (empty string is not nullish)
```

### Optional Chaining (?.)
```javascript
let obj = { name: "John" };
obj?.name; // "John"
obj?.age; // undefined (doesn't throw error)
obj?.address?.street; // undefined (safe nested access)
```

---

## Best Practices

1. **Use `===` instead of `==`** - Avoid implicit coercion bugs
2. **Check for `null` and `undefined`** - They behave differently in coercion
3. **Use `Number.isNaN()` for NaN checks** - `typeof NaN === "number"`
4. **Be aware of truthy/falsy values** - Use explicit checks when needed
5. **Use `typeof` for primitives, `instanceof` for objects** - Different use cases
6. **Avoid unnecessary type coercion** - Make conversions explicit
7. **Use strict mode (`"use strict"`)** - Prevents some coercion surprises

---

## Common Pitfalls

```javascript
// Confusing typeof with null
typeof null; // "object" (not "null")

// Unexpected coercion
"5" > 3; // true (both coerced to numbers)
"hello" > 3; // false (NaN comparison)

// NaN uniqueness
NaN === NaN; // false
[NaN].includes(NaN); // true

// Array/Object coercion
[] == !![]; // true (complex coercion)
[1] == 1; // true

// Floating point precision
0.1 + 0.2 === 0.3; // false (use toFixed() or epsilon comparison)
```

---

## References
- [MDN: Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
