let score = '100'; // score is a string

// Convert string to number
console.log("--Converting string to number using Number()--");
let numericScore = Number(score);
console.log(numericScore); // 100
console.log(typeof numericScore); // number

let price = 19.99; // price is a number

// Convert number to string
console.log("--Converting number to string using String()--");
let priceString = String(price);
console.log(priceString); // "19.99"
console.log(typeof priceString); // string

// Another way to convert number to string
console.log("--Converting number to string using toString()--");
let priceString2 = price.toString();
console.log(priceString2); // "19.99"
console.log(typeof priceString2); // string

// Convert string to number using parseInt
console.log("--Converting string to number using parseInt--");
let ageString = '30';
let age = parseInt(ageString);
console.log(age); // 30
console.log(typeof age); // number

// Convert string to number using parseFloat
console.log("--Converting string to number using parseFloat--");
let heightString = '5.9';
let height = parseFloat(heightString);
console.log(height); // 5.9
console.log(typeof height); // number

// Converting non-numeric string to number results in NaN
console.log("--Converting non-numeric string to number--");
let invalidNumber = Number('abc');
console.log(invalidNumber); // NaN
console.log(typeof invalidNumber); // number 
// NaN stands for "Not a Number" and indicates that the conversion failed. 
// Its type is still 'number', but it represents an invalid number.

// Convering null to number results in 0
console.log("--Converting null to number--");
let nullValue = null;
let nullToNumber = Number(nullValue);
console.log(nullToNumber); // 0
console.log(typeof nullToNumber); // number

// Converting undefined to number results in NaN
console.log("--Converting undefined to number--");
let undefinedValue;
let undefinedToNumber = Number(undefinedValue);
console.log(undefinedToNumber); // NaN
console.log(typeof undefinedToNumber); // number    

// Converting boolean to number
console.log("--Converting boolean to number--");
let trueValue = true;
let falseValue = false;
console.log(Number(trueValue)); // 1
console.log(Number(falseValue)); // 0   

// Converting boolean to string
console.log("--Converting boolean to string--");
console.log(String(trueValue)); // "true"
console.log(String(falseValue)); // "false" 

// Converting empty string to number results in 0
console.log("--Converting empty string to number--");
let emptyString = '';
let emptyStringToNumber = Number(emptyString);
console.log(emptyStringToNumber); // 0
console.log(typeof emptyStringToNumber); // number

// Converting whitespace string to number results in 0
console.log("--Converting whitespace string to number--");
let whitespaceString = '   ';
let whitespaceStringToNumber = Number(whitespaceString);
console.log(whitespaceStringToNumber); // 0
console.log(typeof whitespaceStringToNumber); // number

// Converting string with spaces to number results in NaN
console.log("--Converting string with spaces to number--");
let spacedString = '  123  ';
let spacedStringToNumber = Number(spacedString);
console.log(spacedStringToNumber); // 123
console.log(typeof spacedStringToNumber); // number 

// Converting string with non-numeric characters to number results in NaN
console.log("--Converting string with non-numeric characters to number--");
let nonNumericString = '123abc';
let nonNumericStringToNumber = Number(nonNumericString);
console.log(nonNumericStringToNumber); // NaN
console.log(typeof nonNumericStringToNumber); // number

/* ** String to Number Conversions
"" ==> 0
" " ==> 0
"123" ==> 123
"123abc" ==> NaN
"abc123" ==> NaN
null ==> 0
undefined ==> NaN
true ==> 1
false ==> 0
*/

/* ** Number to String Conversions
123 ==> "123"
19.99 ==> "19.99"
0 ==> "0"
-45 ==> "-45"
NaN ==> "NaN"
Infinity ==> "Infinity"
- Infinity ==> "-Infinity"
true ==> "true"
false ==> "false"
null ==> "null"
undefined ==> "undefined"
*/  

/* ** Summary of Type Conversions
- String to Number: Use Number(), parseInt(), or parseFloat() to convert strings to numbers. Non-numeric strings will result in NaN.
- Number to String: Use String() or toString() to convert numbers to strings.
- Boolean to Number: true converts to 1, false converts to 0.
- Boolean to String: true converts to "true", false converts to "false".
- Null and Undefined: null converts to 0 when converted to a number, while undefined converts to NaN. Both null and undefined convert to their respective string representations when converted to strings.
*/