// Javascript Strings
// What are strings in JavaScript?
// Strings in JavaScript are used to represent text data. They can be created using single quotes, double quotes, or template literals. Strings have various methods that allow you to manipulate and interact with the text. Here are some examples of string operations in JavaScript:
// example of string 
let strings = "Hello, World!";
// // Creating strings using different quotes
let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, World!`;

// example of string escape characters
let text = "We are the so-called \"Vikings\" from the north.";

// example of six escape sequences \n, \r, \t, \b, \f, \v
let escapeSequenceN = "Hello\nWorld"; // New line
let escapeSequenceR = "Hello\rWorld"; // Carriage return
let escapeSequenceT = "Hello\tWorld"; // Tab
let escapeSequenceB = "Hello\bWorld"; // Backspace
let escapeSequenceF = "Hello\fWorld"; // Form feed
let escapeSequenceV = "Hello\vWorld"; // Vertical tab
// output:
console.log(singleQuote); // Output: Hello, World!
console.log(doubleQuote); // Output: Hello, World!
console.log(templateLiteral); // Output: Hello, World!
console.log(text); // Output: We are the so-called "Vikings" from the north."
console.log(escapeSequenceN); // Output: Hello (new line) World
console.log(escapeSequenceR); // Output: World (carriage return may overwrite Hello)
console.log(escapeSequenceT); // Output: Hello    World
console.log(escapeSequenceB); // Output: HellWorld (backspace removes previous character)
console.log(escapeSequenceF); // Output: HelloWorld (form feed, may not be visible)
console.log(escapeSequenceV); // Output: HelloWorld (vertical tab, may not be visible)

// template strings allows expression in strings:
// example of template literals with expressions
let age = 18;
let message = `You are ${age >= 18 ? 'an adult' : 'a minor'}`;
console.log(message); // Output: You are an adult.
