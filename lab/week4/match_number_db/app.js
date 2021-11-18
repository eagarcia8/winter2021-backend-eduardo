const express = require("express");
const mongoose = require("mongoose");
const credentials = require("./credentials.js");

mongoose.connect(credentials.getMongoURL(), {}, function (error) {
    if (error) {
        console.log("We had a MongoDB Error: ", error);
    } else {
        console.log("Successfully connected to MongoDB.");
    }
});

let database = mongoose.connection;
database.on("error", console.error.bind(console, "There was a MongoDB error."));

mongoose.Promise = global.Promise;

let entrySchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    number: Number,
    serverNumber: Number,
    timestamp: String
});

let entryModel = new mongoose.model("entries", entrySchema);

const app = express();
const http = require("http").Server(app);

// Holds our array of all previous entries made (an entry is represented as an object).
let history;

//body-parser
app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 80;
http.listen(port);

console.log("Running Express server on port " + port);

// Express Routes
app.use("/", express.static("public_html/"));

// Post handler that provides the history array.
app.post("/history", function (request, response) {

    // Read all documents from our database, and load them in as objects into our history variable.
    entryModel.find({}, function (error, results) {
        if (error) {
            console.log("There was an error searching the database: ", error);
        } else {
            history = results;

            // Build an object to respond with, this object will hold the history array inside of the history property.
            let responseObject = {
                history: history
            };

            response.send(responseObject);
        }
    });

    
});

app.post("/entry", function (request, response) {

    let dataFromFrontEnd = request.body;

    // Server creates a random number between 1 and 1000.
    let serverNumber = Math.floor(Math.random() * 1000) + 1;

    let entry = new entryModel({
        fname: dataFromFrontEnd.fname,
        lname: null,
        username: "public",
        number: parseInt(dataFromFrontEnd.number),
        serverNumber: serverNumber,
        timestamp: (new Date()).toLocaleString("en-US")
    });

    entry.save(function (error) {
        if (error) {
            console.log("Failed to save entry to database: ", error);
        } else {
            let message = "";

            // Store a specific message inside of results variable, based on whether we matched the number or not.
            if (serverNumber == dataFromFrontEnd.number) {
                message = "Congratulations, you guessed the correct number!";
            } else {
                message = "Sorry your number did not match, the number was " + serverNumber
            }

            // Read all documents from our database, and load them in as objects into our history variable.
            entryModel.find({}, function (error, results) {
                if (error) {
                    console.log("There was an error searching the database: ", error);


                } else {
                    history = results;

                    let responseObject = {
                        message: message,
                        history: history
                    };

                    response.send(responseObject);
                }
            });
        }
    });

    

    

    
});