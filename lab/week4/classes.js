// "Tradional" Object creation.
let myFirstEmployee = {
    firstName: "Eduardo",
    position: "Instructor",
    age: 31
};

let myThirdEmployee = {
    firstName: "Sarah",
    position: "CEO",
};

// Object creation through Classes. Classes are a blueprint for every object you want to create from that class.
class Employee {

    // Constructor method is the DEFAULT function that runs every time we want to create an object.
    constructor(firstName, position, age) {

        // We check if we have a value in the firstName parameter.
        if (firstName === undefined) {
            // If it doesn't we assign it "MISSING NAME" and send a message to the console.
            this.firstName = "MISSING NAME";
            console.log("WARNING MISSING FIRST NAME!");
        } else {
            // Otherwise assign the parameter value to the property of the current (this) object being created.
            this.firstName = firstName;
        }

        // Other properties that every object should have.
        this.position = position;
        this.age = age;
        this.energy = 100;
    }

    // Other methods every object should have.
    sayHello() {
        console.log("Hello there, my name is " + this.firstName);
    }

    work(hours) {
        this.energy = this.energy - (hours * 10);
        console.log(this.firstName + " works for " + hours + " hours.");
    }

    goHome() {
        this.energy = 100;
        console.log(this.firstName + " goes home for the day.");
    }

    // Getters and Setters. Allows an object to be "aware" of when a value is being accessed or modified, we can write logic to "deal" with these situations.
    getPosition() {
        return this.position + " of " + this.company;
    }
    setPosition(newPosition) {
        // Checks if the value to assign to position exists.
        if (newPosition == undefined) {

        } else {
            // Check if the value is a number. If it is not, then update the property with the new value.
            if (typeof newPosition == "number") {

            } else {
               this.position = newPosition; 
            }
            
        }
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(name, filePath) {

        if (filePath == undefined) {
            console.log("Sorry but you need legal documents to change the name.");
        } else {
            this.firstName = name;
        }
    }

    setAge(age) {
        if (typeof age == "number") {
            this.age = age;
        }
    }

}
// END OF CLASS DEFINITION.

// Creating an object using the Employee Class. Everything in the Class will automatically be added/created for each object we create.
let mySecondEmployee = new Employee("Joe", "Project Manager", 25);
let myFourthEmployee = new Employee("Lisa", "Head of HR", 30);
let newEmployee = new Employee();

// Direct access to property vs using Getters/Setters. DON'T MADE THE (BAD) HABIT OF ACCESSING PROPERTIES DIRECTLY.
mySecondEmployee.age = "Forty";
mySecondEmployee.setAge("Forty");

mySecondEmployee.position = "General Project";
mySecondEmployee.setPosition(); // The object has logic in it that can handle this request if there is no value to update the object with.

// saveEmployee(new Employee("Jane", "Operations", 41));


// Using some methods of their respective objects.
mySecondEmployee.sayHello();
myFourthEmployee.sayHello();

mySecondEmployee.work(4);
myFourthEmployee.work(1);

mySecondEmployee.goHome();


// Show the contents of each object.
console.log(myFirstEmployee);
console.log(mySecondEmployee);
console.log(myFourthEmployee);
console.log(newEmployee);



