// Javascript Number
// Number in JavaScript is a data type that represents numeric values.
// It can represent both integers and floating-point numbers.
// Numbers in JavaScript can be created using literals or by using the Number constructor.
function createNumber(value) {
    return Number(value);
}
// Example of creating numbers
const num1 = createNumber(42); // Integer
const num2 = createNumber(3.14); // Floating-point
const num3 = createNumber("123"); // String to number conversion
const num4 = createNumber("Hello"); // Invalid string, will result in NaN
// Example of number operations
const sum = num1 + num2; // Addition
const difference = num1 - num2; // Subtraction
const product = num1 * num2; // Multiplication
const quotient = num1 / num2; // Division
const remainder = num1 % 5; // Modulus
const isEqual = num1 === num3; // Equality check
const isGreater = num1 > num2; // Greater than check
const isLess = num1 < num2; // Less than check
// Example of number methods
const numString = "123.456";
const parsedNumber = parseFloat(numString); // Parse string to float
const roundedNumber = Math.round(num2); // Round to nearest integer
const flooredNumber = Math.floor(num2); // Round down to nearest integer
const ceiledNumber = Math.ceil(num2); // Round up to nearest integer
const isNaNValue = isNaN(num4); // Check if value is NaN
const isFiniteValue = isFinite(num1); // Check if value is finite
// Example of number properties
const maxNumber = Number.MAX_VALUE; // Maximum representable number
const minNumber = Number.MIN_VALUE; // Minimum representable number
const epsilon = Number.EPSILON; // Smallest difference between two representable numbers
// Example of number constants
const pi = Math.PI; // Value of Pi
const e = Math.E; // Value of Euler's number
// Example of number conversion
const intValue = parseInt("42"); // Convert string to integer
const floatValue = parseFloat("3.14"); // Convert string to float
// Example of number to string conversion
const numToString = num1.toString(); // Convert number to string
const numToFixed = num2.toFixed(2); // Convert number to string with fixed decimal places
// Example of number formatting
const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(num1); // Format number as currency
console.log({
    num1,
    num2,
    num3,
    num4,
    sum,
    difference,
    product,
    quotient,
    remainder,
    isEqual,
    isGreater,
    isLess,
    parsedNumber,
    roundedNumber,
    flooredNumber,
    ceiledNumber,
    isNaNValue,
    isFiniteValue,
    maxNumber,
    minNumber,
    epsilon,
    pi,
    e,
    intValue,
    floatValue,
    numToString,
    numToFixed,
    formattedNumber
});
// Output the results of number operations and methods
// {
//     num1: 42,
//     num2: 3.14,
//     num3: 123,
//     num4: NaN,
//     sum: 45.14,
//     difference: 38.86,
//     product: 131.88,
//     quotient: 13.385826771653543,
//     remainder: 2,
//     isEqual: false,
//     isGreater: true,
//     isLess: false,
//     parsedNumber: 123.456,
//     roundedNumber: 3,
//     flooredNumber: 3,
//     ceiledNumber: 4,
//     isNaNValue: true,
//     isFiniteValue: true,
//     maxNumber: 1.7976931348623157e+308,
//     minNumber: 5e-324,
//     epsilon: 2.220446049250313e-16,
//     pi: 3.141592653589793,
//     e: 2.718281828459045,
//     intValue: 42,
//     floatValue: 3.14,
//     numToString: '42',
//     numToFixed: '3.14',
//     formattedNumber: '$42.00'
// }
