// Apply CSS
chrome.storage.sync.get(["gmusic_color", "gmusic_rainbow_toggle"], function(items) {
    if(items.gmusic_rainbow_toggle) {
        let currentColor = items.gmusic_color;
        setInterval(() => {
            let currentChromaColor = chroma(currentColor);
            currentColor = currentChromaColor.set("hsl.h", currentChromaColor.get("hsl.h") + 1).hex();
            updateStyle(currentColor);
        }, 50);
    } else
        updateStyle(items.gmusic_color);
});

function checkNode(node) {
    if (node instanceof HTMLElement)
        if(!node.hasAttribute("data-gmusic-color-props")) {
            // Not registered, check if needs to be registered
            for (let i = 0; i < targets.length; i++) {
                let target = targets[i];
                if (target.name && node.matches(target.name)) { // Matches a target, register it
                    node.setAttribute("data-gmusic-color-props", target.properties.join(" "));
                    node.setAttribute("data-gmusic-color-selector", target.name);
                    break;
                }
            }
        } else {
            // Already registered, check if needs to be unregistered
            if(!node.matches(node.getAttribute("data-gmusic-color-selector"))) // No longer matches its target
                node.removeAttribute("data-gmusic-color-props");
        }
}

// Check all current elements of DOM at init
let selector = "";
for(let i = 0; i < targets.length; i++)
    if(targets[i].name)
        selector += targets[i].name + ",";
selector = selector.substring(0, selector.length - 1);
document.querySelectorAll(selector).forEach(checkNode);

// Listen for changes to the DOM
new MutationObserver((mutations) => {
    mutations.forEach((data) => {
        if(data.type === "attributes") {
            checkNode(data.target);
        } else if(data.type === "childList") {
            if (data.addedNodes != null && data.addedNodes.length > 0) {
                data.addedNodes.forEach((node) => {
                  checkNode(node);
                })
            }
        }
    })
}).observe(document.body, { attributes: true, childList: true, subtree: true });