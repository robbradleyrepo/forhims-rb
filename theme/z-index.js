// Standardize z-index to avoid conflicts that arise using arbitrary values
const zIndexScale = {
  hidden: -1,
  base: 0,
  one: 100,
  two: 200,
  three: 300,
  four: 400,
  five: 500,
  six: 600,
  seven: 700,
  eight: 800,
  nine: 900
};

// Relative content layers for the application
// This can be extended using values from the scale when new use cases arise
// --------------------------------------------
// Usage:
// z-index: ${({ theme }) => theme.zIndexes.overlay};
// Note: elements with z-index require a position: [relative | absolute | fixed]
export const zIndexes = {
  hidden: zIndexScale.hidden, // Intentionally position an element below all unpositioned content
  base: zIndexScale.base, // Content that will have other elements layered on top
  foreground: zIndexScale.one, // Position this element on top of standard unpositioned content
  header: zIndexScale.two, // Locally scoped headers or overlays
  popover: zIndexScale.three, // Tooltips and other floating elements
  overlay: zIndexScale.four, // Overlay to separate menus from standard page content
  menu: zIndexScale.five, // Left side sliding menu, displays under global nav but above all page content
  navigation: zIndexScale.six, // Global nav, which stays on top when scrolling page
  cart: zIndexScale.seven, // Cart and authentication drawer, which displays over global nav
  modal: zIndexScale.eight, // Prompts and full page takeovers
  alert: zIndexScale.nine // App-wide messaging that display regardless of page content
};
