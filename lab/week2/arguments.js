// Node.js Accepting Arguments.

// Node.js Arguments global variable. It holds an ARRAY of the pieces of text FROM the command line (Terminal or Git Bash).
// console.log(process.argv);

// Gets the value in the index 2 of process.argv, and try to convert it to a number.
let number1 = parseInt(process.argv[2]);

// Gets the value in the index 2 of process.argv in two lines of code. Tries to convert value into a number.
let number2 = process.argv[3];
number2 = parseInt(number2);

// Check if the values provided were converted into actual JavaScript number datatype.
if (Number.isNaN(number1) || Number.isNaN(number2)) {
    
    // If it doesn't, then console log this message.
    console.log("Sorry but one of the value your provided is not a valid number.");
} else {

    // Otherwise run these lines to add the values and send them to console log as a sentence.
    let sum = number1 + number2;

    let sentence = "The sum of " + number1 + " and " + number2 + " is " + sum + ".";

    console.log(sentence);
}

