setInterval(function(){
    //variable declaration
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amOrPm = "AM"
    //calculates if it's am or pm
    if (hour >= 12) {
        amOrPm = "PM"
    } else {
        amOrPm = "AM"
    }
    //If it's over 12 hours runs through first 12 again
    if (hour > 12) {
        hour = hour - 12;
    } else {
    
    }
    //Display an addition zero if minute or second is single digit
    if (minute < 10 && second < 10) {
        document.getElementById("timeReadOut").innerHTML = hour + ":0" + minute + ":0" + second + " " + amOrPm;
    } else if (minute < 10 && second > 9) {
        document.getElementById("timeReadOut").innerHTML = hour + ":0" + minute + ":" + second + " " + amOrPm;
    } else if (minute > 9 && second < 10) {
        document.getElementById("timeReadOut").innerHTML = hour + ":" + minute + ":0" + second + " " + amOrPm;
    } else {
        document.getElementById("timeReadOut").innerHTML = hour + ":" + minute + ":" + second + " " + amOrPm;
    }
}, 1000);



setInterval(function(){
    let date = new Date();
    let offSetHour = date.getTimezoneOffset();
    let offSetMinute = 0;
    offSetHour = offSetHour / 60;
    

    let timeHourDifference = 0;
    let timeMinuteDifference = 0;
    timeZoneName = document.getElementById("timezone").value;

    if (timeZoneName == "GMT" || timeZoneName == "UTC") {
        timeHourDifference = 0;
    } else if (timeZoneName == "ECT") {
        timeHourDifference = 1;
    } else if (timeZoneName == "EET" || timeZoneName == "ART") {
        timeHourDifference = 2;        
    } else if (timeZoneName == "EAT") {
        timeHourDifference = 3;
    } else if (timeZoneName == "MET") {
        timeHourDifference = 3;
        timeMinuteDifference = 30;
    } else if (timeZoneName == "NET") {
        timeHourDifference = 4;
    } else if (timeZoneName == "PLT") {
        timeHourDifference = 5;
    } else if (timeZoneName == "IST") {
        timeHourDifference = 5;
        timeMinuteDifference = 30;
    } else if (timeZoneName == "BST") {
        timeHourDifference = 6;
    } else if (timeZoneName == "VST") {
        timeHourDifference = 7;
    } else if (timeZoneName == "CTT") {
        timeHourDifference = 8;
    } else if (timeZoneName == "JST") {
        timeHourDifference = 9;
    } else if (timeZoneName == "ACT") {
        timeHourDifference = 9;
        timeMinuteDifference = 30;
    } else {
        console.log("Invalid time zone.");
    }

    offSetHour = offSetHour + timeHourDifference;
    offSetMinute = offSetMinute + timeMinuteDifference;
    let hour = date.getHours();
    hour = hour + offSetHour;
    let minute = date.getMinutes();
    minute = minute + offSetMinute;
    let second = date.getSeconds();
    let amOrPm = "AM"
    //if hours over 24 subtracts 24
    if (hour > 24) {
        hour = hour - 24
    } else {
        
    }
    //calculates if minutes are over 60
    if (minute > 60) {
        minute = minute - 60;
    } else {
        
    }
    //calculates if it's am or pm
    if (hour >= 12) {
        amOrPm = "PM"
    } else {
        amOrPm = "AM"
    }
    //If it's over 12 hours runs through first 12 again
    if (hour > 12) {
        hour = hour - 12;
    } else {
    
    }
    
    //Display an addition zero if minute or second is single digit
    if (minute < 10 && second < 10) {
        document.getElementById("selectReadOut").innerHTML = hour + ":0" + minute + ":0" + second + " " + amOrPm;
    } else if (minute < 10 && second > 9) {
        document.getElementById("selectReadOut").innerHTML = hour + ":0" + minute + ":" + second + " " + amOrPm;
    } else if (minute > 9 && second < 10) {
        document.getElementById("selectReadOut").innerHTML = hour + ":" + minute + ":0" + second + " " + amOrPm;
    } else {
        document.getElementById("selectReadOut").innerHTML = hour + ":" + minute + ":" + second + " " + amOrPm;
    }
}, 1000);