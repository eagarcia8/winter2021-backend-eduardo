// The export keyword allows that function/variable to be used by anything else that imports this file.
export class Vehicle {
    constructor(data) {
        this.name = data.name;
        this.make = data.make;
        this.model = data.model;
        this.occupancy = data.occupancy;
        this.purchased = data.purchased;
        this.id = data.id;
        this.timestamp = new Date();
    }
}