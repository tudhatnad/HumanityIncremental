//Letrehoz egy 8 elemu tombot, mert egyelöre csak a naprendszerben lehet majd baszodni
var planets = new Array(8);
var techpoint = 0;
var indexPlanet = 0;

if (planets[0] == null) {
    buyPlanet();
}



/*
IDEIGLENES, EMG KELL CSINALNI AZ ÖSSZES BOLYGÓRA
RAJÖTTEM LEHET KÖZVETLENÜL A TD-RE HIVATKOZNI, NEM KELL ELŐSZÖR A <TABLE> AZTÁN A <TD> DE LUSTA VOK ÁTIRNI, MAJD VMIKOR
*/
function populationEarth() {
    var earthpopulation = document.getElementById("earthstat").getElementsByClassName("popul");
    var earthfertility = document.getElementById("earthstat").getElementsByClassName("fertility");
    var earthleftspace = document.getElementById("earthstat").getElementsByClassName("leftspace");
    if (planets[0] != null) {
        earthpopulation[0].innerHTML = "<h3>Lakosság: " + planets[0].population + "</h3";
        earthfertility[0].innerHTML = "<h3>Lakosság átlagtermékenysége: " + planets[0].fertility + "</h3";
        earthleftspace[0].innerHTML = "<h3>Hátralévő helyek a lakosságnak: " + (planets[0].maxpopulation - planets[0].population) + "</h3";
    }

}

function calcPopulation() {
    var i = 0;
    var popul = 0;
    while (planets[i] != null) {
        popul += planets[i].population;
        i++;
    }
    return popul;
}

/*
Szóval... Ha ezt olvasod Tomi, akkor helo, ezt csak magamnak irom ide mert 2 hét mulva tuti nem tudnám megfejteni xdd
Mivel több bolygó van (planets[]), és azokon belül külön kontinensek (planets[].continents[]), minden bolygón 5 az egyszerü programozás kedvéért, mert igy egy ciklus végig megy az összes bolygon.
egy while ciklus 'i' ciklusváltozoval, a végén mindig i++, mig van a tömbben valami és nem üres, ezen belül minden futás során egy planets[i] (ugye a sorban következő bolygó) kontinensein megy végig '.continents[j]'
amig nem talál üres elemet a 'continents[]' tömbben (ugye még nem fedezte fel a jatekos, azert ures) kontinenst, és minden kontinens populaciojahoz hozzaad egy szamot a következo egyenlet alapjan: 
+= kerekit(1 + (Adott bolygó adott kontinensének lakossága / 2) * (Adott bolygó adott kontinensének termékenysége))
|-> az egyes azért kell, hogy ha kevés a lakosság akkor is termelödjön valami, mert különben lekerekitené és megakadna
Ez csak egy ideiglenes egyenlet vszeg, lehet lesz uj. 
*/
//2021.01.16: Kicsit átmókoltam, töröltem belőle a continents[x]-eket, meg egy két dolgot, majd itt fölül is átírom ha lesz kedvem.

var childInterval = setInterval(makingChildren, 1000);
function makingChildren() {
    var i = 0;
    while (planets[i] != null) {
        planets[i].population = calcPopulation();
        if (planets[i].population < planets[i].maxpopulation)
            planets[i].population += Math.round(1 + (planets[i].population / 2) * planets[i].fertility);
        if (planets[i].population > planets[i].maxpopulation)
            planets[i].population = planets[i].maxpopulation;
        i++;
    }


}

//Az elsö bolygot legeneralja hogy te tudjad mokolni majd
function buyPlanet() {
    if (planets[0] == null) {
        planets[indexPlanet] = new planet;
        indexPlanet++;
    }
}
