let score= JSON.parse(localStorage.getItem('score')) || {
                Wins:0,
                Losses :0,
                Ties:0
            }

            function calc_computermove(){
                let computermove = '';
                const rn = Math.random();
                if(rn>0 && rn <1/3){
                    computermove = 'rock'
                } else if(rn>1/3 && rn<2/3){
                    computermove = 'paper';
                }else if(rn>2/3 && rn<1){
                    computermove = 'scissor';
                }
                console.log(computermove);
                return(computermove);
            }

            function calc_result(playermove){
                let computermove = calc_computermove();
                let result = '';
                if(playermove === 'rock'){
                    if('rock' === computermove){
                        result = 'Tie';
                    } else if('paper' === computermove){
                        result = 'You Lose';
                    } else if('scissor' === computermove){
                        result = 'You Win';
                    }
                } else if(playermove === 'paper'){
                    if('rock' === computermove){
                        result = 'You Win';
                    } else if('paper' === computermove){
                        result = 'Tie';
                    } else if('scissor' === computermove){
                        result = 'You Lose';
                    }
                } else if(playermove === 'scissor'){
                    if('rock' === computermove){
                        result = 'You Lose';
                    } else if('paper' === computermove){
                        result = 'You Win';
                    } else if('scissor' === computermove){
                        result = 'Tie';
                    }
                }
                console.log(result);

                const inside_jsresult = document.querySelector('.js-result').innerHTML = result;

                if(result === 'You Win'){
                    score.Wins = score.Wins +1;
                    console.log(score);
                } else if(result === 'You Lose'){
                    score.Loses = score.Loses +1;
                    console.log(score);
                }else if(result === 'Tie'){
                    score.Ties = score.Ties + 1;
                    console.log(score);
                }

                localStorage.setItem('score', JSON.stringify(score));

                document.querySelector('.js-showmoves').innerHTML = `You <img class="move-icon" src="images/${playermove}.png" > --- <img class="move-icon" src="images/${computermove}.png" > Computer`;
                updatescore();
            }

            function updatescore(){
                document.querySelector('.js-finalscore').innerHTML = `Wins : ${score.Wins} Loses : ${score.Loses} Ties : ${score.Ties}`
            }

            function resetscore(){
                score.Wins = 0,
                score.Loses = 0,
                score.Ties = 0
            }
