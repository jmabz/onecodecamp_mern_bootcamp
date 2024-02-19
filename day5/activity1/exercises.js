/**
 * 1st batch of coding exercises for the 02/19/2024
 */

/**
 * Exercise 1
 * 
 * Application of the use of conditionals
 * @param {Number} num
 * Number to be evaluated
 * @return {string}
 * Whether the input is even or odd
 */
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

/**
 * Exercise 2
 * 
 * Application of the use of mathematical operations
 * @param {Number} temp
 * Temperature in Celsius
 * @return {Number}
 * Temperature in Fahrenheit
 */
function convertCtoF(temp) {
    return (temp * (9 / 5)) + 32;
}

/**
 * Exercise 3
 * 
 * Application of the use of conditionals
 * @param {Number} num 
 * Number to be evaluated
 * @returns {string}
 * Message indicating the number's divisibility
 */
function isNumberMultipleOf3or5orBoth(num) {
    if (num < 0) {
        return "Number must be positive";
    } else if (num % 3 === 0 && num % 5 === 0) {
        return num + " is a multiple of both 3 and 5";
    } else if (num % 3 === 0) {
        return num + " is a multiple of 3";
    } else if (num % 5 === 0) {
        return num + " is a multiple of 5";
    }
    return num + " is neither divisible by 3 nor 5";
}

/**
 * Exercise 4
 * 
 * Application of JS loops and conditionals
 * @param {Array} numArray 
 * An array of numbers to be evaluated
 * @returns {Number} maxValue
 * The maximum value within the input array
 */
function getLargestValue(numArray) {
    let maxValue = 0;
    for (let index = 0; index < numArray.length; index++) {
        if (numArray[index] > maxValue) {
            maxValue = numArray[index];
        }
    }
    return maxValue;
}