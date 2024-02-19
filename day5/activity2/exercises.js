/**
 * 2nd batch of coding exercises for the 02/19/2024
 */

// Exercise 1
let greet = function(name) {
    return `Greetings, ${name}!`;
}

// Exercise 2
let sum = function(num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 7));

// Exercise 3
let isEven = function(num) {
    return num % 2 === 0;
}

// Exercise 4
var globalVar = 5;
function funcWithGlobalVar() {
    var globalVar = 7;
    console.log(globalVar);
}
console.log(globalVar);

// Exercise 5
hoistedFunction();
function hoistedFunction() {
    console.log("This is a hoisted function");
}

// Exercise 6
let mathOperation = function(num1, num2, operation) {
    return operation(num1, num2);
}

let add = function(num1, num2) {
    return num1 + num2;
}

let subtract = function(num1, num2) {
    return num1 - num2;
}

let multiply = function(num1, num2) {
    return num1 * num2;
}

let divide = function(num1, num2) {
    return num1 / num2;
}

// Exercise 7
let cnt = 0;
function counter() {
    let cnt = 0;
    return function() {
        cnt++;
        console.log(cnt)
    };
}

// Exercise 8
function applyFunction(func, array) {
    return array.map(func);
}

// Exercise 9
// Mock data set representing user data
let testData = [
    {
        username: "user1",
        firstName: "foo",
        lastName: "bar",
        age: 20
    },
    {
        username: "user2",
        firstName: "bar",
        lastName: "baz",
        age: 22
    }
]

function getUserData(username, callback) {
    // Pretend we're getting data from some web API; this is from the testData variable
    // Convert object to map - enables the get function
    testData = new Map(testData.map(user => [user.username, user]));
    userData = testData.get(username);

    if (userData) {
        callback(userData);
    } else {
        console.error(`User ${username} not found`);
    }
}

function greetUser(userData) {
    console.log(`Greetings, ${userData.firstName} ${userData.lastName}!`);
}

console.log(getUserData("user1", greetUser));