// ================= TOPIC 15: LOGICAL OPERATORS =================

console.log("\n--- Topic 15: Logical Operators ---");

// logical operators = used to combine or manipulate boolean values 
//                     (true or false)
// AND = &&  (both conditions must be true)
// OR  = ||  (at least one condition must be true)
// NOT = !   (reverses the boolean value)

// ---------- EXAMPLE 1: AND (&&) ----------
// && = returns true only if BOTH conditions are true
const temp = -100;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

// ---------- EXAMPLE 2: OR (||) ----------
// || = returns true if AT LEAST ONE condition is true
const temp2 = -250;

if(temp2 <= 0 || temp2 > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

// ---------- EXAMPLE 3: NOT (!) ----------
// ! = reverses the boolean value (true becomes false, false becomes true)
const isSunny = true;

if(!isSunny){  // if NOT sunny (if sunny is false)
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}


// ================= TOPIC 16: EQUALITY OPERATORS =================

console.log("\n--- Topic 16: Equality Operators ---");

// = assignment operator (assigns a value to a variable)
// == comparison operator (compares if values are equal, ignores datatype)
// === strict equality operator (compares if values AND datatype are equal)
// != inequality operator (checks if values are NOT equal)
// !== strict inequality operator (checks if values OR datatype are NOT equal)

const PI = 3.14;

// == vs === difference:
// "3.14" == 3.14   - true (values are equal, ignores type)
// "3.14" === 3.14  - false (different datatypes: string vs number)

if(PI === "3.14"){  // 3.14 (number) === "3.14" (string) - false
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

// Best practice: Always use === and !== for comparisons
// They prevent unexpected behavior from type coercion


// ================= TOPIC 17: WHILE LOOPS =================

console.log("\n--- Topic 17: While Loops ---");

// while loop = repeat some code WHILE some condition is true
// Loop continues until condition becomes false

// ---------- EXAMPLE 1: Basic while loop ----------
// IMPORTANT: window.prompt in loops can freeze your browser!
// This example is commented out for safety
// Uncomment ONLY if you want to test it (be ready to refresh page)

/*
let username = '';

// Loop keeps running while username is empty or null
while(username === "" || username === null){
    username = window.prompt("Enter your name");
}
console.log(`Hello ${username}`);
*/

// ---------- EXAMPLE 2: Do-While loop ----------
// do-while = executes code block FIRST, then checks condition
// Guarantees code runs at least once

/*
let username2 = "";

do{
    username2 = window.prompt('Enter your name');
}while(username2 === "" || username2 === null)

console.log(`Hello ${username2}`);
*/

// ---------- EXAMPLE 3: Login system with HTML inputs ----------
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginResult = document.getElementById("loginResult");

// Using click event instead of while loop to avoid freezing
loginBtn.onclick = function(){
    let userInput = usernameInput.value;
    let passwordInput2 = passwordInput.value;
    
    // Check if credentials match
    if(userInput === "UmerAzmi" && passwordInput2 === "myPassword"){
        loginResult.textContent = "✅ You are logged in!";
        loginResult.style.color = "green";
    }
    else if(userInput === "" || passwordInput2 === ""){
        loginResult.textContent = "⚠️ Please enter both username and password";
        loginResult.style.color = "orange";
    }
    else{
        loginResult.textContent = "❌ Invalid credentials! Please try again";
        loginResult.style.color = "red";
    }
}


// ================= TOPIC 18: FOR LOOPS =================

console.log("\n--- Topic 18: For Loops ---");

// for loop = repeat some code a LIMITED amount of times
// Syntax: for(initialization; condition; increment/decrement)

// ------- INCREMENT -------
// i = iterator variable (commonly used name)
// i = 1 - starting value
// i <= 10 - continue while this is true
// i++ - increase i by 1 after each loop
for(let i = 1; i <= 10; i++){
    console.log(i);  // Prints: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// ------- DECREMENT -------
// Counting backwards
for(let i = 10; i > 0; i--){
    console.log(i);  // Prints: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
}

// When to use for vs while:
// for loop = when you know how many times to repeat
// while loop = when you don't know how many times to repeat


// ================= TOPIC 19: FUNCTIONS =================

console.log("\n--- Topic 19: Functions ---");

// function = A section of reusable code
//            Declare code once, use it whenever you want
//            Call the function to execute that code

// Function with parameters (username, age)
// Parameters = placeholders for values passed to function
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear, ${username}`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

// Basic math functions
// return = sends a value back to where function was called
function add(x, y){
    return x + y;  // Returns sum of x and y
}

function subtract(x, y){
    return x - y;  // Returns difference
}

function multiply(x, y){
    return x * y;  // Returns product
}

function divide(x, y){
    return x / y;  // Returns quotient
}

// Function that returns boolean (true/false)
function isEven(number){
    // % 2 === 0 checks if number is divisible by 2
    return number % 2 === 0 ? true : false;
}

// Function to validate email
function isValidEmail(email){
    // Checks if email contains @ symbol
    return email.includes("@") ? true : false;
}

// Calling functions
// Arguments = actual values passed to function
happyBirthday("Umer Azmi", 23);  // "Umer Azmi" and 23 are arguments

console.log(add(5, 3));           // Prints: 8
console.log(subtract(10, 4));     // Prints: 6
console.log(multiply(3, 7));      // Prints: 21
console.log(divide(20, 5));       // Prints: 4
console.log(isEven(10));          // Prints: true
console.log(isValidEmail("UmerAzmi@gmail.com"));  // Prints: true

// Key terms:
// Function declaration = creating the function
// Function call = using/executing the function
// Parameters = variables in function definition
// Arguments = actual values passed when calling
// return = sends value back from function
