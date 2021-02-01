var technologyPoints = 0;
var minedResource = 0;
var mineInterval;
var techBought = new Array(10);
var getTPInterval;
function getTP() {
     technologyPoints += (0.00001 * disasterPoints);
     technologyPoints = Math.round(technologyPoints * 100000) / 100000;
}

function mineResource() {
     for (i = 0; i < planets.length; i++) {
          if (planets[i] != null) {
               planets[i].resources -= planets[i].mineRate;
               minedResource += planets[i].mineRate;
               minedResource = Math.round(minedResource * 10000) / 10000;
          }
     }
}

function buyTech() {
     var whichClicked = parseInt(event.srcElement.id);
     techToBuy(whichClicked);
}

/*
Megkapja a buyExplore() fv-től azt, hogy melyik gombot nyomta meg a felhasználó, majd eldönti, 
hogy ahhoz milyen upgrade tartozik, majd jóváírja és disable-özi a kattintott gombot 
!!!(Ez még nincs kész teljesen)!!!
*/
function techToBuy(which) {
     if (which == 211 && technologyPoints * 1000 >= 0.0001 * 1000) {
          mineInterval = setInterval(mineResource, 1000)
          planets[0].mineRate = 0.01;
          technologyPoints -= 0.0001;
          techBought[0] = 211;
          unlockRow(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
}

//Amit éppen megvásárolt a játékos, azt a gombot kikapcsolja, hogy ne legyen többször megvehető
function disableBought(which) {
     document.getElementById(which).disabled = true;
     document.getElementById(which).className = "treeBought";
}

//Feloldja a következő egy darab upgradet a megvásárolt alatt
function unlockOne(which) {
     techToUnlock = which + 10;
     try {
          document.getElementById(techToUnlock).disabled = false;
          document.getElementById(techToUnlock).className = "treeEnabled";
     } catch {
          console.log();
     }
}

//Feloldja a következő teljes sort a megvásárolt upgrade alatt
function unlockRow(which) {
     techToUnlock = which + 10;
     for (i = 0; i < 5; i++) {
          try {
               document.getElementById(techToUnlock + i).disabled = false;
               document.getElementById(techToUnlock + i).className = "treeEnabled";
          } catch {
               console.log();
          }
     }
}

//prestige esetén reseteli az exploreTree-t
function resetTech() {
     var number = 210;
     for (i = 0; i < 10; i++) {
          for (j = 0; j < 5; j++) {
               try {
                    document.getElementById(number + j + i * 10).disabled = true;
                    document.getElementById(number + j + i * 10).className = "treeDisabled";
               } catch { console.log(); }
          }
     }
     document.getElementById('211').disabled = false;
     document.getElementById('211').className = "treeEnabled";
}

function techToBuyOnLoad(which) {
     if (which == 211) {
          unlockRow(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
     if (technologyPoints < disasterPoints) {
          unlockOne(which);
          disableBought(which);
     }
}
