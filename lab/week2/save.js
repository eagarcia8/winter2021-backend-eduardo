// Load the FS module for this JavaScript file.
const fs = require("fs");

// Checks if a file exists using fs.existsSync()
// ! flips the exist boolean, i.e. false to true, and true to false.
if (!fs.existsSync("log.txt")) {
    fs.writeFileSync("log.txt", "", "utf-8");
}

// Rename process.argv into arguments.
let arguments = process.argv;

// Grab the 3rd (index 2) item in the arguments array.
let input = arguments[2];

// Read existing text in log.txt and save it to the variable existingContent.
let existingContent = fs.readFileSync("log.txt", "utf-8");

// Add the input value on a new line to the existing content.
existingContent = existingContent + "\n" + input;

// Write the log.txt file with the existingContent string.
fs.writeFileSync("log.txt", existingContent, "utf-8");