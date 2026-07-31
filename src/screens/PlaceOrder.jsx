// // screens/PlaceOrder.jsx
// import React, { useState } from 'react';
// import {
//   Home,
//   Ruler,
//   Grid3x3,
//   Package,
//   User,
//   Upload,
//   Camera,
//   CheckCircle,
//   AlertCircle,
//   ArrowLeft,
//   ShoppingBag,
//   FileText,
//   Plus,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrder = () => {
//   const navigate = useNavigate();
//   const [fabricOption, setFabricOption] = useState('customer');
//   const [notes, setNotes] = useState('');
//   const [hasMeasurements, setHasMeasurements] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const orderData = {
//     designName: 'Kaba & Slit',
//     fabric: 'Kente',
//     price: 'GHS 450',
//     image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80',
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUploadedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmitOrder = () => {
//     console.log('Order submitted:', {
//       design: orderData,
//       fabricOption,
//       notes,
//       hasMeasurements,
//       uploadedImage,
//     });
//     navigate('/tracking');
//   };

//   const handleAddMeasurements = () => {
//     navigate('/measurements');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={() => navigate('/portfolio')} style={styles.backButton}>
//           <ArrowLeft size={18} /> Back to Designs
//         </button>

//         {/* Page Header */}
//         <div style={styles.pageHeader}>
//           <span style={styles.eyebrow}>New Order</span>
//           <h1 style={styles.pageTitle}>Place Order</h1>
//           <p style={styles.pageSubtitle}>
//             Review the details before sending to the tailor.
//           </p>
//         </div>

//         {/* Design Card */}
//         <div style={styles.designCard}>
//           <div style={styles.designThumb}>
//             <img 
//               src={orderData.image} 
//               alt={orderData.designName} 
//               style={styles.designImage}
//             />
//           </div>
//           <div style={styles.designInfo}>
//             <div style={styles.designName}>{orderData.designName}</div>
//             <div style={styles.designDetails}>
//               {orderData.fabric} · {orderData.price}
//             </div>
//           </div>
//         </div>

//         {/* Measurements */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Measurements</label>
//           <div style={styles.measurementCard}>
//             {hasMeasurements ? (
//               <div style={styles.measurementsStatus}>
//                 <CheckCircle size={20} color="#22C55E" />
//                 <span style={styles.measurementsText}>Measurements saved</span>
//                 <button style={styles.editButton}>Edit</button>
//               </div>
//             ) : (
//               <div style={styles.measurementsMissing}>
//                 <AlertCircle size={20} color="#EF4444" />
//                 <span style={styles.measurementsMissingText}>
//                   No saved measurements yet.
//                 </span>
//                 <button onClick={handleAddMeasurements} style={styles.addButton}>
//                   <Plus size={16} /> Add measurements
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Fabric Selection */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Fabric</label>
//           <select
//             value={fabricOption}
//             onChange={(e) => setFabricOption(e.target.value)}
//             style={styles.select}
//           >
//             <option value="customer">Customer will provide fabric</option>
//             <option value="tailor">Tailor sources fabric (+cost)</option>
//           </select>
//         </div>

//         {/* Image Upload */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Upload fabric image (optional)</label>
//           <div style={styles.uploadArea}>
//             {uploadedImage ? (
//               <div style={styles.uploadPreview}>
//                 <img 
//                   src={uploadedImage} 
//                   alt="Fabric preview" 
//                   style={styles.uploadPreviewImage}
//                 />
//                 <button 
//                   onClick={() => setUploadedImage(null)}
//                   style={styles.removeImageButton}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ) : (
//               <label style={styles.uploadLabel}>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={styles.uploadInput}
//                 />
//                 <Camera size={32} color="#8E8EA0" />
//                 <span>Tap to upload photo</span>
//                 <span style={styles.uploadHint}>JPG, PNG, WEBP (max 5MB)</span>
//               </label>
//             )}
//           </div>
//         </div>

//         {/* Notes */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>
//             <FileText size={16} color="#5C7A9A" style={styles.labelIcon} />
//             Notes for the tailor
//           </label>
//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             placeholder="Any specific styling requests..."
//             style={styles.textarea}
//             rows="3"
//           />
//         </div>

//         {/* Submit Button */}
//         <button onClick={handleSubmitOrder} style={styles.submitButton}>
//           <ShoppingBag size={18} /> Submit Order
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
//           <span style={{...styles.navIconWrap, ...styles.navIconWrapActive}}>
//             <Package size={20} color="#FFFFFF" />
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
//     maxWidth: '800px', 
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
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
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
//   pageSubtitle: {
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: 0,
//     lineHeight: 1.5,
//   },
//   designCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '16px',
//     border: '1px solid #F1F1F4',
//     marginBottom: '16px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '14px',
//   },
//   designThumb: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     flexShrink: 0,
//     backgroundColor: '#EADFC2',
//   },
//   designImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   designInfo: {
//     flex: 1,
//   },
//   designName: {
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   designDetails: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//   },
//   formGroup: {
//     marginBottom: '16px',
//   },
//   label: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//     marginBottom: '8px',
//   },
//   labelIcon: {
//     opacity: 0.7,
//   },
//   measurementCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '14px 16px',
//     border: '1px solid #F1F1F4',
//   },
//   measurementsStatus: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   measurementsText: {
//     fontSize: '14px',
//     color: '#22C55E',
//     flex: 1,
//   },
//   editButton: {
//     padding: '4px 14px',
//     borderRadius: '6px',
//     border: '1px solid #DCE4EE',
//     backgroundColor: 'transparent',
//     color: '#5C7A9A',
//     fontSize: '12px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   measurementsMissing: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     flexWrap: 'wrap',
//   },
//   measurementsMissingText: {
//     fontSize: '14px',
//     color: '#EF4444',
//     flex: 1,
//   },
//   addButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
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
//   select: {
//     width: '100%',
//     padding: '12px 16px',
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
//   uploadArea: {
//     borderRadius: '12px',
//     border: '2px dashed #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     padding: '24px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     minHeight: '120px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   uploadLabel: {
//     cursor: 'pointer',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '6px',
//     color: '#8E8EA0',
//     fontSize: '13px',
//     width: '100%',
//   },
//   uploadInput: {
//     display: 'none',
//   },
//   uploadHint: {
//     fontSize: '11px',
//     color: '#B8B8C8',
//   },
//   uploadPreview: {
//     position: 'relative',
//     width: '100%',
//     maxWidth: '200px',
//     margin: '0 auto',
//   },
//   uploadPreviewImage: {
//     width: '100%',
//     height: '120px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//   },
//   removeImageButton: {
//     position: 'absolute',
//     top: '4px',
//     right: '4px',
//     padding: '4px 10px',
//     borderRadius: '6px',
//     border: 'none',
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     color: '#FFFFFF',
//     fontSize: '11px',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'opacity 0.2s',
//   },
//   textarea: {
//     width: '100%',
//     padding: '12px 16px',
//     borderRadius: '10px',
//     border: '1.5px solid #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     color: '#0A0F1E',
//     fontSize: '14px',
//     fontFamily: 'Inter, sans-serif',
//     resize: 'vertical',
//     outline: 'none',
//     transition: 'border-color 0.2s',
//     boxSizing: 'border-box',
//     minHeight: '80px',
//   },
//   submitButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '16px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//     marginTop: '8px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
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
//   .place-order-back-button:hover {
//     color: #1A6FD4;
//   }

//   .place-order-edit-button:hover {
//     background-color: #F5F9FF;
//     border-color: #1A6FD4;
//   }

//   .place-order-add-button:hover {
//     background-color: #1557A8;
//   }

//   .place-order-select:focus {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   .place-order-textarea:focus {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   .place-order-upload-area:hover {
//     border-color: #1A6FD4;
//     background-color: #F5F9FF;
//   }

//   .place-order-remove-image-button:hover {
//     opacity: 0.8;
//   }

//   .place-order-submit-button:hover {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 24px rgba(26,111,212,0.3);
//   }

//   .place-order-submit-button:active {
//     transform: translateY(0);
//   }

//   @media (max-width: 480px) {
//     .place-order-title {
//       font-size: 24px !important;
//     }
//     .place-order-subtitle {
//       font-size: 13px !important;
//     }
//     .place-order-back-button {
//       font-size: 13px !important;
//     }
//     .place-order-design-card {
//       padding: 12px 14px !important;
//     }
//     .place-order-design-thumb {
//       width: 50px !important;
//       height: 50px !important;
//     }
//     .place-order-design-name {
//       font-size: 14px !important;
//     }
//     .place-order-submit-button {
//       font-size: 15px !important;
//       padding: 13px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .place-order-title {
//       font-size: 22px !important;
//     }
//     .place-order-design-card {
//       padding: 10px 12px !important;
//     }
//     .place-order-design-thumb {
//       width: 44px !important;
//       height: 44px !important;
//     }
//     .place-order-design-name {
//       font-size: 13px !important;
//     }
//     .place-order-measurements-missing {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default PlaceOrder;


// screens/PlaceOrder.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  Upload,
  Camera,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ShoppingBag,
  FileText,
  Plus,
} from 'lucide-react';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [fabricOption, setFabricOption] = useState('customer');
  const [notes, setNotes] = useState('');
  const [hasMeasurements, setHasMeasurements] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const orderData = {
    designName: 'Kaba & Slit',
    fabric: 'Kente',
    price: 'GHS 450',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80',
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitOrder = () => {
    console.log('Order submitted:', {
      design: orderData,
      fabricOption,
      notes,
      hasMeasurements,
      uploadedImage,
    });
    navigate('/tracking');
  };

  const handleAddMeasurements = () => {
    navigate('/measurements');
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
          onClick={() => navigate('/portfolio')} 
          style={{
            ...styles.backButton,
            color: colors.secondaryText,
          }}
        >
          <ArrowLeft size={18} /> Back to Designs
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={{
            ...styles.eyebrow,
            backgroundColor: colors.primaryLight,
            color: colors.primary,
          }}>
            New Order
          </span>
          <h1 style={{
            ...styles.pageTitle,
            color: colors.heading,
          }}>
            Place Order
          </h1>
          <p style={{
            ...styles.pageSubtitle,
            color: colors.secondaryText,
          }}>
            Review the details before sending to the tailor.
          </p>
        </div>

        {/* Design Card */}
        <div style={{
          ...styles.designCard,
          backgroundColor: colors.cardBg,
          borderColor: colors.border,
        }}>
          <div style={styles.designThumb}>
            <img 
              src={orderData.image} 
              alt={orderData.designName} 
              style={styles.designImage}
            />
          </div>
          <div style={styles.designInfo}>
            <div style={{
              ...styles.designName,
              color: colors.heading,
            }}>
              {orderData.designName}
            </div>
            <div style={{
              ...styles.designDetails,
              color: colors.secondaryText,
            }}>
              {orderData.fabric} · {orderData.price}
            </div>
          </div>
        </div>

        {/* Measurements */}
        <div style={styles.formGroup}>
          <label style={{
            ...styles.label,
            color: colors.heading,
          }}>
            Measurements
          </label>
          <div style={{
            ...styles.measurementCard,
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          }}>
            {hasMeasurements ? (
              <div style={styles.measurementsStatus}>
                <CheckCircle size={20} color={colors.success} />
                <span style={{
                  ...styles.measurementsText,
                  color: colors.success,
                }}>
                  Measurements saved
                </span>
                <button style={{
                  ...styles.editButton,
                  borderColor: colors.border,
                  color: colors.secondaryText,
                }}>
                  Edit
                </button>
              </div>
            ) : (
              <div style={styles.measurementsMissing}>
                <AlertCircle size={20} color={colors.error} />
                <span style={{
                  ...styles.measurementsMissingText,
                  color: colors.error,
                }}>
                  No saved measurements yet.
                </span>
                <button 
                  onClick={handleAddMeasurements} 
                  style={{
                    ...styles.addButton,
                    backgroundColor: colors.primary,
                    color: colors.btnText,
                  }}
                >
                  <Plus size={16} /> Add measurements
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Fabric Selection */}
        <div style={styles.formGroup}>
          <label style={{
            ...styles.label,
            color: colors.heading,
          }}>
            Fabric
          </label>
          <select
            value={fabricOption}
            onChange={(e) => setFabricOption(e.target.value)}
            style={{
              ...styles.select,
              borderColor: colors.border,
              backgroundColor: colors.cardBg,
              color: colors.text,
            }}
          >
            <option value="customer">Customer will provide fabric</option>
            <option value="tailor">Tailor sources fabric (+cost)</option>
          </select>
        </div>

        {/* Image Upload */}
        <div style={styles.formGroup}>
          <label style={{
            ...styles.label,
            color: colors.heading,
          }}>
            Upload fabric image (optional)
          </label>
          <div style={{
            ...styles.uploadArea,
            borderColor: colors.border,
            backgroundColor: colors.cardBg,
          }}>
            {uploadedImage ? (
              <div style={styles.uploadPreview}>
                <img 
                  src={uploadedImage} 
                  alt="Fabric preview" 
                  style={styles.uploadPreviewImage}
                />
                <button 
                  onClick={() => setUploadedImage(null)}
                  style={{
                    ...styles.removeImageButton,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#FFFFFF',
                  }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <label style={styles.uploadLabel}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={styles.uploadInput}
                />
                <Camera size={32} color={colors.tertiaryText} />
                <span style={{ color: colors.secondaryText }}>Tap to upload photo</span>
                <span style={{
                  ...styles.uploadHint,
                  color: colors.tertiaryText,
                }}>
                  JPG, PNG, WEBP (max 5MB)
                </span>
              </label>
            )}
          </div>
        </div>

        {/* Notes */}
        <div style={styles.formGroup}>
          <label style={{
            ...styles.label,
            color: colors.heading,
          }}>
            <FileText size={16} color={colors.secondaryText} style={styles.labelIcon} />
            Notes for the tailor
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any specific styling requests..."
            style={{
              ...styles.textarea,
              borderColor: colors.border,
              backgroundColor: colors.cardBg,
              color: colors.text,
            }}
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmitOrder} 
          style={{
            ...styles.submitButton,
            backgroundColor: colors.primary,
            color: colors.btnText,
            boxShadow: `0 4px 16px ${colors.primary}33`,
          }}
        >
          <ShoppingBag size={18} /> Submit Order
        </button>
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
          <span style={styles.navIconWrap}>
            <Grid3x3 size={20} color={colors.navText} />
          </span>
        </button>
        <button 
          onClick={() => navigate('/tracking')} 
          style={styles.navButton} 
          aria-label="Orders"
        >
          <span style={{...styles.navIconWrap, ...styles.navIconWrapActive}}>
            <Package size={20} color="#FFFFFF" />
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
    maxWidth: '800px', 
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
  designCard: {
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  designThumb: {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    overflow: 'hidden',
    flexShrink: 0,
    backgroundColor: '#EADFC2',
  },
  designImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  designInfo: {
    flex: 1,
  },
  designName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  designDetails: {
    fontSize: '13px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  labelIcon: {
    opacity: 0.7,
  },
  measurementCard: {
    borderRadius: '12px',
    padding: '14px 16px',
    border: '1px solid',
  },
  measurementsStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  measurementsText: {
    fontSize: '14px',
    flex: 1,
  },
  editButton: {
    padding: '4px 14px',
    borderRadius: '6px',
    border: '1px solid',
    backgroundColor: 'transparent',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  measurementsMissing: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  measurementsMissingText: {
    fontSize: '14px',
    flex: 1,
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394A3B8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    transition: 'border-color 0.2s',
  },
  uploadArea: {
    borderRadius: '12px',
    border: '2px dashed',
    padding: '24px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadLabel: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    width: '100%',
  },
  uploadInput: {
    display: 'none',
  },
  uploadHint: {
    fontSize: '11px',
  },
  uploadPreview: {
    position: 'relative',
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto',
  },
  uploadPreviewImage: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  removeImageButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    padding: '4px 10px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '11px',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'opacity 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    resize: 'vertical',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    minHeight: '80px',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    marginTop: '8px',
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
  .place-order-back-button:hover {
    color: #1A56DB !important;
  }

  .place-order-edit-button:hover {
    background-color: #DBEAFE !important;
    border-color: #1A56DB !important;
  }

  .place-order-add-button:hover {
    background-color: #1A3A8A !important;
  }

  .place-order-select:focus {
    border-color: #1A56DB !important;
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1) !important;
  }

  .place-order-textarea:focus {
    border-color: #1A56DB !important;
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1) !important;
  }

  .place-order-upload-area:hover {
    border-color: #1A56DB !important;
    background-color: #DBEAFE !important;
  }

  .place-order-remove-image-button:hover {
    opacity: 0.8;
  }

  .place-order-submit-button:hover {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  .place-order-submit-button:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .place-order-title {
      font-size: 24px !important;
    }
    .place-order-subtitle {
      font-size: 13px !important;
    }
    .place-order-back-button {
      font-size: 13px !important;
    }
    .place-order-design-card {
      padding: 12px 14px !important;
    }
    .place-order-design-thumb {
      width: 50px !important;
      height: 50px !important;
    }
    .place-order-design-name {
      font-size: 14px !important;
    }
    .place-order-submit-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .place-order-title {
      font-size: 22px !important;
    }
    .place-order-design-card {
      padding: 10px 12px !important;
    }
    .place-order-design-thumb {
      width: 44px !important;
      height: 44px !important;
    }
    .place-order-design-name {
      font-size: 13px !important;
    }
    .place-order-measurements-missing {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default PlaceOrder;