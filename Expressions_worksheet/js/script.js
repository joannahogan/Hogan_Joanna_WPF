/*** Joanna Hogan  9/11/14  Expressions Worksheet ***/

// Dog Years

var age = 3;
var dogYears = age * 7;

console.log("Sparky is " + age + " human years old which is " + dogYears + " in dog years.");


// Slice of Pie part I

var pizzaSlices = 8;
var partyGoers = 50;
var pizzasOrdered = 12;

var slicesPerPerson = pizzaSlices * pizzasOrdered / partyGoers;

console.log("Each person ate " + slicesPerPerson + " slices at the party.");


// Slice of Pie part II

var sparkyFeast = pizzaSlices * pizzasOrdered - partyGoers;

console.log("Sparky got " + sparkyFeast + " slices of pizza.");


// Average Shopping Bill

var week1 = 56.30;
var week2 = 45.05;
var week3 = 49.45;
var week4 = 61.75;
var week5 = 59.20;

var totalBill = week1 + week2 + week3 + week4 + week5;

var averageBill = totalBill/5;

console.log("You have spent a total of $" + totalBill + " on groceries over 5 weeks. That is an average of $" + averageBill + " per week.");



// Discounts

var originalPrice = 39.95;
var discount = 15;
var description = "blender";
var salesTax = .08;
var total = originalPrice * (1 - discount/100);
var plusTax = total * (1 + salesTax);

console.log("Your " + description + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + total + " without tax, and $" + plusTax + " with tax.");



























