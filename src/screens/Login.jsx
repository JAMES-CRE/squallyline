// screens/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000/api/accounts";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

      if (data.success) {
        const { access, refresh, user } = data.data;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        localStorage.setItem("user", JSON.stringify(user));

        navigate(user.role === "tailor" ? "/tailor/dashboard" : "/customer/dashboard");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          Tailor<span style={styles.logoAccent}>Connect</span>
        </Link>
        <div style={styles.tagline}>Measured once. Fitted always.</div>
      </header>

      {/* Main Card */}
      <main style={styles.card}>
        {/* Back Button */}
        <button onClick={() => navigate("/")} style={styles.backButton}>
          ← Back
        </button>

        {/* Header Content */}
        <div style={styles.cardHeader}>
          <span style={styles.eyebrow}>Welcome back</span>
          <h1 style={styles.title}>Customer Login</h1>
          <p style={styles.subtitle}>
            Access your measurements, bookings and orders.
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div style={styles.errorBanner}>
            <span style={styles.errorIcon}>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username or Email</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              placeholder="johndoe or john@email.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.forgotPassword}>
            <button type="button" style={styles.forgotLink}>
              Forgot password?
            </button>
          </div>

          <div style={styles.divider} />

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.primaryButton,
              ...(loading && styles.buttonDisabled)
            }}
          >
            {loading ? "Logging in..." : "Log in as customer"}
          </button>

          <button type="button" style={styles.googleButton}>
            <span style={styles.googleIcon}>G</span> Continue with Google
          </button>

          <p style={styles.footerText}>
            Don't have an account?{" "}
            <Link to="/register" style={styles.linkButton}>
              Register here
            </Link>
          </p>

          <p style={styles.tailorText}>
            Are you a tailor?{" "}
            <button
              type="button"
              onClick={() => navigate("/tailor/login")}
              style={styles.tailorLink}
            >
              Open the Tailor Portal
            </button>
          </p>
        </form>
      </main>

      {/* Footer */}
      <p style={styles.footer}>
        By continuing, you agree to our{" "}
        <a href="#" style={styles.footerLink}>Terms</a> &amp;{" "}
        <a href="#" style={styles.footerLink}>Privacy Policy</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F5F7FA',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 16px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  logo: {
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    textDecoration: 'none',
  },
  logoAccent: {
    color: '#1A6FD4',
  },
  tagline: {
    fontSize: '13px',
    color: '#5C7A9A',
    fontWeight: '500',
    letterSpacing: '0.5px',
    marginTop: '4px',
  },
  card: {
    width: '100%',
    maxWidth: '440px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '32px 28px',
    boxShadow: '0 8px 40px rgba(10, 15, 30, 0.06)',
    border: '1px solid #DCE4EE',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#5C7A9A',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif',
    transition: 'color 0.2s',
  },
  cardHeader: {
    marginBottom: '24px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#1A6FD4',
    backgroundColor: '#E8F4FB',
    padding: '2px 12px',
    borderRadius: '999px',
    display: 'inline-block',
  },
  title: {
    fontSize: '26px',
    fontWeight: '600',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    marginTop: '8px',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
  },
  errorBanner: {
    backgroundColor: '#FEE2E2',
    color: '#B91C1C',
    fontSize: '14px',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  errorIcon: {
    marginTop: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#F5F7FA',
    color: '#0A0F1E',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    outline: 'none',
    boxSizing: 'border-box',
  },
  forgotPassword: {
    textAlign: 'right',
  },
  forgotLink: {
    background: 'none',
    border: 'none',
    color: '#1A6FD4',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'underline',
  },
  divider: {
    borderTop: '1px solid #DCE4EE',
    margin: '4px 0',
  },
  primaryButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  googleButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
    color: '#0A0F1E',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    border: '2px solid #DCE4EE',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  googleIcon: {
    fontSize: '20px',
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#5C7A9A',
    margin: '4px 0 0',
  },
  linkButton: {
    color: '#1A6FD4',
    fontWeight: '700',
    textDecoration: 'none',
  },
  tailorText: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#5C7A9A',
    margin: '8px 0 0',
  },
  tailorLink: {
    background: 'none',
    border: 'none',
    color: '#1A6FD4',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    textDecoration: 'underline',
  },
  footer: {
    fontSize: '12px',
    color: '#A8B7C7',
    textAlign: 'center',
    marginTop: '24px',
  },
  footerLink: {
    color: '#1A6FD4',
    textDecoration: 'none',
  },
};

// Add hover styles via media query
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  button:hover {
    opacity: 0.9;
  }
  input:focus {
    border-color: #1A6FD4 !important;
    box-shadow: 0 0 0 3px rgba(26, 111, 212, 0.1) !important;
  }
  @media (max-width: 480px) {
    .card {
      padding: 24px 16px !important;
    }
    .title {
      font-size: 22px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Login;