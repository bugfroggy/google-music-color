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
    },
    { // Categories drop down selected text
        selector: "div.goog-menu:not([style-scope]):not(.style-scope) div.goog-menuitem.selected:not([style-scope]):not(.style-scope) div.goog-menuitem-content:not([style-scope]):not(.style-scope)",
        properties: ["color"]
    }
];

let dark_targets = [
    { // Background color of home page & body
        selector: "#backgroundColor, body.qp",
        style: {
            "background-color": "rgb(50,50,50)"
        }
    },
    { // Remove the background image on home page
        selector: "#backgroundImageContainer",
        style: {
            "display": "none"
        }
    },
    { // Home page header text, "Recent activity" arrow
        selector: ".gpm-headline-header-0 h2.gpm-headline-header",
        style: {
            "color": "white"
        }
    },
    { // Palette 2 - Menu buttons, subtext, etc.
        selector: "div.home-view.g-content sj-home .home-palette-id-2",
        style: {
            "color": "rgba(255,255,255,0.7)"
        }
    },
    { // Palette 1 - Album titles, "Recent Activity", etc.
        selector: "div.home-view.g-content sj-home .home-palette-id-1",
        style: {
            "color": "#ffffff"
        }
    },
    { // Palette 0 - Album titles, "Recent Activity", etc.
        selector: "div.home-view.g-content sj-home .home-palette-id-0:not(.gpm-now-card-grid)",
        style: {
            "color": "rgb(200,200,200)"
        }
    },
    { // Cards
        selector: ".sj-card-0[card-aspect-ratio=\"wide\"]",
        style: {
            "background-color": "#505050"
        }
    },
    { // Player background color
        selector: "#player",
        style: {
            "background-color": "#202020"
        }
    },
    { // Top toolbar
        selector: ".paper-toolbar-1",
        style: {
            "background": "#202020",
            "border-color": "#101010"
        }
    },
    { // Search box
        selector: ".sj-search-box-1",
        style: {
            "background-color": "#303030",
            "border-color": "#202020"
        }
    },
    { // Search box (opened/typed in)
        selector: ".sj-search-box-1[opened], .sj-search-box-1[has-query]",
        style: {
            "background-color": "#404040"
        }
    },
    { // Search suggestion hover
        selector: ".sj-search-suggestion-0:hover, .sj-search-suggestion-0.query-selected, .sj-entity-suggestion-0:hover, .sj-entity-suggestion-0.query-selected",
        style: {
            "background-color": "#505050"
        }
    },
    { // Last search "entity" border
        selector: ".sj-search-box-1 sj-entity-suggestion.sj-search-box:last-of-type",
        style: {
            "border-color": "#303030",
            "box-shadow-color": "#303030"
        }
    },
    { // Search item titles, search input color
        selector: ".sj-entity-suggestion-0 #title.sj-entity-suggestion, .sj-search-box-1 #input.sj-search-box, .sj-search-suggestion-0 #queryText.sj-search-suggestion .sub-match.sj-search-suggestion",
        style: {
            "color": "#aaaaaa"
        }
    },
    { // Search results play button
        selector: ".sj-play-button-10",
        style: {
            "background-color": "#aaaaaa"
        }
    },
    { // Play controls
        selector: "body, #player .now-playing-actions paper-icon-button",
        style: {
            "color": "#eeeeee"
        }
    },
    { // Toolbar hamburger
        selector: ".paper-toolbar-1",
        style: {
            "color": "#aaa"
        }
    },
    { // Home page arrows
        selector: ".gpm-now-card-grid-0 .buttons.gpm-now-card-grid paper-icon-button.gpm-now-card-grid",
        style: {
            "color": "#eee"
        }
    },
    { // Left drawer background color
        selector: ".paper-drawer-panel-1 iron-selector.paper-drawer-panel > #drawer.paper-drawer-panel",
        style: {
            "background-color": "#202020"
        }
    },
    { // Left drawer selected background color
        selector: ".nav-item-container.selected, #nav_collections .nav-item-container:focus, .nav-item-container:focus, .nav-item-container:hover",
        style: {
            "background-color": "#303030"
        }
    },
    { // Left drawer text color
        selector: ".nav-item-container",
        style: {
            "color": "#aaa"
        }
    },
    { // Left drawer divider
        selector: ".new-playlist-drawer .nav-section-divider",
        style: {
            "border-color": "#101010"
        }
    },
    { // Right drawer background color
        selector: "sj-right-drawer #drawer.sj-right-drawer, #playlist-drawer:not([style-scope]):not(.style-scope) paper-header-panel[at-top]:not([style-scope]):not(.style-scope) paper-toolbar:not([style-scope]):not(.style-scope)",
        style: {
            "background-color": "#202020"
        }
    },
    { // Right drawer text color
        selector: "#playlist-drawer #playlist-drawer-header, a, .simple-dialog a",
        style: {
            "color": "#aaa"
        }
    },
    { // Hover right drawer item
        selector: "#playlist-drawer .playlist-drawer-item .playlist-wrapper:hover, #playlist-drawer .playlist-drawer-item .playlist-wrapper:focus, #playlist-drawer .playlist-drawer-item sj-play-button:hover~.playlist-wrapper, #playlist-drawer .playlist-drawer-item iron-icon:hover~.playlist-wrapper, #playlist-drawer .playlist-drawer-item.playlist-drop-target:not(.subscribed) .playlist-wrapper",
        style: {
            "background-color": "#303030"
        }
    },
    { // Right drawer border colors
        selector: "#playlist-drawer:not([style-scope]):not(.style-scope) paper-header-panel[at-top]:not([style-scope]):not(.style-scope) paper-toolbar:not([style-scope]):not(.style-scope), #playlist-drawer .autoplaylist-section, #playlist-drawer #recent-playlists-container",
        style: {
            "border-color": "#101010"
        }
    },
    { // Music library page header color
        selector: ".cluster .header .cluster-title, .section-header",
        style: {
            "color": "#aaa"
        }
    },
    { // Music library card details background
        selector: ".lane-content div:not([data-type=\"artist\"]) .details",
        style: {
            "background-color": "#505050"
        }
    },
    { // Music library card title
        selector: ".details-inner a.title",
        style: {
            "color": "#ddd"
        }
    },
    { // Music library card sub-title
        selector: ".details-inner a.sub-title",
        style: {
            "color": "#bbb"
        }
    },
    { // Music library text fade-out
        selector: ".details-inner .fade-out:after",
        style: {
            "background": "linear-gradient(to right,rgba(80,80,80,0),rgba(80,80,80,1))"
        }
    },
    { // Change fade on artist cards library text fade-out
        selector: "div[data-type=\"artist\"] .details-inner .fade-out:after",
        style: {
            "background": "linear-gradient(to right,rgba(50,50,50,0),rgba(50,50,50,1))"
        }
    },
    { // Song list container
        selector: ".songlist-container",
        style: {
            "background-color": "#202020"
        }
    },
    { // Song table background
        selector: ".song-table",
        style: {
            "background-color": "#202020"
        }
    },
    { // Song list header
        selector: ".song-table th",
        style: {
            "color": "#aaa"
        }
    },
    { // Song list song title
        selector: ".song-table [data-col=\"title\"], .song-table.mini [data-col=\"song-details\"] .song-title",
        style: {
            "color": "white"
        }
    },
    { // Song list selected song background
        selector: ".song-row.selected-song-row td, .song-row.currently-playing td, .song-row:hover td",
        style: {
            "background-color": "#404040"
        }
    },
    { // Song list song background, border, & text color
        selector: ".song-row td",
        style: {
            "background-color": "#202020",
            "color": "#909090",
            "border-color": "#101010"
        }
    },
    { // Artist page header
        selector: ".gpm-detail-page-header-0 div.gpm-detail-page-header > [slot=\"title\"]",
        style: {
            "color": "white"
        }
    },
    { // Artist page description
        selector: ".gpm-detail-page-header-0 div.gpm-detail-page-header > [slot=\"subtitle\"], .gpm-detail-page-header-0 div.gpm-detail-page-header > [slot=\"description\"], .gpm-detail-page-header-0 div.gpm-detail-page-header > [slot=\"metadata\"]",
        style: {
            "color": "rgba(255, 255, 255, 0.54)"
        }
    },
    { // Description hover
        selector: ".gpm-detail-page-header-0[description-overflows] #descriptionWrapper.gpm-detail-page-header:hover",
        style: {
            "background-color": "#404040"
        }
    },
    { // Artist page buttons
        selector: ".gpm-detail-page-header-0 div.gpm-detail-page-header > [slot=\"buttons\"]",
        style: {
            "color": "rgba(255,255,255,0.87)"
        }
    },
    { // Dropdown menu (i.e. podcasts category menu)
        selector: ".goog-menu, .now-playing-menu .goog-menuitem, .now-playing-menu .goog-submenu, .now-playing-menu .goog-submenu .goog-submenu-arrow, .goog-menuitem",
        style: {
            "background-color": "#202020"
        }
    },
    { // Dropdown menu content
        selector: ".goog-menu .goog-menuitem .goog-menuitem-content",
        style: {
            "color": "#aaa"
        }
    },
    { // Dropdown menu hover
        selector: ".goog-menu .goog-menuitem:hover",
        style: {
            "background-color": "#353535"
        }
    },
    { // Queue background
        selector: ".sj-mini-queue-0",
        style: {
            "background-color": "#202020"
        }
    },
    { // Queue "border" (Bubble arrow at the bottom)
        selector: "#queue-overlay::after",
        style: {
            "border-color": "#202020"
        }
    },
    { // Queue text color
        selector: ".material-empty .empty-message, .material-empty .empty-submessage",
        style: {
            "color": "#ccc"
        }
    },
    { // Recently played screen title
        selector: ".gpm-card-grid-0 > [slot=\"title\"]",
        style: {
            "color": "white"
        }
    },
    { // Top songs "More songs"
        selector: ".more-songs-container",
        style: {
            "border-color": "#101010",
            "background-color": "#202020"
        }
    },
    { // Top songs background
        selector: ".top-tracks",
        style: {
            "background-color": "#202020"
        }
    },
    { // Browse stations, potentially other vertical lists
        selector: "gpm-vertical-list ul",
        style: {
            "background-color": "#202020"
        }
    },
    { // Vertical list hover
        selector: ".gpm-vertical-list-0 #items.gpm-vertical-list > *:hover, .gpm-vertical-list-0 #items.gpm-vertical-list > *[focused]",
        style: {
            "background-color": "#303030"
        }
    },
    { // Overlay background
        selector: ".iron-overlay-backdrop-0",
        style: {
            "background-color": "black"
        }
    },
    { // Popup background
        selector: ".paper-dialog-0",
        style: {
            "background-color": "#202020",
            "color": "#eee"
        }
    },
    { // Upload background
        selector: ".upload-dialog-bg",
        style: {
            "background-color": "#000"
        }
    },
    { // Upload menu
        selector: ".upload-dialog-content, .upload-dialog-description",
        style: {
            "color": "#999",
            "background-color": "#202020"
        }
    },
    { // Settings various text
        selector: ".labs-card .lab-list-item .lab-info .lab-description, .music-source-empty-message, .paper-checkbox-1 #checkboxLabel.paper-checkbox, .paper-checkbox-1[checked] #checkboxLabel.paper-checkbox, .paper-checkbox-1 #checkboxLabel.paper-checkbox",
        style: {
            "color": "#aaa"
        }
    },
    { // Settings dropdown text color
        selector: ".paper-input-container-0 .input-content.paper-input-container input, .paper-input-container-0 .input-content.paper-input-container textarea, .paper-input-container-0 .input-content.paper-input-container iron-autogrow-textarea, .paper-input-container-0 .input-content.paper-input-container .paper-input-input",
        style: {
            "color": "#ccc"
        }
    },
    { // Settings card background
        selector: ".settings-card",
        style: {
            "background-color": "#202020"
        }
    },
    { // Context menu separator
        selector: ".goog-menu .goog-menuseparator",
        style: {
            "background-color": "#101010"
        }
    },
    { // Loading overlay background
        selector: "#loading-overlay[data-type=\"full-loading-overlay\"], #loading-overlay[data-type=\"regular-loading-overlay\"]",
        style: {
            "background-color": "rgba(0,0,0,0.5)"
        }
    }
];

function updateStyle(color, dark) {

    // Delete previously created gmusic-color style if its there
    let currentStyleElem = document.getElementById("gmusic-color-style");
    let currentDarkElem = document.getElementById("gmusic-color-dark-style");
    if(currentStyleElem != null)
        currentStyleElem.parentElement.removeChild(currentStyleElem);
    if(!dark && currentDarkElem != null)
        currentDarkElem.parentElement.removeChild(currentDarkElem);

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


    // Dark mode CSS
    if(dark && currentDarkElem == null) {
        // Create a new style
        let darkStyle = document.createElement("style");
        darkStyle.id = "gmusic-color-dark-style";
        darkStyle.type = 'text/css';

        let styleStr = "";
        // Add each styled element
        for(let i = 0; i < dark_targets.length; i++) {
            styleStr += dark_targets[i].selector + " { ";
            // Add each property
            for(let prop in dark_targets[i].style) {
                if(dark_targets[i].style.hasOwnProperty(prop)) {
                    styleStr += prop + ": " + dark_targets[i].style[prop] + " !important;";
                }
            }
            styleStr += " }";
        }

        darkStyle.appendChild(document.createTextNode(styleStr));
        document.getElementsByTagName("head")[0].appendChild(darkStyle);
    }
}