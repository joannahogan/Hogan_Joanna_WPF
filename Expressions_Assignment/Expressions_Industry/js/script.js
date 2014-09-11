/*** Joanna Hogan 9/11/14 Industry Specific ***/

alert("Freelance Website Charge Calculator");
console.log("Typical freelancers charge $40 to $75 per hour.");

var experience = prompt("What is your experience level, 1-10?");
var payRate = experience * 3.5 + 40;
console.log("According to your experience, you should charge $" + payRate + " per hour.")

var hoursWorked = prompt("How many total hours did you put into the project?");
console.log(hoursWorked + " total hours");

var learningCurve = prompt("How many of those hours were spent learning new software or fixing mistakes?");

var hoursWorked = hoursWorked - learningCurve;
console.log("New total of " + hoursWorked + " hours worked");

var charge = hoursWorked * payRate;
console.log("The current charge is calculated at $" + charge + ".");

var bonusWork = prompt("How many of those hours were fulfilling additional requests?");











