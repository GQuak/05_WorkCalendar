



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

// dt.toLocaleString()      //=> '9/14/2017'
// dt.toLocaleString(DateTime.DATETIME_MED) //=> 'September 14, 3:21 AM'
console.log(now.toLocaleString(DateTime.DATETIME_MED))
DateTimeEl.textContent = now.toLocaleString(DateTime.DATETIME_MED);

//STUDY GROUP CODE
// let hourRightNow = moment()
// // start the hour at 8
// let hoursOfTheDay = moment().hours(8)
// console.log(hoursOfTheDay);
// for (let i = 0; i < 10; i++) {
// 	var hour = document.createElement('div')
// 	hoursOfTheDay.add(1, 'hour')
// 	hour.innerText = hoursOfTheDay.format('h a')
// 	if(hourRightNow.format('h') === hoursOfTheDay.format('h')){
// 		hour.classList.add('red')
// 	} else {
// 		hour.classList.add('green')
// 	}
// 	console.log(hour);
// 	document.getElementById('container').appendChild(hour)
// }

