// Review from Friday of Week 04
class Employee {
    constructor() {
        this.name = null;
        this.age = null;
    }

    work() {
        console.log(this.name + " is working!");
    }
}

// Inheritance
class Shape {
    constructor(width, height) {
        this.widthInches = width;
        this.heightInches = height;
        this.name = "shape";
    }

    getArea() {
        let area = this.widthInches * this.heightInches;
        return area;
    }

    getPerimeter() {
        let perimeter = (this.widthInches * 2) + (this.heightInches * 2);
        return perimeter;
    }

    compareAreaTo(shape) {
        if (this.getArea() > shape.getArea()) {
            console.log(`${this.name} is bigger than ${shape.name}.`)
        } else {
            console.log(`${shape.name} is bigger than ${this.name}.`)
        }
    }

    writeInfo() {
        console.log(`The area of the ${this.name} is ${this.getArea()}`);
        console.log(`The perimeter of the ${this.name} is ${this.getPerimeter()}`);
    }
}



class Square extends Shape {
    constructor(side) {
        // This calls the constructor method of the "parent" or inherited class. THIS IS REQUIRE AND MUST BE THE FIRST STATEMENT IN THE CONSTRUCTOR. This is if you are inheriting another class.
        super(side, side);
        this.name = "square";
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.name = "triangle";
    }

    getArea() {
        let area = (this.widthInches * this.heightInches) / 2;
        return area;
    }

    getPerimeter() {
        let perimeter = this.widthInches + this.heightInches + (Math.sqrt(this.widthInches * this.widthInches + this.heightInches * this.heightInches));

        return perimeter;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.name = "circle";
        // We add more properties to a circle than what a normal shape has.
        this.radiusInches = radius;
        this.diameterInches = this.widthInches;
    }

    getArea() {
        let area = this.radiusInches * this.radiusInches * Math.PI;
        return area;
    }

    getPerimeter() {
        let perimeter = this.diameterInches * Math.PI;
        return perimeter;
    }

    getCircumference() {
        return this.getPerimeter();
    }

    writeInfo() {
        console.log(`The area of the ${this.name} is ${this.getArea()}`);
        console.log(`The circumference of the ${this.name} is ${this.getPerimeter()}`);
    }
}

// let myRectangle = new Rectangle(5, 16);

// console.log(myRectangle.getArea());
// console.log(myRectangle.getPerimeter());

let mySquare = new Square(10);

mySquare.writeInfo();

let myTriangle = new Triangle(5, 10);

myTriangle.writeInfo();

let myCircle = new Circle(12);

myCircle.writeInfo();

myTriangle.compareAreaTo(mySquare);
mySquare.compareAreaTo(myCircle);