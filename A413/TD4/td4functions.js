var xhr;

function init(){
    if (window.XMLHttpRequest) {// tous les navigateurs modernes
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// ancienne version d’Internet Explorer
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else {
// XMLHttpRequestnon supporté par le navigateur
        console.log("Votre navigateur ne supporte pas XMLHTTPRequest...");
    }

    document.getElementById("selection").addEventListener("change", function(event){
        sendphp(event);
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState== 4 && xhr.status== 200) {
            maCallback(xhr.responseText);
        }
        else {
            console.log(xhr);
        }
    };
}

function send(event){
    console.log(event.target.value);
    xhr.open("get", event.target.value, true);
    xhr.send(null);
}

function sendphp(event){
    console.log(event.target.value);
    xhr.open("post", "proxy.php", true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send("rssURL="+ event.target.value);
}





function maCallback(data){
    document.getElementById("rssInsert").innerHTML = data;
}