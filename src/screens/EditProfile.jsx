// screens/EditProfile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  CheckCircle,
  AlertCircle,
  Save,
  X,
  Edit2,
} from 'lucide-react';

const EditProfile = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [formData, setFormData] = useState({
    firstName: 'Akosua',
    lastName: 'Mensah',
    email: 'akosua@mail.com',
    phone: '024 555 0192',
    address: '123 Independence Ave, Accra, Ghana',
    bio: 'Fashion enthusiast | Lover of traditional and modern styles',
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB.');
        return;
      }

      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setIsEditing(false);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError('');
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button 
          onClick={() => navigate('/profile')} 
          style={{
            ...styles.backButton,
            color: colors.secondaryText,
          }}
        >
          <ArrowLeft size={18} /> Back to Profile
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <div style={styles.headerRow}>
            <div>
              <span style={{
                ...styles.eyebrow,
                backgroundColor: colors.primaryLight,
                color: colors.primary,
              }}>
                Account Settings
              </span>
              <h1 style={{
                ...styles.pageTitle,
                color: colors.heading,
              }}>
                Edit Profile
              </h1>
              <p style={{
                ...styles.pageSubtitle,
                color: colors.secondaryText,
              }}>
                Update your personal information and preferences.
              </p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  ...styles.editButton,
                  backgroundColor: colors.primary,
                  color: colors.btnText,
                }}
              >
                <Edit2 size={18} /> Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div style={{
            ...styles.successBanner,
            backgroundColor: colors.successBg,
            color: colors.success,
            borderColor: colors.successBg,
          }}>
            <CheckCircle size={20} color={colors.success} />
            <span>Profile updated successfully!</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={{
            ...styles.errorBanner,
            backgroundColor: colors.errorBg,
            color: colors.error,
            borderColor: colors.errorBg,
          }}>
            <AlertCircle size={20} color={colors.error} />
            <span>{error}</span>
          </div>
        )}

        {/* Profile Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Avatar Upload */}
          <div style={styles.avatarSection}>
            <div style={styles.avatarWrapper}>
              <div style={{
                ...styles.avatar,
                backgroundColor: colors.primary,
              }}>
                {avatarPreview ? (
                  <img 
                    src={avatarPreview} 
                    alt="Profile" 
                    style={styles.avatarImage} 
                  />
                ) : (
                  <User size={48} color="#FFFFFF" />
                )}
                {isEditing && (
                  <label style={styles.avatarUpload}>
                    <Camera size={16} color="#FFFFFF" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      style={styles.avatarInput}
                    />
                  </label>
                )}
              </div>
              <span style={{
                ...styles.avatarLabel,
                color: colors.secondaryText,
              }}>
                {isEditing ? 'Tap to change photo' : 'Profile Photo'}
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div style={styles.formGrid}>
            {/* First Name */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                First Name
              </label>
              <div style={{
                ...styles.inputWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <User size={18} color={colors.secondaryText} style={styles.inputIcon} />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  disabled={!isEditing}
                  style={{
                    ...styles.input,
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            {/* Last Name */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                Last Name
              </label>
              <div style={{
                ...styles.inputWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <User size={18} color={colors.secondaryText} style={styles.inputIcon} />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  disabled={!isEditing}
                  style={{
                    ...styles.input,
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                Email Address
              </label>
              <div style={{
                ...styles.inputWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <Mail size={18} color={colors.secondaryText} style={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  disabled={!isEditing}
                  style={{
                    ...styles.input,
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            {/* Phone */}
            <div style={styles.formGroup}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                Phone Number
              </label>
              <div style={{
                ...styles.inputWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <Phone size={18} color={colors.secondaryText} style={styles.inputIcon} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  disabled={!isEditing}
                  style={{
                    ...styles.input,
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            {/* Address */}
            <div style={{ ...styles.formGroup, gridColumn: '1 / -1' }}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                Address
              </label>
              <div style={{
                ...styles.inputWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <MapPin size={18} color={colors.secondaryText} style={styles.inputIcon} />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  disabled={!isEditing}
                  style={{
                    ...styles.input,
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div style={{ ...styles.formGroup, gridColumn: '1 / -1' }}>
              <label style={{
                ...styles.label,
                color: colors.heading,
              }}>
                Bio
              </label>
              <div style={{
                ...styles.textareaWrapper,
                borderColor: isEditing ? colors.primary : colors.border,
                backgroundColor: isEditing ? colors.cardBg : colors.mainBg,
                opacity: isEditing ? 1 : 0.7,
              }}>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us a little about yourself..."
                  disabled={!isEditing}
                  rows="3"
                  style={{
                    ...styles.textarea,
                    color: colors.text,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div style={styles.actionButtons}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.saveButton,
                  backgroundColor: colors.primary,
                  color: colors.btnText,
                  ...(loading ? styles.buttonDisabled : {}),
                }}
              >
                {loading ? (
                  <>
                    <span style={styles.spinner} />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} /> Save Changes
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  ...styles.cancelButton,
                  borderColor: colors.border,
                  color: colors.secondaryText,
                }}
              >
                <X size={18} /> Cancel
              </button>
            </div>
          )}
        </form>
      </main>
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
    padding: '24px 32px',
    paddingBottom: '100px',
  },
  main: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
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
  pageHeader: {
    marginBottom: '24px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    marginTop: '8px',
    marginBottom: '4px',
  },
  pageSubtitle: {
    fontSize: '14px',
    margin: 0,
    lineHeight: 1.5,
  },
  editButton: {
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(26, 86, 219, 0.15)',
  },
  successBanner: {
    borderRadius: '10px',
    padding: '12px 16px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid',
  },
  errorBanner: {
    borderRadius: '10px',
    padding: '12px 16px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  avatar: {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarUpload: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#1A56DB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  avatarInput: {
    display: 'none',
  },
  avatarLabel: {
    fontSize: '12px',
    fontWeight: '500',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
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
  textareaWrapper: {
    border: '1.5px solid',
    borderRadius: '10px',
    transition: 'all 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    background: 'transparent',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  saveButton: {
    flex: 1,
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    boxShadow: '0 4px 16px rgba(26, 86, 219, 0.2)',
  },
  cancelButton: {
    flex: 1,
    padding: '14px',
    borderRadius: '10px',
    border: '1.5px solid',
    background: 'transparent',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
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
};

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .edit-profile-back-button:hover {
    color: #1A56DB !important;
  }

  .edit-profile-edit-button:hover {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  .edit-profile-save-button:hover:not(:disabled) {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  .edit-profile-cancel-button:hover {
    background-color: #F1F5F9 !important;
  }

  .edit-profile-avatar-upload:hover {
    background-color: #1A3A8A !important;
  }

  @media (max-width: 480px) {
    .edit-profile-title {
      font-size: 24px !important;
    }
    .edit-profile-back-button {
      font-size: 13px !important;
    }
    .edit-profile-form-grid {
      grid-template-columns: 1fr !important;
    }
    .edit-profile-header-row {
      flex-direction: column !important;
      gap: 12px !important;
    }
    .edit-profile-action-buttons {
      flex-direction: column !important;
    }
    .edit-profile-edit-button {
      width: 100% !important;
      justify-content: center !important;
    }
  }

  @media (max-width: 360px) {
    .edit-profile-title {
      font-size: 22px !important;
    }
    .edit-profile-avatar {
      width: 80px !important;
      height: 80px !important;
    }
    .edit-profile-avatar svg {
      width: 36px !important;
      height: 36px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default EditProfile;