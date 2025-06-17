// Javascript Object utilities
// Object utilities provide methods to manipulate and interact with objects in JavaScript.
// These utilities include methods for creating, cloning, merging, and manipulating objects.
// Common object utilities in JavaScript include:
// 1. Object.keys(): Returns an array of a given object's own enumerable property names.
// 2. Object.values(): Returns an array of a given object's own enumerable property values.
// 3. Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// 4. Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// 5. Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
// 6. Object.seal(): Seals an object, preventing new properties from being added but allowing existing properties to be modified.
// 7. Object.create(): Creates a new object with the specified prototype object and properties.
// 8. Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
// 9. Object.is(): Determines whether two values are the same value.
// 10. Object.getPrototypeOf(): Returns the prototype of the specified object.
// 11. Object.setPrototypeOf(): Sets the prototype of a specified object to another object or null.
// 12. Object.defineProperty(): Adds a named property described by a given descriptor to an object.
// 13. Object.defineProperties(): Adds named properties described by the given descriptors to an object.
// 14. Object.getOwnPropertyDescriptor(): Returns a property descriptor for an own property of a given object.
// 15. Object.getOwnPropertyDescriptors(): Returns all own property descriptors of a given object.
// 16. Object.fromEntries(): Transforms a list of key-value pairs into an object.
// 17. Object.isExtensible(): Determines if an object is extensible (i.e., if new properties can be added to it).
// 18. Object.preventExtensions(): Prevents new properties from being added to an object.
// 19. Object.getOwnPropertyNames(): Returns an array of all properties (enumerable or not) found directly upon a given object.
// 20. Object.getOwnPropertySymbols(): Returns an array of all symbol properties found directly upon a given object.
// 21. Object.prototype.toString(): Returns a string representation of the object.
// 22. Object.prototype.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
// 23. Object.prototype.isPrototypeOf(): Returns a boolean indicating whether the object is in the prototype chain of another object.
// 24. Object.prototype.propertyIsEnumerable(): Returns a boolean indicating whether the specified property is enumerable.
// 25. Object.prototype.toLocaleString(): Returns a string representing the object, localized according to the user's locale.
// 26. Object.prototype.valueOf(): Returns the primitive value of the specified object.
// 27. Object.prototype.constructor: Returns a reference to the Object constructor function that created the instance object.
// 28. Object.prototype.__proto__: Returns the prototype of the object.
// 29. Object.prototype.__defineGetter__(): Defines a getter function for a property.
// 30. Object.prototype.__defineSetter__(): Defines a setter function for a property.
//
// Example of using Object utilities in JavaScript
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
// Using Object.keys() to get property names
const keys = Object.keys(person);
console.log("Keys:", keys); // Output: Keys: [ 'name', 'age', 'city' ]
// Using Object.values() to get property values
const values = Object.values(person);
console.log("Values:", values); // Output: Values: [ 'Alice', 30, 'New York' ]
// Using Object.entries() to get key-value pairs
const entries = Object.entries(person);
console.log("Entries:", entries); // Output: Entries: [ [ 'name', 'Alice' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
// Using Object.assign() to copy properties from one object to another
const anotherPerson = Object.assign({}, person);
console.log("Another Person:", anotherPerson); // Output: Another Person: { name: 'Alice', age: 30, city: 'New York' }
// Using Object.freeze() to prevent modifications to the object
Object.freeze(person);
// person.age = 31; // This will not work because the object is frozen
// Using Object.seal() to prevent adding new properties but allow modifications
Object.seal(person);
// person.country = "USA"; // This will not work because the object is sealed
// person.age = 31; // This will work because the object is sealed
console.log("Sealed Person:", person); // Output: Sealed Person: { name: 'Alice', age: 30, city: 'New York' }
// Using Object.create() to create a new object with a prototype
const newPerson = Object.create(person);
newPerson.name = "Bob";
console.log("New Person:", newPerson); // Output: New Person: { name: 'Bob' }
// Using Object.hasOwnProperty() to check if a property exists
console.log("Has 'name' property:", person.hasOwnProperty("name")); // Output: Has 'name' property: true
// Using Object.is() to compare two values
console.log("Is 'Alice' equal to 'Alice'?", Object.is(person.name, "Alice")); // Output: Is 'Alice' equal to 'Alice'? true
// Using Object.getPrototypeOf() to get the prototype of an object
const prototype = Object.getPrototypeOf(person);
console.log("Prototype of person:", prototype); // Output: Prototype of person: { ... } (the prototype object)
// Using Object.setPrototypeOf() to set the prototype of an object
Object.setPrototypeOf(newPerson, person);
console.log("New Person's prototype:", Object.getPrototypeOf(newPerson)); // Output: New Person's prototype: { name: 'Alice', age: 30, city: 'New York' }
// Using Object.defineProperty() to add a property with a descriptor
Object.defineProperty(person, "country", {
    value: "USA",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log("Person with country:", person); // Output: Person with country: { name: 'Alice', age: 30, city: 'New York', country: 'USA' }
// Using Object.defineProperties() to add multiple properties
Object.defineProperties(person, {
    occupation: {
        value: "Engineer",
        writable: true,
        enumerable: true,
        configurable: true
    },
    isEmployed: {
        value: true,
        writable: false,
        enumerable: true,
        configurable: false
    }
});
console.log("Person with occupation and isEmployed:", person); // Output: Person with occupation and isEmployed: { name: 'Alice', age: 30, city: 'New York', country: 'USA', occupation: 'Engineer', isEmployed: true }
// Using Object.getOwnPropertyDescriptor() to get a property descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, "age");
console.log("Descriptor for 'age':", descriptor); // Output: Descriptor for 'age': { value: 30, writable: true, enumerable: true, configurable: true }
// Using Object.getOwnPropertyDescriptors() to get all property descriptors
const descriptors = Object.getOwnPropertyDescriptors(person);
console.log("Descriptors for person:", descriptors); // Output: Descriptors for person: { name: { ... }, age: { ... }, city: { ... }, country: { ... }, occupation: { ... }, isEmployed: { ... } }
// Using Object.fromEntries() to create an object from key-value pairs
const entriesArray = [["name", "Charlie"], ["age", 25]];
const newObject = Object.fromEntries(entriesArray);
console.log("New Object from entries:", newObject); // Output: New Object from entries: { name: 'Charlie', age: 25 }
// Using Object.isExtensible() to check if an object is extensible
console.log("Is person extensible?", Object.isExtensible(person)); // Output: Is person extensible? false
// Using Object.preventExtensions() to prevent new properties from being added
Object.preventExtensions(person);
console.log("Is person extensible after preventExtensions?", Object.isExtensible(person)); // Output: Is person extensible after preventExtensions? false
// Using Object.getOwnPropertyNames() to get all property names
const propertyNames = Object.getOwnPropertyNames(person);
console.log("Property Names:", propertyNames); // Output: Property Names: [ 'name', 'age', 'city', 'country', 'occupation', 'isEmployed' ]
// Using Object.getOwnPropertySymbols() to get all symbol properties
const symbolKey = Symbol("uniqueKey");
const symbolObject = {
    [symbolKey]: "Symbol Value"
};
const symbolProperties = Object.getOwnPropertySymbols(symbolObject);
console.log("Symbol Properties:", symbolProperties); // Output: Symbol Properties: [ Symbol(uniqueKey) ]
// Using Object.prototype.toString() to get a string representation of the object
console.log("String representation of person:", person.toString()); // Output: String representation of person: [object Object]
// Using Object.prototype.hasOwnProperty() to check if a property exists
console.log("Does person have 'name' property?", person.hasOwnProperty("name")); // Output: Does person have 'name' property? true
// Using Object.prototype.isPrototypeOf() to check prototype chain
console.log("Is person prototype of newPerson?", person.isPrototypeOf(newPerson)); // Output: Is person prototype of newPerson? true
// Using Object.prototype.propertyIsEnumerable() to check if a property is enumerable
console.log("Is 'name' property enumerable?", person.propertyIsEnumerable("name")); // Output: Is 'name' property enumerable? true
// Using Object.prototype.toLocaleString() to get a localized string representation
console.log("Localized string representation of person:", person.toLocaleString()); // Output: Localized string representation of person: [object Object]
// Using Object.prototype.valueOf() to get the primitive value of the object
console.log("Primitive value of person:", person.valueOf()); // Output: Primitive value of person: { name: 'Alice', age: 30, city: 'New York', country: 'USA', occupation: 'Engineer', isEmployed: true }
// Using Object.prototype.constructor to get the constructor of the object
console.log("Constructor of person:", person.constructor); // Output: Constructor of person: [Function: Object]
// Using Object.prototype.__proto__ to get the prototype of the object
console.log("Prototype of person:", person.__proto__); // Output: Prototype of person: { ... } (the prototype object)
// Using Object.prototype.__defineGetter__() to define a getter function
Object.defineProperty(person, "fullName", {
    get: function() {
        return `${this.name} from ${this.city}`;
    }
});
console.log("Full Name:", person.fullName); // Output: Full Name: Alice from New York
// Using Object.prototype.__defineSetter__() to define a setter function
Object.defineProperty(person, "ageInFiveYears", {
    set: function(value) {
        this.age = value - 5; // Set age to value minus 5
    },
    get: function() {
        return this.age + 5; // Get age plus 5
    }
});
person.ageInFiveYears = 40; // Set age in five years
console.log("Age in five years:", person.ageInFiveYears); // Output: Age in five years: 40
// Using Object.prototype.__defineSetter__() to define a setter function
Object.defineProperty(person, "isAdult", {
    get: function() {
        return this.age >= 18; // Check if age is 18 or older
    }
});
console.log("Is Adult:", person.isAdult); // Output: Is Adult: true
// Using Object.prototype.__defineGetter__() to define a getter function
Object.defineProperty(person, "info", {
    get: function() {
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
});
console.log("Info:", person.info); // Output: Info: Alice is 30 years old and lives in New York.

