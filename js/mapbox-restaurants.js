mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    center: [-96.79799, 32.78344],
    zoom: 10,
});

//Marker

var marker = new mapboxgl.Marker({
    draggable: true,
    color: 'purple',
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

var restaurant2 = new mapboxgl.Marker({
    draggable: true,
    color: 'purple',
})
    .setLngLat([-96.80558033798484, 32.78942756558902])
    .addTo(map);

//pop-up
var popup = new mapboxgl.Popup()
    .setLngLat([-96.80572035809392 , 32.778958453506924,])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map);

// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// let searchString = prompt("What would you like to see?");

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
// geocode(searchString , mapBoxToken).then(function (result){
//     console.log(result);
//     //map.setCenter(result);
//     map.flyTo({center: result, zoom: 14, speed: 0.8, curve:1});
//     //map.setZoom(15);
//     marker.setLngLat(result);
//
//     reverseGeocode(result, mapBoxToken).then(function (placeName){
//         popup.setText(placeName);
//         marker.setPopup(popup);
//     })
// })