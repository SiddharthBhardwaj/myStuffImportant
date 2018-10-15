/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, scorePrevious, activePlayer, gamePlaying , winningValue;

init();

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    scorePrevious = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active')
    //document.querySelector('.player-1-panel').classList.add('active')
}

//Change the content of the DOM.
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.btn-submit').addEventListener('click',function() {
    winningValue = document.getElementById('winning').value;
    document.getElementById('winning').value = null;
    init();
})

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random()*6)+1;
        // 2. Display the Result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score IF the rolled number is NOT a 1
        
        if(dice !== 1)
        {
            if((dice === 6)&&(scorePrevious === 6)){
                scores[activePlayer] = 0;
                nextPlayer();
            }else{
                //Add Score
                roundScore += dice;
                scorePrevious = dice;
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            }
            
        }else{
            //Next Player
            //document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            nextPlayer(); 
        }
    } 
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //Add the current score to Global Score
        scores[activePlayer] += roundScore;
        // Update UI 
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game?
        if(scores[activePlayer] >= winningValue)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            //dcoument.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //NextPlayer
            nextPlayer();
        }
    }
   
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    scorePrevious = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
















