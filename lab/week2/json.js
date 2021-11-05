const fs = require("fs");

let myObject = {
    num1: 100,
    welcomeString: "Goodmorning!",
    isValid: true,
    sayHello: function () {
        console.log("Hello");
    }
};

// If using Node.js, do not name any variables or functions the name "name".
// Data should not "live" in your scripts/programming code.
let employee = {
    fname: "Eduardo",
    age: 31
}

employee.age = employee.age + 1;

// JSON.stringify() is a method that allows us to convert a JavaScript Object, into a JSON string.
let jsonResults = JSON.stringify(myObject);

console.log(jsonResults);

console.log("Writing file...");
fs.writeFileSync("data.json", jsonResults, "utf-8");
console.log("File creation complete.");

// Bringing in a JSON file and converting it into a JavaScript Object.

// Read the data.json file.
let jsonText = fs.readFileSync("data.json", "utf-8");

// Convert the jsonText string (which should hold the json file contents as a string) and convert it into a working JavaScript Object.
let objectFromJSON = JSON.parse(jsonText);

console.log(jsonText);
console.log(objectFromJSON);

// Access properties of the object created from JSON.
console.log(objectFromJSON.welcomeString);
