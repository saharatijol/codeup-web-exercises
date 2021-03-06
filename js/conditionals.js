"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color == 'blue') {
        return("blue is the color of the sky");
    } else if (color == 'red') {
        return("Strawberries are red");
    } else {
        return("I don't know anything about that " + color);
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function colorPicker (randomColor) {
    if (randomColor == 'red') {
        return("Red is my favorite color.");
    } else if (randomColor == 'orange') {
        return("Orange is rich in Vitamin C!");
    }else if (randomColor == 'yellow') {
        return("Yellow is a happy color");
    }else if (randomColor == 'green') {
        return("Green vegetable are good for you.");
    }else if (randomColor == 'blue') {
        return("Blue reminds me of the ocean.");
    }else if (randomColor == 'indigo') {
        return("Indigo jeans is my favorite denim wash.");
    }else if (randomColor == 'violet') {
        return("Violet is my grandma's favorite color.")
    } else {
        return("I don't know that color");
    }
}
console.log(colorPicker (randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor2 = colors2[Math.floor(Math.random() * colors.length)];

function colorPicker2 (randomColor2) {
    switch(randomColor2) {
        case 'red':
            return("Red is my favorite color.");
        case 'orange':
            return("Orange is rich in Vitamin C!.");
        case 'yellow':
            return("Yellow is a happy color.");
        case 'green':
            return("Green vegetable are good for you.");
        case 'blue':
            return("Blue reminds me of the ocean.");
        case 'indigo':
            return("Indigo jeans is my favorite denim wash.");
        case 'violet':
            return("Violet is my grandma's favorite color.");
        default:
            return("What? Is that a color?");
    }
}

console.log(colorPicker2 (randomColor2));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("Hey! Pick 1 of 3 of these colors: blue, red, cyan");
alert("Message: " + analyzeColor(color))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckyNumber, totalAmt) {
    switch(luckyNumber) {
        case 0:
            return(totalAmt);
        case 1:
            return totalAmt - (totalAmt * 0.10);
        case 2:
            return totalAmt - (totalAmt * 0.25);
        case 3:
            return totalAmt - (totalAmt * 0.35);
        case 4:
            return totalAmt - (totalAmt * 0.50);
        case 5:
            return(totalAmt - totalAmt);
        // default:
        //     return("Where's the money??");

    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalAmt = prompt("What's your total bill?: $");

alert("Generating your lucky number discount...");
calculateTotal (luckyNumber, totalAmt);
alert("Your lucky number is: #" + luckyNumber +
    "\nYour total bill was: $" + totalAmt +
    "\nYour new total after discount: $" + (calculateTotal(luckyNumber, totalAmt)));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var welcomeMessage = confirm("Welcome! Would you like to enter a Number? Click OK if, Yes");
if (welcomeMessage) {
    var numEntered = prompt("Great! Please enter your number: ");
    if (isNum(numEntered) == !true) {
        evenOdd(numEntered);
        oneHunnit(numEntered);
        positiveNegative(numEntered);
    }
    else {
        alert(numEntered + " is not a number. Please try again later.. Goodbye!");
    }
}
else {
    alert("Alright! Maybe next time then!");
}

function isNum(numEntered) {
    return isNaN(numEntered);
}

function evenOdd(numEntered) {
    if(numEntered % 2 === 0) {
        alert("#" + numEntered + " is an EVEN number")
    }
    else {
        alert("#" + numEntered + " is an ODD number")
    }
}

function oneHunnit(numEntered) {
    alert ("Your number " + Number(numEntered) + " + 100 = " + (Number(numEntered) + 100));
}

function positiveNegative(numEntered) {
    if (numEntered > 0) {
        alert("Hey your number " + numEntered + " is a POSITIVE number. Yay!")
    }
    else {
        alert("Hey your number " + numEntered + " is a NEGATIVE number. Womp womp")
    }
}
