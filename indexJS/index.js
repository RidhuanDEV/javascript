// Javascript can display DATA in different ways:
// 1. Writig into an HTML element, using innerHTML or textContent or innerText
// 2. Writing into HTML output using document.write()
// 3. Writing into an alert box using window.alert()
// 4. Writing into the browser console using console.log()



console.log('Hello, World!');
// This script logs "Hello, World!" to the console
console.log(`I Like Pizza!`);
// This script logs "I Like Pizza!" to the console

window.alert(`This is an alert!`);
// This script shows an alert with the message "This is an alert!"
window.alert(`I Like Pizza!`);
// This script shows an alert with the message "I Like Pizza!"

document.getElementById('demo').textContent = 'Hello, World!';
// This script sets the text content of the element with id 'demo' to "Hello, World!"
document.getElementById('description').innerHTML = '<h2>Hello, World!</h2>';
// This script sets the inner HTML of the element with id 'description' to a paragraph containing "Hello, World!"
document.getElementById('innerText').innerText = 'innertext ID';
// This script sets the inner text of the element with id 'innerText' to "Hello, World!"
