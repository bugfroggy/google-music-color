let targets = [ // TODO fix bug with this producing an error saying targets is already defined if ran twice by popup.js
    {
        // Play button
        name: "#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"play-pause\"]:not([style-scope]):not(.style-scope):not([disabled])",
        properties: ["color"]
    },
    {
        // Progress bar
        name: ".paper-progress-2 #primaryProgress.paper-progress",
        properties: ["background"]
    },
    {
        // Progress slider
        name: ".paper-slider-0 .slider-knob-inner.paper-slider",
        properties: ["background-color", "border-color"]
    },
    {
        // I'm feeling lucky button
        name: ".paper-fab-0",
        properties: ["background"]
    }
];

function updateStyle() {
    console.log("Test!");

    chrome.storage.sync.get(["gmusic_color"], function(items) {
        let color = items.gmusic_color;

        let currentStyleElem = document.getElementById("gmusic-color-style");
        if(currentStyleElem != null)
            currentStyleElem.parentElement.removeChild(currentStyleElem);

        let head = document.getElementsByTagName("head")[0];
        let style = document.createElement("style");
        style.id = "gmusic-color-style";

        style.type = 'text/css';

        // Play button
        style.appendChild(document.createTextNode("#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"play-pause\"]:not([style-scope]):not(.style-scope):not([disabled]){ color:" + color + " !important;}"));
        // Progress bar
        style.appendChild(document.createTextNode(".paper-progress-2 #primaryProgress.paper-progress { background: " + color + " !important; }"));
        // Progress bar slider
        style.appendChild(document.createTextNode(".paper-slider-0 .slider-knob-inner.paper-slider { background-color: " + color + " !important; border-color: " + color + " !important;}"));
        // "I'm feeling lucky" button
        style.appendChild(document.createTextNode(".paper-fab-0 { background: " + color + " !important;"))

        head.appendChild(style);
    });

}