// Exercise 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;          
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
}

// Exercise 2
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return (2 * width) + (2 * height); 
    }
}

//Exercise 3
class Shape {
    calculateArea() {
        return "The area of this shape";
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * (radius ** 2);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Exercise 4
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}
        Balance: ${this.balance}`;
    }
}

// Exercise 5
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return `${this.name}, a ${this.species}, is making a sound.`;
    }
}

// Exercise 6
class Dog extends Animal {
    constructor(name) {
        super(name, "dog");
    }

    makeSound() {
        return `${super.makeSound()} "Woof!"`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "cat");
    }

    makeSound() {
        return `${super.makeSound()} "Meow!"`;
    }
}

class Bird extends Animal {
    constructor(name) {
        super(name, "bird");
    }

    makeSound() {
        return `${super.makeSound()} "Chirp!"`;
    }
}

//Exercise 7
class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Circle extends Shape {
    constructor(color, name, radius) {
        super(color, name);
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

class Square extends Shape {
    constructor(color, name, side) {
        super(color, name);
        this.side = side;
    }

    getPerimeter() {
        return 4 * this.side;
    }

    getArea() {
        return this.side ** 2;
    }
}

//Exercise 8
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I am ${this.name} and I am ${this.age} years old.`;
    }
}

// Exercise 9
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return super.greet() + ` My student ID is ${this.studentId}.`; 
    }
}