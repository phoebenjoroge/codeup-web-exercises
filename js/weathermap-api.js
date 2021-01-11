
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
         // console.log(data.city.name );

        $("#updateCity").html("<p>" + '<strong>'+ 'Current City: ' + '</strong>' + data.city.name  + "</p>");


    });

    var marker = new mapboxgl.Marker({
        draggable: true,
        color: 'purple',
    })
        .setLngLat([latitude, longitude])
        .addTo(map);


    marker.on('dragend', function (e){
        // console.log(e);

        geocode(search , mapBoxToken).then(function (result) {
            console.log(result);
            var latitude = result[0];
            var longitude = result[1];

            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: longitude,
                lon: latitude,
                units: "imperial"
            }).done(function (data) {
                console.log(data);
                $("#updateCity").html("<p>" + '<strong>' + 'Current City: ' + '</strong>' + data.city.name + "</p>");
                // for (var i = 0; i < data.list.length; i= i+8) {
                //
                //     var content =
                //         "<p>" + '<u>' + data.list[i].dt_txt + '</u>' + "</p>" +
                //         "<p>" + '<strong>' + data.list[i].main.temp_min + ' / ' + data.list[i].main.temp_max + '</strong>' + "</p>" +
                //         '<img src="http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png" width="50" height="50" />' +
                //         "<p>" + 'Description: ' + '<strong>' + data.list[i].weather[0].description + '</strong>' + "</p>" +
                //         "<p>" + 'Humidity: ' + '<strong>' + data.list[i].main.humidity + '</strong>' + "</p>" +
                //         "<p>" + 'Wind: ' + '<strong>' + data.list[i].wind.speed + '</strong>' + "</p>" +
                //         "<p>" + 'Pressure: ' + '<strong>' + data.list[i].main.pressure + '</strong>' + "</p>"+
                //         '<br>'
                //     $('.card').append(content)
                //
                //
                // }
            })
        })

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

    $(".button").click(function(e){
        e.preventDefault()
        let searchString = $(".searchValue").val();

        geocode(searchString , mapBoxToken).then(function (result){
            console.log(searchString);
            // console.log(result);
            //map.setCenter(result);

            //weather update
            var latitude = result[0]
            var longitude = result[1]
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: longitude,
                lon: latitude,
                units: "imperial"
            }).done(function (data) {
                // console.log(data.city.name);
                $("#updateCity").html("<p>" + '<strong>'+ 'Current City: ' + '</strong>' + data.city.name  + "</p>");

                dayInfo(data);
            });

            map.flyTo({center: result, zoom: 7, speed: 0.9, curve:1});
            // map.setZoom(10);
            marker.setLngLat(result);

            // reverseGeocode(result, mapBoxToken).then(function (placeName){
            //     popup.setText(placeName);
            //     marker.setPopup(popup);
            // })
        })



    });


})