/*** Joanna Hogan 9/11/14 Personal ***/

var zombies = "The Walking Dead";
var seasons = [6, 13, 16, 16];

var totalEpisodes = seasons[0] + seasons[1] + seasons[2] + seasons[3];

console.log("There have been " + totalEpisodes + " total episodes of " + zombies + " in 4 seasons.");

var watched = prompt(zombies + " returns to AMC on October 12, 2014. \n\nHow many episodes have you watched to completion?");
var percentage = watched/51 * 100;

console.log("You have watched " + watched + " episodes of " + zombies + ". That's " + percentage + "%.");

var episodesLeft = totalEpisodes - watched;

var daysLeft = prompt("How many days do you have left to catch up before the season premier?");

var dailyEpisodes = daysLeft/episodesLeft;
var weeklyEpisodes = dailyEpisodes * 7;

console.log("To finish the remaining " + episodesLeft + " episodes, you would have to watch " + weeklyEpisodes + " per week or " + dailyEpisodes + " per day.");






