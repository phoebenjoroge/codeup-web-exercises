$(document).ready(function () {

    var location = [-96.79799, 32.78344]
    let latitude = location[0]
    let longitude = location[1]

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: longitude,
        lon: latitude,
        units: "imperial"
    }).done(function dayInfo(data) {
        // console.log(data);

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

        // $('.card').html(content);



        $("#day1").html(
            "<p>" + '<u>' + data.list[0].dt_txt + '</u>' + "</p>" +
            "<p>" + '<strong>' + data.list[0].main.temp_min + ' / ' + data.list[0].main.temp_max + '</strong>' + "</p>" +
            '<img src="http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" width="50" height="50" />' +
            "<p>" + 'Description: ' + '<strong>' + data.list[0].weather[0].description + '</strong>' + "</p>" +
            "<p>" + 'Humidity: ' + '<strong>' + data.list[0].main.humidity + '</strong>' + "</p>" +
            "<p>" + 'Wind: ' + '<strong>' + data.list[0].wind.speed + '</strong>' + "</p>" +
            "<p>" + 'Pressure: ' + '<strong>' + data.list[0].main.pressure + '</strong>' + "</p>"
        )

        $("#day2").html(
            "<p>" + '<u>' + data.list[8].dt_txt + '</u>' + "</p>" +
            "<p>" + '<strong>' + data.list[8].main.temp_min + ' / ' + data.list[8].main.temp_max + '</strong>' + "</p>" +
            '<img src="http://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '@2x.png" width="50" height="50" />' +
            "<p>" + 'Description: ' + '<strong>' + data.list[8].weather[0].description + '</strong>' + "</p>" +
            "<p>" + 'Humidity: ' + '<strong>' + data.list[8].main.humidity + '</strong>' + "</p>" +
            "<p>" + 'Wind: ' + '<strong>' + data.list[8].wind.speed + '</strong>' + "</p>" +
            "<p>" + 'Pressure: ' + '<strong>' + data.list[8].main.pressure + '</strong>' + "</p>"
        )

        $("#day3").html(
            "<p>" + '<u>' + data.list[16].dt_txt + '</u>' + "</p>" +
            "<p>" + '<strong>' + data.list[16].main.temp_min + ' / ' + data.list[16].main.temp_max + '</strong>' + "</p>" +
            '<img ++ src="http://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '@2x.png" width="50" height="50"  />' +
            "<p>" + 'Description: ' + '<strong>' + data.list[16].weather[0].description + '</strong>' + "</p>" +
            "<p>" + 'Humidity: ' + '<strong>' + data.list[16].main.humidity + '</strong>' + "</p>" +
            "<p>" + 'Wind: ' + '<strong>' + data.list[16].wind.speed + '</strong>' + "</p>" +
            "<p>" + 'Pressure: ' + '<strong>' + data.list[16].main.pressure + '</strong>' + "</p>"
        )

        $("#day4").html(
            "<p>" + '<u>' + data.list[24].dt_txt + '</u>' + "</p>" +
            "<p>" + '<strong>' + data.list[24].main.temp_min + ' / ' + data.list[24].main.temp_max + '</strong>' + "</p>" +
            '<img src="http://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '@2x.png" width="50" height="50" />' +
            "<p>" + 'Description: ' + '<strong>' + data.list[24].weather[0].description + '</strong>' + "</p>" +
            "<p>" + 'Humidity: ' + '<strong>' + data.list[24].main.humidity + '</strong>' + "</p>" +
            "<p>" + 'Wind: ' + '<strong>' + data.list[24].wind.speed + '</strong>' + "</p>" +
            "<p>" + 'Pressure: ' + '<strong>' + data.list[24].main.pressure + '</strong>' + "</p>"
        )
        $("#day5").html(
            "<p>" + '<u>' + data.list[32].dt_txt + '</u>' + "</p>" +
            "<p>" + '<strong>' + data.list[32].main.temp_min + ' / ' + data.list[32].main.temp_max + '</strong>' + "</p>" +
            '<img src="http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '@2x.png" width="50" height="50" />' +
            "<p>" + 'Description: ' + '<strong>' + data.list[32].weather[0].description + '</strong>' + "</p>" +
            "<p>" + 'Humidity: ' + '<strong>' + data.list[32].main.humidity + '</strong>' + "</p>" +
            "<p>" + 'Wind: ' + '<strong>' + data.list[32].wind.speed + '</strong>' + "</p>" +
            "<p>" + 'Pressure: ' + '<strong>' + data.list[32].main.pressure + '</strong>' + "</p>"
        )


    })
})