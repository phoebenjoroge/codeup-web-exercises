// $(document).ready(function () {
//     console.log("I am here");
//     var location = [-96.79799, 32.78344]
//     let latitude = location[0]
//     let longitude = location[1]
//
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: OPEN_WEATHER_APPID,
//         lat: longitude,
//         lon: latitude,
//         units: "imperial"
//     }).done(function dayInfo(data) {
//         console.log(data);
//
//         for (var i = 0; i < data.list.length; i= i+8) {
//
//             var content =
//                 `    <div class ='card'">
//                      <p> <u>  ${data.list[i].dt_txt} </u> </p>
//                      <p><strong> ${data.list[i].main.temp_min} / ${data.list[i].main.temp_max}  </strong></p>
//                      <img src="http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png"/>
//                      <p><strong> Description: ${data.list[i].weather[0].description}  </strong></p>
//                      <p><strong> Humidity: ${data.list[i].main.humidity}  </strong></p>
//                      <p><strong> Wind: ${data.list[i].wind.speed}  </strong></p>
//                      <p><strong> Pressure: ${data.list[i].main.pressure}  </strong></p>
//                      </div>
//               `
//             $('.addCard').append(content)
//
//
//         }
//
//     })
// })