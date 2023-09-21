/*- call makecalender
    - display date,weekday
  - getDayOfTheWeekForUserDate()
    - prints day of week for month day and year inputted by the user
    - suggestions to use readline-sync and its.question method to get a date from user via the keybaord nb */
const readline = require('readline-sync');
const labTwo = require('./lab-two')
labTwo.makeCalender(2022);
function getDayOfTheWeekForUserDate() {
    const answer = readline.question("Choose a Date (MM-DD-YYYY): ");
    const seg = answer.split("-");
    if (seg.length !== 3 && seg.length !== 1) {
        console.log("Incorrect format, please use (MM-DD-YYYY) format")
        return;
    }
    month = parseInt(seg[0]);
    day = parseInt(seg[1]);
    year = parseInt(seg[2]);
    if (isNaN(month)||isNaN(day)||isNaN(year)) {
        console.log("That does not exist");
        return; 
    }
    if (seg.length === 1){
        let month = 1;
        let day = 1;
    }
    const weekdayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(year, month-1, day);
    const dayOfWeek = weekdayz[date.getDay()];
    console.log(`${month}-${day}-${year} is a ${dayOfWeek}`);
}

getDayOfTheWeekForUserDate()