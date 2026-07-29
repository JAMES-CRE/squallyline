// screens/TailorDashboard.jsx
import React, { useState } from 'react';
import {
  Home,
  Calendar,
  Package,
  Upload,
  User,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Briefcase,
  ShoppingBag,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TailorDashboard = () => {
  const navigate = useNavigate();

  const [stats] = useState({
    todayAppointments: 2,
    pendingOrders: 2,
    completed: 1,
    monthlyIncome: 3,
  });

  const [todayAppointments] = useState([
    {
      id: 1,
      customerName: 'Akosua Mensah',
      time: '10:00 AM',
      purpose: 'Fitting',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Kwame Boateng',
      time: '1:00 PM',
      purpose: 'Consultation',
      status: 'Confirmed',
    },
  ]);

  const [recentCustomers] = useState([
    'Akosua Mensah',
    'Kwame Boateng',
    'Ama Serwaa',
  ]);

  const getStatusBadge = (status) => {
    const styles = {
      Pending: {
        backgroundColor: '#FEF3C7',
        color: '#F59E0B',
      },
      Confirmed: {
        backgroundColor: '#DCFCE7',
        color: '#22C55E',
      },
      Completed: {
        backgroundColor: '#DBEAFE',
        color: '#3B82F6',
      },
    };
    return styles[status] || styles.Pending;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/')} style={styles.backButton}>
          ← Back to Home
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Tailor Dashboard</span>
          <h1 style={styles.pageTitle}>{getGreeting()}</h1>
          <p style={styles.pageSubtitle}>
            Here's what's happening in your shop today.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={styles.statGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <Calendar size={20} color="#1A6FD4" />
            </div>
            <div>
              <div style={styles.statNumber}>{stats.todayAppointments}</div>
              <div style={styles.statLabel}>Today's Appointments</div>
            </div>
          </div>
          <div style={{...styles.statCard, ...styles.statCardGold}}>
            <div style={{...styles.statIcon, ...styles.statIconGold}}>
              <Clock size={20} color="#F59E0B" />
            </div>
            <div>
              <div style={{...styles.statNumber, ...styles.statNumberGold}}>{stats.pendingOrders}</div>
              <div style={styles.statLabel}>Pending Orders</div>
            </div>
          </div>
          <div style={{...styles.statCard, ...styles.statCardGreen}}>
            <div style={{...styles.statIcon, ...styles.statIconGreen}}>
              <CheckCircle size={20} color="#FFFFFF" />
            </div>
            <div>
              <div style={{...styles.statNumber, ...styles.statNumberWhite}}>{stats.completed}</div>
              <div style={{...styles.statLabel, ...styles.statLabelWhite}}>Completed</div>
            </div>
          </div>
          <div style={{...styles.statCard, ...styles.statCardDark}}>
            <div style={{...styles.statIcon, ...styles.statIconDark}}>
              <TrendingUp size={20} color="#FFFFFF" />
            </div>
            <div>
              <div style={{...styles.statNumber, ...styles.statNumberWhite}}>GHS {stats.monthlyIncome}K</div>
              <div style={{...styles.statLabel, ...styles.statLabelWhite}}>Monthly Income*</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={styles.quickActions}>
          <button 
            onClick={() => navigate('/tailor/appointments')}
            style={styles.quickAction}
          >
            <Calendar size={20} color="#1A6FD4" />
            <span>Appointments</span>
          </button>
          <button 
            onClick={() => navigate('/tailor/orders')}
            style={styles.quickAction}
          >
            <Package size={20} color="#1A6FD4" />
            <span>Orders</span>
          </button>
          <button 
            onClick={() => navigate('/tailor/upload')}
            style={styles.quickAction}
          >
            <Upload size={20} color="#1A6FD4" />
            <span>Upload</span>
          </button>
        </div>

        {/* Today's Appointments */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionLabel}>Today's Appointments</span>
            <button 
              onClick={() => navigate('/tailor/appointments')}
              style={styles.seeAllButton}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>
          {todayAppointments.map((appointment) => {
            const statusStyle = getStatusBadge(appointment.status);
            return (
              <div key={appointment.id} style={styles.card}>
                <div style={styles.appointmentItem}>
                  <div>
                    <div style={styles.appointmentName}>
                      {appointment.customerName}
                    </div>
                    <div style={styles.appointmentDetails}>
                      {appointment.time} · {appointment.purpose}
                    </div>
                  </div>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: statusStyle.backgroundColor,
                      color: statusStyle.color,
                    }}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Customers */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionLabel}>Recent Customers</span>
          </div>
          <div style={styles.card}>
            {recentCustomers.map((customer, index) => (
              <div key={index} style={styles.customerItem}>
                <div style={styles.customerAvatar}>
                  <span style={styles.customerInitial}>{customer.charAt(0)}</span>
                </div>
                <span style={styles.customerName}>{customer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tailor Badge */}
        <div style={styles.tailorBadgeBottom}>
          <Briefcase size={14} color="#1A6FD4" />
          <span>Tailor Portal</span>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button
          onClick={() => navigate('/tailor/dashboard')}
          style={styles.navButton}
          aria-label="Dashboard"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Home size={20} color="#FFFFFF" />
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
          <span style={styles.navIconWrap}>
            <Upload size={20} color="#8E8EA0" />
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
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '20px',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid #F1F1F4',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  statCardGold: {
    backgroundColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  statCardGreen: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  statCardDark: {
    backgroundColor: '#0A0F1E',
    borderColor: '#0A0F1E',
  },
  statIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#E8F4FB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statIconGold: {
    backgroundColor: '#FDE68A',
  },
  statIconGreen: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  statIconDark: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  statNumber: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0A0F1E',
    lineHeight: '1.2',
  },
  statNumberGold: {
    color: '#0A0F1E',
  },
  statNumberWhite: {
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: '11px',
    color: '#5C7A9A',
    fontWeight: '500',
  },
  statLabelWhite: {
    color: 'rgba(255,255,255,0.8)',
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '20px',
  },
  quickAction: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '14px',
    border: '1px solid #F1F1F4',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    background: 'none',
  },
  section: {
    marginBottom: '20px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  seeAllButton: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#1A6FD4',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    fontFamily: 'Inter, sans-serif',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '14px 16px',
    border: '1px solid #F1F1F4',
    marginBottom: '8px',
  },
  appointmentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  appointmentDetails: {
    fontSize: '13px',
    color: '#8E8EA0',
  },
  statusBadge: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 12px',
    borderRadius: '50px',
    whiteSpace: 'nowrap',
  },
  customerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '6px 0',
    borderBottom: '1px solid #F1F1F4',
  },
  customerAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#E8F4FB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customerInitial: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1A6FD4',
  },
  customerName: {
    fontSize: '14px',
    color: '#0A0F1E',
  },
  tailorBadgeBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '8px 16px',
    backgroundColor: '#E8F4FB',
    borderRadius: '50px',
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '12px',
    color: '#1A6FD4',
    fontWeight: '500',
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

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .tailor-dashboard-back-button:hover {
    color: #1A6FD4;
  }

  .tailor-dashboard-quick-action:hover {
    background-color: #F5F9FF;
    border-color: #1A6FD4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }

  .tailor-dashboard-see-all-button:hover {
    color: #1557A8;
  }

  .tailor-dashboard-stat-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }

  @media (max-width: 480px) {
    .tailor-dashboard-title {
      font-size: 24px !important;
    }
    .tailor-dashboard-back-button {
      font-size: 13px !important;
    }
    .tailor-dashboard-stat-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 10px !important;
    }
    .tailor-dashboard-stat-number {
      font-size: 19px !important;
    }
    .tailor-dashboard-quick-actions {
      grid-template-columns: repeat(3, 1fr) !important;
    }
    .tailor-dashboard-quick-action {
      padding: 12px !important;
      font-size: 12px !important;
    }
    .tailor-dashboard-card {
      padding: 12px 14px !important;
    }
    .tailor-dashboard-appointment-name {
      font-size: 13px !important;
    }
    .tailor-dashboard-appointment-details {
      font-size: 12px !important;
    }
  }

  @media (max-width: 360px) {
    .tailor-dashboard-title {
      font-size: 22px !important;
    }
    .tailor-dashboard-stat-grid {
      grid-template-columns: 1fr 1fr !important;
    }
    .tailor-dashboard-stat-card {
      padding: 12px !important;
    }
    .tailor-dashboard-stat-number {
      font-size: 17px !important;
    }
    .tailor-dashboard-quick-actions {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .tailor-dashboard-appointment-item {
      flex-wrap: wrap !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TailorDashboard;