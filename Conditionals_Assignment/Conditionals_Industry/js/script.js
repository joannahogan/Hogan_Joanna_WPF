/*** Joanna Hogan  9/17/14  Conditionals Industry ***/


//Private club example that requires age and membership

var age = 29;  //Age of person trying to enter
var member = false; //Are they a member?
var withSponsor = true;  //Are they with a sponsor?

(age >= 21) ? console.log("You are old enough to enter the private club.") : console.log("You are not old enough for this scene."); //Ternary statement

if (age >= 21 && member === true) { //If statement with relational operator
    console.log("Go on in. Thanks for your membership."); //Console print if conditions met
}else if (age >= 21 && withSponsor === true){ //Else if statement with relational operator
    console.log("Have a good time with your sponsor. Please consider becoming a member."); //Console print if conditions met
}























































