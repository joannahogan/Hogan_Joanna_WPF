/*** Joanna Hogan 9/11/14 Industry Specific ***/

alert("Freelance Website Charge Calculator"); //Alert explaining calculator
console.log("Typical freelancers charge $40 to $75 per hour."); //Average pay rates for freelancers for user reference

var experience = prompt("What is your experience level, 1-10?"); //User enter experience level
var payRate = experience * 3.5 + 40; //Pay rate calculated by experience
console.log("According to your experience, you should charge $" + payRate + " per hour.") //Print out of pay rate

var hoursWorked = prompt("How many total hours did you put into the project?"); //User input hours worked
console.log(hoursWorked + " total hours"); //Print hours to console

var learningCurve = prompt("How many of those hours were spent learning new software or fixing mistakes?"); //User enter hours

var hoursWorked = hoursWorked - learningCurve; //Learning curve hours subtracted
console.log("New total of " + hoursWorked + " hours worked"); //Print of new total hours

var charge = hoursWorked * payRate; //Calculating charge
console.log("The current charge is calculated at $" + charge + "."); //Print of current charge

var bonusWork = prompt("How many of those hours were fulfilling additional requests?"); //Additional hours entered

var hoursWorked = hoursWorked - bonusWork; //New hours worked
console.log("You worked a new total of " + hoursWorked + " standard hours and " + bonusWork + " bonus hours.") //Print of separate hours worked

var totalCharge = hoursWorked * payRate + bonusWork * payRate * 1.5; //Calculate total charge

console.log("The total charge is calculated at $" + totalCharge + "."); //Print total charge to console










