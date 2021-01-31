



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

//LUXON CODE
var DateTimeEl = document.querySelector(".DateTime");
var DateTime = luxon.DateTime;
var now = DateTime.local();
var timeBlock = 0;

// dt.toLocaleString()      //=> '9/14/2017'
// dt.toLocaleString(DateTime.DATETIME_MED) //=> 'September 14, 3:21 AM'
console.log(now.toLocaleString(DateTime.DATETIME_MED))
DateTimeEl.textContent = now.toLocaleString(DateTime.DATETIME_MED);


function loadPage() {
    for (i = 8; i < 18; i++) {
        //Creating elements to display on the page
        timeBlock = i;
        var image = "<img src='assets/images/White-Lock-Black-Background.png' alt='Lock Calendar Appointment' width='70px;' height='70px' class='center'>"
        var container = $('<div />');

        //creat row, then
        container.append("<p>'timeBlock'</p>");

        // for (var i = 1; i <= num; i++) {
        //     container.append('<input id="id' + i + '" name="name' + i + '" />');


        //     console.log('<input id="id' + i + '" name="name' + i + '" />');
        //     //check time vs actual time and assign class based on relation
        // }
    }

}

loadPage(timeBlock);

