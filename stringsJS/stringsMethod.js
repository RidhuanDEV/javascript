// Javascript Strings Method
// Strings in JavaScript are used to represent text data.
// They can be created using single quotes, double quotes, or template literals.
// Strings have various methods that allow you to manipulate and interact with the text.
// They can be concatenated, sliced, and transformed using built-in methods.
// Here are some examples of string methods in JavaScript:
const strings = {
    // Creating strings using different quotes
    singleQuote: 'Hello, World!',
    doubleQuote: "Hello, World!",
    templateLiteral: `Hello, World!`,

    // String concatenation
    concatenate: function() {
        return this.singleQuote + ' ' + this.doubleQuote;
    },

    // String length
    length: function(str) {
        return str.length;
    },

    // Accessing characters in a string
    charAt: function(str, index) {
        return str.charAt(index);
    },

    // String methods
    toUpperCase: function(str) {
        return str.toUpperCase();
    },

    toLowerCase: function(str) {
        return str.toLowerCase();
    },

    includes: function(str, searchString) {
        return str.includes(searchString);
    },

    startsWith: function(str, searchString) {
        return str.startsWith(searchString);
    },

    endsWith: function(str, searchString) {
        return str.endsWith(searchString);
    },

    indexOf: function(str, searchString) {
        return str.indexOf(searchString);
    },

    lastIndexOf: function(str, searchString) {
        return str.lastIndexOf(searchString);
    },

    substring: function(str, start, end) {
        return str.substring(start, end);
    },

    slice: function(str, start, end) {
        return str.slice(start, end);
    },

    replace: function(str, searchValue, newValue) {
        return str.replace(searchValue, newValue);
    },
    search: function(str, searchValue) {
        return str.search(searchValue);
    }
};
// Example usage
console.log(strings.singleQuote); // Output: Hello, World!
console.log(strings.doubleQuote); // Output: Hello, World!
console.log(strings.templateLiteral); // Output: Hello, World!
console.log(strings.concatenate()); // Output: Hello, World! Hello, World!
console.log(strings.length(strings.singleQuote)); // Output: 13
console.log(strings.charAt(strings.singleQuote, 0)); // Output: H
console.log(strings.toUpperCase(strings.singleQuote)); // Output: HELLO, WORLD!
console.log(strings.toLowerCase(strings.singleQuote)); // Output: hello, world!
console.log(strings.includes(strings.singleQuote, 'World')); // Output: true
console.log(strings.startsWith(strings.singleQuote, 'Hello')); // Output: true
console.log(strings.endsWith(strings.singleQuote, '!')); // Output: true
console.log(strings.indexOf(strings.singleQuote, 'World')); // Output: 7
console.log(strings.lastIndexOf(strings.singleQuote, 'o')); // Output: 4
console.log(strings.substring(strings.singleQuote, 0, 5)); // Output: Hello
console.log(strings.slice(strings.singleQuote, 7, 12)); // Output: World
console.log(strings.replace(strings.singleQuote, 'World', 'JavaScript')); // Output: Hello, JavaScript!
console.log(strings.search(strings.singleQuote, 'World')); // Output: 7