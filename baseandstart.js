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
    constructor(population, maxpopulation, fertility) {
        this.population = 2;
        this.maxpopulation = 100;
        this.fertility = 0.01;
    }
}

//orokos upgradek, majd kitalalom mik jonnek ide
class permanent {
    constructor() {

    }
}
