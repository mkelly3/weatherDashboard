// rootEl = $('header');
// currentDayEl = $('#currentDay');

// function showProject() {
//     var timerId = setInterval(function() {
//         currentDayEl.text(moment().format('dddd, MMMM Do hh:mm:ss'));
//         /* never clear this interval ? */
//     }, 1000);
// }

// $('document').ready(showProject);


function displayCity(){

    $(".btn").click(function(){
        $('.cityName').text($('.cityInput').val());
        console.log("clicked");
        console.log($('.cityInput').val());
    });
    
}

displayCity();