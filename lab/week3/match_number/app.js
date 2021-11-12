const express = require("express");
const app = express();
const http = require("http").Server(app);

//body-parser
app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Running Express server on port " + port);

// Express Routes
app.use("/", express.static("public_html/"));

app.post("/entry", function (request, response) {

    let dataFromFrontEnd = request.body;

    // Server creates a random number between 1 and 10.
    let serverNumber = Math.floor(Math.random() * 10) + 1;

    let results = "";

    // Store a specific message inside of results variable, based on whether we matched the number or not.
    if (serverNumber == dataFromFrontEnd.number) {
        results = "Congratz, you guessed the correct number!";
    } else {
        results = "Sorry your number did not match, the number was " + serverNumber
    }

    let responseObject = {
        message: results
    };

    response.send(responseObject);
});