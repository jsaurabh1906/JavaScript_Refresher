# JavaScript Variables - Complete Walkthrough

## Table of Contents
1. [Introduction](#introduction)
2. [Variable Declaration](#variable-declaration)
3. [Variable Naming Conventions](#variable-naming-conventions)
4. [Scope](#scope)
5. [Hoisting](#hoisting)
6. [Summary](#summary)

---

## Introduction

Variables are the fundamental building blocks of JavaScript. They are containers for storing data values that can be referenced and manipulated throughout your code.

---

## Variable Declaration

### `var` (Legacy)
- Function-scoped or globally-scoped
- Can be redeclared and updated
- Hoisted and initialized with `undefined`

```javascript
var name = "John";
var name = "Jane"; // Valid - redeclaration
name = "Bob";      // Valid - reassignment
```

### `let` (Modern - Block Scoped)
- Block-scoped (within `{}`)
- Cannot be redeclared, but can be updated(reassigned)
- Hoisted but not initialized (Temporal Dead Zone)

```javascript
let age = 25;
age = 26;          // Valid - reassignment
// let age = 27;   // Error - cannot redeclare
```

### `const` (Modern - Block Scoped, Immutable)
- Block-scoped
- Cannot be redeclared or updated (but object properties can be modified)
- Hoisted but not initialized

```javascript
const city = "New York";
// city = "Los Angeles";  // Error - cannot reassign

const user = { name: "Alice" };
user.name = "Bob";  // Valid - modifying object property
```

---

## Variable Naming Conventions

### Rules
- Must start with a letter, underscore `_`, or dollar sign `$`
- Can contain letters, digits, underscores, and dollar signs
- Are case-sensitive
- Cannot use reserved keywords

### Best Practices
- Use camelCase for variable names
- Use PascalCase for constructor functions and classes
- Use UPPER_SNAKE_CASE for constants
- Use descriptive, meaningful names

```javascript
// Good
let userName = "Alice";
let isActive = true;
const MAX_ATTEMPTS = 3;

// Avoid
let u = "Alice";
let data = true;
let x = 3;
```

---

## Scope

### Global Scope
Variables accessible everywhere in the code

```javascript
let globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
```

### Function Scope
Variables only accessible within the function

```javascript
function greet() {
  let localVar = "Hello";
  console.log(localVar); // Works
}
// console.log(localVar); // Error - not defined
```

### Block Scope (let, const)
Variables only accessible within the `{}` block

```javascript
if (true) {
  let blockScoped = "Only here";
  const alsoBlockScoped = "Only here too";
}
// console.log(blockScoped); // Error - not defined
```

### Module Scope (ES6+)
Variables scoped to a module file

```javascript
// file1.js
let moduleVar = "Private to this module";
export const publicVar = "Can be imported";
```

---

## Hoisting

### Variable Hoisting
JavaScript moves declarations to the top of their scope before execution.

**`var` Hoisting:**
```javascript
console.log(x); // undefined (not an error!)
var x = 5;
// Interpreted as:
// var x;
// console.log(x);
// x = 5;
```

**`let` and `const` Hoisting:**
```javascript
// console.log(y); // ReferenceError - Temporal Dead Zone
let y = 10;
// The variable is hoisted but not initialized
```

### Function Hoisting
Function declarations are fully hoisted

```javascript
test(); // Works!

function test() {
  console.log("Function hoisted");
}
```

Function expressions are NOT hoisted

```javascript
// test2(); // Error
const test2 = function() {
  console.log("Not hoisted");
};
```

---


## Best Practices

✅ **Do:**
- Use `const` by default
- Use `let` for variables that need to be reassigned
- Avoid `var` in modern JavaScript
- Declare variables close to where they're used
- Use meaningful, descriptive names
- Group related declarations together

```javascript
// Good
const MAX_USERS = 100;
let currentUsers = 0;

function addUser() {
  currentUsers++;
}
```

❌ **Don't:**
- Use `var` in new code
- Create global variables carelessly
- Use single-letter names (except in loops)
- Redeclare variables
- Assume type coercion

```javascript
// Avoid
var x, y, z; // vague names
var globalCounter = 0; // global pollution
let a = b = c = 5; // creates global variable
```

---

## Summary

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Redeclare | ✅ | ❌ | ❌ |
| Reassign | ✅ | ✅ | ❌ |
| Hoisting | ✅ (initialized) | ✅ (TDZ) | ✅ (TDZ) |
| Use In Modern JS | ❌ | ✅ | ✅ |

---

