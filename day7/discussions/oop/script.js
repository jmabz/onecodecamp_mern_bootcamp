// // Classes

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// // Instantiation
// const myCar = new Car("Toyota", 2023);
// const anotherCar = new Car("VW", 2023);

// // Property access
// console.log(myCar.name);
// console.log(anotherCar.year);

// // Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// // Creating instances of Person objects
// const person1 = new Person("Joe", 18);
// const person2 = new Person("Aaron", 17);

// person1.greet();
// person2.greet();

// // Encapsulation
// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log("Insufficient balance");
//             return;
//         }
//         this.balance -= amount;
//     }

//     getAccountInfo() {
//         return `Account Number: ${this.accountNumber},
//         Balance: ${this.balance}`;
//     }
// }

// const myAccount = new BankAccount("123456789", 1000);
// myAccount.deposit(500);
// console.log(myAccount.balance);

// myAccount.withdraw(1500);
// console.log(myAccount.getAccountInfo());

// myAccount.withdraw(500);

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Bantay");
myDog.eat();
myDog.bark();

// Polymorphism
class Animal {
    makeSound() {
        return "The animal makes a noise";
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", the dog barks.";
    }
}

const myOtherDog = new Dog();
console.log(myOtherDog.makeSound());

// Abstraction
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} ${this.model} is starting the engine.`;
    }
    
    stop() { 
        return `${this.make} ${this.model} is stopping the engine.`;
    }
}

const myVehicle = new Vehicle("Toyota", "Camry");
console.log(myVehicle.start());