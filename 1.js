// =============================== TOPIC 1: OUTPUT & COMMENTS ===============================

// console.log() = prints output to the browser's console (F12 to open)
// Used for debugging and testing
console.log("Hello");
console.log("I like pizza!");

// window.alert() = displays a popup alert box to the user
// Can be annoying, use sparingly
// window.alert("This is an alert!");

// document.getElementById() = finds an HTML element by its ID
// .textContent = changes the text inside that element
document.getElementById("myH1-demo").textContent = "Hello from JavaScript!";

// This is a single-line comment
// Use comments to explain your code

/*
    This is a
    multi-line comment
    Use for longer explanations
*/


// =============================== TOPIC 2: VARIABLES ===============================

// variable = a container that stores a value
// Behaves as if it were the value it contains

// let = keyword to create a variable that can be changed later
let fullName = "Umer Azmi";  // String (text) - use quotes
let age = 23;                // Number - no quotes needed
let isStudent = false;       // Boolean - true or false only

// ${} = template literal syntax - inserts variable values into strings
// Must use backticks ` ` not regular quotes
document.getElementById("var-p1").textContent = `Your name is ${fullName}`;
document.getElementById("var-p2").textContent = `You are ${age} years old`;
document.getElementById("var-p3").textContent = `Enrolled: ${isStudent}`;

// Data types in JavaScript:
// String    → "text"        - always in quotes
// Number    → 42 or 3.14   - no quotes
// Boolean   → true / false  - only two values
// Undefined → let x;        - declared but not assigned
// Null      → let x = null; - intentionally empty


// =============================== TOPIC 3: ARITHMETIC OPERATORS ===============================

// arithmetic operators = symbols that perform math operations
// operands = values, variables, etc.
// operators = + - * / ** %

let students = 30;

// Basic operations (uncomment one at a time to test)
// students = students + 1;   // Addition:       31
// students = students - 1;   // Subtraction:    29
// students = students * 2;   // Multiplication: 60
// students = students / 2;   // Division:       15
// students = students ** 2;  // Exponent:       900
// students = students % 7;   // Modulo:         2 (remainder of 30 / 7)

// Shorthand operators = shorter way to write the same thing
// students += 1;   // Same as: students = students + 1
// students -= 1;   // Same as: students = students - 1
// students *= 2;   // Same as: students = students * 2
// students /= 2;   // Same as: students = students / 2
// students **= 2;  // Same as: students = students ** 2
// students %= 2;   // Same as: students = students % 2

// Increment / Decrement = add or subtract exactly 1
// students++;  // Same as: students += 1
// students--;  // Same as: students -= 1

/*
operator precedence = order that operations are performed
1. parentheses ()
2. exponents **
3. multiplication * & division / & modulo %
4. addition + & subtraction -
*/

let result = 6 / 2 * (1 + 2);
// Step 1: (1 + 2) = 3   <- parentheses first
// Step 2: 6 / 2 = 3     <- left to right, same level
// Step 3: 3 * 3 = 9     <- answer is 9 (NOT 1!)
console.log(result);


// =============================== TOPIC 4: USER INPUT ===============================

// How to accept user input:
// 1. EASY WAY         = window.prompt() - popup box, always returns a string
// 2. PROFESSIONAL WAY = HTML input field + button

// ------------------------- EASY WAY -------------------------
// window.prompt() = shows a popup asking for input
// let username = window.prompt("What's your username?");
// console.log(username);

// --------------------- PROFESSIONAL WAY ---------------------
let username;

// .onclick = runs a function when the button is clicked
// function(){} = anonymous function (a function with no name)
document.getElementById("mySubmit").onclick = function() {
    // .value = gets the current text typed in the input field
    username = document.getElementById("myText").value;
    document.getElementById("myH1-topic4").textContent = `Hello ${username}!`;
}


// =============================== TOPIC 5: TYPE CONVERSION ===============================

// type conversion = changing a value from one data type to another
// This matters because window.prompt() and input.value ALWAYS return strings!
// So "5" + 3 = "53" (string join), NOT 8 (math) - you must convert first

// --------------- EXAMPLE 1 ---------------
// window.prompt always returns a STRING - convert before doing math
let userAge = window.prompt("How old are you?");

// Number() = converts value to a number so we can do math
userAge = Number(userAge);
userAge += 1;  // Now this works as math, not string joining

// typeof = tells you the data type of a value
console.log("Age from window prompt + 1:",userAge, "\nType of userAge:" ,typeof userAge);  // e.g. 24 'number'

// --------------- EXAMPLE 2 ---------------
let x = "pizza";
let y = "pizza";
let z = "pizza";

// Number() = converts to number - if impossible, returns NaN (Not a Number)
x = Number(x);  // "pizza" -> NaN

// String() = converts to string (text)
y = String(y);  // already a string, stays the same

// Boolean() = converts to true or false
// Falsy values (become false): 0, "", null, undefined, NaN
// Everything else becomes true
z = Boolean(z);  // "pizza" -> true (non-empty string)

console.log("---- EXAMPLE 2 ----");
console.log(x, typeof x);  // NaN 'number'
console.log(y, typeof y);  // pizza 'string'
console.log(z, typeof z);  // true 'boolean'


// =============================== TOPIC 6: CONSTANTS ===============================

// const = a variable that CAN'T be reassigned after being set
// Convention: write const names in ALL_CAPS
const PI = 3.14159;
let radius;
let circumference;

// This would throw a TypeError:
// PI = 420.69;  // Cannot assign to constant variable!

document.getElementById("mySubmit2").onclick = function() {
    radius = document.getElementById("myText2").value;
    radius = Number(radius);   // Convert string input to a number
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference.toFixed(2) + " cm";
}


// =============================== TOPIC 7: MATH OBJECT ===============================

// Math = built-in object with mathematical functions and constants
// No need to import - always available, use as: Math.methodName()

// Properties (built-in constants):
// Math.PI  -> 3.14159...
// Math.E   -> 2.71828... (Euler's number)

// Rounding methods:
// Math.round(x) = rounds to nearest integer    -> 3.6 becomes 4
// Math.floor(x) = always rounds DOWN           -> 3.9 becomes 3
// Math.ceil(x)  = always rounds UP             -> 3.1 becomes 4
// Math.trunc(x) = removes decimal part         -> 3.9 becomes 3

// Math operations:
// Math.pow(x, y)  = x to the power of y       -> Math.pow(2, 8) = 256
// Math.sqrt(x)    = square root                -> Math.sqrt(25)  = 5
// Math.abs(x)     = absolute value (no sign)   -> Math.abs(-7)   = 7
// Math.max(a,b,c) = largest number             -> Math.max(3,9,1) = 9
// Math.min(a,b,c) = smallest number            -> Math.min(3,9,1) = 1

// Math.random() = random decimal from 0 (inclusive) to 1 (exclusive)
// Random decimal 0 to <1:             Math.random()
// Random integer 0 to 5:              Math.floor(Math.random() * 6)
// Random integer 1 to 6 (dice roll):  Math.floor(Math.random() * 6) + 1
// Random integer between min and max: Math.floor(Math.random() * (max - min + 1)) + min

let a = 3.6;
let b = 2;
let c = 1;

let max = Math.max(a, b, c);  // 3.6
let min = Math.min(a, b, c);  // 1

console.log("Max:", max);
console.log("Min:", min);
