// ================= TOPIC 38: SYNCHRONOUS VS ASYNCHRONOUS =================

// synchronous = Executes line by line consecutively in a sequential manner 
//               Code that waits for an operation to complete
//               Each line must finish before the next one starts
//               Blocking - stops execution until task is done

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                Non-blocking - other code can run while waiting
//                Common uses: I/O operations, network requests, fetching data
//                Handled with: Callbacks, Promises, Async/Await

// setTimeout() = Built-in function that executes code after a specified delay
//                Syntax: setTimeout(callback, milliseconds)
//                callback = function to execute after delay
//                milliseconds = delay time (1000ms = 1 second)
//                Returns a timer ID that can be used to cancel with clearTimeout()
//                setTimeout is ASYNCHRONOUS - doesn't block code execution

// ------------ ASYNCHRONOUS EXAMPLE ------------
function runSyncVsAsync(){             // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    function func1(callback){
        // setTimeout delays execution by 3000ms (3 seconds)
        // Arrow function runs after 3 seconds
        // callback() is called after the timeout completes
        setTimeout(() => {
            console.log("Task 1 (runs after 3 seconds)");
            callback();  // Executes the callback function passed in
        }, 3000);
    }

    // ------------ SYNCHRONOUS EXAMPLE ------------
    function func2(){
        // These run immediately, one after another
        console.log("Task 2 (runs immediately)");
        console.log("Task 3 (runs immediately)");
        console.log("Task 4 (runs immediately)");
    }

    // Execution flow:
    // 1. func1 is called, setTimeout starts counting 3 seconds
    // 2. While waiting, func2 is passed as callback
    // 3. Tasks 2, 3, 4 run immediately (synchronous)
    // 4. After 3 seconds, Task 1 runs, then calls func2's remaining code

    console.log("=== Sync vs Async ===");
    func1(func2);
    console.log("This runs before Task 1 (because setTimeout is async)");
}

// Connect to button
document.getElementById("syncAsyncBtn").onclick = runSyncVsAsync;


// ================= TOPIC 39: CALLBACK HELL =================

// Callback Hell = Situation in JavaScript where callbacks 
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read
//                 Also called "Pyramid of Doom" due to its shape
//                 Old pattern to handle asynchronous functions
//                 SOLUTION: Use Promises + async/await to avoid Callback Hell

// Problems with Callback Hell:
// 1. Hard to read (pyramid shape)
// 2. Difficult to debug
// 3. Error handling is messy
// 4. Hard to maintain and modify

function runCallbackHell(){        // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    function task1(callback){
        setTimeout(() => {
            console.log("Task 1 complete");
            callback();  // Move to next task
        }, 2000);
    }

    function task2(callback){
        setTimeout(() => {
            console.log("Task 2 complete");
            callback();
        }, 1000);
    }

    function task3(callback){
        setTimeout(() => {
            console.log("Task 3 complete");
            callback();
        }, 3000);
    }

    function task4(callback){
        setTimeout(() => {
            console.log("Task 4 complete");
            callback();
        }, 1500);
    }

    // This is Callback Hell - nested callbacks creating pyramid shape
    // Each callback is nested inside the previous one
    // Gets worse with more tasks or error handling
    console.log("=== Callback Hell Example ===");
    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => console.log("✅ All tasks completed"));
            })
        });
    })
}

// Connect to button
document.getElementById("callbackHellBtn").onclick = runCallbackHell;

// Modern solution: Use Promises or async/await (covered in next topics)


// ================= TOPIC 40: PROMISES =================

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// ------------ EXAMPLE 1: Basic Promise ------------

function runPromiseExample1(){        // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    // Creating a Promise
    function loadFile(){
        return new Promise((resolve, reject) => {
            // Simulating file loading (asynchronous operation)
            let fileLoaded = true;  // Change to false to see rejection
            
            if(fileLoaded){
                resolve("File loaded successfully");  // Success
            }
            else{
                reject("File NOT loaded");  // Failure
            }
        });
    }

    // Using the Promise
    console.log("Promise Example 1:");
    loadFile()
        .then(message => {
            console.log("Promise resolved:", message);
        })
        .catch(error => {
            console.error("Promise rejected:", error);
        });
}

// Connect to button
document.getElementById("promise1Btn").onclick = runPromiseExample1;

// ------------ EXAMPLE 2: Promise with setTimeout ------------

function runPromiseExample2(){      // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    function waitSeconds(seconds){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Waited for ${seconds} seconds`);
            }, seconds * 1000);
        });
    }

    console.log("Promise Example 2 - Wait 2 seconds:");
    waitSeconds(2)
        .then(value => console.log("Promise resolved:", value))
        .catch(error => console.error(error));
}

// Connect to button
document.getElementById("promise2Btn").onclick = runPromiseExample2;

// ------------ EXAMPLE 3: Chaining Promises ------------

function runPromiseExample3(){     // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    function step1(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 1 complete");
                resolve();
            }, 1000);
        });
    }

    function step2(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 2 complete");
                resolve();
            }, 1000);
        });
    }

    function step3(){
        return new Promise((resolve,reject) => {
            let fileLoaded;
            if(fileLoaded){
                setTimeout(() => {
                    resolve("Step 3 complete");
                }, 1000);
            }
            else{
                reject("File NOT loaded");
            }

        });
    }

    // Chain promises - runs one after another
    console.log("Promise Example 3 - Chaining:");
    step1()
        .then(() => step2())
        .then(() => {return step3()})
        .then(() => console.log("✅ All steps complete!"))
        .catch(error => console.error(error));
}

// Connect to button
document.getElementById("promise3Btn").onclick = runPromiseExample3;

// Promise chaining rules:

// 1. .then() waits for the Promise returned from the previous step

// Arrow function return rules:
// 2. () => step2()        -> implicit return (automatically returns step2() promise)
// 3. () => { step2(); }   -> block body (returns undefined because no return written)
// 4. () => { return step2(); } -> explicit return (correct, returns the promise)

// What .then() does:
// 5. .then() waits only for what is returned from its callback
// 6. If a Promise is returned -> next .then() waits
// 7. If undefined is returned -> next .then() runs immediately (chain breaks)

// .catch()
// 8. .catch() runs if ANY promise in the chain rejects


// ================= TOPIC 41: ASYNC/AWAIT =================

// Async/Await = Async makes a function return a promise
//               Await makes an async function wait for a promise
//               Cleaner way to handle promises
//               Looks like synchronous code, but it's asynchronous!

// ------------ EXAMPLE 1: Basic async/await ------------

function runAsyncExample1(){   // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    // async function automatically returns a Promise
    async function loadData(){
        return "Data loaded!";
    }

    loadData().then(data => console.log("Async function returned:", data));
}

// Connect to button
document.getElementById("async1Btn").onclick = runAsyncExample1;

// ------------ EXAMPLE 2: await with Promises ------------

function runAsyncExample2(){      // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    function fetchUser(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({name: "Umer Azmi", age: 23});
            }, 2000);
        });
    }

    // Using async/await (cleaner than .then())
    async function displayUser(){
        console.log("Async/Await - Fetching user...");
        
        // await pauses execution until Promise resolves
        const user = await fetchUser();
        
        console.log("Async/Await - User data:", user);
        console.log(`Async/Await - Name: ${user.name}`);
    }

    displayUser();
}

// Connect to button
document.getElementById("async2Btn").onclick = runAsyncExample2;

// ------------ EXAMPLE 3: Chores with Async/Await ------------

function runAsyncExample3(){       // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    
    // Async/Await = Async = makes a function return a promise
    //               Await = makes an async function wait for a promise

    // Allows you write asynchronous code in a synchronous manner
    // Async doesn't have resolve or reject set up as parameters
    // After await, the remaining code runs later via the event queue once the Promise resolves.

    function walkDog(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const dogWalked = true;

                if(dogWalked){
                    resolve("You walk the dog 🐕");
                }
                else{
                    reject("You DIDN'T walk the dog");
                }
            }, 1500);
        });
    }

    function cleanKitchen(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                const kitchenCleaned = true;

                if(kitchenCleaned){
                    resolve("You clean the kitchen 🧹");
                }
                else{
                    reject("You DIDN'T clean the kitchen");
                }
            }, 2500);
        });
    }

    function takeOutTrash(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const trashTakenOut = true;

                if(trashTakenOut){
                    resolve("You take out the trash ♻");
                }
                else{
                    reject("You DIDN'T take out the trash");
                }

            }, 500);
        });
    }

    // async function with try/catch for error handling
    async function doChores(){

        try{
            // await pauses until each promise resolves
            // Runs sequentially - waits for each to finish before next
            const walkDogResult = await walkDog();
            console.log(walkDogResult);
        
            const cleanKitchenResult = await cleanKitchen();
            console.log(cleanKitchenResult);
        
            const takeOutTrashResult = await takeOutTrash();
            console.log(takeOutTrashResult);
            
            console.log("✅ You finished all the chores!");
        }
        catch(error){
            // Catches any rejection from any of the promises
            console.error(error);
        }
    }

    console.log("=== Async/Await Chores Example ===");
    doChores();
}

// Connect to button
document.getElementById("async3Btn").onclick = runAsyncExample3;


// ================= TOPIC 42: FETCH API =================

// fetch = Function used for making HTTP requests to fetch resources
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript
//         Used for interacting with APIs to retrieve and send
//         data asynchronously over the web
//         Syntax: fetch(url, {options})
//         Returns a Promise

// Key Methods:
// response.ok = boolean property, true if status 200-299 (successful)
// response.json() = parses response body as JSON and returns a Promise
//                   Converts JSON text into JavaScript object
// response.text() = parses response as plain text
// response.blob() = parses response as binary data (images, files)

// ------------ METHOD 1: Using .then() ------------

function runFetchThen(){              // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    console.log("=== Fetch with .then() ===");
    
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            // Check if response is successful (status 200-299)
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            // .json() parses the JSON response into a JavaScript object
            // Returns another Promise, so we need another .then()
            return response.json();
        })
        .then(data => {
            // data is now a JavaScript object
            console.log("Pokémon data (.then version):", data);
            console.log("Name:", data.name);
            console.log("Height:", data.height);
            console.log("Weight:", data.weight);
        })
        .catch(error => {
            // Catches network errors or errors thrown in .then()
            console.error("Fetch error:", error);
        });
}

// Connect to button
document.getElementById("fetchThenBtn").onclick = runFetchThen;

// ------------ METHOD 2: Using async/await (MODERN & CLEANER) ------------

function runFetchAsync(){                  // Ignore this function as it gets triggered when clicking on run example button
    console.clear();
    console.log("=== Fetch with async/await ===");
    
    async function fetchData(){
        try{
            // await pauses until fetch completes
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

            // Check if request was successful
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }

            // await pauses until JSON parsing completes
            // .json() converts JSON text to JavaScript object
            const data = await response.json();
            
            console.log("Pokémon data (async/await version):", data);
            console.log("Name:", data.name);
            console.log("Abilities:", data.abilities.map(a => a.ability.name));
            console.log("Abilities & Slot:", data.abilities.map(a =>`Ability: ${a.ability.name}, Slot: ${a.slot}`));
        }
        catch(error){
            // Handles any errors (network issues, parsing errors, thrown errors)
            console.error("Fetch error:", error);
        }
    }
    
    fetchData();
}

// Connect to button
document.getElementById("fetchAsyncBtn").onclick = runFetchAsync;

// Why use async/await over .then()?
// 1. Cleaner, more readable code
// 2. Looks like synchronous code
// 3. Easier error handling with try/catch
// 4. Better for complex operations with multiple fetches
