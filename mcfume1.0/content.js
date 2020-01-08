chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    var travel_mode = document.getElementsByClassName("travel-mode selected directions-selected-travel-mode")[0];

    if (travel_mode != undefined) {
        travel_mode = travel_mode.getAttribute("data-travel_mode");

        if ("0" == travel_mode) {

            var distanceSection = document.getElementsByClassName("section-directions-trip-distance section-directions-trip-secondary-text")[0];

            if(distanceSection != undefined)
            {
                var distance = distanceSection.getElementsByTagName("DIV")[0].innerHTML;
                sendResponse(distance);
                return true;
            }

            sendResponse("");
            return true;
        }
        else {
            sendResponse("");
            return true;
        }

    }
    else{
        sendResponse("");
        return true;
    }


});