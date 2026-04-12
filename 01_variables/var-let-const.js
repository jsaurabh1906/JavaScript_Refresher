var a = 10;       // function-scoped
let b = 20;       // block-scoped
const c = 30;     // block-scoped, cannot reassign

// Re-declaration
var x = 1;
var x = 2; //allowed

// let y = 1;
// let y = 2;  Error: Identifier 'y' has already been declared

// const z = 1;
// z = 2;  Error: Assignment to constant variable

/*
| Feature        | `var`              | `let`           | `const`       |
| -------------- | -----------------  | --------------- | ------------- |
| Scope          | Function           | Block           | Block         |
| Hoisting       | Yes (`undefined`)  | Yes (TDZ)       | Yes (TDZ)     |
| Re-declaration | ✅ Allowed         | ❌ Not allowed | ❌ Not allowed |
| Re-assignment  | ✅ Allowed         | ✅ Allowed     | ❌ Not allowed |
*/