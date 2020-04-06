$(document).ready(function() {
$(".saveBtn").on("click", function() {

    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, description);
});

//function to update by hour and track time
function timeTrack() {
    var hourNow = moment().hours();

    //use forEach function to loop over your time blocks
    $(".time-block").each(function() { 
        var timeFrame = parseInt($(this).attr("id"));
        if (timeFrame < hourNow) {
            $(this).addClass("past");
        }
        else if (timeFrame === hourNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else { 
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
    }
});
}
timeTrack();
//call all hours in jquery
var interval = setInterval(timeTrack, 20000);

//load data from local storage
$('#9 .description').val(localStorage.getItem("9"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
});