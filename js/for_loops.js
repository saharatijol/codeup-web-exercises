'use strict';

// function returnMultiplicationTable(input) {
//     var output = "";
//     for (var i = 1 ; i <= 10 ; i++) {
//         output = input + " x " + i + " = " + (input*i);
//     }
//     return output;
// }
//
// returnMultiplicationTable(7);

function returnMultiplicationTable(input) {
    let output = ''
    for (let i=0; i < 10; i++) {
        output += input + "" + " x " + i + " = " + (input*i)
        if (i !== 9) output += '\n'
    }
    return output;
}
// console.log(exampleOfRetruningFromLoop)
// console.log(returnMultiplicationTable(7))