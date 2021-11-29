const express = require("express");
const app = express();
const http = require("http").Server(app);
const Car = require("./Car.js");
// import {Car} from "./Car.js";

app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: true}));

const port = 3000;
http.listen(port);

console.log("Express server is running on port " + port);

app.use("/", express.static("public_html/"));

// EXPRESS END

let honda = new Car({
    name: "Honda",
    make: "Honda",
    model: "Accord",
    occupancy: 5,
    purchased: new Date("06/15/2020")
}, {
    year: 2010,
    wheels: 4,
    doors: 4,
    vin: "0239i42ujor3j2",
    owner: "Eduardo",
    engineHP: 300,
    miles: 110000,
    lastMaintMiles: 105000,
    fuelType: "gasoline",
    fuelCapacity: 21,
    fuelCurrent: 10,
    mpg: 14,
    bodyType: "sedan",
    gvwr: 4575
});

honda.run(10);
honda.run(1000);

honda.refuel(50);

honda.checkMaintenance();
console.log(honda.miles);