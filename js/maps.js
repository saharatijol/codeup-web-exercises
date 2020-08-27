// console.log(secret);

// mapboxgl.accessToken = MAPBOX_TOKEN;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/navigation-guidance-day-v4', // stylesheet location
//     center: [-98.491142, 29.424349], // starting position [lng, lat]
//     zoom: 12 // starting zoom
// });
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4843385, 29.4328113]
});

// the  geocode method from mapbox-geocoder-utils.js
geocode("502 Brooklyn Ave, San Antonio, Texas 78215", MAPBOX_TOKEN).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(20);
});



var homeMarker = new mapboxgl.Marker()
    .setLngLat([-98.4805879, 29.4952825])
    .addTo(map); // add the marker to the map

var favResto = new mapboxgl.Marker()
    .setLngLat([-98.4843385, 29.4328113])
    .addTo(map); // add the marker to the map

