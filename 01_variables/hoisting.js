// Hoisting is a JavaScript mechanism where variable and function
// declarations are moved to the top of their containing scope 
// during the compilation phase. 
// This means that you can use variables and functions 
// before they are declared in the code.

// Example of hoisting with var
console.log(x); // undefined (not ReferenceError due to hoisting)
var x = 5;

/* Behind the scenes, JavaScript treats the above code as:
    var x;
    console.log(x);
    x = 10;
*/

// Example of hoisting with functions
hoistedFunction(); // Works due to hoisting
function hoistedFunction() {
  console.log('This function is hoisted!');
}