let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = parseInt(Math.random() * 3);

    switch(choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissor";
            break;
        default:
            break;
    }
}

function getHumanChoice(){
    //TODO
}

console.log(getComputerChoice());