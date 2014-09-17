/*** Joanna Hogan  9/17/14  Conditionals Worksheet ***/


//Expressions with Conditionals


//var unit = 32;
//var unit = 100;
var unit = 90;

var userInput = prompt("Type C for Celsius, or F for Fahrenheit.");

if (userInput === "c"){
    var unit = (unit - 32) * 5/9;
    var degrees = "Celsius";
}else if(userInput === "f"){
    var degrees = "Fahrenheit";
    //var unit = unit * 9/5 + 32;
}
console.log("The temperature is " + unit + "° " + degrees);


// Grade Letter Calculator


var userInput = prompt("Enter number to determine Letter Grade.");

if (userInput >= 90){
    var letterGrade = "A";
}else if(userInput >= 80){
    var letterGrade = "B";
}else if(userInput >= 70){
    var letterGrade = "C";
}else if(userInput >= 60){
    var letterGrade = "D";
}else if(userInput < 60){
    var letterGrade = "F";
}

console.log("You have a " + userInput + "%, which means you have earned a(n) " + letterGrade + " in the class!");


//Movie Ticket Price

var movieTime = 1900;
var age = 48;
var ticketPrice = "$12.00";

if (movieTime > 1459 && movieTime < 1701){
    var ticketPrice = "$7.00";
}else if(age >= 55 || age < 10){
    var ticketPrice = "$7.00";
}

console.log("The ticket price is " + ticketPrice);





















































