// rootEl = $('header');
// currentDayEl = $('#currentDay');

var currentDate = moment().format("MM/DD/YY");



function searchCity(cityname) {
    console.log(cityname);
    var apiID = "88fdcdec94c3beffa0f9c94f001ea9f7";

    // var cityname = (($(this).parent()).siblings(".cityInput")).val();
    // empty search bar with setTimeout() so the City name is not gonna stuck on input section
    //Query for Current Weather Using API URL And Ajax 
    var firstQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityname + "&units=imperial&appid=" +apiID;
    $.ajax({
        url: firstQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

});
}



function displayCity(){

    $(".btn").click(function(){
        $('.cityName').text($('.cityInput').val());
        $('.timeId').text(currentDate);

        var cityName =$('.cityInput').val();
        // console.log(cityName);
        searchCity(cityName);
        // console.log("clicked");
        // console.log($('.cityInput').val());
    });
    
}

displayCity();

