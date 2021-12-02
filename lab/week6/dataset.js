// SETUP
const fs = require("fs");

// existsSync check if a file exists, returns true if it does, returns false if it doesn't.
if (fs.existsSync("test.csv")) {
    
    // Read file and load ALL it's contents into data as string datatype.
    let data = fs.readFileSync("test.csv", "utf-8");

    // Splits the data string, by each new line (\n)
    let dataArray = data.split("\n");

    let firstLine = dataArray[0];

    // Splits the first list by commas.
    let columnTitles = firstLine.split(",");

    // Create class based on Column Titles
    class StreetTree {
        constructor() {

            // Loops through the columnTitles array, and creates a property for each of these Array Elements.
            for (let i = 0; i < columnTitles.length; i++) {
                this[columnTitles[i]] = null;
            }

        }
    }

    console.log(new StreetTree());

} else {
    console.log("Cannot find specified file!");
}

// What percentage of trees are sidewalk trees?

// Whats the most frequent Tree Species?

// From trees that have a plant date, how many were planted in 1955?

// How many trees does DPW take care of?