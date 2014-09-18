/*** Joanna Hogan  9/17/14  Conditionals Wacky ***/



var playerOne = prompt("Player 1: Do you choose Rock, Paper, Scissors, Lizard, or Spock?");//User prompt for input
var playerTwo = prompt("Player 2: Do you choose Rock, Paper, Scissors, Lizard, or Spock?");//User prompt for input

if (playerOne === "rock" && playerTwo === "scissors"){  //if statement, when rock and scissors chosen by users
    console.log("Rock crushes Scissors!"); //print response
}else if (playerOne === "scissors" && playerTwo === "paper") {
    console.log("Scissors cust Paper!");
}else if (playerOne === "paper" && playerTwo === "rock") {
    console.log("Paper covers Rock!");
}else if (playerOne === "rock" && playerTwo === "lizard") {
    console.log("Rock crushes Lizard!");
}else if (playerOne === "lizard" && playerTwo === "spock") {
    console.log("Lizard poisons Spock!");
}else if (playerOne === "spock" && playerTwo === "scissors") {
    console.log("Spock smashes Scissors!");
}else if (playerOne === "scissors" && playerTwo === "lizard") {
    console.log("Scissors decapitates Lizard!");
}else if (playerOne === "lizard" && playerTwo === "paper") {
    console.log("Lizard eats Paper!");
}else if (playerOne === "paper" && playerTwo === "spock") {
    console.log("Paper disproves Spock!");
}else if (playerOne === "spock" && playerTwo === "rock") {
    console.log("Spock vaporizes Rock!");
}






/*
Scissors cuts Paper

Paper covers Rock

Rock crushes Lizard

Lizard poisons Spock

Spock smashes Scissors

Scissors decapitates Lizard

Lizard eats Paper

Paper disproves Spock

Spock vaporizes Rock

(and as it always has) Rock crushes scissors
*/



















































