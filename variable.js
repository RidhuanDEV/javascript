// Variable are Containers for storing data

// Javascript Variable can declared in 4 ways :
// 1. var
// 2. let
// 3. const
// 4. automatically

// When to use var, let, const in Javascript?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

// Variable declaration in JavaScript can be done using `var`, `let`, or `const`.
// 1. Use var when you want to declare a variable that can be re-assigned and is function-scoped.
// 2. Use let when you want to declare a variable that can be re-assigned and is block-scoped.
// 3. Use const when you want to declare a variable that cannot be re-assigned and is block-scoped.
// 4. Use automatic declaration when you want to declare a variable without explicitly using var, let, or const (not recommended for production code).
// Example of variable declaration in Javascript

let variable1 = 1; // Block-scoped variable
var variable2 = "Hello"; // Function-scoped variable
const Variable3 = 3.14; // Block-scoped constant
let variable4; // Automatically declared variable

// Using the variables
let sum = variable1 + variable2.length; // Using length of string
console.log("Sum of variable1 and length of variable2 is:", sum);
// Attempting to reassign const variable (will throw an error)
try {
    Variable3 = 3.14159; // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
}

// another example
let firstName = "Alice";
document.getElementById("name").innerHTML = firstName; // Assuming there's an element with id 'name'

// let can't be redeclared in the same scope but can be reassigned

let age = 25;
try {
    let age = 30; // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
}
 
// var can be redeclared in the same scope
var city = "New York";
var city = "Los Angeles"; // This is allowed


// const cannot be reassigned or redeclared
const country = "USA";
try {
    country = "Canada"; // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
}