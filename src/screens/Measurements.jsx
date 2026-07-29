// // screens/Measurements.jsx
// import React, { useState } from 'react';
// import measurementImages from '../assets/measurementImages';
// import {
//   Home,
//   Ruler,
//   Grid3x3,
//   Package,
//   User,
//   ChevronRight,
//   CheckCircle,
//   Info,
//   ArrowLeft,
//   Shield,
//   Sparkles,
//   Scissors,
//   Camera,
//   HelpCircle,
//   X,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import MeasurementPhoto from '../components/MeasurementPhoto';
// import PhotoGuide from '../components/PhotoGuide';

// const Measurements = () => {
//   const navigate = useNavigate();
//   const [gender, setGender] = useState('female');
//   const [activeMeasurement, setActiveMeasurement] = useState('chest');
//   const [measurements, setMeasurements] = useState({
//     chest: '',
//     waist: '',
//     hip: '',
//     shoulder: '',
//     sleeve: '',
//     trouser: '',
//     neck: '',
//     thigh: '',
//   });
//   const [showPhotoModal, setShowPhotoModal] = useState(false);
//   const [showGuide, setShowGuide] = useState(false);

//   const measurementFields = [
//     { key: 'chest', label: 'Bust', help: 'Wrap the tape around the fullest part of your bust, keeping it level across your back and comfortably snug.' },
//     { key: 'waist', label: 'Waist', help: 'Measure around your natural waistline, just above your belly button.' },
//     { key: 'hip', label: 'Hip', help: 'Measure around the fullest part of your hips and buttocks.' },
//     { key: 'shoulder', label: 'Shoulder', help: 'Measure across your back from one shoulder edge to the other.' },
//     { key: 'sleeve', label: 'Sleeve Length', help: 'Measure from your shoulder point down to your wrist.' },
//     { key: 'trouser', label: 'Trouser Length', help: 'Measure from your waist down to your ankle.' },
//     { key: 'neck', label: 'Neck', help: 'Measure around the base of your neck where a collar would sit.' },
//     { key: 'thigh', label: 'Thigh', help: 'Measure around the fullest part of your thigh.' },
//   ];

//   const completedCount = Object.values(measurements).filter(val => val !== '').length;
//   const progress = Math.round((completedCount / 8) * 100);

//   const handleMeasurementChange = (key, value) => {
//     setMeasurements(prev => ({ ...prev, [key]: value }));
//     setActiveMeasurement(key);
//   };

//   const handleGenderChange = (newGender) => {
//     setGender(newGender);
//   };

//   const handleSave = () => {
//     console.log('Measurements saved:', measurements);
//     navigate('/home');
//   };

//   const getMeasurementHelp = () => {
//     const field = measurementFields.find(f => f.key === activeMeasurement);
//     return field || measurementFields[0];
//   };

//   const handlePhotoMeasurements = (photoData) => {
//     setMeasurements(prev => ({
//       ...prev,
//       chest: photoData.chest || '',
//       waist: photoData.waist || '',
//       hip: photoData.hip || '',
//       shoulder: photoData.shoulder || '',
//       sleeve: photoData.sleeve || '',
//       trouser: photoData.trouser || '',
//       neck: photoData.neck || '',
//       thigh: photoData.thigh || '',
//     }));
//     setActiveMeasurement('chest');
//   };

//   return (
//     <div style={styles.container}>
//       {/* Main Content */}
//       <main style={styles.main}>
//         {/* Back Button */}
//         <button onClick={() => navigate('/home')} style={styles.backButton}>
//           <ArrowLeft size={18} /> Back to Home
//         </button>

//         {/* Page Header */}
//         <div style={styles.pageHeader}>
//           <span style={styles.eyebrow}>Digital Measurement Assistant</span>
//           <div style={styles.titleRow}>
//             <h1 style={styles.pageTitle}>Measure Once. Fit Always.</h1>
//             <button onClick={() => setShowGuide(true)} style={styles.helpButton}>
//               <HelpCircle size={24} color="#1A6FD4" />
//             </button>
//           </div>
//           <p style={styles.pageSubtitle}>
//             Build a reusable body profile that can be applied to every future order.
//           </p>
//         </div>

//         {/* Photo Guide Modal */}
//         {showGuide && (
//           <div style={styles.guideOverlay} onClick={() => setShowGuide(false)}>
//             <div style={styles.guideModal} onClick={(e) => e.stopPropagation()}>
//               <button 
//                 onClick={() => setShowGuide(false)} 
//                 style={styles.guideClose}
//               >
//                 <X size={20} color="#5C7A9A" />
//               </button>
//               <PhotoGuide />
//             </div>
//           </div>
//         )}

//         {/* Measurement Shell */}
//         <div style={styles.measureShell}>
//           {/* Gender Switch */}
//           <div style={styles.genderSwitch}>
//             <button
//               onClick={() => handleGenderChange('male')}
//               style={{
//                 ...styles.genderButton,
//                 ...(gender === 'male' ? styles.genderButtonActive : {}),
//               }}
//             >
//               ♂ Male
//             </button>
//             <button
//               onClick={() => handleGenderChange('female')}
//               style={{
//                 ...styles.genderButton,
//                 ...(gender === 'female' ? styles.genderButtonActive : {}),
//               }}
//             >
//               ♀ Female
//             </button>
//           </div>

//           {/* Progress */}
//           <div style={styles.progressWrap}>
//             <div style={styles.progressRing}>
//               <svg viewBox="0 0 36 36" style={styles.progressSvg}>
//                 <path
//                   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                   fill="none"
//                   stroke="#F1F1F4"
//                   strokeWidth="3"
//                 />
//                 <path
//                   d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                   fill="none"
//                   stroke="#1A6FD4"
//                   strokeWidth="3"
//                   strokeDasharray={`${progress}, 100`}
//                   strokeLinecap="round"
//                 />
//                 <text x="18" y="21" style={styles.progressText}>{progress}%</text>
//               </svg>
//             </div>
//             <div style={styles.progressCopy}>
//               <strong style={styles.progressTitle}>Your Fit Profile</strong>
//               <small style={styles.progressSub}>{completedCount} of 8 measurements complete</small>
//             </div>
//           </div>

//           {/* Body Diagram */}
//           <div style={styles.bodyDiagram}>
//             <div style={styles.bodyContainer}>
//               <svg viewBox="0 0 240 360" style={styles.bodySvg}>
//                 <ellipse cx="120" cy="45" rx="25" ry="30" fill="#E6C6A8" />
//                 <path d="M95 70 L145 70 L150 90 C170 95 180 105 185 125 C190 145 185 165 180 185 C175 205 170 220 175 240 C180 260 185 280 180 300 L170 340 L140 340 L130 250 L120 250 L110 340 L80 340 L70 300 C65 280 70 260 75 240 C80 220 75 205 70 185 C65 165 60 145 65 125 C70 105 80 95 100 90 L95 70Z" fill="#F8F4EA" stroke="#1F3A5F" strokeWidth="2" />
//                 {measurementFields.map((field, index) => {
//                   const isActive = activeMeasurement === field.key;
//                   const isCompleted = measurements[field.key] !== '';
//                   return (
//                     <circle
//                       key={field.key}
//                       cx={120 + (index % 4 - 1.5) * 30}
//                       cy={80 + index * 30}
//                       r={isActive ? 6 : 4}
//                       fill={isActive ? '#1A6FD4' : isCompleted ? '#22C55E' : '#8E8EA0'}
//                       stroke={isActive ? '#FFFFFF' : 'none'}
//                       strokeWidth="2"
//                       style={{ cursor: 'pointer', transition: 'all 0.2s' }}
//                       onClick={() => setActiveMeasurement(field.key)}
//                     />
//                   );
//                 })}
//               </svg>
//             </div>
//           </div>

//           <div style={styles.figureCaption}>{gender} measurement profile</div>

//           {/* Instruction */}
//           <div style={styles.instruction}>
//             <Info size={20} color="#1A6FD4" style={styles.instructionIcon} />
//             <div>
//               <strong style={styles.instructionTitle}>{getMeasurementHelp().label}</strong>
//               <span style={styles.instructionText}>{getMeasurementHelp().help}</span>
//             </div>
//           </div>

//           {/* Measurement Fields */}
//           <div style={styles.mmList}>
//             {measurementFields.map((field) => {
//               const isActive = activeMeasurement === field.key;
//               const isCompleted = measurements[field.key] !== '';
//               return (
//                 <div
//                   key={field.key}
//                   style={{
//                     ...styles.mmField,
//                     ...(isActive ? styles.mmFieldActive : {}),
//                     ...(isCompleted ? styles.mmFieldCompleted : {}),
//                   }}
//                 >
//                   <label style={styles.mmLabel}>
//                     {field.label}
//                     {isCompleted && (
//                       <span style={styles.mmDone}>✓</span>
//                     )}
//                   </label>
//                   <div style={styles.mmInputWrapper}>
//                     <input
//                       type="number"
//                       min="0"
//                       step="0.1"
//                       placeholder="0.0"
//                       value={measurements[field.key]}
//                       onChange={(e) => handleMeasurementChange(field.key, e.target.value)}
//                       onFocus={() => setActiveMeasurement(field.key)}
//                       style={styles.mmInput}
//                     />
//                     <span style={styles.unitMark}>in</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Measurement Toggle: Photo or Manual */}
//         <div style={styles.measurementToggle}>
//           <button
//             onClick={() => setShowPhotoModal(true)}
//             style={styles.photoToggleButton}
//           >
//             <Camera size={18} /> Take Photos
//           </button>
//           <span style={styles.toggleOr}>or</span>
//           <button style={styles.manualToggleButton}>
//             <Ruler size={18} /> Enter Manually
//           </button>
//         </div>

//         {/* Save Button */}
//         <button onClick={handleSave} style={styles.saveButton}>
//           <Shield size={18} /> Save Secure Fit Profile
//         </button>
//         <p style={styles.saveNote}>
//           Your saved profile is reused automatically, so you do not need to measure again for every order.
//         </p>
//       </main>

//       {/* Photo Modal */}
//       {showPhotoModal && (
//         <MeasurementPhoto
//           onClose={() => setShowPhotoModal(false)}
//           onMeasurementsComplete={handlePhotoMeasurements}
//         />
//       )}

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
//           <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
//             <Ruler size={20} color="#FFFFFF" />
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
//     padding: '24px 16px',
//     paddingBottom: '100px',
//   },
//   main: {
//     width: '100%',
//     maxWidth: '540px',
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
//   titleRow: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   helpButton: {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '4px',
//     transition: 'transform 0.2s',
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
//     flex: 1,
//   },
//   pageSubtitle: {
//     fontSize: '14px',
//     color: '#5C7A9A',
//     margin: 0,
//     lineHeight: 1.5,
//   },
//   guideOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     backdropFilter: 'blur(4px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     padding: '20px',
//   },
//   guideModal: {
//     position: 'relative',
//     maxWidth: '480px',
//     width: '100%',
//   },
//   guideClose: {
//     position: 'absolute',
//     top: '12px',
//     right: '12px',
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '4px',
//     zIndex: 10,
//     borderRadius: '50%',
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     width: '32px',
//     height: '32px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   measureShell: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     padding: '24px',
//     border: '1px solid #F1F1F4',
//     marginBottom: '20px',
//   },
//   genderSwitch: {
//     display: 'flex',
//     backgroundColor: '#F1F1F4',
//     borderRadius: '12px',
//     padding: '4px',
//     marginBottom: '20px',
//   },
//   genderButton: {
//     flex: 1,
//     padding: '10px',
//     borderRadius: '10px',
//     border: 'none',
//     backgroundColor: 'transparent',
//     color: '#8E8EA0',
//     fontSize: '14px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   genderButtonActive: {
//     backgroundColor: '#FFFFFF',
//     color: '#0A0F1E',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//   },
//   progressWrap: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//     marginBottom: '20px',
//   },
//   progressRing: {
//     width: '60px',
//     height: '60px',
//     flexShrink: 0,
//   },
//   progressSvg: {
//     width: '60px',
//     height: '60px',
//   },
//   progressText: {
//     fontSize: '10px',
//     fontWeight: '700',
//     fill: '#1A6FD4',
//     textAnchor: 'middle',
//     fontFamily: 'Inter, sans-serif',
//   },
//   progressCopy: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   progressTitle: {
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   progressSub: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//     marginTop: '2px',
//   },
//   bodyDiagram: {
//     marginBottom: '12px',
//     backgroundColor: '#FAFAFC',
//     borderRadius: '12px',
//     padding: '12px',
//     border: '1px solid #F1F1F4',
//   },
//   bodyContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   bodySvg: {
//     maxWidth: '200px',
//     width: '100%',
//     height: 'auto',
//   },
//   figureCaption: {
//     textAlign: 'center',
//     fontSize: '12px',
//     color: '#8E8EA0',
//     textTransform: 'capitalize',
//     marginBottom: '16px',
//     fontWeight: '500',
//   },
//   instruction: {
//     display: 'flex',
//     gap: '12px',
//     padding: '14px 16px',
//     backgroundColor: '#F5F9FF',
//     borderRadius: '12px',
//     marginBottom: '20px',
//     alignItems: 'flex-start',
//     border: '1px solid #E8F4FB',
//   },
//   instructionIcon: {
//     flexShrink: 0,
//     marginTop: '1px',
//   },
//   instructionTitle: {
//     display: 'block',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   instructionText: {
//     fontSize: '13px',
//     color: '#5C7A9A',
//     lineHeight: '1.5',
//   },
//   mmList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   mmField: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '10px 14px',
//     backgroundColor: '#F8F8FA',
//     borderRadius: '10px',
//     border: '1px solid #F1F1F4',
//     transition: 'all 0.2s',
//   },
//   mmFieldActive: {
//     backgroundColor: '#E8F4FB',
//     borderColor: '#1A6FD4',
//   },
//   mmFieldCompleted: {
//     backgroundColor: '#F0FDF4',
//     borderColor: '#BBF7D0',
//   },
//   mmLabel: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#0A0F1E',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//   },
//   mmDone: {
//     color: '#22C55E',
//     fontSize: '14px',
//     fontWeight: '700',
//   },
//   mmInputWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//   },
//   mmInput: {
//     width: '60px',
//     padding: '4px 8px',
//     borderRadius: '6px',
//     border: '1px solid #DCE4EE',
//     backgroundColor: '#FFFFFF',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//     textAlign: 'right',
//     fontFamily: 'JetBrains Mono, monospace',
//     outline: 'none',
//     transition: 'border 0.2s',
//   },
//   unitMark: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     fontWeight: '500',
//   },
//   measurementToggle: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '12px',
//     marginBottom: '20px',
//     padding: '12px 0',
//     borderTop: '1px solid #F1F1F4',
//     borderBottom: '1px solid #F1F1F4',
//   },
//   photoToggleButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '10px 20px',
//     borderRadius: '10px',
//     border: 'none',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '14px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//     boxShadow: '0 2px 8px rgba(26,111,212,0.15)',
//   },
//   toggleOr: {
//     fontSize: '13px',
//     color: '#8E8EA0',
//     fontWeight: '500',
//   },
//   manualToggleButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '10px 20px',
//     borderRadius: '10px',
//     border: '1.5px solid #DCE4EE',
//     backgroundColor: 'transparent',
//     color: '#5C7A9A',
//     fontSize: '14px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//   },
//   saveButton: {
//     width: '100%',
//     padding: '14px',
//     borderRadius: '10px',
//     backgroundColor: '#1A6FD4',
//     color: '#FFFFFF',
//     fontSize: '16px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     fontFamily: 'Inter, sans-serif',
//     transition: 'all 0.2s',
//     boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
//   },
//   saveNote: {
//     fontSize: '12px',
//     color: '#8E8EA0',
//     textAlign: 'center',
//     marginTop: '12px',
//     lineHeight: '1.5',
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
//   .measurements-back-button:hover {
//     color: #1A6FD4;
//   }

//   .measurements-help-button:hover {
//     transform: scale(1.1);
//   }

//   .measurements-gender-button:hover:not(.measurements-gender-button-active) {
//     color: #0A0F1E;
//   }

//   .measurements-ml-field:hover:not(.measurements-ml-field-active) {
//     border-color: #DCE4EE;
//   }

//   .measurements-ml-input:focus {
//     border-color: #1A6FD4;
//     box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
//   }

//   .measurements-save-button:hover {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 24px rgba(26,111,212,0.3);
//   }

//   .measurements-photo-toggle-button:hover {
//     background-color: #1557A8;
//     transform: translateY(-2px);
//   }

//   .measurements-manual-toggle-button:hover {
//     border-color: #1A6FD4;
//     color: #1A6FD4;
//   }

//   .measurements-guide-close:hover {
//     background-color: #F1F1F4;
//   }

//   @media (max-width: 480px) {
//     .measurements-title {
//       font-size: 24px !important;
//     }
//     .measurements-back-button {
//       font-size: 13px !important;
//     }
//     .measurements-measure-shell {
//       padding: 16px !important;
//     }
//     .measurements-progress-ring {
//       width: 48px !important;
//       height: 48px !important;
//     }
//     .measurements-progress-svg {
//       width: 48px !important;
//       height: 48px !important;
//     }
//     .measurements-progress-title {
//       font-size: 14px !important;
//     }
//     .measurements-ml-field {
//       padding: 8px 12px !important;
//     }
//     .measurements-ml-label {
//       font-size: 13px !important;
//     }
//     .measurements-ml-input {
//       width: 50px !important;
//       font-size: 13px !important;
//     }
//     .measurements-save-button {
//       font-size: 15px !important;
//       padding: 13px !important;
//     }
//     .measurements-photo-toggle-button,
//     .measurements-manual-toggle-button {
//       padding: 8px 14px !important;
//       font-size: 13px !important;
//     }
//     .measurements-guide-modal {
//       margin: 16px !important;
//     }
//   }

//   @media (max-width: 360px) {
//     .measurements-title {
//       font-size: 22px !important;
//     }
//     .measurements-measure-shell {
//       padding: 14px !important;
//     }
//     .measurements-progress-wrap {
//       flex-direction: column !important;
//       align-items: center !important;
//     }
//     .measurements-progress-copy {
//       text-align: center !important;
//     }
//     .measurements-ml-field {
//       flex-wrap: wrap !important;
//     }
//     .measurements-ml-input-wrapper {
//       margin-top: 4px !important;
//     }
//     .measurements-save-button {
//       font-size: 14px !important;
//       padding: 12px !important;
//     }
//     .measurements-measurement-toggle {
//       flex-wrap: wrap !important;
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Measurements;


// screens/Measurements.jsx
import React, { useState } from 'react';
import measurementImages from '../assets/measurementImages';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  ChevronRight,
  CheckCircle,
  Info,
  ArrowLeft,
  Shield,
  Sparkles,
  Scissors,
  Camera,
  HelpCircle,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MeasurementPhoto from '../components/MeasurementPhoto';
import PhotoGuide from '../components/PhotoGuide';

const Measurements = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('male');
  const [activeMeasurement, setActiveMeasurement] = useState('chest');
  const [measurements, setMeasurements] = useState({
    chest: '',
    shoulder: '',
    sleeve: '',
    waist: '',
    stomach: '',
    seat: '',
    frontRise: '',
    backRise: '',
    thigh: '',
    knee: '',
    legOpening: '',
    pantsLength: '',
    jacketLength: '',
    bicep: '',
    neck: '',
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const measurementFields = [
    { key: 'chest', label: 'Chest', help: 'Measure around the fullest part of the chest (do not puff up chest)' },
    { key: 'shoulder', label: 'Shoulder', help: 'Measure from one edge of the shoulder to the other, across back. It is best to measure shoulders of your existing jacket if available.' },
    { key: 'sleeve', label: 'Sleeve', help: 'Place tape where sleeve joins body of coat and measure to length desired. Measuring sleeve length of your existing coat/jacket can help.' },
    { key: 'waist', label: 'Waist', help: 'Measure the waist area where you want to wear your pants. Make sure the tape is snug, but not pulling tightly, and not too loose.' },
    { key: 'stomach', label: 'Stomach', help: 'Measure around the widest part of the Stomach.' },
    { key: 'seat', label: 'Seat', help: 'Measure around the widest part of the Seat.' },
    { key: 'frontRise', label: 'Front Rise', help: 'Measure from the crotch where the inseam meets the front and back seams to the top of the waistband. Measure with the front laid flat, pull the area to the fullest.' },
    { key: 'backRise', label: 'Back Rise', help: 'Measure from the crotch where the inseam meets the front and back seams to the top of the waistband on the rear.' },
    { key: 'thigh', label: 'Thigh', help: 'Determine the widest part of your thigh and measure according to the picture.' },
    { key: 'knee', label: 'Knee', help: 'Measure around your knee cap, snug, with room for one finger.' },
    { key: 'legOpening', label: 'Leg Opening', help: 'Measure from one side to the other side. You will then multiply this measurement by 2.' },
    { key: 'pantsLength', label: 'Pants Length', help: 'Measure the length from the waist to the floor or the length you want. You should measure the length while wearing your shoes.' },
    { key: 'jacketLength', label: 'Jacket Length', help: 'Measure from the upper end of the shoulder where it joins the neck to the length required (you might use one of your own jacket).' },
    { key: 'bicep', label: 'Bicep', help: 'Measure around the fullest part of your bicep.' },
    { key: 'neck', label: 'Neck', help: 'Measure around the base of your neck where a collar would sit.' },
  ];

  const totalMeasurements = measurementFields.length;
  const completedCount = Object.values(measurements).filter(val => val !== '').length;
  const progress = Math.round((completedCount / totalMeasurements) * 100);

  const handleMeasurementChange = (key, value) => {
    setMeasurements(prev => ({ ...prev, [key]: value }));
    setActiveMeasurement(key);
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    setMeasurements({
      chest: '',
      shoulder: '',
      sleeve: '',
      waist: '',
      stomach: '',
      seat: '',
      frontRise: '',
      backRise: '',
      thigh: '',
      knee: '',
      legOpening: '',
      pantsLength: '',
      jacketLength: '',
      bicep: '',
      neck: '',
    });
  };

  const handleSave = () => {
    console.log('Measurements saved:', measurements);
    navigate('/home');
  };

  const getMeasurementHelp = () => {
    const field = measurementFields.find(f => f.key === activeMeasurement);
    return field || measurementFields[0];
  };

  // LARGER IMAGE - Removed SVG, using images only
  const getMeasurementIllustration = (key) => {
    const commonStyle = {
      width: '100%',
      maxWidth: '200px',
      height: 'auto',
      display: 'block',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      margin: '0 auto',
    };

    const imageSrc = measurementImages[key];

    if (!imageSrc) {
      return (
        <div style={{
          textAlign: 'center',
          padding: '30px',
          color: '#8E8EA0',
          fontSize: '14px',
          backgroundColor: '#F8F8FA',
          borderRadius: '12px',
        }}>
          📏 No image available
        </div>
      );
    }

    return <img src={imageSrc} alt={`${key} measurement guide`} style={commonStyle} />;
  };

  const handlePhotoMeasurements = (photoData) => {
    setMeasurements(prev => ({
      ...prev,
      chest: photoData.chest || '',
      shoulder: photoData.shoulder || '',
      sleeve: photoData.sleeve || '',
      waist: photoData.waist || '',
      stomach: photoData.stomach || '',
      seat: photoData.seat || '',
      frontRise: photoData.frontRise || '',
      backRise: photoData.backRise || '',
      thigh: photoData.thigh || '',
      knee: photoData.knee || '',
      legOpening: photoData.legOpening || '',
      pantsLength: photoData.pantsLength || '',
      jacketLength: photoData.jacketLength || '',
      bicep: photoData.bicep || '',
      neck: photoData.neck || '',
    }));
    setActiveMeasurement('chest');
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/home')} style={styles.backButton}>
          <ArrowLeft size={18} /> Back to Home
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Digital Measurement Assistant</span>
          <div style={styles.titleRow}>
            <h1 style={styles.pageTitle}>Measure Once. Fit Always.</h1>
            <button onClick={() => setShowGuide(true)} style={styles.helpButton}>
              <HelpCircle size={24} color="#1A6FD4" />
            </button>
          </div>
          <p style={styles.pageSubtitle}>
            Build a reusable body profile that can be applied to every future order.
          </p>
        </div>

        {/* Photo Guide Modal */}
        {showGuide && (
          <div style={styles.guideOverlay} onClick={() => setShowGuide(false)}>
            <div style={styles.guideModal} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowGuide(false)} style={styles.guideClose}>
                <X size={20} color="#5C7A9A" />
              </button>
              <PhotoGuide />
            </div>
          </div>
        )}

        {/* Measurement Shell */}
        <div style={styles.measureShell}>
          {/* Gender Switch */}
          <div style={styles.genderSwitch}>
            <button
              onClick={() => handleGenderChange('male')}
              style={{
                ...styles.genderButton,
                ...(gender === 'male' ? styles.genderButtonActive : {}),
              }}
            >
              ♂ Male
            </button>
            <button
              onClick={() => handleGenderChange('female')}
              style={{
                ...styles.genderButton,
                ...(gender === 'female' ? styles.genderButtonActive : {}),
              }}
            >
              ♀ Female
            </button>
          </div>

          {/* Progress */}
          <div style={styles.progressWrap}>
            <div style={styles.progressRing}>
              <svg viewBox="0 0 36 36" style={styles.progressSvg}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F1F1F4"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1A6FD4"
                  strokeWidth="3"
                  strokeDasharray={`${progress}, 100`}
                  strokeLinecap="round"
                />
                <text x="18" y="21" style={styles.progressText}>{progress}%</text>
              </svg>
            </div>
            <div style={styles.progressCopy}>
              <strong style={styles.progressTitle}>Your Fit Profile</strong>
              <small style={styles.progressSub}>{completedCount} of {totalMeasurements} measurements complete</small>
            </div>
          </div>

          {/* INSTRUCTION WITH LARGE IMAGE - Removed SVG */}
          <div style={styles.instruction}>
            <div style={styles.instructionIllustration}>
              {getMeasurementIllustration(activeMeasurement)}
            </div>
            <div style={styles.instructionContent}>
              <strong style={styles.instructionTitle}>{getMeasurementHelp().label}</strong>
              <span style={styles.instructionText}>{getMeasurementHelp().help}</span>
            </div>
          </div>

          {/* Measurement Fields */}
          <div style={styles.mmList}>
            {measurementFields.map((field) => {
              const isActive = activeMeasurement === field.key;
              const isCompleted = measurements[field.key] !== '';
              return (
                <div
                  key={field.key}
                  style={{
                    ...styles.mmField,
                    ...(isActive ? styles.mmFieldActive : {}),
                    ...(isCompleted ? styles.mmFieldCompleted : {}),
                  }}
                >
                  <label style={styles.mmLabel}>
                    {field.label}
                    {isCompleted && <span style={styles.mmDone}>✓</span>}
                  </label>
                  <div style={styles.mmInputWrapper}>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0.0"
                      value={measurements[field.key]}
                      onChange={(e) => handleMeasurementChange(field.key, e.target.value)}
                      onFocus={() => setActiveMeasurement(field.key)}
                      style={styles.mmInput}
                    />
                    <span style={styles.unitMark}>in</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Measurement Toggle */}
        <div style={styles.measurementToggle}>
          <button onClick={() => setShowPhotoModal(true)} style={styles.photoToggleButton}>
            <Camera size={18} /> Take Photos
          </button>
          <span style={styles.toggleOr}>or</span>
          <button style={styles.manualToggleButton}>
            <Ruler size={18} /> Enter Manually
          </button>
        </div>

        {/* Save Button */}
        <button onClick={handleSave} style={styles.saveButton}>
          <Shield size={18} /> Save Secure Fit Profile
        </button>
        <p style={styles.saveNote}>
          Your saved profile is reused automatically, so you do not need to measure again for every order.
        </p>
      </main>

      {/* Photo Modal */}
      {showPhotoModal && (
        <MeasurementPhoto
          onClose={() => setShowPhotoModal(false)}
          onMeasurementsComplete={handlePhotoMeasurements}
        />
      )}

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button onClick={() => navigate('/home')} style={styles.navButton} aria-label="Home">
          <span style={styles.navIconWrap}>
            <Home size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/measurements')} style={styles.navButton} aria-label="Measure">
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Ruler size={20} color="#FFFFFF" />
          </span>
        </button>
        <button onClick={() => navigate('/portfolio')} style={styles.navButton} aria-label="Portfolio">
          <span style={styles.navIconWrap}>
            <Grid3x3 size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/tracking')} style={styles.navButton} aria-label="Orders">
          <span style={styles.navIconWrap}>
            <Package size={20} color="#8E8EA0" />
          </span>
        </button>
        <button onClick={() => navigate('/profile')} style={styles.navButton} aria-label="Profile">
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
    marginBottom: '24px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helpButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    transition: 'transform 0.2s',
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
    flex: 1,
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
    lineHeight: 1.5,
  },
  guideOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  guideModal: {
    position: 'relative',
    maxWidth: '480px',
    width: '100%',
  },
  guideClose: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    zIndex: 10,
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  measureShell: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #F1F1F4',
    marginBottom: '20px',
  },
  genderSwitch: {
    display: 'flex',
    backgroundColor: '#F1F1F4',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '20px',
  },
  genderButton: {
    flex: 1,
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#8E8EA0',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  genderButtonActive: {
    backgroundColor: '#FFFFFF',
    color: '#0A0F1E',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  progressWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
  },
  progressRing: {
    width: '60px',
    height: '60px',
    flexShrink: 0,
  },
  progressSvg: {
    width: '60px',
    height: '60px',
  },
  progressText: {
    fontSize: '10px',
    fontWeight: '700',
    fill: '#1A6FD4',
    textAnchor: 'middle',
    fontFamily: 'Inter, sans-serif',
  },
  progressCopy: {
    display: 'flex',
    flexDirection: 'column',
  },
  progressTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  progressSub: {
    fontSize: '13px',
    color: '#8E8EA0',
    marginTop: '2px',
  },
  // INSTRUCTION - LARGER IMAGE
  instruction: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#F5F9FF',
    borderRadius: '12px',
    marginBottom: '20px',
    alignItems: 'center',
    border: '1px solid #E8F4FB',
  },
  instructionIllustration: {
    width: '100%',
    maxWidth: '220px',
    flexShrink: 0,
  },
  instructionContent: {
    width: '100%',
    textAlign: 'center',
  },
  instructionTitle: {
    display: 'block',
    fontSize: '18px',
    fontWeight: '700',
    color: '#0A0F1E',
    marginBottom: '6px',
    fontFamily: 'Fraunces, serif',
  },
  instructionText: {
    fontSize: '14px',
    color: '#5C7A9A',
    lineHeight: '1.6',
    display: 'block',
  },
  mmList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  mmField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 14px',
    backgroundColor: '#F8F8FA',
    borderRadius: '10px',
    border: '1px solid #F1F1F4',
    transition: 'all 0.2s',
  },
  mmFieldActive: {
    backgroundColor: '#E8F4FB',
    borderColor: '#1A6FD4',
  },
  mmFieldCompleted: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },
  mmLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#0A0F1E',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  mmDone: {
    color: '#22C55E',
    fontSize: '14px',
    fontWeight: '700',
  },
  mmInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  mmInput: {
    width: '60px',
    padding: '4px 8px',
    borderRadius: '6px',
    border: '1px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
    textAlign: 'right',
    fontFamily: 'JetBrains Mono, monospace',
    outline: 'none',
    transition: 'border 0.2s',
  },
  unitMark: {
    fontSize: '12px',
    color: '#8E8EA0',
    fontWeight: '500',
  },
  measurementToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '20px',
    padding: '12px 0',
    borderTop: '1px solid #F1F1F4',
    borderBottom: '1px solid #F1F1F4',
  },
  photoToggleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(26,111,212,0.15)',
  },
  toggleOr: {
    fontSize: '13px',
    color: '#8E8EA0',
    fontWeight: '500',
  },
  manualToggleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: 'transparent',
    color: '#5C7A9A',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  saveButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '10px',
    backgroundColor: '#1A6FD4',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    boxShadow: '0 4px 16px rgba(26,111,212,0.2)',
  },
  saveNote: {
    fontSize: '12px',
    color: '#8E8EA0',
    textAlign: 'center',
    marginTop: '12px',
    lineHeight: '1.5',
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
  .measurements-back-button:hover {
    color: #1A6FD4;
  }

  .measurements-help-button:hover {
    transform: scale(1.1);
  }

  .measurements-gender-button:hover:not(.measurements-gender-button-active) {
    color: #0A0F1E;
  }

  .measurements-ml-field:hover:not(.measurements-ml-field-active) {
    border-color: #DCE4EE;
  }

  .measurements-ml-input:focus {
    border-color: #1A6FD4;
    box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
  }

  .measurements-save-button:hover {
    background-color: #1557A8;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26,111,212,0.3);
  }

  .measurements-photo-toggle-button:hover {
    background-color: #1557A8;
    transform: translateY(-2px);
  }

  .measurements-manual-toggle-button:hover {
    border-color: #1A6FD4;
    color: #1A6FD4;
  }

  .measurements-guide-close:hover {
    background-color: #F1F1F4;
  }

  @media (min-width: 768px) {
    .measurements-instruction {
      flex-direction: row !important;
      align-items: center !important;
    }
    .measurements-instruction-content {
      text-align: left !important;
    }
    .measurements-instruction-illustration {
      max-width: 200px !important;
    }
  }

  @media (max-width: 480px) {
    .measurements-title {
      font-size: 24px !important;
    }
    .measurements-back-button {
      font-size: 13px !important;
    }
    .measurements-measure-shell {
      padding: 16px !important;
    }
    .measurements-progress-ring {
      width: 48px !important;
      height: 48px !important;
    }
    .measurements-progress-svg {
      width: 48px !important;
      height: 48px !important;
    }
    .measurements-progress-title {
      font-size: 14px !important;
    }
    .measurements-ml-field {
      padding: 8px 12px !important;
    }
    .measurements-ml-label {
      font-size: 13px !important;
    }
    .measurements-ml-input {
      width: 50px !important;
      font-size: 13px !important;
    }
    .measurements-save-button {
      font-size: 15px !important;
      padding: 13px !important;
    }
    .measurements-photo-toggle-button,
    .measurements-manual-toggle-button {
      padding: 8px 14px !important;
      font-size: 13px !important;
    }
    .measurements-guide-modal {
      margin: 16px !important;
    }
    .measurements-instruction-illustration {
      max-width: 160px !important;
    }
    .measurements-instruction-title {
      font-size: 16px !important;
    }
    .measurements-instruction-text {
      font-size: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .measurements-title {
      font-size: 22px !important;
    }
    .measurements-measure-shell {
      padding: 14px !important;
    }
    .measurements-progress-wrap {
      flex-direction: column !important;
      align-items: center !important;
    }
    .measurements-progress-copy {
      text-align: center !important;
    }
    .measurements-ml-field {
      flex-wrap: wrap !important;
    }
    .measurements-ml-input-wrapper {
      margin-top: 4px !important;
    }
    .measurements-save-button {
      font-size: 14px !important;
      padding: 12px !important;
    }
    .measurements-measurement-toggle {
      flex-wrap: wrap !important;
    }
    .measurements-instruction-illustration {
      max-width: 140px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Measurements;