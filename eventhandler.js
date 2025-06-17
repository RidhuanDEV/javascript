// Event Handler Javascript
// HTML event handlers are used to execute JavaScript code when an event occurs, such as a button click, form submission, or mouse movement. They can be defined inline in HTML or added using JavaScript.
// HTML allows event handler attributes with javascript code, such as `onclick`, `onmouseover`, and `onchange`. These attributes can be used to call JavaScript functions when the event occurs.
function handleClick() {
    alert("Button clicked!");
}

// Example of an HTML button with an inline event handler
document.write('<button onclick="handleClick()">Click Me!</button>');

// Adding an event handler using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Click Me!";
    button.addEventListener("click", handleClick);
    document.body.appendChild(button);
});
// Example of an event handler for a form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    alert("Form submitted! Name: " + name);
}
// Example of an HTML form with an event handler
document.write(`
    <form onsubmit="handleSubmit(event)">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
    </form>
`);
// Adding an event handler for a mouseover event
function handleMouseOver() {
    alert("Mouse over the element!");
}
// Example of an HTML element with a mouseover event handler
document.write('<div onmouseover="handleMouseOver()" style="width: 200px; height: 100px; background-color: lightblue;">Hover over me!</div>');
// Adding an event handler for a keypress event
function handleKeyPress(event) {
    alert("Key pressed: " + event.key);
}
// Example of an HTML input field with a keypress event handler
document.write(`
    <input type="text" onkeypress="handleKeyPress(event)" placeholder="Type something...">
`);
// Adding an event handler for a window resize event
function handleResize() {
    alert("Window resized! New dimensions: " + window.innerWidth + "x" + window.innerHeight);
}
// Adding the resize event listener
window.addEventListener("resize", handleResize);
// Example of an HTML element with a click event handler
document.write('<div id="clickable" style="width: 200px; height: 100px; background-color: lightgreen;">Click me!</div>');
document.getElementById("clickable").addEventListener("click", function() {
    alert("Element clicked!");
});
// Example of an event handler for a checkbox change event
function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    alert("Checkbox is " + (isChecked ? "checked" : "unchecked"));
}
// Example of an HTML checkbox with a change event handler
document.write(`
    <input type="checkbox" id="myCheckbox" onchange="handleCheckboxChange(event)">
    <label for="myCheckbox">Check me!</label>
`);
// Example of an event handler for a dropdown selection change
function handleSelectChange(event) {
    const selectedValue = event.target.value;
    alert("Selected value: " + selectedValue);
}
// Example of an HTML select element with a change event handler
document.write(`
    <select onchange="handleSelectChange(event)">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
`);
// Example of an event handler for a mouse wheel scroll event
function handleMouseWheel(event) {
    event.preventDefault(); // Prevent default scrolling behavior
    const delta = event.deltaY;
    alert("Mouse wheel scrolled! Delta: " + delta);
}
// Adding the mouse wheel event listener to the document
document.addEventListener("wheel", handleMouseWheel, { passive: false });
// Example of an HTML element with a mouse wheel event handler
document.write('<div style="width: 200px; height: 100px; background-color: lightcoral;">Scroll over me!</div>');
// Example of an event handler for a drag and drop event
function handleDrop(event) {
    event.preventDefault(); // Prevent default behavior
    const data = event.dataTransfer.getData("text/plain");
    alert("Dropped data: " + data);
}
function handleDragOver(event) {
    event.preventDefault(); // Prevent default behavior to allow drop
}
// Adding the drag and drop event listeners
document.addEventListener("dragover", handleDragOver);
document.addEventListener("drop", handleDrop);
// Example of an HTML element with drag and drop functionality
document.write(`
    <div id="draggable" draggable="true" style="width: 200px; height: 100px; background-color: lightgoldenrodyellow;">
        Drag me!
    </div>
`);
document.getElementById("draggable").addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "This is some draggable data.");
});
// Example of an event handler for a focus event
function handleFocus(event) {
    event.target.style.backgroundColor = "lightyellow"; // Change background color on focus
    alert("Input focused!");
}
// Example of an HTML input field with a focus event handler
document.write(`
    <input type="text" onfocus="handleFocus(event)" placeholder="Focus on me!">
`);
// example of an event hander onload
function handleLoad() {
    alert("Page has fully loaded!");
}
// Adding the load event listener to the window
window.addEventListener("load", handleLoad);
// Example of an HTML element with an onload event handler
document.write('<div style="width: 200px; height: 100px; background-color: lightseagreen;">Page Loaded!</div>');