/*
If the user doesn't type anything after temp.js, provide a message on how to use the script.

Take in two values from the terminal: A number, and the text "toF" or "toC"

Test the number to make sure we can convert it to JavaScript Number datatype. If we cannot get a number, show an error message and end the program, otherwise continue.

Check if the second argument is the value "toF" or "toC". If it is, run the appropriate math equation to convert the number. Display the results in the terminal. If not "toF" or "toC", show an error message that also describes both options.
*/


// Rename the process.argv variable to arguments.
let arguments = process.argv;

// console.log(arguments[2]);

// Check if they typed anything in the third argument of the command.
if (arguments[2] === undefined) {

    // If they didn't, send the following messages.
    console.log("Welcome to temperature converter. After 'node temp.js' type in your temperature number, and afterwards type in either 'toF' to convert from Celcius to Fahrenheit or 'toC' to convert from Fahrenheit to Celcius.");

    console.log("Example:");

    console.log("node temp.js 72 toC");
}


// If they typed a value in the third argument of the command, try to convert that value into a number.
let number = parseFloat(arguments[2]);

// Check if the value is a JavaScript number or not.
if (Number.isNaN(number)) {
    // If it's not a number, send the following message.
    console.log("The number you provided is not valid! Use characters 0 to 9 only. Decimal values are okay.");
} else {

    // If it is a number, check the fourth argument and see if they typed "toF" or "toC".
    if (arguments[3] === "toC") {

        // If they typed "toC", run the following mathematical equation and send the following message.
        let resultsC = (number - 32) * (5 / 9);
        console.log("The temperature " + number + "° F in Celcius is " + resultsC.toFixed(1) + "° C.");

    } else if (arguments[3] === "toF") {

        // If they typed "toF", run the following mathematical equation and send the following message.
        let resultsF = (number * (9 / 5)) + 32;
        console.log("The temperature " + number + "° C in Fahrenheit is " + resultsF.toFixed(1) + "° F."); 

    } else {

        // If they typed anything other than "toF" or "toC", send the following message.
        console.log("Please use only 'toF' or 'toC' after the number.");
    }

}