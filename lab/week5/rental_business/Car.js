// import allows us to bring in specific variable names (inside the curly braces) from a specific file (inside the double quotes).
import {Vehicle} from "./Vehicle.js";

export class Car extends Vehicle {
    constructor(superData, subData) {
        super(superData);
        this.year = subData.year;
        this.wheels = subData.wheels;
        this.doors = subData.doors;
        this.vin = subData.vin;
        this.owner = subData.owner;
        this.engineHP = subData.engineHP;
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
            console.log(`${this.make} ${this.model} has ${this.fuelCurrent} gallons left.`);
        } else {
            console.log(`${this.make} ${this.model} doesn't have enough fuel to go that far.`);
        }   
    }
}