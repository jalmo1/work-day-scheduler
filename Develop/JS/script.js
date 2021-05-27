var save9 = document.getElementById("save9am");
var save10 = document.getElementById("save10am");
var save11 = document.getElementById("save11am");
var save12 = document.getElementById("save12pm");
var save1 = document.getElementById("save1pm");
var save2 = document.getElementById("save2pm");
var save3 = document.getElementById("save3pm");
var save4 = document.getElementById("save4pm");
var save5 = document.getElementById("save5pm");

var saveBtn = document.querySelector("#saveBtn");
var userInput = document.querySelector("#text");
//shows current date on top of the page
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDate);
//shows current time on top of page
var currentTime = moment().format("h:mm a");
$("#currentTime").append(currentTime);
// gets the current time
var timeRn = new Date().getHours();
console.log(timeRn);

// save 9am to local storage
save9.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea9").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea9", userTxt);
  }
});

//save 10am to local storage
save10.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea10").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea10", userTxt);
  }
});

// save 11am to local storage
save11.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea11").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea11", userTxt);
  }
});

//save 12pm to local storage
save12.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea12").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea12", userTxt);
  }
});

// save 1pm to local storage
save1.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea1").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea1", userTxt);
  }
});

//save 2pm to local storage
save2.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea2").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea2", userTxt);
  }
});

//save 3pm to local storage
save3.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea3").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea3", userTxt);
  }
});

//save 4pm to local storage
save4.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea4").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea4", userTxt);
  }
});

//save 5pm to local storage
save5.addEventListener("click", function () {
  var userTxt = document.querySelector("#textArea5").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea5", userTxt);
  }
});
