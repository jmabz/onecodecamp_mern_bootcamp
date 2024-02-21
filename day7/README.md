# Lessons Learned

## Object-oriented Programming
New to ES6 are object-oriented programming (OOP) features. Through these features, it is possible to produce more reusable code by representing and organizing data in the form of objects, which hold properties and methods. 

### Basic example of a class
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
```

### Instantiation and property/method access
Shown below is the basic usage of object instantiation, and how proprties and methods can be accessed.
```js
const person = new Person("John", 29);
console.log(person.name) // returns John
console.log(person.age) // returns 29
console.log(person.greet()) // writes "Hello, my name is John and I am 29 years old" to the console

const anotherPerson = new Person("Joe", 22);
console.log(person.name) // returns Joe
console.log(person.age) // returns 22
console.log(person.greet()) // writes "Hello, my name is Joe and I am 22 years old" to the console
```

### Encapsulation
Through OOP, it is possible to put related data and logic together via encapsulation. An example of a practical usage of this feature would a system (e.g. a library), containing interrelated functionality which can only be acted upon through that same system.

```js
class Purse {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > balance) {
            console.log('Insufficient funds.');
            return;
        }
        this.balance -= amount;
    }

    deposit(amount) {
        if (amount < 0) {
            console.log('Amount must be positive.');
            return;
        }
        this.balance += amount;
    }

    getInfo() {
        console.log(`${this.owner}'s Purse\nBalance: ${this.balance}`);
    }
}
```

### Inheritance
JS classes can have subclasses, which inherit all the methods and properties that their parents possess. Code reusability becomes more evident this way, through giving classes new functionality on top of existing ones, without having to write the latter again.

```js
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return `${this.name}, a ${this.species} is making a sound.`;
    }
}

class Dog extends Animal {
    bark() {
        return "Woof!";
    }
}
```

### Polymorphism
Through polymorphism, it's possible to have methods of a child class similarly named after their parent classes' counterparts perform differently according to purpose.

```js
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getInfo() {
        console.log(`Shape ${this.name} (color: ${this.color})`);
    }

    getArea() {
        throw Error("Not implemented");
    }

    getPerimeter() {
        throw Error("Not implemented");
    }
}

class Rectangle extends Shape {
    constructor(name, color, length, width) {
        super(name, color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return length * width;
    }

    getPerimeter() {
        return (2 * length) + (2 * width);
    }
}

class Circle extends Shape {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * (this.radius ** 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
```

### Abstraction
With abstraction, the implementation details of functionalities can be hidden from its users, fulfilling the goal of keeping code simple.

```js
class Vehicle {
    constructor(make, model) {
        // Say that "vehicleMake" and "vehicleModel" are internals we don't care about.
        this.vehicleMake = make;
        this.vehicleModel = model;
    }

    start() {
        console.log(`Starting the engine for ${ this.vehicleMake } ${ this.vehicleModel }...`);
    }

    end() {
        console.log(`Stopping the engine for ${ this.vehicleMake } ${ this.vehicleModel }...`);
    }
}
```