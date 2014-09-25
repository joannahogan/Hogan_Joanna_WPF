/*** Joanna Hogan 9/25/14 Personal ***/


var twelveOz = 44; //grams of sugar in a 12oz can
var twentyOz = 65; //grams of sugar in a 20oz bottle
var weeks = 52; //weeks in a year


var howMany = prompt("How many sodas do you consume per week?"); //user prompt for how many sodas
var sodaSize = prompt("Do you typically drink soda from a can or bottle?"); //user prompt for soda size


function calcCan(x,y) { //function for can
    var amtSugar = x * y * weeks; //calculates amount of sugar
    console.log("You consume " + amtSugar + " grams of sugar per year."); //prints how many grams per year
    return amtSugar; //returns value
}

function calcBottle(x,y) { //function for bottle
    var amtSugar = x * y * weeks; //calculates amount sugar
    console.log("You consume " + amtSugar + " grams of sugar per year."); //prints how many grams per year
    return amtSugar; //returns value
}

if (sodaSize == "can"){ //if statement
    var total = calcCan(twelveOz,howMany); //calculates function and puts value in total
}else if (sodaSize == "bottle") { //else if statement
    var total = calcBottle(twentyOz,howMany); //calculates function and puts value in total
}

var sugarCubes = total/4; //sugar cubes are 4 grams of sugar so divided total by 4
console.log("That's " + sugarCubes + " sugar cubes!"); //prints out sugar cubes