// Javascript Array
// Array is a data structure that can hold multiple values at once.
// It is a collection of items stored at contiguous memory locations.
// Arrays are used to store multiple values in a single variable.
// An array can hold items of any type, including numbers, strings, objects, and even other arrays.
// Arrays are zero-indexed, meaning the first element is at index 0.
// Arrays can be created using the Array constructor or by using array literals.
// Example of creating an array using the Array constructor
const fruits = new Array("apple", "banana", "orange");

// Example of creating an array using array literals
const vegetables = ["carrot", "broccoli", "spinach"];

// Accessing elements in an array
console.log(fruits[0]); // Output: apple
console.log(vegetables[1]); // Output: broccoli
// Modifying elements in an array
fruits[1] = "kiwi";
console.log(fruits); // Output: ["apple", "kiwi", "orange"]
// Adding elements to an array
fruits.push("grape");
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]
// Removing elements from an array
fruits.pop();
console.log(fruits); // Output: ["apple", "kiwi", "orange"]
// Finding the length of an array
console.log(fruits.length); // Output: 3
// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apple
// kiwi
// orange
// Array methods
// Array methods are built-in functions that can be used to manipulate arrays.
// Some common array methods include:
// forEach, map, filter, reduce, find, and sort.
// Example of using forEach method
fruits.forEach((fruit) => {
    console.log(fruit);
});
// Output:
// apple
// kiwi
// orange
// Example of using map method
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APPLE", "KIWI", "ORANGE"]
// Example of using filter method
const longFruits = fruits.filter((fruit) => fruit.length > 4);
console.log(longFruits); // Output: ["orange"]
// Example of using reduce method
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Output: 15
// Example of using find method
const foundFruit = fruits.find((fruit) => fruit.startsWith("k"));
console.log(foundFruit); // Output: kiwi
// Example of using sort method
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "kiwi", "orange"]
// Example of using reverse method
const reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: ["orange", "kiwi", "apple"]
// Example of using slice method
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["kiwi", "apple"]
// Example of using splice method
const splicedFruits = fruits.splice(1, 1, "mango");
console.log(splicedFruits); // Output: ["kiwi"]
console.log(fruits); // Output: ["orange", "mango", "apple"]
// Example of using concat method
const moreFruits = ["pear", "peach"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["orange", "mango", "apple",
// "pear", "peach"]
// Example of using join method
const fruitString = fruits.join(", ");
console.log(fruitString); // Output: "orange, mango, apple"
// Example of using indexOf method
const indexOfKiwi = fruits.indexOf("kiwi");
console.log(indexOfKiwi); // Output: -1 (not found)
// Example of using includes method
const hasApple = fruits.includes("apple");
console.log(hasApple); // Output: true
// Example of using fill method
const filledArray = new Array(5).fill("banana");
console.log(filledArray); // Output: ["banana", "banana", "banana", "banana", "banana"]
// Example of using flat method
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
// Example of using flatMap method
const flatMappedArray = nestedArray.flatMap((x) => x);
console.log(flatMappedArray); // Output: [1, 2, 3, 4, [5, 6]]
// Example of using findIndex method
const indexOfOrange = fruits.findIndex((fruit) => fruit === "orange");
console.log(indexOfOrange); // Output: 0 (index of "orange")
// Example of using every method
const allLongFruits = fruits.every((fruit) => fruit.length > 3);
console.log(allLongFruits); // Output: false (not all fruits are longer than 3 characters)
// Example of using some method
const someLongFruits = fruits.some((fruit) => fruit.length > 3);
console.log(someLongFruits); // Output: true (at least one fruit is longer
// than 3 characters)
// Example of using keys method
const fruitKeys = fruits.keys();
console.log(Array.from(fruitKeys)); // Output: [0, 1, 2]
// Example of using values method
const fruitValues = fruits.values();
console.log(Array.from(fruitValues)); // Output: ["orange", "mango", "apple"]
// Example of using entries method
const fruitEntries = fruits.entries();
console.log(Array.from(fruitEntries)); // Output: [[0, "orange"], [1, "mango"], [2, "apple"]]
// Example of using copyWithin method
const copyWithinArray = [1, 2, 3, 4, 5];
const copiedArray = copyWithinArray.copyWithin(0, 3);
console.log(copiedArray); // Output: [4, 5, 3, 4, 5]
// Example of using toString method
const arrayToString = fruits.toString();
console.log(arrayToString); // Output: "orange,mango,apple"
// Example of using toLocaleString method
const arrayToLocaleString = fruits.toLocaleString();
console.log(arrayToLocaleString); // Output: "orange,mango,apple"

// Example of using at method
const atMethodExample = fruits.at(1);
console.log(atMethodExample); // Output: "mango"
// Example of using Array.from method
const arrayFromExample = Array.from("hello");
console.log(arrayFromExample); // Output: ["h", "e", "l", "l", "o"]
// Example of using Array.isArray method
const isArrayExample = Array.isArray(fruits);
console.log(isArrayExample); // Output: true
// Example of using Array.of method
const arrayOfExample = Array.of(1, 2, 3);
console.log(arrayOfExample); // Output: [1, 2, 3]
// Example of using Array.prototype.fill method
const filledArrayExample = Array(5).fill("apple");
console.log(filledArrayExample); // Output: ["apple", "apple", "apple", "apple", "apple"]
// Example of using Array.prototype.findLast method
const findLastExample = fruits.findLast((fruit) => fruit.startsWith("a"));
console.log(findLastExample); // Output: "apple"
// Example of using Array.prototype.findLastIndex method
const findLastIndexExample = fruits.findLastIndex((fruit) => fruit.startsWith("a"));
console.log(findLastIndexExample); // Output: 2 (index of "apple")
// Example of using Array.prototype.toReversed method
const toReversedExample = fruits.toReversed();
console.log(toReversedExample); // Output: ["apple", "mango", "orange"]
// Example of using Array.prototype.toSorted method
const toSortedExample = fruits.toSorted();
console.log(toSortedExample); // Output: ["apple", "mango", "orange"]
// Example of using Array.prototype.toSpliced method
const toSplicedExample = fruits.toSpliced(1, 1, "banana");
console.log(toSplicedExample); // Output: ["orange", "banana", "mango", "apple"]
// Example of using Array.prototype.with method
const withExample = fruits.with(1, "grape");
console.log(withExample); // Output: ["orange", "grape", "apple"]
// Example of using Array.prototype.groupBy method
const groupByExample = fruits.groupBy((fruit) => fruit[0]);
console.log(groupByExample);
// Output: {
//   o: ["orange"],
//   m: ["mango"],
//   a: ["apple"]
// }
// Example of using Array.prototype.groupByToMap method
const groupByToMapExample = fruits.groupByToMap((fruit) => fruit[0
]);
console.log(groupByToMapExample);
// Output: Map(3) {
//   "o" => ["orange"],
//   "m" => ["mango"],
//   "a" => ["apple"]
// }

// example of using Array with object, function, and other data types
const mixedArray = [
    42,
    "hello",
    { name: "John", age: 30 },
    [1, 2, 3],
    function () {
        return "I am a function in an array";
    },
];
console.log(mixedArray[0]); // Output: 42
console.log(mixedArray[1]); // Output: hello
console.log(mixedArray[2]); // Output: { name: "John", age: 30 }
console.log(mixedArray[3]); // Output: [1, 2, 3]
console.log(mixedArray[4]()); // Output: I am a function in an array
// Example of using Array.prototype.at method
const atExample = mixedArray.at(2);
console.log(atExample); // Output: { name: "John", age: 30 }
// Example of using Array.prototype.includes method
const includesExample = mixedArray.includes("hello");
console.log(includesExample); // Output: true
// Example of using Array.prototype.indexOf method
const indexOfExample = mixedArray.indexOf(42);
console.log(indexOfExample); // Output: 0
// Example of using Array.prototype.lastIndexOf method
const lastIndexOfExample = mixedArray.lastIndexOf("hello");
console.log(lastIndexOfExample); // Output: 1
// Example of using Array.prototype.join method
const joinExample = mixedArray.join(" | ");
console.log(joinExample); // Output: 42 | hello | [object Object] | 1,2,3 | I am a function in an array
// Example of using Array.prototype.slice method
const sliceExample = mixedArray.slice(1, 3);
console.log(sliceExample); // Output: ["hello", { name: "John", age: 30 }]

// example of using array with many objects
const objectsArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
console.log(objectsArray[0]); // Output: { id: 1, name: "Alice" }
console.log(objectsArray[1]); // Output: { id: 2, name: "Bob" }
console.log(objectsArray[2]); // Output: { id: 3, name: "Charlie" }
// Example of using Array.prototype.map with objects
const namesArray = objectsArray.map((obj) => obj.name);
console.log(namesArray); // Output: ["Alice", "Bob", "Charlie"]
// Example of using Array.prototype.filter with objects
const filteredArray = objectsArray.filter((obj) => obj.id > 1);
console.log(filteredArray); // Output: [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
// Example of using Array.prototype.find with objects
const foundObject = objectsArray.find((obj) => obj.id === 2);
console.log(foundObject); // Output: { id: 2, name: "Bob" }
// Example of using Array.prototype.reduce with objects
const totalIds = objectsArray.reduce((acc, obj) => acc + obj.id, 0);
console.log(totalIds); // Output: 6 (1 + 2 + 3)