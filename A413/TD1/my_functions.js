function defTitre1() {
    document.title = document.getElementById("titre").innerText
}

function defTitre2() {
    document.title = document.querySelector("h2").innerText
}

function defTitre3() {
    var thing = document.querySelectorAll("h2")
    if (thing.length == 0) {
        document.title = "Joran Galano";
    }
    else {
        document.title = thing[thing.length - 1].innerText;
    }
}

function defTitre4() {
    var thing = document.getElementsByClassName("firstOrLast")
    if (thing.length > 0) {
        document.title = thing.length % 2 == 0 ? thing[0].innerText : thing[thing.length - 1].innerText;
    }
    else {
        document.title = "Joran Galano"
    }
}

function inverseTexte() {
    var thing = document.getElementsByTagName("p")
    var temp = thing[0].innerHTML;
    thing[0].innerHTML = thing[1].innerHTML;
    thing[1].innerHTML = temp;
}

function dateModif() {
    var x = new Date(document.lastModified);
    var y = document.querySelector("meta[name='author']").getAttribute("content");
    var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
    document.getElementById("date_modif").innerText = "Dernière modification le " + jours[x.getDay()] + " " + x.getDate() + " " + mois[x.getMonth()] + " " + x.getFullYear() + " par " + y;
}

function majNbJours() {
    var thing = document.getElementById("datexxx");
    var x = thing.innerText;
    var d1 = Date.now() / 86400000;
    var d2 = Date.parse('19 Jul 2018 00:00:00 GMT') / 86400000;
    var d3 = (d2 - d1).toFixed(0);
    thing.innerText = x.replace("xxx", d3 );
    if (d3 == 1){
        thing.innerText.replace("jours", "jour");
    }
}

function getTime() {
    var time = new Date();
    var timeString = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.getElementById("horloge").innerText = timeString;
}

function majHorloge1() {
    intervalId = window.setInterval(getTime,1000);
}