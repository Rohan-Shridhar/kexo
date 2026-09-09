// content.js
const style = document.createElement('style');
style.textContent = `
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
  
  * {
    font-family: 'Minecraft', monospace !important;
  }
`;

document.documentElement.appendChild(style);