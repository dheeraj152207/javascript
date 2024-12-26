// In JavaScript, the Date object is used to work with dates and times.

let currentDate = new Date()
console.log(currentDate)
console.log(currentDate.toString())
console.log(currentDate.toDateString())

//months in javascript start from 0

let date = new Date(2023,0,25)
console.log(date.toDateString())

//current time
console.log(Date.now()) // op - 1735157355361
// The Date.now() method returns the current timestamp in milliseconds
//  (since January 1, 1970, 00:00:00 UTC, also known as the Unix epoch).

//lets convert it to seconds
console.log(Math.floor(Date.now()/1000)) 

// some basic functions of date
// 1. Date.now() - Returns the current timestamp in milliseconds since January 1, 1970 (Unix epoch).
//    Example: console.log(Date.now());

// 2. new Date() - Returns the current date and time.
//    Example: let currentDate = new Date(); console.log(currentDate);

// 3. getFullYear() - Returns the full year (e.g., 2024).
//    Example: console.log(currentDate.getFullYear());

// 4. getMonth() - Returns the month (0-based, e.g., 0 = January, 11 = December).
//    Example: console.log(currentDate.getMonth());

// 5. getDate() - Returns the day of the month (1-31).
//    Example: console.log(currentDate.getDate());

// 6. getDay() - Returns the day of the week (0 = Sunday, 6 = Saturday).
//    Example: console.log(currentDate.getDay());

// 7. getHours() - Returns the hour (0-23).
//    Example: console.log(currentDate.getHours());

// 8. getMinutes() - Returns the minutes (0-59).
//    Example: console.log(currentDate.getMinutes());

// 9. getSeconds() - Returns the seconds (0-59).
//    Example: console.log(currentDate.getSeconds());

// 10. setFullYear(year) - Sets the full year of the Date object.
//     Example: currentDate.setFullYear(2025); console.log(currentDate);

// 11. setMonth(month) - Sets the month of the Date object (0-based, 0 = January, 11 = December).
//     Example: currentDate.setMonth(5); console.log(currentDate);

// 12. setDate(day) - Sets the day of the month of the Date object.
//     Example: currentDate.setDate(15); console.log(currentDate);

// 13. setHours(hours) - Sets the hours (0-23) of the Date object.
//     Example: currentDate.setHours(10); console.log(currentDate);

// 14. setMinutes(minutes) - Sets the minutes (0-59) of the Date object.
//     Example: currentDate.setMinutes(30); console.log(currentDate);

// 15. setSeconds(seconds) - Sets the seconds (0-59) of the Date object.
//     Example: currentDate.setSeconds(45); console.log(currentDate);

// 16. toISOString() - Converts the Date object to an ISO 8601 string.
//     Example: console.log(currentDate.toISOString());

// 17. toLocaleString() - Converts the Date object to a string based on the local timezone.
//     Example: console.log(currentDate.toLocaleString());
