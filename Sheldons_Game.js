var userChoice = prompt("Do you choose rock, paper,scissors, lizard, or Spock? Please type one of these as it appears here.");
console.log("You choose: " + userChoice);
var computerChoice = Math.random();
if (computerChoice <= 0.2) {
    computerChoice = "rock";
} 
else if(computerChoice <= 0.4) {
	computerChoice = "paper";
} 
else if (computerChoice <= 0.6){
	computerChoice = "scissors";
} 
else if (computerChoice <=0.8){
    computerChoice = "lizard";
}
else if (computerChoice <=1.0){
    computerChoice = "Spock";
}
console.log("Sheldon chooses: " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === "Spock" && choice2 === "Spock"){
        return "Sheldon says: 'One of us is going to have to stop choosing Spock.' Try again!";
    }
    
    else if (choice1 === choice2){
        return "It's a tie, try again!";
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "As it always has, rock smashes scissors - you win!";
        }
        else if (choice2 === "paper"){
            return "Paper covers rock - Sheldon wins.";
        }
        else if (choice2 === "lizard"){
            return "Rock crushes lizard - You win!";
        }
        else if (choice2 === "Spock"){
            return "Spock vaporizes rock - Sheldon wins.";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "Paper covers rock - you win!";
        }
        else if (choice2 === "scissors"){
            return "Scissors cuts paper - Sheldon wins.";
        }
        else if (choice2 === "lizard"){
            return "Lizard eats paper - Sheldon wins.";
        }
        else if (choice2 === "Spock"){
            return "Paper disproves Spock - You win!";
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "As it always has, rock smashes scissors - Sheldon wins.";
        }
        else if (choice2 === "paper"){
            return "Scissors cuts paper - You win!";
        }
        else if (choice2 === "lizard"){
            return "Scissors decapitate lizard - You win!";
        }
        else if (choice2 === "Spock"){
            return "Spock smashes scissors - Sheldon wins.";
        }
    }
    else if (choice1 === "lizard"){
        if (choice2 === "rock"){
            return "Rock crushes lizard - Sheldon wins.";
        }
        else if (choice2 === "paper"){
            return "Lizard eats paper - You win!";
        }
        else if (choice2 === "scissors"){
            return "Scissors decapitate lizard - Sheldon wins";
        }
        else if (choice2 === "Spock"){
            return "Lizard poisons Spock - You win!";
        }
    }
    else if (choice1 === "Spock"){
        if (choice2 === "rock"){
            return "Spock vaporizes rock - You win!";
        }
        else if (choice2 === "paper"){
            return "Paper disproves Spock - Sheldon wins.";
        }
        else if (choice2 === "scissors"){
            return "Spock smashes scissors - You win!";
        }
        else if (choice2 === "lizard"){
            return "Lizard poisons Spock - Sheldon wins.";
        }
    }
};
console.log(compare(userChoice, computerChoice));