/*** Joanna Hogan 9/25/14 Personal ***/


var twelveOz = 44;
var twentyOz = 65;
var weeks = 52;


var howMany = prompt("How many sodas do you consume per week?");
var sodaSize = prompt("Do you typically drink soda from a can or bottle?");


function calcCan(x,y) {
    var amtSugar = x * y * weeks;
    console.log("You consume " + amtSugar + " grams of sugar per year.");
}

function calcBottle(x,y) {
    var amtSugar = x * y * weeks;
    console.log("You consume " + amtSugar + " grams of sugar per year.");
}



if (sodaSize == "can"){
    calcCan(twelveOz,howMany);
}else if (sodaSize == "bottle") {
    calcBottle(twentyOz,howMany);
}