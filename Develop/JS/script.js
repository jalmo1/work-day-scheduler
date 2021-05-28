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
save9.addEventListener("click", function nineAm() {
  var userTxt = document.querySelector("#textArea9").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea9", userTxt);
  }
});

//save 10am to local storage
save10.addEventListener("click", function tenAm() {
  var userTxt = document.querySelector("#textArea10").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea10", userTxt);
  }
});

// save 11am to local storage
save11.addEventListener("click", function elevenAm() {
  var userTxt = document.querySelector("#textArea11").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea11", userTxt);
  }
});

//save 12pm to local storage
save12.addEventListener("click", function twelvePm() {
  var userTxt = document.querySelector("#textArea12").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea12", userTxt);
  }
});

// save 1pm to local storage
save1.addEventListener("click", function onePm() {
  var userTxt = document.querySelector("#textArea1").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea1", userTxt);
  }
});

//save 2pm to local storage
save2.addEventListener("click", function twoPm() {
  var userTxt = document.querySelector("#textArea2").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea2", userTxt);
  }
});

//save 3pm to local storage
save3.addEventListener("click", function threePm() {
  var userTxt = document.querySelector("#textArea3").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea3", userTxt);
  }
});

//save 4pm to local storage
save4.addEventListener("click", function fourPm() {
  var userTxt = document.querySelector("#textArea4").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea4", userTxt);
  }
});

//save 5pm to local storage
save5.addEventListener("click", function fivePm() {
  var userTxt = document.querySelector("#textArea5").value;

  if (userTxt === "") {
    window.alert("Cannot save an empty time block");
  } else {
    window.alert("Saved your event");
    localStorage.setItem("textArea5", userTxt);
  }
});

// saves user input to the text area when the page refreshes
function loadItem9() {
  var ta9 = document.querySelector("#textArea9");
  ta9.value = localStorage.getItem("textArea9");
}

loadItem9();

function loadItem10() {
  var ta10 = document.querySelector("#textArea10");
  ta10.value = localStorage.getItem("textArea10");
}

loadItem10();

function loadItem11() {
  var ta11 = document.querySelector("#textArea11");
  ta11.value = localStorage.getItem("textArea11");
}

loadItem11();

function loadItem12() {
  var ta12 = document.querySelector("#textArea12");
  ta12.value = localStorage.getItem("textArea12");
}

loadItem12();

function loadItem1() {
  var ta1 = document.querySelector("#textArea1");
  ta1.value = localStorage.getItem("textArea1");
}

loadItem1();

function loadItem2() {
  var ta2 = document.querySelector("#textArea2");
  ta2.value = localStorage.getItem("textArea2");
}

loadItem2();

function loadItem3() {
  var ta3 = document.querySelector("#textArea3");
  ta3.value = localStorage.getItem("textArea3");
}

loadItem3();

function loadItem4() {
  var ta4 = document.querySelector("#textArea4");
  ta4.value = localStorage.getItem("textArea4");
}

loadItem4();

function loadItem5() {
  var ta5 = document.querySelector("#textArea5");
  ta5.value = localStorage.getItem("textArea5");
}

loadItem5();
