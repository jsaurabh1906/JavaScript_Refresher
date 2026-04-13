# Number and Math in JavaScript

## Number

### Definition
`Number` is a primitive data type in JavaScript that represents both integer and floating-point values.

### Creating Numbers

```javascript
// Literals
const age = 25;
const price = 19.99;
const scientific = 1.5e3; // 1500

// Using Number constructor
const num = Number("42");
const fromBoolean = Number(true); // 1
```

### Static Methods

- `Number.isInteger(value)`: Checks if the provided value is an integer. Returns `true` if the value is an integer, `false` otherwise.
  ```javascript
  Number.isInteger(25);     // true
  Number.isInteger(25.0);   // true
  Number.isInteger(25.5);   // false
  Number.isInteger("25");   // false
  ```

- `Number.isNaN(value)`: Checks if the provided value is NaN (Not-a-Number). Returns `true` if the value is NaN, `false` otherwise. Note: This is different from the global `isNaN()` function.
  ```javascript
  Number.isNaN(NaN);       // true
  Number.isNaN(0 / 0);     // true
  Number.isNaN(5);         // false
  Number.isNaN("NaN");     // false
  ```

- `Number.isFinite(value)`: Checks if the provided value is a finite number. Returns `true` if the value is finite, `false` otherwise (including NaN and Infinity).
  ```javascript
  Number.isFinite(100);    // true
  Number.isFinite(Infinity); // false
  Number.isFinite(NaN);    // false
  Number.isFinite("100");  // false
  ```

- `Number.parseFloat(string)`: Parses a string and returns a floating-point number. Ignores leading whitespace and stops at the first non-numeric character.
  ```javascript
  Number.parseFloat("3.14");     // 3.14
  Number.parseFloat("3.14abc");  // 3.14
  Number.parseFloat("  3.14  "); // 3.14
  Number.parseFloat("abc3.14");  // NaN
  ```

- `Number.parseInt(string, radix)`: Parses a string and returns an integer. The optional `radix` parameter specifies the base of the number (2-36).
  ```javascript
  Number.parseInt("42");        // 42
  Number.parseInt("42px");      // 42
  Number.parseInt("101", 2);    // 5 (binary)
  Number.parseInt("0xFF", 16);  // 255 (hexadecimal)
  ```

- `Number.isSafeInteger(value)`: Checks if the provided value is a safe integer (within the range -(2^53 - 1) to 2^53 - 1). Returns `true` if safe, `false` otherwise.
  ```javascript
  Number.isSafeInteger(9007199254740991); // true
  Number.isSafeInteger(9007199254740992); // false
  Number.isSafeInteger(5.5);              // false
  ```

### Instance Methods

- `toString(radix)`: Converts the number to a string. The optional `radix` parameter specifies the base (2-36) for the conversion.
  ```javascript
  const num = 100;
  num.toString();     // "100"
  num.toString(2);    // "1100100" (binary)
  num.toString(16);   // "64" (hexadecimal)
  ```

- `toFixed(digits)`: Formats the number using fixed-point notation with the specified number of decimal places. Rounds if necessary.
  ```javascript
  const price = 29.99;
  price.toFixed(1);   // "30.0"
  price.toFixed(2);   // "29.99"
  price.toFixed(3);   // "29.990"
  (5.567).toFixed(2); // "5.57"
  ```

- `toPrecision(precision)`: Formats the number to the specified number of significant digits. May use exponential notation if needed.
  ```javascript
  const num = 123.456789;
  num.toPrecision(1);  // "1e+2"
  num.toPrecision(2);  // "1.2e+2"
  num.toPrecision(3);  // "123"
  num.toPrecision(4);  // "123.5"
  num.toPrecision(5);  // "123.46"
  ```

- `toExponential(digits)`: Converts the number to exponential notation with the specified number of digits after the decimal point.
  ```javascript
  const largeNumber = 123456789;
  largeNumber.toExponential();  // "1.23456789e+8"
  largeNumber.toExponential(2); // "1.23e+8"
  (0.00123).toExponential(2);   // "1.23e-3"
  ```

- `toLocaleString(locales, options)`: Converts the number to a string using locale-specific formatting. The `locales` parameter specifies the language/locale.
  ```javascript
  const number = 1234567.89;
  number.toLocaleString();           // "1,234,567.89" (depends on locale)
  number.toLocaleString('en-GB');    // "1,234,567.89"
  number.toLocaleString('de-DE');    // "1.234.567,89"
  number.toLocaleString('en-IN');    // "12,34,567.89"
  ```

### Properties
- `Number.MAX_VALUE` - Largest representable number (~1.7976931348623157e+308)
- `Number.MIN_VALUE` - Smallest positive number (~5e-324)
- `Number.POSITIVE_INFINITY` - Infinity
- `Number.NEGATIVE_INFINITY` - Negative infinity
- `Number.NaN` - Not-a-Number

---

## Math

### Definition
`Math` is a built-in object with properties and methods for mathematical operations.

### Methods

#### Rounding
- `Math.round(x)`: Rounds the number to the nearest integer. If the fractional part is 0.5 or greater, rounds up.
  ```javascript
  Math.round(4.7);  // 5
  Math.round(4.4);  // 4
  Math.round(4.5);  // 5
  Math.round(-4.5); // -4
  ```

- `Math.floor(x)`: Rounds the number down to the nearest integer.
  ```javascript
  Math.floor(4.1);  // 4
  Math.floor(4.9);  // 4
  Math.floor(-4.1); // -5
  ```

- `Math.ceil(x)`: Rounds the number up to the nearest integer.
  ```javascript
  Math.ceil(4.1);  // 5
  Math.ceil(4.9);  // 5
  Math.ceil(-4.1); // -4
  ```

- `Math.trunc(x)`: Removes the decimal part of the number, returning the integer part.
  ```javascript
  Math.trunc(4.7);  // 4
  Math.trunc(-4.7); // -4
  Math.trunc(4.1);  // 4
  ```

#### Absolute Value
- `Math.abs(x)`: Returns the absolute (positive) value of the number.
  ```javascript
  Math.abs(-10);  // 10
  Math.abs(10);   // 10
  Math.abs(-0);   // 0
  ```

#### Power & Roots
- `Math.pow(base, exponent)`: Raises the base to the power of the exponent.
  ```javascript
  Math.pow(2, 3);   // 8
  Math.pow(3, 2);   // 9
  Math.pow(16, 0.5); // 4 (square root)
  ```

- `Math.sqrt(x)`: Returns the square root of the number.
  ```javascript
  Math.sqrt(16);  // 4
  Math.sqrt(25);  // 5
  Math.sqrt(22);  // 4.69041575982343
  ```

- `Math.cbrt(x)`: Returns the cube root of the number.
  ```javascript
  Math.cbrt(27);  // 3
  Math.cbrt(8);   // 2
  Math.cbrt(-8);  // -2
  ```

#### Min & Max
- `Math.min(...values)`: Returns the smallest of the provided numbers.
  ```javascript
  Math.min(1, 5, 3);    // 1
  Math.min(-1, -5, -3); // -5
  Math.min(10);         // 10
  ```

- `Math.max(...values)`: Returns the largest of the provided numbers.
  ```javascript
  Math.max(1, 5, 3);    // 5
  Math.max(-1, -5, -3); // -1
  Math.max(10);         // 10
  ```

#### Random
- `Math.random()`: Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
  ```javascript
  Math.random(); // e.g., 0.123456789
  // To get a random integer between min and max:
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomInt(1, 10); // Random integer between 1 and 10
  ```

#### Trigonometry
- `Math.sin(x)`: Returns the sine of the angle x (in radians).
  ```javascript
  Math.sin(Math.PI / 2); // 1
  Math.sin(0);           // 0
  Math.sin(Math.PI);     // 1.2246467991473532e-16 (approximately 0)
  ```

- `Math.cos(x)`: Returns the cosine of the angle x (in radians).
  ```javascript
  Math.cos(0);           // 1
  Math.cos(Math.PI / 2); // 6.123233995736766e-17 (approximately 0)
  Math.cos(Math.PI);     // -1
  ```

- `Math.tan(x)`: Returns the tangent of the angle x (in radians).
  ```javascript
  Math.tan(Math.PI / 4); // 1
  Math.tan(0);           // 0
  Math.tan(Math.PI / 2); // 16331239353195370 (very large number, approaching infinity)
  ```

#### Logarithm
- `Math.log(x)`: Returns the natural logarithm (base e) of the number.
  ```javascript
  Math.log(Math.E); // 1
  Math.log(1);      // 0
  Math.log(10);     // 2.302585092994046
  ```

- `Math.log10(x)`: Returns the base-10 logarithm of the number.
  ```javascript
  Math.log10(100); // 2
  Math.log10(10);  // 1
  Math.log10(1);   // 0
  ```

### Constants
- `Math.PI` - π (3.141592653589793)
- `Math.E` - Euler's number (2.718281828459045)
- `Math.SQRT2` - √2 (1.4142135623730951)
- `Math.SQRT1_2` - √(1/2) (0.7071067811865476)
- `Math.LN2` - Natural log of 2 (0.6931471805599453)
- `Math.LN10` - Natural log of 10 (2.302585092994046)

