# Date and Time in JavaScript

## Date Object

### Definition
The `Date` object in JavaScript represents a single moment in time. It stores the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix epoch).

### Creating Date Objects

```javascript
// Current date and time
let myDate = new Date();
console.log(myDate); // Output: current date and time (e.g., 2026-04-13T09:39:04.950Z)

// From milliseconds since epoch
let dateFromMs = new Date(1640995200000); // January 1, 2022

// From date string
let dateFromString = new Date("2022-01-01T00:00:00Z");

// From individual components (year, month, day, hours, minutes, seconds, milliseconds)
let specificDate = new Date(2022, 0, 1, 12, 30, 45, 500); // January 1, 2022, 12:30:45.500
```

### Instance Methods

#### String Representation Methods
- `toString()`: Converts the date to a string in a human-readable format.
  ```javascript
  console.log(myDate.toString()); // Output: "Mon Apr 13 2026 15:10:47 GMT+0530 (India Standard Time)"
  ```

- `toISOString()`: Converts the date to an ISO 8601 string format.
  ```javascript
  console.log("ISO String:", myDate.toISOString()); // Output: "2026-04-13T09:39:04.950Z"
  ```

- `toDateString()`: Returns the date portion as a string.
  ```javascript
  console.log("Date String:", myDate.toDateString()); // Output: "Mon Apr 13 2026"
  ```

- `toTimeString()`: Returns the time portion as a string.
  ```javascript
  console.log("Time String:", myDate.toTimeString()); // Output: "15:10:47 GMT+0530 (India Standard Time)"
  ```

- `toUTCString()`: Converts the date to a string in UTC format.
  ```javascript
  console.log("UTC String:", myDate.toUTCString()); // Output: "Mon, 13 Apr 2026 09:39:04 GMT"
  ```

- `toLocaleString()`: Converts the date to a string using locale-specific formatting.
  ```javascript
  console.log("Locale String:", myDate.toLocaleString()); // Output: "13/04/2026, 3:10:47 PM" (varies by locale)
  ```

- `toLocaleDateString()`: Returns the date portion using locale-specific formatting.
  ```javascript
  console.log("Locale Date String:", myDate.toLocaleDateString()); // Output: "13/04/2026" (varies by locale)
  ```

- `toLocaleTimeString()`: Returns the time portion using locale-specific formatting.
  ```javascript
  console.log("Locale Time String:", myDate.toLocaleTimeString()); // Output: "3:10:47 PM" (varies by locale)
  ```

- `toJSON()`: Returns a string representation of the date in ISO format, used for JSON serialization.
  ```javascript
  console.log("JSON:", myDate.toJSON()); // Output: "2026-04-13T09:39:04.950Z"
  ```

#### Getter Methods
- `getFullYear()`: Returns the full year (4 digits).
  ```javascript
  console.log("Year:", myDate.getFullYear()); // Output: 2026
  ```

- `getMonth()`: Returns the month (0-11, where 0 is January).
  ```javascript
  console.log("Month:", myDate.getMonth()); // Output: 3 (April)
  ```

- `getDate()`: Returns the day of the month (1-31).
  ```javascript
  console.log("Date:", myDate.getDate()); // Output: 13
  ```

- `getDay()`: Returns the day of the week (0-6, where 0 is Sunday).
  ```javascript
  console.log("Day of the week:", myDate.getDay()); // Output: 1 (Monday)
  ```

- `getHours()`: Returns the hour (0-23).
  ```javascript
  console.log("Hours:", myDate.getHours()); // Output: 15
  ```

- `getMinutes()`: Returns the minutes (0-59).
  ```javascript
  console.log("Minutes:", myDate.getMinutes()); // Output: 13
  ```

- `getSeconds()`: Returns the seconds (0-59).
  ```javascript
  console.log("Seconds:", myDate.getSeconds()); // Output: 19
  ```

- `getTime()`: Returns the timestamp in milliseconds since January 1, 1970, 00:00:00 UTC.
  ```javascript
  console.log("Timestamp:", myDate.getTime()); // Output: current timestamp (e.g., 1776142247950)
  ```

- `getTimezoneOffset()`: Returns the time zone difference in minutes from UTC.
  ```javascript
  console.log("Timezone Offset:", myDate.getTimezoneOffset()); // Output: -330 (for IST, 5.5 hours ahead)
  ```

- `valueOf()`: Returns the primitive value of the Date object (same as getTime()).
  ```javascript
  console.log("Value:", myDate.valueOf()); // Output: current timestamp (e.g., 1776142247950)
  ```

#### Setter Methods
- `setFullYear(year, month?, date?)`: Sets the full year and optionally month and date.
  ```javascript
  let date = new Date();
  date.setFullYear(2025);
  console.log(date.getFullYear()); // Output: 2025
  ```

- `setMonth(month, date?)`: Sets the month (0-11) and optionally the date.
  ```javascript
  date.setMonth(5); // June
  console.log(date.getMonth()); // Output: 5
  ```

- `setDate(date)`: Sets the day of the month (1-31).
  ```javascript
  date.setDate(15);
  console.log(date.getDate()); // Output: 15
  ```

- `setHours(hours, minutes?, seconds?, ms?)`: Sets the hour and optionally minutes, seconds, milliseconds.
  ```javascript
  date.setHours(10, 30, 0, 0);
  console.log(date.getHours()); // Output: 10
  ```

- `setMinutes(minutes, seconds?, ms?)`: Sets the minutes and optionally seconds and milliseconds.
  ```javascript
  date.setMinutes(45);
  console.log(date.getMinutes()); // Output: 45
  ```

- `setSeconds(seconds, ms?)`: Sets the seconds and optionally milliseconds.
  ```javascript
  date.setSeconds(30);
  console.log(date.getSeconds()); // Output: 30
  ```

- `setTime(time)`: Sets the date to the specified timestamp.
  ```javascript
  date.setTime(1640995200000); // January 1, 2022
  console.log(date.toDateString()); // Output: "Sat Jan 01 2022"
  ```

### Static Methods

- `Date.now()`: Returns the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC.
  ```javascript
  console.log("Current timestamp:", Date.now()); // Output: current timestamp (e.g., 1776142247950)
  ```

## Additional Notes
- Months are zero-indexed (0 = January, 11 = December).
- Days of the week are zero-indexed (0 = Sunday, 6 = Saturday).
- The `Date` object can be created with various constructors, such as `new Date(milliseconds)`, `new Date(dateString)`, `new Date(year, month, day, hours, minutes, seconds, milliseconds)`.
- For more advanced date manipulation, consider using libraries like `date-fns` or `moment.js`.