// Functions

// A function is an instance of the Object type
// A Function behaves like any other object
// We can store functions in a variable
// We can pass a function as an argument to another function
// We can return a function from a function

// We say that in JS we have first-class functions

// Passing a function as an argument

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, fun1) {
    var arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult.push(fun1(array[i]));
    }
    return arrayResult;
}

function calcAge (year) {
    return (2020 - year);
}

function divideByTwo(theThing) {
    var quotient = (theThing / 2);
    return quotient;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);