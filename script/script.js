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

console.log(getComputerChoice());
console.log(getHumanChoice());