let colorSelector = document.getElementById("color");

chrome.storage.sync.get(["gmusic_color"], function(items) {
    colorSelector.value = items.gmusic_color;
});


colorSelector.onchange = function() {
    chrome.storage.sync.set({'gmusic_color': colorSelector.value}, function() {
        console.log("Saved");
    });
    chrome.tabs.executeScript({
        file: '/target_data.js'
    }, () => {
        chrome.tabs.executeScript({
            code: 'updateStyle();'
        })
    });
};