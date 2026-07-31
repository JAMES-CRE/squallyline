// // screens/TailorLogin.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   ArrowLeft,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   Briefcase,
//   Shield,
//   LogIn,
//   AlertCircle,
// } from 'lucide-react';

// const TailorLogin = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       // Replace with actual API call
//       // const response = await fetch('/api/tailor/login', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ email, password }),
//       // });
//       // const data = await response.json();
      
//       setTimeout(() => {
//         localStorage.setItem('tailor_token', 'dummy_tailor_token');
//         localStorage.setItem('tailor_user', JSON.stringify({ email, role: 'tailor' }));
//         navigate('/tailor/dashboard');
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       setError('Invalid credentials. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate('/');
//   };

//   const handleCustomerLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Background Gradient */}
//       <div style={styles.bgGradient}>
//         <div style={styles.gradientOrb1} />
//         <div style={styles.gradientOrb2} />
//       </div>

//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={handleBack} style={styles.backButton}>
//           <ArrowLeft size={18} /> Back
//         </button>

//         {/* Logo */}
//         <div style={styles.logoSection}>
//           <div style={styles.logoIcon}>
//             <Briefcase size={24} color="#FFFFFF" />
//           </div>
//           <span style={styles.logo}>
//             Squally<span style={styles.logoAccent}>line</span>
//           </span>
//         </div>

//         {/* Header Content */}
//         <div style={styles.cardHeader}>
//           <span style={styles.eyebrow}>Tailor Portal</span>
//           <h1 style={styles.title}>Tailor Sign In</h1>
//           <p style={styles.subtitle}>
//             Sign in to manage appointments, orders and your portfolio.
//           </p>
//         </div>

//         {/* Tailor Badge */}
//         <div style={styles.tailorBadge}>
//           <Shield size={14} color="#1A6FD4" />
//           <span>Tailor Access</span>
//         </div>

//         {/* Error Banner */}
//         {error && (
//           <div style={styles.errorBanner}>
//             <AlertCircle size={18} color="#991B1B" />
//             <span>{error}</span>
//           </div>
//         )}

//         {/* Login Form */}
//         <form onSubmit={handleLogin} style={styles.form}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Business Email</label>
//             <div style={styles.inputWrapper}>
//               <Mail size={18} color="#8E8EA0" style={styles.inputIcon} />
//               <input
//                 type="email"
//                 placeholder="tailor@business.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={styles.input}
//                 required
//               />
//             </div>
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Password</label>
//             <div style={styles.inputWrapper}>
//               <Lock size={18} color="#8E8EA0" style={styles.inputIcon} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={styles.input}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={styles.eyeButton}
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} color="#8E8EA0" />
//                 ) : (
//                   <Eye size={18} color="#8E8EA0" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div style={styles.forgotPassword}>
//             <button type="button" style={styles.forgotLink}>
//               Forgot password?
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               ...styles.primaryButton,
//               ...(loading ? styles.buttonDisabled : {}),
//             }}
//           >
//             {loading ? (
//               <>
//                 <span style={styles.spinner} />
//                 Signing in...
//               </>
//             ) : (
//               <>
//                 <LogIn size={18} /> Enter Tailor Dashboard
//               </>
//             )}
//           </button>

//           <div style={styles.divider}>
//             <span style={styles.dividerText}>or</span>
//           </div>

//           <p style={styles.footerText}>
//             Looking for your customer account?{' '}
//             <button
//               type="button"
//               onClick={handleCustomerLogin}
//               style={styles.linkButton}
//             >
//               Customer login
//             </button>
//           </p>
//         </form>
//       </main>

//       {/* Footer */}
//       <p style={styles.footer}>
//         By continuing, you agree to our{' '}
//         <a href="#" style={styles.footerLink}>Terms</a> &amp;{' '}
//         <a href="#" style={styles.footerLink}>Privacy Policy</a>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#F8F8FA',
//     fontFamily: 'Inter, -apple-system, sans-serif',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '24px 16px',
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
//   main: {
//     width: '100%',
//     maxWidth: '420px',
//     position: 'relative',
//     zIndex: 1,
//   },
//   backButton: {
//     background: 'none',
//     border: 'none',
//     color: '#5C7A9A',
//     fontSize: '14px',
//     cursor: 'pointer',
//     padding: '0',
//     marginBottom: '20px',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'color 0.2s',
//   },
//   logoSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '24px',
//   },
//   logoIcon: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '10px',
//     backgroundColor: '#1A6FD4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//   },
//   logoAccent: {
//     color: '#1A6FD4',
//   },
//   cardHeader: {
//     marginBottom: '16px',
//   },
//   eyebrow: {
//     fontSize: '11px',
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     letterSpacing: '0.08em',
//     color: '#1A6FD4',
//     backgroundColor: '#E8F4FB',
//     padding: '2px 12px',
//     borderRadius: '999px',
//     display: 'inline-block',
//   },
//   title: {
//     fontSize: '28px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     marginTop: '8px',
//     marginBottom: '4px',
//   },
//   subtitle: {
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: 0,
//     lineHeight: 1.5,
//   },
//   tailorBadge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '6px 16px',
//     backgroundColor: '#E8F4FB',
//     borderRadius: '50px',
//     fontSize: '12px',
//     color: '#1A6FD4',
//     fontWeight: '600',
//     marginBottom: '20px',
//   },
//   errorBanner: {
//     backgroundColor: '#FEE2E2',
//     color: '#991B1B',
//     fontSize: '14px',
//     padding: '12px 16px',
//     borderRadius: '10px',
//     marginBottom: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     border: '1px solid #FECACA',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '18px',
//   },
//   formGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//   },
//   label: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   inputWrapper: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     border: '1.5px solid #DCE4EE',
//     borderRadius: '10px',
//     background: '#FFFFFF',
//     transition: 'all 0.2s',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: '12px',
//   },
//   input: {
//     width: '100%',
//     padding: '12px 12px 12px 40px',
//     border: 'none',
//     borderRadius: '10px',
//     fontSize: '14px',
//     fontFamily: 'Inter, sans-serif',
//     background: 'transparent',
//     outline: 'none',
//     color: '#0A0F1E',
//   },
//   eyeButton: {
//     position: 'absolute',
//     right: '12px',
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     marginTop: '-6px',
//   },
//   forgotLink: {
//     background: 'none',
//     border: 'none',
//     color: '#5C7A9A',
//     fontSize: '13px',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'color 0.2s',
//   },
//   primaryButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '16px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
//   },
//   buttonDisabled: {
//     opacity: 0.6,
//     cursor: 'not-allowed',
//   },
//   spinner: {
//     width: '18px',
//     height: '18px',
//     border: '2px solid rgba(255,255,255,0.3)',
//     borderTop: '2px solid #FFFFFF',
//     borderRadius: '50%',
//     animation: 'spin 0.8s linear infinite',
//     display: 'inline-block',
//   },
//   divider: {
//     display: 'flex',
//     alignItems: 'center',
//     margin: '4px 0',
//   },
//   dividerText: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     padding: '0 16px',
//     position: 'relative',
//     zIndex: 1,
//     backgroundColor: 'transparent',
//   },
//   footerText: {
//     textAlign: 'center',
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: 0,
//   },
//   linkButton: {
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
//   footer: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     textAlign: 'center',
//     marginTop: '24px',
//   },
//   footerLink: {
//     color: '#1A6FD4',
//     textDecoration: 'none',
//     transition: 'color 0.2s',
//   },
// };

// // Add hover styles and keyframes
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }

//   .tailor-back-button:hover {
//     color: #1A6FD4;
//   }

//   .tailor-forgot-link:hover {
//     color: #1A6FD4;
//   }

//   .tailor-input-wrapper:focus-within {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   .tailor-primary-button:hover:not(:disabled) {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 24px rgba(26,111,212,0.3);
//   }

//   .tailor-link-button:hover {
//     color: #1557A8;
//     text-decoration: underline;
//   }

//   .tailor-footer-link:hover {
//     color: #1557A8;
//     text-decoration: underline;
//   }

//   @media (max-width: 480px) {
//     .tailor-title {
//       font-size: 24px !important;
//     }
//     .tailor-logo {
//       font-size: 24px !important;
//     }
//     .tailor-logo-icon {
//       width: 36px !important;
//       height: 36px !important;
//     }
//     .tailor-logo-icon svg {
//       width: 20px !important;
//       height: 20px !important;
//     }
//     .tailor-primary-button {
//       font-size: 15px !important;
//       padding: 13px !important;
//     }
//     .tailor-subtitle {
//       font-size: 13px !important;
//     }
//     .tailor-back-button {
//       font-size: 13px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .tailor-title {
//       font-size: 22px !important;
//     }
//     .tailor-logo {
//       font-size: 22px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default TailorLogin;




// screens/TailorLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
  Shield,
  LogIn,
  AlertCircle,
} from 'lucide-react';

const TailorLogin = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      setTimeout(() => {
        localStorage.setItem('tailor_token', 'dummy_tailor_token');
        localStorage.setItem('tailor_user', JSON.stringify({ email, role: 'tailor' }));
        navigate('/tailor/dashboard');
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleCustomerLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      {/* Background Gradient */}
      <div style={styles.bgGradient}>
        <div style={{ ...styles.gradientOrb1, background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)` }} />
        <div style={{ ...styles.gradientOrb2, background: `radial-gradient(circle, ${colors.secondary}10 0%, transparent 70%)` }} />
      </div>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={handleBack} style={{ ...styles.backButton, color: colors.secondaryText }}>
          <ArrowLeft size={18} /> Back
        </button>

        {/* Logo */}
        <div style={styles.logoSection}>
          <div style={{ ...styles.logoIcon, backgroundColor: colors.primary }}>
            <Briefcase size={24} color="#FFFFFF" />
          </div>
          <span style={{ ...styles.logo, color: colors.heading }}>
            Squally<span style={{ color: colors.primary }}>line</span>
          </span>
        </div>

        {/* Header Content */}
        <div style={styles.cardHeader}>
          <span style={{ ...styles.eyebrow, backgroundColor: colors.primaryLight, color: colors.primary }}>
            Tailor Portal
          </span>
          <h1 style={{ ...styles.title, color: colors.heading }}>Tailor Sign In</h1>
          <p style={{ ...styles.subtitle, color: colors.secondaryText }}>
            Sign in to manage appointments, orders and your portfolio.
          </p>
        </div>

        {/* Tailor Badge */}
        <div style={{ ...styles.tailorBadge, backgroundColor: colors.primaryLight, color: colors.primary }}>
          <Shield size={14} color={colors.primary} />
          <span>Tailor Access</span>
        </div>

        {/* Error Banner */}
        {error && (
          <div style={{ ...styles.errorBanner, backgroundColor: colors.errorBg, borderColor: colors.errorBg, color: colors.error }}>
            <AlertCircle size={18} color={colors.error} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={{ ...styles.label, color: colors.heading }}>Business Email</label>
            <div style={{ ...styles.inputWrapper, borderColor: colors.border, backgroundColor: colors.cardBg }}>
              <Mail size={18} color={colors.tertiaryText} style={styles.inputIcon} />
              <input
                type="email"
                placeholder="tailor@business.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ ...styles.input, color: colors.text }}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={{ ...styles.label, color: colors.heading }}>Password</label>
            <div style={{ ...styles.inputWrapper, borderColor: colors.border, backgroundColor: colors.cardBg }}>
              <Lock size={18} color={colors.tertiaryText} style={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...styles.input, color: colors.text }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? (
                  <EyeOff size={18} color={colors.tertiaryText} />
                ) : (
                  <Eye size={18} color={colors.tertiaryText} />
                )}
              </button>
            </div>
          </div>

          <div style={styles.forgotPassword}>
            <button type="button" style={{ ...styles.forgotLink, color: colors.secondaryText }}>
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.primaryButton,
              backgroundColor: colors.primary,
              color: colors.btnText,
              ...(loading ? { opacity: 0.6, cursor: 'not-allowed' } : {}),
            }}
          >
            {loading ? (
              <>
                <span style={styles.spinner} />
                Signing in...
              </>
            ) : (
              <>
                <LogIn size={18} /> Enter Tailor Dashboard
              </>
            )}
          </button>

          <div style={styles.divider}>
            <span style={{ ...styles.dividerText, color: colors.tertiaryText }}>or</span>
          </div>

          <p style={{ ...styles.footerText, color: colors.secondaryText }}>
            Looking for your customer account?{' '}
            <button
              type="button"
              onClick={handleCustomerLogin}
              style={{ ...styles.linkButton, color: colors.primary }}
            >
              Customer login
            </button>
          </p>
        </form>
      </main>

      {/* Footer */}
      <p style={{ ...styles.footer, color: colors.tertiaryText }}>
        By continuing, you agree to our{' '}
        <a href="#" style={{ ...styles.footerLink, color: colors.primary }}>Terms</a> &amp;{' '}
        <a href="#" style={{ ...styles.footerLink, color: colors.primary }}>Privacy Policy</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 16px',
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
  main: {
    width: '100%',
    maxWidth: '420px',
    position: 'relative',
    zIndex: 1,
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0',
    marginBottom: '20px',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
  },
  cardHeader: {
    marginBottom: '16px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '2px 12px',
    borderRadius: '999px',
    display: 'inline-block',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    marginTop: '8px',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '14px',
    margin: 0,
    lineHeight: 1.5,
  },
  tailorBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  errorBanner: {
    fontSize: '14px',
    padding: '12px 16px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid',
    borderRadius: '10px',
    transition: 'all 0.2s',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
  },
  input: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    background: 'transparent',
    outline: 'none',
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: '-6px',
  },
  forgotLink: {
    background: 'none',
    border: 'none',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'color 0.2s',
  },
  primaryButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26, 86, 219, 0.2)',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid #FFFFFF',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
    display: 'inline-block',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '4px 0',
  },
  dividerText: {
    fontSize: '12px',
    padding: '0 16px',
    position: 'relative',
    zIndex: 1,
  },
  footerText: {
    textAlign: 'center',
    fontSize: '14px',
    margin: 0,
  },
  linkButton: {
    background: 'none',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: 0,
    transition: 'color 0.2s',
  },
  footer: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '24px',
  },
  footerLink: {
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
};

// Add hover styles and keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .tailor-back-button:hover {
    color: #1A56DB;
  }

  .tailor-forgot-link:hover {
    color: #1A56DB;
  }

  .tailor-input-wrapper:focus-within {
    border-color: #1A56DB;
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1);
  }

  .tailor-primary-button:hover:not(:disabled) {
    background-color: #1A3A8A;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3);
  }

  .tailor-link-button:hover {
    color: #1A3A8A;
    text-decoration: underline;
  }

  .tailor-footer-link:hover {
    color: #1A3A8A;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .tailor-title {
      font-size: 24px !important;
    }
    .tailor-logo {
      font-size: 24px !important;
    }
    .tailor-logo-icon {
      width: 36px !important;
      height: 36px !important;
    }
    .tailor-primary-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
    .tailor-subtitle {
      font-size: 13px !important;
    }
    .tailor-back-button {
      font-size: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .tailor-title {
      font-size: 22px !important;
    }
    .tailor-logo {
      font-size: 22px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TailorLogin;