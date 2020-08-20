(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun")
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto")
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun")
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto")
    console.log(planets);

    planets.indexOf("Earth")
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"))

    console.log("Reversing the order of the planets array.");
    planets.reverse()
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort()
    console.log(planets);
})();


// var students = [
//     'Mando Salazar',
//     'Audie Brattin',
//     'Blossom Perez',
//     'Caleb Wheeler',
//     'Chris Parker',
//     'Cory Holley',
//     'Cruzanio Villarreal',
//     'Damien Salazar',
//     'Donelle Harris',
//     'Eric Rencehausen',
//     'Li Wang',
//     'Michael Satterfield',
//     'Michael Troia',
//     'Patrick Larkin',
//     'Roberto Cuyar',
//     'Rocco Paccione',
//     'Ryan Kendall',
//     'Sahara Tijol',
//     'Sedgwick House'
// ];
//
// console.log(battleRoyal(students));
//
// function battleRoyal(students) {
//     for(var i = students.length-1;i>=0;i--){
//         students.splice(Math.floor(Math.random()*students.length), 1);
//         console.log(students);
//     }
// } 