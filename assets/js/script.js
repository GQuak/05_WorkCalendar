// GIVEN I am using a daily planner to create a schedule

// WHEN I refresh the page
// THEN the saved events persist




//LUXON CODE
var DateTimeEl = document.querySelector(".DateTime");
var DateTime = luxon.DateTime;
var now = DateTime.local();
var timeBlock = 0;


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// dt.toLocaleString()      //=> '9/14/2017'
// dt.toLocaleString(DateTime.DATETIME_MED) //=> 'September 14, 3:21 AM'
console.log(now.toLocaleString(DateTime.DATETIME_MED))
DateTimeEl.textContent = now.toLocaleString(DateTime.DATETIME_MED);

//Appointment Text Variables
let eightAppointment;
let nineAppointment;
let tenAppointment;
let elevenAppointment;
let twelveAppointment;
let thirteenAppointment;
let fourteenAppointment;
let fifteenAppointment;
let sixteenAppointment;
let seventeenAppointment;


//Display Variables
var eightHourEl = document.getElementById("8hour");
var nineHourEl = document.getElementById("9hour");
var tenHourEl = document.getElementById("10hour");
var elevenHourEl = document.getElementById("11hour");
var twelveHourEl = document.getElementById("12hour");
var thirteenHourEl = document.getElementById("13hour");
var fourteenHourEl = document.getElementById("14hour");
var fifteenHourEl = document.getElementById("15hour");
var sixteenHourEl = document.getElementById("16hour");
var seventeenHourEl = document.getElementById("17hour");

//Button Variables
var eightBtn = document.querySelector(".lock8");
var nineBtn = document.querySelector(".lock9");
var tenBtn = document.querySelector(".lock10");
var elevenBtn = document.querySelector(".lock11");
var twelveBtn = document.querySelector(".lock12");
var thirteenBtn = document.querySelector(".lock13");
var fourteenBtn = document.querySelector(".lock14");
var fifteenBtn = document.querySelector(".lock15");
var sixteenBtn = document.querySelector(".lock16");
var seventeenBtn = document.querySelector(".lock17");


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//Update local storage with appointment text
eightBtn.addEventListener("click", function (event) {
    event.preventDefault();
    eightAppointment = document.getElementById("8hour").value;
    console.log(eightAppointment);
    localStorage.setItem('eight', JSON.stringify(eightAppointment));
});

nineBtn.addEventListener("click", function (event) {
    event.preventDefault();
    nineAppointment = document.getElementById("9hour").value;
    console.log(nineAppointment);
    localStorage.setItem('nine', JSON.stringify(nineAppointment));
});

tenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    tenAppointment = document.getElementById("10hour").value;
    console.log(tenAppointment);
    localStorage.setItem('ten', JSON.stringify(tenAppointment));
});

elevenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    elevenAppointment = document.getElementById("11hour").value;
    console.log(elevenAppointment);
    localStorage.setItem('eleven', JSON.stringify(elevenAppointment));
});

twelveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    twelveAppointment = document.getElementById("12hour").value;
    console.log(twelveAppointment);
    localStorage.setItem('twelve', JSON.stringify(twelveAppointment));
});

thirteenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    thirteenAppointment = document.getElementById("13hour").value;
    console.log(thirteenAppointment);
    localStorage.setItem('thirteen', JSON.stringify(thirteenAppointment));
});

fourteenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fourteenAppointment = document.getElementById("14hour").value;
    console.log(fourteenAppointment);
    localStorage.setItem('fourteen', JSON.stringify(fourteenAppointment));
});

fifteenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    fifteenAppointment = document.getElementById("15hour").value;
    console.log(fifteenAppointment);
    localStorage.setItem('fifteen', JSON.stringify(fifteenAppointment));
});

sixteenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    sixteenAppointment = document.getElementById("16hour").value;
    console.log(sixteenAppointment);
    localStorage.setItem('sixteen', JSON.stringify(sixteenAppointment));
});

seventeenBtn.addEventListener("click", function (event) {
    event.preventDefault();
    seventeenAppointment = document.getElementById("17hour").value;
    console.log(seventeenAppointment);
    localStorage.setItem('seventeen', JSON.stringify(seventeenAppointment));
});

function loadPage() {
    console.log("Load page");
    setBackground();
    recallAppointments();
}

function recallAppointments() {
    var local8 = JSON.parse(localStorage.getItem("eight"));
    var local9 = JSON.parse(localStorage.getItem("nine"));
    var local10 = JSON.parse(localStorage.getItem("ten"));
    var local11 = JSON.parse(localStorage.getItem("eleven"));
    var local12 = JSON.parse(localStorage.getItem("twelve"));
    var local13 = JSON.parse(localStorage.getItem("thirteen"));
    var local14 = JSON.parse(localStorage.getItem("fourteen"));
    var local15 = JSON.parse(localStorage.getItem("fifteen"));
    var local16 = JSON.parse(localStorage.getItem("sixteen"));
    var local17 = JSON.parse(localStorage.getItem("seventeen"));

    if (local8 !== null) {
        eightHourEl.textContent = local8;
    }
    if (local9 !== null) {
        nineHourEl.textContent = local9;
    }
    if (local10 !== null) {
        tenHourEl.textContent = local10;
    }
    if (local11 !== null) {
        elevenHourEl.textContent = local11;
    }
    if (local12 !== null) {
        twelveHourEl.textContent = local12;
    }
    if (local13 !== null) {
        thirteenHourEl.textContent = local13;
    }
    if (local14 !== null) {
        fourteenHourEl.textContent = local14;
    }
    if (local15 !== null) {
        fifteenHourEl.textContent = local15;
    }
    if (local16 !== null) {
        sixteenHourEl.textContent = local16;
    }
    if (local17 !== null) {
        seventeenHourEl.textContent = local17;
    }

}

function setBackground() {
    console.log("Set background");
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    if (now.hour >= 18) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "grey");
        $("#14hour").css("background-color", "grey");
        $("#15hour").css("background-color", "grey");
        $("#16hour").css("background-color", "grey");
        $("#17hour").css("background-color", "grey");
    }
    else if (now.hour >= 17) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "grey");
        $("#14hour").css("background-color", "grey");
        $("#15hour").css("background-color", "grey");
        $("#16hour").css("background-color", "grey");
        $("#17hour").css("background-color", "white");
    }
    else if (now.hour >= 16) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "grey");
        $("#14hour").css("background-color", "grey");
        $("#15hour").css("background-color", "grey");
        $("#16hour").css("background-color", "white");
    }
    else if (now.hour >= 15) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "grey");
        $("#14hour").css("background-color", "grey");
        $("#15hour").css("background-color", "white");
    }
    else if (now.hour >= 14) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "grey");
        $("#14hour").css("background-color", "white");
    }
    else if (now.hour >= 13) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "grey");
        $("#13hour").css("background-color", "white");
    }
    else if (now.hour >= 12) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "grey");
        $("#12hour").css("background-color", "white");
    }
    else if (now.hour >= 11) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "grey");
        $("#11hour").css("background-color", "white");
    }
    else if (now.hour >= 10) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "grey");
        $("#10hour").css("background-color", "white");
    }
    else if (now.hour >= 9) {
        $("#8hour").css("background-color", "grey");
        $("#9hour").css("background-color", "white");
    }
    else if (now.hour >= 8) {
        $("#8hour").css("background-color", "white");
    }
}
loadPage();

