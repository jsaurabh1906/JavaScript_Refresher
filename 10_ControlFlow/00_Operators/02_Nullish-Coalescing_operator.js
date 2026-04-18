// Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let userName = null;
let defaultName = "Guest";

let displayName = userName ?? defaultName;
console.log(displayName); // Output: "Guest"

// In this example, since userName is null, the nullish coalescing operator returns defaultName, which is "Guest".
//  If userName had a value (e.g., "Alice"), then displayName would be "Alice" instead.

// The nullish coalescing operator is particularly useful for providing default values when dealing with potentially
//  null or undefined variables, without accidentally treating falsy values (like 0 or "") as nullish.

let userScore = 0;
let defaultScore = 10;
let finalScore = userScore ?? defaultScore;
console.log(finalScore); // Output: 0

// In this case, userScore is 0, which is a falsy value but not null or undefined.
// Therefore, finalScore will be 0 instead of defaultScore, demonstrating that the nullish coalescing operator only considers null and undefined as nullish.

// You can also chain multiple nullish coalescing operators to provide multiple fallback values:
let firstName = null;
let lastName = null;
let fullName = firstName ?? lastName ?? "Anonymous";
console.log(fullName); // Output: "Anonymous"

// In this example, both firstName and lastName are null, so fullName falls back to "Anonymous". If either firstName or lastName had a value, fullName would use that value instead.

// Note: The nullish coalescing operator has a lower precedence than the logical OR (||) operator, so it is important to use parentheses when combining them to ensure the correct order of evaluation.
// let value = null || "Default" ?? "Fallback"; // This will cause a syntax error due to operator precedence.
let value = (null || "Default") ?? "Fallback"; // This is correct and will work as intended.
console.log(value); // Output: "Default"

let anotherValue = (null || undefined) ?? "foo"; // returns "foo"
console.log(anotherValue); // Output: "foo"