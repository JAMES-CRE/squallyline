// // // 
// // import React from 'react';

// // const CardGrid = () => {
// //   const categories = [
// //     { name: "Men Wear", count: "120 Items", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Women Wear", count: "245 Items", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Kids Fashion", count: "85 Items", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Accessories", count: "64 Items", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" }
// //   ];

// //   return (
// //     <div style={{
// //       backgroundColor: '#F5F7FA',
// //       padding: '24px',
// //       minHeight: '100vh',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       overflow: 'visible'
// //     }}>
// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(2, 1fr)',
// //         gap: '20px',
// //         maxWidth: '480px',
// //         width: '100%'
// //       }}>
// //         {categories.map((item, index) => (
// //           <div 
// //             key={index} 
// //             style={{
// //               position: 'relative',
// //               borderRadius: '28px',
// //               height: '200px',
// //               overflow: 'visible', // Changed from 'hidden' to 'visible'
// //               boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// //               cursor: 'pointer',
// //               transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
// //               willChange: 'transform'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
// //               e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.18)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = 'translateY(0) scale(1)';
// //               e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
// //             }}
// //           >
// //             {/* Full Background Image - Unrestricted */}
// //             <img 
// //               src={item.image} 
// //               alt={item.name} 
// //               style={{
// //                 position: 'absolute',
// //                 top: '-10px', // Negative values to bleed outside
// //                 left: '-10px',
// //                 width: 'calc(100% + 20px)',
// //                 height: 'calc(100% + 20px)',
// //                 objectFit: 'cover',
// //                 borderRadius: '28px',
// //                 transition: 'transform 0.6s ease, filter 0.6s ease'
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform = 'scale(1.08)';
// //                 e.currentTarget.style.filter = 'brightness(1.05)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = 'scale(1)';
// //                 e.currentTarget.style.filter = 'brightness(1)';
// //               }}
// //             />

// //             {/* Gradient Overlay */}
// //             <div style={{
// //               position: 'absolute',
// //               top: 0,
// //               left: 0,
// //               right: 0,
// //               bottom: 0,
// //               background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)',
// //               borderRadius: '28px'
// //             }} />

// //             {/* Glassmorphism Floating Bottom Bar */}
// //             <div style={{
// //               position: 'absolute',
// //               bottom: '16px',
// //               left: '16px',
// //               right: '16px',
// //               background: 'rgba(255, 255, 255, 0.12)',
// //               backdropFilter: 'blur(20px) saturate(180%)',
// //               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
// //               borderRadius: '16px',
// //               padding: '14px 18px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //               border: '1px solid rgba(255, 255, 255, 0.18)',
// //               boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
// //               transition: 'all 0.3s ease'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
// //               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
// //               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
// //             }}
// //             >
// //               <span style={{
// //                 color: '#FFFFFF',
// //                 fontWeight: '600',
// //                 fontSize: '15px',
// //                 letterSpacing: '0.3px',
// //                 textShadow: '0 2px 8px rgba(0,0,0,0.3)',
// //                 overflow: 'hidden',
// //                 textOverflow: 'ellipsis',
// //                 whiteSpace: 'nowrap',
// //                 marginRight: '12px'
// //               }}>
// //                 {item.name}
// //               </span>
// //               <span style={{
// //                 background: 'rgba(255, 255, 255, 0.2)',
// //                 color: '#FFFFFF',
// //                 fontSize: '11px',
// //                 fontWeight: '700',
// //                 padding: '4px 12px',
// //                 borderRadius: '20px',
// //                 whiteSpace: 'nowrap',
// //                 backdropFilter: 'blur(8px)',
// //                 border: '1px solid rgba(255, 255, 255, 0.15)',
// //                 textShadow: '0 1px 4px rgba(0,0,0,0.2)',
// //                 letterSpacing: '0.5px'
// //               }}>
// //                 {item.count}
// //               </span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardGrid;



















// // import React from 'react';

// // const CardGrid = () => {
// //   const categories = [
// //     { name: "Men Wear", count: "120 Items", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Women Wear", count: "245 Items", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Kids Fashion", count: "85 Items", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80" },
// //     { name: "Accessories", count: "64 Items", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" }
// //   ];

// //   return (
// //     <div style={{
// //       backgroundColor: '#F5F7FA',
// //       padding: '24px',
// //       minHeight: '100vh',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center'
// //     }}>
// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(2, 1fr)',
// //         gap: '18px',
// //         maxWidth: '480px',
// //         width: '100%'
// //       }}>
// //         {categories.map((item, index) => (
// //           <div 
// //             key={index} 
// //             style={{
// //               position: 'relative',
// //               borderRadius: '24px',
// //               height: '220px',
// //               overflow: 'hidden',
// //               boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
// //               cursor: 'pointer',
// //               transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
// //               transform: 'translateY(0)',
// //               willChange: 'transform'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = 'translateY(-8px)';
// //               e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = 'translateY(0)';
// //               e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
// //             }}
// //           >
// //             {/* Background Image - Full Cover */}
// //             <img 
// //               src={item.image} 
// //               alt={item.name} 
// //               style={{
// //                 position: 'absolute',
// //                 top: 0,
// //                 left: 0,
// //                 width: '100%',
// //                 height: '100%',
// //                 objectFit: 'cover',
// //                 transition: 'transform 0.6s ease'
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform = 'scale(1.08)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = 'scale(1)';
// //               }}
// //             />

// //             {/* Gradient Overlay - Dark to Transparent */}
// //             <div style={{
// //               position: 'absolute',
// //               top: 0,
// //               left: 0,
// //               right: 0,
// //               bottom: 0,
// //               background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.02) 100%)'
// //             }} />

// //             {/* Category Name - Pill Button Style */}
// //             <div style={{
// //               position: 'absolute',
// //               bottom: '20px',
// //               left: '50%',
// //               transform: 'translateX(-50%)',
// //               width: 'calc(100% - 32px)',
// //               padding: '14px 20px',
// //               background: 'rgba(255, 255, 255, 0.15)',
// //               backdropFilter: 'blur(16px) saturate(180%)',
// //               WebkitBackdropFilter: 'blur(16px) saturate(180%)',
// //               borderRadius: '50px',
// //               border: '1px solid rgba(255, 255, 255, 0.25)',
// //               boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //               transition: 'all 0.3s ease'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
// //               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
// //               e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
// //               e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
// //               e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
// //             }}
// //             >
// //               <span style={{
// //                 color: '#FFFFFF',
// //                 fontSize: '15px',
// //                 fontWeight: '600',
// //                 letterSpacing: '0.3px',
// //                 textShadow: '0 2px 8px rgba(0,0,0,0.3)',
// //                 flex: 1,
// //                 textAlign: 'center'
// //               }}>
// //                 {item.name}
// //               </span>
// //               <span style={{
// //                 background: 'rgba(255, 255, 255, 0.2)',
// //                 color: '#FFFFFF',
// //                 fontSize: '11px',
// //                 fontWeight: '700',
// //                 padding: '4px 14px',
// //                 borderRadius: '30px',
// //                 backdropFilter: 'blur(4px)',
// //                 border: '1px solid rgba(255, 255, 255, 0.15)',
// //                 textShadow: '0 1px 4px rgba(0,0,0,0.2)',
// //                 letterSpacing: '0.3px',
// //                 whiteSpace: 'nowrap',
// //                 marginLeft: '8px'
// //               }}>
// //                 {item.count}
// //               </span>
// //             </div>

// //             {/* Top Right Accent Dot - iOS Style */}
// //             <div style={{
// //               position: 'absolute',
// //               top: '16px',
// //               right: '16px',
// //               width: '10px',
// //               height: '10px',
// //               borderRadius: '50%',
// //               background: 'rgba(255, 255, 255, 0.4)',
// //               border: '1.5px solid rgba(255, 255, 255, 0.3)',
// //               backdropFilter: 'blur(4px)'
// //             }} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardGrid;









// // components/CardGrid.jsx
// import React from 'react';

// const CardGrid = ({ categories = null, onCategoryClick = null }) => {
//   // Default categories if none provided
//   const defaultCategories = [
//     { id: 1, name: "Men Wear", count: "120 Items", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80" },
//     { id: 2, name: "Women Wear", count: "245 Items", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
//     { id: 3, name: "Kids Fashion", count: "85 Items", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80" },
//     { id: 4, name: "Accessories", count: "64 Items", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" }
//   ];

//   const data = categories || defaultCategories;

//   const handleClick = (category) => {
//     if (onCategoryClick) {
//       onCategoryClick(category);
//     } else {
//       console.log('Category clicked:', category.name);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.grid}>
//         {data.map((item) => (
//           <div 
//             key={item.id || item.name}
//             style={styles.card}
//             className="category-card"
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'translateY(-8px)';
//               e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)';
//               e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
//             }}
//             onClick={() => handleClick(item)}
//           >
//             {/* Background Image - Full Cover */}
//             <img 
//               src={item.image} 
//               alt={item.name} 
//               style={styles.image}
//               className="category-image"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.08)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             />

//             {/* Gradient Overlay */}
//             <div style={styles.overlay} />

//             {/* Category Name - Pill Button Style */}
//             <div style={styles.pillButton} className="category-pill">
//               <span style={styles.pillText}>
//                 {item.name}
//               </span>
//               <span style={styles.pillCount}>
//                 {item.count}
//               </span>
//             </div>

//             {/* Top Right Accent Dot */}
//             <div style={styles.accentDot} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: 'transparent',
//     padding: '0',
//     width: '100%',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '18px',
//     width: '100%',
//   },
//   card: {
//     position: 'relative',
//     borderRadius: '24px',
//     height: '220px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//     cursor: 'pointer',
//     transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     transform: 'translateY(0)',
//     willChange: 'transform',
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.6s ease',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.02) 100%)',
//   },
//   pillButton: {
//     position: 'absolute',
//     bottom: '20px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 'calc(100% - 32px)',
//     padding: '14px 20px',
//     background: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(16px) saturate(180%)',
//     WebkitBackdropFilter: 'blur(16px) saturate(180%)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255, 255, 255, 0.25)',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     transition: 'all 0.3s ease',
//   },
//   pillText: {
//     color: '#FFFFFF',
//     fontSize: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.3px',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//     flex: 1,
//     textAlign: 'center',
//   },
//   pillCount: {
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: '#FFFFFF',
//     fontSize: '11px',
//     fontWeight: '700',
//     padding: '4px 14px',
//     borderRadius: '30px',
//     backdropFilter: 'blur(4px)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     textShadow: '0 1px 4px rgba(0,0,0,0.2)',
//     letterSpacing: '0.3px',
//     whiteSpace: 'nowrap',
//     marginLeft: '8px',
//   },
//   accentDot: {
//     position: 'absolute',
//     top: '16px',
//     right: '16px',
//     width: '10px',
//     height: '10px',
//     borderRadius: '50%',
//     background: 'rgba(255, 255, 255, 0.4)',
//     border: '1.5px solid rgba(255, 255, 255, 0.3)',
//     backdropFilter: 'blur(4px)',
//   },
// };

// // Add hover styles
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .category-card:hover .category-image {
//     transform: scale(1.08);
//   }

//   .category-card:hover .category-pill {
//     background: rgba(255, 255, 255, 0.25) !important;
//     border-color: rgba(255, 255, 255, 0.4) !important;
//     box-shadow: 0 12px 40px rgba(0,0,0,0.2) !important;
//   }

//   @media (min-width: 768px) {
//     .category-grid {
//       gap: 20px !important;
//     }
//     .category-card {
//       height: 240px !important;
//       border-radius: 28px !important;
//     }
//     .category-pill {
//       padding: 16px 24px !important;
//       width: calc(100% - 40px) !important;
//       bottom: 24px !important;
//     }
//     .category-pill-text {
//       font-size: 17px !important;
//     }
//     .category-pill-count {
//       font-size: 12px !important;
//       padding: 4px 16px !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .category-grid {
//       gap: 12px !important;
//     }
//     .category-card {
//       height: 180px !important;
//       border-radius: 18px !important;
//     }
//     .category-pill {
//       padding: 10px 14px !important;
//       width: calc(100% - 24px) !important;
//       bottom: 14px !important;
//       border-radius: 40px !important;
//     }
//     .category-pill-text {
//       font-size: 13px !important;
//     }
//     .category-pill-count {
//       font-size: 10px !important;
//       padding: 2px 10px !important;
//     }
//     .category-accent-dot {
//       width: 8px !important;
//       height: 8px !important;
//       top: 12px !important;
//       right: 12px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .category-card {
//       height: 160px !important;
//     }
//     .category-pill {
//       padding: 8px 12px !important;
//     }
//     .category-pill-text {
//       font-size: 12px !important;
//     }
//     .category-pill-count {
//       font-size: 9px !important;
//       padding: 2px 8px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default CardGrid;


// // components/CardGrid.jsx
// import React from 'react';

// const CardGrid = ({ categories = null, onCategoryClick = null }) => {
//   const defaultCategories = [
//     { id: 1, name: "Men Wear", count: "120 Items", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80" },
//     { id: 2, name: "Women Wear", count: "245 Items", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
//     { id: 3, name: "Kids Fashion", count: "85 Items", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80" },
//     { id: 4, name: "Accessories", count: "64 Items", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80" }
//   ];

//   const data = categories || defaultCategories;

//   const handleClick = (category) => {
//     if (onCategoryClick) {
//       onCategoryClick(category);
//     } else {
//       console.log('Category clicked:', category.name);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.grid}>
//         {data.map((item) => (
//           <div 
//             key={item.id || item.name}
//             style={styles.card}
//             className="category-card"
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'translateY(-8px)';
//               e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)';
//               e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
//             }}
//             onClick={() => handleClick(item)}
//           >
//             <img 
//               src={item.image} 
//               alt={item.name} 
//               style={styles.image}
//               className="category-image"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.08)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             />

//             <div style={styles.overlay} />

//             <div style={styles.pillButton} className="category-pill">
//               <span style={styles.pillText}>
//                 {item.name}
//               </span>
//               <span style={styles.pillCount}>
//                 {item.count}
//               </span>
//             </div>

//             <div style={styles.accentDot} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: 'transparent',
//     padding: '0',
//     width: '100%',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '18px',
//     width: '100%',
//   },
//   card: {
//     position: 'relative',
//     borderRadius: '24px',
//     height: '220px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//     cursor: 'pointer',
//     transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     transform: 'translateY(0)',
//     willChange: 'transform',
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.6s ease',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.02) 100%)',
//   },
//   pillButton: {
//     position: 'absolute',
//     bottom: '20px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 'calc(100% - 32px)',
//     padding: '14px 20px',
//     background: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(16px) saturate(180%)',
//     WebkitBackdropFilter: 'blur(16px) saturate(180%)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255, 255, 255, 0.25)',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     transition: 'all 0.3s ease',
//   },
//   pillText: {
//     color: '#FFFFFF',
//     fontSize: '15px',
//     fontWeight: '600',
//     letterSpacing: '0.3px',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//     flex: 1,
//     textAlign: 'center',
//   },
//   pillCount: {
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: '#FFFFFF',
//     fontSize: '11px',
//     fontWeight: '700',
//     padding: '4px 14px',
//     borderRadius: '30px',
//     backdropFilter: 'blur(4px)',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     textShadow: '0 1px 4px rgba(0,0,0,0.2)',
//     letterSpacing: '0.3px',
//     whiteSpace: 'nowrap',
//     marginLeft: '8px',
//   },
//   accentDot: {
//     position: 'absolute',
//     top: '16px',
//     right: '16px',
//     width: '10px',
//     height: '10px',
//     borderRadius: '50%',
//     background: 'rgba(255, 255, 255, 0.4)',
//     border: '1.5px solid rgba(255, 255, 255, 0.3)',
//     backdropFilter: 'blur(4px)',
//   },
// };

// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .category-card:hover .category-image {
//     transform: scale(1.08);
//   }

//   .category-card:hover .category-pill {
//     background: rgba(255, 255, 255, 0.25) !important;
//     border-color: rgba(255, 255, 255, 0.4) !important;
//     box-shadow: 0 12px 40px rgba(0,0,0,0.2) !important;
//   }

//   @media (min-width: 768px) {
//     .category-grid {
//       gap: 20px !important;
//     }
//     .category-card {
//       height: 240px !important;
//       border-radius: 28px !important;
//     }
//     .category-pill {
//       padding: 16px 24px !important;
//       width: calc(100% - 40px) !important;
//       bottom: 24px !important;
//     }
//     .category-pill-text {
//       font-size: 17px !important;
//     }
//     .category-pill-count {
//       font-size: 12px !important;
//       padding: 4px 16px !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .category-grid {
//       gap: 12px !important;
//     }
//     .category-card {
//       height: 180px !important;
//       border-radius: 18px !important;
//     }
//     .category-pill {
//       padding: 10px 14px !important;
//       width: calc(100% - 24px) !important;
//       bottom: 14px !important;
//       border-radius: 40px !important;
//     }
//     .category-pill-text {
//       font-size: 13px !important;
//     }
//     .category-pill-count {
//       font-size: 10px !important;
//       padding: 2px 10px !important;
//     }
//     .category-accent-dot {
//       width: 8px !important;
//       height: 8px !important;
//       top: 12px !important;
//       right: 12px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .category-card {
//       height: 160px !important;
//     }
//     .category-pill {
//       padding: 8px 12px !important;
//     }
//     .category-pill-text {
//       font-size: 12px !important;
//     }
//     .category-pill-count {
//       font-size: 9px !important;
//       padding: 2px 8px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default CardGrid;


// components/CardGrid.jsx
import React from 'react';

const CardGrid = ({ categories = null, onCategoryClick = null }) => {
  const defaultCategories = [
    { id: 1, name: "Men Wear", count: "120 Items", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Women Wear", count: "245 Items", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Traditional", count: "85 Items", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Accessories", count: "64 Items", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80" }
  ];

  const data = categories || defaultCategories;

  const handleClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      console.log('Category clicked:', category.name);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {data.map((item) => (
          <div 
            key={item.id || item.name}
            style={styles.card}
            onClick={() => handleClick(item)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image - Full Cover */}
            <img 
              src={item.image} 
              alt={item.name} 
              style={styles.image}
            />

            {/* Gradient Overlay */}
            <div style={styles.overlay} />

            {/* Content */}
            <div style={styles.content}>
              <span style={styles.name}>{item.name}</span>
              <span style={styles.count}>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    padding: '0',
    width: '100%',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    width: '100%',
  },
  card: {
    position: 'relative',
    borderRadius: '12px',
    height: '160px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#F1F1F4',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.02) 100%)',
  },
  content: {
    position: 'absolute',
    bottom: '14px',
    left: '14px',
    right: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  name: {
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.3px',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  count: {
    background: 'rgba(255,255,255,0.2)',
    color: '#FFFFFF',
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 12px',
    borderRadius: '50px',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.15)',
    textShadow: '0 1px 4px rgba(0,0,0,0.2)',
    letterSpacing: '0.3px',
  },
};

export default CardGrid;