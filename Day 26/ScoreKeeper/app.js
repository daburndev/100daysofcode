const p1 = {
    name: 'Player 1',
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    name: 'Player 2',
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
const winner = document.querySelector('#winner')
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');


let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        winner.textContent = 'Game has started';
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('shas-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            winner.textContent= `Winner : ${player.name}`
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click',function(){
  updateScores(p2,p1)
})

for (let i=3; i<=11; i++){
    const option = document.createElement('option');
    option.value = i;
    option.append(i);
    winningScoreSelect.appendChild(option);
}

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset )

function reset(){
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score =0;
        p.display.textContent =0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
    winner.textContent = 'Ready to Start'
}









