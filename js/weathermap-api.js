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

    //Function for adding data to card
    function dayInfo(data) {
        console.log(data);

        for (var i = 0; i < data.list.length; i = i + 8) {

            var content =
                `    <div class ='card'">
                     <p> <u>  ${data.list[i].dt_txt} </u> </p>
                     <p><strong> ${data.list[i].main.temp_min} / ${data.list[i].main.temp_max}  </strong></p>
                     <img src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png"/>
                     <p><strong> Description: </strong>${data.list[i].weather[0].description}  </p>
                     <p><strong> Humidity: </strong>${data.list[i].main.humidity}  </p>
                     <p><strong> Wind: </strong>${data.list[i].wind.speed} </p>
                     <p><strong> Pressure: </strong>${data.list[i].main.pressure} </p>
                     </div>
              `
            $('.addCard').append(content)

        }
    }
    //Function to fetch map API, set location and update city name
    function updateMap(latitude, longitude){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: longitude,
            lon: latitude,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            $("#updateCity").html("<p>" + '<strong>'+ 'Current City: ' + '</strong>' + data.city.name  + "</p>");
            dayInfo(data);

        })
    }
    //Set initial Location for Map API & Weather API
    var location=[-96.79799, 32.78344]
    let initialLatitude = location[0]
    let initialLongitude = location[1]
    updateMap(initialLatitude, initialLongitude);

    //Fetch Map from API
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        center: [initialLatitude, initialLongitude],
        zoom: 10,
        dragRotate: true
    });

    //Create Marker
    var marker = new mapboxgl.Marker({
        draggable: true,
        color: 'purple',
    })
        .setLngLat([initialLatitude, initialLongitude])
        .addTo(map);


    //Search for city and update Map and Card with info
    $(".button").click(function(e){
        e.preventDefault()
        let searchString = $(".searchValue").val();

        geocode(searchString , mapBoxToken).then(function (result){

            console.log(result);
            //map.setCenter(result);

            //weather update
            var searchLatitude = result[0]
            var searchLongitude = result[1]
            updateMap(searchLatitude, searchLongitude)

            map.flyTo({center: result, zoom: 7, speed: 0.9, curve:1});
            // map.setZoom(10);
            marker.setLngLat(result);

            // reverseGeocode(result, mapBoxToken).then(function (placeName){
            //     popup.setText(placeName);
            //     marker.setPopup(popup);
            // })
        })

    });

    //Code for updating map on drag
    marker.on('dragend', function (result){

        console.log(result.target._lngLat);
        var dragLatitude = result.target._lngLat.lat;
        var dragLongitude= result.target._lngLat.lng;
        // console.log(result);

        updateMap(dragLatitude, dragLongitude)

    })

    // var updateMarker;
    // map.on('click', function(e) {
    //     updateMarker =new mapboxgl.Marker({
    //         draggable: true,
    //         color: 'purple',
    //     })
    //         .setLngLat([latitude, longitude])
    //         .addTo(map);
    //     console.log(e);
    // })
})