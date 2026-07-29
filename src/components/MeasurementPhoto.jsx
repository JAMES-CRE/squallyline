// components/MeasurementPhoto.jsx
import React, { useState, useRef } from 'react';
import {
  Camera,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  Image as ImageIcon,
  HelpCircle,
} from 'lucide-react';

const MeasurementPhoto = ({ onClose, onMeasurementsComplete }) => {
  const [step, setStep] = useState(1); // 1: Front, 2: Side, 3: Results
  const [frontPhoto, setFrontPhoto] = useState(null);
  const [sidePhoto, setSidePhoto] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [measurements, setMeasurements] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // Sample measurement results (would come from AI API)
  const generateMeasurements = () => {
    setIsAnalyzing(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const result = {
        chest: 34.5,
        waist: 28.0,
        hip: 36.5,
        shoulder: 16.5,
        sleeve: 24.0,
        trouser: 42.0,
        neck: 14.5,
        thigh: 22.0,
        confidence: 92,
      };
      setMeasurements(result);
      setIsAnalyzing(false);
      setStep(3);
    }, 2000);
  };

  const handlePhotoUpload = (type, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === 'front') {
        setFrontPhoto(reader.result);
        setStep(2);
      } else {
        setSidePhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCameraCapture = (type) => {
    // For mobile - use input with capture attribute
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = (e) => {
      if (e.target.files[0]) {
        handlePhotoUpload(type, e.target.files[0]);
      }
    };
    input.click();
  };

  const handleFileUpload = (type) => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = (e) => {
      if (e.target.files[0]) {
        handlePhotoUpload(type, e.target.files[0]);
      }
    };
  };

  const handleSaveMeasurements = () => {
    if (onMeasurementsComplete) {
      onMeasurementsComplete(measurements);
    }
    onClose();
  };

  const handleRetake = (type) => {
    if (type === 'front') {
      setFrontPhoto(null);
      setStep(1);
    } else {
      setSidePhoto(null);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header */}
        <div style={styles.header}>
          <button onClick={onClose} style={styles.closeButton}>
            <ArrowLeft size={20} />
          </button>
          <h2 style={styles.title}>Photo Measurement</h2>
          <button style={styles.helpButton}>
            <HelpCircle size={20} color="#8E8EA0" />
          </button>
        </div>

        {/* Body */}
        <div style={styles.body}>
          {/* Step 1: Front Photo */}
          {step === 1 && (
            <div style={styles.photoStep}>
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber}>1</span>
                <div>
                  <h3 style={styles.stepTitle}>Front Photo</h3>
                  <p style={styles.stepDesc}>Stand straight, arms slightly away from body</p>
                </div>
              </div>

              <div style={styles.photoArea}>
                {frontPhoto ? (
                  <div style={styles.photoPreview}>
                    <img src={frontPhoto} alt="Front view" style={styles.previewImage} />
                    <button onClick={() => handleRetake('front')} style={styles.retakeButton}>
                      <RefreshCw size={16} /> Retake
                    </button>
                  </div>
                ) : (
                  <div style={styles.photoPlaceholder}>
                    <div style={styles.placeholderIcon}>
                      <Camera size={40} color="#DCE4EE" />
                    </div>
                    <p style={styles.placeholderText}>Take a photo from the front</p>
                    <div style={styles.photoActions}>
                      <button 
                        onClick={() => handleCameraCapture('front')}
                        style={styles.primaryButton}
                      >
                        <Camera size={18} /> Take Photo
                      </button>
                      <button 
                        onClick={() => handleFileUpload('front')}
                        style={styles.secondaryButton}
                      >
                        <Upload size={18} /> Upload
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {frontPhoto && (
                <div style={styles.stepFooter}>
                  <CheckCircle size={18} color="#22C55E" />
                  <span style={styles.stepComplete}>Front photo captured</span>
                  <button 
                    onClick={() => setStep(2)} 
                    style={styles.nextButton}
                  >
                    Next Step →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Side Photo */}
          {step === 2 && (
            <div style={styles.photoStep}>
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber}>2</span>
                <div>
                  <h3 style={styles.stepTitle}>Side Photo</h3>
                  <p style={styles.stepDesc}>Turn sideways, arms relaxed</p>
                </div>
              </div>

              <div style={styles.photoArea}>
                {sidePhoto ? (
                  <div style={styles.photoPreview}>
                    <img src={sidePhoto} alt="Side view" style={styles.previewImage} />
                    <button onClick={() => handleRetake('side')} style={styles.retakeButton}>
                      <RefreshCw size={16} /> Retake
                    </button>
                  </div>
                ) : (
                  <div style={styles.photoPlaceholder}>
                    <div style={styles.placeholderIcon}>
                      <Camera size={40} color="#DCE4EE" />
                    </div>
                    <p style={styles.placeholderText}>Take a photo from the side</p>
                    <div style={styles.photoActions}>
                      <button 
                        onClick={() => handleCameraCapture('side')}
                        style={styles.primaryButton}
                      >
                        <Camera size={18} /> Take Photo
                      </button>
                      <button 
                        onClick={() => handleFileUpload('side')}
                        style={styles.secondaryButton}
                      >
                        <Upload size={18} /> Upload
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {sidePhoto && (
                <div style={styles.stepFooter}>
                  <CheckCircle size={18} color="#22C55E" />
                  <span style={styles.stepComplete}>Side photo captured</span>
                  <button 
                    onClick={generateMeasurements}
                    style={styles.analyzeButton}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Photos'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && measurements && (
            <div style={styles.resultsContainer}>
              <div style={styles.resultsHeader}>
                <div style={styles.resultsBadge}>
                  <CheckCircle size={20} color="#22C55E" />
                  <span>Measurement Complete</span>
                </div>
                <div style={styles.confidenceBadge}>
                  <span style={styles.confidenceValue}>{measurements.confidence}%</span>
                  <span style={styles.confidenceLabel}>Confidence</span>
                </div>
              </div>

              <div style={styles.resultsGrid}>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Chest</span>
                  <span style={styles.resultValue}>{measurements.chest} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Waist</span>
                  <span style={styles.resultValue}>{measurements.waist} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Hip</span>
                  <span style={styles.resultValue}>{measurements.hip} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Shoulder</span>
                  <span style={styles.resultValue}>{measurements.shoulder} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Sleeve</span>
                  <span style={styles.resultValue}>{measurements.sleeve} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Trouser</span>
                  <span style={styles.resultValue}>{measurements.trouser} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Neck</span>
                  <span style={styles.resultValue}>{measurements.neck} in</span>
                </div>
                <div style={styles.resultItem}>
                  <span style={styles.resultLabel}>Thigh</span>
                  <span style={styles.resultValue}>{measurements.thigh} in</span>
                </div>
              </div>

              <div style={styles.resultsActions}>
                <button 
                  onClick={handleSaveMeasurements}
                  style={styles.saveButton}
                >
                  <CheckCircle size={18} /> Save Measurements
                </button>
                <button 
                  onClick={() => setStep(1)}
                  style={styles.retryButton}
                >
                  <RefreshCw size={18} /> Retake Photos
                </button>
              </div>

              <p style={styles.resultsNote}>
                You can adjust any measurement manually if needed.
              </p>
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    maxWidth: '540px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid #F1F1F4',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    color: '#5C7A9A',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0A0F1E',
    margin: 0,
    fontFamily: 'Fraunces, serif',
  },
  helpButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  body: {
    padding: '20px',
    overflowY: 'auto',
    maxHeight: 'calc(90vh - 70px)',
  },
  photoStep: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  stepNumber: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0A0F1E',
    margin: 0,
  },
  stepDesc: {
    fontSize: '13px',
    color: '#8E8EA0',
    margin: 0,
  },
  photoArea: {
    backgroundColor: '#F8F8FA',
    borderRadius: '12px',
    border: '2px dashed #DCE4EE',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photoPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '24px',
  },
  placeholderIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#F1F1F4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
  },
  photoActions: {
    display: 'flex',
    gap: '10px',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 18px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 18px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: 'transparent',
    color: '#5C7A9A',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  photoPreview: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '200px',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    minHeight: '200px',
    objectFit: 'cover',
  },
  retakeButton: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    backdropFilter: 'blur(4px)',
  },
  stepFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingTop: '12px',
    borderTop: '1px solid #F1F1F4',
  },
  stepComplete: {
    flex: 1,
    fontSize: '14px',
    color: '#22C55E',
    fontWeight: '500',
  },
  nextButton: {
    padding: '8px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  analyzeButton: {
    padding: '8px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#22C55E',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid #F1F1F4',
  },
  resultsBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#22C55E',
  },
  confidenceBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4px 12px',
    backgroundColor: '#E8F4FB',
    borderRadius: '8px',
  },
  confidenceValue: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1A6FD4',
  },
  confidenceLabel: {
    fontSize: '10px',
    color: '#5C7A9A',
    fontWeight: '500',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  resultItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 14px',
    backgroundColor: '#F8F8FA',
    borderRadius: '8px',
    border: '1px solid #F1F1F4',
  },
  resultLabel: {
    fontSize: '13px',
    color: '#5C7A9A',
  },
  resultValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  resultsActions: {
    display: 'flex',
    gap: '10px',
    marginTop: '4px',
  },
  saveButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  retryButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: 'transparent',
    color: '#5C7A9A',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
  },
  resultsNote: {
    fontSize: '12px',
    color: '#8E8EA0',
    textAlign: 'center',
    margin: 0,
  },
};

export default MeasurementPhoto;