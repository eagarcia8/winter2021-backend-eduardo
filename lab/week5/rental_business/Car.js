// import allows us to bring in specific variable names (inside the curly braces) from a specific file (inside the double quotes).
// import {Vehicle} from "./Vehicle.js";
const Vehicle = require("./Vehicle.js");

class Car extends Vehicle {
    constructor(superData, subData) {
        super(superData);
        this.year = subData.year;
        this.wheels = subData.wheels;
        this.doors = subData.doors;
        this.vin = subData.vin;
        this.owner = subData.owner;
        this.engineHP = subData.engineHP;
        this.miles = subData.miles;
        this.lastMaintMiles = subData.lastMaintMiles;
        this.fuelType = subData.fuelType;
        this.fuelCapacity = subData.fuelCapacity;
        this.fuelCurrent = subData.fuelCurrent;
        this.mpg = subData.mpg;
        this.bodyType = subData.bodyType;
        this.gvwr = subData.gvwr;
    }

    run(miles) {
        let maxDistance = this.fuelCurrent * this.mpg;

        if (miles <= maxDistance) {
            this.fuelCurrent = this.fuelCurrent - (miles / this.mpg);

            this.miles = this.miles + miles;
            // this.miles += miles;

            console.log(`${this.make} ${this.model} has ${this.fuelCurrent} gallons left.`);
        } else {
            console.log(`${this.make} ${this.model} doesn't have enough fuel to go that far.`);
        }   
    }

    refuel(gallons) {
        let tankFreeSpace = this.fuelCapacity - this.fuelCurrent;

        if (tankFreeSpace >= gallons) {
            this.fuelCurrent = this.fuelCurrent + gallons;
            console.log(`Fueled up the car with ${gallons} gallons of gas. The car now has ${this.fuelCurrent} gallons of gas.`);
        } else {
            this.fuelCurrent = this.fuelCurrent + tankFreeSpace;
            console.log(`Could not fill up the tank with the requested amount, instead fueled up to maximum of ${this.fuelCapacity} gallons of gas. You purchased ${tankFreeSpace} gallons of gas.`);
        }
    }

    checkMaintenance() {
        let milesSinceCheck = this.miles - this.lastMaintMiles;

        if (milesSinceCheck >= 10000) {
            console.log(`The ${this.make} ${this.model} needs maintenance!`);
        } else {
            console.log("No maintenance needed at the moment.");
        }
    }
}


module.exports = Car;