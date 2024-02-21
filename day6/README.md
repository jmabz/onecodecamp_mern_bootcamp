# Lessons Learned

## ES6 Features
Since ES6 or ECMAScript 2015, JavaScript has been given a handful of powerful features that have changed the way we code, in a much cleaner and more modernized manner. Catalogued here are some of the features learned during this session.

### Arrow Function Notation
An alternative representation to traditional function expressions, this is a concise way of writing functions in JS. Note that they do not have access to bindings such as `this` or `arguments`.

Single-variable arrow function:
```js
const greet = name => "Greetings, " + name + "!";
```

Multiple variables:
```js
const greet => (name, age) => "Greetings, " + name + "! (age " + age + ")";
```

### Template Strings
This enables representing variables within strings in a much simpler manner. Such strings are enclosed in backticks, and may contain variable placeholders enclosed in `${}`. These kinds of strings also allow for multi-line strings.

```js
const greet => (name, age) => `Greetings, ${name}! (age ${age})`;
```

### Array and Object Destructuring
Destructuring arrays and objects means unpacking values from arrays or properties from objects, as opposed to directly extracting data from such structures.

Unpacking values from arrays
```js
let array = [one, two, three];
let [one, two, three] = array;
```

Unpacking values from objects
```js
let person = {
    firstName: "John",
    lastName: "Doe"
};
let {firstName, lastName} = person;
```

### Spread and Rest Operators
The spread operator expands arrays or objects into individual values, while the rest operator condenses a collection of elements into an array.

```js
let nums = [2, 3, 4];
function sum(x, y, z) {
    return x + y + z;
}
let sum = sum(...nums);

let fruits = ["banana", "apple", "orange"];
let moreFruits = ["lemon", ...fruits];

let grades = {
    math: 90,
    science: 93,
    english: 95,
    pe: 99
};

let gradesWithHomeroom = {
    ...grades,
    homeroom: 91
};

// Rest operator in a function: take in a username, and the *rest* of the user's other info
function getUserInfo(username, ...otherInfo) {
    console.log(username);
    console.log(otherInfo);
}
```

### Default Parameters
Functions can take on default parameters, where there are values that are assumed if nothing was passed into such parameters.

```js
function areaSquare(side = 1) {
    return side ** 2;
}
```

### Asynchronous JavaScript
When writing JS code, there are cases that logic that requires waiting for one process to finish would be implemented, an example being access to some external API. Modern JS introduces features that simplify such needs.

#### Promises
Objects representing the result of an asynchronous operation. They return either one of two functions, respectively defining what to do on success or failure, and they can be chained together.

Implementing a series of functions to be performed asynchronously, and by step, through Promises
```js
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
};

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
};
```

Calling these functions as a function chain
```js
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps complete");
    })
    .catch((error) => {
        console.error("An error occured: ", error);
    });
```

#### Async and Await
Introduced in ES7, the async and await keywords provide a declarative approach to writing asynchronous code.

```js
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete");
    } catch (error) {
        console.error("An error occured: ", error);
    }
};

performSteps();
```
