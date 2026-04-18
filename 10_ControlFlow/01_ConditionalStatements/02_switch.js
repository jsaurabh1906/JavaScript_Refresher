// Switch Statement

// The switch statement is a control flow statement that allows you to execute different blocks of code
//  based on the value of an expression. It is often used as an alternative to multiple if-else statements
// when you have a large number of conditions to check.

// The syntax of a switch statement is as follows:
/*
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // more cases...
    default:
        // code to be executed if expression doesn't match any case
}
*/
// The switch statement evaluates the expression and compares it to the values specified in each case.
// If a match is found, the corresponding block of code is executed until a break statement is encountered.
// If no match is found, the code in the default case is executed (if provided).
// Example:

const role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;
    case "user":
        console.log("Limited access");
        break;
    default:
        console.log("Guest");
}
// In this example, the switch statement checks the value of the role variable.
// Since role is "admin", it matches the first case and prints "Full access".
// The break statement prevents the execution from falling through to the next cases.
// If role were "user", it would print "Limited access". If role were any other value, it would print "Guest".  

// You can also use switch statements with numbers or other types of values:

const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// In this example, the switch statement checks the value of day and prints the corresponding day of the week.
// If day is 3, it will print "Wednesday". If day is any value other than 1-7, it will print "Invalid day". 

// Note: The switch statement uses strict comparison (===) to compare the expression with the case values.

// You can also have multiple cases execute the same block of code by omitting the break statement between them:

const fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
        console.log("This is a common fruit.");
        break;
    default:
        console.log("Unknown fruit.");
}
// In this example, if fruit is "apple", "banana", or "orange", it will print "This is a common fruit.".
// If fruit is any other value, it will print "Unknown fruit."

