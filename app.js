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
    } else if (timeZoneName == "CET") {
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
    } else if (timeZoneName == "AET") {
        timeHourDifference = 10;
    } else if (timeZoneName == "SST") {
        timeHourDifference = 11;
    } else if (timeZoneName == "NST") {
        timeHourDifference = 12;
    } else if (timeZoneName == "MIT") {
        timeHourDifference = -11;
    } else if (timeZoneName == "HST") {
        timeHourDifference = -10;
    } else if (timeZoneName == "AST") {
        timeHourDifference = -9;
    } else if (timeZoneName == "PST") {
        timeHourDifference = -8;
    } else if (timeZoneName == "PNT" || timeZoneName == "MST") {
        timeHourDifference = -7;
    } else if (timeZoneName == "CST") {
        timeHourDifference = -6;
    } else if (timeZoneName == "EST" || timeZoneName == "IET") {
        timeHourDifference = -5;
    } else if (timeZoneName == "PRT") {
        timeHourDifference = -4;
    } else if (timeZoneName == "CNT") {
        timeHourDifference = -3;
        timeMinuteDifference = -30;
    } else if (timeZoneName == "AGT") {
        timeHourDifference = -3;
    } else if (timeZoneName == "BET") {
        timeHourDifference = -3;
    } else if (timeZoneName == "WAT") {
        timeHourDifference = -1;
    } else {
        
    }

    offSetHour = offSetHour + timeHourDifference;
    offSetMinute = offSetMinute + timeMinuteDifference;
    let hour = date.getHours();
    hour = hour + offSetHour;
    let minute = date.getMinutes();
    minute = minute + offSetMinute;
    let second = date.getSeconds();
    let amOrPm = "AM"

    //If hours are over 24 and/or minutes are over 60
    if (hour > 24 && minute >= 60) {
        hour = hour - 23;
        minute = minute - 60;
    } else if (hour > 24 && minute < 0) {
        hour = hour - 23;
        minute = minute + 60;
    }
    else if (hour > 24) {
        hour = hour - 24;
    } else if (minute >= 60) {
        minute = minute - 60;
    } else if (minute < 0) {
        hour = hour++
        minute = minute + 60;
    } else {

    }
    //calculates if it's am or pm
    if (hour >= 24) {
        amOrPm = "AM";
    }
    else if (hour >= 12) {
        amOrPm = "PM";
    } else {
        amOrPm = "AM";
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

setInterval(function(){
    let date = new Date();
    let offSetHour = date.getTimezoneOffset();
    let offSetMinute = 0;
    offSetHour = offSetHour / 60;
    

    let timeHourDifference = 0;
    let timeMinuteDifference = 0;
    timeZoneName = document.getElementById("timezone2").value;

    if (timeZoneName == "GMT2" || timeZoneName == "UTC2") {
        timeHourDifference = 0;
    } else if (timeZoneName == "CET2") {
        timeHourDifference = 1;
    } else if (timeZoneName == "EET2" || timeZoneName == "ART2") {
        timeHourDifference = 2;        
    } else if (timeZoneName == "EAT2") {
        timeHourDifference = 3;
    } else if (timeZoneName == "MET2") {
        timeHourDifference = 3;
        timeMinuteDifference = 30;
    } else if (timeZoneName == "NET2") {
        timeHourDifference = 4;
    } else if (timeZoneName == "PLT2") {
        timeHourDifference = 5;
    } else if (timeZoneName == "IST2") {
        timeHourDifference = 5;
        timeMinuteDifference = 30;
    } else if (timeZoneName == "BST2") {
        timeHourDifference = 6;
    } else if (timeZoneName == "VST2") {
        timeHourDifference = 7;
    } else if (timeZoneName == "CTT2") {
        timeHourDifference = 8;
    } else if (timeZoneName == "JST2") {
        timeHourDifference = 9;
    } else if (timeZoneName == "ACT2") {
        timeHourDifference = 9;
        timeMinuteDifference = 30;
    } else if (timeZoneName == "AET2") {
        timeHourDifference = 10;
    } else if (timeZoneName == "SST2") {
        timeHourDifference = 11;
    } else if (timeZoneName == "NST2") {
        timeHourDifference = 12;
    } else if (timeZoneName == "MIT2") {
        timeHourDifference = -11;
    } else if (timeZoneName == "HST2") {
        timeHourDifference = -10;
    } else if (timeZoneName == "AST2") {
        timeHourDifference = -9;
    } else if (timeZoneName == "PST2") {
        timeHourDifference = -8;
    } else if (timeZoneName == "PNT2" || timeZoneName == "MST2") {
        timeHourDifference = -7;
    } else if (timeZoneName == "CST2") {
        timeHourDifference = -6;
    } else if (timeZoneName == "EST2" || timeZoneName == "IET2") {
        timeHourDifference = -5;
    } else if (timeZoneName == "PRT2") {
        timeHourDifference = -4;
    } else if (timeZoneName == "CNT2") {
        timeHourDifference = -3;
        timeMinuteDifference = -30;
    } else if (timeZoneName == "AGT2") {
        timeHourDifference = -3;
    } else if (timeZoneName == "BET2") {
        timeHourDifference = -3;
    } else if (timeZoneName == "WAT2") {
        timeHourDifference = -1;
    } else {
        
    }

    offSetHour = offSetHour + timeHourDifference;
    offSetMinute = offSetMinute + timeMinuteDifference;
    let hour = date.getHours();
    hour = hour + offSetHour;
    let minute = date.getMinutes();
    minute = minute + offSetMinute;
    let second = date.getSeconds();
    let amOrPm = "AM"

    //If hours are over 24 and/or minutes are over 60
    if (hour > 24 && minute >= 60) {
        hour = hour - 23;
        minute = minute - 60;
    } else if (hour > 24 && minute < 0) {
        hour = hour - 23;
        minute = minute + 60;
    }
    else if (hour > 24) {
        hour = hour - 24;
    } else if (minute >= 60) {
        minute = minute - 60;
    } else if (minute < 0) {
        hour = hour++
        minute = minute + 60;
    } else {

    }
    //calculates if it's am or pm
    if (hour >= 24) {
        amOrPm = "AM";
    }
    else if (hour >= 12) {
        amOrPm = "PM";
    } else {
        amOrPm = "AM";
    }
    //If it's over 12 hours runs through first 12 again
    if (hour > 12) {
        hour = hour - 12;
    } else {
    
    }
    //Display an addition zero if minute or second is single digit
    if (minute < 10 && second < 10) {
        document.getElementById("selectReadOut2").innerHTML = hour + ":0" + minute + ":0" + second + " " + amOrPm;
    } else if (minute < 10 && second > 9) {
        document.getElementById("selectReadOut2").innerHTML = hour + ":0" + minute + ":" + second + " " + amOrPm;
    } else if (minute > 9 && second < 10) {
        document.getElementById("selectReadOut2").innerHTML = hour + ":" + minute + ":0" + second + " " + amOrPm;
    } else {
        document.getElementById("selectReadOut2").innerHTML = hour + ":" + minute + ":" + second + " " + amOrPm;
    }
}, 1000);