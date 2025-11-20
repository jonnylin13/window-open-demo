// Utility function to log events
function logEvent(message, type = 'info') {
    const logDiv = document.getElementById('log');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="log-time">[${time}]</span>${message}`;
    
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
}

function clearLog() {
    document.getElementById('log').innerHTML = '';
    logEvent('Log cleared', 'info');
}

// ===== URL Types =====

function openSameOrigin() {
    logEvent('Opening same origin URL...', 'info');
    const win = window.open(window.location.href, '_blank');
    if (win) {
        logEvent('✓ Same origin window opened successfully', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openAboutBlank() {
    logEvent('Opening about:blank...', 'info');
    const win = window.open('about:blank', '_blank');
    if (win) {
        logEvent('✓ about:blank opened successfully', 'success');
        logEvent(`Window name: ${win.name || '(unnamed)'}`, 'info');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openExternalURL() {
    logEvent('Opening external URL (example.com)...', 'info');
    const win = window.open('https://example.com', '_blank');
    if (win) {
        logEvent('✓ External URL opened successfully', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openDataURL() {
    logEvent('Opening data URL with inline HTML...', 'info');
    const html = `
        <!DOCTYPE html>
        <html>
        <head><title>Data URL Test</title></head>
        <body style="font-family: Arial; padding: 20px; background: #f0f0f0;">
            <h1>🎉 Data URL Content</h1>
            <p>This content was loaded from a data URL!</p>
            <p>Time: ${new Date().toLocaleString()}</p>
        </body>
        </html>
    `;
    const dataURL = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
    const win = window.open(dataURL, '_blank');
    if (win) {
        logEvent('✓ Data URL window opened successfully', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openRelativePath() {
    logEvent('Opening relative path (sample.html)...', 'info');
    const win = window.open('sample.html', '_blank');
    if (win) {
        logEvent('✓ Relative path window opened successfully', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

// ===== Window Features =====

function openWithToolbar() {
    logEvent('Opening window with toolbar and menubar...', 'info');
    const features = 'toolbar=yes,menubar=yes,location=yes,status=yes';
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Window opened with features: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openMinimal() {
    logEvent('Opening minimal window...', 'info');
    const features = 'toolbar=no,menubar=no,location=no,status=no,scrollbars=yes';
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Minimal window opened with features: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openCustomSize() {
    logEvent('Opening window with custom size (400x300)...', 'info');
    const features = 'width=400,height=300';
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Window opened with dimensions: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openPositioned() {
    logEvent('Opening positioned window...', 'info');
    const left = 100;
    const top = 100;
    const features = `left=${left},top=${top},width=500,height=400`;
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Window opened at position: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openScrollable() {
    logEvent('Opening window with scrollbars...', 'info');
    const features = 'scrollbars=yes,width=300,height=400';
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Scrollable window opened: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

// ===== Target Options =====

function openBlankTarget() {
    logEvent('Opening with target="_blank"...', 'info');
    const win = window.open(window.location.href, '_blank');
    if (win) {
        logEvent('✓ New window/tab opened with _blank target', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openSelfTarget() {
    logEvent('⚠️ Opening with target="_self" (will replace current window)...', 'warning');
    setTimeout(() => {
        window.open(window.location.href, '_self');
    }, 1000);
}

function openNamedTarget() {
    logEvent('Opening with named target "myWindow"...', 'info');
    const win = window.open(window.location.href, 'myWindow');
    if (win) {
        logEvent('✓ Window opened with named target (reuse this window by clicking again)', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openParentTarget() {
    logEvent('Opening with target="_parent"...', 'info');
    const win = window.open(window.location.href, '_parent');
    logEvent('✓ Opened with _parent target (behaves like _self if no parent frame)', 'success');
}

function openTopTarget() {
    logEvent('Opening with target="_top"...', 'info');
    const win = window.open(window.location.href, '_top');
    logEvent('✓ Opened with _top target (behaves like _self if not in frames)', 'success');
}

// ===== Advanced Scenarios =====

function openWithWriteContent() {
    logEvent('Opening about:blank and writing content...', 'info');
    const win = window.open('about:blank', '_blank', 'width=500,height=400');
    if (win) {
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Written Content</title>
                <style>
                    body { 
                        font-family: Arial; 
                        padding: 20px; 
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                    }
                    h1 { margin-top: 0; }
                </style>
            </head>
            <body>
                <h1>✍️ Dynamically Written Content</h1>
                <p>This content was written using document.write()!</p>
                <p>Created at: ${new Date().toLocaleString()}</p>
                <button onclick="window.close()">Close Window</button>
            </body>
            </html>
        `);
        win.document.close();
        logEvent('✓ Content written to new window successfully', 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openMultipleWindows() {
    logEvent('Opening multiple windows...', 'info');
    let count = 0;
    for (let i = 1; i <= 3; i++) {
        const win = window.open('about:blank', `window${i}`, `width=300,height=200,left=${i * 50},top=${i * 50}`);
        if (win) {
            win.document.write(`
                <!DOCTYPE html>
                <html>
                <head><title>Window ${i}</title></head>
                <body style="font-family: Arial; padding: 20px;">
                    <h2>Window #${i}</h2>
                    <p>This is window number ${i}</p>
                </body>
                </html>
            `);
            win.document.close();
            count++;
        }
    }
    logEvent(`✓ Opened ${count} of 3 windows`, count === 3 ? 'success' : 'warning');
}

function openWithNoopener() {
    logEvent('Opening window with rel="noopener"...', 'info');
    const win = window.open(window.location.href, '_blank', 'noopener');
    if (win === null) {
        logEvent('✓ Window opened with noopener (reference is null as expected)', 'success');
    } else if (win) {
        logEvent('⚠️ Window opened but reference might not be null (browser behavior varies)', 'warning');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openWithNoreferrer() {
    logEvent('Opening window with rel="noreferrer"...', 'info');
    const win = window.open(window.location.href, '_blank', 'noreferrer');
    if (win === null) {
        logEvent('✓ Window opened with noreferrer (reference is null, no referrer sent)', 'success');
    } else if (win) {
        logEvent('⚠️ Window opened but reference might not be null (browser behavior varies)', 'warning');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function testWindowReference() {
    logEvent('Testing window reference and properties...', 'info');
    const win = window.open('about:blank', '_blank', 'width=400,height=300');
    if (win) {
        logEvent('✓ Window opened successfully', 'success');
        logEvent(`Reference type: ${typeof win}`, 'info');
        logEvent(`Window closed: ${win.closed}`, 'info');
        logEvent(`Window name: ${win.name || '(unnamed)'}`, 'info');
        
        // Try to access properties
        try {
            logEvent(`Window location: ${win.location.href}`, 'info');
        } catch (e) {
            logEvent(`Cannot access location: ${e.message}`, 'warning');
        }
        
        // Close it after 3 seconds
        setTimeout(() => {
            if (win && !win.closed) {
                win.close();
                logEvent('Test window closed automatically', 'info');
            }
        }, 3000);
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

// ===== Complex Features =====

function openPopup() {
    logEvent('Opening centered popup window...', 'info');
    const width = 500;
    const height = 400;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`;
    
    const win = window.open(window.location.href, 'popup', features);
    if (win) {
        logEvent(`✓ Popup opened at center of screen: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open popup (popup blocked?)', 'error');
    }
}

function openMaximized() {
    logEvent('Attempting to open maximized window...', 'info');
    const features = `width=${screen.availWidth},height=${screen.availHeight},left=0,top=0`;
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Window opened with screen dimensions: ${features}`, 'success');
        logEvent('Note: True fullscreen requires user interaction', 'info');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openWithAllFeatures() {
    logEvent('Opening window with comprehensive feature string...', 'info');
    const features = [
        'width=800',
        'height=600',
        'left=100',
        'top=100',
        'toolbar=yes',
        'menubar=yes',
        'location=yes',
        'status=yes',
        'scrollbars=yes',
        'resizable=yes'
    ].join(',');
    
    const win = window.open(window.location.href, '_blank', features);
    if (win) {
        logEvent(`✓ Window opened with all features: ${features}`, 'success');
    } else {
        logEvent('✗ Failed to open window (popup blocked?)', 'error');
    }
}

function openConditional() {
    logEvent('Testing conditional window open (popup blocker detection)...', 'info');
    const win = window.open('about:blank', '_blank', 'width=400,height=300');
    
    if (win === null || typeof win === 'undefined') {
        logEvent('✗ Window was blocked by popup blocker', 'error');
    } else {
        logEvent('✓ Window opened successfully', 'success');
        
        // Check if window was actually opened
        setTimeout(() => {
            if (win.closed) {
                logEvent('⚠️ Window was closed immediately', 'warning');
            } else {
                logEvent('✓ Window is still open', 'success');
                win.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head><title>Conditional Test</title></head>
                    <body style="font-family: Arial; padding: 20px;">
                        <h2>✅ Popup Not Blocked</h2>
                        <p>This window opened successfully!</p>
                    </body>
                    </html>
                `);
                win.document.close();
            }
        }, 100);
    }
}

// Log initial message
window.addEventListener('DOMContentLoaded', () => {
    logEvent('🚀 window.open() Test Bed loaded successfully', 'success');
    logEvent('Click any button to test different window.open() scenarios', 'info');
});
