// Javascript Object constructor
// The Object constructor in JavaScript is used to create an object.
// It can be used to create an empty object or to create an object with properties and methods.
function person(name, age, isEmployed){
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
    this.greet = function(){
        if (this.isEmployed) {
            return "Hello " + this.name + ", you are now " + this.age + " years old and you are employed.";
        }
        else {
            return "Hello " + this.name + ", you are now " + this.age + " years old and you are unemployed.";
        }
    }
}
const person1 = new person("Alice", 21, true)
const person2 = new person("Bob Sadino", 79, false)
console.log(person1.greet()); // Output: Hello Alice, you are now 21 years old and you are employed.
console.log(person2.greet()); // Output: Hello Bob Sadino, you are now 79 years old and you are unemployed.
// Example of an object constructor with methods
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        return `Car Details: ${this.year} ${this.make} ${this.model}`;
    };
}
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);
console.log(car1.getDetails()); // Output: Car Details: 2020 Toyota Camry
console.log(car2.getDetails()); // Output: Car Details: 2019 Honda Civic
// Example of an object constructor with properties and methods
function Calculator() {
    this.add = function(a, b) {
        return a + b;
    };
    this.subtract = function(a, b) {
        return a - b;
    };
    this.multiply = function(a, b) {
        return a * b;
    };
    this.divide = function(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    };
}
const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 3)); // Output: 6
console.log(calculator.divide(8, 2)); // Output: 4
console.log(calculator.divide(8, 0)); // Output: Cannot divide by zero
// Example of an object constructor with a method that modifies the object state
function BankAccount(initialBalance) {
    this.balance = initialBalance;
    this.deposit = function(amount) {
        this.balance += amount;
        return `Deposited ${amount}. New balance: ${this.balance}`;
    };
    this.withdraw = function(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return `Withdrew ${amount}. New balance: ${this.balance}`;
    };
}
const account = new BankAccount(1000);
console.log(account.deposit(500)); // Output: Deposited 500. New balance: 1500
console.log(account.withdraw(200)); // Output: Withdrew 200. New balance: 1300
console.log(account.withdraw(1500)); // Output: Insufficient funds
// Example of an object constructor with a method that returns an object
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return {
            name: this.name,
            age: this.age
        };
    };
}
const person3 = new Person("Charlie", 25);
const person4 = new Person("Diana", 30);

console.log(person3.getInfo()); // Output: { name: 'Charlie', age: 25 }
console.log(person4.getInfo()); // Output: { name: 'Diana', age: 30 }
// Example of an object constructor with a method that returns a string
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
    this.makeSound = function() {
        return `${this.type} makes a ${this.sound} sound.`;
    };
}
const dog = new Animal("Dog", "bark");
const cat = new Animal("Cat", "meow");
console.log(dog.makeSound()); // Output: Dog makes a bark sound.
console.log(cat.makeSound()); // Output: Cat makes a meow sound.
// Example of an object constructor with a method that takes parameters
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
    this.getPerimeter = function() {
        return 2 * (this.width + this.height);
    };
}
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(3, 4);
console.log(rect1.getArea()); // Output: 50
console.log(rect1.getPerimeter()); // Output: 30
console.log(rect2.getArea()); // Output: 12
console.log(rect2.getPerimeter()); // Output: 14
// Example of an object constructor with a method that modifies the object state
function Counter() {
    this.count = 0;
    this.increment = function() {
        this.count++;
        return `Count incremented to ${this.count}`;
    };
    this.decrement = function() {
        if (this.count > 0) {
            this.count--;
            return `Count decremented to ${this.count}`;
        }
        return "Count cannot be negative";
    };
}
const counter = new Counter();
console.log(counter.increment()); // Output: Count incremented to 1
console.log(counter.increment()); // Output: Count incremented to 2
console.log(counter.decrement()); // Output: Count decremented to 1
console.log(counter.decrement()); // Output: Count decremented to 0
