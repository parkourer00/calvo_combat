var time = 180
var timer = setInterval(() => {
    time--
    window.document.getElementById("timer").innerHTML = `<span style="margin-top:40px;position:absolute;">${time}</span>`
    if(time == 0){
        for(let calvo of calvosList){
            calvo.finish = true
        }
        clearInterval(timer)
        //FINALY
    }
}, 1000);

