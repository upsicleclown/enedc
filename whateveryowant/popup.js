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
})