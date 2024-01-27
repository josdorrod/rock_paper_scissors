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
    if(computer === 0) announceWinner("Congratulations, you WIN!")

    return result;
}

//Funcion game para el mejor de 5 juegos
/* function game(){
    //code here
    let computerVictory = 0;
    let playerVictory = 0;
    const numberOfGames = 5;
    const victoryToWin = Math.ceil(numberOfGames/2);

    while(computerVictory != victoryToWin && playerVictory != victoryToWin){

        let resultRound = '';

        const playerSelection = prompt("Introduzca tu elección:");
        console.log(`Elección del jugadaor: ${playerSelection}`);

        const computerSelection = getComputerChoice();
        console.log(`Elección del ordenador: ${computerSelection}`);


        resultRound = playRound(playerSelection, computerSelection);
        if(resultRound.includes('tie')){
        } else{
            if(resultRound.includes('lose')) computerVictory++;
            else playerVictory++;
        }
        
    }
    if(playerVictory === victoryToWin) return `You win ${playerVictory} a ${computerVictory}`;
    else return `You lose ${computerVictory} a ${playerVictory}`;
}

console.log(game()); */

let body = document.querySelector("body");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const div = document.querySelector("#parcial-result");

body.addEventListener("click", playGame);


function playGame(e){
    if(e.target.nodeName == 'BUTTON'){
        const playerSelection = e.target.id;
        const computerSelection =  getComputerChoice();
        div.textContent = playRound(playerSelection, computerSelection);
    }
    
}

function announceWinner(text){
    const finalResult = document.querySelector("#final-result");
    finalResult.textContent = text;
    body.removeEventListener("click", playGame);
}