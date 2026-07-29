// screens/TailorUpload.jsx
import React, { useState } from 'react';
import {
  Home,
  Calendar,
  Package,
  Upload,
  User,
  Camera,
  Image,
  X,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Plus,
  Tag,
  DollarSign,
  Scissors,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TailorUpload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    designName: '',
    category: "Women's Wear",
    price: '',
    fabric: '',
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    "Men's Wear",
    "Women's Wear",
    'Traditional',
    'Suit',
    'Wedding',
    'Casual',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleImageUpload = (e) => {
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

      setUploadedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError('');
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async () => {
    if (!uploadedImage) {
      setError('Please upload an image of the design.');
      return;
    }

    if (!formData.designName.trim()) {
      setError('Please enter a design name.');
      return;
    }

    if (!formData.price.trim()) {
      setError('Please enter a price estimate.');
      return;
    }

    if (!formData.fabric.trim()) {
      setError('Please enter the fabric type.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFormData({
          designName: '',
          category: "Women's Wear",
          price: '',
          fabric: '',
        });
        setUploadedImage(null);
        setImagePreview(null);
      }, 3000);
    } catch (err) {
      setError('Failed to publish design. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/tailor/dashboard')} style={styles.backButton}>
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Portfolio</span>
          <h1 style={styles.pageTitle}>Upload Design</h1>
          <p style={styles.pageSubtitle}>
            Add a finished piece to your public gallery.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div style={styles.successBanner}>
            <CheckCircle size={20} color="#22C55E" />
            <span>Design published successfully!</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={styles.errorBanner}>
            <AlertCircle size={20} color="#EF4444" />
            <span>{error}</span>
          </div>
        )}

        {/* Image Upload */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Design Image</label>
          <div style={styles.uploadArea}>
            {imagePreview ? (
              <div style={styles.imagePreviewContainer}>
                <img
                  src={imagePreview}
                  alt="Design preview"
                  style={styles.imagePreview}
                />
                <button
                  onClick={removeImage}
                  style={styles.removeImageBtn}
                >
                  <X size={18} color="#FFFFFF" />
                </button>
              </div>
            ) : (
              <label style={styles.uploadLabel}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={styles.uploadInput}
                />
                <Camera size={32} color="#8E8EA0" />
                <span>Tap to upload photo</span>
                <span style={styles.uploadHint}>JPG, PNG, WEBP (max 5MB)</span>
              </label>
            )}
          </div>
        </div>

        {/* Design Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Tag size={16} color="#5C7A9A" style={styles.labelIcon} />
            Design Name
          </label>
          <input
            type="text"
            name="designName"
            value={formData.designName}
            onChange={handleInputChange}
            placeholder="e.g. Kente Kaba Set"
            style={styles.input}
          />
        </div>

        {/* Category */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Scissors size={16} color="#5C7A9A" style={styles.labelIcon} />
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            style={styles.select}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price Estimate */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <DollarSign size={16} color="#5C7A9A" style={styles.labelIcon} />
            Price Estimate
          </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="GHS 000"
            style={styles.input}
          />
        </div>

        {/* Fabric Type */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Scissors size={16} color="#5C7A9A" style={styles.labelIcon} />
            Fabric Type
          </label>
          <input
            type="text"
            name="fabric"
            value={formData.fabric}
            onChange={handleInputChange}
            placeholder="e.g. Kente"
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            ...styles.submitButton,
            ...(isSubmitting ? styles.submitButtonDisabled : {}),
          }}
        >
          {isSubmitting ? (
            <>
              <span style={styles.spinner} />
              Publishing...
            </>
          ) : (
            <>
              <Upload size={18} /> Publish to Portfolio
            </>
          )}
        </button>

        {/* Preview Info */}
        {imagePreview && (
          <div style={styles.previewInfo}>
            <CheckCircle size={14} color="#22C55E" />
            <span>Image ready for upload</span>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button
          onClick={() => navigate('/tailor/dashboard')}
          style={styles.navButton}
          aria-label="Dashboard"
        >
          <span style={styles.navIconWrap}>
            <Home size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/appointments')}
          style={styles.navButton}
          aria-label="Appointments"
        >
          <span style={styles.navIconWrap}>
            <Calendar size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/orders')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={styles.navIconWrap}>
            <Package size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/upload')}
          style={styles.navButton}
          aria-label="Upload"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Upload size={20} color="#FFFFFF" />
          </span>
        </button>
      </nav>
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
    padding: '24px 16px',
    paddingBottom: '100px',
  },
  main: {
    width: '100%',
    maxWidth: '540px',
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
  pageHeader: {
    marginBottom: '20px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#1A6FD4',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    backgroundColor: '#E8F4FB',
    padding: '2px 12px',
    borderRadius: '999px',
    display: 'inline-block',
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    marginTop: '8px',
    marginBottom: '4px',
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
    lineHeight: 1.5,
  },
  successBanner: {
    backgroundColor: '#DCFCE7',
    borderRadius: '10px',
    padding: '10px 14px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#166534',
    fontWeight: '500',
    border: '1px solid #BBF7D0',
  },
  errorBanner: {
    backgroundColor: '#FEE2E2',
    borderRadius: '10px',
    padding: '10px 14px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#991B1B',
    fontWeight: '500',
    border: '1px solid #FECACA',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
    marginBottom: '6px',
  },
  labelIcon: {
    opacity: 0.7,
  },
  uploadArea: {
    borderRadius: '12px',
    border: '2px dashed #DCE4EE',
    backgroundColor: '#FFFFFF',
    padding: '24px',
    textAlign: 'center',
    minHeight: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.2s, background-color 0.2s',
  },
  uploadLabel: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    color: '#8E8EA0',
    fontSize: '13px',
    width: '100%',
    padding: '10px 0',
  },
  uploadInput: {
    display: 'none',
  },
  uploadHint: {
    fontSize: '11px',
    color: '#B8B8C8',
  },
  imagePreviewContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '220px',
    margin: '0 auto',
  },
  imagePreview: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  removeImageBtn: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#0A0F1E',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#0A0F1E',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238E8EA0' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    transition: 'border-color 0.2s',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
  },
  submitButtonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    boxShadow: 'none',
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
  previewInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '12px',
    padding: '8px 14px',
    backgroundColor: '#DCFCE7',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#166534',
  },
  bottomNav: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 48px)',
    maxWidth: '342px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    border: '1px solid #EEEEF0',
    boxShadow: '0 4px 20px rgba(10,15,30,0.08)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '6px',
  },
  navButton: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '2px',
  },
  navIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  navIconWrapActive: {
    backgroundColor: '#0A0F1E',
  },
};

// Add hover styles and keyframes
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .tailor-upload-back-button:hover {
    color: #1A6FD4;
  }

  .tailor-upload-upload-area:hover {
    border-color: #1A6FD4;
    background-color: #F5F9FF;
  }

  .tailor-upload-remove-image-btn:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .tailor-upload-input:focus {
    border-color: #1A6FD4;
    box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
  }

  .tailor-upload-select:focus {
    border-color: #1A6FD4;
    box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
  }

  .tailor-upload-submit-button:hover:not(:disabled) {
    background-color: #1557A8;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26,111,212,0.3);
  }

  .tailor-upload-submit-button:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .tailor-upload-title {
      font-size: 24px !important;
    }
    .tailor-upload-back-button {
      font-size: 13px !important;
    }
    .tailor-upload-submit-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
    .tailor-upload-upload-area {
      min-height: 120px !important;
      padding: 16px !important;
    }
    .tailor-upload-image-preview {
      height: 130px !important;
    }
  }

  @media (max-width: 360px) {
    .tailor-upload-title {
      font-size: 22px !important;
    }
    .tailor-upload-upload-area {
      min-height: 100px !important;
      padding: 12px !important;
    }
    .tailor-upload-image-preview {
      height: 110px !important;
    }
    .tailor-upload-form-group {
      margin-bottom: 12px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TailorUpload;