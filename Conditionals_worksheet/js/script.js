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






























