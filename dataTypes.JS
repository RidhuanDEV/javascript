// Javascript has 8 Data Types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// 8. Object

// Each data type has its own characteristics and use cases.
// Here is a brief overview of each data type:
// 1. Number: Represents numeric values, both integers and floating-point numbers.
// 2. String: Represents a sequence of characters, used for text.
// 3. Boolean: Represents a logical value, either true or false.
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
// 7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
// 8. Object: Represents a collection of key-value pairs, used to store complex data structures.

// Example of each data type in JavaScript
let numberExample = 42; // Number
let stringExample = "Hello Buddy"; // String
let booleanExample = true; // Boolean
let undefinedExample; // Undefined (declared but not assigned)
let nullExample = null; // Null (intentionally empty value)
let symbolExample = Symbol("UniqueIdentifier"); // Symbol
let bigIntExample = BigInt(123456789012345678901234567890); // BigInt
let objectExample = { 
    name : "Alice", 
    age : 21 }; // Object

// Javascript NaN
// NaN (Not a Number) is a special value in JavaScript that represents an invalid number.
let nanExample = NaN; // NaN (Not a Number)
// NaN is typically the result of an operation that does not yield a valid number, such as dividing zero by zero or attempting to parse a non-numeric string as a number.
// Example of NaN in JavaScript
let invalidNumber = "Hello" / 2; // This will result in NaN
console.log(invalidNumber); // Output: NaN
// NaN is of type number
console.log(typeof nanExample); // Output: number
// NaN is not equal to itself
console.log(nanExample === nanExample); // Output: false
// NaN can be checked using the isNaN() function
console.log(isNaN(nanExample)); // Output: true
// NaN can also be checked using Number.isNaN() for more strict checking
console.log(Number.isNaN(nanExample)); // Output: true
// NaN is often used in mathematical operations to indicate an error or invalid result
// Example of NaN in mathematical operations
let result = 0 / 0; // This will also result in NaN
console.log(result); // Output: NaN
// NaN can be used in conditional statements to handle errors or invalid inputs
if (isNaN(invalidNumber)) {
    console.log("Invalid number encountered!"); // Output: Invalid number encountered!
}
