// Variables and Data Types

// var firstName = "Vince";
// console.log(firstName);

// var lastName = "Garcia";
// var age = 44;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// Variable naming rules

// Variable mutation and type coercion

// var firstName = "John";
// var age = 44;

// // Type coercion - JS will convert that age variable into a string in order to play nice
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "Teacher";
// isMarried = false;

// console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried)

// // Variable Mutation. Age has already been defined as an int, here we can quickly reassign to string
// age = "twenty eight";

// alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);


// // Basic Operators

// var ageVince = 44;
// var ageDon = 35; 
// var yearCurrent = 2020;
// var yearVince = yearCurrent - ageVince;
// console.log(yearVince);
// console.log(yearVince + 2);
// console.log(yearVince / 2);
// console.log(yearVince * 2);

// // Logical Operator
// var vinceOlder = ageVince > ageDon;
// console.log(vinceOlder);

// // typeof operator
// console.log(typeof vinceOlder);
// console.log(typeof ageVince);
// console.log(typeof "vinceOlder");
// console.log(typeof x);



// Operator precedence

// var now = 2020;
// var yearVince = 1977;
// var fullAge = 18;



// // Multiple operators
// var isFullAge = now - yearVince >= fullAge
// console.log(isFullAge);



// // Grouping
// var ageVince = now - yearVince;
// var ageDon = 35;
// console.log((ageVince + ageDon)/2);



// // Multiple Assignments
// var x,  y;
// // Assignment moves right to left. So first it would evaluate the math, then assign.
// x = y = ( 3 + 5 ) * 4 - 6;
// console.log(x,y);

// x *= 2;
// console.log(x);

// x += 10;
// console.log(x);

// x++;
// console.log(x);

// BMI = mass / height^2 = mass / (height * height)

// var markMass = 100;
// var markHeight = 5.1;


// var johnMass = 110;
// var johnHeight = 5.0;

// var markHigherBMI = (markMass / (markHeight * markHeight)) > (johnMass / (johnHeight * johnHeight))
// console.log("Mark's BMI is higher than John?" + markHigherBMI);



// If / Else Statements
// If tests for true statements

// var firstName = 'John';
// var marriedStatus = 'single';
// var isMarried = false;

// if (isMarried) {
//     console.log(firstName + ' is married.')
// } else {
//     console.log(firstName + ' is single.')
// }




// AND operator and Else if in JS 

// var firstName = 'John';
// var age = 40;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30){
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }



// // Ternary operator 
// var firstName = 'John';
// var age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' drinks ' + drink + '.')



// Switch Statement evaluating a string.Note the teacher/instructor case, both will return the same result.

// var firstName = 'John';
// var job = 'cop';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
//         // No break here because the code has already reached the end
// }



// Switch Statement trick using "true" to create an if, else if, else example
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }



// Truthy vs Falsy
// Falsy values: undefined, null, 0, '', NaN (Not a number)
// Truthy values: NOT falsy values

// An example of code to test if a variable has been defined yet
// var height = 23;
// if (height || height === 0) {
//     console.log('Variable is defined, variable is truthy.')
// } else {
//     console.log('Variable has not been defined, therefore false.')
// }


// // Equality operators. Single equal sign assigns value. Double equal tests value. Triple equal tests value and type.
// if (height === '23') {
//     console.log('The == operator does type coercion.')
// };

// Coding Challenge
var johnsTeamScores = [89, 120, 103];
var marksTeamScores = [116, 94, 123];
var marysTeamScores = [97, 134, 105];

function evaluateAverageTeamScore(arrayWithScores) {

    // count the number of objects in the array, store it
    var arrayLength = arrayWithScores.length;

    // Create a variable to store the final result
    var averageScore = 0;

    // cycle through the array and add up all the scores
    for (i = 0; i < arrayLength; i++) {
        averageScore += arrayWithScores[i];
    };

    // divide the sum by the array count and display to console
    return (averageScore / arrayLength);
}

var john = evaluateAverageTeamScore(johnsTeamScores);
var mark = evaluateAverageTeamScore(marksTeamScores);
var mary = evaluateAverageTeamScore(marysTeamScores);

// Declare Single Winner
function singleWinner(winner, score) {
    console.log(winner + '\'s team in the winner with a score of ' + score + '.')
}
// Declare two-way tie with X and Y
function twoWayTie(winner1, winner2, score) {
    console.log('We have a two-way tie between ' + winner1 + '\'s team and ' + winner2 + '\'s team with a score of ' + score + '.')
}
// Declare a 3-way tie
function threeWayTie(score) {
    console.log('We have a three way tie between all three teams with a score of ' + score + '.')
}

// John Wins over Mark
if (john > mark) {
    // Comp Winner John vs Mary
    if (john == mary) {
        // If Tie, declare 2 way tie and show scores
        twoWayTie("John", "Mary", john)
    } else if (john < mary) {
        // If Winner Mary, declare Winner Mary and score
        singleWinner("Mary", mary);
    } else if (john > mary) {
        // If Winner John, declare Winner and Score
        singleWinner("John", john);
    }

}

// Mark Wins over John
else if (john < mark) {

    //If Tie between Mark amd Mary
    if (mark == mary) {
        // Declare 2 way tie and show scores
        twoWayTie("Mark", "Mary", mark);
    } else if (mark < mary) {
        // If Winner Mary, declare Winner Mary and score
        singleWinner("Mary", mary);
    } else if (mark > mary) {
        // If Winner mark, declare Winner and Score
        singleWinner("Mark", mark);
    }

}

// John and Mark Tie
else if (john === mark) {

    if (john === mary) {
        // If Tie, declare 3 way tie and show all scores
        threeWayTie(john);
    } else if (john > mary) {
        // If Winner Tie Mark/John, declare mark john a tie winner and show scores
        twoWayTie("John", "Mark", john)
    } else if (john < mary) {
        // If Winner Mary, declare winner Mary
        singleWinner("Mary", mary)
    }

}

// Better solution. Create a dictionary with the scores and the team names. 
// Sort scores from highest to lowest. Find the "highest" score and count how
// many of those highest scores exist in the dictionary. Make a function that declares
// that amount of winners and the score.