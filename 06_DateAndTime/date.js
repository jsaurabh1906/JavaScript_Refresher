// Dates

let myDate = new Date();
console.log(myDate); // Output: current date and time 2026-04-13T09:39:04.950Z
console.log(typeof myDate); // Output: object

// Methods of Date object
console.log(myDate.toString()); // Output: current date and time in string format: Mon Apr 13 2026 15:10:47 GMT+0530 (India Standard Time)
console.log("ISO String:", myDate.toISOString()); // Output: current date and time in ISO format: 2026-04-13T09:39:04.950Z
console.log("Date String:", myDate.toDateString()); // Output: current date in string format: Mon Apr 13 2026
console.log("Time String:", myDate.toTimeString()); // Output: current time in string format: 15:10:47 GMT+0530 (India Standard Time)   
console.log("Locale String:", myDate.toLocaleString()); // Output: current date and time in locale string format: 13/04/2026, 3:10:47 PM (actual output may vary based on the locale of the environment where the code is executed)
console.log("Locale Date String:", myDate.toLocaleDateString()); // Output: current date in locale string format: 13/04/2026 (actual output may vary based on the locale of the environment where the code is executed)
console.log("Locale Time String:", myDate.toLocaleTimeString()); // Output: current time in locale string format: 3:10:47 PM (actual output may vary based on the locale of the environment where the code is executed)

//Few more
//  Instance methods of Date object

// getFullYear() method is used to get the year of a date
console.log("Year:", myDate.getFullYear()); // Output: 2026
// getMonth() method is used to get the month of a date (0-11)
console.log("Month:", myDate.getMonth()); // Output: 3 (April, because months are zero-indexed)
// getDate() method is used to get the day of the month of a date (1-31)    
console.log("Date:", myDate.getDate()); // Output: 13
// getDay() method is used to get the day of the week of a date (0-6) sunday is 0, monday is 1, tuesday is 2,...          
console.log("Day of the week:", myDate.getDay()); // Output: 1 (Monday, because days are zero-indexed)
// getHours() method is used to get the hours of a date (0-23)
console.log("Hours:", myDate.getHours()); // Output: 15
// getMinutes() method is used to get the minutes of a date (0-59)
console.log("Minutes:", myDate.getMinutes()); // Output: 13
// getSeconds() method is used to get the seconds of a date (0-59)
console.log("Seconds:", myDate.getSeconds()); // Output: 19

// getTime() method is used to get the timestamp of a date in milliseconds since January 1, 1970
console.log("Timestamp:", myDate.getTime()); // Output: current timestamp in milliseconds since January 1, 1970

// --------------------------------------------------------------

// Static methods of Date object

// now() method is used to get the current timestamp in milliseconds since January 1, 1970
console.log("Current timestamp:", Date.now()); // Output: current timestamp in milliseconds since January 1, 1970   
