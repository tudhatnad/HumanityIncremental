var updateInt = setInterval(update, 1000);
function update() {
     document.getElementById('techpoint').innerHTML = "Technológia pontok: " + techpoint;
     document.getElementById('disasterpoint').innerHTML = "Katasztrófa pontok: " + disasterPoints;
     populationEarth();
}

function settings() {
     updateInterval();
}

function updateInterval() {
     clearInterval(updateInt);
     var inter = parseInt(document.getElementById('updateInterval').value);
     updateInt = setInterval(update, inter);
}
