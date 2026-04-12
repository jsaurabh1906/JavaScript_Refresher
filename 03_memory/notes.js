// Stack Memory in JavaScript

/**
 * In JavaScript, the stack is a region of memory that is used for storing function calls and local variables. 
 * When a function is called, a new stack frame is created to hold the function's parameters and local variables. 
 * The stack operates in a last-in, first-out (LIFO) manner, 
 * meaning that the most recently called function is the first one to be executed and removed from the stack when it finishes.
 * The stack is used for managing function calls and their execution context. 
 * Each time a function is called, a new stack frame is created, and when the function returns, its stack frame is removed from the stack.
 *
 * The stack is also used for storing primitive values (like numbers, strings, booleans) and references to objects. 
 * When a variable is declared inside a function, it is stored in the stack.
 * However, when an object is created, the reference to that object is stored in the stack, while the actual object is stored in the heap memory.
 *
 * The stack has a limited size, and if it exceeds that limit (for example, due to too many nested function calls), it can lead to a "stack overflow" error.
 *
 * In summary, the stack is a crucial part of JavaScript's memory management system, responsible for handling function calls and local variables efficiently.
 */ 

// Heap Memory in JavaScript

/**
 * In JavaScript, the heap is a region of memory that is used for storing objects and data structures that have dynamic sizes. 
 * Unlike the stack, which is used for managing function calls and local variables, the heap is used for storing objects, arrays, and other complex data types.
 * When an object is created in JavaScript, it is allocated memory in the heap. The reference to that object is stored in the stack. 
 * This allows for dynamic memory allocation, as objects can grow or shrink in size as needed.
 * The heap is managed by JavaScript's garbage collector, which automatically frees up memory that is no longer being used by the program. 
 * When an object is no longer referenced (i.e., there are no variables pointing to it), it becomes eligible for garbage collection.
 *
 * In summary, the heap is a crucial part of JavaScript's memory management system, responsible for storing objects and managing dynamic memory allocation efficiently.
 */ 
