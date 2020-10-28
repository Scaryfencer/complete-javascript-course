// Closures

function retirement(retirementAge) {
    var a = ' years until retirement.'
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}



//retirement(66)(1990);

// An inner function always has access to variables and parameters of its outer function
// even after the outer function has returned. It brings the scope chain of the outer function
// along with it.

// See Closures.jpg in this folder


// How this can be used


var retirementUS = retirement(66);
var retirementGer = retirement(65);
var retirementIce = retirement(67);

retirementUS(1990);
retirementGer(1990);
retirementIce(1990);


// PRACTICE rewrite the interview function using closure;

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log(name + ', what subject do you teach?');
//         }

//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// interviewQuestion('designer')('Mark');

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var intQuestDes = interviewQuestion('designer');
intQuestDes('Jane');

// The function returned contains an if, else if, else that needs "job" defined
// in order to work correctly. When intQuestDes is created, it brings the scope
// of the original function in order to accurately pass the if, else. Now you need only
// pass the name, and it will still remember what 'job' is.