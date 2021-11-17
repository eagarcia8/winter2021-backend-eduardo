// Loads in the Mongoose package.
const mongoose = require("mongoose");
// Access the credentials.js file for the MongoDB login details.
const credentials = require("./credentials.js");

// The URL that Mongoose will use to connect to the MongoDB database.
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