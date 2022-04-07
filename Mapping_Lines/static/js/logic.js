// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [44.6365, -123.1059],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
dashArray: '5'
}).addTo(map);
// Get data from cities.js
let cityData = cities;


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {radius: city.population/100000, color: 'orange', weight: 4})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + (city.population).toLocaleString() + "</h3>")
  .addTo(map);
});
//  circle.setStyle({color: 'black', fillColor: 'lightYellow'});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Then we add our 'graymap' tile layer to the map.

streets.addTo(map);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
