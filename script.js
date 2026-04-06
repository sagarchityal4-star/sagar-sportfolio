/* =========================================
   1. INITIATING THE UNIQUE BACKGROUND
   ========================================= */
// This function gets called to configure and draw the unique background.
// We are using a robust particle background library for dynamic visuals.
function initUniqueBackground() {
    
    // We get the specific subtle color from our CSS variable definitions
    const rootStyle = getComputedStyle(document.documentElement);
    const particleColor = rootStyle.getPropertyValue('--particle-color').trim().replace(/["']/g, "");

    /* particlesJS.load(@dom-id, @path-to-json, @callback (optional)); */
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: particleColor }, // Use the subtle theme color
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: particleColor, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: 'none', random: true, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' }, // Interactions make it unique
                onclick: { enable: true, mode: 'push' }
            },
            modes: { grab: { distance: 200, line_linked: { opacity: 0.6 } } }
        },
        retina_detect: true
    });
}

// Ensure the background loads when the page opens
window.addEventListener('DOMContentLoaded', initUniqueBackground);


/* =========================================
   2. DARK MODE TOGGLE LOGIC (REQUIREMENT #5)
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check user's preferred theme from browser/OS settings on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.replace('light-theme', 'dark-theme');
}

// Function to handle theme switching
themeToggle.addEventListener('click', () => {
    
    if (body.classList.contains('light-theme')) {
        // Switch to Dark Theme
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark'); // Remember setting
    } else {
        // Switch to Light Theme
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light'); // Remember setting
    }

    // IMPORTANT: After changing themes, we need to refresh the unique 
    // background colors so particles switch between light/dark.
    initUniqueBackground();
});
