/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, activePlayer, roundScore, gameRunning;

init();

document.querySelector('.btn-roll').addEventListener('click', () => {

    if (gameRunning) {
        // Generate a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // display the result from none to block 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice +'.png';

        // update the round score if the rolled number was NOT a 1 
        if (dice !== 1){
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }  
    }
});


document.querySelector('.btn-hold').addEventListener('click', () => {

    if (gameRunning) {
        // add current score to the global score 
        scores[activePlayer] += roundScore;

        // updating UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // check if there is a winner 
        if(scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gameRunning = false;
        } else {
            nextPlayer();
        }
    }
});

// DRY principle 
function nextPlayer() {

    document.getElementById('current-' + activePlayer).textContent = '0';
        roundScore = 0;

        activePlayer ? activePlayer = 0 : activePlayer = 1;

        document.querySelector('.dice').style.display = 'none';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gameRunning = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



// Dice = Math.floor(Math.random() * 6) + 1
// document.querySelector("#current-" + activePlayer).textContent = Dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
