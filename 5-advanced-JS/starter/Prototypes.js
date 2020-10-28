// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher',
// };

// Because we are creating a new empty object (see vars john, mark, jane), this allows us to
// use "this" at the execution context level so that we can assign the things passed into
// the constructor to be assigned to a new object. If we didn't, "this" would be
// pointing at the "global object"
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// You can hook functions to a constructor using the prototype property
// Don't forget the "this" when making functions as prototype, as yearOfBirth does not exist
// Globally, only within the execution context of the Person object.
Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}

// Just as you add a method to a constructor, you can also add a property through 
// prototype inheritance. 

Person.prototype.lastName = 'Smith';
// Even though you cannot see lastName accessible if you inspect the object, you have 
// created a value that has been inherited automatically because it is tied to the prototype
// looking at 'mark' in the console, there is no last name. But mark.lastName has the value
// 'Smith' in the console!! Magic.

// When the operator "new" is used, it first creates an empty object
// That object is then filled with the constructor Person which fills the object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// If we did not use the "new" operator, then globally name gets set as john, 
// yearOfBirth gets set to 1990, and job is set as teacher. With the new operator,
// we have a completely different result, a new object with the values assigned
// to the appropriate keys.

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
