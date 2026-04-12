// String Methods are built-in functions that allow us to manipulate 
// and work with strings in JavaScript.

// Example of some common string methods:
let str = "Hello, World!";

// length property returns the length of the string
console.log("Length of str:", str.length); // 13

// toUpperCase() and toLowerCase() methods return a new string with all characters converted to uppercase or lowercase, respectively.
console.log("Uppercase:", str.toUpperCase()); // "HELLO, WORLD!"
console.log("Lowercase:", str.toLowerCase()); // "hello, world!"

// indexOf() method returns the index of the first occurrence of a specified value in a string, or -1 if it is not found.
console.log("Index of 'World':", str.indexOf("World")); // 7
console.log("Index of 'd':", str.indexOf('d')); // 11 - returns the index of the first occurrence of the specified value
console.log("Index of 'o' starting from index 5:", str.indexOf('o', 5));  // 7
console.log("Index of 'xyz':", str.indexOf('xyz')); // -1 - returns -1 if the specified value is not found in the string

// lastIndexOf() method returns the index of the last occurrence of a specified value in a string, or -1 if it is not found.
console.log("Last index of 'o':", str.lastIndexOf('o')); // 8 - returns the index of the last occurrence of the specified value
console.log("Last index of 'o' starting from index 5:", str.lastIndexOf('o', 5)); // 4 - searches backwards from the specified index

// Extracting parts of a string

// slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 
// It takes two parameters: the start index and the end index (not included).
console.log("Slice (0, 5) Slice from index 0 to 5:", str.slice(0, 5)); // "Hello" - extracts a section of the string and returns it as a new string
console.log("Slice (4) Slice from index 4 to the end:", str.slice(4));        
console.log("Slice (-6) Slice from index -6 to the end:", str.slice(-6));    
console.log("Slice (-6, -1) Slice from index -6 to -1:", str.slice(-6, -1));

// substring() method returns a portion of the string between the start and end indexes, or to the end of the string if the end index is omitted.
console.log("Substring (0, 5) Substring from index 0 to 5:", str.substring(0, 5)); // "Hello"
console.log("Substring (7, 12) Substring from index 7 to 12:", str.substring(7, 12)); // "World" - returns a portion of the string, starting at the specified index and extending to the specified index (not included)
// substring() doesnt support negative indices, if you provide negative indices it will treat them as 0
console.log("Substring (-6, -1) Substring with negative indices:", str.substring(-6, -1)); // "Hello, World!" - negative indices are treated as 0
// if the start index is greater than the end index, substring() will swap them
console.log("Substring (5, 0) Substring with start index greater than end index:", str.substring(5, 0)); // "Hello" - if the start index is greater than the end index, substring() will swap them

// includes() method determines whether a string contains the characters of a specified string, returning true or false as appropriate.
console.log("Includes 'Hello':", str.includes("Hello")); // true

// split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
console.log("Split by ', ':", str.split(", ")); // ["Hello", "World!"]

// replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
//  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
console.log("Replace 'World' with 'JavaScript':", str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
let strWithMultipleWorlds = "Hello, World! Welcome to the World!";
console.log("Replace all 'World' with 'JavaScript':", strWithMultipleWorlds.replaceAll("World", "JavaScript")); // "Hello, JavaScript! Welcome to the JavaScript!" - replaces all occurrences of the specified value with another value

// trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
let strWithWhitespace = "   Hello, World!   ";
console.log("Original string with whitespace:", `"${strWithWhitespace}"`);  
console.log("Trim strWithWhitespace:", strWithWhitespace.trim()); // "Hello, World!" - removes whitespace from both ends of the string

// repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log("Repeat 2 times:", str.repeat(2)); // "Hello, World!Hello, World!" - repeats the string 2 times        

// charAt() method returns the character at the specified index in a string.
console.log("Character at index 0:", str.charAt(0)); // "H" - returns the character at the specified index

// charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log("Unicode at index 0:", str.charCodeAt(0)); // 72 - returns the Unicode of the character at the specified index     

// concat() method concatenates the string arguments to the calling string and returns a new string.
console.log("Concatenate with ' How are you?':", str.concat(" How are you?")); // "Hello, World! How are you?" - concatenates the string with another string

// endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log("Ends with '!':", str.endsWith("!")); // true - checks if the string ends with the specified characters

// startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log("Starts with 'Hello':", str.startsWith("Hello")); // true - checks if the string starts with the specified characters

// search() method executes a search for a match between a regular expression and this String object, and returns the index of the first match, or -1 if no match was found.
console.log("Search for 'World':", str.search("World")); // 7 - searches for a match between a regular expression and the string, and returns the index of the first match