// Primitives vs Objects

// Reminder Primitives are strings, numbers, booleans, undefined and null
// vars containing primitives actually hold that data within the variable themselves.
// Objects do not actually contain the object, the contain a ref in memory saying where it is stored.
// It points to the data

// logging a and b shows that the variables actually are holding that data
// Start with a, make a copy of a, then change a. a is different than b
var a = 30;
var b = a;
a = 32;

var obj1 = {
    name: 'John',
    age: 26,
};

// When logging a and b, you see that each has it's own value, independent of what happens to the other
console.log(a);
console.log(b);

var obj2 = obj1;
obj1.age = 30;

// No so with objects. When obj1 key age has its value mutated, it also affects obj2 because 
// obj2 is pointing to obj1. Now both obj1 and obj2 have been changed.
console.log(obj1);
console.log(obj2);

// Functions

var age = 27;
var objFun = {
    name: 'Jonas',
    city: 'Lisbon',
}

// VERY IMPORTANT the function here changed the variable 
// to come back to console log
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
    console.log(age);
    console.log(objFun.city);
}
change(age, objFun);
// Same console result as inside the execution context
console.log(age);
console.log(objFun.city);

// Result 27, 'San Francisco'

// Why this happens. When you pass a primitive into the function, a simple copy is created. We
// can change the primitive as much as we want, but it doesn't change the variable outside
// When we pass an object into the function, we pass the reference to the actual data, so when it
// mutates inside the function, the change is retained outside the function.