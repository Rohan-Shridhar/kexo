// content.js

let minecraftStyle = null;


// Create and apply the Minecraft font
function enableMinecraftFont() {
    // Don't create it twice
    if (minecraftStyle) {
        return;
    }

    minecraftStyle = document.createElement('style');

    minecraftStyle.id = 'kexo-minecraft-font';

    minecraftStyle.textContent = `
        @font-face {
            font-family: 'Minecraft';
            src: url('${chrome.runtime.getURL('fonts/MinecraftRegular-Bmg3.otf')}') format('opentype');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Minecraft';
            src: url('${chrome.runtime.getURL('fonts/MinecraftBold-nMK1.otf')}') format('opentype');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'Minecraft';
            src: url('${chrome.runtime.getURL('fonts/MinecraftItalic-R8Mo.otf')}') format('opentype');
            font-weight: normal;
            font-style: italic;
        }

        @font-face {
            font-family: 'Minecraft';
            src: url('${chrome.runtime.getURL('fonts/MinecraftBoldItalic-1y1e.otf')}') format('opentype');
            font-weight: bold;
            font-style: italic;
        }

        body,
        p,
        span,
        div,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        li,
        td,
        th,
        label,
        button,
        input,
        textarea {
            font-family: 'Minecraft', monospace !important;
        }

        [class*="icon"],
        [class*="fa"],
        .material-icons,
        .glyphicon,
        svg {
            font-family: inherit !important;
        }
    `;

    document.documentElement.appendChild(minecraftStyle);
}


// Remove Minecraft font
function disableMinecraftFont() {
    if (minecraftStyle) {
        minecraftStyle.remove();
        minecraftStyle = null;
    }
}


// Receive messages from popup.js
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'setFont') {
        if (message.enabled) {
            enableMinecraftFont();
        } else {
            disableMinecraftFont();
        }
    }
});


// Restore saved state when the page loads
chrome.storage.local.get(['fontEnabled'], (result) => {
    const enabled = result.fontEnabled ?? false;

    if (enabled) {
        enableMinecraftFont();
    }
});