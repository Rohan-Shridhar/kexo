const fontToggle = document.getElementById("fontToggle");
const toggleIcon = document.getElementById("toggleIcon");


// Update toggle appearance
function updateToggle(enabled) {
    if (enabled) {
        toggleIcon.className = "fa-solid fa-toggle-on";
        fontToggle.classList.add("enabled");
    } else {
        toggleIcon.className = "fa-solid fa-toggle-off";
        fontToggle.classList.remove("enabled");
    }
}


// Send state to content.js
async function updateFontOnPage(enabled) {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!tab?.id) return;

    try {
        await chrome.tabs.sendMessage(tab.id, {
            action: "setFont",
            enabled: enabled
        });
    } catch (error) {
        console.log("Content script unavailable:", error);
    }
}


// Load saved state
chrome.storage.local.get("fontEnabled", (result) => {
    const enabled = result.fontEnabled ?? false;

    updateToggle(enabled);
});


// Toggle
fontToggle.addEventListener("click", async () => {
    const result = await chrome.storage.local.get("fontEnabled");

    const enabled = !(result.fontEnabled ?? false);

    await chrome.storage.local.set({
        fontEnabled: enabled
    });

    updateToggle(enabled);
    updateFontOnPage(enabled);
});