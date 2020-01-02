document.addEventListener('DOMContentLoaded', function (){
    chrome.tabs.query({currentWindow: true, active:true},
        function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, "hi", showDist)
        })
    function showDist(distance){
        const div = document.createElement("div");
        div.textContent = distance;

        document.body.appendChild(div)
    }
});

function makeForm (keys, formElement){
    var text = "";
    for (var i = 0; i < keys.length; i++){
        text = text+"<option value='"+keys[i]+"'></option>";
    }
    document.getElementById(formElement).innerHTML = text;
}

var dict = {"Mazda":{"Mazda 3": 300, "Mazda 4":400, "4Head Bruh Momentum":500}, "BMW":{"300":300, "800":800, "i8":0}};

makeForm(Object.keys(dict), "makes");

document.getElementById("makesForm").addEventListener("input", function(){
    try{
    document.getElementById("bruh").innerHTML = "";
    var key = "";
    document.getElementById("models").innerHTML = "";

    key = document.getElementById("makesInput").value;
    makeForm(Object.keys(dict[key]), "models");
    console.log("yuh");

    document.getElementById("bruh").innerHTML = dict[key][document.getElementById("modelInput").value];
    console.log("input");
    }
    catch (err){
        console.log("4Head Bruh Momentum");
    }
    
    
});