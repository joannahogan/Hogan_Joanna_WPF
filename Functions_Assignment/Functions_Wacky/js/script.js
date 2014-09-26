/*** Joanna Hogan 9/25/14 Wacky ***/


var guests = prompt("Wedding Cake Calculator\n\nHow many guests will be at your wedding?");
var servings = prompt("Do you want to let your guests have a second helping?");

var servingSize = 8;

function cake(g,s){
    var totalCake = g * s;
    return totalCake;
}

var howMuchCake = cake(guests, servingSize);





