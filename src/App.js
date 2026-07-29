// // App.js
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ThemeProvider } from './contexts/themeContext';
// import { AuthProvider, useAuth } from './providers/AuthProvider';
// import { ToastProvider } from './providers/ToastProvider';
// import { useLocation } from 'react-router-dom';
// import './App.css';

// import Profile from './screens/Profile';
// import BottomNav from './components/BottomNav';
// import RegisterPage from './screens/Register';
// import Login from './screens/Login';
// import SplashScreen from './screens/SplashScreen';
// import Bookings from './screens/Bookings';
// import Home from './screens/Homepage';
// import DesignDetails from './screens/DesignDetails';
// import Measurements from './screens/Measurements';
// import Portfolio from './screens/Portfolio';
// import PlaceOrder from './screens/PlaceOrder';
// import TailorAppointments from './screens/TailorAppointments';
// import TailorDashboard from './screens/TailorDashboard';
// import TailorLogin from './screens/TailorLogin';
// import TailorOrders from './screens/TailorOrders';
// import TailorUpload from './screens/TailorUpload';
// import OrderTracking from './screens/OrderTracking';
  
// const ProtectedRoute = ({ children, requiredRole = null, redirectTo = '/login' }) => {
//   const { isAuthenticated, loading, user } = useAuth();

//   if (loading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: '#F5F7FA',
//         color: '#2A3755'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div className="spinner" style={{
//             border: '4px solid #DCE4EE',
//             borderTop: '4px solid #1A6FD4',
//             borderRadius: '50%',
//             width: '40px',
//             height: '40px',
//             animation: 'spin 1s linear infinite',
//             margin: '0 auto'
//           }}></div>
//           <p style={{ marginTop: '20px' }}>Verifying authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Navigate to={redirectTo} replace />;
//   }

//   if (requiredRole) {
//     const userRole = typeof user?.role === 'object' ? user.role?.name : user?.role;
//     if (userRole !== requiredRole) {
//       return <Navigate to="/unauthorized" replace />;
//     }
//   }

//   return children;
// };

// const AppLayout = ({ children }) => {
//   const location = useLocation();
//   const noBottomNavPaths = ['/login', '/register'];
//   const shouldShowBottomNav = !noBottomNavPaths.includes(location.pathname);

//   return (
//     <>
//       {children}
//       {shouldShowBottomNav && <BottomNav />}
//     </>
//   );
// };

// const spinnerStyles = `
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }
// `;

// if (typeof document !== 'undefined') {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = spinnerStyles;
//   document.head.appendChild(styleElement);
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <AuthProvider>
//           <ToastProvider>
//             <AppLayout>
//               <Routes>
//                 <Route path="home" element={<Home />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/designs/:id" element={<DesignDetails />} />
//                 <Route path="/" element={<SplashScreen />} />
//                 <Route path="/measurements" element={<Measurements />} />
//                 <Route path="/placeorder" element={<PlaceOrder />} />
//                 <Route path="/portfolio" element={<Portfolio />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/tailor/appointments" element={<TailorAppointments />} />
//                 <Route path="/tailor/dashboard" element={<TailorDashboard />} />
//                 <Route path="/tailor/login" element={<TailorLogin />} />
//                 <Route path="/tailor/orders" element={<TailorOrders />} />
//                 <Route path="/tailor/upload" element={<TailorUpload />} />
//                 <Route path="/tracking" element={<OrderTracking />} />
//               </Routes>
//             </AppLayout>
//           </ToastProvider>
//         </AuthProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// // App.js
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ThemeProvider } from './contexts/themeContext';
// import { AuthProvider, useAuth } from './providers/AuthProvider';
// import { ToastProvider } from './providers/ToastProvider';
// import { useLocation } from 'react-router-dom';
// import './App.css';

// import Profile from './screens/Profile';
// import BottomNav from './components/BottomNav';
// import RegisterPage from './screens/Register';
// import Login from './screens/Login';
// import SplashScreen from './screens/SplashScreen';
// import Bookings from './screens/Bookings';
// import Home from './screens/Homepage';
// import DesignDetails from './screens/DesignDetails';
// import Measurements from './screens/Measurements';
// import Portfolio from './screens/Portfolio';
// import PlaceOrder from './screens/PlaceOrder';
// import TailorAppointments from './screens/TailorAppointments';
// import TailorDashboard from './screens/TailorDashboard';
// import TailorLogin from './screens/TailorLogin';
// import TailorOrders from './screens/TailorOrders';
// import TailorUpload from './screens/TailorUpload';
// import OrderTracking from './screens/OrderTracking';
  
// const ProtectedRoute = ({ children, requiredRole = null, redirectTo = '/login' }) => {
//   const { isAuthenticated, loading, user } = useAuth();

//   if (loading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: '#F5F7FA',
//         color: '#2A3755'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div className="spinner" style={{
//             border: '4px solid #DCE4EE',
//             borderTop: '4px solid #1A6FD4',
//             borderRadius: '50%',
//             width: '40px',
//             height: '40px',
//             animation: 'spin 1s linear infinite',
//             margin: '0 auto'
//           }}></div>
//           <p style={{ marginTop: '20px' }}>Verifying authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Navigate to={redirectTo} replace />;
//   }

//   if (requiredRole) {
//     const userRole = typeof user?.role === 'object' ? user.role?.name : user?.role;
//     if (userRole !== requiredRole) {
//       return <Navigate to="/unauthorized" replace />;
//     }
//   }

//   return children;
// };

// const AppLayout = ({ children }) => {
//   const location = useLocation();
  
//   // ✅ Added all tailor routes + auth routes
//   const noBottomNavPaths = [
//     '/login',
//     '/register',
//     '/tailor/login',
//     '/tailor/dashboard',
//     '/tailor/appointments',
//     '/tailor/orders',
//     '/tailor/upload',
//   ];
  
//   const shouldShowBottomNav = !noBottomNavPaths.includes(location.pathname);

//   return (
//     <>
//       {children}
//       {shouldShowBottomNav && <BottomNav />}
//     </>
//   );
// };

// const spinnerStyles = `
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }
// `;

// if (typeof document !== 'undefined') {
//   const styleElement = document.createElement('style');
//   styleElement.textContent = spinnerStyles;
//   document.head.appendChild(styleElement);
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <AuthProvider>
//           <ToastProvider>
//             <AppLayout>
//               <Routes>
//                 {/* Public Routes - No Auth Required */}
//                 <Route path="/" element={<SplashScreen />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/tailor/login" element={<TailorLogin />} />
                
//                 {/* Customer Routes - Auth Required */}
//                 <Route path="/home" element={
//                   <ProtectedRoute>
//                     <Home />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/bookings" element={
//                   <ProtectedRoute>
//                     <Bookings />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/designs/:id" element={
//                   <ProtectedRoute>
//                     <DesignDetails />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/measurements" element={
//                   <ProtectedRoute>
//                     <Measurements />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/placeorder" element={
//                   <ProtectedRoute>
//                     <PlaceOrder />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/portfolio" element={
//                   <ProtectedRoute>
//                     <Portfolio />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/profile" element={
//                   <ProtectedRoute>
//                     <Profile />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/tracking" element={
//                   <ProtectedRoute>
//                     <OrderTracking />
//                   </ProtectedRoute>
//                 } />
                
//                 {/* Tailor Routes - Auth + Role Required */}
//                 <Route path="/tailor/dashboard" element={
//                   <ProtectedRoute requiredRole="tailor">
//                     <TailorDashboard />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/tailor/appointments" element={
//                   <ProtectedRoute requiredRole="tailor">
//                     <TailorAppointments />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/tailor/orders" element={
//                   <ProtectedRoute requiredRole="tailor">
//                     <TailorOrders />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/tailor/upload" element={
//                   <ProtectedRoute requiredRole="tailor">
//                     <TailorUpload />
//                   </ProtectedRoute>
//                 } />
//               </Routes>
//             </AppLayout>
//           </ToastProvider>
//         </AuthProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MockAuthProvider } from './providers/MockAuthProvider';
import { ToastProvider } from './providers/ToastProvider';
import { useLocation } from 'react-router-dom';
import './App.css';

import Profile from './screens/Profile';
import BottomNav from './components/BottomNav';
import RegisterPage from './screens/Register';
import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';
import Bookings from './screens/Bookings';
import Home from './screens/Homepage';
import DesignDetails from './screens/DesignDetails';
import Measurements from './screens/Measurements';
import Portfolio from './screens/Portfolio';
import PlaceOrder from './screens/PlaceOrder';
import TailorAppointments from './screens/TailorAppointments';
import TailorDashboard from './screens/TailorDashboard';
import TailorLogin from './screens/TailorLogin';
import TailorOrders from './screens/TailorOrders';
import TailorUpload from './screens/TailorUpload';
import OrderTracking from './screens/OrderTracking';

// Simple ProtectedRoute that always returns children for testing
const ProtectedRoute = ({ children }) => {
  return children;
};

const AppLayout = ({ children }) => {
  const location = useLocation();
  
  const noBottomNavPaths = [
    '/',
    '/login',
    '/register',
    '/tailor/login',
    '/tailor/dashboard',
    '/tailor/appointments',
    '/tailor/orders',
    '/tailor/upload',
  ];
  
  const shouldShowBottomNav = !noBottomNavPaths.includes(location.pathname);

  return (
    <>
      {children}
      {shouldShowBottomNav && <BottomNav />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <MockAuthProvider>
        <ToastProvider>
          <AppLayout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/tailor/login" element={<TailorLogin />} />
              
              {/* Customer Routes */}
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
              <Route path="/designs/:id" element={<ProtectedRoute><DesignDetails /></ProtectedRoute>} />
              <Route path="/measurements" element={<ProtectedRoute><Measurements /></ProtectedRoute>} />
              <Route path="/placeorder" element={<ProtectedRoute><PlaceOrder /></ProtectedRoute>} />
              <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/tracking" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
              
              {/* Tailor Routes */}
              <Route path="/tailor/dashboard" element={<ProtectedRoute><TailorDashboard /></ProtectedRoute>} />
              <Route path="/tailor/appointments" element={<ProtectedRoute><TailorAppointments /></ProtectedRoute>} />
              <Route path="/tailor/orders" element={<ProtectedRoute><TailorOrders /></ProtectedRoute>} />
              <Route path="/tailor/upload" element={<ProtectedRoute><TailorUpload /></ProtectedRoute>} />
            </Routes>
          </AppLayout>
        </ToastProvider>
      </MockAuthProvider>
    </BrowserRouter>
  );
}

export default App;