// Control flow defines how your program executes statements —
// which code runs, when, and under what conditions.
// Loops are a fundamental part of control flow that allow you to execute a block of code multiple times based on a condition.

// The while and do-while loops are two types of loops in JavaScript that execute a block of code as long as a specified condition is true.

// While Loop
// The while loop executes a block of code as long as a specified condition is true. The syntax of a while loop is as follows:
/*
while (condition) {
    // code to be executed
}
*/
// The condition is evaluated before each iteration of the loop. If the condition is true, the code block is executed. If the condition is false, the loop terminates.
// Example: 

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}


// do-while Loop
// The do-while loop executes a block of code at least once, and then continues to execute the block as long as a specified condition is true. The syntax of a do-while loop is as follows:
/*
do {
    // code to be executed
} while (condition);
*/
// The condition is evaluated after each iteration of the loop. If the condition is true, the loop continues; if it is false, the loop terminates.
// Example:
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);