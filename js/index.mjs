// Copyright (c) 2024 Charles Theall Jr
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Toggle active CSS mode (light or dark).
 */
function toggleCSSMode() {
  // Get current color mode
  const currentMode = document.documentElement.getAttribute("color-mode")

  let newMode
  switch (currentMode) {
    case "light":
      // Switch to Dark
      newMode = "dark"
      break
    case "dark":
      // Switch to Light
      newMode = "light"
      break
  }

  // Set new color mode
  document.documentElement.setAttribute("color-mode", newMode)

  // Save color mode
  localStorage.setItem("color-mode", newMode)
}

/**
 * Event handler to handle the CSS Mode Toggle events.
 * @param {Event} event - the event being handled (currently unused).
 */
function handleCSSModeToggle(event) {
  toggleCSSMode()
}

/**
 * Main entry point.
 * 
 * Registers event handlers.
 */
function main() {
  // Register event handler for CSS mode toggler.
  document.querySelector("#css-mode-toggle").addEventListener("click", handleCSSModeToggle)
}

// Call main once module is loaded.
main()
