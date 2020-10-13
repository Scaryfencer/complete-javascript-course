
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
    calcTips: function() {
        this.tips = [];

        for (let i = 0; i < this.bills.length; i++) {
        
            var bill = this.bills[i];
            var tempPercent = 0;
            if (bill < this.limit1) {
                tempPercent = this.tipPercent1;
            } else if (bill >= this.limit1 && bill <= this.limit2) {
                tempPercent = this.tipPercent2;;
            } else {
                tempPercent = this.tipPercent3;
            }
            this.tips[i] = bill * tempPercent;
            this.billsAndTips[i] = bill + (bill * tempPercent);
        }
    },
    billsAndTips: [],
    tipsAvg: 0,

};

john.calcTips();
console.log(john.tips);