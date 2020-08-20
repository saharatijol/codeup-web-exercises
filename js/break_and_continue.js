
//////////// Break and Continue ////////////

var numEntered = prompt("Enter an odd number between 1 - 50: ");

while (isNaN(numEntered) || (numEntered%2 === 0)){
    numEntered = prompt("Enter an odd number between 1 - 50: ");
}
console.log("Number to skip is: " + numEntered)

for (let i = 1; i < 50; i++) {
    if (i == numEntered) {
        console.log("Yikes! Skipping that number: " + numEntered);
        continue;
    }
    else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i++);
    }
}



// if (i % 2 !== 0) {
