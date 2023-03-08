let lastTime = document.querySelectorAll(".last"),
currentTime = document.querySelectorAll(".hrs-current"),
time = document.querySelectorAll(".time"),
prev = document.querySelectorAll(".prev")

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {

        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null); 
}

const paleButton = () => {
    time.forEach(a => a.style.color = "hsl(236, 100%, 87%)")
}
const whiteButton = (x) => {
    time[x].style.color = "white"
}

const changeTimeSpan = (x) => {
    
    readTextFile("data.json", (text) =>{
        let data = JSON.parse(text);
        if(x == 1){
            lastTime.forEach(function(a, index ) {
                let day = data[index].timeframes
                toggleTransitionWithTimeout(a)
                toggleTransitionWithTimeout(currentTime[index])
                toggleTransitionWithTimeout(prev[index])
                prev[index].textContent = "Yesterday- "+ day.daily.previous+"hrs"
                currentTime[index].textContent =  day.daily.current+"hrs";
            });

            }else if(x == 2){
            
            lastTime.forEach(function(a, index ) {
                let day = data[index].timeframes
                toggleTransitionWithTimeout(a)
                toggleTransitionWithTimeout(currentTime[index])
                toggleTransitionWithTimeout(prev[index])
                prev[index].textContent = "Last Week- "+ day.weekly.previous+"hrs"
                currentTime[index].textContent = day.weekly.current+"hrs";
            });

            }else{
            lastTime.forEach(function(a, index ) {
                let day = data[index].timeframes
                toggleTransitionWithTimeout(a)
                toggleTransitionWithTimeout(currentTime[index])
                toggleTransitionWithTimeout(prev[index])
                prev[index].textContent = "Last Month- "+ day.monthly.previous+"hrs";
                currentTime[index].textContent =  day.monthly.current+"hrs";
            });

        }

});
}