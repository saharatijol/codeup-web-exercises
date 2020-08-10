"use strict";

alert("Welcome to my Website!!");
var favColor = prompt("So, what's your favorite color? ");

alert("Really??! " + favColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet ' +
// 'if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

const rentPerDay = 3;
var rentLittleMermaid = prompt("How many days do you want to rent the Little Mermaid?");
var rentBrotherBear = prompt("How many days do you want to rent Brother Bear?");
var rentHercules = prompt("How many days do you want to rent the Hercules?");

var littleMermaidPrice = (rentLittleMermaid*rentPerDay);
var brotherBearPrice = (rentBrotherBear*rentPerDay);
var herculesPrice = (rentHercules*rentPerDay);

alert("Your total will for all rentals will be $" + (littleMermaidPrice+brotherBearPrice+herculesPrice));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
// 'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. ' +
// 'How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for ' +
// 'Google and 4 hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var hoursWorkedGoogle = prompt("How many hours did you work for Google?");
var hoursWorkedAmazon = prompt("How many hours did you work for Amazon?");
var hoursWorkedFacebook = prompt("How many hours did you work for Facebook?");

var weekPay = alert("Wow! You've made $" + ((googleRate*hoursWorkedGoogle)+(amazonRate*hoursWorkedAmazon)
    +(facebookRate*hoursWorkedFacebook)) + " this week!");

// A student can be enrolled in a class only if the class is not full and the class schedule
// does not conflict with her current schedule.



// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.
var offerValid = true;
var items = prompt("How many items would you like to purchase?");
var doOffer = (items > 2) && offerValid;



