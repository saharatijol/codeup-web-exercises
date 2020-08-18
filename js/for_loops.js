'use strict';

function returnMultiplicationTable(input) { //i don't understand. Help
    let output = ''
    for (let i = 1; i < 11; i++) {
        output += input + "" + " x " + i + " = " + (input*i) // shorthand output +=
        if (i !== 10) {
            output += '\n' //shorthand output +=
        }
    }
    return output;
}
// (returnMultiplicationTable(7)
// console.log(returnMultiplicationTable(7))

function returnEvenOddMessage(num) {
    if (num % 2 === 0) {
        return String(num) + " is even";
    }
    else {
        return String(num) + " is odd";
    }
}

function returnTenEvenOddMessages() { //how to return and get it to pass tests?
    for(let i = 1; i < 11 ; i++) {
       var randomNum = Math.floor(Math.random() * 180) + 20;
       if (randomNum % 2 === 0) {
           console.log(randomNum + " is " +  " even");
       }
       else {
           console.log(randomNum + " is " + " odd");
       }
   }
}

function returnNumberSail(stringNum) { // what happened?
    for (let i = 1; i < 10; i++) {
        console.log(("" + i).repeat(i));
    }
}
console.log(returnNumberSail);


function returnCountDownFrom100InFives() { // how to return instead of console.log
    for(let i = 100; i > 4 ; i-=5) {
        console.log(i);
    }
}
//console.log(returnCountDownFrom100InFives());












