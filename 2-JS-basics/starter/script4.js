// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0, i < john.length, i++)

// var john = {
//     // The first item is the key, and the second is the value. This is key/value pair.
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
// };

// John 124 48 268 180 42 20%<50 15% 50-200  10%>200
// objects and loops
// create object with array for bills
// add method to calc the tip
// method should loop to iterate over all the paid bills and do the tip calc
// as an output create:
// 1. new array containing all the tips
// 2. array containing final paid amounts (bill + tip) HINT start with 2 empty arrays and fill them in the loop


var john = {

    bills: [124, 48, 268, 180, 42],
    limit1: 50,
    limit2: 200,
    tipPercent1: 20,
    tipPercent2: 15,
    tipPercent3: 10,
    tips: [],
    billsAndTips: [],

};

var mark = {

    bills: [77, 375, 110, 45],
    limit1: 100,
    limit2: 300,
    tipPercent1: 20,
    tipPercent2: 10,
    tipPercent3: 25,
    tips: [],
    billsAndTips: [],

};
    
for (let i = 0; i < billsObject.bills.length; i++) {
    console.log(billsObject.bills[i]);
    
}
