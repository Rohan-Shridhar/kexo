console.log("Background service worker started");
chrome.runtime.onMessage.addListener((message) => {
    console.log("Message received:", message);
    if (message.action === "openGithub") {

        console.log("Opening GitHub...");
        chrome.tabs.create({
            url: "https://github.com/rohan-shridhar"
        });
    }
});