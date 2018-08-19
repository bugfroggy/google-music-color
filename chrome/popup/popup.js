let colorSelector = document.getElementById("color");
let rainbowToggle = document.getElementById("doRainbow");
let darkToggle = document.getElementById("darkMode");

chrome.storage.sync.get(["gmusic_color", "gmusic_rainbow_toggle", "gmusic_dark_toggle"], (items) => {
    colorSelector.value = items.gmusic_color;
    rainbowToggle.checked = items.gmusic_rainbow_toggle;
    darkToggle.checked = items.gmusic_dark_toggle;
});

let alerted;
rainbowToggle.onchange = () => {
    save();
    if(!alerted)
        alert("You must reload the page for these changes to take effect.");
    alerted = true;
};

colorSelector.onchange = darkToggle.onchange = () => {
    save();
    chrome.tabs.executeScript({
        file: '/chroma.min.js'
    }, () => {
        chrome.tabs.executeScript({
            file: '/target_data.js'
        }, () => {
            chrome.tabs.executeScript({
                code: 'chrome.storage.sync.get(["gmusic_color", "gmusic_dark_toggle"], (items) => {updateStyle(items.gmusic_color, items.gmusic_dark_toggle);});'
            })
        });
    });
};

function save() {
    chrome.storage.sync.set({'gmusic_color': colorSelector.value, 'gmusic_rainbow_toggle': rainbowToggle.checked, 'gmusic_dark_toggle': darkToggle.checked}, () => {
        console.log("Saved");
    });
}