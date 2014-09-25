/*** Joanna Hogan 9/25/14 Personal ***/


var twelveOz = 44;
var twentyOz = 65;
var weeks = 52;


var howMany = prompt("How many sodas do you consume per week?");
var sodaSize = prompt("Do you typically drink soda from a can or bottle?");


function calcCan(x,y) {
    var amtSugar = x * y * weeks;
    console.log("You consume " + amtSugar + " grams of sugar per year.");
    return amtSugar;
}

function calcBottle(x,y) {
    var amtSugar = x * y * weeks;
    console.log("You consume " + amtSugar + " grams of sugar per year.");
    return amtSugar;
}



if (sodaSize == "can"){
    var total = calcCan(twelveOz,howMany);
}else if (sodaSize == "bottle") {
    var total = calcBottle(twentyOz,howMany);
}