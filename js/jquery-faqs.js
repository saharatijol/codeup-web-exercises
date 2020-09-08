'use strict';

$('document').ready(function() {
    $('h2').click(function(event) {
        //event.preventDefault();
        $('dd').toggleClass('invisible')
    });

    $('dt').click(function(event) {
        //event.preventDefault();
        $(this).toggleClass('highlighted')
    });


});