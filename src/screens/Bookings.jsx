// screens/Booking.jsx
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  ArrowLeft,
  CalendarDays,
  Users,
  Scissors,
  Truck,
  AlertCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('Jul 24');
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState('');

  const dates = ['Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26'];
  
  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: false },
  ];

  const purposes = [
    { value: 'Consultation', icon: Users, label: 'Consultation' },
    { value: 'Fitting', icon: Scissors, label: 'Fitting' },
    { value: 'Delivery', icon: Truck, label: 'Delivery' },
    { value: 'Alteration', icon: Scissors, label: 'Alteration' },
  ];

  const isFormComplete = selectedDate && selectedTime && selectedPurpose;

  const handleConfirmBooking = () => {
    if (!isFormComplete) {
      setError('Please fill in all fields before confirming.');
      return;
    }

    setError('');
    setIsConfirmed(true);

    setTimeout(() => {
      setIsConfirmed(false);
      setSelectedTime(null);
      setSelectedPurpose('');
    }, 3000);
  };

  const getPurposeIcon = (value) => {
    const purpose = purposes.find(p => p.value === value);
    return purpose ? purpose.icon : Users;
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/home')} style={styles.backButton}>
          <ArrowLeft size={18} /> Back
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Appointment</span>
          <h1 style={styles.pageTitle}>Book a Visit</h1>
          <p style={styles.pageSubtitle}>
            Please reserve a slot that works for you.
          </p>
        </div>

        {/* Success Message */}
        {isConfirmed && (
          <div style={styles.successBanner}>
            <CheckCircle size={20} color="#22C55E" />
            <span>Appointment confirmed successfully!</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={styles.errorBanner}>
            <AlertCircle size={18} color="#991B1B" />
            <span>{error}</span>
          </div>
        )}

        {/* Select Date */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Calendar size={16} color="#5C7A9A" style={styles.labelIcon} />
            Select Date
          </label>
          <div style={styles.chipRow}>
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                style={{
                  ...styles.chip,
                  ...(selectedDate === date ? styles.chipActive : {}),
                }}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Clock size={16} color="#5C7A9A" style={styles.labelIcon} />
            Select Time
          </label>
          <div style={styles.slotGrid}>
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => {
                  if (slot.available) {
                    setSelectedTime(slot.time);
                    setError('');
                  }
                }}
                disabled={!slot.available}
                style={{
                  ...styles.slot,
                  ...(selectedTime === slot.time ? styles.slotActive : {}),
                  ...(!slot.available ? styles.slotDisabled : {}),
                }}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {/* Select Purpose */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <Users size={16} color="#5C7A9A" style={styles.labelIcon} />
            Purpose
          </label>
          <div style={styles.purposeGrid}>
            {purposes.map((purpose) => {
              const Icon = purpose.icon;
              const isSelected = selectedPurpose === purpose.value;
              return (
                <button
                  key={purpose.value}
                  onClick={() => {
                    setSelectedPurpose(purpose.value);
                    setError('');
                  }}
                  style={{
                    ...styles.purposeBtn,
                    ...(isSelected ? styles.purposeBtnActive : {}),
                  }}
                >
                  <Icon size={18} color={isSelected ? '#1A6FD4' : '#8E8EA0'} />
                  <span>{purpose.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirmBooking}
          style={{
            ...styles.confirmButton,
            ...(!isFormComplete ? styles.confirmButtonDisabled : {}),
          }}
        >
          {isFormComplete ? (
            <>
              <CheckCircle size={18} /> Request Appointment
            </>
          ) : (
            'Complete all fields'
          )}
        </button>

        {/* Booking Summary */}
        {isFormComplete && !isConfirmed && (
          <div style={styles.summary}>
            <h4 style={styles.summaryTitle}>Booking Summary</h4>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Date:</span>
              <span style={styles.summaryValue}>{selectedDate}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Time:</span>
              <span style={styles.summaryValue}>{selectedTime}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Purpose:</span>
              <span style={styles.summaryValue}>{selectedPurpose}</span>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button onClick={() => navigate('/home')} style={styles.navButton} aria-label="Home">
          <span style={styles.navIconWrap}>
            <Home size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/measurements')} style={styles.navButton} aria-label="Measure">
          <span style={styles.navIconWrap}>
            <Ruler size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/portfolio')} style={styles.navButton} aria-label="Browse">
          <span style={styles.navIconWrap}>
            <Grid3x3 size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/tracking')} style={styles.navButton} aria-label="Orders">
          <span style={styles.navIconWrap}>
            <Package size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/profile')} style={styles.navButton} aria-label="Profile">
          <span style={styles.navIconWrap}>
            <User size={20} color="#8E8EA0" />
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
    marginBottom: '24px',
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
    color: '#166534',
    padding: '12px 16px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #BBF7D0',
  },
  errorBanner: {
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
    padding: '12px 16px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    border: '1px solid #FECACA',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
    marginBottom: '8px',
  },
  labelIcon: {
    opacity: 0.7,
  },
  chipRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  chip: {
    padding: '8px 18px',
    borderRadius: '50px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#5C7A9A',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
  },
  chipActive: {
    backgroundColor: '#0A0F1E',
    borderColor: '#0A0F1E',
    color: '#FFFFFF',
  },
  slotGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
  },
  slot: {
    padding: '10px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#0A0F1E',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
  },
  slotActive: {
    backgroundColor: '#0A0F1E',
    borderColor: '#0A0F1E',
    color: '#FFFFFF',
  },
  slotDisabled: {
    backgroundColor: '#F1F1F4',
    color: '#C5C5D0',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
  purposeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
  purposeBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#5C7A9A',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
  },
  purposeBtnActive: {
    borderColor: '#1A6FD4',
    backgroundColor: '#E8F4FB',
    color: '#1A6FD4',
  },
  confirmButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
  },
  confirmButtonDisabled: {
    backgroundColor: '#E5E5EA',
    color: '#8E8EA0',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  summary: {
    marginTop: '20px',
    padding: '16px 20px',
    borderRadius: '12px',
    backgroundColor: '#F8F8FA',
    border: '1px solid #F1F1F4',
  },
  summaryTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#8E8EA0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0 0 10px 0',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 0',
    fontSize: '14px',
  },
  summaryLabel: {
    color: '#5C7A9A',
  },
  summaryValue: {
    color: '#0A0F1E',
    fontWeight: '600',
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
};

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .booking-back-button:hover {
    color: #1A6FD4;
  }

  .booking-chip:hover:not(.booking-chip-active) {
    border-color: #1A6FD4;
    color: #0A0F1E;
  }

  .booking-slot:hover:not(.booking-slot-active):not(.booking-slot-disabled) {
    border-color: #1A6FD4;
    background-color: #F5F9FF;
  }

  .booking-purpose-btn:hover:not(.booking-purpose-btn-active) {
    border-color: #1A6FD4;
    background-color: #F5F9FF;
  }

  .booking-confirm-button:hover:not(:disabled) {
    background-color: #1557A8;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26,111,212,0.3);
  }

  .booking-confirm-button:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .booking-title {
      font-size: 24px !important;
    }
    .booking-subtitle {
      font-size: 13px !important;
    }
    .booking-back-button {
      font-size: 13px !important;
    }
    .booking-slot-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .booking-purpose-grid {
      grid-template-columns: 1fr !important;
    }
    .booking-confirm-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
    .booking-summary {
      padding: 12px 16px !important;
    }
  }

  @media (max-width: 360px) {
    .booking-title {
      font-size: 22px !important;
    }
    .booking-slot-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 6px !important;
    }
    .booking-slot {
      font-size: 12px !important;
      padding: 8px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Booking;