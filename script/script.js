let humanScore = 0;
let computerScore = 0;


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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);