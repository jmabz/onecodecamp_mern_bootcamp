// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const squareOfNum = num => Math.pow(num, 2);
console.log(squareOfNum(8));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const nameAndAge = (name, age) => `Welcome, ${name}, age ${age}!`;
console.log(nameAndAge("John Doe", 25));

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
let person1 = {
    firstName: "Juan",
    lastName: "de la Cruz"
};
let {firstName, lastName} = person1;
console.log(firstName, lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr1Plus2 = [...arr1, ...arr2];
console.log(arr1Plus2);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
function getRectangleArea(length = 1, width = 1) {
    return length * width;
}
console.log(`Area of a rectangle with length 4 and width 5: ${getRectangleArea(4, 5)}`);
console.log(`Area of a rectangle, assuming both dimensions are not provided: ${getRectangleArea()}`);

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Welcome, ${this.name}, age ${this.age}!`;
    }
}
let person = new Person("John Doe", 25);
console.log(person.introduce());