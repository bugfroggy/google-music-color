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
    { // Top charts number
        selector: ".top-charts-view:not([style-scope]):not(.style-scope) .song-row:not([style-scope]):not(.style-scope) [data-col=\"index\"]:not([style-scope]):not(.style-scope) .column-content:not([style-scope]):not(.style-scope), paper-toast:not([style-scope]):not(.style-scope) paper-button[data-action=\"button\"]:not([style-scope]):not(.style-scope), .ups.light:not([style-scope]):not(.style-scope) iron-icon:not([style-scope]):not(.style-scope), .upload-dialog-dragover:not([style-scope]):not(.style-scope) .upload-dialog-description:not([style-scope]):not(.style-scope), paper-dialog:not([style-scope]):not(.style-scope) .buttons:not([style-scope]):not(.style-scope) paper-button:not([style-scope]):not(.style-scope):not([disabled])",
        properties: ["color"]
    },
    {
        name: "#player:not([style-scope]):not(.style-scope) paper-icon-button[data-id=\"play-pause\"]:not([style-scope]):not(.style-scope):not([disabled])",
        properties: ["color"]
    },
    { // Input box (i.e. share window copy link) underline color
        selector: ".paper-input-container-0 .focused-line.paper-input-container",
        properties: ["background"]
    },
    {
        selector: ".primary:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    {
        name: ".paper-tabs-1 #selectionBar.paper-tabs",
        properties: ["border-color"]
    },
    {
        selector: "sj-home[selected=\"0\"] gpm-headline-header.x-scope.gpm-headline-header-0 .home-palette-id-3,sj-home[selected=\"1\"] gpm-headline-header.x-scope.gpm-headline-header-0 .home-palette-id-3",
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
        selector: "paper-dialog input::selection, paper-dialog textarea::selection",
        properties: ["background-color"],
        opacity: 75
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
    },
    {
        name: ".paper-button-2",
        properties: ["background-color"]
    },
    { // Explicit icon
        name: "iron-icon[icon=\"av:explicit\"]",
        properties: ["color"]
    },
    { // Scrolling page indicator on home screen
        selector: ".home-palette-id-5.sj-page-tab.style-scope.sj-page-indicator.iron-selected", // Allows for direct access to the selector
                                                                                                // instead of applying metadata and selecting that
                                                                                                // This helps resolve issues with selector specificity
                                                                                                // Avoid wherever possible to improve speed
        properties: ["color"]
    },
    { // Quick navigation home button when on home screen
        selector: "gpm-quick-nav-item.home-palette-id-5.x-scope.gpm-quick-nav-item-0",
        properties: ["color"]
    },
    { // Quick navigation buttons on side of screen
        name: ".gpm-quick-nav-2 .items.gpm-quick-nav > [selected]",
        properties: ["color"]
    },
    { // Checkbox
        selector: ".paper-checkbox-1 #checkbox.checked.paper-checkbox",
        properties: ["background-color", "border-color"]
    },
    { // Switch handle
        selector: ".paper-toggle-button-0[checked]:not([disabled]) .toggle-button.paper-toggle-button",
        properties: ["background-color"]
    },
    { // Switch background
        selector: ".paper-toggle-button-0[checked]:not([disabled]) .toggle-bar.paper-toggle-button",
        properties: ["background-color"]
    },
    { // Toggle ripple animation
        name: ".paper-toggle-button-0[checked] .toggle-ink.paper-toggle-button",
        properties: ["color"]
    },
    { // Popout Menu icon
        selector: ".nav-item-container.selected:not([style-scope]):not(.style-scope), .nav-item-container.selected:not([style-scope]):not(.style-scope) iron-icon:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    },
    { // Form data highlighted field label
        selector: ".paper-input-container-0 .input-content.label-is-highlighted.paper-input-container label, .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container .paper-input-label",
        properties: ["color"]
    },
    { // Form data highlighted field addon
        selector: ".paper-input-container-0 .add-on-content.is-highlighted.paper-input-container *",
        properties: ["color"]
    },
    { // Volume knob
        name: ".paper-slider-1 .slider-knob-inner.paper-slider",
        properties: ["background-color", "border-color"]
    },
    { // Volume bar
        name: ".paper-progress-3 #primaryProgress.paper-progress",
        properties: ["background"]
    },
    { // Volume ripple animation
        name: ".paper-slider-1 paper-ripple.paper-slider",
        properties: ["color"]
    },
    { // Playlist play button
        name: ".sj-play-button-0",
        properties: ["background-color"]
    },
    { // Splash screen progress bar
        name: ".paper-progress-1 #primaryProgress.paper-progress",
        properties: ["background"]
    }
];

function updateStyle(color) {

        // Delete previously created gmusic-color style if its there
        let currentStyleElem = document.getElementById("gmusic-color-style");
        if(currentStyleElem != null)
            currentStyleElem.parentElement.removeChild(currentStyleElem);

        // Create a new style
        let style = document.createElement("style");
        style.id = "gmusic-color-style";
        style.type = 'text/css';

        // Keep track of properties and selectors
        let setProperties = [];
        let setSelectors = [];
        // Append all of the style properties to the new style element
        for(let i = 0; i < targets.length; i++) {
            let thisTargetsColor = color;
            if(typeof targets[i].opacity === 'number')
                thisTargetsColor += Math.floor(targets[i].opacity * 100 / 256);

            // Prepare to add selector CSS if it is necessary
            let styleSelectorStr;
            if(typeof targets[i].selector === 'string' && !setSelectors.includes(targets[i].selector))
                styleSelectorStr = targets[i].selector + " { ";
            // Loop through CSS properties
            for(let j = 0; j < targets[i].properties.length; j++) {
                let property = targets[i].properties[j];
                // Check properties
                if(!setProperties.includes(property)) {
                    let stylePropStr = "*[data-gmusic-color-props~=\"" + property + "\"] { " + property + ": " + thisTargetsColor + " !important; }";
                    style.appendChild(document.createTextNode(stylePropStr));
                    setProperties.push(property);
                }

                // If setting selector then add this property to the selector
                if(styleSelectorStr) {
                    styleSelectorStr += property + ": " + thisTargetsColor + " !important;";
                }
            }
            // Finish up selector CSS if necessary
            if(styleSelectorStr) {
                styleSelectorStr += "}";
                style.appendChild(document.createTextNode(styleSelectorStr));
                setSelectors.push(targets[i].selector);
            }
        }

        // Append style to head
        document.getElementsByTagName("head")[0].appendChild(style);
}