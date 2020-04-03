$(document).ready(function() {
$("saveBtn").on("click", function() {
    var description = $(this).sibling(".description").val();
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


$('#9am .description').val(localStorage.getItem("9am"));
$('#10am .description').val(localStorage.getItem("10am"));
$('#11am .description').val(localStorage.getItem("11am"));
$('#12pm .description').val(localStorage.getItem("12pm"));
$('#1pm .description').val(localStorage.getItem("1pm"));
$('#2pm .description').val(localStorage.getItem("2pm"));
$('#3pm .description').val(localStorage.getItem("3pm"));
$('#4pm .description').val(localStorage.getItem("4pm"));
$('#5pm .description').val(localStorage.getItem("5pm"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
});