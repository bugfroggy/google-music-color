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
