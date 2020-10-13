
// Pass an object that has the bills in, loop through them
// add the tip amounts to the tip key value in the object
// add the total of tips and bills to the tipsandbills key value in the object
// Use the rules in the object to figure tips

function tipCalculator(billsObject) {

    //Loop through bills and do the following on each bill

    

    if (billsObject.limit1 < billsObject.limit1) {
        //billsAndTips.push(billAmt * 1.2);
    } else if (billAmt >= 50 && billAmt <= 200) {
        billsAndTips.push(billAmt * 1.15);
    } else {
        billsAndTips.push(billAmt * 1.1);
    }

}

// Turn this into a loop instead
tipCalculator(bills[0]);
tipCalculator(bills[1]);
tipCalculator(bills[2]);

console.log(bills,billsAndTips);

// EXTRA Mark family bills 77 375 110 45 mark tips  20%<100 10% 100-300  25%>300
// create a function not method to calc the average of a given array of tips
// HINT: Loop over the array and in each iteration store the current sum in a var starting 0
// after sum of array, divide by number of elements in array

// Calc the avg tip for each family
// log to console which family paid the highest tips ON AVERAGE
