// // screens/SplashScreen.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Scissors, Ruler, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

// const SplashScreen = () => {
//   const navigate = useNavigate();
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   const handleCustomerLogin = () => {
//     navigate('/login');
//   };

//   const handleTailorLogin = () => {
//     navigate('/tailor/login');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Background Gradient */}
//       <div style={styles.bgGradient}>
//         <div style={styles.gradientOrb1} />
//         <div style={styles.gradientOrb2} />
//         <div style={styles.gradientOrb3} />
//       </div>

//       {/* Main Content */}
//       <main style={styles.main}>
//         <div style={{...styles.content, ...(fadeIn ? styles.fadeIn : styles.fadeOut)}}>
//           {/* Logo */}
//           <div style={styles.logoSection}>
//             <div style={styles.logoIcon}>
//               <Scissors size={28} color="#FFFFFF" />
//             </div>
//             <h1 style={styles.logoText}>
//               Squally<span style={styles.logoAccent}>line</span>
//             </h1>
//           </div>

//           {/* Tagline */}
//           <p style={styles.tagline}>
//             Measure once. Fitted always.
//           </p>

//           {/* Hero Text */}
//           <h2 style={styles.heroTitle}>
//             Your Perfect Fit
//             <br />
//             <span style={styles.heroAccent}>Starts Here</span>
//           </h2>

//           <p style={styles.heroSubtitle}>
//             Smart measurement technology meets traditional craftsmanship.
//             Get perfectly fitted garments,no measuring tape required.
//           </p>

//           {/* Action Buttons */}
//           <div style={styles.buttonGroup}>
//             <button 
//               onClick={handleCustomerLogin} 
//               style={styles.primaryButton}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,111,212,0.35)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,111,212,0.25)';
//               }}
//             >
//               Get Started
//               <ArrowRight size={18} style={styles.btnIcon} />
//             </button>

//             <button 
//               onClick={handleTailorLogin} 
//               style={styles.secondaryButton}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = '#1A6FD4';
//                 e.currentTarget.style.backgroundColor = '#F5F9FF';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = '#DCE4EE';
//                 e.currentTarget.style.backgroundColor = 'transparent';
//               }}
//             >
//               Tailor Portal
//               <ChevronRight size={16} />
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div style={styles.trustSection}>
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>12K+</span>
//               <span style={styles.trustLabel}>Happy Customers</span>
//             </div>
//             <div style={styles.trustDivider} />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>98%</span>
//               <span style={styles.trustLabel}>Fit Accuracy</span>
//             </div>
//             <div style={styles.trustDivider} />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>4.9★</span>
//               <span style={styles.trustLabel}>Average Rating</span>
//             </div>
//           </div>

//           {/* Footer */}
//           <div style={styles.footer}>
//             <span style={styles.footerText}>New here? </span>
//             <button 
//               onClick={handleCustomerLogin} 
//               style={styles.footerLink}
//             >
//               Create an account
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#F8F8FA',
//     fontFamily: 'Inter, -apple-system, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '24px',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   bgGradient: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     pointerEvents: 'none',
//   },
//   gradientOrb1: {
//     position: 'absolute',
//     top: '-20%',
//     right: '-10%',
//     width: '400px',
//     height: '400px',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(26,111,212,0.06) 0%, transparent 70%)',
//   },
//   gradientOrb2: {
//     position: 'absolute',
//     bottom: '-20%',
//     left: '-10%',
//     width: '350px',
//     height: '350px',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(26,111,212,0.04) 0%, transparent 70%)',
//   },
//   gradientOrb3: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '500px',
//     height: '500px',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(26,111,212,0.02) 0%, transparent 70%)',
//   },
//   fadeIn: {
//     opacity: 1,
//     transform: 'translateY(0)',
//     transition: 'opacity 0.8s ease, transform 0.8s ease',
//   },
//   fadeOut: {
//     opacity: 0,
//     transform: 'translateY(24px)',
//   },
//   main: {
//     display: 'flex',
//     //alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     maxWidth: '1300px',
//     position: 'relative',
//     zIndex: 1,
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     maxWidth: '560px',
//     width: '100%',
//   },
//   logoSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '8px',
//   },
//   logoIcon: {
//     width: '44px',
//     height: '44px',
//     borderRadius: '12px',
//     backgroundColor: '#1A6FD4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoText: {
//     fontSize: '28px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     fontFamily: 'Fraunces, serif',
//     letterSpacing: '-0.5px',
//   },
//   logoAccent: {
//     color: '#1A6FD4',
//   },
//   tagline: {
//     fontSize: '13px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//     letterSpacing: '1px',
//     textTransform: 'uppercase',
//     marginBottom: '32px',
//   },
//   heroTitle: {
//     fontSize: '44px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     fontFamily: 'Fraunces, serif',
//     lineHeight: '1.1',
//     margin: '0 0 12px 0',
//     letterSpacing: '-1px',
//   },
//   heroAccent: {
//     background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//   },
//   heroSubtitle: {
//     fontSize: '16px',
//     lineHeight: '1.6',
//     color: '#5C7A9A',
//     maxWidth: '420px',
//     margin: '0 auto 32px',
//   },
//   buttonGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     width: '100%',
//     maxWidth: '320px',
//   },
//   primaryButton: {
//     width: '100%',
//     padding: '16px 28px',
//     borderRadius: '12px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '16px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     boxShadow: '0 4px 16px rgba(26,111,212,0.25)',
//   },
//   btnIcon: {
//     transition: 'transform 0.3s ease',
//   },
//   secondaryButton: {
//     width: '100%',
//     padding: '16px 28px',
//     borderRadius: '12px',
//     backgroundColor: 'transparent',
//     color: '#0A0F1E',
//     fontSize: '16px',
//     fontWeight: '500',
//     border: '2px solid #DCE4EE',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//   },
//   trustSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '24px',
//     marginTop: '40px',
//     paddingTop: '24px',
//     borderTop: '1px solid #EEEEF0',
//     width: '100%',
//     maxWidth: '400px',
//   },
//   trustItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   trustNumber: {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//   },
//   trustLabel: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     fontWeight: '500',
//   },
//   trustDivider: {
//     width: '1px',
//     height: '32px',
//     backgroundColor: '#EEEEF0',
//   },
//   footer: {
//     marginTop: '32px',
//     fontSize: '14px',
//     color: '#8E8EA0',
//   },
//   footerText: {
//     color: '#8E8EA0',
//   },
//   footerLink: {
//     background: 'none',
//     border: 'none',
//     color: '#1A6FD4',
//     fontWeight: '600',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     fontSize: '14px',
//     padding: 0,
//     transition: 'color 0.2s',
//   },
// };

// // Add hover styles
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .footer-link:hover {
//     text-decoration: underline;
//     color: #1557A8;
//   }

//   @media (min-width: 768px) {
//     .splash-content {
//       max-width: 640px !important;
//     }
//     .splash-title {
//       font-size: 56px !important;
//     }
//     .splash-subtitle {
//       font-size: 18px !important;
//       max-width: 480px !important;
//     }
//     .splash-button-group {
//       flex-direction: row !important;
//       max-width: 100% !important;
//     }
//     .splash-primary-button {
//       flex: 1 !important;
//     }
//     .splash-secondary-button {
//       flex: 1 !important;
//     }
//     .splash-trust-section {
//       max-width: 480px !important;
//     }
//   }

//   @media (min-width: 1024px) {
//     .splash-title {
//       font-size: 64px !important;
//     }
//     .splash-trust-section {
//       max-width: 520px !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .splash-title {
//       font-size: 32px !important;
//     }
//     .splash-subtitle {
//       font-size: 15px !important;
//     }
//     .splash-logo-text {
//       font-size: 24px !important;
//     }
//     .splash-logo-icon {
//       width: 38px !important;
//       height: 38px !important;
//     }
//     .splash-logo-icon svg {
//       width: 20px !important;
//       height: 20px !important;
//     }
//     .splash-primary-button, .splash-secondary-button {
//       font-size: 15px !important;
//       padding: 14px 20px !important;
//     }
//     .splash-trust-section {
//       gap: 16px !important;
//       flex-wrap: wrap !important;
//     }
//     .splash-trust-divider {
//       display: none !important;
//     }
//     .splash-hero-subtitle {
//       font-size: 14px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .splash-title {
//       font-size: 28px !important;
//     }
//     .splash-trust-section {
//       flex-direction: column !important;
//       gap: 8px !important;
//     }
//     .splash-trust-item {
//       flex-direction: row !important;
//       gap: 8px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default SplashScreen;

// screens/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import { Scissors, Ruler, Sparkles, ArrowRight } from 'lucide-react';

const SplashScreen = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleCustomerLogin = () => {
    navigate('/login');
  };

  const handleTailorLogin = () => {
    navigate('/tailor/login');
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      <div style={styles.bgGradient}>
        <div style={{ ...styles.gradientOrb1, background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)` }} />
        <div style={{ ...styles.gradientOrb2, background: `radial-gradient(circle, ${colors.secondary}10 0%, transparent 70%)` }} />
      </div>

      <main style={styles.main}>
        <div style={{...styles.content, ...(fadeIn ? styles.fadeIn : styles.fadeOut)}}>
          <div style={styles.logoSection}>
            <div style={{ ...styles.logoIcon, backgroundColor: colors.primary }}>
              <Scissors size={28} color="#FFFFFF" />
            </div>
            <h1 style={{ ...styles.logoText, color: colors.heading }}>
              Squally<span style={{ color: colors.primary }}>line</span>
            </h1>
          </div>

          <p style={{ ...styles.tagline, color: colors.secondaryText }}>
            Measure once. Fitted always.
          </p>

          <h2 style={{ ...styles.heroTitle, color: colors.heading }}>
            Your Perfect Fit
            <br />
            <span style={{ color: colors.primary }}>Starts Here</span>
          </h2>

          <p style={{ ...styles.heroSubtitle, color: colors.secondaryText }}>
            Smart measurement technology meets traditional craftsmanship.
            Get perfectly fitted garments — no measuring tape required.
          </p>

          <div style={styles.buttonGroup}>
            <button 
              onClick={handleCustomerLogin} 
              style={{
                ...styles.primaryButton,
                backgroundColor: colors.primary,
                color: colors.btnText,
              }}
            >
              Get Started
              <ArrowRight size={18} style={styles.btnIcon} />
            </button>

            <button 
              onClick={handleTailorLogin} 
              style={{
                ...styles.secondaryButton,
                borderColor: colors.border,
                color: colors.text,
              }}
            >
              Tailor Portal
            </button>
          </div>

          <div style={styles.trustSection}>
            <div style={styles.trustItem}>
              <span style={{ ...styles.trustNumber, color: colors.heading }}>12K+</span>
              <span style={{ ...styles.trustLabel, color: colors.secondaryText }}>Happy Customers</span>
            </div>
            <div style={{ ...styles.trustDivider, backgroundColor: colors.border }} />
            <div style={styles.trustItem}>
              <span style={{ ...styles.trustNumber, color: colors.heading }}>98%</span>
              <span style={{ ...styles.trustLabel, color: colors.secondaryText }}>Fit Accuracy</span>
            </div>
            <div style={{ ...styles.trustDivider, backgroundColor: colors.border }} />
            <div style={styles.trustItem}>
              <span style={{ ...styles.trustNumber, color: colors.heading }}>4.9★</span>
              <span style={{ ...styles.trustLabel, color: colors.secondaryText }}>Average Rating</span>
            </div>
          </div>

          <div style={styles.footer}>
            <span style={{ ...styles.footerText, color: colors.secondaryText }}>New here? </span>
            <button 
              onClick={handleCustomerLogin} 
              style={{ ...styles.footerLink, color: colors.primary }}
            >
              Create an account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  gradientOrb1: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
  },
  gradientOrb2: {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
  },
  fadeIn: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  },
  fadeOut: {
    opacity: 0,
    transform: 'translateY(24px)',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '560px',
    width: '100%',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  logoIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    letterSpacing: '-0.5px',
  },
  tagline: {
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '32px',
  },
  heroTitle: {
    fontSize: '44px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    lineHeight: '1.1',
    margin: '0 0 12px 0',
    letterSpacing: '-1px',
  },
  heroSubtitle: {
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '420px',
    margin: '0 auto 32px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: '320px',
  },
  primaryButton: {
    width: '100%',
    padding: '16px 28px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26, 86, 219, 0.25)',
  },
  btnIcon: {
    transition: 'transform 0.3s ease',
  },
  secondaryButton: {
    width: '100%',
    padding: '16px 28px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '500',
    border: '2px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: 'transparent',
  },
  trustSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '40px',
    paddingTop: '24px',
    borderTop: '1px solid #E2E8F0',
    width: '100%',
    maxWidth: '400px',
  },
  trustItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trustNumber: {
    fontSize: '18px',
    fontWeight: '700',
  },
  trustLabel: {
    fontSize: '12px',
    fontWeight: '500',
  },
  trustDivider: {
    width: '1px',
    height: '32px',
  },
  footer: {
    marginTop: '32px',
    fontSize: '14px',
  },
  footerText: {
    color: '#94A3B8',
  },
  footerLink: {
    background: 'none',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: 0,
    transition: 'color 0.2s',
  },
};

export default SplashScreen;