// Javascript Object Properties
// Object properties are the values associated with an object.
// They can be accessed using dot notation or bracket notation.
// Here are some examples of object properties in JavaScript:
const person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
// Accessing object properties using dot notation
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
console.log(person.isEmployed); // Output: true
// Accessing nested object properties
console.log(person.address.street); // Output: 123 Main St
console.log(person.address.city); // Output: Anytown
console.log(person.address.country); // Output: USA
// Accessing object properties using bracket notation
console.log(person["name"]); // Output: Alice
console.log(person["age"]); // Output: 30
console.log(person["isEmployed"]); // Output: true
console.log(person["address"]["street"]); // Output: 123 Main St
console.log(person["address"]["city"]); // Output: Anytown
console.log(person["address"]["country"]); // Output: USA
// Adding new properties to an object
person.email = "roger@gmail.com";
console.log(person.email); // Output: roger@gmail.com
// Modifying existing properties
person.age = 31;
console.log(person.age); // Output: 31
// Deleting properties from an object
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined
// Example of an object with various property types 
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["Air Conditioning", "Navigation System", "Bluetooth"],
    owner: {
        name: "John Doe",
        age: 35
    }
};
// Accessing car properties
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020
console.log(car.features[0]); // Output: Air Conditioning
console.log(car.owner.name); // Output: John Doe
console.log(car.owner.age); // Output: 35
// Adding a new feature to the car
car.features.push("Sunroof");
console.log(car.features); // Output: [ 'Air Conditioning', 'Navigation System', 'Bluetooth', 'Sunroof' ]
// Modifying the owner's age
car.owner.age = 36;
console.log(car.owner.age); // Output: 36
// Deleting the car's model
delete car.model;
console.log(car.model); // Output: undefined
car.features.splice(1, 1); // Deletes the feature at index 1 ("Navigation System")
console.log(car.features); // Output: [ 'Air Conditioning', 'Bluetooth', 'Sunroof' ]
// delete feature index 2
car.features.splice(2, 1); // Deletes the feature at index 2 ("Sunroof")
console.log(car.features); // Output: [ 'Air Conditioning', 'Bluetooth' ]