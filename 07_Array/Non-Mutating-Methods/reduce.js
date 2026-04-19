// reduce 
// Reduces array to single value.

const array1 = [1,2,3,4,5];

const initialVal = 0;

const total = array1.reduce((accumulator, currentVal) => accumulator + currentVal , initialVal );

console.log(total);