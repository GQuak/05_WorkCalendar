# 05_WorkCalendar
Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

DESCRIPTION
The goal of this project was to create a work calendar. 

I started by figuring out which HTMl elements would be needed and how to lay out the HTML structure by rows with 3 seperate elements for the time, appointment text, and the lock button. Then I added CSS to include the lock image and added borders and background colors to clarify the different html elements on the page. Then I linked the Luxon Javascript to capture the current date/time information from the users browser. I used that to display the current date and time at the top of the page and then started writing the Javascript logic utilizing the current dateTime variable. I utilized localStorage to collect appointments text and save it even if the user refreshes the page. I used comparison logic to check what the current time is and change the background color of the appointment types based on the current time.


To view the work calendar visit https://gquak.github.io/05_WorkCalendar/


CREDITS
This project was developed for use in the University of Denver's Coding Bootcamp by Gabe Quakkelaar.


MIT LICENSE

Copyright (c) 2021 Gabe Quakkelaar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.