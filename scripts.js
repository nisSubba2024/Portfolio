/*
 * //////////////////////////////////////////////////////////////////////
 *      PROGRAM: PORTFOLIO/SCRIPTS.JS
 *      Written by Nishan Subba
 *      GitHub: @nisSubba2024
 *      Purpose: Logic and functionalities for the portfolio website
 *      Last Date Modified: Dec 31, 2024
 * //////////////////////////////////////////////////////////////////////
 */
const toggleBtn = document.querySelector(".toggle-btn");
const root = document.documentElement;
let darkModeState = false; // current if light mode

// Light mode color scheme
const lightTextColor = "#000";
const lightBoxShadow = "0 0 12px -2px rgba(0, 0, 0, 0.5)";
const lightPrimaryBgColor = "#fff";
const lightSecondaryBgColor = "#fff";
const lightBoxTextColor = "#000";
const lightToggleBgColor = "#000";
const lightToggleInnerColor = "#fff";

// Dark mode color scheme
const darkTextColor = "#fff";
const darkBoxShadow = "0 0 12px -2px rgba(221, 216, 216, 0.5";
const darkPrimaryBgColor = "#121212";
const darkSecondaryBgColor = "#f8f8f8";
const darkBoxTextColor = "#000";
const darkToggleBgColor = "#fff";
const darkToggleInnerColor = "#121212";

/**
 * Change the background and text color based on which mode user wants, either light or dark mode
 * @param isDarkMode check if current mode is dark or light and change the colors scheme based on that
 */
function changeColorScheme(isDarkMode) {
    root.style.setProperty("--main-text-color", `${isDarkMode ? darkTextColor : lightTextColor}`);
    root.style.setProperty("--box-shadow", `${isDarkMode ? darkBoxShadow : lightBoxShadow}`);
    root.style.setProperty("--primary-bg-color", `${isDarkMode ? darkPrimaryBgColor : lightPrimaryBgColor}`);
    root.style.setProperty("--secondary-bg-color", `${isDarkMode ? darkSecondaryBgColor : lightSecondaryBgColor}`);
    root.style.setProperty("--box-text-color", `${isDarkMode ? darkBoxTextColor : lightBoxTextColor}`);
    root.style.setProperty("--toggle-bg-color", `${isDarkMode ? darkToggleBgColor : lightToggleBgColor}`);
    root.style.setProperty("--toggle-inner-color", `${isDarkMode ? darkToggleInnerColor : lightToggleInnerColor}`);
}

/**
 *  Event listener for toggle button and changes states depending on current color scheme
 */
toggleBtn.addEventListener("click", () => {
    if (!darkModeState) {
        darkModeState = true; // If user click toggle button and current state is not dark mode, change current state to dark mode
        changeColorScheme(darkModeState);
    } else if (darkModeState) {
        darkModeState = false // If user click toggle button and current state is dark mode, change current state to light mode
        changeColorScheme(darkModeState);
    }
})
