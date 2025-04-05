let humanScore = 0;
let computerScore = 0;

//Create the computerchoice based on an random number between 0 and incl. 2
function getComputerChoice(){
    let choice = parseInt(Math.random() * 3);

    switch(choice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        default:
            break;
    }
}

//Humanchoice: returns the value based on a number the player gets prompted
function getHumanChoice(){
    let choice = parseInt(prompt("choose: Rock(0), Paper(1) or Scissor(2)"));

    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "paper";
    }
    else if(choice === 2){
        return "scissor";
    }
}

//checks the winning conditions and keeps track of who won
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It is a tie! You both had "+humanChoice);
    }
    else if((humanChoice === "rock" && computerChoice === "scissor")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissor" && computerChoice === "paper")){
        console.log("You win! "+humanChoice+ " beats "+computerChoice);
        humanScore += 1;
    }
    else{
        console.log("You lose! "+ computerChoice+ " beats "+humanChoice);
        computerScore += 1;
    }

}

//calls playRound() for five times and declares the winner after 5 rounds
function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if(humanScore === computerScore){
        console.log("You both have "+humanScore+ " points!");
    }
    else if(humanScore > computerScore){
        console.log("You win! "+humanScore+"/"+computerScore);
    }
    else{
        console.log("You lose! "+computerScore+"/"+humanScore);
    }
}

playGame();