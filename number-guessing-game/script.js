const start_btn = document.getElementById("start-btn");
const end_btn = document.getElementById("end-btn");
const next_btn = document.getElementById("next-btn");
const check_btn = document.getElementById("check-btn");
const message = document.getElementById("message");
const guessed_number = document.getElementById("guessed-number");
const player1_score = document.getElementById("player1-score");
const player2_score = document.getElementById("player2-score");

let player1;
let player2;
let turn;
let random;
let guess;

start_btn.onclick = function(){
    player1 = 0;
    player2 = 0;
    turn = 1;
    player1_score.textContent = player1;
    player2_score.textContent = player2;
    message.textContent = `Player1 it is your turn now!`
    random = Math.floor(Math.random()*10)+1;
}
check_btn.onclick = function(){
    guess = Number(guessed_number.value);
    if(guess==random){
        if(turn%2==0){
            player2++;
            player2_score.textContent=player2;
            message.textContent = `Correct player2 congrats!`
        }else{
            player1++;
            player1_score.textContent=player1;
            message.textContent = `Correct player1 congrats!`
        }
    }else{
        if(turn%2==0){
            player2_score.textContent=player2;
            message.textContent = `Incorrect player2 better luck next time!`
        }else{
            player1_score.textContent=player1;
            message.textContent = `Incorrect player1 better luck next time!`
        }
    }
    turn++;
}
next_btn.onclick = function(){
    guessed_number.value = "";
    random = Math.floor(Math.random()*5)+1;
    if(turn%2==0){
        message.textContent = `Player2 it is your turn now!`;
    }else{
        message.textContent = `Player1 it is your turn now!`;
    }
}

end_btn.onclick = function(){
    if(player1==player2){
        message.textContent = `Tied you both are excellent`;
    }else if(player1>player2){
        message.textContent = `Player1 congratulations you won the game!!!`
    }else{
        message.textContent = `Player2 congratulations you won the game!!!`
    }
}
