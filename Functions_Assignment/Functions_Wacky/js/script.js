/*** Joanna Hogan 9/25/14 Wacky ***/


var guests = prompt("Wedding Cake Calculator\n\nHow many guests will be at your wedding?");//user prompt for number
var servings = prompt("Do you want to let your guests have a second helping?");//user prompt for string

var servingSize = 8; //variable serving size

function cake(g,s){ //function cake
    var totalCake = g * s; //calculate total cake
    return totalCake; //return value
}

var howMuchCake = cake(guests, servingSize);  //call function

if (servings == "yes"){ 
    var total = howMuchCake * 2;
    console.log("You will need " + total + " square inches of cake.");
} else {
    var total = howMuchCake;
    console.log("You will need " + total + " square inches of cake.");
}






