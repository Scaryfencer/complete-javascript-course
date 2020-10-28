/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

init();

var scores, roundScore, activePlayer, gamePlaying, winningScore;

// PLAYER CLICKS ROLL DICE

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // Create a random number each time button clicked
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        showDice();
        document.querySelector('.dice1').src = 'dice-' + dice1 + '.png';
        document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';

        // 1. Check Are the dice snake eyes??? then FAIIIIIIIL and kill the total score!
        if (dice1 == 1 && dice2 == 1) {
            destroyEverthing();
        }

        // 2. Check if there are ANY 1s, next player if we found a 1
        else if (dice1 == 1 || dice2 == 1) {

            // New player, Zero out current score
            displayNotification('Player ' + (activePlayer + 1) + ' rolled a 1!');
            nextPlayer();

        }

        // 3. Safe!! No ones. Add to your score and keep on playin
        else {

            //Add score to round score
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

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
        document.getElementById('score-' + activePlayer).style.font = '100 80px Lato';

        // Check if player wins
        if (scores[activePlayer] >= winningScore) {

            // If player wins
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            displayNotification('Player ' + activePlayer + ' wins!');
            hideDice();
            gamePlaying = false;

        } else {

            // If Player doesn't win, switch to other player
            nextPlayer();
            displayNotification('Player ' + (activePlayer + 1) + '\'s turn.');
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
    resetFinalScores();

    document.querySelector('.player-0-panel').classList.add('active');
    winningScore = prompt('What score are we playing to?');
    displayNotification('Winning score has been set at ' + winningScore + '.');
    return winningScore;

};

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    resetCurrentScores();
    hideDice();

};

function hideDice() {
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
};

function showDice() {
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice2').style.display = 'block';
};

function resetCurrentScores() {
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
};

function resetFinalScores() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
};

function destroyEverthing() {

    // Kill final score and show
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).textContent = 'Snake Eyes!!';
    document.getElementById('score-' + activePlayer).style.font = '57px Creepster';
    displayNotification('Player ' + (activePlayer + 1) + ' just got destroyed!');

    // next player kills current score already
    nextPlayer();
}

function displayNotification(message) {

    function fadeIn() {
        document.getElementById('notifications').style.opacity = 0;
    }

    document.getElementById('notifications').textContent = message;
    document.getElementById('notifications').style.opacity = 1;
    setTimeout(fadeIn,3000);
    
}


// 1. Player loses ENTIRE score when he rolls two 6s in a row. Then pass to next Player HINT always save previous roll
// 2. .value property in JS. Add an input field to the HTML where players can set the winning score, so they can change the predefined score of 100
// 3. Add another dice to the game. Player loses his current score when one of them is a 1. Check


//document.querySelector("#current-" + activePlayer).textContent = dice;
// querySelect as a "setter". Assigns the value on the right to the selected item on the left.
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// querySelect as a "getter". Assigns the value on the right to the variable on the left
// var x = document.querySelector("#score-0").textContent;
// console.log(x);