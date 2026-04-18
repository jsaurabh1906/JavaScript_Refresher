// Control Flow in JavaScript
// Control flow defines how your program executes statements —
// which code runs, when, and under what conditions.

// Conditional statements allow you to execute different blocks of code based on certain conditions.

// The most basic conditional statement is the if statement:
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
// In this example, the code inside the if block will only execute if the condition (age >= 18) is true. 
// If age is less than 18, the code inside the block will be skipped.


// ----------------------------------------------------------------------------------------------------------------
// You can also use an else statement to execute code when the condition is false:

let number = 10;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}
// In this case, if number is greater than 0, it will print "The number is positive."
// If number is 0 or negative, it will print "The number is not positive."

// ----------------------------------------------------------------------------------------------------------------
// For multiple conditions, you can use else if:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
// Here, the program checks if score is 90 or above for an A, then checks if it's 80 or above for a B, and if neither condition is met, it defaults to C.

const userAge = 20;

if (userAge < 18) {
    console.log("Minor");
} else if (userAge >= 18 && userAge < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
// In this example, the program categorizes the user as a Minor, Adult, or Senior based on their age.

// ------------------------------------------------------------------------------------------------------------------
// You can also use nested if statements for more complex conditions:
let temperature = 30;
if (temperature > 25) {
    if (temperature > 30) {
        console.log("It's very hot!");
    } else {
        console.log("It's warm.");
    }
} else {
    console.log("It's cool.");
}
// In this example, the program first checks if the temperature is greater than 25. If it is, it then checks if it's greater than 30 to determine if it's very hot or just warm. If the temperature is 25 or below, it will print "It's cool."

// Truthy and Falsy Values
// In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Falsy values include: false, 0, "", null, undefined, and NaN.
// All other values are considered truthy. This means that you can use these values directly in if statements without explicitly comparing them to true or false.   

// Ternary Operator
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is as follows:
// condition ? valueIfTrue : valueIfFalse;

let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount); // Output: 0.1   

// In this example, if isMember is true, discount will be 0.1 (10% discount). If isMember were false, discount would be 0 (no discount).

