// ================= TOPIC 20: ARRAYS =================

console.log("\n--- Topic 20: Arrays ---");

// array = a variable-like structure that can hold more than 1 value
// Arrays store multiple values in a single variable
// Index starts at 0 (first element is [0], second is [1], etc.)

let fruits = ["apple", "orange", "banana", "coconut"];

// Array methods for adding/removing elements:

// .push(element) = adds an element to the END of array
// fruits.push("coconut");  // ["apple", "orange", "banana", "coconut","coconut"]

// .pop() = removes the LAST element from array
// fruits.pop();  // ["apple", "orange", "banana", "coconut"] (Coconut removed)

// .unshift(element) = adds an element to the BEGINNING of array
// fruits.unshift("mango");  // ["mango", "apple", "orange", "banana", "coconut"]

// .shift() = removes the FIRST element from array
// fruits.shift();  // ["apple", "orange", "banana", "coconut"] (Mango removed)

// Array properties and methods:

// .length = property that returns number of elements in array
let numOfFruits = fruits.length;

// .indexOf(element) = returns the index of first occurrence of element
// Returns -1 if element is not found
let index = fruits.indexOf("coconut"); // 3

// Accessing array elements:
// console.log(fruits);      // Prints entire array
// console.log(fruits[0]);   // "apple"
// console.log(fruits[1]);   // "orange"
// console.log(fruits[2]);   // "banana"
// console.log(fruits[3]);   // "coconut"

// console.log(numOfFruits);  // 4
// console.log(index);        // 3

// Looping through arrays with for loop:

// Forward loop (0 to end)
/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

// Backward loop (end to 0)
/*
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
*/

// Array sorting methods:

// .sort() = sorts array in alphabetical order (modifies original array)
// fruits.sort();

// .reverse() = reverses the order of array elements
// fruits.sort().reverse();  // Sort Z-A (reverse alphabetical)

// for...of loop = cleaner way to loop through array elements
// Automatically gets each element without using index
for(let fruit of fruits){
    console.log(fruit);
}


// ================= TOPIC 21: 2D ARRAYS =================

console.log("\n--- Topic 21: 2D Arrays ---");

// 2D array = multi-dimensional array that stores a matrix
//            of data in rows and columns
//            Think of it as an array of arrays
//            Useful for games (tic-tac-toe), spreadsheets, or representing images

const matrix = [ [1, 2, 3],   // Row 0
                 [4, 5, 6],   // Row 1
                 [7, 8, 9]];  // Row 2

// Accessing 2D array elements:
// matrix[row][column]
// matrix[0][0] = first row, first column = 1
// matrix[1][2] = second row, third column = 6

// Tic-tac-toe example (commented out):
// matrix[0][0] = 'X';  // Top-left
// matrix[0][1] = 'O';  // Top-center
// matrix[0][2] = 'X';  // Top-right

// matrix[1][0] = 'O';  // Middle-left
// matrix[1][1] = 'X';  // Middle-center
// matrix[1][2] = 'O';  // Middle-right

// matrix[2][0] = 'X';  // Bottom-left
// matrix[2][1] = 'O';  // Bottom-center
// matrix[2][2] = 'X';  // Bottom-right

// Looping through 2D arrays:
// for...of gets each row (which is itself an array)
for(let row of matrix){
    // .join(' ') = converts array to string with space between elements
    const rowString = row.join(' ');
    console.log(rowString);
    // Prints:
    // 1 2 3
    // 4 5 6
    // 7 8 9
}


// ================= TOPIC 22: SPREAD OPERATOR =================

console.log("\n--- Topic 22: Spread Operator ---");

// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)

// ------------- EXAMPLE 1: Spreading array into function arguments -------------
let numbers = [1, 2, 3, 4, 5];

// Without spread: Math.max([1, 2, 3, 4, 5]) - doesn't work
// With spread: Math.max(1, 2, 3, 4, 5) - works!
let maximum = Math.max(...numbers);  // ...numbers unpacks to: 1, 2, 3, 4, 5
let minimum = Math.min(...numbers);

console.log(maximum);  // 5

// ------------- EXAMPLE 2: Spreading string into array -------------
let username = "Umer Azmi";

// Spreads string into individual characters
let letters = [...username];  // ['U', 'm', 'e', 'r', ' ', 'A', 'z', 'm', 'i']

console.log(letters);

// ------------- EXAMPLE 3: Combining arrays -------------
let fruits1 = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

// Spread operators unpack both arrays into one new array
// Can also add individual elements
let foods = [...fruits1, ...vegetables, "eggs", "milk"];
// Result: ["apple", "orange", "banana", "carrots", "celery", "potatoes", "eggs", "milk"]

console.log(foods);


// ================= TOPIC 23: REST PARAMETERS =================

console.log("\n--- Topic 23: Rest Parameters ---");

// rest parameters = (...rest) allow a function to work with a variable
//                   number of arguments by bundling them into an array

// Key difference:
// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// -------- EXAMPLE 1: Basic rest parameters --------
// ...foods bundles all arguments into an array called 'foods'
function openFridge(...foods){
    console.log([...foods]);  // Spread them back out to print
}

function getFood(...foods){
    return foods;  // Returns array of all arguments
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// Can pass any number of arguments
openFridge(food1, food2, food3, food4, food5);

const foods1 = getFood(food1, food2, food3, food4, food5);
// foods1 = ["pizza", "hamburger", "hotdog", "sushi", "ramen"]

// -------- EXAMPLE 2: Sum and average functions --------
// Accept any number of numbers and calculate sum
function sum(...numbers){
    let result = 0;
    // Loop through all numbers in the array
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    // Divide by length to get average
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);  // 80

// -------- EXAMPLE 3: Combining strings --------
// Takes any number of string arguments
function combineStrings(...strings){
    // .join(" ") = combines array elements into one string with spaces
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Umer", "Azmi", "III");

console.log(fullName);  // "Mr. Umer Azmi III"


// ================= TOPIC 24: CALLBACKS =================

console.log("\n--- Topic 24: Callbacks ---");

// callback = a function that is passed as an argument
//            to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// Think of it as: "Hey, when you're done, call this next."

// Passing goodbye function as an argument to hello function
hello(goodbye);

// callback = parameter that will receive a function
function hello(callback){
    console.log("Hello!");
    callback();  // Calls the function that was passed in
}

function goodbye(){
    console.log("Goodbye!");
}

// Output:
// "Hello!"
// "Goodbye!"

// Why use callbacks?
// - Execute code after something else completes
// - Handle asynchronous operations (things that take time)
// - Create more flexible, reusable functions