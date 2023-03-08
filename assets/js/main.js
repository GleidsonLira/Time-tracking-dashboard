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

function toggleTransitionWithTimeout(x) {
    x.style.display = 'none'
    x.classList.remove("fade"); // removing the class
    setTimeout(() => {
      requestAnimationFrame(() => {
        // We are manually adding new content and adding class again to node
        x.style.display = 'inline-block'
        x.classList.add("fade");
      });
    }, 225); // timeout
  }

time[1].addEventListener("click", function(){changeTimeSpan(1), paleButton(), whiteButton(1)})
time[2].addEventListener("click", function(){changeTimeSpan(2), paleButton(), whiteButton(2)})
time[3].addEventListener("click", function(){changeTimeSpan(3), paleButton(), whiteButton(3)})