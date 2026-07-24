// 


// Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: '',
    password_confirm: '',
    role: 'customer'
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }
    
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }
    
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone number is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
    }
    
    if (formData.password !== formData.password_confirm) {
      newErrors.password_confirm = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setServerError('');
    
    try {
      const response = await fetch('/api/accounts/register/', formData);
      
      if (response.data.success) {
        navigate('/login', { 
          state: { 
            message: 'Account created successfully! Please log in.',
            email: formData.email 
          } 
        });
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        
        if (data.errors) {
          setErrors(data.errors);
        } else if (data.message) {
          setServerError(data.message);
        } else {
          setServerError('Registration failed. Please try again.');
        }
      } else if (error.request) {
        setServerError('Network error. Please check your connection.');
      } else {
        setServerError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fc',
      padding: '20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    card: {
      width: '100%',
      maxWidth: '520px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden'
    },
    header: {
      padding: '30px 40px 20px',
      textAlign: 'center',
      borderBottom: '1px solid #f0f2f5'
    },
    brandLink: {
      fontFamily: "'Fraunces', serif",
      fontSize: '28px',
      fontWeight: 600,
      color: '#1a1a2e',
      textDecoration: 'none',
      display: 'inline-block'
    },
    brandSpan: {
      color: '#4f46e5'
    },
    tagline: {
      display: 'block',
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '4px',
      fontWeight: 400,
      letterSpacing: '0.3px'
    },
    content: {
      padding: '30px 40px 40px'
    },
    eyebrow: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: '#4f46e5',
      marginBottom: '6px'
    },
    title: {
      fontFamily: "'Fraunces', serif",
      fontSize: '28px',
      fontWeight: 600,
      color: '#1a1a2e',
      margin: '0 0 6px 0'
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0 0 28px 0',
      lineHeight: 1.5
    },
    alertError: {
      padding: '14px 16px',
      borderRadius: '10px',
      fontSize: '14px',
      marginBottom: '20px',
      background: '#fee2e2',
      color: '#991b1b',
      border: '1px solid #fecaca'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    label: {
      fontSize: '13px',
      fontWeight: 600,
      color: '#374151'
    },
    input: {
      padding: '10px 14px',
      border: '1.5px solid #d1d5db',
      borderRadius: '10px',
      fontSize: '14px',
      fontFamily: "'Inter', sans-serif",
      transition: 'border-color 0.2s, box-shadow 0.2s',
      background: '#fafbfc',
      outline: 'none'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    errorText: {
      fontSize: '12px',
      color: '#ef4444',
      marginTop: '2px'
    },
    helperText: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '2px'
    },
    roleOptions: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginTop: '4px'
    },
    roleBtn: {
      padding: '10px',
      border: '1.5px solid #d1d5db',
      borderRadius: '10px',
      background: '#fafbfc',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontFamily: "'Inter', sans-serif",
      color: '#6b7280'
    },
    roleBtnActive: {
      borderColor: '#4f46e5',
      background: '#eef2ff',
      color: '#4f46e5'
    },
    btnPrimary: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
      cursor: 'pointer',
      transition: 'all 0.2s',
      background: '#4f46e5',
      color: 'white'
    },
    btnBlock: {
      width: '100%',
      marginTop: '6px'
    },
    btnDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    footer: {
      marginTop: '24px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#6b7280',
      borderTop: '1px solid #f0f2f5',
      paddingTop: '20px'
    },
    footerLink: {
      color: '#4f46e5',
      textDecoration: 'none',
      fontWeight: 600
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <Link to="/" style={styles.brandLink}>
            Tailor<span style={styles.brandSpan}>Connect</span>
          </Link>
          <span style={styles.tagline}>Measured once. Fitted always.</span>
        </div>
        
        <div style={styles.content}>
          <span style={styles.eyebrow}>Get started</span>
          <h1 style={styles.title}>Create account</h1>
          <p style={styles.subtitle}>Join TailorConnect and manage your measurements, bookings, and orders.</p>
          
          {serverError && (
            <div style={styles.alertError}>
              {serverError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  style={{
                    ...styles.input,
                    ...(errors.first_name ? styles.inputError : {})
                  }}
                />
                {errors.first_name && <span style={styles.errorText}>{errors.first_name}</span>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  style={{
                    ...styles.input,
                    ...(errors.last_name ? styles.inputError : {})
                  }}
                />
                {errors.last_name && <span style={styles.errorText}>{errors.last_name}</span>}
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe"
                style={{
                  ...styles.input,
                  ...(errors.username ? styles.inputError : {})
                }}
              />
              {errors.username && <span style={styles.errorText}>{errors.username}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {})
                }}
              />
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phone_number">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="0241234567"
                style={{
                  ...styles.input,
                  ...(errors.phone_number ? styles.inputError : {})
                }}
              />
              {errors.phone_number && <span style={styles.errorText}>{errors.phone_number}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {})
                }}
              />
              {errors.password && <span style={styles.errorText}>{errors.password}</span>}
              <span style={styles.helperText}>
                Must contain at least 8 characters with uppercase, lowercase, number, and special character
              </span>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password_confirm">Confirm Password</label>
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                value={formData.password_confirm}
                onChange={handleChange}
                placeholder="••••••••"
                style={{
                  ...styles.input,
                  ...(errors.password_confirm ? styles.inputError : {})
                }}
              />
              {errors.password_confirm && <span style={styles.errorText}>{errors.password_confirm}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Account Type</label>
              <div style={styles.roleOptions}>
                <button
                  type="button"
                  style={{
                    ...styles.roleBtn,
                    ...(formData.role === 'customer' ? styles.roleBtnActive : {})
                  }}
                  onClick={() => setFormData(prev => ({ ...prev, role: 'customer' }))}
                >
                  Customer
                </button>
                <button
                  type="button"
                  style={{
                    ...styles.roleBtn,
                    ...(formData.role === 'tailor' ? styles.roleBtnActive : {})
                  }}
                  onClick={() => setFormData(prev => ({ ...prev, role: 'tailor' }))}
                >
                  Tailor
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              style={{
                ...styles.btnPrimary,
                ...styles.btnBlock,
                ...(loading ? styles.btnDisabled : {})
              }}
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
          
          <div style={styles.footer}>
            <p>
              Already have an account? <Link to="/login" style={styles.footerLink}>Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;