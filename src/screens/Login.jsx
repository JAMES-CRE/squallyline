// screens/Login.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   Mail, 
//   Lock, 
//   Eye, 
//   EyeOff, 
//   ArrowLeft,
//   AlertCircle,
//   User,
//   LogIn,
//   Shield
// } from "lucide-react";

// const API_BASE = "http://127.0.0.1:8000/api/accounts";

// const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch(`${API_BASE}/login/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         const { access, refresh, user } = data.data;
//         localStorage.setItem("access_token", access);
//         localStorage.setItem("refresh_token", refresh);
//         localStorage.setItem("user", JSON.stringify(user));

//         if (user.role === "tailor") {
//           navigate("/tailor/dashboard");
//         } else {
//           navigate("/home");
//         }
//       } else {
//         setError(data.message || data.detail || "Login failed. Please try again.");
//       }
//     } catch (err) {
//       if (err.message === "Failed to fetch") {
//         setError("Network error. Please check your connection.");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
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
//         <button onClick={() => navigate("/")} style={styles.backButton}>
//           <ArrowLeft size={18} /> Back
//         </button>

//         {/* Logo */}
//         <div style={styles.logoSection}>
//           <div style={styles.logoIcon}>
//             <Shield size={24} color="#FFFFFF" />
//           </div>
//           <Link to="/" style={styles.logo}>
//             Squally<span style={styles.logoAccent}>line</span>
//           </Link>
//         </div>

//         {/* Header Content */}
//         <div style={styles.cardHeader}>
//           <span style={styles.eyebrow}>Welcome back</span>
//           <h1 style={styles.title}>Customer Login</h1>
//           <p style={styles.subtitle}>
//             Access your measurements, bookings and orders.
//           </p>
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
//             <label style={styles.label}>Username or Email</label>
//             <div style={styles.inputWrapper}>
//               <User size={18} color="#8E8EA0" style={styles.inputIcon} />
//               <input
//                 type="text"
//                 name="username"
//                 value={loginData.username}
//                 onChange={handleLoginChange}
//                 placeholder="Enter your username or email"
//                 required
//                 style={styles.input}
//               />
//             </div>
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Password</label>
//             <div style={styles.inputWrapper}>
//               <Lock size={18} color="#8E8EA0" style={styles.inputIcon} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={loginData.password}
//                 onChange={handleLoginChange}
//                 placeholder="Enter your password"
//                 required
//                 style={styles.input}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={styles.eyeButton}
//               >
//                 {showPassword ? <EyeOff size={18} color="#8E8EA0" /> : <Eye size={18} color="#8E8EA0" />}
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
//               ...(loading && styles.buttonDisabled)
//             }}
//           >
//             {loading ? (
//               <>
//                 <span style={styles.spinner} />
//                 Logging in...
//               </>
//             ) : (
//               <>
//                 <LogIn size={18} /> Log in as customer
//               </>
//             )}
//           </button>

//           <div style={styles.divider}>
//             <span style={styles.dividerText}>or continue with</span>
//           </div>

//           <button type="button" style={styles.googleButton}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//             </svg>
//             Continue with Google
//           </button>

//           <p style={styles.footerText}>
//             Don't have an account?{" "}
//             <Link to="/register" style={styles.linkButton}>
//               Register here
//             </Link>
//           </p>

//           <p style={styles.tailorText}>
//             Are you a tailor?{" "}
//             <button
//               type="button"
//               onClick={() => navigate("/tailor/login")}
//               style={styles.tailorLink}
//             >
//               Open the Tailor Portal →
//             </button>
//           </p>
//         </form>
//       </main>

//       {/* Footer */}
//       <p style={styles.footer}>
//         By continuing, you agree to our{" "}
//         <a href="#" style={styles.footerLink}>Terms</a> &amp;{" "}
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
//     background: 'radial-gradient(circle, rgba(26,111,212,0.04) 0%, transparent 70%)',
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
//     maxWidth: '1200px',
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
//     textDecoration: 'none',
//   },
//   logoAccent: {
//     color: '#1A6FD4',
//   },
//   cardHeader: {
//     marginBottom: '28px',
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
//   googleButton: {
//     width: '100%',
//     padding: '13px',
//     borderRadius: '10px',
//     backgroundColor: '#FFFFFF',
//     color: '#0A0F1E',
//     fontSize: '15px',
//     fontWeight: '500',
//     fontFamily: 'Inter, sans-serif',
//     border: '1.5px solid #DCE4EE',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '10px',
//   },
//   footerText: {
//     textAlign: 'center',
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: '4px 0 0',
//   },
//   linkButton: {
//     color: '#1A6FD4',
//     fontWeight: '600',
//     textDecoration: 'none',
//     transition: 'color 0.2s',
//   },
//   tailorText: {
//     textAlign: 'center',
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: '8px 0 0',
//   },
//   tailorLink: {
//     background: 'none',
//     border: 'none',
//     color: '#1A6FD4',
//     fontWeight: '600',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     fontSize: '14px',
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

//   .login-back-button:hover {
//     color: #1A6FD4;
//   }

//   .login-forgot-link:hover {
//     color: #1A6FD4;
//   }

//   .login-input-wrapper:focus-within {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   .login-primary-button:hover:not(:disabled) {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 24px rgba(26,111,212,0.3);
//   }

//   .login-google-button:hover {
//     background-color: #F8F9FA;
//     border-color: #1A6FD4;
//   }

//   .login-link-button:hover {
//     color: #1557A8;
//     text-decoration: underline;
//   }

//   .login-tailor-link:hover {
//     color: #1557A8;
//     text-decoration: underline;
//   }

//   .login-footer-link:hover {
//     color: #1557A8;
//     text-decoration: underline;
//   }

//   @media (max-width: 480px) {
//     .login-title {
//       font-size: 24px !important;
//     }
//     .login-logo {
//       font-size: 24px !important;
//     }
//     .login-logo-icon {
//       width: 36px !important;
//       height: 36px !important;
//     }
//     .login-logo-icon svg {
//       width: 20px !important;
//       height: 20px !important;
//     }
//     .login-primary-button {
//       font-size: 15px !important;
//       padding: 13px !important;
//     }
//     .login-google-button {
//       font-size: 14px !important;
//       padding: 12px !important;
//     }
//     .login-subtitle {
//       font-size: 13px !important;
//     }
//     .login-back-button {
//       font-size: 13px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .login-title {
//       font-size: 22px !important;
//     }
//     .login-logo {
//       font-size: 22px !important;
//     }
//     .login-google-button {
//       font-size: 13px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Login;

// screens/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft,
  AlertCircle,
  User,
  LogIn,
  Shield
} from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api/accounts";

const Login = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const { access, refresh, user } = data.data;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "tailor") {
          navigate("/tailor/dashboard");
        } else {
          navigate("/home");
        }
      } else {
        setError(data.message || data.detail || "Login failed. Please try again.");
      }
    } catch (err) {
      if (err.message === "Failed to fetch") {
        setError("Network error. Please check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      <main style={styles.main}>
        <button onClick={() => navigate("/")} style={{ ...styles.backButton, color: colors.secondaryText }}>
          <ArrowLeft size={18} /> Back
        </button>

        <div style={styles.logoSection}>
          <div style={{ ...styles.logoIcon, backgroundColor: colors.primary }}>
            <Shield size={24} color="#FFFFFF" />
          </div>
          <Link to="/" style={{ ...styles.logo, color: colors.heading }}>
            Squally<span style={{ color: colors.primary }}>line</span>
          </Link>
        </div>

        <div style={styles.cardHeader}>
          <span style={{ ...styles.eyebrow, backgroundColor: colors.primaryLight, color: colors.primary }}>
            Welcome back
          </span>
          <h1 style={{ ...styles.title, color: colors.heading }}>Customer Login</h1>
          <p style={{ ...styles.subtitle, color: colors.secondaryText }}>
            Access your measurements, bookings and orders.
          </p>
        </div>

        {error && (
          <div style={{ ...styles.errorBanner, backgroundColor: colors.errorBg, color: colors.error, borderColor: colors.errorBg }}>
            <AlertCircle size={18} color={colors.error} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={{ ...styles.label, color: colors.heading }}>Username or Email</label>
            <div style={{ ...styles.inputWrapper, borderColor: colors.border, backgroundColor: colors.cardBg }}>
              <User size={18} color={colors.tertiaryText} style={styles.inputIcon} />
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder="Enter your username or email"
                required
                style={{ ...styles.input, color: colors.text }}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={{ ...styles.label, color: colors.heading }}>Password</label>
            <div style={{ ...styles.inputWrapper, borderColor: colors.border, backgroundColor: colors.cardBg }}>
              <Lock size={18} color={colors.tertiaryText} style={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                required
                style={{ ...styles.input, color: colors.text }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? <EyeOff size={18} color={colors.tertiaryText} /> : <Eye size={18} color={colors.tertiaryText} />}
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
                Logging in...
              </>
            ) : (
              <>
                <LogIn size={18} /> Log in as customer
              </>
            )}
          </button>

          <div style={styles.divider}>
            <span style={{ ...styles.dividerText, color: colors.tertiaryText }}>or continue with</span>
          </div>

          <button type="button" style={{ ...styles.googleButton, borderColor: colors.border, backgroundColor: colors.cardBg, color: colors.text }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <p style={{ ...styles.footerText, color: colors.secondaryText }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ ...styles.linkButton, color: colors.primary }}>
              Register here
            </Link>
          </p>

          <p style={{ ...styles.tailorText, color: colors.secondaryText }}>
            Are you a tailor?{" "}
            <button
              type="button"
              onClick={() => navigate("/tailor/login")}
              style={{ ...styles.tailorLink, color: colors.primary }}
            >
              Open the Tailor Portal →
            </button>
          </p>
        </form>
      </main>

      <p style={{ ...styles.footer, color: colors.tertiaryText }}>
        By continuing, you agree to our{" "}
        <a href="#" style={{ ...styles.footerLink, color: colors.primary }}>Terms</a> &amp;{" "}
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
  },
  main: {
    width: '100%',
    maxWidth: '420px',
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
    textDecoration: 'none',
  },
  cardHeader: {
    marginBottom: '28px',
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
  googleButton: {
    width: '100%',
    padding: '13px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Inter, sans-serif',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '14px',
    margin: '4px 0 0',
  },
  linkButton: {
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  tailorText: {
    textAlign: 'center',
    fontSize: '14px',
    margin: '8px 0 0',
  },
  tailorLink: {
    background: 'none',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
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

export default Login;