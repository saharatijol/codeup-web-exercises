
/*--------- Break and Continue Exercise -------*/
function skipNumber(skipNum) {
    var skipNum = prompt('Enter a number from 1 - 50:');
    //console.log(skipNum);
    for (let i = 1; i < 50; i++) {
        if (i === parseInt(skipNum)) {
            console.log(`Yikes! Skipping this number: ${skipNum}`);
            continue;
        }
        else if (i % 2 === 1) {
            console.log(`Here is an odd number: ${i}`);
        }
    }
}
//skipNumber(skipNum);




