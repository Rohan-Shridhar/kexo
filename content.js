console.log("Content script loaded");
/*
document.addEventListener("keydown", (e) => {
    console.log(e.key);
});
*/
document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key, e.ctrlKey, e.shiftKey);
    if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "q" &&
        e.key.toLowerCase() === "w" &&
        e.key.toLowerCase() === "e" &&
        e.key.toLowerCase() === "r" &&
        e.key.toLowerCase() === "t"
    ) {
        console.log("Ctrl + Shift + G detected!");
        chrome.runtime.sendMessage({
            action: "openGithub"
        });
    }
});