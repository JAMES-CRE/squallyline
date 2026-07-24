// // components/Hero.jsx
// import React from "react";

// const Hero = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.innerContainer}>
//         {/* Left Column: Content */}
//         <div style={styles.content}>
//           <span style={styles.badge}>
//             <span style={styles.badgeIcon}>✦</span> TailorConnect Premium
//           </span>

//           <h1 style={styles.title}>
//             Your Perfect Fit
//             <br />
//             <span style={styles.titleGradient}>Starts Here.</span>
//           </h1>

//           <p style={styles.description}>
//             Smart measurement technology meets traditional craftsmanship.
//             Get perfectly fitted garments delivered to your doorstep — no
//             measuring tape required.
//           </p>

//           <div style={styles.actions}>
//             <button style={styles.primaryButton}>
//               Start Fitting Journey
//             </button>
//             <button style={styles.secondaryButton}>
//               Watch Demo
//             </button>
//           </div>

//           {/* Trust indicators */}
//           <div style={styles.trustBar}>
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>12K+</span>
//               <span style={styles.trustLabel}>Happy Customers</span>
//             </div>
//             <div style={styles.trustDivider} />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>98%</span>
//               <span style={styles.trustLabel}>Fit Accuracy</span>
//             </div>
//             <div style={styles.trustDivider} />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber}>4.9★</span>
//               <span style={styles.trustLabel}>Average Rating</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Visual Card */}
//         <div style={styles.visual}>
//           <div style={styles.card}>
//             <div style={styles.cardInner}>
//               {/* Card Header */}
//               <div style={styles.cardHeader}>
//                 <span style={styles.liveDot} />
//                 <span style={styles.liveLabel}>Live</span>
//                 <span style={styles.cardBadge}>Featured</span>
//               </div>

//               {/* Card Body */}
//               <div style={styles.cardBody}>
//                 <h3 style={styles.cardTitle}>SmartFit™ Technology</h3>
//                 <p style={styles.cardDescription}>
//                   AI-powered measurement guidance with 98% accuracy.
//                   Get your perfect fit from anywhere in the world.
//                 </p>
//                 <div style={styles.cardStats}>
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber}>8</span>
//                     <span style={styles.statLabel}>Measurements</span>
//                   </div>
//                   <div style={styles.statDivider} />
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber}>2M</span>
//                     <span style={styles.statLabel}>Fits Created</span>
//                   </div>
//                   <div style={styles.statDivider} />
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber}>150+</span>
//                     <span style={styles.statLabel}>Countries</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card Footer */}
//               <div style={styles.cardFooter}>
//                 <span style={styles.footerTag}>#tailorconnect</span>
//                 <span style={styles.footerTag}>#smartfit</span>
//                 <span style={styles.footerTag}>#perfectfit</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '100%',
//     padding: '40px 0',
//     backgroundColor: '#F5F7FA',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   innerContainer: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 24px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     alignItems: 'center',
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   badge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '6px 16px',
//     backgroundColor: '#E8F4FB',
//     color: '#1A6FD4',
//     fontSize: '13px',
//     fontWeight: '600',
//     borderRadius: '50px',
//     width: 'fit-content',
//     letterSpacing: '0.3px',
//   },
//   badgeIcon: {
//     fontSize: '14px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     lineHeight: '1.1',
//     margin: 0,
//     letterSpacing: '-0.02em',
//   },
//   titleGradient: {
//     background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//   },
//   description: {
//     fontSize: '16px',
//     lineHeight: '1.6',
//     color: '#5C7A9A',
//     maxWidth: '480px',
//     margin: 0,
//   },
//   actions: {
//     display: 'flex',
//     gap: '12px',
//     flexWrap: 'wrap',
//   },
//   primaryButton: {
//     padding: '14px 32px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '15px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 16px rgba(26, 111, 212, 0.25)',
//   },
//   secondaryButton: {
//     padding: '14px 32px',
//     backgroundColor: 'transparent',
//     color: '#1A6FD4',
//     border: '2px solid #DCE4EE',
//     borderRadius: '50px',
//     fontSize: '15px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   trustBar: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     paddingTop: '8px',
//     borderTop: '1px solid #DCE4EE',
//   },
//   trustItem: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   trustNumber: {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     lineHeight: '1.2',
//   },
//   trustLabel: {
//     fontSize: '12px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//   },
//   trustDivider: {
//     width: '1px',
//     height: '32px',
//     backgroundColor: '#DCE4EE',
//   },
//   visual: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: '100%',
//     maxWidth: '440px',
//     padding: '12px',
//     background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
//     borderRadius: '40px',
//     boxShadow: '0 20px 60px rgba(26, 111, 212, 0.2)',
//     transition: 'transform 0.4s ease, box-shadow 0.4s ease',
//   },
//   cardInner: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '32px',
//     padding: '28px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//     minHeight: '340px',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   cardHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   liveDot: {
//     width: '8px',
//     height: '8px',
//     borderRadius: '50%',
//     backgroundColor: '#22C55E',
//     display: 'inline-block',
//     animation: 'pulse 2s infinite',
//   },
//   liveLabel: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#22C55E',
//     letterSpacing: '0.5px',
//     textTransform: 'uppercase',
//   },
//   cardBadge: {
//     marginLeft: 'auto',
//     padding: '4px 12px',
//     backgroundColor: '#E8F4FB',
//     color: '#1A6FD4',
//     fontSize: '11px',
//     fontWeight: '600',
//     borderRadius: '50px',
//     letterSpacing: '0.3px',
//   },
//   cardBody: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//     justifyContent: 'center',
//   },
//   cardTitle: {
//     fontSize: '22px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     margin: 0,
//   },
//   cardDescription: {
//     fontSize: '14px',
//     lineHeight: '1.5',
//     color: '#5C7A9A',
//     margin: 0,
//   },
//   cardStats: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//     paddingTop: '12px',
//     borderTop: '1px solid #F1F4F8',
//   },
//   stat: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   statNumber: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     lineHeight: '1.2',
//   },
//   statLabel: {
//     fontSize: '11px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//   },
//   statDivider: {
//     width: '1px',
//     height: '28px',
//     backgroundColor: '#DCE4EE',
//   },
//   cardFooter: {
//     display: 'flex',
//     gap: '8px',
//     flexWrap: 'wrap',
//   },
//   footerTag: {
//     padding: '4px 12px',
//     backgroundColor: '#F1F4F8',
//     color: '#5C7A9A',
//     fontSize: '11px',
//     fontWeight: '500',
//     borderRadius: '50px',
//     letterSpacing: '0.3px',
//   },
// };

// // Add keyframe animation for pulse
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   @keyframes pulse {
//     0% { opacity: 1; transform: scale(1); }
//     50% { opacity: 0.6; transform: scale(0.9); }
//     100% { opacity: 1; transform: scale(1); }
//   }

//   button:hover {
//     transform: translateY(-2px);
//   }

//   .primary-button:hover {
//     background-color: #1557A8;
//     box-shadow: 0 6px 24px rgba(26, 111, 212, 0.35);
//   }

//   .secondary-button:hover {
//     background-color: #F5F9FF;
//     border-color: #1A6FD4;
//   }

//   .hero-card:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 30px 80px rgba(26, 111, 212, 0.3);
//   }

//   @media (max-width: 1024px) {
//     .hero-inner {
//       gap: 40px !important;
//     }
//     .hero-title {
//       font-size: 38px !important;
//     }
//   }

//   @media (max-width: 768px) {
//     .hero-inner {
//       grid-template-columns: 1fr !important;
//       gap: 32px !important;
//       padding: 0 16px !important;
//     }
//     .hero-content {
//       order: 1 !important;
//     }
//     .hero-visual {
//       order: 0 !important;
//     }
//     .hero-title {
//       font-size: 32px !important;
//     }
//     .hero-description {
//       font-size: 15px !important;
//       max-width: 100% !important;
//     }
//     .hero-card {
//       max-width: 100% !important;
//     }
//     .hero-card-inner {
//       min-height: 280px !important;
//       padding: 24px !important;
//     }
//     .hero-trust-bar {
//       flex-wrap: wrap !important;
//       gap: 12px !important;
//     }
//     .hero-trust-divider {
//       display: none !important;
//     }
//     .hero-actions {
//       flex-direction: column !important;
//       width: 100% !important;
//     }
//     .hero-actions button {
//       width: 100% !important;
//       justify-content: center !important;
//     }
//     .hero-stats {
//       flex-wrap: wrap !important;
//       gap: 12px !important;
//     }
//     .hero-stat-divider {
//       display: none !important;
//     }
//     .hero-card-badge {
//       display: none !important;
//     }
//     .hero-card-footer {
//       display: none !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .hero-container {
//       padding: 16px 0 !important;
//     }
//     .hero-title {
//       font-size: 28px !important;
//     }
//     .hero-card-inner {
//       min-height: 240px !important;
//       padding: 20px !important;
//     }
//     .hero-card-title {
//       font-size: 19px !important;
//     }
//     .hero-stat-number {
//       font-size: 17px !important;
//     }
//     .hero-trust-number {
//       font-size: 16px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Hero;















// // components/Hero.jsx
// import React from "react";

// const Hero = ({ stats = null }) => {
//   // Default stats if none provided
//   const defaultStats = {
//     customers: "12K+",
//     accuracy: "98%",
//     rating: "4.9★",
//     measurements: "8",
//     fitsCreated: "2M",
//     countries: "150+"
//   };

//   const data = stats || defaultStats;

//   return (
//     <div style={styles.container}>
//       <div style={styles.innerContainer}>
//         {/* Left Column: Content */}
//         <div style={styles.content}>
//           <span style={styles.badge}>
//             <span style={styles.badgeIcon}>✦</span> TailorConnect Premium
//           </span>

//           <h1 style={styles.title}>
//             Your Perfect Fit
//             <br />
//             <span style={styles.titleGradient}>Starts Here.</span>
//           </h1>

//           <p style={styles.description}>
//             Smart measurement technology meets traditional craftsmanship.
//             Get perfectly fitted garments delivered to your doorstep — no
//             measuring tape required.
//           </p>

//           <div style={styles.actions}>
//             <button style={styles.primaryButton} className="primary-button">
//               Start Fitting Journey
//             </button>
//             <button style={styles.secondaryButton} className="secondary-button">
//               Watch Demo
//             </button>
//           </div>

//           {/* Trust indicators */}
//           <div style={styles.trustBar} className="hero-trust-bar">
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber} className="hero-trust-number">{data.customers}</span>
//               <span style={styles.trustLabel}>Happy Customers</span>
//             </div>
//             <div style={styles.trustDivider} className="hero-trust-divider" />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber} className="hero-trust-number">{data.accuracy}</span>
//               <span style={styles.trustLabel}>Fit Accuracy</span>
//             </div>
//             <div style={styles.trustDivider} className="hero-trust-divider" />
//             <div style={styles.trustItem}>
//               <span style={styles.trustNumber} className="hero-trust-number">{data.rating}</span>
//               <span style={styles.trustLabel}>Average Rating</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Visual Card */}
//         <div style={styles.visual}>
//           <div style={styles.card} className="hero-card">
//             <div style={styles.cardInner} className="hero-card-inner">
//               {/* Card Header */}
//               <div style={styles.cardHeader}>
//                 <span style={styles.liveDot} />
//                 <span style={styles.liveLabel}>Live</span>
//                 <span style={styles.cardBadge} className="hero-card-badge">Featured</span>
//               </div>

//               {/* Card Body */}
//               <div style={styles.cardBody}>
//                 <h3 style={styles.cardTitle} className="hero-card-title">SmartFit™ Technology</h3>
//                 <p style={styles.cardDescription}>
//                   AI-powered measurement guidance with {data.accuracy} accuracy.
//                   Get your perfect fit from anywhere in the world.
//                 </p>
//                 <div style={styles.cardStats} className="hero-stats">
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber} className="hero-stat-number">{data.measurements}</span>
//                     <span style={styles.statLabel}>Measurements</span>
//                   </div>
//                   <div style={styles.statDivider} className="hero-stat-divider" />
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber} className="hero-stat-number">{data.fitsCreated}</span>
//                     <span style={styles.statLabel}>Fits Created</span>
//                   </div>
//                   <div style={styles.statDivider} className="hero-stat-divider" />
//                   <div style={styles.stat}>
//                     <span style={styles.statNumber} className="hero-stat-number">{data.countries}</span>
//                     <span style={styles.statLabel}>Countries</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card Footer */}
//               <div style={styles.cardFooter} className="hero-card-footer">
//                 <span style={styles.footerTag}>#tailorconnect</span>
//                 <span style={styles.footerTag}>#smartfit</span>
//                 <span style={styles.footerTag}>#perfectfit</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '100%',
//     padding: '40px 0',
//     backgroundColor: '#F5F7FA',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   innerContainer: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 24px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     alignItems: 'center',
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   badge: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '6px 16px',
//     backgroundColor: '#E8F4FB',
//     color: '#1A6FD4',
//     fontSize: '13px',
//     fontWeight: '600',
//     borderRadius: '50px',
//     width: 'fit-content',
//     letterSpacing: '0.3px',
//   },
//   badgeIcon: {
//     fontSize: '14px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     lineHeight: '1.1',
//     margin: 0,
//     letterSpacing: '-0.02em',
//   },
//   titleGradient: {
//     background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//   },
//   description: {
//     fontSize: '16px',
//     lineHeight: '1.6',
//     color: '#5C7A9A',
//     maxWidth: '480px',
//     margin: 0,
//   },
//   actions: {
//     display: 'flex',
//     gap: '12px',
//     flexWrap: 'wrap',
//   },
//   primaryButton: {
//     padding: '14px 32px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '15px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 16px rgba(26, 111, 212, 0.25)',
//   },
//   secondaryButton: {
//     padding: '14px 32px',
//     backgroundColor: 'transparent',
//     color: '#1A6FD4',
//     border: '2px solid #DCE4EE',
//     borderRadius: '50px',
//     fontSize: '15px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   trustBar: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     paddingTop: '8px',
//     borderTop: '1px solid #DCE4EE',
//   },
//   trustItem: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   trustNumber: {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     lineHeight: '1.2',
//   },
//   trustLabel: {
//     fontSize: '12px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//   },
//   trustDivider: {
//     width: '1px',
//     height: '32px',
//     backgroundColor: '#DCE4EE',
//   },
//   visual: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     width: '100%',
//     maxWidth: '440px',
//     padding: '12px',
//     background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
//     borderRadius: '40px',
//     boxShadow: '0 20px 60px rgba(26, 111, 212, 0.2)',
//     transition: 'transform 0.4s ease, box-shadow 0.4s ease',
//   },
//   cardInner: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '32px',
//     padding: '28px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//     minHeight: '340px',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   cardHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   liveDot: {
//     width: '8px',
//     height: '8px',
//     borderRadius: '50%',
//     backgroundColor: '#22C55E',
//     display: 'inline-block',
//     animation: 'pulse 2s infinite',
//   },
//   liveLabel: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#22C55E',
//     letterSpacing: '0.5px',
//     textTransform: 'uppercase',
//   },
//   cardBadge: {
//     marginLeft: 'auto',
//     padding: '4px 12px',
//     backgroundColor: '#E8F4FB',
//     color: '#1A6FD4',
//     fontSize: '11px',
//     fontWeight: '600',
//     borderRadius: '50px',
//     letterSpacing: '0.3px',
//   },
//   cardBody: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//     justifyContent: 'center',
//   },
//   cardTitle: {
//     fontSize: '22px',
//     fontWeight: '700',
//     fontFamily: 'Fraunces, serif',
//     color: '#0A0F1E',
//     margin: 0,
//   },
//   cardDescription: {
//     fontSize: '14px',
//     lineHeight: '1.5',
//     color: '#5C7A9A',
//     margin: 0,
//   },
//   cardStats: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//     paddingTop: '12px',
//     borderTop: '1px solid #F1F4F8',
//   },
//   stat: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   statNumber: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     lineHeight: '1.2',
//   },
//   statLabel: {
//     fontSize: '11px',
//     color: '#5C7A9A',
//     fontWeight: '500',
//   },
//   statDivider: {
//     width: '1px',
//     height: '28px',
//     backgroundColor: '#DCE4EE',
//   },
//   cardFooter: {
//     display: 'flex',
//     gap: '8px',
//     flexWrap: 'wrap',
//   },
//   footerTag: {
//     padding: '4px 12px',
//     backgroundColor: '#F1F4F8',
//     color: '#5C7A9A',
//     fontSize: '11px',
//     fontWeight: '500',
//     borderRadius: '50px',
//     letterSpacing: '0.3px',
//   },
// };

// // Add keyframe animation for pulse
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   @keyframes pulse {
//     0% { opacity: 1; transform: scale(1); }
//     50% { opacity: 0.6; transform: scale(0.9); }
//     100% { opacity: 1; transform: scale(1); }
//   }

//   button:hover {
//     transform: translateY(-2px);
//   }

//   .primary-button:hover {
//     background-color: #1557A8;
//     box-shadow: 0 6px 24px rgba(26, 111, 212, 0.35);
//   }

//   .secondary-button:hover {
//     background-color: #F5F9FF;
//     border-color: #1A6FD4;
//   }

//   .hero-card:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 30px 80px rgba(26, 111, 212, 0.3);
//   }

//   @media (max-width: 1024px) {
//     .hero-inner {
//       gap: 40px !important;
//     }
//     .hero-title {
//       font-size: 38px !important;
//     }
//   }

//   @media (max-width: 768px) {
//     .hero-inner {
//       grid-template-columns: 1fr !important;
//       gap: 32px !important;
//       padding: 0 16px !important;
//     }
//     .hero-content {
//       order: 1 !important;
//     }
//     .hero-visual {
//       order: 0 !important;
//     }
//     .hero-title {
//       font-size: 32px !important;
//     }
//     .hero-description {
//       font-size: 15px !important;
//       max-width: 100% !important;
//     }
//     .hero-card {
//       max-width: 100% !important;
//     }
//     .hero-card-inner {
//       min-height: 280px !important;
//       padding: 24px !important;
//     }
//     .hero-trust-bar {
//       flex-wrap: wrap !important;
//       gap: 12px !important;
//     }
//     .hero-trust-divider {
//       display: none !important;
//     }
//     .hero-actions {
//       flex-direction: column !important;
//       width: 100% !important;
//     }
//     .hero-actions button {
//       width: 100% !important;
//       justify-content: center !important;
//     }
//     .hero-stats {
//       flex-wrap: wrap !important;
//       gap: 12px !important;
//     }
//     .hero-stat-divider {
//       display: none !important;
//     }
//     .hero-card-badge {
//       display: none !important;
//     }
//     .hero-card-footer {
//       display: none !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .hero-container {
//       padding: 16px 0 !important;
//     }
//     .hero-title {
//       font-size: 28px !important;
//     }
//     .hero-card-inner {
//       min-height: 240px !important;
//       padding: 20px !important;
//     }
//     .hero-card-title {
//       font-size: 19px !important;
//     }
//     .hero-stat-number {
//       font-size: 17px !important;
//     }
//     .hero-trust-number {
//       font-size: 16px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Hero;


// components/Hero.jsx
import React from "react";

const Hero = ({ stats = null }) => {
  const defaultStats = {
    customers: "12K+",
    accuracy: "98%",
    rating: "4.9★",
    measurements: "8",
    fitsCreated: "2M",
    countries: "150+"
  };

  const data = stats || defaultStats;

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Left Column: Content */}
        <div style={styles.content}>
          <h1 style={styles.title}>
            Your Perfect Fit
            <br />
            <span style={styles.titleGradient}>Starts Here.</span>
          </h1>

          <p style={styles.description}>
            Smart measurement technology meets traditional craftsmanship.
            Get perfectly fitted garments delivered to your doorstep — no
            measuring tape required.
          </p>

          <div style={styles.actions}>
            <button style={styles.primaryButton} className="primary-button">
              Start Fitting Journey
            </button>
            <button style={styles.secondaryButton} className="secondary-button">
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div style={styles.trustBar} className="hero-trust-bar">
            <div style={styles.trustItem}>
              <span style={styles.trustNumber} className="hero-trust-number">{data.customers}</span>
              <span style={styles.trustLabel}>Happy Customers</span>
            </div>
            <div style={styles.trustDivider} className="hero-trust-divider" />
            <div style={styles.trustItem}>
              <span style={styles.trustNumber} className="hero-trust-number">{data.accuracy}</span>
              <span style={styles.trustLabel}>Fit Accuracy</span>
            </div>
            <div style={styles.trustDivider} className="hero-trust-divider" />
            <div style={styles.trustItem}>
              <span style={styles.trustNumber} className="hero-trust-number">{data.rating}</span>
              <span style={styles.trustLabel}>Average Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div style={styles.visual}>
          <div style={styles.card} className="hero-card">
            <div style={styles.cardInner} className="hero-card-inner">
              {/* Card Header */}
              <div style={styles.cardHeader}>
                <span style={styles.liveDot} />
                <span style={styles.liveLabel}>Live</span>
                <span style={styles.cardBadge} className="hero-card-badge">Featured</span>
              </div>

              {/* Card Body */}
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle} className="hero-card-title">SmartFit™ Technology</h3>
                <p style={styles.cardDescription}>
                  AI-powered measurement guidance with {data.accuracy} accuracy.
                  Get your perfect fit from anywhere in the world.
                </p>
                <div style={styles.cardStats} className="hero-stats">
                  <div style={styles.stat}>
                    <span style={styles.statNumber} className="hero-stat-number">{data.measurements}</span>
                    <span style={styles.statLabel}>Measurements</span>
                  </div>
                  <div style={styles.statDivider} className="hero-stat-divider" />
                  <div style={styles.stat}>
                    <span style={styles.statNumber} className="hero-stat-number">{data.fitsCreated}</span>
                    <span style={styles.statLabel}>Fits Created</span>
                  </div>
                  <div style={styles.statDivider} className="hero-stat-divider" />
                  <div style={styles.stat}>
                    <span style={styles.statNumber} className="hero-stat-number">{data.countries}</span>
                    <span style={styles.statLabel}>Countries</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={styles.cardFooter} className="hero-card-footer">
                <span style={styles.footerTag}>#tailorconnect</span>
                <span style={styles.footerTag}>#smartfit</span>
                <span style={styles.footerTag}>#perfectfit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '40px 0',
    backgroundColor: 'transparent',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    lineHeight: '1.1',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  titleGradient: {
    background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#5C7A9A',
    maxWidth: '480px',
    margin: 0,
  },
  actions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '14px 32px',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(26, 111, 212, 0.25)',
  },
  secondaryButton: {
    padding: '14px 32px',
    backgroundColor: 'transparent',
    color: '#1A6FD4',
    border: '2px solid #DCE4EE',
    borderRadius: '50px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  trustBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    paddingTop: '8px',
    borderTop: '1px solid #DCE4EE',
  },
  trustItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  trustNumber: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0A0F1E',
    lineHeight: '1.2',
  },
  trustLabel: {
    fontSize: '12px',
    color: '#5C7A9A',
    fontWeight: '500',
  },
  trustDivider: {
    width: '1px',
    height: '32px',
    backgroundColor: '#DCE4EE',
  },
  visual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '440px',
    padding: '12px',
    background: 'linear-gradient(135deg, #1A6FD4 0%, #4DA6E8 100%)',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(26, 111, 212, 0.2)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  },
  cardInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: '32px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minHeight: '340px',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  liveDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22C55E',
    display: 'inline-block',
    animation: 'pulse 2s infinite',
  },
  liveLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#22C55E',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  cardBadge: {
    marginLeft: 'auto',
    padding: '4px 12px',
    backgroundColor: '#E8F4FB',
    color: '#1A6FD4',
    fontSize: '11px',
    fontWeight: '600',
    borderRadius: '50px',
    letterSpacing: '0.3px',
  },
  cardBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    fontFamily: 'Fraunces, serif',
    color: '#0A0F1E',
    margin: 0,
  },
  cardDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#5C7A9A',
    margin: 0,
  },
  cardStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '12px',
    borderTop: '1px solid #F1F4F8',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
  },
  statNumber: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0A0F1E',
    lineHeight: '1.2',
  },
  statLabel: {
    fontSize: '11px',
    color: '#5C7A9A',
    fontWeight: '500',
  },
  statDivider: {
    width: '1px',
    height: '28px',
    backgroundColor: '#DCE4EE',
  },
  cardFooter: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  footerTag: {
    padding: '4px 12px',
    backgroundColor: '#F1F4F8',
    color: '#5C7A9A',
    fontSize: '11px',
    fontWeight: '500',
    borderRadius: '50px',
    letterSpacing: '0.3px',
  },
};

// Add keyframe animation for pulse
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }

  button:hover {
    transform: translateY(-2px);
  }

  .primary-button:hover {
    background-color: #1557A8;
    box-shadow: 0 6px 24px rgba(26, 111, 212, 0.35);
  }

  .secondary-button:hover {
    background-color: #F5F9FF;
    border-color: #1A6FD4;
  }

  .hero-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 80px rgba(26, 111, 212, 0.3);
  }

  @media (max-width: 1024px) {
    .hero-inner {
      gap: 40px !important;
    }
    .hero-title {
      font-size: 38px !important;
    }
  }

  @media (max-width: 768px) {
    .hero-inner {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
      padding: 0 16px !important;
    }
    .hero-content {
      order: 1 !important;
    }
    .hero-visual {
      order: 0 !important;
    }
    .hero-title {
      font-size: 32px !important;
    }
    .hero-description {
      font-size: 15px !important;
      max-width: 100% !important;
    }
    .hero-card {
      max-width: 100% !important;
    }
    .hero-card-inner {
      min-height: 280px !important;
      padding: 24px !important;
    }
    .hero-trust-bar {
      flex-wrap: wrap !important;
      gap: 12px !important;
    }
    .hero-trust-divider {
      display: none !important;
    }
    .hero-actions {
      flex-direction: column !important;
      width: 100% !important;
    }
    .hero-actions button {
      width: 100% !important;
      justify-content: center !important;
    }
    .hero-stats {
      flex-wrap: wrap !important;
      gap: 12px !important;
    }
    .hero-stat-divider {
      display: none !important;
    }
    .hero-card-badge {
      display: none !important;
    }
    .hero-card-footer {
      display: none !important;
    }
  }

  @media (max-width: 480px) {
    .hero-container {
      padding: 16px 0 !important;
    }
    .hero-title {
      font-size: 28px !important;
    }
    .hero-card-inner {
      min-height: 240px !important;
      padding: 20px !important;
    }
    .hero-card-title {
      font-size: 19px !important;
    }
    .hero-stat-number {
      font-size: 17px !important;
    }
    .hero-trust-number {
      font-size: 16px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;