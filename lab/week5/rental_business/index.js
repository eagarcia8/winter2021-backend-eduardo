import {Car} from "./Car.js";

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
    fuelType: "gasoline",
    fuelCapacity: 21,
    fuelCurrent: 10,
    mpg: 14,
    bodyType: "sedan",
    gvwr: 4575
});

honda.run(10);
honda.run(1000);