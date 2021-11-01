// We need to type this so we can start using Lodash in our code.
const _ = require("lodash");

// Create a random Number between 25 and 75.
let randomNumber = Math.floor((Math.random() * 50) + 25);

let lodashNumber = _.random(25, 75);

let timeNow = Date.now();


let lodashTimeNow = _.now();

console.log(timeNow, lodashTimeNow);

console.log("Node project starting...");




console.log(randomNumber);
console.log(lodashNumber);