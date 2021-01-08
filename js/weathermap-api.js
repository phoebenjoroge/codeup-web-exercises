
$(document).ready(function (){
    mapboxgl.accessToken = mapBoxToken;
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }

    var location=[-96.79799, 32.78344]
    let latitude = location[0]
    let longitude = location[1]

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        center: [latitude, longitude],
        zoom: 10,
        dragRotate: true
    });



    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: longitude,
        lon: latitude,
        units: "imperial"
    }).done(function(data) {
        // console.log(data );




    });

    // var marker = new mapboxgl.Marker({
    //     draggable: true,
    //     color: 'purple',
    // })
    //     .setLngLat([latitude, longitude])
    //     .addTo(map);






    $(".button").click(function(e){
        e.preventDefault()
        let searchString = $("#inputAddress").val();

        geocode(searchString , mapBoxToken).then(function (result){
            console.log(result);
            //map.setCenter(result);
            map.flyTo({center: result, zoom: 10, speed: 0.8, curve:1});
            // map.setZoom(10);
            marker.setLngLat(result);

            // reverseGeocode(result, mapBoxToken).then(function (placeName){
            //     popup.setText(placeName);
            //     marker.setPopup(popup);
            // })
        })



    });

})