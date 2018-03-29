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