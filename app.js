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
    offSetHour = offSetHour / 60;
    let hour = date.getHours();
    hour = hour + offSetHour;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amOrPm = "AM"
    //if hours over 24 subtracts 24
    if (hour > 24) {
        hour = hour - 24
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