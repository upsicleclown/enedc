chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    var travel_mode = document.getElementsByClassName("travel-mode selected directions-selected-travel-mode")[0];
    travel_mode = travel_mode.getAttribute("data-travel_mode");

    if ( "0" == travel_mode){
        var distance = document.getElementsByClassName("section-directions-trip-distance section-directions-trip-secondary-text")[0];
        distance = distance.getElementsByTagName("DIV")[0].innerHTML;

        sendResponse(distance);
        //console.log(document.getElementsByClassName("section-directions-trip-distance section-directions-trip-secondary-text")[0].getElementsByTagName("DIV")[0].innerHTML);
    }
    else{
        alert("not");
    }
})