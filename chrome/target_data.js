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
    },
    {
        name: ".paper-spinner-lite-2 .spinner-layer.paper-spinner-lite",
        properties: ["color"]
    },
    {
        name: "iron-icon.primary:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: "#playlist-drawer:not([style-scope]):not(.style-scope) .playlist-drawer-item.playlist-drop-target:not([style-scope]):not(.style-scope) .playlist-wrapper:not([style-scope]):not(.style-scope) .playlist-title:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: ".nav-item-container.selected:not([style-scope]):not(.style-scope),.nav-item-container.selected:not([style-scope]):not(.style-scope) iron-icon:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: "#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"repeat\"].active:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"shuffle\"].active:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) #exp-menu-shuffle.active:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) #exp-menu-repeat.active:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) #exp-menu-queue.opened:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"queue\"].opened:not([style-scope]):not(.style-scope),#player:not([style-scope]):not(.style-scope) paper-icon-button:not([style-scope]):not(.style-scope) #exp-menu-queue.opened:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: "#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"play-pause\"]:not([style-scope]):not(.style-scope):not([disabled])",
        properties: ["color"]
    },
    {
        name: ".primary:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: ".primary-background:not([style-scope]):not(.style-scope)",
        properties: ["background-color"]
    },
    {
        name: "paper-icon-button.sj-callout-target:not([style-scope]):not(.style-scope)",
        properties: ["background-color"]
    },
    {
        name: ".top-charts-view:not([style-scope]):not(.style-scope) .song-row:not([style-scope]):not(.style-scope) [data-col=\"index\"]:not([style-scope]):not(.style-scope) .column-content:not([style-scope]):not(.style-scope),paper-toast:not([style-scope]):not(.style-scope) paper-button[data-action=\"button\"]:not([style-scope]):not(.style-scope),.ups.light:not([style-scope]):not(.style-scope) iron-icon:not([style-scope]):not(.style-scope),.upload-dialog-dragover:not([style-scope]):not(.style-scope) .upload-dialog-description:not([style-scope]):not(.style-scope),paper-dialog:not([style-scope]):not(.style-scope) .buttons:not([style-scope]):not(.style-scope) paper-button:not([style-scope]):not(.style-scope):not([disabled])",
        properties: ["color"]
    },
    {
        name: ".goog-menu:not([style-scope]):not(.style-scope) .goog-menuitem.selected:not([style-scope]):not(.style-scope) .goog-menuitem-content:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: ".upload-dialog-title:not([style-scope]):not(.style-scope)",
        properties: ["background-color"]
    },
    {
        name: ".upload-dialog-dragover:not([style-scope]):not(.style-scope)",
        properties: ["border-color"]
    }
];

function updateStyle() {
    // Get color
    chrome.storage.sync.get(["gmusic_color"], function(items) {
        let color = items.gmusic_color;

        // Delete previously created gmusic-color style if its there
        let currentStyleElem = document.getElementById("gmusic-color-style");
        if(currentStyleElem != null)
            currentStyleElem.parentElement.removeChild(currentStyleElem);

        // Create a new style
        let style = document.createElement("style");
        style.id = "gmusic-color-style";
        style.type = 'text/css';

        // Keep track of properties already set in the for loop
        let setProperties = [];
        // Append all of the style properties to the new style element
        for(let i = 0; i < targets.length; i++) {
            for(let j = 0; j < targets[i].properties.length; j++) {
                let property = targets[i].properties[j];
                if(!setProperties.includes(property)) {
                    let stylePropStr = "*[data-gmusic-color-props~=\"" + property + "\"] { " + property + ": " + color + " !important; }";
                    style.appendChild(document.createTextNode(stylePropStr));
                    setProperties.push(property);
                }
            }
        }

        // Append style to head
        document.getElementsByTagName("head")[0].appendChild(style);
    });

}