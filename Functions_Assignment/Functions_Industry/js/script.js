/*** Joanna Hogan 9/25/14 Industry Specific ***/



alert("The Area of a Trapezoid is the average of the two base lengths times the altitude."); //purpose of calculations
var baseOne = prompt("How many meters is the length of base 1?"); //prompt for base
var baseTwo = prompt("How many meters is the length of base 2?"); //prompt for base
var alt = prompt("What is the altitude of the trapezoid?"); //prompt for height



var trapArea = function (a,b,h) { //Anonymous function
    var area = (a+b)/2 * h; //calculate area
    return area;  //return value
}

var total = trapArea(baseOne,baseTwo,alt);  //call function, store in total

console.log("The area of your trapezoid is " + total + " square meters."); //print to console









