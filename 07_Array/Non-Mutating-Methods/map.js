// map method
// map method creates a new array from calling a function for every array element.


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.map((num) => num + 10);
console.log(newNums);

// chaining
const chainedNums = nums.map((num)=> num *10).map((num)=> num +1);

console.log(chainedNums);