// rootEl = $('header');
// currentDayEl = $('#currentDay');


function displayCity(){

    $(".btn").click(function(){
        $('.cityName').text($('.cityInput').val());
        console.log("clicked");
        console.log($('.cityInput').val());
    });
    
}

displayCity();

