// screens/OrderTracking.jsx
import React, { useState, useEffect } from 'react';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  CheckCircle,
  Clock,
  Circle,
  ArrowLeft,
  Calendar,
  AlertCircle,
  TrendingUp,
  ShoppingBag,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {
  const navigate = useNavigate();

  const [order] = useState({
    id: 101,
    designName: 'Kaba & Slit',
    customerName: 'Akosua Mensah',
    orderDate: 'Jul 20, 2026',
    estimatedCompletion: 'Jul 28, 2026',
  });

  const [steps, setSteps] = useState([
    { id: 1, label: 'Order Received', status: 'completed', description: 'Order placed successfully' },
    { id: 2, label: 'Measurements Confirmed', status: 'completed', description: 'Measurements verified' },
    { id: 3, label: 'Cutting', status: 'completed', description: 'Fabric cut and prepared' },
    { id: 4, label: 'Sewing', status: 'current', description: 'In progress right now' },
    { id: 5, label: 'Finishing', status: 'pending', description: 'Final touches pending' },
    { id: 6, label: 'Ready for Pickup', status: 'pending', description: 'Waiting for completion' },
  ]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedCount = steps.filter(s => s.status === 'completed').length;
    const currentCount = steps.filter(s => s.status === 'current').length;
    const totalSteps = steps.length;
    const calculatedProgress = ((completedCount + (currentCount * 0.5)) / totalSteps) * 100;
    setProgress(calculatedProgress);
  }, [steps]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#22C55E';
      case 'current':
        return '#1A6FD4';
      default:
        return '#DCE4EE';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'In Progress';
      default:
        return 'Pending';
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/tracking')} style={styles.backButton}>
          <ArrowLeft size={18} /> Back to Orders
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Order #{order.id}</span>
          <h1 style={styles.pageTitle}>Order Tracking</h1>
          <p style={styles.pageSubtitle}>{order.designName}</p>
        </div>

        {/* Order Info Card */}
        <div style={styles.orderInfoCard}>
          <div style={styles.orderInfoRow}>
            <div style={styles.orderInfoItem}>
              <span style={styles.orderInfoLabel}>Order Date</span>
              <span style={styles.orderInfoValue}>{order.orderDate}</span>
            </div>
            <div style={styles.orderInfoDivider} />
            <div style={styles.orderInfoItem}>
              <span style={styles.orderInfoLabel}>Est. Completion</span>
              <span style={styles.orderInfoValue}>{order.estimatedCompletion}</span>
            </div>
            <div style={styles.orderInfoDivider} />
            <div style={styles.orderInfoItem}>
              <span style={styles.orderInfoLabel}>Status</span>
              <span style={styles.orderInfoStatus}>In Progress</span>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div style={styles.progressSection}>
          <div style={styles.progressHeader}>
            <span style={styles.progressLabel}>Order Progress</span>
            <span style={styles.progressPercentage}>{Math.round(progress)}%</span>
          </div>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${progress}%`}} />
          </div>
        </div>

        {/* Steps Tracker */}
        <div style={styles.tracker}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                ...styles.step,
                ...(step.status === 'completed' ? styles.stepCompleted : {}),
                ...(step.status === 'current' ? styles.stepCurrent : {}),
              }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    ...styles.stepLine,
                    ...(step.status === 'completed' || step.status === 'current'
                      ? styles.stepLineActive
                      : {}),
                  }}
                />
              )}

              {/* Dot */}
              <div style={styles.stepDotWrapper}>
                <div
                  style={{
                    ...styles.stepDot,
                    backgroundColor: getStatusColor(step.status),
                    ...(step.status === 'current' ? styles.stepDotCurrent : {}),
                  }}
                >
                  {step.status === 'completed' && (
                    <CheckCircle size={14} color="#FFFFFF" />
                  )}
                  {step.status === 'current' && (
                    <div style={styles.stepDotPulse} />
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={styles.stepContent}>
                <div style={styles.stepLabel}>{step.label}</div>
                <div style={styles.stepSub}>{step.description}</div>
                <span
                  style={{
                    ...styles.stepBadge,
                    ...(step.status === 'completed' ? styles.stepBadgeCompleted : {}),
                    ...(step.status === 'current' ? styles.stepBadgeCurrent : {}),
                    ...(step.status === 'pending' ? styles.stepBadgePending : {}),
                  }}
                >
                  {getStatusLabel(step.status)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p style={styles.footerNote}>
          No more calling every day — this updates automatically.
        </p>
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button
          onClick={() => navigate('/home')}
          style={styles.navButton}
          aria-label="Home"
        >
          <span style={styles.navIconWrap}>
            <Home size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/measurements')}
          style={styles.navButton}
          aria-label="Measure"
        >
          <span style={styles.navIconWrap}>
            <Ruler size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/portfolio')}
          style={styles.navButton}
          aria-label="Portfolio"
        >
          <span style={styles.navIconWrap}>
            <Grid3x3 size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tracking')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Package size={20} color="#FFFFFF" />
          </span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          style={styles.navButton}
          aria-label="Profile"
        >
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
    fontSize: '16px',
    color: '#5C7A9A',
    margin: 0,
    fontWeight: '500',
  },
  orderInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '16px 20px',
    border: '1px solid #F1F1F4',
    marginBottom: '20px',
  },
  orderInfoRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  orderInfoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  },
  orderInfoLabel: {
    fontSize: '11px',
    color: '#8E8EA0',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  orderInfoValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  orderInfoStatus: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1A6FD4',
    backgroundColor: '#E8F4FB',
    padding: '2px 12px',
    borderRadius: '50px',
  },
  orderInfoDivider: {
    width: '1px',
    height: '36px',
    backgroundColor: '#EEEEF0',
  },
  progressSection: {
    marginBottom: '24px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  progressLabel: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#5C7A9A',
  },
  progressPercentage: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1A6FD4',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#F1F1F4',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1A6FD4',
    borderRadius: '8px',
    transition: 'width 0.5s ease',
  },
  tracker: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    padding: '0',
  },
  step: {
    position: 'relative',
    display: 'flex',
    gap: '16px',
    paddingBottom: '24px',
    paddingLeft: '0',
  },
  stepLine: {
    position: 'absolute',
    left: '9px',
    top: '26px',
    width: '2px',
    height: 'calc(100% - 4px)',
    backgroundColor: '#DCE4EE',
    transition: 'background-color 0.3s',
  },
  stepLineActive: {
    backgroundColor: '#22C55E',
  },
  stepDotWrapper: {
    position: 'relative',
    zIndex: 2,
    flexShrink: 0,
  },
  stepDot: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    position: 'relative',
  },
  stepDotCurrent: {
    boxShadow: '0 0 0 4px rgba(26,111,212,0.2)',
    animation: 'pulse-dot 2s infinite',
  },
  stepDotPulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
  },
  stepContent: {
    flex: 1,
    paddingTop: '1px',
  },
  stepLabel: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  stepSub: {
    fontSize: '13px',
    color: '#8E8EA0',
    marginTop: '1px',
  },
  stepBadge: {
    display: 'inline-block',
    fontSize: '10px',
    fontWeight: '600',
    padding: '2px 12px',
    borderRadius: '50px',
    marginTop: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  stepBadgeCompleted: {
    backgroundColor: '#DCFCE7',
    color: '#22C55E',
  },
  stepBadgeCurrent: {
    backgroundColor: '#DBEAFE',
    color: '#1A6FD4',
  },
  stepBadgePending: {
    backgroundColor: '#F1F1F4',
    color: '#8E8EA0',
  },
  footerNote: {
    fontSize: '13px',
    color: '#8E8EA0',
    textAlign: 'center',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #F1F1F4',
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

// Add keyframe animation for pulse
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse-dot {
    0% { box-shadow: 0 0 0 0 rgba(26,111,212,0.4); }
    70% { box-shadow: 0 0 0 8px rgba(26,111,212,0); }
    100% { box-shadow: 0 0 0 0 rgba(26,111,212,0); }
  }

  .tracking-back-button:hover {
    color: #1A6FD4;
  }

  @media (max-width: 480px) {
    .tracking-title {
      font-size: 24px !important;
    }
    .tracking-subtitle {
      font-size: 14px !important;
    }
    .tracking-back-button {
      font-size: 13px !important;
    }
    .tracking-order-info-row {
      flex-direction: column !important;
      gap: 8px !important;
    }
    .tracking-order-info-divider {
      display: none !important;
    }
    .tracking-step {
      padding-bottom: 18px !important;
    }
    .tracking-step-label {
      font-size: 14px !important;
    }
  }

  @media (max-width: 360px) {
    .tracking-title {
      font-size: 22px !important;
    }
    .tracking-step {
      padding-bottom: 14px !important;
      gap: 12px !important;
    }
    .tracking-step-label {
      font-size: 13px !important;
    }
    .tracking-step-sub {
      font-size: 12px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default OrderTracking;