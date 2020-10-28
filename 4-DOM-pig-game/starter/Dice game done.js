/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
init();

var scores, roundScore, activePlayer, gamePlaying;

// PLAYER CLICKS ROLL DICE

document.querySelector(".btn-roll").addEventListener("click", function () {

    if (gamePlaying) {
        // Create a random number each time button clicked
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result

        showDice();
        document.querySelector(".dice").src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {

            //Add score to round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {

            // New player, Zero out current score
            nextPlayer();

        }
    }
});


// PLAYER CLICKS HOLD BUTTON

document.querySelector('.btn-hold').addEventListener('click', function () {

    // Check to make sure the game is playing
    if (gamePlaying) {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player wins
        if (scores[activePlayer] >= 100) {

            // If player wins
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            hideDice();
            gamePlaying = false;

        } else {

            // If Player doesn't win, switch to other player
            nextPlayer();

        }
    }
});


// PLAYER CLICKS NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', function () {
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    init();

});

// FUNCTIONS FUNCTIONS FUNCTIONS

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    hideDice();
    resetCurrentScores();
    resetFinalScores()

    document.querySelector('.player-0-panel').classList.add('active');

};

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    resetCurrentScores()
    hideDice()

};

function hideDice() {
    document.querySelector(".dice").style.display = 'none';
};

function showDice() {
    document.querySelector(".dice").style.display = 'block';
};

function resetCurrentScores() {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
};

function resetFinalScores() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
};


// 1. Player loses ENTIRE score when he rolls two 6s in a row. Then pass to next Player HINT always save previous roll
// 2. .value property in JS. Add an input field to the HTML where players can set the winning score, so they can change the predefined score of 100
// 3. Add another dice to the game. Player loses his current score when one of them is a 1.


//document.querySelector("#current-" + activePlayer).textContent = dice;
// querySelect as a "setter". Assigns the value on the right to the selected item on the left.
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// querySelect as a "getter". Assigns the value on the right to the variable on the left
// var x = document.querySelector("#score-0").textContent;
// console.log(x);