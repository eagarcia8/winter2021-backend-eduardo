
class Animal {
    constructor(data) {
        this.scientificName = data.sName;
        this.commonName = data.cName;
        this.birthday = data.birthday;
        this.ageYear = (new Date()).getFullYear() - this.birthday.getFullYear();
        this.endangered = data.endangered;
        this.dangerous = data.dangerous;
        this.diet = data.diet;

        this.location = "MEDA Zoo";
        this.weightLB = data.weightLB;
        this.sex = data.sex;
    }

    // GETTERS/SETTERS for ONE property
    setEndangered(value) {this.endangered = value;}
    getEndangered() {return this.endangered;}

    describe() {
        console.log(`${this.commonName} is ${this.ageYear} years old, it eats ${this.diet}. It lives at the ${this.location}`);
    }

    feed() {
        let number = Math.random();

        if (number > .7) {
            console.log(`${this.commonName} is eating ${this.diet}!`);
        } else {
            console.log(`You feed the ${this.commonName} some ${this.diet}, but it doesn't seem to be hungry`);
        }
    }
}

class Mammal extends Animal {
    constructor(data, limbs, pregnant, fur) {
        super(data);

        if (this.sex == "xy") {
            this.pregnant = false;
        } else {
            this.pregnant = pregnant;
        }

        this.bloodType = "warm";
        this.limbs = limbs;
        this.fur = fur;
    }

    getPregnant() {return this.pregnant}
    setPregnant(value) {
        if (typeof value === "boolean") {
            this.pregnant = value;
        }
    }

    mate(partner) {

        if (this.scientificName == partner.scientificName) {

            if (this.sex == "xx" && partner.sex == "xy") {
                this.pregnant = true;
                console.log(`${this.commonName} is pregnant!`);
            } else if (this.sex == "xy" && partner.sex == "xx") {
                partner.setPregnant(true);
                console.log(`${this.commonName} is pregnant!`);
            } else {
                console.log("You need a male and female pair to reproduce.");
            }

        } else {
            console.log("Incompatible Species!");
        }
    }

    sleeps() {
        console.log(`${this.commonName} is sleeping.`);
    }
}

class Reptile extends Animal {
    constructor(data, limbs, pregnant, eggs) {
        super(data);

        if (this.sex == "xy") {
            this.pregnant = false;
            this.eggs = 0;
        } else {
            this.pregnant = pregnant;
            this.eggs = eggs;
        }

        this.bloodType = "cold";
        this.limbs = limbs;
        
    }
    
    sleeps() {
        console.log(`${this.commonName} is sleeping.`);
    }
}

class Avian extends Animal {
    constructor(data) {
        super(data);
        this.bloodType = "warm";
        this.limbs;
        this.pregnant;
        this.eggs;
    }
}

let zooArray = [];

let giraffe1 = new Mammal({
    sName: "Giraffa camelopardalis",
    cName: "Giraffe",
    birthday: new Date(),
    endangered: false,
    dangerous: false,
    diet: "plants",
    weightLB: 150,
    sex: "xy"
}, 4, false, true);

zooArray.push(giraffe1);

giraffe1.feed();

let lion1 = new Mammal({
    sName: "Panthera leo",
    cName: "Lion",
    birthday: new Date("06/23/2010"),
    endangered: true,
    dangerous: true,
    diet: "meat",
    weightLB: 420,
    sex: "xy"
}, 4, false, true);

let lion2 = new Mammal({
    sName: "Panthera leo",
    cName: "Lion",
    birthday: new Date("06/23/2008"),
    endangered: true,
    dangerous: true,
    diet: "meat",
    weightLB: 480,
    sex: "xx"
}, 4, false, true);



lion1.feed();

zooArray.push(lion1);

let turtle1 = new Reptile({
    sName: "Chelonoidis niger complex",
    cName: "Galapagos Turtle",
    birthday: new Date("01/14/1943"),
    endangered: false,
    dangerous: false,
    diet: "plants",
    weightLB: 500,
    sex: "xx"
}, 4, true, 10);

turtle1.feed();
zooArray.push(turtle1);

lion1.describe();
turtle1.describe();
giraffe1.describe();


giraffe1.mate(lion1);

lion1.mate(lion2);

console.log(lion2.getPregnant());
console.log(lion1.getPregnant());