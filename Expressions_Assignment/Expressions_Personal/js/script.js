/*** Joanna Hogan 9/11/14 Personal ***/

var zombies = "The Walking Dead"; //Defined string
var seasons = [6, 13, 16, 16]; //Episodes per season in Array

var totalEpisodes = seasons[0] + seasons[1] + seasons[2] + seasons[3]; //Total of episodes per season

console.log("There have been " + totalEpisodes + " total episodes of " + zombies + " in 4 seasons."); //Print of total episodes

var watched = prompt(zombies + " returns to AMC on October 12, 2014. \n\nHow many episodes have you watched to completion?"); //User input how many episodes watched
var percentage = watched/51 * 100; //Percentage of episodes watched

console.log("You have watched " + watched + " episodes of " + zombies + ". That's " + percentage + "%."); //Print of percentage

var episodesLeft = totalEpisodes - watched; //Calculated how many episodes left

var daysLeft = prompt("How many days do you have left to catch up before the season premier?"); //User input how many days

var dailyEpisodes = daysLeft/episodesLeft; //Calculates episodes per day
var weeklyEpisodes = dailyEpisodes * 7;  //Calculates episodes per week

console.log("To finish the remaining " + episodesLeft + " episodes, you would have to watch " + weeklyEpisodes + " per week or " + dailyEpisodes + " per day."); //Prints out how many episodes must be watched by day and week






