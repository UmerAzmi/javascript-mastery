// ================= TOPIC 43: DOM ELEMENT CREATION =================

// DOM = Document Object Model
// Allows JavaScript to interact with and manipulate HTML elements
// document.createElement() = Creates a new HTML element

const createElementBtn = document.getElementById("createElementBtn")
const removeElementBtn = document.getElementById("removeElementBtn")
const exampleBox = document.getElementById("exampleBox")
createElementBtn.onclick = createElementFun
removeElementBtn.onclick = removeElementFun
removeElementBtn.style.backgroundColor = "#57645b"
removeElementBtn.style.cursor = "not-allowed"
// ---------- EXAMPLE 1: h1 ELEMENT ----------

function createElementFun(){      // Ignore this function its for the running the example
    
    exampleBox.textContent=""
    createElementBtn.style.backgroundColor = "#57645b"
    removeElementBtn.style.backgroundColor = "#22c55e"
    createElementBtn.style.cursor = "not-allowed"
    removeElementBtn.style.cursor = "pointer"


    // STEP 1: CREATE THE ELEMENT
    // createElement(tagName) = Creates a new element of specified type
    const newH1 = document.createElement("h1");
    
    // STEP 2: ADD ATTRIBUTES/PROPERTIES
    // .textContent = Sets the text inside the element
    newH1.textContent = "I like pizza!";
    // .id = Sets the id attribute
    // .className = Sets the className attribute
    newH1.id = "myH1";
    // .style = Access inline CSS styles
    newH1.style.color = "tomato";
    newH1.style.textAlign = "center";
    newH1.style.marginBottom = "10px";
    
    // STEP 3: APPEND ELEMENT TO DOM
    // .append() = Adds element to the END of parent
    document.getElementById('exampleBox').append(newH1);
    
    // Other positioning methods:
    // .prepend() = Adds element to the BEGINNING of parent
    // document.body.prepend(newH1);
    
    // Append to specific element by ID:
    // document.getElementById("box1").append(newH1);
    // document.getElementById("box1").prepend(newH1);
    
    // .insertBefore(newElement, referenceElement) = Insert before a specific element
    // const box4 = document.getElementById("box4");
    // document.body.insertBefore(newH1, box4);
    
    // Insert before first element in a collection:
    // const boxes = document.querySelectorAll(".box");
    // document.body.insertBefore(newH1, boxes[0]);
    
    // REMOVE HTML ELEMENT
    // .removeChild(element) = Removes a child element from parent
    // document.body.removeChild(newH1);
    // document.getElementById("box1").removeChild(newH1);
    
    // ---------- EXAMPLE 2: li ELEMENT ----------
    
    // STEP 1: CREATE THE ELEMENT
    const newListItem = document.createElement("li");
    
    // STEP 2: ADD ATTRIBUTES/PROPERTIES
    newListItem.textContent = "coconut";
    newListItem.id = "coconut";
    newListItem.style.fontWeight = "bold";
    newListItem.style.backgroundColor = "lightgreen";
    newListItem.style.textAlign = "center";
    newListItem.style.listStyle = "none";
    newListItem.style.width = "fit-content";
    newListItem.style.margin = "0 auto";
    newListItem.style.padding = "10px 50px";
    newListItem.style.borderRadius = "10%";
    
    
    // STEP 3: APPEND ELEMENT TO DOM
    exampleBox.append(newListItem);
    // const exampleBox = document.getElementById("exampleBox")  // this makes exampleBox variable store the document....
    // document.body.prepend(newListItem);
    // document.getElementById("fruits").append(newListItem);
    // document.getElementById("fruits").prepend(newListItem);
    
    // Insert before specific list item:
    // const banana = document.getElementById("banana");
    // document.getElementById("fruits").insertBefore(newListItem, banana);
    
    // Insert before second item in list:
    // document.getElementById("fruits").insertBefore(newListItem, listItems[1]);
    
    // REMOVE HTML ELEMENT
    // document.body.removeChild(newListItem);
    // document.getElementById("fruits").removeChild(newListItem);
}

function removeElementFun(){                // Ignore this function its for the removing the example
    createElementBtn.style.cursor = "pointer"
    createElementBtn.style.backgroundColor = "#22c55e"
    exampleBox.textContent = ""
    removeElementBtn.style.cursor = "not-allowed"
    removeElementBtn.style.backgroundColor = "#57645b"
}

// ================= TOPIC 44: EVENT LISTENERS - MOUSE EVENTS =================

// eventListener = Listen for specific events to create interactive web pages
//                 Events: click, mouseover, mouseout
//                 Syntax: element.addEventListener(event, callback)

// event = Type of event to listen for (click, mouseover, etc.)
// callback = Function to execute when event occurs
// event.target = The element that triggered the event

const myBox = document.getElementById("myBox");

// click = Fires when element is clicked
myBox.addEventListener("click", event => {
    // event.target = the element that was clicked
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
});

// mouseover = Fires when mouse pointer enters element
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't click! 😨";
});

// mouseout = Fires when mouse pointer leaves element
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😏";
});


// ================= TOPIC 45: EVENT LISTENERS - KEYBOARD EVENTS =================

// eventListener = Listen for specific events to create interactive web pages
//                 Events: keydown, keyup
//                 document.addEventListener(event, callback)

// keydown = Fires when key is pressed down
// keyup = Fires when key is released
// event.key = The key that was pressed (e.g., "ArrowUp", "a", "Enter")
// event.preventDefault() = Prevents default browser behavior

const myBox2 = document.getElementById("movableBox");
const moveAmount = 15;  // Pixels to move per keypress
let x = 0;  // Horizontal position
let y = 0;  // Vertical position

// Change appearance when Arrow key is pressed 
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        myBox2.textContent = "😲";
        myBox2.style.backgroundColor = "tomato";
    }
});

// Change appearance when Arrow key is released
document.addEventListener("keyup", event => {
    if(event.key.startsWith("Arrow")){
        myBox2.textContent = "😀";
        myBox2.style.backgroundColor = "lightblue";
    }
});

// Change appearance when Enter key is Pressed
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        myBox2.textContent = "😀";
        myBox2.style.backgroundColor = "hsla(0, 0%, 0%, 0.71)";
    }
});

// Move box with arrow keys
document.addEventListener("keydown", event => {

    // .startsWith() = Checks if string starts with specified characters
    if(event.key.startsWith("Arrow")){

        // Prevent default arrow key behavior (scrolling page)
        event.preventDefault();

        // Update position based on which arrow key was pressed
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;  // Move up (decrease y)
                break;
            case "ArrowDown":
                y += moveAmount;  // Move down (increase y)
                break;
            case "ArrowLeft":
                x -= moveAmount;  // Move left (decrease x)
                break;
            case "ArrowRight":
                x += moveAmount;  // Move right (increase x)
                break;
        }

        // Apply new position to element
        // Template literal with px units
        myBox2.style.top = `${y}px`;
        myBox2.style.left = `${x}px`;
    }
});


// ================= TOPIC 46: SHOW/HIDE ELEMENTS =================

// Two ways to hide elements:
// 1. display: none = Removes element from layout (takes no space)
// 2. visibility: hidden = Hides element but keeps its space

const myButton1 = document.getElementById("myButton1");
const myImg1 = document.getElementById("myImage1");
const myButton2 = document.getElementById("myButton2");
const myImg2 = document.getElementById("myImage2");

myButton1.addEventListener("click", event => {
    
    // ----- METHOD 1: DISPLAY (Removes from layout) -----
    // display: none = Element is hidden and takes no space
    // display: block = Element is visible and takes normal space
    if(myImg1.style.display === "none"){
        myImg1.style.display = "block";
        myButton1.textContent = "🫣 Hide";
    }
    else{
        myImg1.style.display = "none";
        myButton1.textContent = "👐🏻 Show";
    }
});

myButton2.addEventListener("click", event => {
    // ----- METHOD 2: VISIBILITY (Keeps space) -----
    // visibility: hidden = Element is hidden but space remains
    // visibility: visible = Element is visible
    if(myImg2.style.visibility === "hidden"){
        myImg2.style.visibility = "visible";
        myButton2.textContent = "🫣 Hide";
    }
    else{
        myImg2.style.visibility = "hidden";
        myButton2.textContent = "👐🏻 Show";
    }
});

// Difference:
// display: none - Image disappears, elements below move up
// visibility: hidden - Image disappears, but empty space remains


// ================= TOPIC 47: DOM SELECTORS =================

// 1. getElementById() - Fast, ID only, no # needed
const myBox1 = document.getElementById("myBox");

// 2. getElementsByClassName() - Live collection, no . needed, must convert to array
const infoBoxes = document.getElementsByClassName("info-box");
Array.from(infoBoxes).forEach(box => { /* do something */ });

// 3. getElementsByTagName() - Live collection, must convert to array
const allButtons = document.getElementsByTagName("button");

// 4. querySelector() - FIRST match, any CSS selector, need # or . ⭐
const firstInfoBox = document.querySelector(".info-box");  // Need . for class
const boxQuery = document.querySelector("#myBox");  // Need # for ID

// 5. querySelectorAll() - ALL matches, forEach works directly ⭐
const allInfoBoxes = document.querySelectorAll(".info-box");
allInfoBoxes.forEach(box => { /* do something */ });  // No conversion needed!

// Best practice: Use querySelector/querySelectorAll for modern code


// ================= TOPIC 48: OTHER USEFUL METHODS =================

// .toFixed(n) = Rounds number to n decimal places and returns as string
const price = 19.567;
console.log("Price:", price.toFixed(2));  // "19.57"

// location.reload() = Reloads the current page (like pressing F5)
// location.reload();  // Refreshes the page

// isNaN() = Checks if value is "Not a Number", returns true/false
console.log("Is 'abc' a number?", isNaN("abc"));  // true
console.log("Is 123 a number?", isNaN(123));  // false

// .scrollWidth = Total width of content including hidden overflow
const myBox0 = document.getElementById("myBox");
if (myBox0) {
    console.log("Total content width:", myBox0.scrollWidth);
}

// .clientWidth = Visible width of element (excludes scrollbar, border)
if (myBox0) {
    console.log("Visible width:", myBox0.clientWidth);
}

// .innerHTML = Gets or sets HTML content inside element (including tags)
const exampleBox0 = document.getElementById("exampleBox");
if (exampleBox) {
    console.log("Example box HTML:", exampleBox0.innerHTML);  // Gets HTML
    // exampleBox.innerHTML = "<h2>New Content</h2>";  // Sets HTML (uncomment to test)
}

// window.getComputedStyle(element) = Gets actual computed CSS styles
if (myBox0) {
    const computedStyle = window.getComputedStyle(myBox0);
    console.log("myBox0 font size:", computedStyle.fontSize);
    console.log("myBox0 background color:", computedStyle.backgroundColor);
}

// DOMContentLoaded = Event fires when HTML is fully loaded and parsed
// Use this to run JavaScript only after the page elements are ready
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded! Safe to access elements now.");
    // All your code that needs DOM elements goes here
});

// Why use it? Prevents errors from trying to access elements before they exist
// Example: If script runs before <div id="myBox0"> loads, getElementById returns null