/*** Joanna Hogan 9/11/14 Wacky ***/

alert("Prepare to be amazed.\n\n\nNo, really prepare. I'll wait.\n\nYou will need the following:\n- Paper and Pen\n- Your \'Beginning Javascript\' book"); //An alert

alert("Using legitimate magic, I shall attempt to predict the future."); //Another alert

var number1 = prompt("First, pick any 3-digit number comprised of 3 different numbers. \n\nEx. \"942\""); //User enters number
console.log(number1); //Number prints on console

var number2 = prompt("Reverse the number and subtract the smaller number from the larger. \n\nEnter the reversed number here and I will do the math for you:"); //User enters reverse number
console.log(number2); //Number prints on console

var answer1 = number1 - number2; //Subtract two numbers
if (answer1 <0){
    answer1 = answer1 * -1;  //Answer sometimes comes out as negative, so found a way to make positive
}
console.log(answer1); //Print out answer of subtracting 2 numbers

var number3 = prompt("Now take this result, reverse it, and add the two together.\n\nEnter the reversed number here and I will do the math for you:"); //User enters reverse number
console.log(number3); //Number printed on console

var answer2 = Number(answer1) + Number(number3); //Adding 2 numbers
console.log(answer2); //Result printed on console

alert("You should be left with a 4-digit number like \"3812\". \n\nUsing your \'Beginning JavaScript\' book, use the first 3 digits as \nthe page number and the last digit as the line number. \n\nEx. \"page 381, line 2\" \n\n\nWhen you are ready for my prediction click OK:"); //Explanation of page number and line number

console.log("ANSWER: 1089\n\nEXCERPT:\n\n\"page multiple times just to advance to the next line, so we use a process called stepping.\""); //Prediction printed on console
