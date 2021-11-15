const express = require("express");
const fs = require("fs");

const app = express();
const http = require("http").Server(app);

// Holds our array of all previous entries made (an entry is represented as an object).
let history;

// Check if we have a file called history.json.
if (fs.existsSync("history.json")) {

    // If we do, read it and load the string into the data variable.
    let data = fs.readFileSync("history.json", "utf-8");

    // Convert the JSON string into a JavaScript Object.
    data = JSON.parse(data);

    // Grab the Array inside of the history property of the JavaScript Object.
    history = data.history;
} else {

    // If we don't have a file called history.json, then we start with an empty array.
    history = [];
}



//body-parser
app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Running Express server on port " + port);

// Express Routes
app.use("/", express.static("public_html/"));

// Post handler that provides the history array.
app.post("/history", function (request, response) {

    // Build an object to respond with, this object will hold the history array inside of the history property.
    let responseObject = {
        history: history
    };

    response.send(responseObject);
});

app.post("/entry", function (request, response) {

    let dataFromFrontEnd = request.body;

    // Server creates a random number between 1 and 10.
    let serverNumber = Math.floor(Math.random() * 10) + 1;

    // Create an object that holds basic data for the "entry" made.
    let entry = {
        fname: dataFromFrontEnd.fname,
        number: dataFromFrontEnd.number,
        serverNumber: serverNumber,
        timestamp: (new Date()).toLocaleString("en-US")
    };

    // Add the new entry to the history array.
    history.push(entry);

    // Create a Object to hold the history array.
    let dataToSave = {
        history: history
    };

    // Convert the dataToSave object to a JSON String.
    dataToSave = JSON.stringify(dataToSave);

    // Write the JSON String to the file called history.json
    fs.writeFileSync("history.json", dataToSave, "utf-8");

    let results = "";

    // Store a specific message inside of results variable, based on whether we matched the number or not.
    if (serverNumber == dataFromFrontEnd.number) {
        results = "Congratz, you guessed the correct number!";
    } else {
        results = "Sorry your number did not match, the number was " + serverNumber
    }

    let responseObject = {
        message: results,
        history: history
    };

    response.send(responseObject);
});