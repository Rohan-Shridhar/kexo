# kexo

A browser extension that renders all webpage fonts in Minecraft style.

## Features

- Replaces all webpage fonts with Minecraft typeface
- Supports bold, italic, and bold-italic variants
- Works on all websites
- Zero configuration needed

## Installation

1. Clone or download this repository
2. Open your browser's extension settings
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `kexo` folder

## How It Works

The extension injects a content script on all webpages that:
- Registers 4 Minecraft font variants (regular, bold, italic, bold+italic)
- Applies the Minecraft font family to all elements with `!important`

## Files

- `manifest.json` - Extension configuration
- `content.js` - Font injection script
- `fonts/` - Minecraft font files (OTF format)