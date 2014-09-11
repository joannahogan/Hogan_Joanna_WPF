/*** Joanna Hogan 9/11/14 Wacky ***/

alert("Prepare to be amazed.\n\n\nNo, really prepare. I'll wait.\n\nYou will need the following:\n- Paper and Pen\n- Your \'Beginning Javascript\' book");

alert("Using legitimate magic, I shall attempt to predict the future.");

var number1 = prompt("First, pick any 3-digit number comprised of 3 different numbers. \n\nEx. \"942\"");
console.log(number1);

var number2 = prompt("Reverse the number and subtract the smaller number from the larger. \n\nEnter the reversed number here and I will do the math for you:");
console.log(number2);

var answer1 = number1 - number2;
if (answer1 <0){
    answer1 = answer1 * -1;
}
console.log(answer1);

var number3 = prompt("Now take this result, reverse it, and add the two together.\n\nEnter the reversed number here and I will do the math for you:");
console.log(number3);

var answer2 = Number(answer1) + Number(number3);
console.log(answer2);

alert("You should be left with a 4-digit number like \"3812\". \n\nUsing your \'Beginning JavaScript\' book, use the first 3 digits as \nthe page number and the last digit as the line number. \n\nEx. \"page 381, line 2\" \n\n\nWhen you are ready for my prediction click OK:");

