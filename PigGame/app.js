var score,roundScore,activePlayer;
var playingGame;
init();

function nextPlayer()
{
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        roundScore = 0;
        
        document.querySelector('#currentScore-1').textContent = '0';
        document.querySelector('#currentScore-2').textContent = '0';
        
        document.querySelector(".panel-1").classList.toggle('active');
        document.querySelector(".panel-2").classList.toggle('active');   
        
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
       
}

document.querySelector('.btn_rollDice').addEventListener('click', function(){
    if(playingGame){
        
    var dice1 = Math.floor(Math.random()*6 +1);
    var dice2 = Math.floor(Math.random()*6 +1);
    console.log(dice1+" "+dice2);
    var dice1DOM = document.querySelector('.dice1');
    var dice2DOM = document.querySelector('.dice2');
    dice1DOM.style.display = 'inline-block';
    dice1DOM.src = 'dice-' + dice1 +'.png';
    dice2DOM.style.display = 'inline-block';
    dice2DOM.src = 'dice-' + dice2 +'.png';
        
    if(dice1 !== 1 && dice2 !== 1)
    {
        roundScore += dice1 + dice2;
        document.querySelector('#currentScore-'+activePlayer).textContent = roundScore;
    }
    else{
        
        nextPlayer();
     
        
    }
        
    }
    
    
});

document.querySelector('.btn_holdon').addEventListener('click',function(){
   
    if(playingGame){
        score[activePlayer-1]  += roundScore;
        console.log(score);
        document.querySelector('#globalScore'+activePlayer).textContent = score[activePlayer-1];

        var finalScore = document.getElementById('final-score').value;
       
        if(finalScore === '')
            finalScore = 100;
         console.log(finalScore);
        if(score[activePlayer-1] >= finalScore)
        {
            document.querySelector('#name'+activePlayer).textContent = 'Winner Player '+activePlayer;
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.panel-'+activePlayer).classList.add('winner');
            document.querySelector('.panel-'+activePlayer).classList.remove('active');  
            playingGame = false;
        }
        else{
            nextPlayer();   
        } 
    
    }
    
});

document.querySelector('.btn_new').addEventListener('click',init);

function init()
{
    score = [0,0];
    roundScore = 0;
    activePlayer = 1;
    playingGame = true;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('globalScore1').textContent = '0';
    document.getElementById('currentScore-1').textContent = '0';
    document.getElementById('globalScore2').textContent = '0';
    document.getElementById('currentScore-2').textContent = '0';

    document.getElementById('name1').textContent = 'Player 1';
    document.getElementById('name2').textContent = 'Player 2';
    
    document.querySelector('.panel-1').classList.remove('winner');
    document.querySelector('.panel-2').classList.remove('winner');
    document.querySelector('.panel-1').classList.remove('active');
    document.querySelector('.panel-2').classList.remove('active');
    document.querySelector('.panel-1').classList.add('active');
    
}


