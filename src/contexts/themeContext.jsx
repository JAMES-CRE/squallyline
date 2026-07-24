// contexts/themeContext.jsx
import { createContext, useState, useEffect } from "react";

export const colors = {
  
  light: {
  // ── Backgrounds & Surfaces ──────────────────────────────────────
  mainBg: "#F5F7FA",            // From body background
  cardBg: "#FFFFFF",            // From cards, inputs, containers
  raisedBg: "#FFFFFF",          // From elevated surfaces

  // ── Typography ──────────────────────────────────────────────────
  text: "#2A3755",              // From body text, labels
  heading: "#0A0F1E",           // From h1, h2, h3 headings
  secondaryText: "#5C7A9A",     // From subtitles, descriptions

  // ── Brand & Actions ─────────────────────────────────────────────
  btnBg: "#1A6FD4",             // From primary buttons
  btnText: "#FFFFFF",           // Button text
  linkColor: "#1A6FD4",         // From links, active states
  hoverBg: "#E8F4FB",           // From hover states

  // ── Borders ─────────────────────────────────────────────────────
  border: "#DCE4EE",            // From card borders, dividers
  borderStrong: "#8BBAD4",      // From active/focused inputs

  // ── Semantic ────────────────────────────────────────────────────
  success: "#22C55E",           // From complete status
  successBg: "#DCFCE7",         // Success badge background
  error: "#EF4444",             
  errorBg: "#FEE2E2",           
  warning: "#F59E0B",           
  warningBg: "#FEF3C7",         

  // ── Glassmorphism ───────────────────────────────────────────────
  glassBg: "rgba(245, 247, 250, 0.65)",
  glassBorder: "rgba(220, 228, 238, 0.8)",
  glassBlur: "24px",
  glassSaturate: "160%",

  // ── Component-specific ──────────────────────────────────────────
  navBg: "#0A0F1E",             // From dark navigation
  navText: "#F5F7FA",           // From nav text
  shadow: "rgba(10, 15, 30, 0.08)",
  
  // ── Page-specific extras ────────────────────────────────────────
  measurementBg: "#FFFFFF",     // From measurement card
  thumbBg: "#EADFC2",           // From design thumbnails
  progressBg: "#DCE4EE",        // From progress bars
  activeTab: "#1A6FD4",         // From active navigation
},

dark: {
  // ── Backgrounds & Surfaces ──────────────────────────────────────
  mainBg: "#0A0F1E",            // Deep navy background
  cardBg: "#1A2540",            // Dark card surface
  raisedBg: "#1A2540",          // Elevated dark surface

  // ── Typography ──────────────────────────────────────────────────
  text: "#A8C4D8",              // Muted frost for body
  heading: "#F5F7FA",           // Bright frost for headings
  secondaryText: "#5C8AAA",     // Muted for secondary

  // ── Brand & Actions ─────────────────────────────────────────────
  btnBg: "#4DA6E8",             // Bright button on dark
  btnText: "#0A0F1E",           // Dark text on bright button
  linkColor: "#4DA6E8",         // Bright links
  hoverBg: "#162035",           // Hover on dark

  // ── Borders ─────────────────────────────────────────────────────
  border: "#1E3050",            // Dark borders
  borderStrong: "#2A3F60",      // Stronger dark borders

  // ── Semantic ────────────────────────────────────────────────────
  success: "#4ADE80",           
  successBg: "#052814",         
  error: "#F87171",             
  errorBg: "#2D0A0A",           
  warning: "#FCD34D",           
  warningBg: "#422006",         

  // ── Glassmorphism ───────────────────────────────────────────────
  glassBg: "rgba(10, 15, 30, 0.75)",
  glassBorder: "rgba(30, 48, 80, 0.9)",
  glassBlur: "32px",
  glassSaturate: "180%",

  // ── Component-specific ──────────────────────────────────────────
  navBg: "rgba(10, 15, 30, 0.96)",
  navText: "#F5F7FA",           
  shadow: "rgba(0, 0, 0, 0.5)",
  glow: "rgba(77, 166, 232, 0.12)",
  
  // ── Page-specific extras ────────────────────────────────────────
  measurementBg: "#1A2540",     // Dark measurement card
  thumbBg: "#2A3F60",           // Dark thumbnails
  progressBg: "#1E3050",        // Dark progress
  activeTab: "#4DA6E8",         // Active nav on dark
}
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ mode: "light", system: true });
  const [isThemeReady, setIsThemeReady] = useState(false);

  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const updateTheme = (newTheme) => {
    let mode = newTheme?.mode;

    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else if (newTheme.system) {
      mode = getSystemTheme();
    }

    setTheme(newTheme);
    localStorage.setItem("woodaxis_theme", JSON.stringify(newTheme));

    // Inject CSS Variables into :root for easy use in regular CSS files
    const currentColors = colors[mode];
    const root = document.documentElement;
    Object.keys(currentColors).forEach((key) => {
      root.style.setProperty(`--${key}`, currentColors[key]);
    });

    document.body.className = `theme-${mode}`;
  };

  useEffect(() => {
    const stored = localStorage.getItem("woodaxis_theme");
    if (stored) {
      updateTheme(JSON.parse(stored));
    } else {
      updateTheme({ mode: getSystemTheme(), system: true });
    }

    // System listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => theme.system && updateTheme({ mode: e.matches ? "dark" : "light", system: true });

    mediaQuery.addEventListener("change", handler);
    setIsThemeReady(true);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme.system]);

  const value = {
    theme,
    updateTheme,
    isThemeReady,
    colors: colors[theme.mode],
  };

  return (
    <ThemeContext.Provider value={value}>
      {isThemeReady ? children : <div style={{ background: '#FDFCF8', height: '100vh' }} />}
    </ThemeContext.Provider>
  );
};