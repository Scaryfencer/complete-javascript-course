
// John 124 48 268 180 42 20%<50 15% 50-200  10%>200
// objects and loops
// create object with array for bills
// add method to calc the tip
// method should loop to iterate over all the paid bills and do the tip calc
// as an output create:
// 1. new array containing all the tips
// 2. array containing final paid amounts (bill + tip) HINT start with 2 empty arrays and fill them in the loop

var john = {

    fullName: "John Smith",
    bills: [124, 48, 268, 180, 42],
    limit1: 50,
    limit2: 200,
    tipPercent1: .20,
    tipPercent2: .15,
    tipPercent3: .10,
    tips: [],
    billsAndTips: [],
    tipsAvg: 0,

};

// EXTRA Mark family bills 77 375 110 45 mark tips  20%<100 10% 100-300  25%>300

var mark = {

    fullName: "Mark Garcia",
    bills: [77, 375, 110, 45],
    limit1: 100,
    limit2: 300,
    tipPercent1: .20,
    tipPercent2: .10,
    tipPercent3: .25,
    tips: [],
    billsAndTips: [],
    tipsAvg: 0,

};
   
// Pass an object that has the bills in, loop through the bills value
// add the tip amounts to the tip key value in the object
// add the total of tips and bills to the tipsandbills key value in the object
// Use the rules in the object to figure tips

function calcTips(tName) {

    for (let i = 0; i < tName.bills.length; i++) {
        
        var bill = tName.bills[i];
        var tempPercent = 0;
        if (bill < tName.limit1) {
            tempPercent = tName.tipPercent1;
        } else if (bill >= tName.limit1 && bill <= tName.limit2) {
            tempPercent = tName.tipPercent2;;
        } else {
            tempPercent = tName.tipPercent3;
        }
        tName.tips[i] = bill * tempPercent;
        tName.billsAndTips[i] = bill + (bill * tempPercent);
    }

}

calcTips(john);
calcTips(mark);

// create a function not method to calc the average of a given array of tips
// HINT: Loop over the array and in each iteration store the current sum in a var starting 0
// after sum of array, divide by number of elements in array

function calcTipsAvg(tipsObject) {

    var tipsTotal = 0;
    for (let i = 0; i < tipsObject.tips.length; i++) {
        // for each loop, add this value to avg
        tipsTotal += tipsObject.tips[i]; 
    
    }
    
    tipsObject.tipsAvg = (tipsTotal / tipsObject.tips.length);
}

calcTipsAvg(john);
calcTipsAvg(mark);

console.log(john.tips, john.billsAndTips, john.tipsAvg)
console.log(mark.tips,mark.billsAndTips, mark.tipsAvg)

// Calc the avg tip for each family
// log to console which family paid the highest tips ON AVERAGE

if (john.tipsAvg > mark.tipsAvg) {
    console.log(john.fullName + " is the better average tipper.")
} else {
    console.log(mark.fullName + " is the better average tipper.")
}