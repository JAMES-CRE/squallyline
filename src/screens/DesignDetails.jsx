// // screens/DesignDetails.jsx
// import React, { useState } from 'react';
// import {
//   Home,
//   Ruler,
//   Grid3x3,
//   Package,
//   User,
//   Heart,
//   ArrowLeft,
//   ChevronRight,
//   Tag,
//   Scissors,
//   ShoppingBag,
//   Calendar,
//   Star,
//   Share2,
//   Clock,
// } from 'lucide-react';
// import { useNavigate, useParams } from 'react-router-dom';

// const DesignDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [isFavorite, setIsFavorite] = useState(false);

//   // Sample design data - would come from API/props based on id
//   const design = {
//     id: parseInt(id) || 1,
//     name: 'Kaba & Slit',
//     category: 'Traditional',
//     price: 'GHS 450',
//     fabric: 'Kente',
//     image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80',
//     description: 'Elegant Kaba & Slit set crafted from premium Kente fabric. Perfect for special occasions and cultural events. This design features intricate patterns and a comfortable fit that celebrates African heritage.',
//     rating: 4.8,
//     reviews: 234,
//     estimatedTime: '2-3 weeks',
//     availableSizes: ['S', 'M', 'L', 'XL'],
//   };

//   const toggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//   };

//   const handleOrder = () => {
//     navigate('/placeorder');
//   };

//   const handleBooking = () => {
//     navigate('/bookings');
//   };

//   const handleBack = () => {
//     navigate('/portfolio');
//   };

//   const handleShare = () => {
//     // Share functionality
//     console.log('Share design');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={handleBack} style={styles.backButton}>
//           <ArrowLeft size={18} /> Back to Portfolio
//         </button>

//         {/* Design Image */}
//         <div style={styles.designImage}>
//           <img 
//             src={design.image} 
//             alt={design.name} 
//             style={styles.image}
//           />
//           <button 
//             onClick={toggleFavorite}
//             style={{
//               ...styles.favButton,
//               ...(isFavorite ? styles.favButtonActive : {}),
//             }}
//           >
//             <Heart 
//               size={20} 
//               color={isFavorite ? '#FF4444' : '#FFFFFF'} 
//               fill={isFavorite ? '#FF4444' : 'none'}
//             />
//           </button>
//           <button onClick={handleShare} style={styles.shareButton}>
//             <Share2 size={18} color="#FFFFFF" />
//           </button>
//         </div>

//         {/* Design Info */}
//         <div style={styles.designInfo}>
//           <div style={styles.designHeader}>
//             <div>
//               <h1 style={styles.designName}>{design.name}</h1>
//               <div style={styles.categoryBadge}>{design.category}</div>
//             </div>
//             <button 
//               onClick={toggleFavorite}
//               style={{
//                 ...styles.favButtonSmall,
//                 ...(isFavorite ? styles.favButtonSmallActive : {}),
//               }}
//             >
//               <Heart 
//                 size={18} 
//                 color={isFavorite ? '#FF4444' : '#8E8EA0'} 
//                 fill={isFavorite ? '#FF4444' : 'none'}
//               />
//             </button>
//           </div>

//           {/* Rating */}
//           <div style={styles.ratingRow}>
//             <Star size={16} color="#F59E0B" fill="#F59E0B" />
//             <span style={styles.ratingText}>{design.rating}</span>
//             <span style={styles.ratingCount}>({design.reviews} reviews)</span>
//           </div>

//           {/* Divider */}
//           <div style={styles.divider} />

//           {/* Design Specs */}
//           <div style={styles.specsGrid}>
//             <div style={styles.specItem}>
//               <span style={styles.specLabel}>Price</span>
//               <span style={styles.specValue}>{design.price}</span>
//             </div>
//             <div style={styles.specItem}>
//               <span style={styles.specLabel}>Fabric</span>
//               <span style={styles.specValue}>{design.fabric}</span>
//             </div>
//             <div style={styles.specItem}>
//               <span style={styles.specLabel}>Estimated Time</span>
//               <span style={styles.specValue}>{design.estimatedTime}</span>
//             </div>
//             <div style={styles.specItem}>
//               <span style={styles.specLabel}>Sizes</span>
//               <span style={styles.specValue}>{design.availableSizes.join(', ')}</span>
//             </div>
//           </div>

//           {/* Divider */}
//           <div style={styles.divider} />

//           {/* Description */}
//           <div style={styles.description}>
//             <h4 style={styles.descriptionTitle}>About this design</h4>
//             <p style={styles.descriptionText}>{design.description}</p>
//           </div>

//           {/* Divider */}
//           <div style={styles.divider} />

//           {/* Action Buttons */}
//           <div style={styles.actionButtons}>
//             <button onClick={handleOrder} style={styles.primaryButton}>
//               <ShoppingBag size={18} /> Order This Design
//             </button>
//             <button onClick={handleBooking} style={styles.secondaryButton}>
//               <Calendar size={18} /> Book a Fitting Instead
//             </button>
//           </div>
//         </div>
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
//           <span style={{...styles.navIconWrap, ...styles.navIconWrapActive}}>
//             <Grid3x3 size={20} color="#FFFFFF" />
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
//           <span style={styles.navIconWrap}>
//             <User size={20} color="#8E8EA0" />
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
//     maxWidth: '1000px', // ← Increased from 540px
//     margin: '0 auto',
//   },
//   specsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // ← Responsive
//     gap: '12px',
//   },
  
//   backButton: {
//     background: 'none',
//     border: 'none',
//     color: '#5C7A9A',
//     fontSize: '14px',
//     cursor: 'pointer',
//     padding: '0',
//     marginBottom: '16px',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'color 0.2s',
//   },
//   designImage: {
//     position: 'relative',
//     height: '280px',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     marginBottom: '20px',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   favButton: {
//     position: 'absolute',
//     top: '12px',
//     right: '12px',
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255,255,255,0.15)',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//   },
//   favButtonActive: {
//     backgroundColor: 'rgba(255,68,68,0.2)',
//   },
//   shareButton: {
//     position: 'absolute',
//     top: '12px',
//     left: '12px',
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     backdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255,255,255,0.15)',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//   },
//   designInfo: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     padding: '24px',
//     border: '1px solid #F1F1F4',
//   },
//   designHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: '8px',
//   },
//   designName: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     margin: 0,
//     fontFamily: 'Fraunces, serif',
//   },
//   categoryBadge: {
//     display: 'inline-block',
//     padding: '4px 14px',
//     backgroundColor: '#E8F4FB',
//     color: '#1A6FD4',
//     fontSize: '12px',
//     fontWeight: '600',
//     borderRadius: '50px',
//     marginTop: '4px',
//   },
//   favButtonSmall: {
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     border: '1px solid #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     flexShrink: 0,
//   },
//   favButtonSmallActive: {
//     borderColor: '#FF4444',
//     backgroundColor: '#FFF0F0',
//   },
//   ratingRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//     marginBottom: '16px',
//   },
//   ratingText: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   ratingCount: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//   },
//   divider: {
//     height: '1px',
//     backgroundColor: '#F1F1F4',
//     margin: '16px 0',
//   },
  
//   specItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '2px',
//   },
//   specLabel: {
//     fontSize: '11px',
//     fontWeight: '500',
//     color: '#8E8EA0',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//   },
//   specValue: {
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   description: {
//     marginTop: '4px',
//   },
//   descriptionTitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//     margin: '0 0 6px 0',
//   },
//   descriptionText: {
//     fontSize: '14px',
//     lineHeight: '1.7',
//     color: '#5C7A9A',
//     margin: 0,
//   },
//   actionButtons: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   primaryButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '15px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
//   },
//   secondaryButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: 'transparent',
//     color: '#0A0F1E',
//     fontSize: '15px',
//     fontWeight: '600',
//     border: '1.5px solid #DCE4EE',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     fontFamily: 'Inter, sans-serif',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
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
//   .design-details-back-button:hover {
//     color: #1A6FD4;
//   }

//   .design-details-fav-button:hover {
//     background-color: rgba(0,0,0,0.6);
//   }

//   .design-details-share-button:hover {
//     background-color: rgba(0,0,0,0.6);
//   }

//   .design-details-fav-button-small:hover {
//     border-color: #1A6FD4;
//     background-color: #F5F9FF;
//   }

//   .design-details-primary-button:hover {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 24px rgba(26,111,212,0.3);
//   }

//   .design-details-secondary-button:hover {
//     border-color: #1A6FD4;
//     background-color: #F5F9FF;
//   }

//   @media (max-width: 480px) {
//     .design-details-design-name {
//       font-size: 20px !important;
//     }
//     .design-details-back-button {
//       font-size: 13px !important;
//     }
//     .design-details-design-image {
//       height: 220px !important;
//     }
//     .design-details-design-info {
//       padding: 18px !important;
//     }
//     .design-details-specs-grid {
//       grid-template-columns: 1fr 1fr !important;
//     }
//     .design-details-primary-button {
//       font-size: 14px !important;
//       padding: 13px !important;
//     }
//     .design-details-secondary-button {
//       font-size: 14px !important;
//       padding: 13px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .design-details-design-name {
//       font-size: 18px !important;
//     }
//     .design-details-design-image {
//       height: 190px !important;
//     }
//     .design-details-design-info {
//       padding: 14px !important;
//     }
//     .design-details-specs-grid {
//       grid-template-columns: 1fr 1fr !important;
//       gap: 8px !important;
//     }
//     .design-details-spec-value {
//       font-size: 13px !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default DesignDetails;

// screens/DesignDetails.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  Heart,
  ArrowLeft,
  ChevronRight,
  Tag,
  Scissors,
  ShoppingBag,
  Calendar,
  Star,
  Share2,
  Clock,
} from 'lucide-react';

const DesignDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { colors } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  const design = {
    id: parseInt(id) || 1,
    name: 'Kaba & Slit',
    category: 'Traditional',
    price: 'GHS 450',
    fabric: 'Kente',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80',
    description: 'Elegant Kaba & Slit set crafted from premium Kente fabric. Perfect for special occasions and cultural events. This design features intricate patterns and a comfortable fit that celebrates African heritage.',
    rating: 4.8,
    reviews: 234,
    estimatedTime: '2-3 weeks',
    availableSizes: ['S', 'M', 'L', 'XL'],
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleOrder = () => {
    navigate('/placeorder');
  };

  const handleBooking = () => {
    navigate('/bookings');
  };

  const handleBack = () => {
    navigate('/portfolio');
  };

  const handleShare = () => {
    console.log('Share design');
  };

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      <main style={styles.main}>
        {/* Back Button */}
        <button 
          onClick={handleBack} 
          style={{
            ...styles.backButton,
            color: colors.secondaryText,
          }}
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>

        {/* Design Image */}
        <div style={styles.designImage}>
          <img 
            src={design.image} 
            alt={design.name} 
            style={styles.image}
          />
          <button 
            onClick={toggleFavorite}
            style={{
              ...styles.favButton,
              ...(isFavorite ? styles.favButtonActive : {}),
            }}
          >
            <Heart 
              size={20} 
              color={isFavorite ? '#FF4444' : '#FFFFFF'} 
              fill={isFavorite ? '#FF4444' : 'none'}
            />
          </button>
          <button onClick={handleShare} style={styles.shareButton}>
            <Share2 size={18} color="#FFFFFF" />
          </button>
        </div>

        {/* Design Info */}
        <div style={{
          ...styles.designInfo,
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
        }}>
          <div style={styles.designHeader}>
            <div>
              <h1 style={{
                ...styles.designName,
                color: colors.heading,
              }}>
                {design.name}
              </h1>
              <div style={{
                ...styles.categoryBadge,
                backgroundColor: colors.primaryLight,
                color: colors.primary,
              }}>
                {design.category}
              </div>
            </div>
            <button 
              onClick={toggleFavorite}
              style={{
                ...styles.favButtonSmall,
                borderColor: isFavorite ? '#FF4444' : colors.border,
                backgroundColor: isFavorite ? '#FFF0F0' : colors.cardBg,
              }}
            >
              <Heart 
                size={18} 
                color={isFavorite ? '#FF4444' : colors.secondaryText} 
                fill={isFavorite ? '#FF4444' : 'none'}
              />
            </button>
          </div>

          {/* Rating */}
          <div style={styles.ratingRow}>
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <span style={{
              ...styles.ratingText,
              color: colors.heading,
            }}>
              {design.rating}
            </span>
            <span style={{
              ...styles.ratingCount,
              color: colors.secondaryText,
            }}>
              ({design.reviews} reviews)
            </span>
          </div>

          <div style={{
            ...styles.divider,
            backgroundColor: colors.border,
          }} />

          {/* Design Specs */}
          <div style={styles.specsGrid}>
            <div style={styles.specItem}>
              <span style={{
                ...styles.specLabel,
                color: colors.secondaryText,
              }}>
                Price
              </span>
              <span style={{
                ...styles.specValue,
                color: colors.heading,
              }}>
                {design.price}
              </span>
            </div>
            <div style={styles.specItem}>
              <span style={{
                ...styles.specLabel,
                color: colors.secondaryText,
              }}>
                Fabric
              </span>
              <span style={{
                ...styles.specValue,
                color: colors.heading,
              }}>
                {design.fabric}
              </span>
            </div>
            <div style={styles.specItem}>
              <span style={{
                ...styles.specLabel,
                color: colors.secondaryText,
              }}>
                Estimated Time
              </span>
              <span style={{
                ...styles.specValue,
                color: colors.heading,
              }}>
                {design.estimatedTime}
              </span>
            </div>
            <div style={styles.specItem}>
              <span style={{
                ...styles.specLabel,
                color: colors.secondaryText,
              }}>
                Sizes
              </span>
              <span style={{
                ...styles.specValue,
                color: colors.heading,
              }}>
                {design.availableSizes.join(', ')}
              </span>
            </div>
          </div>

          <div style={{
            ...styles.divider,
            backgroundColor: colors.border,
          }} />

          {/* Description */}
          <div style={styles.description}>
            <h4 style={{
              ...styles.descriptionTitle,
              color: colors.heading,
            }}>
              About this design
            </h4>
            <p style={{
              ...styles.descriptionText,
              color: colors.secondaryText,
            }}>
              {design.description}
            </p>
          </div>

          <div style={{
            ...styles.divider,
            backgroundColor: colors.border,
          }} />

          {/* Action Buttons */}
          <div style={styles.actionButtons}>
            <button 
              onClick={handleOrder} 
              style={{
                ...styles.primaryButton,
                backgroundColor: colors.primary,
                color: colors.btnText,
              }}
            >
              <ShoppingBag size={18} /> Order This Design
            </button>
            <button 
              onClick={handleBooking} 
              style={{
                ...styles.secondaryButton,
                borderColor: colors.border,
                color: colors.text,
              }}
            >
              <Calendar size={18} /> Book a Fitting Instead
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
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
          <span style={{...styles.navIconWrap, ...styles.navIconWrapActive}}>
            <Grid3x3 size={20} color="#FFFFFF" />
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
          <span style={styles.navIconWrap}>
            <User size={20} color={colors.navText} />
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
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
  },
  designImage: {
    position: 'relative',
    height: '280px',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  favButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  favButtonActive: {
    backgroundColor: 'rgba(255,68,68,0.2)',
  },
  shareButton: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  designInfo: {
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid',
  },
  designHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
  },
  designName: {
    fontSize: '24px',
    fontWeight: '700',
    margin: 0,
    fontFamily: 'Fraunces, serif',
  },
  categoryBadge: {
    display: 'inline-block',
    padding: '4px 14px',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '50px',
    marginTop: '4px',
  },
  favButtonSmall: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    flexShrink: 0,
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '16px',
  },
  ratingText: {
    fontSize: '14px',
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: '13px',
  },
  divider: {
    height: '1px',
    margin: '16px 0',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px',
  },
  specItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  specLabel: {
    fontSize: '11px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  specValue: {
    fontSize: '15px',
    fontWeight: '600',
  },
  description: {
    marginTop: '4px',
  },
  descriptionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 6px 0',
  },
  descriptionText: {
    fontSize: '14px',
    lineHeight: '1.7',
    margin: 0,
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  primaryButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(26, 86, 219, 0.2)',
  },
  secondaryButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    fontSize: '15px',
    fontWeight: '600',
    border: '1.5px solid',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  bottomNav: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 48px)',
    maxWidth: '342px',
    backgroundColor: '#0F172A',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.06)',
    boxShadow: '0 8px 32px rgba(15, 23, 42, 0.4)',
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
    backgroundColor: '#1A56DB',
  },
};

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .design-details-back-button:hover {
    color: #1A56DB !important;
  }

  .design-details-fav-button:hover {
    background-color: rgba(0,0,0,0.6) !important;
  }

  .design-details-share-button:hover {
    background-color: rgba(0,0,0,0.6) !important;
  }

  .design-details-fav-button-small:hover {
    border-color: #1A56DB !important;
    background-color: #DBEAFE !important;
  }

  .design-details-primary-button:hover {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  .design-details-secondary-button:hover {
    border-color: #1A56DB !important;
    background-color: #F5F9FF !important;
  }

  @media (max-width: 480px) {
    .design-details-design-name {
      font-size: 20px !important;
    }
    .design-details-back-button {
      font-size: 13px !important;
    }
    .design-details-design-image {
      height: 220px !important;
    }
    .design-details-design-info {
      padding: 18px !important;
    }
    .design-details-specs-grid {
      grid-template-columns: 1fr 1fr !important;
    }
    .design-details-primary-button {
      font-size: 14px !important;
      padding: 13px !important;
    }
    .design-details-secondary-button {
      font-size: 14px !important;
      padding: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .design-details-design-name {
      font-size: 18px !important;
    }
    .design-details-design-image {
      height: 190px !important;
    }
    .design-details-design-info {
      padding: 14px !important;
    }
    .design-details-specs-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 8px !important;
    }
    .design-details-spec-value {
      font-size: 13px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default DesignDetails;