// rootEl = $('header');
// currentDayEl = $('#currentDay');

var currentDate = moment().format("MM/DD/YY");



function getWeatherInfo(cityname) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=88fdcdec94c3beffa0f9c94f001ea9f7";
    fetch(
        // Make a fetch request using city name to get latitude and longitude for city
        apiUrl
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // Create variables to hold the latitude and longitude of requested city
            var currentIcon = response.weather[0].icon;
            var iconURl = "http://openweathermap.org/img/w/" + currentIcon + ".png"
            console.log(iconURl);
            
            $('.currentTemp').text("Temperature: "+response.main.temp + " °F");
            $('.currentWind').text("Wind: " + response.wind.speed + " MPH" );
            $('.currentHumidity').text("Humidity: " + response.main.humidity + " %");
            $('#weatherIcon').attr({"src":iconURl,"alt":"Current Weather Icon"});

            console.log(response)
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;


            // Return a fetch request to the OpenWeather using longitude and latitude from pervious fetch
            return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=alerts,minutely,hourly&units=imperial&appid=f97301447cbd41068af8623a398ba1fb');
        })
        .then(function (response) {
            // return response in json format
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            // send response data to displayWeather function for final display 
            // displayWeather(response);
            var days = [];

            for(var i=0; i<6; i++){
                days[i] = response.daily[i].dt;
             }

             days = days.filter(item => item);
             // convert, extract, display:
             for (i = 0; i < days.length; i++) {
                 // first convert each index to moment Using Unix
                 days[i] = moment.unix(days[i]);
                 // Change date format 
                 days[i] = days[i].format("MM/DD/YY");
                 // display dates in HTML
                 $("#day" + i).text(days[i]);
             }
             console.log(days);

        });
};


function displayCity(){

    $(".btn").click(function(){
        $('.cityName').text($('.cityInput').val());
        $('.timeId').text(currentDate);

        var cityName =$('.cityInput').val();
        // console.log(cityName);
        // searchCity(cityName);
        getWeatherInfo(cityName);
        // console.log("clicked");
        // console.log($('.cityInput').val());
    });
    
}

displayCity();


