
# JavaScript Strings: Deep Dive

## String Basics

A string is an immutable sequence of characters. In JavaScript, strings can be created using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
const str1 = 'Hello';
const str2 = "World";
const str3 = `Template ${str1}`;
```

## String Methods

### `slice(start, end)`
**Definition**: Extracts a portion of a string and returns a new string without modifying the original.

- `start`: Beginning index (inclusive)
- `end`: Ending index (exclusive)
- Supports negative indices (counted from end)

```javascript
const str = 'JavaScript';
console.log(str.slice(0, 4));      // 'Java'
console.log(str.slice(4));         // 'Script'
console.log(str.slice(-6));        // 'Script'
console.log(str.slice(-6, -1));    // 'Scrip'
```

### `substring(start, end)`
**Definition**: Similar to `slice()`, but doesn't accept negative indices and swaps arguments if start > end.

```javascript
const str = 'JavaScript';
console.log(str.substring(0, 4));     // 'Java'
console.log(str.substring(4, 0));     // 'Java' (swapped)
console.log(str.substring(-5, 4));    // 'Java' (negative treated as 0)
```

**Key Differences from `slice()`**:
- Negative indices are treated as `0`
- If start > end, arguments are automatically swapped

### `substr(start, length)`
**Definition**: Extracts characters starting at `start` for a specified `length`. ⚠️ **Deprecated** - avoid in new code.

```javascript
const str = 'JavaScript';
console.log(str.substr(0, 4));     // 'Java'
console.log(str.substr(-6, 3));    // 'Scr'
```

### `indexOf(searchValue, fromIndex)`
**Definition**: Returns the index of the first occurrence of a substring, or `-1` if not found.

```javascript
const str = 'Hello World';
console.log(str.indexOf('o'));     // 4
console.log(str.indexOf('o', 5));  // 7
console.log(str.indexOf('xyz'));   // -1
```

### `lastIndexOf(searchValue, fromIndex)`
**Definition**: Returns the index of the last occurrence of a substring.

```javascript
const str = 'Hello World';
console.log(str.lastIndexOf('o'));    // 7
console.log(str.lastIndexOf('o', 5)); // 4
```

### `includes(searchValue, position)`
**Definition**: Returns a boolean indicating if the string contains a substring. Case-sensitive.

```javascript
const str = 'JavaScript';
console.log(str.includes('Script'));  // true
console.log(str.includes('script'));  // false
console.log(str.includes('Java', 0)); // true
```

### `startsWith(searchString, position)`
**Definition**: Returns a boolean indicating if the string begins with a substring.

```javascript
const str = 'JavaScript';
console.log(str.startsWith('Java'));     // true
console.log(str.startsWith('Script', 4)); // true
```

### `endsWith(searchString, length)`
**Definition**: Returns a boolean indicating if the string ends with a substring.

```javascript
const str = 'JavaScript';
console.log(str.endsWith('Script'));  // true
console.log(str.endsWith('Java', 4)); // true
```

### `toUpperCase()` & `toLowerCase()`
**Definition**: Returns a new string with all characters converted to uppercase or lowercase.

```javascript
const str = 'JavaScript';
console.log(str.toUpperCase());   // 'JAVASCRIPT'
console.log(str.toLowerCase());   // 'javascript'
```

### `trim()`, `trimStart()`, `trimEnd()`
**Definition**: Removes whitespace from the string.

```javascript
const str = '  Hello World  ';
console.log(str.trim());       // 'Hello World'
console.log(str.trimStart());  // 'Hello World  '
console.log(str.trimEnd());    // '  Hello World'
```

### `split(separator, limit)`
**Definition**: Splits a string into an array of substrings based on a separator.

```javascript
const str = 'apple,banana,cherry';
console.log(str.split(','));           // ['apple', 'banana', 'cherry']
console.log(str.split(',', 2));        // ['apple', 'banana']
console.log(str.split(''));            // ['a', 'p', 'p', 'l', 'e', ...]
```

### `replace(searchValue, replaceValue)`
**Definition**: Replaces the **first** occurrence of a substring. Use regex with `g` flag for global replacement.

```javascript
const str = 'hello world, hello universe';
console.log(str.replace('hello', 'hi'));              // 'hi world, hello universe'
console.log(str.replace(/hello/g, 'hi'));             // 'hi world, hi universe'
```

### `replaceAll(searchValue, replaceValue)`
**Definition**: Replaces **all** occurrences of a substring. ✅ Modern alternative to regex.

```javascript
const str = 'hello world, hello universe';
console.log(str.replaceAll('hello', 'hi'));  // 'hi world, hi universe'
```

### `repeat(count)`
**Definition**: Returns a new string repeated the specified number of times.

```javascript
const str = 'abc';
console.log(str.repeat(3));  // 'abcabcabc'
console.log(str.repeat(0));  // ''
```

### `concat(...strings)`
**Definition**: Combines multiple strings into one. Often replaced by template literals.

```javascript
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));  // 'Hello World'
```

### `charAt(index)` & `charCodeAt(index)`
**Definition**: Returns the character or character code at a specific index.

```javascript
const str = 'JavaScript';
console.log(str.charAt(0));       // 'J'
console.log(str.charCodeAt(0));   // 74 (Unicode value)
```
