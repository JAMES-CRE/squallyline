// // 


// // Register.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';


// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     first_name: '',
//     last_name: '',
//     phone_number: '',
//     password: '',
//     password_confirm: '',
//     role: 'customer'
//   });
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.first_name.trim()) {
//       newErrors.first_name = 'First name is required';
//     }
    
//     if (!formData.last_name.trim()) {
//       newErrors.last_name = 'Last name is required';
//     }
    
//     if (!formData.phone_number.trim()) {
//       newErrors.phone_number = 'Phone number is required';
//     } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone_number)) {
//       newErrors.phone_number = 'Phone number is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
//       newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
//     }
    
//     if (formData.password !== formData.password_confirm) {
//       newErrors.password_confirm = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setLoading(true);
//     setServerError('');
    
//     try {
//       const response = await fetch('/api/accounts/register/', formData);
      
//       if (response.data.success) {
//         navigate('/login', { 
//           state: { 
//             message: 'Account created successfully! Please log in.',
//             email: formData.email 
//           } 
//         });
//       }
//     } catch (error) {
//       if (error.response) {
//         const { data } = error.response;
        
//         if (data.errors) {
//           setErrors(data.errors);
//         } else if (data.message) {
//           setServerError(data.message);
//         } else {
//           setServerError('Registration failed. Please try again.');
//         }
//       } else if (error.request) {
//         setServerError('Network error. Please check your connection.');
//       } else {
//         setServerError('An unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Styles
//   const styles = {
//     container: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: '#f8f9fc',
//       padding: '20px',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
//     },
//     card: {
//       width: '100%',
//       maxWidth: '520px',
//       background: '#ffffff',
//       borderRadius: '20px',
//       boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
//       overflow: 'hidden'
//     },
//     header: {
//       padding: '30px 40px 20px',
//       textAlign: 'center',
//       borderBottom: '1px solid #f0f2f5'
//     },
//     brandLink: {
//       fontFamily: "'Fraunces', serif",
//       fontSize: '28px',
//       fontWeight: 600,
//       color: '#1a1a2e',
//       textDecoration: 'none',
//       display: 'inline-block'
//     },
//     brandSpan: {
//       color: '#4f46e5'
//     },
//     tagline: {
//       display: 'block',
//       fontSize: '13px',
//       color: '#6b7280',
//       marginTop: '4px',
//       fontWeight: 400,
//       letterSpacing: '0.3px'
//     },
//     content: {
//       padding: '30px 40px 40px'
//     },
//     eyebrow: {
//       display: 'block',
//       fontSize: '12px',
//       fontWeight: 600,
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: '#4f46e5',
//       marginBottom: '6px'
//     },
//     title: {
//       fontFamily: "'Fraunces', serif",
//       fontSize: '28px',
//       fontWeight: 600,
//       color: '#1a1a2e',
//       margin: '0 0 6px 0'
//     },
//     subtitle: {
//       fontSize: '14px',
//       color: '#6b7280',
//       margin: '0 0 28px 0',
//       lineHeight: 1.5
//     },
//     alertError: {
//       padding: '14px 16px',
//       borderRadius: '10px',
//       fontSize: '14px',
//       marginBottom: '20px',
//       background: '#fee2e2',
//       color: '#991b1b',
//       border: '1px solid #fecaca'
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '18px'
//     },
//     formRow: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '16px'
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px'
//     },
//     label: {
//       fontSize: '13px',
//       fontWeight: 600,
//       color: '#374151'
//     },
//     input: {
//       padding: '10px 14px',
//       border: '1.5px solid #d1d5db',
//       borderRadius: '10px',
//       fontSize: '14px',
//       fontFamily: "'Inter', sans-serif",
//       transition: 'border-color 0.2s, box-shadow 0.2s',
//       background: '#fafbfc',
//       outline: 'none'
//     },
//     inputError: {
//       borderColor: '#ef4444'
//     },
//     errorText: {
//       fontSize: '12px',
//       color: '#ef4444',
//       marginTop: '2px'
//     },
//     helperText: {
//       fontSize: '12px',
//       color: '#6b7280',
//       marginTop: '2px'
//     },
//     roleOptions: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       marginTop: '4px'
//     },
//     roleBtn: {
//       padding: '10px',
//       border: '1.5px solid #d1d5db',
//       borderRadius: '10px',
//       background: '#fafbfc',
//       fontSize: '14px',
//       fontWeight: 500,
//       cursor: 'pointer',
//       transition: 'all 0.2s',
//       fontFamily: "'Inter', sans-serif",
//       color: '#6b7280'
//     },
//     roleBtnActive: {
//       borderColor: '#4f46e5',
//       background: '#eef2ff',
//       color: '#4f46e5'
//     },
//     btnPrimary: {
//       padding: '12px 24px',
//       border: 'none',
//       borderRadius: '10px',
//       fontSize: '15px',
//       fontWeight: 600,
//       fontFamily: "'Inter', sans-serif",
//       cursor: 'pointer',
//       transition: 'all 0.2s',
//       background: '#4f46e5',
//       color: 'white'
//     },
//     btnBlock: {
//       width: '100%',
//       marginTop: '6px'
//     },
//     btnDisabled: {
//       opacity: 0.6,
//       cursor: 'not-allowed'
//     },
//     footer: {
//       marginTop: '24px',
//       textAlign: 'center',
//       fontSize: '14px',
//       color: '#6b7280',
//       borderTop: '1px solid #f0f2f5',
//       paddingTop: '20px'
//     },
//     footerLink: {
//       color: '#4f46e5',
//       textDecoration: 'none',
//       fontWeight: 600
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.header}>
//           <Link to="/" style={styles.brandLink}>
//             Tailor<span style={styles.brandSpan}>Connect</span>
//           </Link>
//           <span style={styles.tagline}>Measured once. Fitted always.</span>
//         </div>
        
//         <div style={styles.content}>
//           <span style={styles.eyebrow}>Get started</span>
//           <h1 style={styles.title}>Create account</h1>
//           <p style={styles.subtitle}>Join TailorConnect and manage your measurements, bookings, and orders.</p>
          
//           {serverError && (
//             <div style={styles.alertError}>
//               {serverError}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <div style={styles.formRow}>
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="first_name">First Name</label>
//                 <input
//                   type="text"
//                   id="first_name"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   placeholder="John"
//                   style={{
//                     ...styles.input,
//                     ...(errors.first_name ? styles.inputError : {})
//                   }}
//                 />
//                 {errors.first_name && <span style={styles.errorText}>{errors.first_name}</span>}
//               </div>
              
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="last_name">Last Name</label>
//                 <input
//                   type="text"
//                   id="last_name"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   placeholder="Doe"
//                   style={{
//                     ...styles.input,
//                     ...(errors.last_name ? styles.inputError : {})
//                   }}
//                 />
//                 {errors.last_name && <span style={styles.errorText}>{errors.last_name}</span>}
//               </div>
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="johndoe"
//                 style={{
//                   ...styles.input,
//                   ...(errors.username ? styles.inputError : {})
//                 }}
//               />
//               {errors.username && <span style={styles.errorText}>{errors.username}</span>}
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@email.com"
//                 style={{
//                   ...styles.input,
//                   ...(errors.email ? styles.inputError : {})
//                 }}
//               />
//               {errors.email && <span style={styles.errorText}>{errors.email}</span>}
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="phone_number">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone_number"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 placeholder="0241234567"
//                 style={{
//                   ...styles.input,
//                   ...(errors.phone_number ? styles.inputError : {})
//                 }}
//               />
//               {errors.phone_number && <span style={styles.errorText}>{errors.phone_number}</span>}
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 style={{
//                   ...styles.input,
//                   ...(errors.password ? styles.inputError : {})
//                 }}
//               />
//               {errors.password && <span style={styles.errorText}>{errors.password}</span>}
//               <span style={styles.helperText}>
//                 Must contain at least 8 characters with uppercase, lowercase, number, and special character
//               </span>
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label} htmlFor="password_confirm">Confirm Password</label>
//               <input
//                 type="password"
//                 id="password_confirm"
//                 name="password_confirm"
//                 value={formData.password_confirm}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 style={{
//                   ...styles.input,
//                   ...(errors.password_confirm ? styles.inputError : {})
//                 }}
//               />
//               {errors.password_confirm && <span style={styles.errorText}>{errors.password_confirm}</span>}
//             </div>
            
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Account Type</label>
//               <div style={styles.roleOptions}>
//                 <button
//                   type="button"
//                   style={{
//                     ...styles.roleBtn,
//                     ...(formData.role === 'customer' ? styles.roleBtnActive : {})
//                   }}
//                   onClick={() => setFormData(prev => ({ ...prev, role: 'customer' }))}
//                 >
//                   Customer
//                 </button>
//                 <button
//                   type="button"
//                   style={{
//                     ...styles.roleBtn,
//                     ...(formData.role === 'tailor' ? styles.roleBtnActive : {})
//                   }}
//                   onClick={() => setFormData(prev => ({ ...prev, role: 'tailor' }))}
//                 >
//                   Tailor
//                 </button>
//               </div>
//             </div>
            
//             <button 
//               type="submit" 
//               style={{
//                 ...styles.btnPrimary,
//                 ...styles.btnBlock,
//                 ...(loading ? styles.btnDisabled : {})
//               }}
//               disabled={loading}
//             >
//               {loading ? 'Creating account...' : 'Create account'}
//             </button>
//           </form>
          
//           <div style={styles.footer}>
//             <p>
//               Already have an account? <Link to="/login" style={styles.footerLink}>Log in</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// screens/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Shield
} from 'lucide-react';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
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
      newErrors.email = 'Please enter a valid email address';
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
      newErrors.phone_number = 'Please enter a valid phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.password_confirm) {
      newErrors.password_confirm = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allFields = Object.keys(formData);
    const touchedFields = {};
    allFields.forEach(field => { touchedFields[field] = true; });
    setTouched(touchedFields);
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setServerError('');
    
    try {
      const response = await fetch('/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate('/login', { 
          state: { 
            message: 'Account created successfully! Please log in.',
            email: formData.email 
          } 
        });
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else if (data.message) {
          setServerError(data.message);
        } else {
          setServerError('Registration failed. Please try again.');
        }
      }
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        setServerError('Network error. Please check your connection.');
      } else {
        setServerError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (field) => {
    return touched[field] && errors[field];
  };

  return (
    <div style={styles.container}>
      {/* Background Gradient */}
      <div style={styles.bgGradient}>
        <div style={styles.gradientOrb1} />
        <div style={styles.gradientOrb2} />
      </div>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/')} style={styles.backButton}>
          <ArrowLeft size={18} /> Back
        </button>

        {/* Logo */}
        <div style={styles.logoSection}>
          <div style={styles.logoIcon}>
            <Shield size={24} color="#FFFFFF" />
          </div>
          <Link to="/" style={styles.logo}>
            Squally<span style={styles.logoAccent}>line</span>
          </Link>
        </div>

        {/* Header Content */}
        <div style={styles.cardHeader}>
          <span style={styles.eyebrow}>Get started</span>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>Join Squallyline and manage your measurements, bookings, and orders.</p>
        </div>
        
        {serverError && (
          <div style={styles.alertError}>
            <AlertCircle size={18} color="#991B1B" />
            <span>{serverError}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>First Name</label>
              <div style={{...styles.inputWrapper, ...(getFieldError('first_name') ? styles.inputWrapperError : {})}}>
                <User size={18} color="#8E8EA0" style={styles.inputIcon} />
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('first_name')}
                  placeholder="John"
                  style={styles.input}
                />
              </div>
              {getFieldError('first_name') && <span style={styles.errorText}>{errors.first_name}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Last Name</label>
              <div style={{...styles.inputWrapper, ...(getFieldError('last_name') ? styles.inputWrapperError : {})}}>
                <User size={18} color="#8E8EA0" style={styles.inputIcon} />
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('last_name')}
                  placeholder="Doe"
                  style={styles.input}
                />
              </div>
              {getFieldError('last_name') && <span style={styles.errorText}>{errors.last_name}</span>}
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <div style={{...styles.inputWrapper, ...(getFieldError('username') ? styles.inputWrapperError : {})}}>
              <User size={18} color="#8E8EA0" style={styles.inputIcon} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={() => handleBlur('username')}
                placeholder="johndoe"
                style={styles.input}
              />
            </div>
            {getFieldError('username') && <span style={styles.errorText}>{errors.username}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <div style={{...styles.inputWrapper, ...(getFieldError('email') ? styles.inputWrapperError : {})}}>
              <Mail size={18} color="#8E8EA0" style={styles.inputIcon} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="you@email.com"
                style={styles.input}
              />
            </div>
            {getFieldError('email') && <span style={styles.errorText}>{errors.email}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <div style={{...styles.inputWrapper, ...(getFieldError('phone_number') ? styles.inputWrapperError : {})}}>
              <Phone size={18} color="#8E8EA0" style={styles.inputIcon} />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                onBlur={() => handleBlur('phone_number')}
                placeholder="0241234567"
                style={styles.input}
              />
            </div>
            {getFieldError('phone_number') && <span style={styles.errorText}>{errors.phone_number}</span>}
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={{...styles.inputWrapper, ...(getFieldError('password') ? styles.inputWrapperError : {})}}>
              <Lock size={18} color="#8E8EA0" style={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur('password')}
                placeholder="••••••••"
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? <EyeOff size={18} color="#8E8EA0" /> : <Eye size={18} color="#8E8EA0" />}
              </button>
            </div>
            {getFieldError('password') && <span style={styles.errorText}>{errors.password}</span>}
            <span style={styles.helperText}>
              8+ characters with uppercase, lowercase, number, and special character
            </span>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={{...styles.inputWrapper, ...(getFieldError('password_confirm') ? styles.inputWrapperError : {})}}>
              <Lock size={18} color="#8E8EA0" style={styles.inputIcon} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="password_confirm"
                value={formData.password_confirm}
                onChange={handleChange}
                onBlur={() => handleBlur('password_confirm')}
                placeholder="••••••••"
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
              >
                {showConfirmPassword ? <EyeOff size={18} color="#8E8EA0" /> : <Eye size={18} color="#8E8EA0" />}
              </button>
            </div>
            {getFieldError('password_confirm') && <span style={styles.errorText}>{errors.password_confirm}</span>}
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
                <User size={16} />
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
                <UserCheck size={16} />
                Tailor
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            style={{
              ...styles.btnPrimary,
              ...(loading ? styles.btnDisabled : {})
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span style={styles.spinner} />
                Creating account...
              </>
            ) : (
              'Create account'
            )}
          </button>
        </form>
        
        <div style={styles.footer}>
          <p>
            Already have an account? <Link to="/login" style={styles.footerLink}>Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F8F8FA',
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
    background: 'radial-gradient(circle, rgba(26,111,212,0.04) 0%, transparent 70%)',
  },
  gradientOrb2: {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(26,111,212,0.04) 0%, transparent 70%)',
  },
  main: {
    width: '100%',
    maxWidth: '500px',
    position: 'relative',
    zIndex: 1,
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#5C7A9A',
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
    backgroundColor: '#1A6FD4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    textDecoration: 'none',
  },
  logoAccent: {
    color: '#1A6FD4',
  },
  cardHeader: {
    marginBottom: '24px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#1A6FD4',
    backgroundColor: '#E8F4FB',
    padding: '2px 12px',
    borderRadius: '999px',
    display: 'inline-block',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    marginTop: '8px',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
    lineHeight: 1.5,
  },
  alertError: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '10px',
    fontSize: '14px',
    marginBottom: '20px',
    background: '#FEE2E2',
    color: '#991B1B',
    border: '1px solid #FECACA',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #DCE4EE',
    borderRadius: '10px',
    background: '#FFFFFF',
    transition: 'all 0.2s',
  },
  inputWrapperError: {
    borderColor: '#EF4444',
    background: '#FEF2F2',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
  },
  input: {
    width: '100%',
    padding: '11px 12px 11px 40px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    background: 'transparent',
    outline: 'none',
    color: '#0A0F1E',
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
  errorText: {
    fontSize: '12px',
    color: '#EF4444',
    marginTop: '2px',
  },
  helperText: {
    fontSize: '12px',
    color: '#8E8EA0',
    marginTop: '2px',
  },
  roleOptions: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '2px',
  },
  roleBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '10px',
    border: '1.5px solid #DCE4EE',
    borderRadius: '10px',
    background: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: "'Inter', sans-serif",
    color: '#5C7A9A',
  },
  roleBtnActive: {
    borderColor: '#1A6FD4',
    background: '#E8F4FB',
    color: '#1A6FD4',
  },
  btnPrimary: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: "'Inter', sans-serif",
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: '#1A6FD4',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
  },
  btnDisabled: {
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
  footer: {
    marginTop: '24px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#5C7A9A',
    paddingTop: '20px',
  },
  footerLink: {
    color: '#1A6FD4',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.2s',
  },
};

// Add keyframe animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .register-back-button:hover {
    color: #1A6FD4;
  }

  .register-footer-link:hover {
    text-decoration: underline;
    color: #1557A8;
  }

  .register-input-wrapper:focus-within {
    border-color: #1A6FD4;
    box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
  }

  .register-input-wrapper-error:focus-within {
    border-color: #EF4444;
    box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
  }

  .register-role-btn:hover {
    background: #EEF2FF;
  }

  .register-primary-button:hover:not(:disabled) {
    background: #1557A8;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26,111,212,0.3);
  }

  @media (max-width: 480px) {
    .register-title {
      font-size: 24px !important;
    }
    .register-form-row {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }
    .register-back-button {
      font-size: 13px !important;
    }
    .register-logo {
      font-size: 24px !important;
    }
    .register-logo-icon {
      width: 36px !important;
      height: 36px !important;
    }
    .register-logo-icon svg {
      width: 20px !important;
      height: 20px !important;
    }
    .register-primary-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .register-title {
      font-size: 22px !important;
    }
    .register-logo {
      font-size: 22px !important;
    }
    .register-role-options {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Register;