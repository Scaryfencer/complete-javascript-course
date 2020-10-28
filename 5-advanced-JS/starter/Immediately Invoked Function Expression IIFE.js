// Immediately Invoke Function Expressions

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// This runs once and is used to isolate variables away from the global by creating data privacy