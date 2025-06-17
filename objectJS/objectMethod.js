// Javascript Obejct Methods
// Object methods are functions that are properties of an object.
// They can be used to perform actions on the object or to retrieve information from it.
// Object methods can be defined using the function keyword or as arrow functions.
// Here are some examples of object methods in JavaScript:
const person = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    updateAge(newAge) {
        this.age = newAge;
        return `Age updated to ${this.age}.`;
    },
    getInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
};
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
console.log(person.updateAge(31)); // Output: Age updated to 31.
console.log(person.getInfo()); // Output: { name: 'Alice', age: 31 }
// Example of an object method that returns a string
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails() {
        return `Car Details: ${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getDetails()); // Output: Car Details: 2020 Toyota Camry
// Example of an object method that takes parameters
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 3)); // Output: 6
console.log(calculator.divide(8, 2)); // Output: 4
console.log(calculator.divide(8, 0)); // Output: Cannot divide by zero
// Example of an object method that modifies the object state
const bankAccount = {
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount}. New balance is ${this.balance}.`;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds.";
        }
        this.balance -= amount;
        return `Withdrew ${amount}. New balance is ${this.balance}.`;
    }
};
console.log(bankAccount.deposit(500)); // Output: Deposited 500. New balance is 1500.
console.log(bankAccount.withdraw(200)); // Output: Withdrew 200. New balance is 1300.
console.log(bankAccount.withdraw(1500)); // Output: Insufficient funds.
// Example of an object method that uses arrow function syntax
const user = {
    username: "john_doe",
    login() {
        return `User ${this.username} logged in.`;
    },
    logout: () => {
        return `User ${user.username} logged out.`; // using arrow function syntax
    }
};
console.log(user.login()); // Output: User john_doe logged
// in.
console.log(user.logout()); // Output: User john_doe logged out.
// Example of an object method that returns a function
const counter = {
    count: 0,
    increment() {
        this.count++;
        return `Count is now ${this.count}.`;
    },
    getCounterFunction() {
        return () => {
            this.count++;
            return `Count is now ${this.count}.`;
        };
    }
};
const incrementFunction = counter.getCounterFunction();
console.log(incrementFunction()); // Output: Count is now 1.
console.log(incrementFunction()); // Output: Count is now 2.