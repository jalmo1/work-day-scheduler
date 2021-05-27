var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDate);
console.log(currentDate);
var currentTime = moment().format("h:mm a");
console.log(currentTime);
$("#currentTime").append(currentTime);
//var timeRn = function timeBlockColors() {};
