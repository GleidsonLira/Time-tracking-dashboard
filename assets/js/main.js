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
