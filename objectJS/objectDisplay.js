// Javascript Object Display
// How to display an object in JavaScript
// Objects in JavaScript can be displayed in various ways, such as using `console.log`, `JSON.stringify`, or custom display functions.
// Here are some examples of how to display objects in JavaScript:
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
// Displaying an object using console.log
console.log(person); // Output: { name: 'Alice', age: 30, isEmployed: true, address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }
// Displaying an object using JSON.stringify
console.log(JSON.stringify(person, null, 2));
// Output:
// {
//   "name": "Alice",
//   "age": 30,
//   "isEmployed": true,
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "country": "USA"
//   }
// }
// Displaying an object with a custom function
function displayPerson(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Employed: ${person.isEmployed}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.country}`);
}
displayPerson(person);
// Output:
// Name: Alice
// Age: 30
// Employed: true
// Address: 123 Main St, Anytown, USA
// Displaying an object with a loop
function displayObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                console.log(`${key}:`);
                displayObject(obj[key]); // Recursive call for nested objects
            } else {
                console.log(`${key}: ${obj[key]}`);
            }
        }
    }
}
displayObject(person);
// Output:
// name: Alice
// age: 30
// isEmployed: true
// address:
// street: 123 Main St
// city: Anytown
// country: USA
// Displaying an object with Object.entries
function displayEntries(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            console.log(`${key}:`);
            displayEntries(value); // Recursive call for nested objects
        } else {
            console.log(`${key}: ${value}`);
        }
    });
}
displayEntries(person);
// Output:
// name: Alice
// age: 30
// isEmployed: true
// address:
// street: 123 Main St
// city: Anytown
// country: USA
// Displaying an object with Object.keys
function displayKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return;
    }
    Object.keys(obj).forEach(key => {
        console.log(key);
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            displayKeys(obj[key]); // Recursive call for nested objects
        }
    });
}
displayKeys(person);
// Output:
// name
// age
// isEmployed
// address
// street
// city
// country
// Displaying an object with Object.values
function displayValues(obj) {
    Object.values(obj).forEach(value => {
        if (typeof value === 'object' && value !== null) {
            displayValues(value); // Recursive call for nested objects
        } else {
            console.log(value);
        }
    });
}
displayValues(person);
// Output:
// Alice
// 30
// true
// 123 Main St
// Anytown
// USA