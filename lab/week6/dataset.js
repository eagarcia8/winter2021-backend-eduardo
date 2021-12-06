// SETUP
const fs = require("fs");
const file = "Street_Tree_List.csv";
let treeObjects;

// existsSync check if a file exists, returns true if it does, returns false if it doesn't.
if (fs.existsSync(file)) {
    
    // Read file and load ALL it's contents into data as string datatype.
    let data = fs.readFileSync(file, "utf-8");

    // Splits the data string, by each new line (\n)
    let dataArray = data.split("\n");

    let firstLine = dataArray[0];

    // Splits the first list by commas.
    let columnTitles = firstLine.split(",");

    // Create class based on Column Titles
    class StreetTree {
        constructor(treeData) {

            // Check if we have empty data when we create object.
            if (treeData === undefined || treeData[0] === "" || treeData.length === 0 ) {
                console.log("Cannot build Object, empty array provided.");
            } else {

                // Loops through the columnTitles array, and creates a property for each of these Array Elements.
                for (let i = 0; i < columnTitles.length; i++) {


                    // Detect if we have undefined for an individual piece of data, usually to signify a "bad" line.
                    if (treeData[i] === undefined) {
                        console.log(`Undefined Detected for Tree array ID: ${i}`);
                        console.log(treeData);
                    }

                    // Add the current property with the current data, to the object being built.
                    this[columnTitles[i]] = treeData[i];
                }

            }

        }
    }

    // Hold all of our tree objects in this array.
    treeObjects = [];

    // Create a StreeTree object for every line in our dataset.
    for (let i = 1; i < dataArray.length; i++) {
        let lineArray = dataArray[i].split(",");

        let treeObject = new StreetTree(lineArray);

        treeObjects.push(treeObject);
    }

    // console.log(treeObjects[treeObjects.length - 1]);

    // Removes the last empty object because dataset has an empty line at the end.
    treeObjects.pop();

    // console.log(treeObjects[0]);


} else {
    // If the file doesn't exist, we mention it in the console.
    console.log("Cannot find specified file!");
}

// What percentage of trees are sidewalk trees?

// Object to hold the tally of all the qSiteInfo properites of ALL trees.
let treeSite = {};

// Go through each StreetTree object and check what qSiteInfo value we have and add it to the treeSite tally.
for (let i = 0; i <  treeObjects.length; i++) {

    let currentTree = treeObjects[i];

    // Check if the treeSite object has a property that is the same as the current qSiteInfo VALUE.
    if (treeSite.hasOwnProperty(currentTree.qSiteInfo)) {
        treeSite[currentTree.qSiteInfo] += 1;
    } else {
        treeSite[currentTree.qSiteInfo] = 1;
    }
}


// Tally the amount of sidewalk vs nonsidewalk trees.
let sidewalkTally = {
    sidewalk: 0,
    nonsidewalk: 0
};

// For ... in loops are for "looping" through object properties. This one is going through each property of treeSite.
for (let site in treeSite) {

    // We break apart the string (by colon) in site which represents the property.
    let siteArray = site.split(":");

    // console.log(siteArray);

    // Check if the first array element holds the word Sidewalk. Does not check for space character after "Sidewalk".
    if (siteArray[0] === "Sidewalk") {
        sidewalkTally.sidewalk += treeSite[site];
    } else {
        sidewalkTally.nonsidewalk += treeSite[site];
    }

}

console.log("What percentage of trees are sidewalk trees?");
// Official answer to question.
let answerQ1 = `The percentage of sidewalk trees vs other trees in San Francisco is ${(sidewalkTally.sidewalk / (sidewalkTally.sidewalk + sidewalkTally.nonsidewalk)) * 100}%.`;

console.log(answerQ1);

// Whats the most frequent Tree Species?

// Build object to hold all species and count for that species.
let treeSpecies = {};

// Go through each tree object...
for (let i = 0; i <  treeObjects.length; i++) {

    let currentTree = treeObjects[i];

    // Check if the treeSite object has a property that is the same as the current qSpecies VALUE.
    if (treeSpecies.hasOwnProperty(currentTree.qSpecies)) {
        treeSpecies[currentTree.qSpecies] += 1;
    } else {
        treeSpecies[currentTree.qSpecies] = 1;
    }
}

// console.log(treeSpecies);

let highestSpecies = "";
let highestCount = 0;

// Gets rid of a specific property from an object.
delete treeSpecies["Tree(s) ::"];

// Loop through all the species in the treeSpecies object.
for (let species in treeSpecies) {
    let currentSpeciesCount = treeSpecies[species];

    // Compare the current tree species and see if its higher than the current highest count.
    if (highestCount < currentSpeciesCount) {

        // If it is, then replace the existing values with the current species.
        highestSpecies = species;
        highestCount = currentSpeciesCount
    }
}
console.log("Whats the most frequent Tree Species?");
console.log(`The most frequent tree species for streets in San Francisco is ${highestSpecies}.`);

// From trees that have a plant date, how many were planted in 1955?

let dates = {};
// Track trees that don't have a date.
let noDateCount = 0;

// Loop through all the tree objects...
for (let i = 0; i < treeObjects.length; i++) {

    let date = treeObjects[i].PlantDate;

    // If the tree does not have a date value, then add a 1 to the noDateCount variable AND skip this loop and move on the next loop.
    if (date === "") {
        noDateCount += 1;
        continue;
    }

    // Split the date value by spaces.
    let dateArray = date.split(" ");

    // EXAMPLE: dateArray = ["04/01/2002", "12:00:00", "AM"]

    // Grab the first element of the dateArray.
    let monthdayyear = dateArray[0];

    // Split this element by its slashes.
    let yearArray = monthdayyear.split("/");

    // Get the year of the yearArray.
    let year = yearArray[2];

    // Look for the specific year in dates object...
    if (dates.hasOwnProperty(year)) {

        // add a 1 if it exists.
        dates[year] += 1;
    } else {
        // otherwise create the property and start at 1.
        dates[year] = 1;
    }
}

console.log("From trees that have a plant date, how many were planted in 1955?");
console.log(`There were ${dates["1955"]} trees planted in 1955.`);


// How many trees does DPW take care of?

let careTaker = {};

// Loop through all the trees
for (let i = 0; i < treeObjects.length; i++) {

    let currentTree = treeObjects[i];

    let owner = currentTree.qCaretaker;

    // Check the careTaker object for the current object's qCaretaker value.
    if (careTaker.hasOwnProperty(owner)) {
        careTaker[owner] += 1;
    } else {
        careTaker[owner] = 1;
    }
}

console.log("How many trees does DPW take care of?");
console.log(`DPW takes care of ${careTaker["DPW"]}.`);
