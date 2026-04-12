// Temporal Dead Zone (TDZ) in JavaScript

// TDZ is the period between entering a scope and 
// declaring a variable with let/const
// During this period, accessing the variable throws a ReferenceError

console.log('--- Example 1: TDZ with let ---');
try {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
} catch (error) {
  console.log('Error:', error.message);
}

console.log('\n--- Example 2: TDZ with const ---');
try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  const y = 10;
} catch (error) {
  console.log('Error:', error.message);
}

console.log('\n--- Example 3: var does NOT create TDZ ---');
console.log(z); // undefined (hoisted and initialized to undefined)
var z = 15;

console.log('\n--- Example 4: TDZ in functions ---');
function testTDZ() {
  try {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
  } catch (error) {
    console.log('Error:', error.message);
  }
  let a = 20;
}
testTDZ();

console.log('\n--- Example 5: TDZ in block scope ---');
let outer = 'outside';
{
  try {
    console.log(outer); // ReferenceError due to TDZ (shadowing)
  } catch (error) {
    console.log('Error:', error.message);
  }
  let outer = 'inside';
}

console.log('\n--- Example 6: Accessing variable after declaration ---');
let b = 25;
console.log(b); // 25 (no TDZ, successfully declared and initialized)


// TDZ exists for: let, const (ES6+) 
// TDZ does NOT exist for: var (hoisted and initialized to undefined)
// TDZ causes ReferenceError if variable accessed before declaration within its scope
