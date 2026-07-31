// // contexts/themeContext.jsx
// import { createContext, useState, useEffect } from "react";

// export const colors = {
  
//   light: {
//   // ── Backgrounds & Surfaces ──────────────────────────────────────
//   mainBg: "#F5F7FA",            // From body background
//   cardBg: "#FFFFFF",            // From cards, inputs, containers
//   raisedBg: "#FFFFFF",          // From elevated surfaces

//   // ── Typography ──────────────────────────────────────────────────
//   text: "#2A3755",              // From body text, labels
//   heading: "#0A0F1E",           // From h1, h2, h3 headings
//   secondaryText: "#5C7A9A",     // From subtitles, descriptions

//   // ── Brand & Actions ─────────────────────────────────────────────
//   btnBg: "#1A6FD4",             // From primary buttons
//   btnText: "#FFFFFF",           // Button text
//   linkColor: "#1A6FD4",         // From links, active states
//   hoverBg: "#E8F4FB",           // From hover states

//   // ── Borders ─────────────────────────────────────────────────────
//   border: "#DCE4EE",            // From card borders, dividers
//   borderStrong: "#8BBAD4",      // From active/focused inputs

//   // ── Semantic ────────────────────────────────────────────────────
//   success: "#22C55E",           // From complete status
//   successBg: "#DCFCE7",         // Success badge background
//   error: "#EF4444",             
//   errorBg: "#FEE2E2",           
//   warning: "#F59E0B",           
//   warningBg: "#FEF3C7",         

//   // ── Glassmorphism ───────────────────────────────────────────────
//   glassBg: "rgba(245, 247, 250, 0.65)",
//   glassBorder: "rgba(220, 228, 238, 0.8)",
//   glassBlur: "24px",
//   glassSaturate: "160%",

//   // ── Component-specific ──────────────────────────────────────────
//   navBg: "#0A0F1E",             // From dark navigation
//   navText: "#F5F7FA",           // From nav text
//   shadow: "rgba(10, 15, 30, 0.08)",
  
//   // ── Page-specific extras ────────────────────────────────────────
//   measurementBg: "#FFFFFF",     // From measurement card
//   thumbBg: "#EADFC2",           // From design thumbnails
//   progressBg: "#DCE4EE",        // From progress bars
//   activeTab: "#1A6FD4",         // From active navigation
// },

// dark: {
//   // ── Backgrounds & Surfaces ──────────────────────────────────────
//   mainBg: "#0A0F1E",            // Deep navy background
//   cardBg: "#1A2540",            // Dark card surface
//   raisedBg: "#1A2540",          // Elevated dark surface

//   // ── Typography ──────────────────────────────────────────────────
//   text: "#A8C4D8",              // Muted frost for body
//   heading: "#F5F7FA",           // Bright frost for headings
//   secondaryText: "#5C8AAA",     // Muted for secondary

//   // ── Brand & Actions ─────────────────────────────────────────────
//   btnBg: "#4DA6E8",             // Bright button on dark
//   btnText: "#0A0F1E",           // Dark text on bright button
//   linkColor: "#4DA6E8",         // Bright links
//   hoverBg: "#162035",           // Hover on dark

//   // ── Borders ─────────────────────────────────────────────────────
//   border: "#1E3050",            // Dark borders
//   borderStrong: "#2A3F60",      // Stronger dark borders

//   // ── Semantic ────────────────────────────────────────────────────
//   success: "#4ADE80",           
//   successBg: "#052814",         
//   error: "#F87171",             
//   errorBg: "#2D0A0A",           
//   warning: "#FCD34D",           
//   warningBg: "#422006",         

//   // ── Glassmorphism ───────────────────────────────────────────────
//   glassBg: "rgba(10, 15, 30, 0.75)",
//   glassBorder: "rgba(30, 48, 80, 0.9)",
//   glassBlur: "32px",
//   glassSaturate: "180%",

//   // ── Component-specific ──────────────────────────────────────────
//   navBg: "rgba(10, 15, 30, 0.96)",
//   navText: "#F5F7FA",           
//   shadow: "rgba(0, 0, 0, 0.5)",
//   glow: "rgba(77, 166, 232, 0.12)",
  
//   // ── Page-specific extras ────────────────────────────────────────
//   measurementBg: "#1A2540",     // Dark measurement card
//   thumbBg: "#2A3F60",           // Dark thumbnails
//   progressBg: "#1E3050",        // Dark progress
//   activeTab: "#4DA6E8",         // Active nav on dark
// }
// };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState({ mode: "light", system: true });
//   const [isThemeReady, setIsThemeReady] = useState(false);

//   const getSystemTheme = () =>
//     window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

//   const updateTheme = (newTheme) => {
//     let mode = newTheme?.mode;

//     if (!newTheme) {
//       mode = theme.mode === "dark" ? "light" : "dark";
//       newTheme = { mode, system: false };
//     } else if (newTheme.system) {
//       mode = getSystemTheme();
//     }

//     setTheme(newTheme);
//     localStorage.setItem("woodaxis_theme", JSON.stringify(newTheme));

//     // Inject CSS Variables into :root for easy use in regular CSS files
//     const currentColors = colors[mode];
//     const root = document.documentElement;
//     Object.keys(currentColors).forEach((key) => {
//       root.style.setProperty(`--${key}`, currentColors[key]);
//     });

//     document.body.className = `theme-${mode}`;
//   };

//   useEffect(() => {
//     const stored = localStorage.getItem("woodaxis_theme");
//     if (stored) {
//       updateTheme(JSON.parse(stored));
//     } else {
//       updateTheme({ mode: getSystemTheme(), system: true });
//     }

//     // System listener
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handler = (e) => theme.system && updateTheme({ mode: e.matches ? "dark" : "light", system: true });

//     mediaQuery.addEventListener("change", handler);
//     setIsThemeReady(true);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, [theme.system]);

//   const value = {
//     theme,
//     updateTheme,
//     isThemeReady,
//     colors: colors[theme.mode],
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {isThemeReady ? children : <div style={{ background: '#FDFCF8', height: '100vh' }} />}
//     </ThemeContext.Provider>
//   );
// };

// contexts/themeContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

export const colors = {
  light: {
    // ── Backgrounds & Surfaces ──────────────────────────────────────
    mainBg: "#F8FAFC",
    cardBg: "#FFFFFF",
    raisedBg: "#FFFFFF",
    
    // ── Typography ──────────────────────────────────────────────────
    text: "#0F172A",
    heading: "#0F172A",
    secondaryText: "#475569",
    tertiaryText: "#94A3B8",
    
    // ── Brand & Actions ─────────────────────────────────────────────
    primary: "#1A56DB",
    primaryDark: "#1A3A8A",
    primaryLight: "#DBEAFE",
    secondary: "#7C3AED",
    secondaryLight: "#EDE9FE",
    
    // ── Buttons ─────────────────────────────────────────────────────
    btnBg: "#1A56DB",
    btnText: "#FFFFFF",
    btnHover: "#1A3A8A",
    
    // ── Borders & Dividers ──────────────────────────────────────────
    border: "#E2E8F0",
    borderStrong: "#CBD5E1",
    
    // ── Semantic Colors ─────────────────────────────────────────────
    success: "#059669",
    successBg: "#D1FAE5",
    warning: "#D97706",
    warningBg: "#FEF3C7",
    error: "#DC2626",
    errorBg: "#FEE2E2",
    info: "#2563EB",
    
    // ── Navigation ──────────────────────────────────────────────────
    navBg: "#0F172A",
    navText: "#94A3B8",
    navTextActive: "#FFFFFF",
    navActive: "#1A56DB",
    
    // ── Glassmorphism ───────────────────────────────────────────────
    glassBg: "rgba(255, 255, 255, 0.7)",
    glassBorder: "rgba(255, 255, 255, 0.2)",
    glassBlur: "24px",
    glassSaturate: "160%",
    
    // ── Shadows ─────────────────────────────────────────────────────
    shadowSm: "0 1px 3px rgba(15, 23, 42, 0.06)",
    shadowMd: "0 4px 16px rgba(15, 23, 42, 0.08)",
    shadowLg: "0 8px 32px rgba(15, 23, 42, 0.12)",
    shadowXl: "0 16px 48px rgba(15, 23, 42, 0.16)",
    
    // ── Page-specific ──────────────────────────────────────────────
    measurementBg: "#FFFFFF",
    thumbBg: "#F1F5F9",
    progressBg: "#E2E8F0",
    activeTab: "#1A56DB",
  },
  
  dark: {
    // ── Backgrounds & Surfaces ──────────────────────────────────────
    mainBg: "#0F172A",
    cardBg: "#1E293B",
    raisedBg: "#1E293B",
    
    // ── Typography ──────────────────────────────────────────────────
    text: "#E2E8F0",
    heading: "#F8FAFC",
    secondaryText: "#94A3B8",
    tertiaryText: "#64748B",
    
    // ── Brand & Actions ─────────────────────────────────────────────
    primary: "#3B82F6",
    primaryDark: "#2563EB",
    primaryLight: "#1E3A5F",
    secondary: "#8B5CF6",
    secondaryLight: "#2D1B4E",
    
    // ── Buttons ─────────────────────────────────────────────────────
    btnBg: "#3B82F6",
    btnText: "#FFFFFF",
    btnHover: "#2563EB",
    
    // ── Borders & Dividers ──────────────────────────────────────────
    border: "#334155",
    borderStrong: "#475569",
    
    // ── Semantic Colors ─────────────────────────────────────────────
    success: "#34D399",
    successBg: "#064E3B",
    warning: "#FBBF24",
    warningBg: "#78350F",
    error: "#F87171",
    errorBg: "#7F1D1D",
    info: "#60A5FA",
    
    // ── Navigation ──────────────────────────────────────────────────
    navBg: "#0F172A",
    navText: "#64748B",
    navTextActive: "#FFFFFF",
    navActive: "#3B82F6",
    
    // ── Glassmorphism ───────────────────────────────────────────────
    glassBg: "rgba(15, 23, 42, 0.75)",
    glassBorder: "rgba(30, 41, 59, 0.9)",
    glassBlur: "32px",
    glassSaturate: "180%",
    
    // ── Shadows ─────────────────────────────────────────────────────
    shadowSm: "0 1px 3px rgba(0, 0, 0, 0.3)",
    shadowMd: "0 4px 16px rgba(0, 0, 0, 0.4)",
    shadowLg: "0 8px 32px rgba(0, 0, 0, 0.5)",
    shadowXl: "0 16px 48px rgba(0, 0, 0, 0.6)",
    
    // ── Page-specific ──────────────────────────────────────────────
    measurementBg: "#1E293B",
    thumbBg: "#1E293B",
    progressBg: "#334155",
    activeTab: "#3B82F6",
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
    localStorage.setItem("squallyline_theme", JSON.stringify(newTheme));

    const currentColors = colors[mode];
    const root = document.documentElement;
    Object.keys(currentColors).forEach((key) => {
      root.style.setProperty(`--${key}`, currentColors[key]);
    });

    document.body.className = `theme-${mode}`;
  };

  useEffect(() => {
    const stored = localStorage.getItem("squallyline_theme");
    if (stored) {
      updateTheme(JSON.parse(stored));
    } else {
      updateTheme({ mode: getSystemTheme(), system: true });
    }

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
      {isThemeReady ? children : <div style={{ background: '#F8FAFC', height: '100vh' }} />}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};