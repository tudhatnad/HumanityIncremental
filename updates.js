var updateInt = setInterval(update, 1000);
function update() {
     document.getElementById('techpoint').innerHTML = "Technológia pontok: " + technologyPoints;
     document.getElementById('disasterpoint').innerHTML = "Katasztrófa pontok: " + disasterPoints;
     document.getElementById("minedResource").innerHTML = "Kibányászott nyersanyagok: " + minedResource;
     document.getElementById("resourcess").innerHTML = "<h3>Hátralévő nyersanyagok: " + planets[0].resources + "</h3>";
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

setInterval(save, 30000);
function save() {
     console.log("save")
     for (i = 0; i < 7; i++) {
          try {
               localStorage.setItem('planets' + i, JSON.stringify(planets[i]));
          } catch { console.log("planet save wrong"); }
     }
     for (i = 0; i < 10; i++) {
          try {
               localStorage.setItem('expbought' + i, JSON.stringify(expBought[i]));
          } catch { console.log("explore save wrong"); }
     }
     for (i = 0; i < 10; i++) {
          try {
               localStorage.setItem('techbought' + i, JSON.stringify(techBought[i]));
          } catch { console.log("tech save wrong"); }
     }
     for (i = 0; i < 6; i++) {
          try {
               localStorage.setItem('disasterupgrades' + i, JSON.stringify(upg[i]));
          } catch { console.log("disaster save wrong"); }
     }

     localStorage.setItem('tempor', JSON.stringify(temp));
     localStorage.setItem('disasterPoints', JSON.stringify(disasterPoints));
     localStorage.setItem('technologyPoints', JSON.stringify(technologyPoints));
     localStorage.setItem('minedResource', JSON.stringify(minedResource));

     localStorage.setItem('mineinterval', JSON.stringify(mineInterval));
     localStorage.setItem('mineint', JSON.stringify(getTPInterval));
}

function load() {
     disasterPoints = JSON.parse(localStorage.getItem('disasterPoints'));
     technologyPoints = JSON.parse(localStorage.getItem('technologyPoints'));
     minedResource = JSON.parse(localStorage.getItem('minedResource'));
     temp = JSON.parse(localStorage.getItem('tempor'));

     if (getTPInterval == null)
          getTPInterval = setInterval(getTP, 1000);
     if (getTPInterval == null)
          mineInterval = setInterval(mineResource, 1000);

     if (mineInterval != null)
          document.getElementById('TabTech').hidden = false;

     for (i = 0; i < 7; i++) {
          try {
               planets[i] = JSON.parse(localStorage.getItem('planets' + i));
          } catch { console.log("planet load wrong"); }
     }
     for (i = 0; i < 10; i++) {
          try {
               expBought[i] = JSON.parse(localStorage.getItem('expbought' + i));
          } catch { console.log("explore load wrong"); }
     }
     for (i = 0; i < 10; i++) {
          try {
               techBought[i] = JSON.parse(localStorage.getItem('techbought' + i));
          } catch { console.log("tech load wrong"); }
     }
     for (i = 0; i < 6; i++) {
          try {
               upg[i] = JSON.parse(localStorage.getItem('disasterupgrades' + i));
          } catch { console.log("tech load wrong"); }
     }

     unlockUpgrades();
}

function unlockUpgrades() {
     resetExplore();
     for (j = 0; j < 10; j++)
          if (expBought[j] != null)
               exploreToBuyOnLoad(expBought[j]);
     for (j = 0; j < 10; j++)
          if (techBought[j] != null)
               techToBuyOnLoad(techBought[j]);
     for (j = 0; j < 6; j++)
          if (upg[i] != null)
               for (k = 0; k < upg[i]; k++)
                    buyUpgradesOnLoad(j + 1);
}