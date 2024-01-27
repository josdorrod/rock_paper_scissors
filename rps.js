//Funcion getComputerChoice que devuelve aleatoriamente piedra, papel o tijeras
function getComputerChoice(){
    const options = ['Rock','Paper','Scissors'];
    let computerRandomElection = options[Math.floor(Math.random() * options.length)];
    return computerRandomElection;
}

//Funcion con dos parametros (Player y computer selection) que devuelve quien de los dos gana
function playRound(playerSelection, computerSelection){

    //Marcadores jugador y ordenador
    
    let playerScore = parseInt(player.textContent);
    let computerScore = parseInt(computer.textContent);

    let result = '';

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){

        //Empate
        result = `It is a tie. ${playerSelection} = ${computerSelection}`;
        console.log(result);
 

    } else {

        // Jugador gana
        if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock' ||      
           playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper' ||
           playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){

            computerScore-=1;
            computer.textContent = computerScore.toString();

            result = `You win. ${playerSelection} beats ${computerSelection}`;
        }

        //Jugador pierde
         else {   

            
            playerScore-=1;
            player.textContent = playerScore.toString();
            
            result = `You lose. ${computerSelection} beats ${playerSelection}`;
        }
    }
    if(playerScore === 0) announceWinner("Sorry, you LOSE the game!");
    if(computerScore === 0) announceWinner("Congratulations, you WIN!")

    //Dar color al marcador
    if(playerScore === computerScore){
        player.style.color = "black";
        computer.style.color = "black";
    } else if(playerScore < computerScore){
        player.style.color = "red";
        computer.style.color = "green";

    } else {
        player.style.color = "green";
        computer.style.color = "red";
    }

    return result;
}

let body = document.querySelector("body");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const parcialResult = document.querySelector("#parcial-result");
const finalResult = document.querySelector("#final-result");
const reactivate = document.querySelector(".try-again");

body.addEventListener("click", playGame);


function playGame(e){
    if(e.target.nodeName == 'BUTTON' && e.target.className != "try-again"){
        const playerSelection = e.target.id;
        const computerSelection =  getComputerChoice();
        parcialResult.textContent = playRound(playerSelection, computerSelection);
    }
    
}

function announceWinner(text){
    finalResult.textContent = text;
    body.removeEventListener("click", playGame);
}

reactivate.addEventListener("click", () =>{
    body.addEventListener("click", playGame);
    parcialResult.textContent = "";
    finalResult.textContent = "";
    computer.textContent = "5";
    player.textContent = "5";
    player.style.color = "black";
    computer.style.color = "black";

});