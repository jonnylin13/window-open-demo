# 🪟 window.open() Test Bed

A comprehensive static HTML + JavaScript test bed for experimenting with the `window.open()` API. Perfect for testing various URL types, window features, target options, and advanced scenarios.

## 🚀 Features

This test bed allows you to test:

### URL Types
- **Same Origin**: Opens the current page in a new window
- **about:blank**: Opens a blank page
- **External URL**: Opens an external website (example.com)
- **Data URL**: Opens inline HTML content via data URL
- **Relative Path**: Opens a local file (sample.html)

### Window Features
- **With Toolbar**: Opens with browser toolbar and menubar
- **Minimal Window**: Opens without toolbar, menubar, or location bar
- **Custom Size**: Opens a window with specific dimensions (400x300)
- **Positioned**: Opens window at a specific screen position
- **Scrollable**: Opens with scrollbars enabled

### Target Options
- **_blank**: Opens in a new window/tab (default)
- **_self**: Replaces current window
- **Named Target**: Reuses the same named window
- **_parent**: Opens in parent frame (if any)
- **_top**: Opens in topmost frame

### Advanced Scenarios
- **Write Content**: Opens about:blank and dynamically writes HTML
- **Multiple Windows**: Opens 3 windows simultaneously
- **With noopener**: Opens without window.opener reference
- **With noreferrer**: Opens without referrer information
- **Test Reference**: Gets window reference and properties

### Complex Features
- **Popup Window**: Small centered popup
- **Fullscreen**: Attempts to open maximized window
- **All Features**: Comprehensive feature string
- **Conditional Open**: Tests for popup blocker

## 📖 Usage

### GitHub Pages

Visit the live demo at: `https://[username].github.io/window-open-demo/`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/jonnylin13/window-open-demo.git
   cd window-open-demo
   ```

2. Open `index.html` in your browser:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Or simply open the file
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. Click any button to test different `window.open()` scenarios

## 🎯 Event Log

The test bed includes a real-time event log that shows:
- When windows are opened
- Success/failure status
- Window features used
- Popup blocker detection
- Error messages

## 🔧 Files

- `index.html` - Main test bed interface
- `sample.html` - Sample page for relative path testing
- `styles.css` - Styling for the interface
- `script.js` - All window.open() test functions

## 🌐 Browser Compatibility

This test bed works in all modern browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Opera

Note: Some features may behave differently across browsers due to security policies and popup blockers.

## ⚠️ Popup Blockers

Most modern browsers block popups by default. You may need to:
1. Allow popups for this site
2. Look for popup blocker indicators in the address bar
3. Check the event log for blocked popup notifications

## 📝 License

MIT License - Feel free to use this for testing and learning!

## 🤝 Contributing

Feel free to open issues or submit pull requests to add more test scenarios!