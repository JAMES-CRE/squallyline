// components/PhotoGuide.jsx
import React from 'react';
import { Camera, CheckCircle, HelpCircle } from 'lucide-react';

const PhotoGuide = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <HelpCircle size={20} color="#1A6FD4" />
        <h3 style={styles.title}>How to Take Measurements Photos</h3>
      </div>

      <div style={styles.steps}>
        <div style={styles.step}>
          <span style={styles.stepNumber}>1</span>
          <div>
            <strong style={styles.stepTitle}>Stand Straight</strong>
            <p style={styles.stepDesc}>Stand against a plain wall with good lighting. Keep your feet shoulder-width apart.</p>
          </div>
        </div>

        <div style={styles.step}>
          <span style={styles.stepNumber}>2</span>
          <div>
            <strong style={styles.stepTitle}>Wear Fitted Clothes</strong>
            <p style={styles.stepDesc}>Wear form-fitting clothing like leggings and a fitted top for accurate results.</p>
          </div>
        </div>

        <div style={styles.step}>
          <span style={styles.stepNumber}>3</span>
          <div>
            <strong style={styles.stepTitle}>Front Photo</strong>
            <p style={styles.stepDesc}>Hold your phone at chest height. Keep arms slightly away from your body.</p>
          </div>
        </div>

        <div style={styles.step}>
          <span style={styles.stepNumber}>4</span>
          <div>
            <strong style={styles.stepTitle}>Side Photo</strong>
            <p style={styles.stepDesc}>Turn 90 degrees to the side. Keep arms relaxed and straight.</p>
          </div>
        </div>
      </div>

      <div style={styles.tips}>
        <div style={styles.tip}>
          <Camera size={16} color="#1A6FD4" />
          <span>Use natural lighting for best results</span>
        </div>
        <div style={styles.tip}>
          <CheckCircle size={16} color="#22C55E" />
          <span>Ensure your full body is visible in both photos</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #F1F1F4',
    maxWidth: '400px',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0A0F1E',
    margin: 0,
    fontFamily: 'Fraunces, serif',
  },
  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '20px',
  },
  step: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#E8F4FB',
    color: '#1A6FD4',
    fontSize: '14px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
    display: 'block',
  },
  stepDesc: {
    fontSize: '13px',
    color: '#5C7A9A',
    margin: '2px 0 0 0',
    lineHeight: '1.4',
  },
  tips: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingTop: '16px',
    borderTop: '1px solid #F1F1F4',
  },
  tip: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#5C7A9A',
  },
};

export default PhotoGuide;