/*** Joanna Hogan  9/18/14  Conditionals Personal ***/


// If I have don't have Starbucks or I skip lunch, I can go to the movies

var starbucks = prompt("Did you go to Starbucks this morning?");  //user input if bought starbucks
var skiplunch = prompt("Did you skip lunch today?");  //user input if bought lunch


if (starbucks === "no" || skiplunch === "yes") {  //if user skipped lunch or starbucks conditional
    console.log("You can go to the movies!");  //console print response
} else {
    console.log("Sorry, you don't have enough money for the movies today.");  //console response for other inputs
}

















































