// Coding Challenge #3

// Bills 124 48 268
// tips 20% if bill < 50, 15% when 50-200 and 10% if more than 200
// 2 arrays, with bills, and with bills+tips

// var bills = [124, 48, 268];
// var billsAndTips = [];

// function tipCalculator(billAmt) {

//     if (billAmt < 50) {
//         billsAndTips.push(billAmt * 1.2);
//     } else if (billAmt >= 50 && billAmt <= 200) {
//         billsAndTips.push(billAmt * 1.15);
//     } else {
//         billsAndTips.push(billAmt * 1.1);
//     }

// }

// tipCalculator(bills[0]);
// tipCalculator(bills[1]);
// tipCalculator(bills[2]);

// console.log(bills,billsAndTips);



// OBJECTS AND PROPERTIES. Use brackets to define instead of brackets. 
// Like arrays, separate values with commas.

// var john = {
//     // The first item is the key, and the second is the value. This is key/value pair.
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
// };

// Accessing value in an object. Call the key as a method or "dot notation". 
// console.log(john.firstName);

// // If using brackets, need to call the key as a string
// console.log(john["lastName"]);

// // Reason: Because Object.keys returns an array with strings

// // Object.keys() returns an array whose elements are strings corresponding to the
// //  enumerable properties found directly upon object. The ordering of the properties 
// //  is the same as that given by looping over the properties of the object manually.

// // You get an array of strings, because Property names are strings by definition.

// // "Property names must be strings. This means that non-string objects cannot be used
// //  as keys in the object. Any non-string object, including a number, is typecasted 
// //  into a string via the toString method.""

// var x = 'birthYear';
// console.log(john[x]); // Note that john.x does not work

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // Alternate way to add things to an Object

// var jane = {};
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);



// OBJECTS AND METHODS

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         // THIS is used to refers back to "this" object; in this case the john object.
//         return 2020 - this.birthYear;
//     }
// };

// You can techinically use a function within an object to define a new variable
// john.age = john.calcAge();
// console.log(john);

// You can even do this from within the object itself by...
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         // THIS is used to refers back to "this" object; in this case the john object.
//         this.age = 2020 - this.birthYear;
//     }
// };
// // ...calling the function outside the object
// john.calcAge();
// console.log(john);



// CODING CHALLENGE 4

// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calc the BMI. Save the BMI to the object and also
// return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name
// and the respective BMI. Don't forget they might have the same BMI.

// Remember BMI = mass / height^2. Mass in kg and height in meter.


// Create object for X saving full name, mass and height. Create a function within the object that calcs the BMI, and saves
// the BMI to the object.

function displayWinner(winnerName) {
    console.log("And the winner is..." + winnerName.firstName + ' ' + winnerName.lastName + ' with a BMI of ' + winnerName.bmi)
}

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 105,
    height: 1.1,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Garcia',
    mass: 100,
    height: 1.1,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi
    }
}

// The first time we need john's BMI, we call the function. Because there is a return in the function, we can get back the result here
// After the method has been called at least once, we can now use the .bmi key to get the value.
if (john.calcBMI() > mark.calcBMI()) {
    displayWinner(john);
} else if (john.bmi < mark.bmi) {
    displayWinner(mark);
} else {
    console.log("Looks like we have a tie, as both have a BMI of " + john.bmi)
}
