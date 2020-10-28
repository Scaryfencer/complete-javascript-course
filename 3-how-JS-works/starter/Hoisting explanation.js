///////////////////////////////////////
// Lecture: Hoisting

// function declaration
calcAge(1977);
function calcAge(year) {
    console.log(2020 - year);
}

// Function expression
var retirement = function(year) {
    console.log(65 - (2020 - year));
}
retirement(1956);

// hoisting demo: global vs execution context.
console.log(age); //undefined
var age = 23; //global age = 23

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


// Results will be:
// undefined, undefined, 65, 23 because:
// first undefined = hoisting in the global. It has been set to undefined because it looked ahead and knew a var dec was coming
// second undefined = hoisting in the execution context IMPORTANT!!! This would be equal to 23 and NOT undefined if var age was not redefined within this scope.
// third = age as defined in the execution context
// fourth = age as defined in the global context


///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// New scope only achieved from within functions. Still global scope if in an "IF" or while loop/block

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

In the exectution stack, we run Global -> Execution Context first() -> Execution Context second() -> Execution Context third() HOWEVER,
The scope chain of first() is at the same "level" as the scope chain of third(), meaning there is only access to global and that specific scope.
So Scope chain of first() is access to vars a + b, and likewise, scope chain of third() is acess to vars a + d. See jpeg in this folder "execution stack vs scope chain"
This is why the use of 'var' is so important. 

The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared
 within it, or, for variables declared outside any function, global. Duplicate variable declarations using var will not trigger an error, even in strict mode, 
 and the variable will not lose its value, unless another assignment is performed.

*/


///////////////////////////////////////
// Lecture: The this keyword

// The THIS keyword is not assigned a value until a function where it is defined is actually called, BECAUSE it only operates within the Execution Context.
// THIS: In a regular function call, the THIS keyword points at the global object i.e. the window object, in the browser.
// THIS: In a method call, the THIS variable points to the object that is calling the method.

//console.log(this);

// Regular THIS in a function call
calculateAge(1977);

function calculateAge(year) {
    console.log(2020-year);
    console.log(this);
}

// THIS in a method call. Now instead of "this" referring to the window object, is refers to the "john" object.

var john = {
    name: "john",
    yearOfBirth: 1977,
    calculateAge2: function() {
        // Here we are in a method
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            // Here, we have left the method and are back to a regular function call
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge2();

var mike = {
    name:'Mike',
    yearOfBirth: 1950,
}

mike.calculateAge2 = john.calculateAge2;
// calculateAge2 now exists as a method within the mike object, even before the method is called.
console.log(mike);
// mike.calculateAge2();
