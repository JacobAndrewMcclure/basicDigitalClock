setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("timeReadOut").innerHTML = hour + ":" + minute + ":" + second;

}, 1000);