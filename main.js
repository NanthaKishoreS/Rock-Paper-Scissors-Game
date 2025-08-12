let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses :0,
    ties:0
}

updatescore();
//Here we are using default operator and reassigning the scores to zero !!!
//Here we can also use !Not operator instead of checking score === null...

function pcm(){
    const rn = Math.random();
    let cm = '';
    if(rn>=0 && rn<=1/3){
        cm = 'rock';
    }else if(rn>1/3 && rn<=2/3){
        cm = 'paper';
    }else{
        cm = 'scissor';
    } 
    return cm;
}
function playGame(playermove){
    let cm = pcm();
    let result = '';
    if(playermove === 'rock'){
        if(cm === 'rock'){
            result = 'Tie';
        }
        else if(cm === 'paper'){
            result = 'You Lose';
        }
        else{
            result = 'You Win !!';
        }
    } else if (playermove === 'paper'){
            if(cm === 'rock'){
                result = 'You Win !!';
            }
            else if(cm === 'paper'){
                result = 'Tie';
            }
            else{
                result = 'You Lose';
            }
    }else if(playermove === 'scissor'){
        if(cm === 'rock'){
        result = 'You Lose';
        }
        else if(cm === 'Paper'){
            result = 'You Win !!';
        }
        else{
            result = 'Tie';
        }
    } 

    if(result === 'You Win !!'){
        score.wins = score.wins+1;
    } else if(result === 'You Lose'){
        score.losses = score.losses+1;
    } else if(result === 'Tie'){
        score.ties = score.ties+1;
    } 

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();      
    
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playermove}.png" > <img class="move-icon" src="images/${cm}.png" > Computer`
        
}

function updatescore(){
    document.querySelector('.js-score').innerHTML =  `Wins:${score.wins}  Losses:${score.losses}   Ties:${score.ties}`;
}
