"use strict";



// ID Selector
// var contents = $('#codeup').html();
// alert(contents);

// Class Selector
// $('.important').css('background-color', 'yellow');
//
// // Element Selector
// $('p').css('font-size', '14px');
//
// // Multiple Selectors
// $('.important, p').css('background-color', '#FF0');
//
// // All Selector
// $('*').css('border', '1px solid #F00');

//Mini Labs in class

// Changing HTML contents
// (function() {
//     "use strict";
//     $().ready(function() {
//         var contents = $('#change').html();
//         $('#change').html('<h1>jQuery Rocks!!</h1>')
//         alert(contents);
//     });
// })();

// Change styling
// (function() {
//     "use strict";
//     $().ready(function() {
//         $('.important').css('background-color', '#ff0')
//         $('.not-important').css('background-color', '#0f0')
//     });
// })();

// Element Selector in class
// (function() {
//     "use strict";
//     $().ready(function() {
//         $('p').css('font-size', '28px')
//         $('h3').css('color', '#f00')
//     });
// })();

// Multiple Selectors
(function() {
    "use strict";
    $().ready(function() {
        $('.important p').css('background-color', '#ff0')
        $('h1, h2').css('background-color', '#00f')
    });
})();



// $(document).ready(function() {
//     alert("The DOM has finished loading!");
// });