# Arrays in JavaScript

## What is an Array?
An array in JavaScript is an ordered collection of values. Arrays can hold any type of data, including numbers, strings, objects, and even other arrays.

## Creating Arrays

```javascript
// Array literal
const fruits = ["Apple", "Banana", "Cherry"];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Mixed values
const mixed = [1, "two", true, { id: 3 }, [4, 5]];
```

## Accessing Elements

```javascript
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[fruits.length - 1]); // "Cherry"
```

## Traversing Arrays

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((item, index) => {
  console.log(index, item);
});
```

---

## Mutating Array Methods
Mutating methods modify the original array.

### push()
Adds one or more elements to the end of the array and returns the new length.

```javascript
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Cherry", "Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
console.log(newLength); // 4
```

### pop()
Removes the last element and returns it.

```javascript
const last = fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(last); // "Date"
```

### shift()
Removes the first element and returns it.

```javascript
const first = fruits.shift();
console.log(fruits); // ["Banana", "Cherry"]
console.log(first); // "Apple"
```

### unshift()
Adds one or more elements to the beginning and returns the new length.

```javascript
const lengthAfter = fruits.unshift("Watermelon");
console.log(fruits); // ["Watermelon", "Banana", "Cherry"]
console.log(lengthAfter); // 3
```

### reverse()
Reverses the order of elements in place.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
```

### sort()
Sorts the array in place. Without a compare function, values are sorted as strings.

```javascript
const letters = ["b", "a", "c"];
letters.sort();
console.log(letters); // ["a", "b", "c"]

const nums = [10, 2, 30];
nums.sort();
console.log(nums); // [2, 10, 30] (string order)

nums.sort((a, b) => a - b);
console.log(nums); // [2, 10, 30] (numeric order)
```

### splice()
Removes, replaces, or inserts elements at a specific index. Returns an array of removed elements.

```javascript
const games = ["Chess", "Cricket", "Football", "Tennis", "Hockey", "Badminton"];

// Remove items
const removed = games.splice(1, 3);
console.log(removed); // ["Cricket", "Football", "Tennis"]
console.log(games); // ["Chess", "Hockey", "Badminton"]

// Insert without removal
games.splice(1, 0, "Golf", "Rugby");
console.log(games); // ["Chess", "Golf", "Rugby", "Hockey", "Badminton"]

// Replace elements
const replaceResult = games.splice(2, 2, "Soccer", "Baseball");
console.log(replaceResult); // ["Rugby", "Hockey"]
console.log(games); // ["Chess", "Golf", "Soccer", "Baseball", "Badminton"]
```

### fill()
Fills elements with a static value.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr); // [1, 2, 0, 0, 5]
```

### copyWithin()
Copies a sequence of elements within the same array.

```javascript
const arr2 = ["a", "b", "c", "d", "e"];
arr2.copyWithin(1, 3, 5);
console.log(arr2); // ["a", "d", "e", "d", "e"]
```

---

## Non-Mutating Array Methods
Non-mutating methods return new values or arrays and do not change the original.

### concat()
Merges two or more arrays into a new array.

```javascript
const array1 = ["a", "b", "c"];
const array2 = [4, 5, 6];
const merged = array1.concat(array2);
console.log(merged); // ["a", "b", "c", 4, 5, 6]
console.log(array1); // ["a", "b", "c"]
```

### slice()
Returns a shallow copy of a portion of the array.

```javascript
const games = ["Chess", "Cricket", "Football", "Tennis", "Hockey", "Badminton"];
const part1 = games.slice(1, 4);
console.log(part1); // ["Cricket", "Football", "Tennis"]
console.log(games); // original unchanged

const part2 = games.slice(-3);
console.log(part2); // ["Tennis", "Hockey", "Badminton"]

const allGames = games.slice();
console.log(allGames); // full shallow copy
```

### indexOf()
Returns the first index of an element or -1 if not found.

```javascript
const fruits = ["Watermelon", "Banana", "Cherry"];
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Grapes")); // -1
```

### includes()
Checks if the array contains a value.

```javascript
console.log(fruits.includes("Cherry")); // true
console.log(fruits.includes("Grapes")); // false
```

### join()
Joins array elements into a string.

```javascript
console.log(fruits.join(", ")); // "Watermelon, Banana, Cherry"
```

### toString()
Returns a comma-separated string representation.

```javascript
console.log(fruits.toString()); // "Watermelon,Banana,Cherry"
```

### map()
Transforms each element and returns a new array.

```javascript
const numbers2 = [1, 2, 3, 4];
const doubled = numbers2.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers2); // [1, 2, 3, 4]
```

### filter()
Returns a new array with elements that pass a test.

```javascript
const evens = numbers2.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
```

### reduce()
Reduces the array to a single value.

```javascript
const sum = numbers2.reduce((total, value) => total + value, 0);
console.log(sum); // 10
```

### find()
Returns the first element that satisfies the condition.

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 }
];
const found = users.find(user => user.age > 27);
console.log(found); // { name: "Bob", age: 30 }
```

### findIndex()
Returns the index of the first element that satisfies the condition.

```javascript
const index = users.findIndex(user => user.name === "Carol");
console.log(index); // 2
```

### some()
Checks if at least one element passes the test.

```javascript
const hasTeen = users.some(user => user.age < 20);
console.log(hasTeen); // false
```

### every()
Checks if all elements pass the test.

```javascript
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true
```

### flat()
Flattens nested arrays by one level.

```javascript
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5]]
```

### flatMap()
Maps each element and flattens the result by one level.

```javascript
const words = ["hello world", "foo bar"];
const splitWords = words.flatMap(str => str.split(" "));
console.log(splitWords); // ["hello", "world", "foo", "bar"]
```

### entries(), keys(), values()
Returns iterators for entries, keys, or values.

```javascript
const iterator = fruits.entries();
for (const [index, value] of iterator) {
  console.log(index, value);
}
```

### Array.isArray()
Checks whether a value is an array.

```javascript
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("apple")); // false
```

---

## Notes
- Arrays are zero-indexed.
- `slice()` returns a new array and does not modify the source.
- `splice()` changes the original array.
- Use mutating methods when you want to update the same array and non-mutating methods when you want to keep the original intact.
- Many array methods accept callback functions for filtering, mapping, and reducing data.
