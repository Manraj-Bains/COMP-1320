/*- call makecalender
    - display date,weekday
  - getDayOfTheWeekForUserDate()
    - prints day of week for month day and year inputted by the user
    - suggestions to use readline-sync and its.question method to get a date from user via the keybaord nb */


const readline = require('readline-sync');
const labTwo = require('./lab-two');

labTwo.makeCalender(2022);

function getDayOfTheWeekForUserDate(){
    const answer = readline.question("Choose a Date (MM-DD-YYYY): ");
    if (answer.length !== 10 || input[2] !== "-"|| input[5] !== "-"){
        console.log("Incorrect format, please use (MM-DD-YYYY) format")
        return;
    }const seg = answer.split("-");
    month = parseInt(seg[0])-1;
    day = parseInt(seg[1]);
    year = parseInt(seg[2]);
    if (isNaN(month)||isNaN(day)||isNaN(year)) {
        console.log("That does not exist");
        return;
    }const weekdayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(year, month - 1, day);
    const dayOfWeek = weekdayz[date.getDay()];
    console.log(`${month}-${day}-${year} is a ${dayOfWeek}`);
}

getDayOfTheWeekForUserDate()