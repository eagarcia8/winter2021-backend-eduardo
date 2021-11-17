// Loads in the Mongoose package.
const mongoose = require("mongoose");
// Access the credentials.js file for the MongoDB login details.
const credentials = require("./credentials.js");

// The URL that Mongoose will use to connect to the MongoDB database.
// The URL is stored in the file credentials.js which we require and call here.
const connectURL = credentials.mongoDBCredentials();

console.log(credentials.specialNumber);
console.log(credentials.privateInfo);

// Settings and options for Mongoose.
const options = {};

// Create a connection to the MongoDB database.
mongoose.connect(connectURL, options, function (error) {
    if (error) {
        console.log("We have an Mongoose/MongoDB error!", error);
    } else {
        console.log("Successfully connected to MongoDB Atlas.");
    }
});

// Object representing the connection.
let database = mongoose.connection;

// Turn on connection and link any errors by MongoDB to the console automatically.
database.on("error", console.error.bind(console, "We had a MongoDB Error."));

// Copy Promise to mongoose.
mongoose.Promise = global.Promise;

// Make a copy of the mongoose Schema Class.
let Schema = mongoose.Schema;

// Define the schema for our employee collection. The values in the object is what is allowed on the MongoDB collection.
let employeeSchema = new Schema({
    fname: String,
    lname: String,
    age: Number,
    startDate: String
});

// Create a model object we can interact with, but we need customize it by specifying the collection name we want to access, and the Schema we will be using with this collection.
let employeeModel = new mongoose.model("employees", employeeSchema);


// CREATE
// Create a Mongoose Document, and fill it with our own information.
let myFirstEmployee = new employeeModel({
    fname: "Eduardo",
    lname: "Garcia",
    age: 31,
    startDate: (new Date()).toLocaleString(),
    favFood: "Sushi"
});

// Save this Document to the MongoDB database.
myFirstEmployee.save(function (error) {
    if (error) {
        console.log("Failed to save the document", error);
    } else {
        console.log("Successfully saved document.");
    }
});

// READ
// Search for specific documents based on our criteria located inside of the object in the first argument of the .find() method,
employeeModel.find({fname: "Eduardo"}, function (error, results) {
    if (error) {
        console.log("There was an error searching the DB", error);
    } else {
        console.log("Found the following Documents: ", results);
    }
});

// UPDATE
// Search for a specific document and update the values in that document, and save it. The first argument should be the ID of the document we want to update. The second argument is an object that holds the properties and values we want to update the document with.
employeeModel.findByIdAndUpdate("61954e5dfdbab0d633ffbe16", {fname: "Bob", lname: "Ross"}, function (error) {
    if (error) {
        console.log("There was an error updating the document", error);
    } else {
        console.log("Document successfully updated.");
    }
});

// DELETE
// Searches for a specific document and deletes it. The first argument should be the ID of the document we want to delete.
employeeModel.findByIdAndDelete("6195557ce42153b4ec4e4182", function (error) {
    if (error) {
        console.log("Failed to delete the document", error);
    } else {
        console.log("Successfully deleted the document.");
    }
});