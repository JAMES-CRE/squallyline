// // screens/TailorAppointments.jsx
// import React, { useState } from 'react';
// import {
//   Home,
//   Calendar,
//   Package,
//   Upload,
//   User,
//   CheckCircle,
//   XCircle,
//   Clock,
//   ChevronRight,
//   AlertCircle,
//   Filter,
//   Search,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const TailorAppointments = () => {
//   const navigate = useNavigate();

//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       customerName: 'Akosua Mensah',
//       date: 'Jul 22',
//       time: '10:00 AM',
//       purpose: 'Fitting',
//       status: 'Pending',
//     },
//     {
//       id: 2,
//       customerName: 'Kwame Boateng',
//       date: 'Jul 22',
//       time: '1:00 PM',
//       purpose: 'Consultation',
//       status: 'Confirmed',
//     },
//     {
//       id: 3,
//       customerName: 'Ama Serwaa',
//       date: 'Jul 24',
//       time: '11:00 AM',
//       purpose: 'Delivery',
//       status: 'Confirmed',
//     },
//     {
//       id: 4,
//       customerName: 'Yaw Adjei',
//       date: 'Jul 25',
//       time: '2:30 PM',
//       purpose: 'Fitting',
//       status: 'Pending',
//     },
//   ]);

//   const [filter, setFilter] = useState('All');
//   const filterOptions = ['All', 'Pending', 'Confirmed', 'Rejected'];

//   const handleAccept = (id) => {
//     setAppointments((prev) =>
//       prev.map((appt) =>
//         appt.id === id ? { ...appt, status: 'Confirmed' } : appt
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setAppointments((prev) =>
//       prev.map((appt) =>
//         appt.id === id ? { ...appt, status: 'Rejected' } : appt
//       )
//     );
//   };

//   const getStatusBadge = (status) => {
//     const styles = {
//       Pending: {
//         backgroundColor: '#FEF3C7',
//         color: '#F59E0B',
//         label: 'Pending',
//         icon: Clock,
//       },
//       Confirmed: {
//         backgroundColor: '#DCFCE7',
//         color: '#22C55E',
//         label: 'Confirmed',
//         icon: CheckCircle,
//       },
//       Rejected: {
//         backgroundColor: '#FEE2E2',
//         color: '#EF4444',
//         label: 'Rejected',
//         icon: XCircle,
//       },
//     };
//     return styles[status] || styles.Pending;
//   };

//   const filteredAppointments = appointments.filter(
//     (appt) => filter === 'All' || appt.status === filter
//   );

//   const pendingCount = appointments.filter((a) => a.status === 'Pending').length;

//   return (
//     <div style={styles.container}>
//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={() => navigate('/tailor/dashboard')} style={styles.backButton}>
//           ← Back to Dashboard
//         </button>

//         {/* Page Header */}
//         <div style={styles.pageHeader}>
//           <span style={styles.eyebrow}>Manage</span>
//           <h1 style={styles.pageTitle}>Appointments</h1>
//           <p style={styles.pageSubtitle}>
//             Approve or decline incoming requests.
//           </p>
//         </div>

//         {/* Stats Row */}
//         <div style={styles.statsRow}>
//           <div style={styles.statCard}>
//             <span style={styles.statNumber}>{appointments.length}</span>
//             <span style={styles.statLabel}>Total</span>
//           </div>
//           <div style={{...styles.statCard, ...styles.statCardPending}}>
//             <span style={styles.statNumber}>{pendingCount}</span>
//             <span style={styles.statLabel}>Pending</span>
//           </div>
//           <div style={{...styles.statCard, ...styles.statCardConfirmed}}>
//             <span style={styles.statNumber}>
//               {appointments.filter(a => a.status === 'Confirmed').length}
//             </span>
//             <span style={styles.statLabel}>Confirmed</span>
//           </div>
//         </div>

//         {/* Pending Banner */}
//         {pendingCount > 0 && (
//           <div style={styles.pendingBanner}>
//             <AlertCircle size={16} color="#F59E0B" />
//             <span>{pendingCount} pending appointment{pendingCount > 1 ? 's' : ''} awaiting your review</span>
//           </div>
//         )}

//         {/* Filter Chips */}
//         <div style={styles.filterRow}>
//           {filterOptions.map((option) => (
//             <button
//               key={option}
//               onClick={() => setFilter(option)}
//               style={{
//                 ...styles.filterChip,
//                 ...(filter === option ? styles.filterChipActive : {}),
//               }}
//             >
//               {option}
//             </button>
//           ))}
//         </div>

//         {/* Appointments List */}
//         {filteredAppointments.map((appointment) => {
//           const statusStyle = getStatusBadge(appointment.status);
//           const isPending = appointment.status === 'Pending';
//           const StatusIcon = statusStyle.icon;

//           return (
//             <div key={appointment.id} style={styles.card}>
//               <div style={styles.appointmentHeader}>
//                 <div style={styles.appointmentLeft}>
//                   <div style={styles.customerAvatar}>
//                     <span style={styles.avatarLetter}>
//                       {appointment.customerName.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <div style={styles.customerName}>
//                       {appointment.customerName}
//                     </div>
//                     <div style={styles.appointmentDetails}>
//                       <span>{appointment.date} · {appointment.time}</span>
//                       <span style={styles.detailDot}>·</span>
//                       <span>{appointment.purpose}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <span
//                   style={{
//                     ...styles.statusBadge,
//                     backgroundColor: statusStyle.backgroundColor,
//                     color: statusStyle.color,
//                   }}
//                 >
//                   <StatusIcon size={12} style={styles.statusIconSmall} />
//                   {statusStyle.label}
//                 </span>
//               </div>

//               {isPending && (
//                 <div style={styles.actionRow}>
//                   <button
//                     onClick={() => handleAccept(appointment.id)}
//                     style={styles.acceptButton}
//                   >
//                     <CheckCircle size={16} /> Accept
//                   </button>
//                   <button
//                     onClick={() => handleReject(appointment.id)}
//                     style={styles.rejectButton}
//                   >
//                     <XCircle size={16} /> Reject
//                   </button>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         {/* Empty State */}
//         {filteredAppointments.length === 0 && (
//           <div style={styles.emptyState}>
//             <Calendar size={48} color="#DCE4EE" />
//             <h3 style={styles.emptyTitle}>No appointments</h3>
//             <p style={styles.emptyText}>
//               {filter === 'All' 
//                 ? 'All appointments will appear here once customers book.'
//                 : `No ${filter.toLowerCase()} appointments found.`}
//             </p>
//           </div>
//         )}
//       </main>

//       {/* Bottom Navigation */}
//       <nav style={styles.bottomNav}>
//         <button
//           onClick={() => navigate('/tailor/dashboard')}
//           style={styles.navButton}
//           aria-label="Dashboard"
//         >
//           <span style={styles.navIconWrap}>
//             <Home size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/tailor/appointments')}
//           style={styles.navButton}
//           aria-label="Appointments"
//         >
//           <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
//             <Calendar size={20} color="#FFFFFF" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/tailor/orders')}
//           style={styles.navButton}
//           aria-label="Orders"
//         >
//           <span style={styles.navIconWrap}>
//             <Package size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/tailor/upload')}
//           style={styles.navButton}
//           aria-label="Upload"
//         >
//           <span style={styles.navIconWrap}>
//             <Upload size={20} color="#8E8EA0" />
//           </span>
//         </button>
//       </nav>
//     </div>
//   );
// };

// const styles = {
//  container: {
//     minHeight: '100vh',
//     backgroundColor: '#F8F8FA',
//     fontFamily: 'Inter, -apple-system, sans-serif',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '24px 32px',
//     paddingBottom: '100px',
//   },
//   main: {
//     width: '100%',
//     maxWidth: '1000px',
//     margin: '0 auto',
//   },

//   backButton: {
//     background: 'none',
//     border: 'none',
//     color: '#5C7A9A',
//     fontSize: '14px',
//     cursor: 'pointer',
//     padding: '0',
//     marginBottom: '20px',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'color 0.2s',
//   },
//   pageHeader: {
//     marginBottom: '20px',
//   },
//   eyebrow: {
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#1A6FD4',
//     textTransform: 'uppercase',
//     letterSpacing: '0.08em',
//     backgroundColor: '#E8F4FB',
//     padding: '2px 12px',
//     borderRadius: '999px',
//     display: 'inline-block',
//   },
//   pageTitle: {
//     fontSize: '28px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     marginTop: '8px',
//     marginBottom: '4px',
//   },
//   pageSubtitle: {
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: 0,
//     lineHeight: 1.5,
//   },
//   statsRow: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '10px',
//     marginBottom: '16px',
//   },
//   statCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '10px',
//     padding: '12px',
//     textAlign: 'center',
//     border: '1px solid #F1F1F4',
//   },
//   statCardPending: {
//     backgroundColor: '#FEF3C7',
//     borderColor: '#FDE68A',
//   },
//   statCardConfirmed: {
//     backgroundColor: '#DCFCE7',
//     borderColor: '#BBF7D0',
//   },
//   statNumber: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     display: 'block',
//   },
//   statLabel: {
//     fontSize: '11px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//   },
//   pendingBanner: {
//     backgroundColor: '#FEF3C7',
//     borderRadius: '10px',
//     padding: '10px 14px',
//     marginBottom: '16px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     fontSize: '13px',
//     color: '#92400E',
//     fontWeight: '500',
//     border: '1px solid #FDE68A',
//   },
//   filterRow: {
//     display: 'flex',
//     gap: '6px',
//     marginBottom: '16px',
//     flexWrap: 'wrap',
//   },
//   filterChip: {
//     padding: '6px 16px',
//     borderRadius: '50px',
//     border: '1.5px solid #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     color: '#5C7A9A',
//     fontSize: '13px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   filterChipActive: {
//     backgroundColor: '#0A0F1E',
//     borderColor: '#0A0F1E',
//     color: '#FFFFFF',
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '16px',
//     border: '1px solid #F1F1F4',
//     marginBottom: '10px',
//   },
//   appointmentHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   appointmentLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     flex: 1,
//   },
//   customerAvatar: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#E8F4FB',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0,
//   },
//   avatarLetter: {
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#1A6FD4',
//   },
//   customerName: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   appointmentDetails: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//     flexWrap: 'wrap',
//   },
//   detailDot: {
//     color: '#DCE4EE',
//   },
//   statusBadge: {
//     fontSize: '11px',
//     fontWeight: '600',
//     padding: '3px 12px',
//     borderRadius: '50px',
//     whiteSpace: 'nowrap',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//   },
//   statusIconSmall: {
//     width: '12px',
//     height: '12px',
//   },
//   actionRow: {
//     display: 'flex',
//     gap: '8px',
//     marginTop: '12px',
//     paddingTop: '12px',
//     borderTop: '1px solid #F1F1F4',
//   },
//   acceptButton: {
//     flex: 1,
//     padding: '8px',
//     borderRadius: '8px',
//     border: 'none',
//     backgroundColor: '#22C55E',
//     color: '#FFFFFF',
//     fontSize: '13px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   rejectButton: {
//     flex: 1,
//     padding: '8px',
//     borderRadius: '8px',
//     border: 'none',
//     backgroundColor: '#EF4444',
//     color: '#FFFFFF',
//     fontSize: '13px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   emptyState: {
//     textAlign: 'center',
//     padding: '40px 20px',
//   },
//   emptyTitle: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//     marginTop: '12px',
//     marginBottom: '4px',
//   },
//   emptyText: {
//     fontSize: '14px',
//     color: '#8E8EA0',
//     margin: 0,
//   },
//   bottomNav: {
//     position: 'fixed',
//     bottom: '20px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 'calc(100% - 48px)',
//     maxWidth: '342px',
//     backgroundColor: '#FFFFFF',
//     borderRadius: '50px',
//     border: '1px solid #EEEEF0',
//     boxShadow: '0 4px 20px rgba(10,15,30,0.08)',
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     padding: '6px',
//   },
//   navButton: {
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//     padding: '2px',
//   },
//   navIconWrap: {
//     width: '44px',
//     height: '44px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//   },
//   navIconWrapActive: {
//     backgroundColor: '#0A0F1E',
//   },
// };

// // Add hover styles
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .tailor-appointments-back-button:hover {
//     color: #1A6FD4;
//   }

//   .tailor-appointments-filter-chip:hover:not(.tailor-appointments-filter-chip-active) {
//     border-color: #1A6FD4;
//     color: #0A0F1E;
//   }

//   .tailor-appointments-accept-button:hover {
//     background-color: #16A34A;
//   }

//   .tailor-appointments-reject-button:hover {
//     background-color: #DC2626;
//   }

//   @media (max-width: 480px) {
//     .tailor-appointments-title {
//       font-size: 24px !important;
//     }
//     .tailor-appointments-back-button {
//       font-size: 13px !important;
//     }
//     .tailor-appointments-stats-row {
//       grid-template-columns: repeat(3, 1fr) !important;
//     }
//     .tailor-appointments-stat-number {
//       font-size: 18px !important;
//     }
//     .tailor-appointments-card {
//       padding: 14px !important;
//     }
//     .tailor-appointments-customer-name {
//       font-size: 13px !important;
//     }
//     .tailor-appointments-appointment-details {
//       font-size: 12px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .tailor-appointments-title {
//       font-size: 22px !important;
//     }
//     .tailor-appointments-stats-row {
//       grid-template-columns: 1fr 1fr 1fr !important;
//     }
//     .tailor-appointments-appointment-header {
//       flex-wrap: wrap !important;
//     }
//     .tailor-appointments-status-badge {
//       margin-top: 4px !important;
//     }
//     .tailor-appointments-action-row {
//       flex-direction: column !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default TailorAppointments;

// screens/TailorAppointments.jsx
import React, { useState } from 'react';
import {
  Home,
  Calendar,
  Package,
  Upload,
  User,
  CheckCircle,
  XCircle,
  Clock,
  ChevronRight,
  AlertCircle,
  Filter,
  Search,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';

const TailorAppointments = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      customerName: 'Akosua Mensah',
      date: 'Jul 22',
      time: '10:00 AM',
      purpose: 'Fitting',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Kwame Boateng',
      date: 'Jul 22',
      time: '1:00 PM',
      purpose: 'Consultation',
      status: 'Confirmed',
    },
    {
      id: 3,
      customerName: 'Ama Serwaa',
      date: 'Jul 24',
      time: '11:00 AM',
      purpose: 'Delivery',
      status: 'Confirmed',
    },
    {
      id: 4,
      customerName: 'Yaw Adjei',
      date: 'Jul 25',
      time: '2:30 PM',
      purpose: 'Fitting',
      status: 'Pending',
    },
  ]);

  const [filter, setFilter] = useState('All');
  const filterOptions = ['All', 'Pending', 'Confirmed', 'Rejected'];

  const handleAccept = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: 'Confirmed' } : appt
      )
    );
  };

  const handleReject = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: 'Rejected' } : appt
      )
    );
  };

  const getStatusBadge = (status) => {
    const styles = {
      Pending: {
        backgroundColor: colors.warningBg,
        color: colors.warning,
        label: 'Pending',
        icon: Clock,
      },
      Confirmed: {
        backgroundColor: colors.successBg,
        color: colors.success,
        label: 'Confirmed',
        icon: CheckCircle,
      },
      Rejected: {
        backgroundColor: colors.errorBg,
        color: colors.error,
        label: 'Rejected',
        icon: XCircle,
      },
    };
    return styles[status] || styles.Pending;
  };

  const filteredAppointments = appointments.filter(
    (appt) => filter === 'All' || appt.status === filter
  );

  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/tailor/dashboard')}
          style={{
            ...styles.backButton,
            color: colors.secondaryText,
          }}
        >
          ← Back to Dashboard
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={{
            ...styles.eyebrow,
            backgroundColor: colors.primaryLight,
            color: colors.primary,
          }}>
            Manage
          </span>
          <h1 style={{
            ...styles.pageTitle,
            color: colors.heading,
          }}>
            Appointments
          </h1>
          <p style={{
            ...styles.pageSubtitle,
            color: colors.secondaryText,
          }}>
            Approve or decline incoming requests.
          </p>
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          <div style={{
            ...styles.statCard,
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          }}>
            <span style={{
              ...styles.statNumber,
              color: colors.heading,
            }}>
              {appointments.length}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.secondaryText,
            }}>
              Total
            </span>
          </div>
          <div style={{
            ...styles.statCard,
            ...styles.statCardPending,
            backgroundColor: colors.warningBg,
            borderColor: colors.warningBg,
          }}>
            <span style={{
              ...styles.statNumber,
              color: colors.warning,
            }}>
              {pendingCount}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.warning,
            }}>
              Pending
            </span>
          </div>
          <div style={{
            ...styles.statCard,
            ...styles.statCardConfirmed,
            backgroundColor: colors.successBg,
            borderColor: colors.successBg,
          }}>
            <span style={{
              ...styles.statNumber,
              color: colors.success,
            }}>
              {appointments.filter(a => a.status === 'Confirmed').length}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.success,
            }}>
              Confirmed
            </span>
          </div>
        </div>

        {/* Pending Banner */}
        {pendingCount > 0 && (
          <div style={{
            ...styles.pendingBanner,
            backgroundColor: colors.warningBg,
            color: colors.warning,
            borderColor: colors.warningBg,
          }}>
            <AlertCircle size={16} color={colors.warning} />
            <span>{pendingCount} pending appointment{pendingCount > 1 ? 's' : ''} awaiting your review</span>
          </div>
        )}

        {/* Filter Chips */}
        <div style={styles.filterRow}>
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              style={{
                ...styles.filterChip,
                backgroundColor: filter === option ? colors.primary : colors.cardBg,
                borderColor: filter === option ? colors.primary : colors.border,
                color: filter === option ? '#FFFFFF' : colors.secondaryText,
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        {filteredAppointments.map((appointment) => {
          const statusStyle = getStatusBadge(appointment.status);
          const isPending = appointment.status === 'Pending';
          const StatusIcon = statusStyle.icon;

          return (
            <div key={appointment.id} style={{
              ...styles.card,
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
            }}>
              <div style={styles.appointmentHeader}>
                <div style={styles.appointmentLeft}>
                  <div style={{
                    ...styles.customerAvatar,
                    backgroundColor: colors.primaryLight,
                  }}>
                    <span style={{
                      ...styles.avatarLetter,
                      color: colors.primary,
                    }}>
                      {appointment.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div style={{
                      ...styles.customerName,
                      color: colors.heading,
                    }}>
                      {appointment.customerName}
                    </div>
                    <div style={{
                      ...styles.appointmentDetails,
                      color: colors.secondaryText,
                    }}>
                      <span>{appointment.date} · {appointment.time}</span>
                      <span style={{
                        ...styles.detailDot,
                        color: colors.border,
                      }}>·</span>
                      <span>{appointment.purpose}</span>
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    ...styles.statusBadge,
                    backgroundColor: statusStyle.backgroundColor,
                    color: statusStyle.color,
                  }}
                >
                  <StatusIcon size={12} style={styles.statusIconSmall} />
                  {statusStyle.label}
                </span>
              </div>

              {isPending && (
                <div style={{
                  ...styles.actionRow,
                  borderTopColor: colors.border,
                }}>
                  <button
                    onClick={() => handleAccept(appointment.id)}
                    style={{
                      ...styles.acceptButton,
                      backgroundColor: colors.success,
                    }}
                  >
                    <CheckCircle size={16} /> Accept
                  </button>
                  <button
                    onClick={() => handleReject(appointment.id)}
                    style={{
                      ...styles.rejectButton,
                      backgroundColor: colors.error,
                    }}
                  >
                    <XCircle size={16} /> Reject
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {/* Empty State */}
        {filteredAppointments.length === 0 && (
          <div style={styles.emptyState}>
            <Calendar size={48} color={colors.border} />
            <h3 style={{
              ...styles.emptyTitle,
              color: colors.heading,
            }}>
              No appointments
            </h3>
            <p style={{
              ...styles.emptyText,
              color: colors.secondaryText,
            }}>
              {filter === 'All'
                ? 'All appointments will appear here once customers book.'
                : `No ${filter.toLowerCase()} appointments found.`}
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      {/* <nav style={styles.bottomNav}>
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
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Calendar size={20} color="#FFFFFF" />
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
      </nav> */}

      // screens/TailorAppointments.jsx - Bottom Nav Section

      {/* Bottom Navigation */}
      <nav style={{
        ...styles.bottomNav,
        backgroundColor: colors.navBg,
        borderColor: 'rgba(255,255,255,0.06)',
      }}>
        <button
          onClick={() => navigate('/tailor/dashboard')}
          style={styles.navButton}
          aria-label="Dashboard"
        >
          <span style={styles.navIconWrap}>
            <Home size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/appointments')}
          style={styles.navButton}
          aria-label="Appointments"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Calendar size={20} color="#FFFFFF" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/orders')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={styles.navIconWrap}>
            <Package size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/upload')}
          style={styles.navButton}
          aria-label="Upload"
        >
          <span style={styles.navIconWrap}>
            <Upload size={20} color={colors.navText} />
          </span>
        </button>
      </nav>
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
    maxWidth: '1000px',
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
    transition: 'color 0.2s',
  },
  pageHeader: {
    marginBottom: '20px',
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
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '16px',
  },
  statCard: {
    borderRadius: '10px',
    padding: '12px',
    textAlign: 'center',
    border: '1px solid',
  },
  statNumber: {
    fontSize: '20px',
    fontWeight: '700',
    display: 'block',
  },
  statLabel: {
    fontSize: '11px',
    fontWeight: '500',
  },
  pendingBanner: {
    borderRadius: '10px',
    padding: '10px 14px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '500',
    border: '1px solid',
  },
  filterRow: {
    display: 'flex',
    gap: '6px',
    marginBottom: '16px',
    flexWrap: 'wrap',
  },
  filterChip: {
    padding: '6px 16px',
    borderRadius: '50px',
    border: '1.5px solid',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  card: {
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid',
    marginBottom: '10px',
  },
  appointmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  customerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarLetter: {
    fontSize: '16px',
    fontWeight: '600',
  },
  customerName: {
    fontSize: '14px',
    fontWeight: '600',
  },
  appointmentDetails: {
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flexWrap: 'wrap',
  },
  detailDot: {
    fontSize: '13px',
  },
  statusBadge: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 12px',
    borderRadius: '50px',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  statusIconSmall: {
    width: '12px',
    height: '12px',
  },
  actionRow: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid',
  },
  acceptButton: {
    flex: 1,
    padding: '8px',
    borderRadius: '8px',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  rejectButton: {
    flex: 1,
    padding: '8px',
    borderRadius: '8px',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '12px',
    marginBottom: '4px',
  },
  emptyText: {
    fontSize: '14px',
    margin: 0,
  },
  bottomNav: {
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 48px)',
  maxWidth: '342px',
  borderRadius: '50px',
  border: '1px solid',
  boxShadow: '0 8px 32px rgba(15, 23, 42, 0.3)',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '8px 4px',
  zIndex: 100,
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
  backgroundColor: '#1A56DB',
},
};

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .tailor-appointments-back-button:hover {
    color: #1A56DB !important;
  }

  .tailor-appointments-filter-chip:hover:not(.tailor-appointments-filter-chip-active) {
    border-color: #1A56DB !important;
    color: #0F172A !important;
  }

  .tailor-appointments-accept-button:hover {
    background-color: #047857 !important;
  }

  .tailor-appointments-reject-button:hover {
    background-color: #B91C1C !important;
  }

  @media (max-width: 480px) {
    .tailor-appointments-title {
      font-size: 24px !important;
    }
    .tailor-appointments-back-button {
      font-size: 13px !important;
    }
    .tailor-appointments-stats-row {
      grid-template-columns: repeat(3, 1fr) !important;
    }
    .tailor-appointments-stat-number {
      font-size: 18px !important;
    }
    .tailor-appointments-card {
      padding: 14px !important;
    }
    .tailor-appointments-customer-name {
      font-size: 13px !important;
    }
    .tailor-appointments-appointment-details {
      font-size: 12px !important;
    }
  }

  @media (max-width: 360px) {
    .tailor-appointments-title {
      font-size: 22px !important;
    }
    .tailor-appointments-stats-row {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .tailor-appointments-appointment-header {
      flex-wrap: wrap !important;
    }
    .tailor-appointments-status-badge {
      margin-top: 4px !important;
    }
    .tailor-appointments-action-row {
      flex-direction: column !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TailorAppointments;