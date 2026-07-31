// // screens/TailorOrders.jsx
// import React, { useState } from 'react';
// import {
//   Home,
//   Calendar,
//   Package,
//   Upload,
//   User,
//   ChevronRight,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   TrendingUp,
//   ShoppingBag,
//   Filter,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const TailorOrders = () => {
//   const navigate = useNavigate();

//   const [orders, setOrders] = useState([
//     {
//       id: 101,
//       customerName: 'Akosua Mensah',
//       design: 'Kaba & Slit',
//       price: 'GHS 450',
//       status: 'Sewing',
//       date: 'Jul 20, 2026',
//     },
//     {
//       id: 102,
//       customerName: 'Kwame Boateng',
//       design: 'Agbada Set',
//       price: 'GHS 600',
//       status: 'Received',
//       date: 'Jul 21, 2026',
//     },
//     {
//       id: 103,
//       customerName: 'Ama Serwaa',
//       design: 'Fitted Wedding Gown',
//       price: 'GHS 1,200',
//       status: 'Ready',
//       date: 'Jul 19, 2026',
//     },
//   ]);

//   const [filter, setFilter] = useState('All');
//   const filterOptions = ['All', 'Received', 'Cutting', 'Sewing', 'Finishing', 'Ready'];

//   const statusOptions = [
//     'Received',
//     'Measurements Confirmed',
//     'Cutting',
//     'Sewing',
//     'Finishing',
//     'Ready',
//   ];

//   const handleStatusChange = (orderId, newStatus) => {
//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId ? { ...order, status: newStatus } : order
//       )
//     );
//   };

//   const getStatusBadge = (status) => {
//     const styles = {
//       Received: {
//         backgroundColor: '#FEF3C7',
//         color: '#F59E0B',
//         label: 'Received',
//         icon: Clock,
//       },
//       'Measurements Confirmed': {
//         backgroundColor: '#DBEAFE',
//         color: '#3B82F6',
//         label: 'Confirmed',
//         icon: CheckCircle,
//       },
//       Cutting: {
//         backgroundColor: '#E0E7FF',
//         color: '#6366F1',
//         label: 'Cutting',
//         icon: CheckCircle,
//       },
//       Sewing: {
//         backgroundColor: '#FCE7F3',
//         color: '#EC4899',
//         label: 'Sewing',
//         icon: CheckCircle,
//       },
//       Finishing: {
//         backgroundColor: '#EDE9FE',
//         color: '#8B5CF6',
//         label: 'Finishing',
//         icon: CheckCircle,
//       },
//       Ready: {
//         backgroundColor: '#DCFCE7',
//         color: '#22C55E',
//         label: 'Ready',
//         icon: CheckCircle,
//       },
//     };
//     return styles[status] || styles.Received;
//   };

//   const getStatusStep = (status) => {
//     const steps = [
//       'Received',
//       'Measurements Confirmed',
//       'Cutting',
//       'Sewing',
//       'Finishing',
//       'Ready',
//     ];
//     return steps.indexOf(status) + 1;
//   };

//   const filteredOrders = orders.filter(
//     (order) => filter === 'All' || order.status === filter
//   );

//   const getStatusCount = (status) => {
//     return orders.filter((o) => o.status === status).length;
//   };

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
//           <h1 style={styles.pageTitle}>Orders</h1>
//           <p style={styles.pageSubtitle}>
//             Update production status as work progresses.
//           </p>
//         </div>

//         {/* Stats Row */}
//         <div style={styles.statsRow}>
//           <div style={styles.statCard}>
//             <span style={styles.statNumber}>{orders.length}</span>
//             <span style={styles.statLabel}>Total Orders</span>
//           </div>
//           <div style={{...styles.statCard, ...styles.statCardReceived}}>
//             <span style={styles.statNumber}>{getStatusCount('Received')}</span>
//             <span style={styles.statLabel}>Received</span>
//           </div>
//           <div style={{...styles.statCard, ...styles.statCardReady}}>
//             <span style={styles.statNumber}>{getStatusCount('Ready')}</span>
//             <span style={styles.statLabel}>Ready</span>
//           </div>
//         </div>

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

//         {/* Orders List */}
//         {filteredOrders.map((order) => {
//           const statusStyle = getStatusBadge(order.status);
//           const currentStep = getStatusStep(order.status);
//           const StatusIcon = statusStyle.icon;

//           return (
//             <div key={order.id} style={styles.card}>
//               <div style={styles.orderHeader}>
//                 <div style={styles.orderLeft}>
//                   <div style={styles.orderAvatar}>
//                     <span style={styles.orderInitial}>
//                       {order.customerName.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <div style={styles.customerName}>{order.customerName}</div>
//                     <div style={styles.orderDetails}>
//                       {order.design} · {order.price}
//                     </div>
//                     <div style={styles.orderDate}>{order.date}</div>
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

//               {/* Progress Steps */}
//               <div style={styles.progressContainer}>
//                 <div style={styles.progressBar}>
//                   <div
//                     style={{
//                       ...styles.progressFill,
//                       width: `${(currentStep / statusOptions.length) * 100}%`,
//                     }}
//                   />
//                 </div>
//                 <div style={styles.progressLabels}>
//                   <span style={styles.progressLabel}>
//                     Step {currentStep} of {statusOptions.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Status Update Dropdown */}
//               <div style={styles.updateSection}>
//                 <label style={styles.updateLabel}>Update status</label>
//                 <select
//                   value={order.status}
//                   onChange={(e) =>
//                     handleStatusChange(order.id, e.target.value)
//                   }
//                   style={styles.select}
//                 >
//                   {statusOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           );
//         })}

//         {/* Empty State */}
//         {filteredOrders.length === 0 && (
//           <div style={styles.emptyState}>
//             <Package size={48} color="#DCE4EE" />
//             <h3 style={styles.emptyTitle}>No orders found</h3>
//             <p style={styles.emptyText}>
//               {filter === 'All' 
//                 ? 'Orders will appear here once customers place them.'
//                 : `No ${filter.toLowerCase()} orders found.`}
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
//           <span style={styles.navIconWrap}>
//             <Calendar size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/tailor/orders')}
//           style={styles.navButton}
//           aria-label="Orders"
//         >
//           <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
//             <Package size={20} color="#FFFFFF" />
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
//   container: {
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
//   statCardReceived: {
//     backgroundColor: '#FEF3C7',
//     borderColor: '#FDE68A',
//   },
//   statCardReady: {
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
//   orderHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: '12px',
//   },
//   orderLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     flex: 1,
//   },
//   orderAvatar: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#E8F4FB',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0,
//   },
//   orderInitial: {
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#1A6FD4',
//   },
//   customerName: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   orderDetails: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//     marginTop: '1px',
//   },
//   orderDate: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     marginTop: '1px',
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
//   progressContainer: {
//     marginBottom: '12px',
//   },
//   progressBar: {
//     width: '100%',
//     height: '4px',
//     backgroundColor: '#F1F1F4',
//     borderRadius: '4px',
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#1A6FD4',
//     borderRadius: '4px',
//     transition: 'width 0.3s ease',
//   },
//   progressLabels: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: '4px',
//   },
//   progressLabel: {
//     fontSize: '11px',
//     color: '#8E8EA0',
//     fontWeight: '500',
//   },
//   updateSection: {
//     paddingTop: '12px',
//     borderTop: '1px solid #F1F1F4',
//   },
//   updateLabel: {
//     display: 'block',
//     fontSize: '12px',
//     fontWeight: '500',
//     color: '#8E8EA0',
//     marginBottom: '6px',
//   },
//   select: {
//     width: '100%',
//     padding: '10px 14px',
//     borderRadius: '10px',
//     border: '1.5px solid #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     color: '#0A0F1E',
//     fontSize: '14px',
//     fontFamily: 'Inter, sans-serif',
//     outline: 'none',
//     cursor: 'pointer',
//     appearance: 'none',
//     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238E8EA0' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right 12px center',
//     transition: 'border-color 0.2s',
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
//   .tailor-orders-back-button:hover {
//     color: #1A6FD4;
//   }

//   .tailor-orders-filter-chip:hover:not(.tailor-orders-filter-chip-active) {
//     border-color: #1A6FD4;
//     color: #0A0F1E;
//   }

//   .tailor-orders-select:focus {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   @media (max-width: 480px) {
//     .tailor-orders-title {
//       font-size: 24px !important;
//     }
//     .tailor-orders-back-button {
//       font-size: 13px !important;
//     }
//     .tailor-orders-stats-row {
//       grid-template-columns: repeat(3, 1fr) !important;
//     }
//     .tailor-orders-stat-number {
//       font-size: 18px !important;
//     }
//     .tailor-orders-card {
//       padding: 14px !important;
//     }
//     .tailor-orders-customer-name {
//       font-size: 13px !important;
//     }
//     .tailor-orders-order-details {
//       font-size: 12px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .tailor-orders-title {
//       font-size: 22px !important;
//     }
//     .tailor-orders-stats-row {
//       grid-template-columns: 1fr 1fr 1fr !important;
//     }
//     .tailor-orders-order-header {
//       flex-wrap: wrap !important;
//     }
//     .tailor-orders-status-badge {
//       margin-top: 4px !important;
//     }
//     .tailor-orders-order-left {
//       flex-wrap: wrap !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default TailorOrders;


// screens/TailorOrders.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
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
  ShoppingBag,
  Filter,
} from 'lucide-react';

const TailorOrders = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [orders, setOrders] = useState([
    {
      id: 101,
      customerName: 'Akosua Mensah',
      design: 'Kaba & Slit',
      price: 'GHS 450',
      status: 'Sewing',
      date: 'Jul 20, 2026',
    },
    {
      id: 102,
      customerName: 'Kwame Boateng',
      design: 'Agbada Set',
      price: 'GHS 600',
      status: 'Received',
      date: 'Jul 21, 2026',
    },
    {
      id: 103,
      customerName: 'Ama Serwaa',
      design: 'Fitted Wedding Gown',
      price: 'GHS 1,200',
      status: 'Ready',
      date: 'Jul 19, 2026',
    },
  ]);

  const [filter, setFilter] = useState('All');
  const filterOptions = ['All', 'Received', 'Cutting', 'Sewing', 'Finishing', 'Ready'];

  const statusOptions = [
    'Received',
    'Measurements Confirmed',
    'Cutting',
    'Sewing',
    'Finishing',
    'Ready',
  ];

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusBadge = (status) => {
    const styles = {
      Received: {
        backgroundColor: colors.warningBg,
        color: colors.warning,
        label: 'Received',
        icon: Clock,
      },
      'Measurements Confirmed': {
        backgroundColor: colors.primaryLight,
        color: colors.primary,
        label: 'Confirmed',
        icon: CheckCircle,
      },
      Cutting: {
        backgroundColor: '#E0E7FF',
        color: '#6366F1',
        label: 'Cutting',
        icon: CheckCircle,
      },
      Sewing: {
        backgroundColor: '#FCE7F3',
        color: '#EC4899',
        label: 'Sewing',
        icon: CheckCircle,
      },
      Finishing: {
        backgroundColor: '#EDE9FE',
        color: '#8B5CF6',
        label: 'Finishing',
        icon: CheckCircle,
      },
      Ready: {
        backgroundColor: colors.successBg,
        color: colors.success,
        label: 'Ready',
        icon: CheckCircle,
      },
    };
    return styles[status] || styles.Received;
  };

  const getStatusStep = (status) => {
    const steps = [
      'Received',
      'Measurements Confirmed',
      'Cutting',
      'Sewing',
      'Finishing',
      'Ready',
    ];
    return steps.indexOf(status) + 1;
  };

  const filteredOrders = orders.filter(
    (order) => filter === 'All' || order.status === filter
  );

  const getStatusCount = (status) => {
    return orders.filter((o) => o.status === status).length;
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
            Orders
          </h1>
          <p style={{
            ...styles.pageSubtitle,
            color: colors.secondaryText,
          }}>
            Update production status as work progresses.
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
              {orders.length}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.secondaryText,
            }}>
              Total Orders
            </span>
          </div>
          <div style={{
            ...styles.statCard,
            ...styles.statCardReceived,
            backgroundColor: colors.warningBg,
            borderColor: colors.warningBg,
          }}>
            <span style={{
              ...styles.statNumber,
              color: colors.warning,
            }}>
              {getStatusCount('Received')}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.secondaryText,
            }}>
              Received
            </span>
          </div>
          <div style={{
            ...styles.statCard,
            ...styles.statCardReady,
            backgroundColor: colors.successBg,
            borderColor: colors.successBg,
          }}>
            <span style={{
              ...styles.statNumber,
              color: colors.success,
            }}>
              {getStatusCount('Ready')}
            </span>
            <span style={{
              ...styles.statLabel,
              color: colors.secondaryText,
            }}>
              Ready
            </span>
          </div>
        </div>

        {/* Filter Chips */}
        <div style={styles.filterRow}>
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              style={{
                ...styles.filterChip,
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
                color: colors.secondaryText,
                ...(filter === option ? {
                  ...styles.filterChipActive,
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                  color: '#FFFFFF',
                } : {}),
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.map((order) => {
          const statusStyle = getStatusBadge(order.status);
          const currentStep = getStatusStep(order.status);
          const StatusIcon = statusStyle.icon;

          return (
            <div key={order.id} style={{
              ...styles.card,
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
            }}>
              <div style={styles.orderHeader}>
                <div style={styles.orderLeft}>
                  <div style={{
                    ...styles.orderAvatar,
                    backgroundColor: colors.primaryLight,
                  }}>
                    <span style={{
                      ...styles.orderInitial,
                      color: colors.primary,
                    }}>
                      {order.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div style={{
                      ...styles.customerName,
                      color: colors.heading,
                    }}>
                      {order.customerName}
                    </div>
                    <div style={{
                      ...styles.orderDetails,
                      color: colors.secondaryText,
                    }}>
                      {order.design} · {order.price}
                    </div>
                    <div style={{
                      ...styles.orderDate,
                      color: colors.tertiaryText,
                    }}>
                      {order.date}
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

              {/* Progress Steps */}
              <div style={styles.progressContainer}>
                <div style={{
                  ...styles.progressBar,
                  backgroundColor: colors.progressBg || '#E2E8F0',
                }}>
                  <div
                    style={{
                      ...styles.progressFill,
                      backgroundColor: colors.primary,
                      width: `${(currentStep / statusOptions.length) * 100}%`,
                    }}
                  />
                </div>
                <div style={styles.progressLabels}>
                  <span style={{
                    ...styles.progressLabel,
                    color: colors.secondaryText,
                  }}>
                    Step {currentStep} of {statusOptions.length}
                  </span>
                </div>
              </div>

              {/* Status Update Dropdown */}
              <div style={{
                ...styles.updateSection,
                borderTopColor: colors.border,
              }}>
                <label style={{
                  ...styles.updateLabel,
                  color: colors.secondaryText,
                }}>
                  Update status
                </label>
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.id, e.target.value)
                  }
                  style={{
                    ...styles.select,
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div style={styles.emptyState}>
            <Package size={48} color={colors.border} />
            <h3 style={{
              ...styles.emptyTitle,
              color: colors.heading,
            }}>
              No orders found
            </h3>
            <p style={{
              ...styles.emptyText,
              color: colors.secondaryText,
            }}>
              {filter === 'All'
                ? 'Orders will appear here once customers place them.'
                : `No ${filter.toLowerCase()} orders found.`}
            </p>
          </div>
        )}
      </main>

      // screens/TailorOrders.jsx - Bottom Nav Section

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
          <span style={styles.navIconWrap}>
            <Calendar size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/tailor/orders')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Package size={20} color="#FFFFFF" />
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
  filterChipActive: {
    backgroundColor: '#0A0F1E',
    borderColor: '#0A0F1E',
    color: '#FFFFFF',
  },
  card: {
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid',
    marginBottom: '10px',
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  orderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  orderAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  orderInitial: {
    fontSize: '16px',
    fontWeight: '600',
  },
  customerName: {
    fontSize: '14px',
    fontWeight: '600',
  },
  orderDetails: {
    fontSize: '13px',
    marginTop: '1px',
  },
  orderDate: {
    fontSize: '12px',
    marginTop: '1px',
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
  progressContainer: {
    marginBottom: '12px',
  },
  progressBar: {
    width: '100%',
    height: '4px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  progressLabels: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '4px',
  },
  progressLabel: {
    fontSize: '11px',
    fontWeight: '500',
  },
  updateSection: {
    paddingTop: '12px',
    borderTop: '1px solid',
  },
  updateLabel: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '6px',
  },
  select: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid',
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
  .tailor-orders-back-button:hover {
    color: #1A56DB !important;
  }

  .tailor-orders-filter-chip:hover:not(.tailor-orders-filter-chip-active) {
    border-color: #1A56DB !important;
    color: #0F172A !important;
  }

  .tailor-orders-select:focus {
    border-color: #1A56DB !important;
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1) !important;
  }

  @media (max-width: 480px) {
    .tailor-orders-title {
      font-size: 24px !important;
    }
    .tailor-orders-back-button {
      font-size: 13px !important;
    }
    .tailor-orders-stats-row {
      grid-template-columns: repeat(3, 1fr) !important;
    }
    .tailor-orders-stat-number {
      font-size: 18px !important;
    }
    .tailor-orders-card {
      padding: 14px !important;
    }
    .tailor-orders-customer-name {
      font-size: 13px !important;
    }
    .tailor-orders-order-details {
      font-size: 12px !important;
    }
  }

  @media (max-width: 360px) {
    .tailor-orders-title {
      font-size: 22px !important;
    }
    .tailor-orders-stats-row {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
    .tailor-orders-order-header {
      flex-wrap: wrap !important;
    }
    .tailor-orders-status-badge {
      margin-top: 4px !important;
    }
    .tailor-orders-order-left {
      flex-wrap: wrap !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TailorOrders;