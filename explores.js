/*
Bekéri a megnyomott gombnak az id-jét, majd meghívja a megvásárlós függvényt(exploreToBuy()), 
ami azért jó, mert azon belül ha teljesülnek a feltételek, akkor meghívja az unlockolós függvényt (unlockOne() és unlockRow())
*/
var expBought = new Array(10);

function buyExplore() {
   var whichClicked = parseInt(event.srcElement.id);
   exploreToBuy(whichClicked);
}

/*
Megkapja a buyExplore() fv-től azt, hogy melyik gombot nyomta meg a felhasználó, majd eldönti, 
hogy ahhoz milyen upgrade tartozik, majd jóváírja és disable-özi a kattintott gombot 
!!!(Ez még nincs kész teljesen)!!!
*/
function exploreToBuy(which) {
   if (which == 11 && planets[0].population >= 50) {
      planets[0].maxpopulation += 100;
      planets[0].population -= 50;
      expBought[0] = 11;
      unlockRow(which);
      disableBought(which);
   }
   if (which == 21 && planets[0].population >= 200) {
      planets[0].maxpopulation += 1000;
      planets[0].population -= 200;
      expBought[1] = 21;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 22 && planets[0].population >= 1000) {
      planets[0].maxpopulation += 1000;
      planets[0].population -= 1000;
      expBought[2] = 22;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 31 && planets[0].population >= 2200) {
      planets[0].maxpopulation += 5000;
      planets[0].population -= 2200;
      expBought[3] = 31;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 32 && planets[0].population >= 7000) {
      planets[0].fertility += 0.01;
      planets[0].population -= 7000;
      expBought[4] = 32;
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
   explToUnlock = which + 10;
   try {
      document.getElementById(explToUnlock).disabled = false;
      document.getElementById(explToUnlock).className = "treeEnabled";
   } catch {
      console.log("egy");
   }
}

//Feloldja a következő teljes sort a megvásárolt upgrade alatt
function unlockRow(which) {
   explToUnlock = which + 10;
   for (i = 0; i < 5; i++) {
      try {
         document.getElementById(explToUnlock + i).disabled = false;
         document.getElementById(explToUnlock + i).className = "treeEnabled";
      } catch {
         console.log("sor");
      }
   }
}

//prestige esetén reseteli az exploreTree-t
function resetExplore() {
   var number = 10;
   for (i = 0; i < 10; i++) {
      for (j = 0; j < 5; j++) {
         try {
            document.getElementById(number + j + i * 10).disabled = true;
            document.getElementById(number + j + i * 10).className = "treeDisabled";
         } catch { console.log(); }
      }
   }
   document.getElementById('11').disabled = false;
   document.getElementById('11').className = "treeEnabled";
}

function exploreToBuyOnLoad(which) {
   if (which == 11) {
      expBought[0] = 11;
      unlockRow(which);
      disableBought(which);
   }
   if (which == 21) {
      expBought[1] = 21;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 22) {
      expBought[2] = 22;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 31) {
      expBought[3] = 31;
      unlockOne(which);
      disableBought(which);
   }
   if (which == 32) {
      expBought[4] = 32;
      unlockOne(which);
      disableBought(which);
   }
}