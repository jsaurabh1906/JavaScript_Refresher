// Array Methods

// Note: Following methods are changing the original array. 
// This is called mutating the array. 

const fruits = ["Apple", "Banana", "Cherry"];
// push() method is used to add one or more elements to the end of an array and returns the new length of the array

const newLength = fruits.push("Date");
console.log("Fruits after push:", fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']
console.log("New length:", newLength); // Output: 4   

// pop() method is used to remove the last element from an array and returns that element
const lastFruit = fruits.pop();
console.log("Fruits after pop:", fruits); // Output: ['Apple', 'Banana', 'Cherry']
console.log("Last fruit removed:", lastFruit); // Output: 'Date'

// shift() method is used to remove the first element from an array and returns that element
const firstFruit = fruits.shift();
console.log("Fruits after shift:", fruits); // Output: ['Banana', 'Cherry']
console.log("First fruit removed:", firstFruit); // Output: 'Apple'

// unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array
const newLengthAfterUnshift = fruits.unshift("Watermelon");
console.log("Fruits after unshift:", fruits); // Output: ['Watermelon', 'Banana', 'Cherry']
console.log("New length after unshift:", newLengthAfterUnshift); // Output: 3

// reverse() method is used to reverse the order of the elements in an array. It mutates the original array and returns a reference to the same array.
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log("Reversed numbers:", reversedNumbers); // Output: [5, 4, 3, 2, 1] because it reverses the order of the elements in the array
console.log("Original numbers array after reverse:", numbers); // Output: [5, 4, 3, 2, 1] because reverse() mutates the original array  

// 


// Non-mutating methods of array
// Note: Following methods are not changing the original array. 
// This is called non-mutating the array.   

// indexOf() method is used to return the first index at which a given element can be found in the array, or -1 if it is not present
const indexOfBanana = fruits.indexOf("Banana");
console.log("Index of Banana:", indexOfBanana); // Output: 1
const indexOfGrapes = fruits.indexOf("Grapes");
console.log("Index of Grapes:", indexOfGrapes); // Output: -1 because 'Grapes' is not in the array

// includes() method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate
const hasCherry = fruits.includes("Cherry");
console.log("Does the array include Cherry?", hasCherry); // Output: true
const hasGrapes = fruits.includes("Grapes");
console.log("Does the array include Grapes?", hasGrapes); // Output: false

// join() method is used to join all elements of an array into a string and returns this string
const fruitsString = fruits.join(", ");
console.log("Fruits joined into a string:", fruitsString); // Output: 'Watermelon, Banana, Cherry'  


// slice() method is used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
//  where start and end represent the index of items in that array.
//  The original array will not be modified.
const games = ["Chess", "Cricket", "Football", "Tennis", "Hockey", "Badminton"];

const selectedGames = games.slice(1, 4);
console.log("Selected games using slice:", selectedGames); // Output: ['Cricket', 'Football', 'Tennis'] because it selects elements from index 1 to index 3 (end index is not included)
console.log("Original games array:", games); // Output: ['Chess', 'Cricket', 'Football', 'Tennis', 'Hockey', 'Badminton'] because slice() does not mutate the original array


// splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place
// It modifies the original array and returns an array containing the deleted elements.

const deletedGames = games.splice(1, 3);
console.log("Deleted games:", deletedGames); // Output: ['Cricket', 'Football', 'Tennis']
console.log("Original games array:", games); // Output: ['Chess', 'Hockey', 'Badminton'] because splice() mutates the original array

const color = ["Red", "Green", "Blue", "Yellow", "Purple"];
const modifiedColor = color.splice(2, 1, "Cyan", "Magenta"); // It removes 1 element at index 2 (which is 'Blue') and adds 'Cyan' and 'Magenta' at index 2
console.log("Deleted color:", modifiedColor); // Output: ['Blue'] because it removes 'Blue' at index 2
console.log("Color array after splice:", color); // Output: ['Red', 'Green', 'Cyan', 'Magenta', 'Yellow', 'Purple'] because it removes 'Blue' and adds 'Cyan' and 'Magenta' at index 2


// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log("Merged array:", mergedArray);


// flat() method is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//  The original array will not be modified.

const nestedArray = [1, 2, [3, 4], [5, 6], [[7, 8], 9]];
const flattenedArray = nestedArray.flat();
console.log("Flattened array:", flattenedArray); // Output: [1, 2, 3, 4, 5, 6, [7, 8], 9] because it flattens the nested array by one level
console.log("Original nested array:", nestedArray); // Output: [1, 2, [3, 4], [5, 6], [[7, 8], 9]] because flat() does not mutate the original array

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const deeplyFlattenedArray = deeplyNestedArray.flat(Infinity);
console.log("Deeply flattened array:", deeplyFlattenedArray); // Output: [1, 2, 3, 4, 5] because it flattens the nested array to the specified depth
console.log("Original deeply nested array:", deeplyNestedArray); // Output: [1, [2, [3, [4, [5]]]]] because flat() does not mutate the original array




// Other Methods of Array

// Array.isArray() method is used to determine whether the passed value is an Array. 
// It returns true if the value is an Array, and false otherwise.

console.log("Is fruits an array?", Array.isArray(fruits)); // Output: true
console.log("Is 'Hello' an array?", Array.isArray("Hello"));


// Array.from() method is used to create a new, shallow-copied Array instance from an array-like or iterable object.
const string = "Hello";
const arrayFromString = Array.from(string);
console.log("Array from string:", arrayFromString); // Output: ['H', 'e', 'l', 'l', 'o'] because it creates an array from the characters of the string

// interesting case of Array.from() method for creating an array from a Object 
const obj = { name: "Saurabh", age: 30 };
const arrayFromObject = Array.from(obj);
console.log("Array from object:", arrayFromObject); // Output: [] because it creates an array from the object but since the object is not iterable, it returns an empty array

const arrayFromObjectWithKeys = Array.from(Object.keys(obj));
console.log("Array from object keys:", arrayFromObjectWithKeys); // Output: ['name', 'age'] because it creates an array from the keys of the object

const arrayFromObjectWithValues = Array.from(Object.values(obj));
console.log("Array from object values:", arrayFromObjectWithValues); // Output: ['Saurabh', 30] because it creates an array from the values of the object


// Array.of() method is used to create a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.
const arrayOfNumbers = Array.of(1, 2, 3);
console.log("Array of numbers:", arrayOfNumbers); // Output: [1, 2, 3] because it creates an array with the provided arguments      