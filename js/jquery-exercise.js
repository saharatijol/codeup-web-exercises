"use strict";

/*------------ Selectors Exercise -----------*/
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
// var contents = $('#top').html();
// alert(contents);
//
// var border = $('.codeup').css('border', '2px solid #000');


// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', '#FFFF00')
//
// var contents = $('h1').html();
// alert(contents);

/*----------- Mouse Events Exercise --------*/
$('h1').click(function() {
   $(this).css('background-color', '#0f0');
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', '#f00')
    },
    function() {
        $(this).css('color', '#000')
    }
);



