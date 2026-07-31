// // screens/Profile.jsx
// import React, { useState } from 'react';
// import {
//   Home,
//   Ruler,
//   Grid3x3,
//   Package,
//   User,
//   Heart,
//   Settings,
//   LogOut,
//   Edit2,
//   ShoppingBag,
//   Clock,
//   ChevronRight,
//   Camera,
//   Mail,
//   Phone,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();

//   const user = {
//     name: 'Akosua Mensah',
//     phone: '024 555 0192',
//     email: 'akosua@mail.com',
//     measurements: null,
//   };

//   const [orderHistory] = useState([
//     {
//       id: 1,
//       name: 'Kaba & Slit',
//       price: 'GHS 450',
//       status: 'Sewing',
//       date: 'Jul 20, 2026',
//     },
//     {
//       id: 2,
//       name: 'Agbada Set',
//       price: 'GHS 600',
//       status: 'Ready',
//       date: 'Jul 18, 2026',
//     },
//   ]);

//   const [favorites] = useState([
//     {
//       id: 3,
//       name: 'Fitted Wedding Gown',
//       price: 'GHS 1,200',
//       bg: '#F2E4E4',
//       image:
//         'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
//     },
//   ]);

//   const getStatusColor = (status) => {
//     const colors = {
//       'Sewing': '#F59E0B',
//       'Ready': '#22C55E',
//       'Cutting': '#3B82F6',
//       'Finishing': '#8B5CF6',
//       'Pending': '#EF4444',
//     };
//     return colors[status] || '#8E8EA0';
//   };

//   const getStatusBg = (status) => {
//     const colors = {
//       'Sewing': '#FEF3C7',
//       'Ready': '#DCFCE7',
//       'Cutting': '#DBEAFE',
//       'Finishing': '#EDE9FE',
//       'Pending': '#FEE2E2',
//     };
//     return colors[status] || '#F1F1F4';
//   };

//   const handleAddMeasurements = () => {
//     navigate('/measurements');
//   };

//   const handleDesignClick = (id) => {
//     navigate(`/designs/${id}`);
//   };

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={() => navigate('/home')} style={styles.backButton}>
//           ← Back to Home
//         </button>

//         {/* Page Header */}
//         <div style={styles.pageHeader}>
//           <span style={styles.eyebrow}>Account</span>
//           <h1 style={styles.pageTitle}>Your Profile</h1>
//         </div>

//         {/* User Info Card */}
//         <div style={styles.userCard}>
//           <div style={styles.userInfo}>
//             <div style={styles.avatar}>
//               <User size={32} color="#FFFFFF" />
//               <button style={styles.avatarEdit}>
//                 <Camera size={12} color="#FFFFFF" />
//               </button>
//             </div>
//             <div style={styles.userDetails}>
//               <div style={styles.userName}>{user.name}</div>
//               <div style={styles.userContact}>
//                 <Phone size={13} color="#8E8EA0" />
//                 {user.phone}
//               </div>
//               <div style={styles.userContact}>
//                 <Mail size={13} color="#8E8EA0" />
//                 {user.email}
//               </div>
//             </div>
//             <button style={styles.editButton}>
//               <Edit2 size={16} color="#1A6FD4" />
//             </button>
//           </div>
//         </div>

//         {/* Saved Measurements */}
//         <div style={styles.section}>
//           <div style={styles.sectionHeader}>
//             <span style={styles.sectionLabel}>Saved Measurements</span>
//             <span style={styles.sectionCount}>8/8</span>
//           </div>
//           <div style={styles.card}>
//             {user.measurements ? (
//               <div style={styles.measurementsSaved}>
//                 <div style={styles.measurementsList}>
//                   <span>✓ Chest: {user.measurements.chest}in</span>
//                   <span>✓ Waist: {user.measurements.waist}in</span>
//                   <span>✓ Hip: {user.measurements.hip}in</span>
//                 </div>
//                 <button style={styles.editMeasurementsButton}>Edit</button>
//               </div>
//             ) : (
//               <div style={styles.measurementsMissing}>
//                 <span style={styles.missingText}>No measurements saved yet.</span>
//                 <button onClick={handleAddMeasurements} style={styles.addButton}>
//                   Add now
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Order History */}
//         <div style={styles.section}>
//           <div style={styles.sectionHeader}>
//             <span style={styles.sectionLabel}>Order History</span>
//             <button style={styles.seeAllButton}>
//               See all <ChevronRight size={14} />
//             </button>
//           </div>
//           {orderHistory.map((order) => (
//             <div key={order.id} style={styles.orderCard}>
//               <div style={styles.orderItem}>
//                 <div style={styles.orderLeft}>
//                   <div style={styles.orderIcon}>
//                     <ShoppingBag size={16} color="#5C7A9A" />
//                   </div>
//                   <div>
//                     <div style={styles.orderName}>{order.name}</div>
//                     <div style={styles.orderDate}>
//                       <Clock size={12} /> {order.date}
//                     </div>
//                   </div>
//                 </div>
//                 <div style={styles.orderRight}>
//                   <span
//                     style={{
//                       ...styles.orderStatus,
//                       backgroundColor: getStatusBg(order.status),
//                       color: getStatusColor(order.status),
//                     }}
//                   >
//                     {order.status}
//                   </span>
//                   <span style={styles.orderPrice}>{order.price}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Favorite Designs */}
//         <div style={styles.section}>
//           <div style={styles.sectionHeader}>
//             <span style={styles.sectionLabel}>Favorite Designs</span>
//             <button style={styles.seeAllButton}>
//               See all <ChevronRight size={14} />
//             </button>
//           </div>
//           <div style={styles.favoritesGrid}>
//             {favorites.map((design) => (
//               <div
//                 key={design.id}
//                 onClick={() => handleDesignClick(design.id)}
//                 style={styles.designCard}
//               >
//                 <div
//                   style={{
//                     ...styles.designThumb,
//                     background: design.bg,
//                     backgroundImage: `url(${design.image})`,
//                   }}
//                 >
//                   <button
//                     style={styles.favButtonActive}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <Heart size={14} color="#FF4444" fill="#FF4444" />
//                   </button>
//                 </div>
//                 <div style={styles.designMeta}>
//                   <div style={styles.designName}>{design.name}</div>
//                   <div style={styles.designPrice}>{design.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Logout Button */}
//         <button onClick={handleLogout} style={styles.logoutButton}>
//           <LogOut size={18} /> Sign Out
//         </button>
//       </main>

//       {/* Bottom Navigation */}
//       <nav style={styles.bottomNav}>
//         <button
//           onClick={() => navigate('/home')}
//           style={styles.navButton}
//           aria-label="Home"
//         >
//           <span style={styles.navIconWrap}>
//             <Home size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/measurements')}
//           style={styles.navButton}
//           aria-label="Measure"
//         >
//           <span style={styles.navIconWrap}>
//             <Ruler size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/portfolio')}
//           style={styles.navButton}
//           aria-label="Portfolio"
//         >
//           <span style={styles.navIconWrap}>
//             <Grid3x3 size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/tracking')}
//           style={styles.navButton}
//           aria-label="Orders"
//         >
//           <span style={styles.navIconWrap}>
//             <Package size={20} color="#8E8EA0" />
//           </span>
//         </button>
//         <button
//           onClick={() => navigate('/profile')}
//           style={styles.navButton}
//           aria-label="Profile"
//         >
//           <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
//             <User size={20} color="#FFFFFF" />
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
//     maxWidth: '1200px', 
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
//     marginBottom: '24px',
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
//   userCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     padding: '20px',
//     border: '1px solid #F1F1F4',
//     marginBottom: '24px',
//   },
//   userInfo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//   },
//   avatar: {
//     position: 'relative',
//     width: '56px',
//     height: '56px',
//     borderRadius: '50%',
//     backgroundColor: '#1A6FD4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0,
//   },
//   avatarEdit: {
//     position: 'absolute',
//     bottom: '0',
//     right: '0',
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: '#1A6FD4',
//     border: '2px solid #FFFFFF',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   userDetails: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   userContact: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     marginTop: '2px',
//   },
//   editButton: {
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     border: '1px solid #DCE4EE',
//     backgroundColor: 'transparent',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     flexShrink: 0,
//   },
//   section: {
//     marginBottom: '24px',
//   },
//   sectionHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '8px',
//   },
//   sectionLabel: {
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   sectionCount: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     fontWeight: '500',
//   },
//   seeAllButton: {
//     fontSize: '13px',
//     fontWeight: '500',
//     color: '#1A6FD4',
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '2px',
//     fontFamily: 'Inter, sans-serif',
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '16px',
//     border: '1px solid #F1F1F4',
//   },
//   measurementsSaved: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     gap: '8px',
//   },
//   measurementsList: {
//     display: 'flex',
//     gap: '12px',
//     fontSize: '14px',
//     color: '#0A0F1E',
//     flexWrap: 'wrap',
//   },
//   editMeasurementsButton: {
//     padding: '4px 14px',
//     borderRadius: '6px',
//     border: '1px solid #DCE4EE',
//     backgroundColor: 'transparent',
//     color: '#5C7A9A',
//     fontSize: '12px',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   measurementsMissing: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     gap: '8px',
//   },
//   missingText: {
//     fontSize: '14px',
//     color: '#8E8EA0',
//   },
//   addButton: {
//     padding: '6px 16px',
//     borderRadius: '8px',
//     border: 'none',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '13px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '14px 16px',
//     border: '1px solid #F1F1F4',
//     marginBottom: '8px',
//   },
//   orderItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   orderLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     flex: 1,
//   },
//   orderIcon: {
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     backgroundColor: '#F1F1F4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0,
//   },
//   orderName: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#0A0F1E',
//   },
//   orderDate: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//   },
//   orderRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   orderStatus: {
//     fontSize: '11px',
//     fontWeight: '600',
//     padding: '3px 10px',
//     borderRadius: '50px',
//   },
//   orderPrice: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   favoritesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '12px',
//   },
//   designCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     border: '1px solid #F1F1F4',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   designThumb: {
//     height: '120px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'relative',
//   },
//   favButtonActive: {
//     position: 'absolute',
//     top: '6px',
//     right: '6px',
//     width: '28px',
//     height: '28px',
//     borderRadius: '50%',
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     border: 'none',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   designMeta: {
//     padding: '8px 10px 10px',
//   },
//   designName: {
//     fontSize: '13px',
//     fontWeight: '500',
//     color: '#0A0F1E',
//   },
//   designPrice: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#1A6FD4',
//   },
//   logoutButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: 'transparent',
//     color: '#EF4444',
//     fontSize: '15px',
//     fontWeight: '500',
//     border: '1.5px solid #FEE2E2',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     transition: 'all 0.2s',
//     marginTop: '8px',
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
//   .profile-back-button:hover {
//     color: #1A6FD4;
//   }

//   .profile-edit-button:hover {
//     background-color: #F5F9FF;
//     border-color: #1A6FD4;
//   }

//   .profile-edit-measurements-button:hover {
//     background-color: #F5F9FF;
//     border-color: #1A6FD4;
//   }

//   .profile-add-button:hover {
//     background-color: #1557A8;
//   }

//   .profile-see-all-button:hover {
//     color: #1557A8;
//   }

//   .profile-design-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 8px 24px rgba(0,0,0,0.08);
//   }

//   .profile-logout-button:hover {
//     background-color: #FEF2F2;
//     border-color: #EF4444;
//   }

//   @media (max-width: 480px) {
//     .profile-title {
//       font-size: 24px !important;
//     }
//     .profile-back-button {
//       font-size: 13px !important;
//     }
//     .profile-user-card {
//       padding: 16px !important;
//     }
//     .profile-avatar {
//       width: 48px !important;
//       height: 48px !important;
//     }
//     .profile-user-name {
//       font-size: 16px !important;
//     }
//     .profile-measurements-list {
//       gap: 8px !important;
//       font-size: 13px !important;
//     }
//     .profile-order-card {
//       padding: 12px 14px !important;
//     }
//     .profile-order-name {
//       font-size: 13px !important;
//     }
//     .profile-favorites-grid {
//       gap: 8px !important;
//     }
//     .profile-design-thumb {
//       height: 100px !important;
//     }
//     .profile-section {
//       margin-bottom: 20px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .profile-title {
//       font-size: 22px !important;
//     }
//     .profile-user-info {
//       flex-wrap: wrap !important;
//     }
//     .profile-measurements-missing {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//     .profile-order-item {
//       flex-wrap: wrap !important;
//       gap: 8px !important;
//     }
//     .profile-order-right {
//       width: 100% !important;
//       justify-content: space-between !important;
//     }
//     .profile-design-name {
//       font-size: 12px !important;
//     }
//     .profile-design-price {
//       font-size: 11px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Profile;

// screens/Profile.jsx
import React, { useState } from 'react';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  Heart,
  Settings,
  LogOut,
  Edit2,
  ShoppingBag,
  Clock,
  ChevronRight,
  Camera,
  Mail,
  Phone,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';

const Profile = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const user = {
    name: 'Akosua Mensah',
    phone: '024 555 0192',
    email: 'akosua@mail.com',
    measurements: null,
  };

  const [orderHistory] = useState([
    {
      id: 1,
      name: 'Kaba & Slit',
      price: 'GHS 450',
      status: 'Sewing',
      date: 'Jul 20, 2026',
    },
    {
      id: 2,
      name: 'Agbada Set',
      price: 'GHS 600',
      status: 'Ready',
      date: 'Jul 18, 2026',
    },
  ]);

  const [favorites] = useState([
    {
      id: 3,
      name: 'Fitted Wedding Gown',
      price: 'GHS 1,200',
      bg: '#F2E4E4',
      image:
        'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const getStatusColor = (status) => {
    const colors = {
      'Sewing': '#D97706',
      'Ready': '#059669',
      'Cutting': '#2563EB',
      'Finishing': '#7C3AED',
      'Pending': '#DC2626',
    };
    return colors[status] || '#94A3B8';
  };

  const getStatusBg = (status) => {
    const colors = {
      'Sewing': '#FEF3C7',
      'Ready': '#D1FAE5',
      'Cutting': '#DBEAFE',
      'Finishing': '#EDE9FE',
      'Pending': '#FEE2E2',
    };
    return colors[status] || '#F1F5F9';
  };

  const handleAddMeasurements = () => {
    navigate('/measurements');
  };

  const handleDesignClick = (id) => {
    navigate(`/designs/${id}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>

      <main style={styles.main}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/home')}
          style={{ ...styles.backButton, color: colors.secondaryText }}
        >
          ← Back to Home
        </button>


        <div style={styles.pageHeader}>
          <span style={{
            ...styles.eyebrow,
            backgroundColor: colors.primaryLight,
            color: colors.primary
          }}>
            Account
          </span>
          <h1 style={{ ...styles.pageTitle, color: colors.heading }}>
            Your Profile
          </h1>
        </div>


        <div style={{
          ...styles.userCard,
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
        }}>
          <div style={styles.userInfo}>
            <div style={{ ...styles.avatar, backgroundColor: colors.primary }}>
              <User size={32} color="#FFFFFF" />
              <button style={{ ...styles.avatarEdit, backgroundColor: colors.primary }}>
                <Camera size={12} color="#FFFFFF" />
              </button>
            </div>
            <div style={styles.userDetails}>
              <div style={{ ...styles.userName, color: colors.heading }}>
                {user.name}
              </div>
              <div style={{ ...styles.userContact, color: colors.secondaryText }}>
                <Phone size={13} color={colors.secondaryText} />
                {user.phone}
              </div>
              <div style={{ ...styles.userContact, color: colors.secondaryText }}>
                <Mail size={13} color={colors.secondaryText} />
                {user.email}
              </div>
            </div>

            <button
              onClick={() => navigate('/edit-profile')}
              style={{
                ...styles.editButton,
                color: colors.primary,
              }}
            >
              <Edit2 size={16} color={colors.primary} />
            </button>
          </div>
        </div>

        {/* Saved Measurements */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={{ ...styles.sectionLabel, color: colors.heading }}>
              Saved Measurements
            </span>
            <span style={{ ...styles.sectionCount, color: colors.secondaryText }}>
              8/8
            </span>
          </div>
          <div style={{
            ...styles.card,
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          }}>
            {user.measurements ? (
              <div style={styles.measurementsSaved}>
                <div style={{ ...styles.measurementsList, color: colors.text }}>
                  <span>✓ Chest: {user.measurements.chest}in</span>
                  <span>✓ Waist: {user.measurements.waist}in</span>
                  <span>✓ Hip: {user.measurements.hip}in</span>
                </div>
                <button style={{
                  ...styles.editMeasurementsButton,
                  borderColor: colors.border,
                  color: colors.secondaryText,
                }}>
                  Edit
                </button>
              </div>
            ) : (
              <div style={styles.measurementsMissing}>
                <span style={{ ...styles.missingText, color: colors.secondaryText }}>
                  No measurements saved yet.
                </span>
                <button
                  onClick={handleAddMeasurements}
                  style={{
                    ...styles.addButton,
                    backgroundColor: colors.primary,
                    color: colors.btnText,
                  }}
                >
                  Add now
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Order History */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={{ ...styles.sectionLabel, color: colors.heading }}>
              Order History
            </span>
            <button
              onClick={() => navigate('/orders')}
              style={styles.seeAllButton}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>
          {orderHistory.map((order) => (
            <div key={order.id} style={{
              ...styles.orderCard,
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
            }}>
              <div style={styles.orderItem}>
                <div style={styles.orderLeft}>
                  <div style={{ ...styles.orderIcon, backgroundColor: colors.primaryLight }}>
                    <ShoppingBag size={16} color={colors.primary} />
                  </div>
                  <div>
                    <div style={{ ...styles.orderName, color: colors.heading }}>
                      {order.name}
                    </div>
                    <div style={{ ...styles.orderDate, color: colors.secondaryText }}>
                      <Clock size={12} /> {order.date}
                    </div>
                  </div>
                </div>
                <div style={styles.orderRight}>
                  <span
                    style={{
                      ...styles.orderStatus,
                      backgroundColor: getStatusBg(order.status),
                      color: getStatusColor(order.status),
                    }}
                  >
                    {order.status}
                  </span>
                  <span style={{ ...styles.orderPrice, color: colors.heading }}>
                    {order.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Favorite Designs */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={{ ...styles.sectionLabel, color: colors.heading }}>
              Favorite Designs
            </span>
            <button
              onClick={() => navigate('/favorites')}
              style={styles.seeAllButton}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>
          <div style={styles.favoritesGrid}>
            {favorites.map((design) => (
              <div
                key={design.id}
                onClick={() => handleDesignClick(design.id)}
                style={{
                  ...styles.designCard,
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                <div
                  style={{
                    ...styles.designThumb,
                    background: design.bg,
                    backgroundImage: `url(${design.image})`,
                  }}
                >
                  <button
                    style={styles.favButtonActive}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={14} color="#FF4444" fill="#FF4444" />
                  </button>
                </div>
                <div style={styles.designMeta}>
                  <div style={{ ...styles.designName, color: colors.heading }}>
                    {design.name}
                  </div>
                  <div style={{ ...styles.designPrice, color: colors.primary }}>
                    {design.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            ...styles.logoutButton,
            color: colors.error,
            borderColor: colors.errorBg,
          }}
        >
          <LogOut size={18} /> Sign Out
        </button>
      </main>

      {/* Bottom Navigation */}
      {/* <nav style={{
        ...styles.bottomNav,
        backgroundColor: colors.navBg,
        borderColor: 'rgba(255,255,255,0.06)',
      }}>
        <button
          onClick={() => navigate('/home')}
          style={styles.navButton}
          aria-label="Home"
        >
          <span style={styles.navIconWrap}>
            <Home size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/measurements')}
          style={styles.navButton}
          aria-label="Measure"
        >
          <span style={styles.navIconWrap}>
            <Ruler size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/portfolio')}
          style={styles.navButton}
          aria-label="Portfolio"
        >
          <span style={styles.navIconWrap}>
            <Grid3x3 size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/tracking')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={styles.navIconWrap}>
            <Package size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          style={styles.navButton}
          aria-label="Profile"
        >
          <span style={{ 
            ...styles.navIconWrap, 
            ...styles.navIconWrapActive,
            backgroundColor: colors.navActive,
          }}>
            <User size={20} color={colors.navTextActive} />
          </span>
        </button>
      </nav> */}
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
    maxWidth: '1200px',
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
    marginBottom: '24px',
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
  userCard: {
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid',
    marginBottom: '24px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatar: {
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarEdit: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #FFFFFF',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: '18px',
    fontWeight: '600',
  },
  userContact: {
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '2px',
  },
  editButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    flexShrink: 0,
  },
  section: {
    marginBottom: '24px',
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
  },
  sectionCount: {
    fontSize: '12px',
    fontWeight: '500',
  },
  seeAllButton: {
    fontSize: '13px',
    fontWeight: '500',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    fontFamily: 'Inter, sans-serif',
  },
  card: {
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid',
  },
  measurementsSaved: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  measurementsList: {
    display: 'flex',
    gap: '12px',
    fontSize: '14px',
    flexWrap: 'wrap',
  },
  editMeasurementsButton: {
    padding: '4px 14px',
    borderRadius: '6px',
    border: '1px solid',
    backgroundColor: 'transparent',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  measurementsMissing: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  missingText: {
    fontSize: '14px',
  },
  addButton: {
    padding: '6px 16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  orderCard: {
    borderRadius: '12px',
    padding: '14px 16px',
    border: '1px solid',
    marginBottom: '8px',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },
  orderIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  orderName: {
    fontSize: '14px',
    fontWeight: '500',
  },
  orderDate: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  orderRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  orderStatus: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '50px',
  },
  orderPrice: {
    fontSize: '14px',
    fontWeight: '600',
  },
  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  designCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  designThumb: {
    height: '120px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  favButtonActive: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  designMeta: {
    padding: '8px 10px 10px',
  },
  designName: {
    fontSize: '13px',
    fontWeight: '500',
  },
  designPrice: {
    fontSize: '12px',
    fontWeight: '600',
  },
  logoutButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    fontSize: '15px',
    fontWeight: '500',
    border: '1.5px solid',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.2s',
    marginTop: '8px',
  },
  bottomNav: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 48px)',
    maxWidth: '600px',
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
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
    flex: 1,
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
  .profile-back-button:hover {
    color: #1A56DB;
  }

  .profile-edit-button:hover {
    background-color: #F5F9FF;
    border-color: #1A56DB;
  }

  .profile-edit-measurements-button:hover {
    background-color: #F5F9FF;
    border-color: #1A56DB;
  }

  .profile-add-button:hover {
    background-color: #1A3A8A;
  }

  .profile-see-all-button:hover {
    color: #1A3A8A;
  }

  .profile-design-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .profile-logout-button:hover {
    background-color: #FEF2F2;
    border-color: #DC2626;
  }

  @media (max-width: 480px) {
    .profile-title {
      font-size: 24px !important;
    }
    .profile-back-button {
      font-size: 13px !important;
    }
    .profile-user-card {
      padding: 16px !important;
    }
    .profile-avatar {
      width: 48px !important;
      height: 48px !important;
    }
    .profile-user-name {
      font-size: 16px !important;
    }
    .profile-measurements-list {
      gap: 8px !important;
      font-size: 13px !important;
    }
    .profile-order-card {
      padding: 12px 14px !important;
    }
    .profile-order-name {
      font-size: 13px !important;
    }
    .profile-favorites-grid {
      gap: 8px !important;
    }
    .profile-design-thumb {
      height: 100px !important;
    }
    .profile-section {
      margin-bottom: 20px !important;
    }
  }

  @media (max-width: 360px) {
    .profile-title {
      font-size: 22px !important;
    }
    .profile-user-info {
      flex-wrap: wrap !important;
    }
    .profile-measurements-missing {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .profile-order-item {
      flex-wrap: wrap !important;
      gap: 8px !important;
    }
    .profile-order-right {
      width: 100% !important;
      justify-content: space-between !important;
    }
    .profile-design-name {
      font-size: 12px !important;
    }
    .profile-design-price {
      font-size: 11px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Profile;