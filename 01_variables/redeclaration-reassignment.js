// Redeclaration and Reassignment in JavaScript

// Redeclaration: Declaring a variable with the same name in the same scope
// Reassignment: Assigning a new value to an existing variable

console.log('--- Redeclaration and Reassignment with var ---');
var a = 10;
console.log('Initial value of a:', a); // 10

var a = 20; // Redeclaration is allowed with var
console.log('Value of a after redeclaration:', a); // 20

// Reassignment is also allowed with var
a = 30;
console.log('Value of a after reassignment:', a); // 30

// Problem: Can cause bugs in large apps due to accidental redeclarations

console.log('\n--- Redeclaration and Reassignment with let ---');
let b = 20;
console.log('Initial value of b:', b); // 20

// Redeclaration is NOT allowed with let
// let b = 30; // Error: Identifier 'b' has already been declared

// Reassignment is allowed with let
b = 40; // Reassignment
console.log('Value of b after reassignment:', b); // 40

console.log('\n--- Redeclaration and Reassignment with const ---');
const c = 30;
console.log('Initial value of c:', c); // 30

// const c = 40; // Error: Identifier 'c' has already been declared
// c = 50; // Error: Assignment to constant variable

