// Parameters and Arguments

// Parameters are the names listed in the function definition. 
// They act as placeholders for the values that will be passed to the function when it is called.

// Arguments are the actual values that are passed to the function when it is called. 
// They are assigned to the corresponding parameters in the function definition.

// Example of parameters and arguments in a function

function greet(name) { // 'name' is a parameter
    console.log("Hello, " + name + "!");
}

greet("Saurabh"); // 'Saurabh' is an argument, Output: 'Hello, Saurabh!' because it calls the greet function with the argument "Saurabh" and prints the greeting message

// Function with multiple parameters
function add(a, b) { // 'a' and 'b' are parameters
    return a + b;
}
const sum = add(5, 3); // '5' and '3' are arguments, Output: Sum: 8 because it calls the add function with arguments 5 and 3, returns the sum, and assigns it to the variable sum
console.log("Sum:", sum); // Output: Sum: 8 because it prints the value of the variable sum which holds the result of the add function

// Function with default parameters
function greetPerson(name = "Guest") { // 'name' is a parameter with a default value of "Guest"
    console.log("Hello, " + name + "!");
}
greetPerson(); // Output: 'Hello, Guest!' because it calls the greetPerson function without any arguments, so the default value "Guest" is used for the name parameter
greetPerson("Saurabh"); // Output: 'Hello, Saurabh!' because it calls the greetPerson function with the argument "Saurabh", which overrides the default value for the name parameter and prints the greeting message

// Function with rest parameters
function sumAll(...numbers) { // '...numbers' is a rest parameter that collects all the arguments into an array
    return numbers.reduce((total, num) => total + num, 0); // It uses the reduce method to sum all the numbers in the array
}

const totalSum = sumAll(1, 2, 3, 4, 5); // '1', '2', '3', '4', and '5' are arguments, Output: Total Sum: 15 because it calls the sumAll function with multiple arguments, collects them into an array, sums them up, and assigns the result to the variable totalSum
console.log("Total Sum:", totalSum); // Output: Total Sum: 15 because it prints the value of the variable totalSum which holds the result of the sumAll function        

// Function with rest parameters and default parameters
function greetMultiple(greeting = "Hello", ...names) { // 'greeting' is a parameter with a default value of "Hello", and '...names' is a rest parameter that collects all the remaining arguments into an array
    names.forEach(name => {
        console.log(greeting + ", " + name + "!");
    });
}

greetMultiple("Hi", "Saurabh", "Alice", "Bob"); // 
// Output:
// Hi, Saurabh!
// Hi, Alice!
// Hi, Bob!
// because it calls the greetMultiple function with a greeting and multiple names,
//  uses the greeting for each name in the array, and prints the greeting messages   

