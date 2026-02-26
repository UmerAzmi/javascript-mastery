// ================= TOPIC 31: OBJECTS =================

console.log("\n--- Topic 31: Objects ---");

// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          Format: object = {key:value, function()}

// ------------ EXAMPLE 1: Basic Object ------------
const person = {
    // Properties (key: value pairs)
    firstName: "Umer",
    lastName: "Azmi",
    age: 23,
    isEmployed: true,
    
    // Method (function inside object)
    sayHello: function(){
        console.log("Hi! I am Umer Azmi");
    },
    
    // Shorter method syntax (ES6)
    // Called: Method Shorthand
    eat(){
        console.log("I am eating pizza");
    }
};

// Accessing object properties:
console.log("Person's first name (dot notation):", person.firstName);
console.log("Person's last name (bracket notation):", person["lastName"]);

// Calling object methods:
console.log("sayHello() method:");
person.sayHello();
console.log("eat() method:");
person.eat();

// Modifying object properties:
person.age = 24;
person.isEmployed = false;

// Adding new properties:
person.city = "Mumbai";

// Deleting properties:
delete person.city;

// ------------ EXAMPLE 2: Multiple Objects ------------
const person1 = {
    firstName: "Umer",
    lastName: "Azmi",
    age: 23,
    isEmployed: true
};

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isEmployed: false
};

console.log("Person1's first name:", person1.firstName);
console.log("Person2's first name:", person2.firstName);

// ------------ EXAMPLE 3: this Keyword in Objects ------------
// 'this' refers to the object the method belongs to. 
// It doesn't work with arrow functions as they make reference to the window object rather than the current object.

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    
    // 'this' refers to the 'car' object
    displayInfo: function(){
        console.log(`${this.brand} ${this.model} (${this.year})`);
    }
};

console.log("Car displayInfo() method:");
car.displayInfo();

// ------------ EXAMPLE 4: Nested Objects ------------
const user = {
    name: "Umer Azmi",
    age: 23,
    address: {                  // Nested object
        street: "123 Main St",
        city: "Mumbai",
        country: "India"
    },
    hobbies: ["coding", "gaming", "reading"]  // Array inside object
};

// Accessing nested properties:
console.log("User's city (nested object):", user.address.city);
console.log("User's first hobby (array in object):", user.hobbies[0]);


// ================= TOPIC 32: CONSTRUCTOR FUNCTIONS =================

// constructor = special method for defining the properties and methods of objects
//               Think of it as a blueprint/template for creating multiple similar objects
//               Uses the 'function' keyword (older way, before ES6 classes)

// Key concepts:
// - 'this' keyword refers to the new object being created
// - 'new' keyword creates a new instance from the constructor
// - Convention: Constructor names start with Capital letter

function Car(make, model, year, color){
    // 'this' assigns properties to the new object being created
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    
    // Methods can also be defined in constructors
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
}

// 'new' keyword:
// 1. Creates an empty object {}
// 2. Sets 'this' to point to that new object
// 3. Calls the constructor function
// 4. Returns the newly created object

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Accessing properties from constructor instances
console.log("Car1 make:", car1.make);
console.log("Car1 model:", car1.model);
console.log("Car1 year:", car1.year);
console.log("Car1 color:", car1.color);

console.log("Car2 make:", car2.make);
console.log("Car2 model:", car2.model);
console.log("Car2 year:", car2.year);
console.log("Car2 color:", car2.color);

console.log("Car3 make:", car3.make);
console.log("Car3 model:", car3.model);
console.log("Car3 year:", car3.year);
console.log("Car3 color:", car3.color);

// Calling methods from constructor instances
console.log("Car1 drive() method:");
car1.drive();
console.log("Car2 drive() method:");
car2.drive();
console.log("Car3 drive() method:");
car3.drive();


// ================= TOPIC 33: CLASSES (ES6) =================

// class = (ES6 feature) provides a more structured and cleaner way
//         to work with objects compared to traditional constructor functions
//         Introduced in ES6 (2015) as syntactic sugar over constructor functions
//         Benefits: cleaner syntax, inheritance with 'extends', static methods

// Key differences from constructor functions:
// - Uses 'class' keyword instead of 'function'
// - constructor() method is explicitly defined
// - Methods don't need 'function' keyword
// - Inheritance is easier with 'extends' and 'super'

// ------------ EXAMPLE 1: Basic Class ------------

class Product {
    // constructor = special method for initializing objects
    // Runs automatically when you create a new instance with 'new'
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    // Method (function inside class)
    // .toFixed(n) = Rounds a number and shows exactly n digits after the decimal
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

// Creating instances (objects) from class
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 29.99);

console.log("Product class - product1:");
product1.displayProduct();
console.log("Product class - product2:");
product2.displayProduct();

console.log("Product class - calculateTotal() with 10% tax:", product1.calculateTotal(0.1));

// ------------ EXAMPLE 2: Class Inheritance ------------

// Parent class (base class)
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    move(speed){
        console.log(`The ${this.name} moves at ${speed}mph`);
    }
}

// Child class inherits from Animal
// 'extends' keyword = this class inherits all properties and methods from parent
class Dog extends Animal {
    constructor(name, age, breed){
        // 'super()' = calls the parent class constructor
        // Must be called BEFORE using 'this' in child constructor
        super(name, age);  // Passes name and age to Animal constructor
        this.breed = breed;  // Additional property specific to Dog
    }
    
    // Dog's own method (not inherited)
    bark(){
        console.log("Woof!");
    }
}

class Cat extends Animal {
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    
    meow(){
        console.log("Meow!");
    }
}

const dog = new Dog("Buddy", 3, "Golden Retriever");
const cat = new Cat("Whiskers", 2, "Orange");

console.log("Dog class - inherited move() method:");
dog.move(15);
console.log("Dog class - own bark() method:");
dog.bark();

console.log("Cat class - inherited move() method:");
cat.move(10);
console.log("Cat class - own meow() method:");
cat.meow();

// ------------ EXAMPLE 3: Static Methods ------------

class MathHelper {
    // static = belongs to the class itself, NOT to instances
    // You call static methods on the class directly, not on objects
    // Used for utility functions that don't need instance data
    static PI = 3.14159;
    
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

// Call static methods on the CLASS, not on instances
console.log("Static property - MathHelper.PI:", MathHelper.PI);
console.log("Static method - getCircumference(10):", MathHelper.getCircumference(10));
console.log("Static method - getArea(10):", MathHelper.getArea(10));

// You DON'T create an instance for static methods:
// const helper = new MathHelper();  // Not needed!
// helper.getArea(10);  // This would NOT work!


// ================= TOPIC 34: DESTRUCTURING =================

// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 Shorthand syntax introduced in ES6
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ------------ ARRAY DESTRUCTURING ------------

// Traditional way (repetitive and verbose):
const colors = ["red", "green", "blue", "yellow", "orange"];
// const firstColor = colors[0];
// const secondColor = colors[1];
// const thirdColor = colors[2];

// Destructuring way (much cleaner!):
// Variables are assigned in order from left to right
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log("First color (array destructuring):", firstColor);
console.log("Second color:", secondColor);
console.log("Third color:", thirdColor);
console.log("Extra colors (...rest operator):", extraColors);

// Skip elements with commas:
// Leave empty space with comma to skip that element
const [color1, , color3] = colors;  // Skips "green" (index 1)
console.log("Color3 (skipped color2):", color3);

// ------------ OBJECT DESTRUCTURING ------------

// Traditional way:
const person3 = {
    firstName: "Umer",
    lastName: "Azmi",
    age: 23,
    job: "Developer"
};

// const firstName = person3.firstName;
// const lastName = person3.lastName;
// const age = person3.age;

// Destructuring way (extracts matching property names):
// Variable names MUST match object property names
const {firstName, lastName, age, job} = person3;

console.log("First name (object destructuring):", firstName);
console.log("Age (object destructuring):", age);

// Renaming during destructuring (changing the variable name):
// Syntax: {originalName: newName}
const {firstName: fName, age: userAge} = person3;
console.log("Renamed firstName to fName:", fName);
console.log("Renamed age to userAge:", userAge);

// Default values:
// Provide a fallback value if property doesn't exist in object
const {firstName: name1, country = "India"} = person3;
console.log("Country (default value):", country);  // "India" because person3 has no 'country' property

// ------------ DESTRUCTURING FUNCTION PARAMETERS ------------

// Instead of passing entire object and accessing properties inside
function displayPerson({firstName, lastName, age}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
}

console.log("displayPerson() with destructured parameters:");
displayPerson(person3);

// ------------ NESTED DESTRUCTURING ------------

const student = {
    name: "Umer Azmi",
    age: 23,
    scores: {                // Nested object
        math: 95,
        science: 88
    }
};

// Destructuring nested object:
// Syntax: {outerProperty: {innerProperty1, innerProperty2}}
const {name: studentName, scores: {math, science}} = student;
console.log("Math score (nested destructuring):", math);
console.log("Science score (nested destructuring):", science);
