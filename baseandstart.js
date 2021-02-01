//ez senkit sem érdekel, sosem fogom atirni
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//ez se
function openSubTab(evt, tabName) {
    var i, Subtabcontent, tablinks;
    Subtabcontent = document.getElementsByClassName("Subtabcontent");
    for (i = 0; i < Subtabcontent.length; i++) {
        Subtabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


class planet {
    constructor(population, maxpopulation, fertility, resources, mineRate) {
        this.population = 2;
        this.maxpopulation = 100;
        this.fertility = 0.01;
        this.resources = 10000;
        this.mineRate = 0;
    }
}

//orokos upgradek, majd kitalalom mik jonnek ide
class permanent {
    constructor() {

    }
}

class temporary {
    constructor(childInt, childIntCost, childIntCount, childIntMax, technologyCost) {
        this.childInt = 1000;
        this.childIntCost = 10;
        this.childIntCount = 0;
        this.childIntMax = 50;
        this.technologyCost = 1000;
    }
}
var temp = new temporary();

function unlockTab(tab) {
    if (tab == "TabTech")
        document.getElementById("TabTech").hidden = false;
}