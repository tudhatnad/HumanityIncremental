//ezt hívja meg a gomb, ha prestigelni akar a játékos
var disasterPoints = 0;
var upg = new Array(6);
function prestige() {
     var yes = prompt("Type 'yes' if you want to make a prestige!") == "yes";
     if (planets[0].population >= 100 && yes) {
          calcNewPoints();
          createNewPlanets();
          resetExplore();
     }
}

//először eltörli az összes bolygót, magyarul beállítja az értéküket 'null'-ra majd az első bolygó helyére létrehoz egyet. 
function createNewPlanets() {
     for (i = 0; i < 8; i++) {
          planets[i] = null;
     }
     planets[0] = new planet;
}

//Kiszámolja hogy mennyi pontot kapjon a játékos egy prestige után
function calcNewPoints() {
     disasterPoints += Math.round(Math.log10(planets[0].population) * 10);
}

function buyUpgrades(which) {
     if (which == 1 && temp.childIntCount < temp.childIntMax && disasterPoints >= temp.childIntCost) {
          temp.childInt *= 0.97;
          clearInterval(childInterval);
          childInterval = setInterval(makingChildren, temp.childInt);
          disasterPoints -= temp.childIntCost;
          temp.childIntCount++;
          temp.childIntCost = temp.childIntCost * 1.1;
          upg[0]++;
          if (temp.childIntCount >= temp.childIntMax)
               document.getElementById("upgone").className = "upgbtnDisabled";
          else
               document.getElementById("upgone").className = "upgbtn";
          document.getElementById("upgone").innerHTML = "Lakosság növekedés időtartam<br>Aktuális időtartam * 0.99<br>Ára: " + temp.childIntCost + "DP  " + temp.childIntCount + "/" + temp.childIntMax;
     }

     if (which == 6 && disasterPoints >= temp.technologyCost) {
          unlockTab("TabTech");
          disasterPoints -= temp.technologyCost;
          document.getElementById("upgsix").innerHTML = "<br>Technológiák feloldva!<br><br>";
          document.getElementById("upgsix").disabled = true;
          document.getElementById("upgsix").className = "upgbtnDisabled";
          upg[5]++;
          getTPInterval = setInterval(getTP, 1000);
     }
}


function buyUpgradesOnLoad(which) {
     if (which == 1) {
          clearInterval(childInterval);
          childInterval = setInterval(makingChildren, temp.childInt);
          if (temp.childIntCount >= temp.childIntMax)
               document.getElementById("upgone").className = "upgbtnDisabled";
          else
               document.getElementById("upgone").className = "upgbtn";
          document.getElementById("upgone").innerHTML = "Lakosság növekedés időtartam<br>Aktuális időtartam * 0.99<br>Ára: " + temp.childIntCost + "DP  " + temp.childIntCount + "/" + temp.childIntMax;
     }

     if (which == 6) {
          unlockTab("TabTech");
          disasterPoints -= temp.technologyCost;
          document.getElementById("upgsix").innerHTML = "<br>Technológiák feloldva!<br><br>";
          document.getElementById("upgsix").disabled = true;
          document.getElementById("upgsix").className = "upgbtnDisabled";
          getTPInterval = setInterval(getTP, 1000);
     }
}
