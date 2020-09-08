"use strict";



var newArray = [];
$(document).keyup(function(event){
    console.log(event.keyCode);
    const key = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13] // limit user to enter 11 chars
    newArray.push(event.keyCode);
    console.log(newArray);
    
    for (var i = 0; i < key.length; i++) {
        
        
    }
});







