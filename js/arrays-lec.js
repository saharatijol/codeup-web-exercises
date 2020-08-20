//Array

/*Remember: a string is actually an array of characters
but javascript doesn't necessarily look at it that way*/

// var something = "3";
// var newArray = [1, true, "three"];

var students = [
    'Mando Salazar',
    'Audie Brattin',
    'Blossom Perez',
    'Caleb Wheeler',
    'Chris Parker',
    'Cory Holley',
    'Cruzanop Villareal',
    'Damien Salazar',
    'Donelle Harris',
    'Eric Rencehausen',
    'Li Wang',
    'Michael Satterfield',
    'Michael Troia',
    'Patrick Larkin',
    'Roberto Cuyar',
    'Rocco Paccione',
    'Ryan Kendall',
    'Sahara Tijol',
    'Sedgwick House',
];

//console.log(students);

//How to list all the items in the array//

for (var i = 0; i < students.length; i++) {
    console.log((i+1) + ": " + students[i]);
}

var pets = [
    'Tex the Australian Cattle Dog',
    'Charlie the Australian Labradoodle',
    'Bexter the Crack Dog',
    'John Rambo the Pit Bull',
    'Chewbie the Yorkie Mix',
    'Diana the Backyard Chicken',
    'Smore the Pit Bull Bull Mastiff',
    'Yoga the Chihuahua',
];

//console.log(students.length)
// console.log(pets.length);
//
// console.log(pets[3] + " belongs with " + students[18]);

/* For-Each Loop Demo - This will also list items in the array */
pets.forEach(
    function(pet, index) {
    console.log((index+1) + ": " + pet);
})


var daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

for (var i = 0 ; i < daysOfTheWeek.length ; i++) {
    console.log(daysOfTheWeek[i]);
}

//var today = daysOfTheWeek[3];
//console.log(today);

/* You can also have a function inside an array */

