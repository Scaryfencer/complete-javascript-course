// Bind call apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            return console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            return console.log('Hey guys, what\'s up? I\'m ' + this.name + ', and I\'m ' + this.age + ' years old. Have a great ' + timeOfDay + '.');

        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'evening');
// We can use the call method to invoke (call) a method with an owner object as the 
// first argument (parameter), assigning the new owner to the 'this' of the method.
// The items that come after are arguments that may be needed by the method


// The apply method is used to pass an array (if the method is setup to take an array)
// john.presentation.call(emily, ['friendly', 'afternoon']);

// The bind method allows us to declare a new function where we can preset the 'this' owner, 
// and assign a needed parameter ahead of time
var johnFriendly = john.presentation.bind(john, 'formal');

// Now if we call johnFriendly, we need only pass the timeOfDay parameter
johnFriendly('afternoon');
johnFriendly('evening');

// Same with Emily
var emilyFormal = john.presentation.bind(emily, 'friendly');
emilyFormal('morning');


// Practice. Using bind to preset parameters on functions

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, fun1) {
    var arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult.push(fun1(array[i]));
    }
    return arrayResult;
}

function calculateAge(el) {
    return (2020 - el);
}

function divideByTwo(theThing) {
    var quotient = (theThing / 2);
    return quotient;
}

function isFullAge(limit, age) {
    return age >= limit;
}

// Because the arrayCalc function we created only allows us to pass in one parameter at 
// (fun1(array[i])) 
var isFullAgeUS = isFullAge.bind(this, 21);

// Now we can pass just the one param
var ages = arrayCalc(years, calculateAge);
var areFullAgeUS = arrayCalc(ages, isFullAgeUS);
console.log(areFullAgeUS);