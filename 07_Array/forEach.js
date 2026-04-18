// forEach loop
// The forEach loop is a method available on arrays in JavaScript
// that allows you to execute a provided function once for each array element.
// The forEach method takes a callback function as an argument, which is executed for each element in the array.

// Example of using forEach with an array:
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

languages.forEach(function (lang) {
    console.log(lang); // This will print each language in the languages array.
})

// You can also use an arrow function with forEach for a more concise syntax:
languages.forEach((lang) => {
    console.log(lang); // This will also print each language in the languages array using an arrow function.
});

// using defined function with forEach
function printLanguage(lang) {
    console.log(lang);
}
languages.forEach(printLanguage); // This will print each language in the languages array using a defined function.

// The forEach method also provides the index of the current element as a second argument to the callback function:
languages.forEach((lang, index, array) => {
    console.log(`Language at index ${index}: ${lang}`); // This will print each language along with its index in the languages array.
    console.log(`Array: ${array}`); // This will print the entire languages array for each element.
});

const codingLanguages = [
    { name: "JavaScript", popularity: 1, year: 1995, extension: ".js" },
    { name: "Python", popularity: 2, year: 1991, extension: ".py" },
    { name: "Java", popularity: 3, year: 1995, extension: ".java" },
    { name: "C++", popularity: 4, year: 1985, extension: ".cpp" },
    { name: "Ruby", popularity: 5, year: 1995, extension: ".rb" }
]

codingLanguages.forEach((lang) => {
    console.log(`${lang.name} was created in ${lang.year} and has the extension ${lang.extension}.`); // This will print the name, year, and extension of each programming language in the codingLanguages array.
});

// The forEach loop is particularly useful when you want to perform an action for each element in an array without needing to return a value.
// It is important to note that the forEach method does not support breaking out of the loop using a break statement,
// and it will always iterate through all elements in the array. If you need to break out of a loop, consider using a traditional for loop or a for of loop instead.