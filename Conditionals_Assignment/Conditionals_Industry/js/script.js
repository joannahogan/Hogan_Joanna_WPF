/*** Joanna Hogan  9/17/14  Conditionals Industry ***/


//Private club example that requires age and membership

var age = prompt("Enter your age."); //Prompt user for age
var member = prompt("Are you a member of this club?");//Prompt user for membership
var withSponsor = prompt("Are you with a sponsor");//prompt user for sponsorship

(age >= 21) ? console.log("You are old enough to enter the private club.") : console.log("You are not old enough for this scene."); //Ternary statement


if (age >= 21 && member === "yes") { //If statement with relational operator
    console.log("Go on in. Thanks for your membership."); //Console print if conditions met
}else if (age >= 21 && withSponsor === "yes"){ //Else if statement with relational operator
    console.log("Have a good time with your sponsor. Please consider becoming a member."); //Console print if conditions met
}























































