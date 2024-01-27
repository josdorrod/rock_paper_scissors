//Funcion getComputerChoice que devuelve aleatoriamente piedra, papel o tijeras
function getComputerChoice(){
    const options = ['Rock','Paper','Scissors'];
    let computerRandomElection = options[Math.floor(Math.random() * options.length)];
    return computerRandomElection;
}

//Funcion con dos parametros (Player y computer selection) que devuelve quien de los dos gana
function playRound(playerSelection, computerSelection){
    let result = '';
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 'It is a tie';   //Empate

    } else {

        if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock' ||      // Jugador gana
           playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper' ||
           playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){
            result = `You win. ${playerSelection} beats ${computerSelection}`;
            console.log(result);
            return result;
        }
         else {   //Ordenador gana
            result = `You lose. ${computerSelection} beats ${playerSelection}`;
            console.log(result);
            return result;
        }
    }
}

//Funcion game para el mejor de 5 juegos
function game(){
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

console.log(game());