// import React from 'react';
// // Assuming you have the background image saved in your assets folder
// import propertyImage from './../assets/images/test.jpeg';

// const ProductCard = () => {
//   return (
//     // Main outer container to center the card for demonstration
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
//       {/* Product Card Container */}
//       <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[3/4]">
        
//         {/* Background Image */}
//         <img 
//           src={propertyImage} 
//           alt="Luxury Mediterranean style house with terracotta roof and flowers" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Gradient Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//         {/* Top Content: Prime Pick Badge */}
//         <div className="absolute top-5 left-5 z-10">
//           <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
//             <span className="text-yellow-500 text-xs">★</span>
//             <span className="text-gray-900 text-xs font-semibold tracking-wide">Prime Pick</span>
//           </div>
//         </div>

//         {/* Bottom Content Area */}
//         <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
          
//           {/* Price and Details Grid */}
//           <div className="grid grid-cols-2 gap-x-4 mb-5 items-end">
//             {/* Left Column: Price and Address */}
//             <div className="space-y-1">
//               <p className="text-2xl font-bold leading-none">List: $250,000</p>
//               <p className="text-sm font-light opacity-90 truncate">Harry Konigsberg's...</p>
//               <p className="text-sm font-light opacity-90 truncate">1065 AG Guillaume Briard</p>
//             </div>

//             {/* Right Column: Specs */}
//             <div className="flex justify-end gap-6 text-center">
//               {/* Area Stat */}
//               <div className="flex flex-col items-center">
//                 <div className="flex items-center gap-1 mb-1">
//                   {/* Custom Svg Icon for Living Area */}
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//                     <polyline points="9 22 9 12 15 12 15 22"></polyline>
//                   </svg>
//                   <span className="text-lg font-semibold leading-none">29m²</span>
//                 </div>
//                 <span className="text-xs font-light opacity-80">Living</span>
//               </div>

//               {/* Rooms Stat */}
//               <div className="flex flex-col items-center">
//                 <div className="flex items-center gap-1 mb-1">
//                   {/* Custom Svg Icon for Rooms */}
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                     <line x1="9" y1="3" x2="9" y2="21"></line>
//                   </svg>
//                   <span className="text-lg font-semibold leading-none">2</span>
//                 </div>
//                 <span className="text-xs font-light opacity-80">Rooms</span>
//               </div>
//             </div>
//           </div>

//           {/* Separator Line */}
//           <div className="h-px bg-white/20 mb-4" />

//           {/* Footer: Poster Info */}
//           <div className="flex items-center justify-between text-xs font-light opacity-80">
//             <div className="flex items-center gap-1">
//               <span>By</span>
//               <span className="font-medium text-white opacity-100 border-b border-white/60 pb-px">
//                 Waleed Sabir
//               </span>
//             </div>
//             <span>2 days ago</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
















// components/ProductCard.jsx
// import React from 'react';

// const ProductCard = () => {
//   // Sample product data
//   const product = {
//     name: 'Kaba & Slit Set',
//     price: 'GHS 450',
//     image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80',
//     category: 'Women Wear',
//     rating: 4.8,
//     reviews: 234
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         {/* Background Image - Full Cover */}
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           style={styles.image}
//         />

//         {/* Gradient Overlay */}
//         <div style={styles.overlay} />

//         {/* Top Badge */}
//         <div style={styles.topBadge}>
//           <div style={styles.badgeInner}>
//             <span style={styles.badgeStar}>★</span>
//             <span style={styles.badgeText}>Popular</span>
//           </div>
//         </div>

//         {/* Floating Bottom Content */}
//         <div style={styles.bottomContent}>
//           {/* Price and Rating */}
//           <div style={styles.priceRow}>
//             <div>
//               <span style={styles.price}>{product.price}</span>
//               <span style={styles.priceLabel}> / set</span>
//             </div>
//             <div style={styles.rating}>
//               <span style={styles.ratingStar}>★</span>
//               <span style={styles.ratingText}>{product.rating}</span>
//               <span style={styles.ratingCount}>({product.reviews})</span>
//             </div>
//           </div>

//           {/* Product Name */}
//           <h3 style={styles.productName}>{product.name}</h3>

//           {/* Category Tag */}
//           <div style={styles.categoryTag}>{product.category}</div>

//           {/* Action Buttons */}
//           <div style={styles.actionRow}>
//             <button style={styles.viewButton}>
//               View Details
//             </button>
//             <button style={styles.favButton}>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     backgroundColor: 'transparent',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   card: {
//     position: 'relative',
//     width: '100%',
//     maxWidth: '380px',
//     height: '500px',
//     borderRadius: '28px',
//     overflow: 'hidden',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//     cursor: 'pointer',
//     transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     transform: 'translateY(0)',
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
//   topBadge: {
//     position: 'absolute',
//     top: '16px',
//     left: '16px',
//     zIndex: 10,
//   },
//   badgeInner: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     padding: '6px 14px',
//     background: 'rgba(255, 255, 255, 0.9)',
//     backdropFilter: 'blur(12px)',
//     WebkitBackdropFilter: 'blur(12px)',
//     borderRadius: '50px',
//     boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//     border: '1px solid rgba(255,255,255,0.3)',
//   },
//   badgeStar: {
//     color: '#F59E0B',
//     fontSize: '12px',
//     fontWeight: '700',
//   },
//   badgeText: {
//     color: '#0A0F1E',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.3px',
//   },
//   bottomContent: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: '24px 24px 28px',
//     zIndex: 10,
//     background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
//   },
//   priceRow: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: '8px',
//   },
//   price: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#FFFFFF',
//     letterSpacing: '-0.5px',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//   },
//   priceLabel: {
//     fontSize: '14px',
//     color: 'rgba(255,255,255,0.7)',
//     fontWeight: '500',
//   },
//   rating: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//     padding: '4px 12px',
//     background: 'rgba(255,255,255,0.15)',
//     backdropFilter: 'blur(8px)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255,255,255,0.1)',
//   },
//   ratingStar: {
//     color: '#F59E0B',
//     fontSize: '12px',
//   },
//   ratingText: {
//     color: '#FFFFFF',
//     fontSize: '13px',
//     fontWeight: '600',
//   },
//   ratingCount: {
//     color: 'rgba(255,255,255,0.6)',
//     fontSize: '11px',
//     fontWeight: '400',
//   },
//   productName: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#FFFFFF',
//     margin: '0 0 6px 0',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//     fontFamily: 'Fraunces, serif',
//     letterSpacing: '-0.3px',
//   },
//   categoryTag: {
//     display: 'inline-block',
//     padding: '3px 12px',
//     background: 'rgba(255,255,255,0.12)',
//     backdropFilter: 'blur(8px)',
//     borderRadius: '50px',
//     color: 'rgba(255,255,255,0.8)',
//     fontSize: '11px',
//     fontWeight: '500',
//     letterSpacing: '0.3px',
//     border: '1px solid rgba(255,255,255,0.08)',
//     marginBottom: '12px',
//   },
//   actionRow: {
//     display: 'flex',
//     gap: '10px',
//     marginTop: '4px',
//   },
//   viewButton: {
//     flex: 1,
//     padding: '12px 20px',
//     background: '#FFFFFF',
//     color: '#0A0F1E',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '14px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
//   },
//   favButton: {
//     width: '48px',
//     height: '48px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'rgba(255,255,255,0.15)',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255,255,255,0.15)',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     color: '#FFFFFF',
//   },
// };

// // Add hover styles
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .product-card:hover {
//     transform: translateY(-8px) scale(1.02);
//     box-shadow: 0 16px 48px rgba(0,0,0,0.18);
//   }

//   .product-card:hover .product-image {
//     transform: scale(1.08);
//   }

//   .view-button:hover {
//     background: #F0F4FF;
//     transform: scale(1.02);
//   }

//   .fav-button:hover {
//     background: rgba(255,255,255,0.25);
//     transform: scale(1.05);
//   }

//   .fav-button:active {
//     transform: scale(0.95);
//   }

//   @media (max-width: 480px) {
//     .product-card {
//       height: 420px !important;
//       max-width: 100% !important;
//     }
//     .product-price {
//       font-size: 20px !important;
//     }
//     .product-name {
//       font-size: 17px !important;
//     }
//     .product-bottom-content {
//       padding: 20px 20px 24px !important;
//     }
//     .view-button {
//       padding: 10px 16px !important;
//       font-size: 13px !important;
//     }
//     .fav-button {
//       width: 42px !important;
//       height: 42px !important;
//     }
//     .product-rating {
//       padding: 2px 10px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default ProductCard;






// // components/ProductCard.jsx
// import React from 'react';

// const ProductCard = ({ product = null }) => {
//   // Default product data if none provided
//   const defaultProduct = {
//     name: 'Kaba & Slit Set',
//     price: 'GHS 450',
//     image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80',
//     category: 'Women Wear',
//     rating: 4.8,
//     reviews: 234,
//     description: 'Elegant Kaba & Slit set crafted from premium Ankara fabric.'
//   };

//   const data = product || defaultProduct;

//   return (
//     <div style={styles.container}>
//       <div style={styles.card} className="product-card">
//         {/* Background Image - Full Cover */}
//         <img 
//           src={data.image} 
//           alt={data.name} 
//           style={styles.image}
//           className="product-image"
//         />

//         {/* Gradient Overlay */}
//         <div style={styles.overlay} />

//         {/* Top Badge */}
//         <div style={styles.topBadge}>
//           <div style={styles.badgeInner}>
//             <span style={styles.badgeStar}>★</span>
//             <span style={styles.badgeText}>Popular</span>
//           </div>
//         </div>

//         {/* Floating Bottom Content */}
//         <div style={styles.bottomContent} className="product-bottom-content">
//           {/* Price and Rating */}
//           <div style={styles.priceRow}>
//             <div>
//               <span style={styles.price} className="product-price">{data.price}</span>
//               <span style={styles.priceLabel}> / set</span>
//             </div>
//             <div style={styles.rating} className="product-rating">
//               <span style={styles.ratingStar}>★</span>
//               <span style={styles.ratingText}>{data.rating}</span>
//               <span style={styles.ratingCount}>({data.reviews})</span>
//             </div>
//           </div>

//           {/* Product Name */}
//           <h3 style={styles.productName} className="product-name">{data.name}</h3>

//           {/* Category Tag */}
//           <div style={styles.categoryTag}>{data.category}</div>

//           {/* Action Buttons */}
//           <div style={styles.actionRow}>
//             <button style={styles.viewButton} className="view-button">
//               View Details
//             </button>
//             <button style={styles.favButton} className="fav-button">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     backgroundColor: 'transparent',
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
//   },
//   card: {
//     position: 'relative',
//     width: '100%',
//     maxWidth: '380px',
//     height: '500px',
//     borderRadius: '28px',
//     overflow: 'hidden',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//     cursor: 'pointer',
//     transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     transform: 'translateY(0)',
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
//   topBadge: {
//     position: 'absolute',
//     top: '16px',
//     left: '16px',
//     zIndex: 10,
//   },
//   badgeInner: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     padding: '6px 14px',
//     background: 'rgba(255, 255, 255, 0.9)',
//     backdropFilter: 'blur(12px)',
//     WebkitBackdropFilter: 'blur(12px)',
//     borderRadius: '50px',
//     boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//     border: '1px solid rgba(255,255,255,0.3)',
//   },
//   badgeStar: {
//     color: '#F59E0B',
//     fontSize: '12px',
//     fontWeight: '700',
//   },
//   badgeText: {
//     color: '#0A0F1E',
//     fontSize: '11px',
//     fontWeight: '600',
//     letterSpacing: '0.3px',
//   },
//   bottomContent: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: '24px 24px 28px',
//     zIndex: 10,
//     background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
//   },
//   priceRow: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: '8px',
//   },
//   price: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#FFFFFF',
//     letterSpacing: '-0.5px',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//   },
//   priceLabel: {
//     fontSize: '14px',
//     color: 'rgba(255,255,255,0.7)',
//     fontWeight: '500',
//   },
//   rating: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//     padding: '4px 12px',
//     background: 'rgba(255,255,255,0.15)',
//     backdropFilter: 'blur(8px)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255,255,255,0.1)',
//   },
//   ratingStar: {
//     color: '#F59E0B',
//     fontSize: '12px',
//   },
//   ratingText: {
//     color: '#FFFFFF',
//     fontSize: '13px',
//     fontWeight: '600',
//   },
//   ratingCount: {
//     color: 'rgba(255,255,255,0.6)',
//     fontSize: '11px',
//     fontWeight: '400',
//   },
//   productName: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#FFFFFF',
//     margin: '0 0 6px 0',
//     textShadow: '0 2px 8px rgba(0,0,0,0.3)',
//     fontFamily: 'Fraunces, serif',
//     letterSpacing: '-0.3px',
//   },
//   categoryTag: {
//     display: 'inline-block',
//     padding: '3px 12px',
//     background: 'rgba(255,255,255,0.12)',
//     backdropFilter: 'blur(8px)',
//     borderRadius: '50px',
//     color: 'rgba(255,255,255,0.8)',
//     fontSize: '11px',
//     fontWeight: '500',
//     letterSpacing: '0.3px',
//     border: '1px solid rgba(255,255,255,0.08)',
//     marginBottom: '12px',
//   },
//   actionRow: {
//     display: 'flex',
//     gap: '10px',
//     marginTop: '4px',
//   },
//   viewButton: {
//     flex: 1,
//     padding: '12px 20px',
//     background: '#FFFFFF',
//     color: '#0A0F1E',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '14px',
//     fontWeight: '600',
//     fontFamily: 'Inter, sans-serif',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
//   },
//   favButton: {
//     width: '48px',
//     height: '48px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'rgba(255,255,255,0.15)',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255,255,255,0.15)',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     color: '#FFFFFF',
//   },
// };

// // Add hover styles
// const styleSheet = document.createElement("style");
// styleSheet.textContent = `
//   .product-card:hover {
//     transform: translateY(-8px) scale(1.02);
//     box-shadow: 0 16px 48px rgba(0,0,0,0.18);
//   }

//   .product-card:hover .product-image {
//     transform: scale(1.08);
//   }

//   .view-button:hover {
//     background: #F0F4FF;
//     transform: scale(1.02);
//   }

//   .fav-button:hover {
//     background: rgba(255,255,255,0.25);
//     transform: scale(1.05);
//   }

//   .fav-button:active {
//     transform: scale(0.95);
//   }

//   @media (min-width: 768px) {
//     .product-card {
//       max-width: 420px !important;
//       height: 540px !important;
//     }
//     .product-price {
//       font-size: 28px !important;
//     }
//     .product-name {
//       font-size: 22px !important;
//     }
//   }

//   @media (max-width: 480px) {
//     .product-card {
//       height: 420px !important;
//       max-width: 100% !important;
//       border-radius: 20px !important;
//     }
//     .product-price {
//       font-size: 20px !important;
//     }
//     .product-name {
//       font-size: 17px !important;
//     }
//     .product-bottom-content {
//       padding: 20px 20px 24px !important;
//     }
//     .view-button {
//       padding: 10px 16px !important;
//       font-size: 13px !important;
//     }
//     .fav-button {
//       width: 42px !important;
//       height: 42px !important;
//     }
//     .product-rating {
//       padding: 2px 10px !important;
//     }
//     .top-badge {
//       top: 12px !important;
//       left: 12px !important;
//     }
//     .badge-inner {
//       padding: 4px 12px !important;
//     }
//     .badge-text {
//       font-size: 10px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .product-card {
//       height: 380px !important;
//     }
//     .product-price {
//       font-size: 18px !important;
//     }
//     .product-name {
//       font-size: 15px !important;
//     }
//     .view-button {
//       font-size: 12px !important;
//       padding: 8px 14px !important;
//     }
//     .fav-button {
//       width: 38px !important;
//       height: 38px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default ProductCard;


// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product = null }) => {
  const defaultProduct = {
    name: 'Kaba & Slit Set',
    price: 'GHS 450',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80',
    category: 'Women Wear',
    rating: 4.8,
    reviews: 234,
    description: 'Elegant Kaba & Slit set crafted from premium Ankara fabric.'
  };

  const data = product || defaultProduct;

  return (
    <div style={styles.container}>
      <div style={styles.card} className="product-card">
        <img 
          src={data.image} 
          alt={data.name} 
          style={styles.image}
          className="product-image"
        />

        <div style={styles.overlay} />

        <div style={styles.topBadge}>
          <div style={styles.badgeInner}>
            <span style={styles.badgeStar}>★</span>
            <span style={styles.badgeText}>Popular</span>
          </div>
        </div>

        <div style={styles.bottomContent} className="product-bottom-content">
          <div style={styles.priceRow}>
            <div>
              <span style={styles.price} className="product-price">{data.price}</span>
              <span style={styles.priceLabel}> / set</span>
            </div>
            <div style={styles.rating} className="product-rating">
              <span style={styles.ratingStar}>★</span>
              <span style={styles.ratingText}>{data.rating}</span>
              <span style={styles.ratingCount}>({data.reviews})</span>
            </div>
          </div>

          <h3 style={styles.productName} className="product-name">{data.name}</h3>

          <div style={styles.categoryTag}>{data.category}</div>

          <div style={styles.actionRow}>
            <button style={styles.viewButton} className="view-button">
              View Details
            </button>
            <button style={styles.favButton} className="fav-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  card: {
    position: 'relative',
    width: '100%',
    maxWidth: '380px',
    height: '500px',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: 'translateY(0)',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.02) 100%)',
  },
  topBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    zIndex: 10,
  },
  badgeInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '50px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  badgeStar: {
    color: '#F59E0B',
    fontSize: '12px',
    fontWeight: '700',
  },
  badgeText: {
    color: '#0A0F1E',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.3px',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px 24px 28px',
    zIndex: 10,
    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  price: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.5px',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  priceLabel: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 12px',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(8px)',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  ratingStar: {
    color: '#F59E0B',
    fontSize: '12px',
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '600',
  },
  ratingCount: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '11px',
    fontWeight: '400',
  },
  productName: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#FFFFFF',
    margin: '0 0 6px 0',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
    fontFamily: 'Fraunces, serif',
    letterSpacing: '-0.3px',
  },
  categoryTag: {
    display: 'inline-block',
    padding: '3px 12px',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
    borderRadius: '50px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '0.3px',
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '12px',
  },
  actionRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '4px',
  },
  viewButton: {
    flex: 1,
    padding: '12px 20px',
    background: '#FFFFFF',
    color: '#0A0F1E',
    border: 'none',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: 'Inter, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
  favButton: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#FFFFFF',
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .product-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px rgba(0,0,0,0.18);
  }

  .product-card:hover .product-image {
    transform: scale(1.08);
  }

  .view-button:hover {
    background: #F0F4FF;
    transform: scale(1.02);
  }

  .fav-button:hover {
    background: rgba(255,255,255,0.25);
    transform: scale(1.05);
  }

  .fav-button:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    .product-card {
      max-width: 420px !important;
      height: 540px !important;
    }
    .product-price {
      font-size: 28px !important;
    }
    .product-name {
      font-size: 22px !important;
    }
  }

  @media (max-width: 480px) {
    .product-card {
      height: 420px !important;
      max-width: 100% !important;
      border-radius: 20px !important;
    }
    .product-price {
      font-size: 20px !important;
    }
    .product-name {
      font-size: 17px !important;
    }
    .product-bottom-content {
      padding: 20px 20px 24px !important;
    }
    .view-button {
      padding: 10px 16px !important;
      font-size: 13px !important;
    }
    .fav-button {
      width: 42px !important;
      height: 42px !important;
    }
    .product-rating {
      padding: 2px 10px !important;
    }
    .top-badge {
      top: 12px !important;
      left: 12px !important;
    }
    .badge-inner {
      padding: 4px 12px !important;
    }
    .badge-text {
      font-size: 10px !important;
    }
  }

  @media (max-width: 360px) {
    .product-card {
      height: 380px !important;
    }
    .product-price {
      font-size: 18px !important;
    }
    .product-name {
      font-size: 15px !important;
    }
    .view-button {
      font-size: 12px !important;
      padding: 8px 14px !important;
    }
    .fav-button {
      width: 38px !important;
      height: 38px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default ProductCard;