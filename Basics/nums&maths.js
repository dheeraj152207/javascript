const score = 4000.445555
console.log(scoreOne.toPrecision(2)) // op - 4000.44


const scoreOne = new Number(4000)
console.log(scoreOne.toFixed(2)) //op - 4000.00

// some basic math functions
// 1. Math.abs() - Returns the absolute value of a number.
//    Example: console.log(Math.abs(-5));  // Output: 5

// 2. Math.ceil() - Rounds a number up to the nearest integer.
//    Example: console.log(Math.ceil(4.2));  // Output: 5

// 3. Math.floor() - Rounds a number down to the nearest integer.
//    Example: console.log(Math.floor(4.7));  // Output: 4

// 4. Math.round() - Rounds a number to the nearest integer.
//    Example: console.log(Math.round(4.5));  // Output: 5

// 5. Math.max() - Returns the largest of the numbers provided.
//    Example: console.log(Math.max(1, 3, 5));  // Output: 5

// 6. Math.min() - Returns the smallest of the numbers provided.
//    Example: console.log(Math.min(1, 3, 5));  // Output: 1

// 7. Math.pow() - Returns the value of the first number raised to the power of the second number.
//    Example: console.log(Math.pow(2, 3));  // Output: 8

// 8. Math.sqrt() - Returns the square root of a number.
//    Example: console.log(Math.sqrt(16));  // Output: 4

// 9. Math.random() - Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
//    Example: console.log(Math.random());  // Output: A random number between 0 and 1

// 10. Math.sin() - Returns the sine of a number (in radians).
//     Example: console.log(Math.sin(Math.PI / 2));  // Output: 1

// 11. Math.cos() - Returns the cosine of a number (in radians).
//     Example: console.log(Math.cos(0));  // Output: 1

// 12. Math.tan() - Returns the tangent of a number (in radians).
//     Example: console.log(Math.tan(Math.PI / 4));  // Output: 1

// 13. Math.log() - Returns the natural logarithm (base e) of a number.
//     Example: console.log(Math.log(10));  // Output: 2.302585092994046

// 14. Math.exp() - Returns Euler’s number (e) raised to the power of a given number.
//     Example: console.log(Math.exp(1));  // Output: 2.718281828459045

// 15. Math.sign() - Returns the sign of a number (1 for positive, -1 for negative, 0 for zero).
//     Example: console.log(Math.sign(-5));  // Output: -1

// 16. Math.trunc() - Returns the integer part of a number by removing the decimal part.
//     Example: console.log(Math.trunc(4.9));  // Output: 4

// 17. Math.log10() - Returns the base-10 logarithm of a number.
//     Example: console.log(Math.log10(100));  // Output: 2

// suppose i have to get the value in the rage of math and min
// console.log(Math.random()*(math-min+1)+min)
// scales that random number to a range from 0 to (max - min + 1)+min.