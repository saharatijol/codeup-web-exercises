/*-----------While Loop -------------*/
function whileLoop() {
    var i = 1;

    while (i < 65537) {
        console.log(i);
        i *= 2;
    }
}

//whileLoop();

/*------------------------- Do-While Loop -----------------------------*/

// TODO: An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

//* This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;

//* This expression will generate a random number between 1 and 5
// var amntCones = Math.floor(Math.random() * 5) + 1;

//! Output should be similar to the following:
//* 5 cones sold...  // if there are enough cones
//* Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//* Yay! I sold them all! // If there are no more cones

function doWhile () {
    var allCones = Math.floor(Math.random() * 50) + 50;
    // var remainingCones = allCones - amntCones;
    do {
        console.log(`I have ${allCones} cones`)
        var amntCones = Math.floor(Math.random() * 5) + 1;
        console.log(`Customer bought ${amntCones} cones`);
        if(allCones - amntCones < 0) {
            console.log(`I cannot sell you ${amntCones} I only have ${allCones}`)
            console.log(`Customer bought remaining ${allCones} cones`)
            allCones = 0;
        }
        else {
            allCones -= amntCones;
            console.log(`I now have ${allCones} left over`);
        }
    } while (allCones > 0);
    console.log('Yay! I sold them all!')

}

// doWhile();