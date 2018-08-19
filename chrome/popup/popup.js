let colorSelector = document.getElementById("color");
let rainbowToggle = document.getElementById("doRainbow");

chrome.storage.sync.get(["gmusic_color", "gmusic_rainbow_toggle"], (items) => {
    colorSelector.value = items.gmusic_color;
    rainbowToggle.checked = items.gmusic_rainbow_toggle;
});

let alerted;
rainbowToggle.onchange = () => {
    save();
    if(!alerted)
        alert("You must reload the page for these changes to take effect.");
    alerted = true;
};

colorSelector.onchange = () => {
    save();
    chrome.tabs.executeScript({
        file: '/chroma.min.js'
    }, () => {
        chrome.tabs.executeScript({
            file: '/target_data.js'
        }, () => {
            chrome.tabs.executeScript({
                code: 'chrome.storage.sync.get(["gmusic_color"], (items) => {updateStyle(items.gmusic_color, true);});'
            })
        });
    });
};

function save() {
    chrome.storage.sync.set({'gmusic_color': colorSelector.value, 'gmusic_rainbow_toggle': rainbowToggle.checked}, () => {
        console.log("Saved");
    });
}