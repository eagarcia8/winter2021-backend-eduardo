// This tells Node we would like to use FS package in this JavaScript file.
const fs = require("fs");

// .writeFileSync() Write a file to the same folder as this JavaScript file. Arguments: File name, File Contents, Character Set

// Synchronous JavaScript. Meaning this line wil "block" any following code. That means the code after this line will NOT run until this line is done.
fs.writeFileSync("test.txt", "How are you doing today?", "utf-8");
// fs.writeFileSync("veryimportantinfo.txt", "Password: 123456", "utf-8");


// Asynchronus JavaScript. This line runs, but also moves on to the code afterwards, and this line ends independently from the lines of code after it.
 // fs.writeFile()


 // .readFileSync() Reads a file, and returns the contents of the file as a string. Arguments: File name, Character Set.
let fileContents = fs.readFileSync("veryimportantinfo.txt", "utf-8");

// Create a Date object.
let time = new Date();

// "\n" is a escaped character that represents a new line in text.
fileContents = fileContents + "\n" + time.toLocaleString("en-US");

fs.writeFileSync("veryimportantinfo.txt", fileContents, "utf-8");