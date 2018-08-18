// Apply CSS
updateStyle();

// Listen for changes to the DOM
new MutationObserver((mutations) => {
    mutations.forEach((data) => {
        if(data.type === "attributes") {
            if(data.target instanceof HTMLElement) {
                if(!data.target.hasAttribute("data-gmusic-props")) {
                    // Not registered, check if needs to be registered
                    for (let i = 0; i < targets.length; i++) {
                        let target = targets[i];
                        if (data.target.matches(target.name)) { // Matches a target, register it
                            data.target.setAttribute("data-gmusic-props", target.properties.join(" "));
                            data.target.setAttribute("data-gmusic-color-selector", target.name);
                            break;
                        }
                    }
                } else {
                    // Already registered, check if needs to be unregistered
                    if(!data.target.matches(data.target.getAttribute("data-gmusic-color-selector"))) // No longer matches its target
                        data.target.removeAttribute("data-gmusic-props");
                }
            }
        } else if(data.type === "childList") {
            if (data.addedNodes != null && data.addedNodes.length > 0) {
                data.addedNodes.forEach((node) => {
                   if (node instanceof HTMLElement)
                       if(!node.hasAttribute("data-gmusic-props")) {
                           // Not registered, check if needs to be registered
                           for (let i = 0; i < targets.length; i++) {
                               let target = targets[i];
                               if (node.matches(target.name)) { // Matches a target, register it
                                   node.setAttribute("data-gmusic-props", target.properties.join(" "));
                                   node.setAttribute("data-gmusic-color-selector", target.name);
                                   break;
                               }
                           }
                       } else {
                           // Already registered, check if needs to be unregistered
                           if(!node.matches(node.getAttribute("data-gmusic-color-selector"))) // No longer matches its target
                               node.removeAttribute("data-gmusic-props");
                       }
                })
            }
        }
    })
}).observe(document.body, { attributes: true, childList: true, subtree: true });