module.exports = {getDayOfWeek, makeCalender }

 function getDayOfWeek(year ,day ,month ) {
    let strYear = year.toString(); // convert num to STRING as strYear
    let lastTwo = strYear.slice(-2); // Last 2 num of STRING as lastTwo
    let numLast = parseInt(lastTwo)
    let firstTwo = strYear.slice(0,2,1); // first 2 num of string as firstTwo
    let numFirst = parseInt(firstTwo)
    let twelves = Math.trunc(numLast/12); // how many 12s in lastTWo
    let rem = parseInt(numLast - (twelves*12)); //remainder (USE MODULO OPERATOR) --> 7/3 = 1
    let fours = Math.trunc(rem/4); // fours 
    let strMonth = month.toString();
    
    // month to code association 
    let monthCode = 0 // if else if statment(s) dictate our month code
    if (strMonth.toLowerCase() == "january"|| strMonth.toLowerCase() == "october"){
        monthCode = 1;
    } else if (strMonth.toLowerCase() == "febuary"|| strMonth.toLowerCase() == "march" || strMonth.toLowerCase() == "november"){
        monthCode = 4;
    } else if (strMonth.toLowerCase() == "april"|| strMonth.toLowerCase() == "july") {
        monthCode = 0;
    } else if (strMonth.toLowerCase() == "may"){
        monthCode = 2;
    } else if (strMonth.toLowerCase() == "june"){
        monthCode = 5;
    } else if (strMonth.toLowerCase() == "august") {
        monthCode = 3;
    } else if (strMonth.toLowerCase() == "september" || strMonth.toLowerCase() == "december"){
        monthCode = 6;
    }

    // day-code math 
    let dayCode = 0
    if (numFirst == 16 || numFirst == 20){
        dayCode = (twelves + rem + fours + day + monthCode + 6 )%7;
    } else if (numFirst == 17 || numFirst == 21){
        dayCode = (twelves + rem + fours + day + monthCode + 4 )%7;
    } else if (numFirst == 18){
        dayCode = (twelves + rem + fours + day + monthCode + 2 )%7;
    }
    // day to code association
    let dayOfWeek = "a"
    
    if (year%4 == 0){
        dayCode -= 1
    }
    if (dayCode == 0){
        dayOfWeek = "Saturday";
    } else if (dayCode == 1){
        dayOfWeek = "Sunday";
    } else if (dayCode == 2){
        dayOfWeek = "Monday";
    } else if (dayCode == 3){
        dayOfWeek = "Tuesday";
    } else if (dayCode == 4){
        dayOfWeek = "Wednesday";
    } else if (dayCode == 5){
        dayOfWeek = "Thursday";
    } else if (dayCode == 6){
        dayOfWeek = "Friday";
    }


    return dayOfWeek;
};
 

function isLeapYear(year) {
    if (parseInt(year)%4 == 0){
        return true
    } else
    return false
}

function makeCalender(year){
    const week = ["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday", "Friday", "Saturday"]; 
    for (let month = 0; month <= 12; month++){ 
        const days = [31,isLeapYear(year)? 29: 28 ,31 ,30 ,31 ,30 ,31 ,31 ,30 ,31 ,30 ,31]; 
        for(let day = 1; day <= days[month]; day++){  
            const date = new Date(year ,month , day); 
            const weekday = week[date.getDay()]; 
            console.log(`${month + 1}-${day}-${year} is a ${weekday}`); 
        }
    }
}
