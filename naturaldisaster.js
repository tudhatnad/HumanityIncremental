//ezt hívja meg a gomb, ha prestigelni akar a játékos
var disasterPoints = 0;
function prestige() {
     var yes = prompt("Type 'yes' if you want to make a prestige!") == "yes";
     if (planets[0].population > 100 && yes) {
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
     disasterPoints += Math.round(Math.log10(planets[0].population));
}


