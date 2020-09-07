'use strict';

// TODO: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        let multiply = num * i;
        console.log(`${num} X ${i} = ${multiply}`);
    }
}

// TODO: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// * Better Version: Divide the work by creating function
function randomNumber() {
    return Math.floor(Math.random() * (200 - 20 + 1)) + 20;
}

function isNumberEven(num) {
    var result = 'is odd';
    if (num % 2 === 0) {
        result = 'is even';
    }
    return result;
}

function oddEvenMessageV2() {
    console.time('oddEvenMessageV2');
    for (let i = 0; i < 10; i++) {
        let random = randomNumber();
        console.log(`${random} ${isNumberEven(random)}`);
    }
    console.timeEnd('oddEvenMessageV2'); //* Checks speed of execution in ms
}
//oddEvenMessageV2();

// * Shorter Version
function oddEvenMessageV1() {
    console.time('oddEvenMessageV1');
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        if (random % 2 === 0) {
            console.log(`${random} is even`);
        } else {
            console.log(`${random} is odd`);
        }
    }
    console.timeEnd('oddEvenMessageV1'); // * check speed of execution in ms
}
//oddEvenMessageV1();

// TODO: Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
function numberSail() {
    for (let i = 1; i < 10; i++) {
        console.log(("" + i).repeat(i));
    }
}
//numberSail();

// TODO: Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
function countDown() {
    for (let i = 100; i > 0; i-=5) {
        console.log(i);
    }
}
//countDown();















