// pages/Home.jsx
import React from 'react';
import {
  Ruler,
  Grid3x3,
  Calendar,
  Package,
  User,
  Heart,
  Clock,
  ChevronRight,
  Shield,
  RefreshCw,
  Award,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Menu,
  // Instagram,
  // Facebook,
  // Twitter
} from 'lucide-react';

// Import components
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredDesigns = [
    { id: 1, name: 'Kaba & Slit', price: 'GHS 450', category: 'Women Wear', bg: '#EADFC2', icon: '👗' },
    { id: 2, name: 'Agbada Set', price: 'GHS 600', category: 'Men Wear', bg: '#DCE4EE', icon: '👔' },
    { id: 3, name: 'Fitted Wedding Gown', price: 'GHS 1,200', category: 'Wedding', bg: '#F2E4E4', icon: '💍' },
    { id: 4, name: 'Ankara Two-Piece', price: 'GHS 380', category: 'Women Wear', bg: '#F4E0C8', icon: '🧵' },
  ];

  const quickActions = [
    { icon: Ruler, label: 'Measure', color: '#1A6FD4' },
    { icon: Grid3x3, label: 'Browse', color: '#8BBAD4' },
    { icon: Calendar, label: 'Book', color: '#F59E0B' },
    { icon: Package, label: 'Track', color: '#22C55E' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F5F7FA',
      paddingBottom: '80px'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #DCE4EE',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '0 16px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#0A0F1E'
            }}>
              Tailor<span style={{ color: '#1A6FD4' }}>Connect</span>
            </span>
            <span style={{
              marginLeft: '12px',
              fontSize: '12px',
              color: '#5C7A9A',
              display: 'none'
            }} className="tagline">
              Measured once. Fitted always.
            </span>
          </div>

          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }} className="desktop-nav">
            <a href="#" style={{ color: '#1A6FD4', fontWeight: '500', fontSize: '14px' }}>Home</a>
            <a href="#" style={{ color: '#5C7A9A', fontSize: '14px', textDecoration: 'none' }}>Measure</a>
            <a href="#" style={{ color: '#5C7A9A', fontSize: '14px', textDecoration: 'none' }}>Portfolio</a>
            <a href="#" style={{ color: '#5C7A9A', fontSize: '14px', textDecoration: 'none' }}>Orders</a>
            <a href="#" style={{ color: '#5C7A9A', fontSize: '14px', textDecoration: 'none' }}>Profile</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{
              padding: '8px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer'
            }}>
              <User size={20} color="#2A3755" />
            </button>
            <button style={{
              padding: '8px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'none'
            }} className="mobile-menu">
              <Menu size={20} color="#2A3755" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 16px'
      }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0A0F1E',
            margin: 0
          }}>
            Akwaaba, Akosua 👋
          </h1>
          <p style={{
            color: '#5C7A9A',
            fontSize: '14px',
            marginTop: '4px'
          }}>
            Your perfect fit starts with one accurate digital profile.
          </p>
        </div>

        {/* Measurement Hero Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          border: '1px solid #DCE4EE',
          marginBottom: '24px',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#1A6FD4',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                TailorConnect's Key Feature
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0A0F1E',
                marginTop: '4px',
                marginBottom: '4px'
              }}>
                Measure once. Fit always.
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#5C7A9A',
                marginTop: '4px',
                maxWidth: '400px'
              }}>
                Create one guided measurement profile and stop repeating the same fitting process for every order.
              </p>
            </div>
            <div style={{
              backgroundColor: '#E8F4FB',
              padding: '12px',
              borderRadius: '12px',
              flexShrink: 0,
              marginLeft: '12px'
            }}>
              <Ruler size={32} color="#1A6FD4" />
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid #DCE4EE'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#5C7A9A'
            }}>0/8 COMPLETED</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A6FD4',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Start measuring <ChevronRight size={16} />
            </span>
          </div>
        </div>

        {/* Benefits Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }} className="benefits-grid">
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center',
            border: '1px solid #DCE4EE'
          }}>
            <RefreshCw size={20} color="#1A6FD4" style={{ margin: '0 auto 4px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#2A3755' }}>Reuse every order</span>
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center',
            border: '1px solid #DCE4EE'
          }}>
            <Shield size={20} color="#1A6FD4" style={{ margin: '0 auto 4px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#2A3755' }}>Shared securely</span>
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center',
            border: '1px solid #DCE4EE'
          }}>
            <Award size={20} color="#1A6FD4" style={{ margin: '0 auto 4px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#2A3755' }}>Fewer alterations</span>
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center',
            border: '1px solid #DCE4EE'
          }}>
            <Sparkles size={20} color="#1A6FD4" style={{ margin: '0 auto 4px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#2A3755' }}>Guided accuracy</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                border: '1px solid #DCE4EE',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                background: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <action.icon size={24} style={{ margin: '0 auto 4px', color: action.color }} />
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#2A3755' }}>{action.label}</div>
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Categories Section - Using CardGrid */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A0F1E', margin: 0 }}>Shop by Category</h2>
            <button style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A6FD4',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              See all <ChevronRight size={16} />
            </button>
          </div>
          <CardGrid />
        </div>

        {/* Upcoming Appointment */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <h2 style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#5C7A9A',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              margin: 0
            }}>
              Upcoming Appointment
            </h2>
          </div>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid #DCE4EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontWeight: '600', color: '#0A0F1E' }}>Fitting Session</div>
              <div style={{
                fontSize: '14px',
                color: '#5C7A9A',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '4px'
              }}>
                <Clock size={16} />
                Jul 22 · 10:00 AM
              </div>
            </div>
            <span style={{
              padding: '4px 12px',
              backgroundColor: '#FEF3C7',
              color: '#F59E0B',
              fontSize: '11px',
              fontWeight: '600',
              borderRadius: '999px'
            }}>
              Pending
            </span>
          </div>
        </div>

        {/* Featured Designs */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A0F1E', margin: 0 }}>Featured Designs</h2>
            <button style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A6FD4',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              See all <ChevronRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }} className="designs-grid">
            {featuredDesigns.map((design) => (
              <div 
                key={design.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #DCE4EE',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{
                  height: '128px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  background: design.bg
                }}>
                  <span style={{ fontSize: '32px' }}>{design.icon}</span>
                  <button 
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      padding: '6px',
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Toggle favorite ${design.id}`);
                    }}
                  >
                    <Heart size={16} color="#5C7A9A" />
                  </button>
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontWeight: '600', color: '#0A0F1E', fontSize: '14px' }}>{design.name}</div>
                  <div style={{ color: '#1A6FD4', fontWeight: 'bold', fontSize: '14px', marginTop: '2px' }}>{design.price}</div>
                  <div style={{ color: '#5C7A9A', fontSize: '12px', marginTop: '4px' }}>{design.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Card Showcase */}
        <div style={{ marginTop: '32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A0F1E', margin: 0 }}>Featured Product</h2>
          </div>
          <ProductCard />
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '1px solid #DCE4EE'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }} className="footer-grid">
            <div>
              <h3 style={{
                fontWeight: 'bold',
                color: '#0A0F1E',
                fontSize: '18px',
                margin: 0
              }}>
                Tailor<span style={{ color: '#1A6FD4' }}>Connect</span>
              </h3>
              <p style={{ fontSize: '14px', color: '#5C7A9A', marginTop: '8px' }}>
                Measured once. Fitted always.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                {/* <Instagram size={20} color="#5C7A9A" style={{ cursor: 'pointer' }} />
                <Facebook size={20} color="#5C7A9A" style={{ cursor: 'pointer' }} />
                <Twitter size={20} color="#5C7A9A" style={{ cursor: 'pointer' }} /> */}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', color: '#0A0F1E', fontSize: '14px', margin: 0 }}>Quick Links</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '8px',
                fontSize: '14px',
                color: '#5C7A9A'
              }}>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#5C7A9A', textDecoration: 'none' }}>About Us</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#5C7A9A', textDecoration: 'none' }}>How It Works</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#5C7A9A', textDecoration: 'none' }}>Pricing</a></li>
                <li style={{ marginBottom: '6px' }}><a href="#" style={{ color: '#5C7A9A', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', color: '#0A0F1E', fontSize: '14px', margin: 0 }}>Contact</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '8px',
                fontSize: '14px',
                color: '#5C7A9A'
              }}>
                <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} /> +233 20 123 4567
                </li>
                <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} /> info@tailorconnect.com
                </li>
                <li style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} /> Accra, Ghana
                </li>
              </ul>
            </div>
          </div>
          <div style={{
            marginTop: '32px',
            paddingTop: '16px',
            borderTop: '1px solid #DCE4EE',
            textAlign: 'center',
            fontSize: '12px',
            color: '#5C7A9A'
          }}>
            &copy; 2026 TailorConnect. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 640px) {
          .benefits-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .designs-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .tagline {
            display: inline-block !important;
          }
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu {
            display: inline-block !important;
          }
        }

        @media (max-width: 480px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .designs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;


















// // // pages/Home.jsx
// // import React, { useState, useEffect } from 'react';
// // import {
// //   Ruler,
// //   Grid3x3,
// //   Calendar,
// //   Package,
// //   User,
// //   Heart,
// //   Clock,
// //   ChevronRight,
// //   Shield,
// //   RefreshCw,
// //   Award,
// //   Sparkles,
// //   Phone,
// //   Mail,
// //   MapPin,
// //   Menu,
// //   Search,
// //   Bell,
// //   Settings,
// //   Star,
// //   TrendingUp,
// //   Layers,
// //   Scissors,
// //   CheckCircle,
// //   ArrowRight
// // } from 'lucide-react';

// // // Import components
// // import CardGrid from '../components/CardGrid';
// // import Hero from '../components/Hero';
// // import ProductCard from '../components/ProductCard';

// // const Home = () => {
// //   // State for real data (will come from API)
// //   const [userData, setUserData] = useState({
// //     firstName: 'Akosua',
// //     lastName: 'Mensah',
// //     measurementProgress: 0,
// //     upcomingAppointment: {
// //       date: 'Jul 22',
// //       time: '10:00 AM',
// //       type: 'Fitting Session',
// //       status: 'Pending'
// //     }
// //   });

// //   const [featuredDesigns, setFeaturedDesigns] = useState([
// //     { id: 1, name: 'Kaba & Slit', price: 'GHS 450', category: 'Women Wear', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
// //     { id: 2, name: 'Agbada Set', price: 'GHS 600', category: 'Men Wear', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
// //     { id: 3, name: 'Fitted Wedding Gown', price: 'GHS 1,200', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
// //     { id: 4, name: 'Ankara Two-Piece', price: 'GHS 380', category: 'Women Wear', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
// //   ]);

// //   const [recentOrders, setRecentOrders] = useState([
// //     { id: 1, name: 'Kaba & Slit', status: 'In Progress', date: 'Jul 20', price: 'GHS 450' },
// //     { id: 2, name: 'Agbada Set', status: 'Ready', date: 'Jul 18', price: 'GHS 600' },
// //   ]);

// //   const [stats, setStats] = useState({
// //     totalOrders: 12,
// //     completedOrders: 8,
// //     savedMeasurements: 8,
// //     favoriteDesigns: 6
// //   });

// //   // Mock API call simulation
// //   useEffect(() => {
// //     // Fetch user data, designs, orders etc.
// //     // This will be replaced with actual API calls
// //     const fetchData = async () => {
// //       // Simulate API call
// //       // const response = await fetch('/api/home-data');
// //       // const data = await response.json();
// //       // setUserData(data.user);
// //       // setFeaturedDesigns(data.designs);
// //       // setRecentOrders(data.orders);
// //       // setStats(data.stats);
// //     };
// //     fetchData();
// //   }, []);

// //   const quickActions = [
// //     { icon: Ruler, label: 'Measure', color: '#1A6FD4', description: 'Update your fit' },
// //     { icon: Grid3x3, label: 'Browse', color: '#8BBAD4', description: 'Explore designs' },
// //     { icon: Calendar, label: 'Book', color: '#F59E0B', description: 'Schedule fitting' },
// //     { icon: Package, label: 'Track', color: '#22C55E', description: 'Follow orders' },
// //   ];

// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <header style={styles.header}>
// //         <div style={styles.headerInner}>
// //           <div style={styles.headerLeft}>
// //             <span style={styles.logo}>
// //               Tailor<span style={styles.logoAccent}>Connect</span>
// //             </span>
// //             <span style={styles.tagline}>Measured once. Fitted always.</span>
// //           </div>

// //           <nav style={styles.desktopNav}>
// //             <a href="#" style={styles.navLinkActive}>Home</a>
// //             <a href="#" style={styles.navLink}>Measure</a>
// //             <a href="#" style={styles.navLink}>Portfolio</a>
// //             <a href="#" style={styles.navLink}>Orders</a>
// //             <a href="#" style={styles.navLink}>Profile</a>
// //           </nav>

// //           <div style={styles.headerRight}>
// //             <button style={styles.iconButton}>
// //               <Search size={20} color="#2A3755" />
// //             </button>
// //             <button style={styles.iconButton}>
// //               <Bell size={20} color="#2A3755" />
// //             </button>
// //             <button style={styles.iconButton}>
// //               <User size={20} color="#2A3755" />
// //             </button>
// //             <button style={styles.menuButton}>
// //               <Menu size={20} color="#2A3755" />
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main style={styles.main}>
// //         {/* Welcome Section */}
// //         <section style={styles.welcomeSection}>
// //           <div style={styles.welcomeContent}>
// //             <div>
// //               <h1 style={styles.welcomeTitle}>
// //                 Akwaaba, {userData.firstName} 
// //               </h1>
// //               <p style={styles.welcomeSubtitle}>
// //                 Your perfect fit starts with one accurate digital profile.
// //               </p>
// //             </div>
// //             <div style={styles.welcomeStats}>
// //               <div style={styles.welcomeStat}>
// //                 <span style={styles.welcomeStatNumber}>{stats.totalOrders}</span>
// //                 <span style={styles.welcomeStatLabel}>Orders</span>
// //               </div>
// //               <div style={styles.welcomeStatDivider} />
// //               <div style={styles.welcomeStat}>
// //                 <span style={styles.welcomeStatNumber}>{stats.completedOrders}</span>
// //                 <span style={styles.welcomeStatLabel}>Completed</span>
// //               </div>
// //               <div style={styles.welcomeStatDivider} />
// //               <div style={styles.welcomeStat}>
// //                 <span style={styles.welcomeStatNumber}>{stats.favoriteDesigns}</span>
// //                 <span style={styles.welcomeStatLabel}>Favorites</span>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Quick Stats Grid */}
// //         <section style={styles.statsGrid}>
// //           <div style={styles.statCard}>
// //             <div style={styles.statCardIcon}><Ruler size={24} color="#1A6FD4" /></div>
// //             <div style={styles.statCardContent}>
// //               <span style={styles.statCardNumber}>8/8</span>
// //               <span style={styles.statCardLabel}>Measurements Saved</span>
// //             </div>
// //           </div>
// //           <div style={styles.statCard}>
// //             <div style={styles.statCardIcon}><Package size={24} color="#22C55E" /></div>
// //             <div style={styles.statCardContent}>
// //               <span style={styles.statCardNumber}>{stats.completedOrders}</span>
// //               <span style={styles.statCardLabel}>Orders Completed</span>
// //             </div>
// //           </div>
// //           <div style={styles.statCard}>
// //             <div style={styles.statCardIcon}><Calendar size={24} color="#F59E0B" /></div>
// //             <div style={styles.statCardContent}>
// //               <span style={styles.statCardNumber}>3</span>
// //               <span style={styles.statCardLabel}>Upcoming Fittings</span>
// //             </div>
// //           </div>
// //           <div style={styles.statCard}>
// //             <div style={styles.statCardIcon}><Star size={24} color="#8BBAD4" /></div>
// //             <div style={styles.statCardContent}>
// //               <span style={styles.statCardNumber}>4.9★</span>
// //               <span style={styles.statCardLabel}>Average Rating</span>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Measurement Hero Card */}
// //         <section style={styles.measurementCard}>
// //           <div style={styles.measurementCardInner}>
// //             <div style={styles.measurementCardContent}>
// //               <div style={styles.measurementBadge}>
// //                 <Scissors size={14} /> Key Feature
// //               </div>
// //               <h3 style={styles.measurementCardTitle}>
// //                 Measure once. Fit always.
// //               </h3>
// //               <p style={styles.measurementCardDesc}>
// //                 Create one guided measurement profile and stop repeating the same fitting process for every order.
// //               </p>
// //               <div style={styles.measurementCardFooter}>
// //                 <span style={styles.measurementProgress}>
// //                   <CheckCircle size={16} color="#22C55E" />
// //                   {userData.measurementProgress}/8 COMPLETED
// //                 </span>
// //                 <span style={styles.measurementCTA}>
// //                   Start measuring <ArrowRight size={16} />
// //                 </span>
// //               </div>
// //             </div>
// //             <div style={styles.measurementCardIcon}>
// //               <Ruler size={48} color="#1A6FD4" />
// //             </div>
// //           </div>
// //         </section>

// //         {/* Quick Actions */}
// //         <section style={styles.quickActions}>
// //           {quickActions.map((action, index) => (
// //             <button key={index} style={styles.quickAction}>
// //               <action.icon size={28} color={action.color} />
// //               <span style={styles.quickActionLabel}>{action.label}</span>
// //               <span style={styles.quickActionDesc}>{action.description}</span>
// //             </button>
// //           ))}
// //         </section>

// //         {/* Hero Section */}
// //         <Hero />

// //         {/* Categories Section */}
// //         <section style={styles.section}>
// //           <div style={styles.sectionHeader}>
// //             <div>
// //               <span style={styles.sectionBadge}>Collections</span>
// //               <h2 style={styles.sectionTitle}>Shop by Category</h2>
// //             </div>
// //             <button style={styles.sectionSeeAll}>
// //               See all <ChevronRight size={16} />
// //             </button>
// //           </div>
// //           <CardGrid />
// //         </section>

// //         {/* Recent Orders */}
// //         <section style={styles.section}>
// //           <div style={styles.sectionHeader}>
// //             <div>
// //               <span style={styles.sectionBadge}>Orders</span>
// //               <h2 style={styles.sectionTitle}>Recent Orders</h2>
// //             </div>
// //             <button style={styles.sectionSeeAll}>
// //               See all <ChevronRight size={16} />
// //             </button>
// //           </div>
// //           <div style={styles.orderList}>
// //             {recentOrders.map((order) => (
// //               <div key={order.id} style={styles.orderItem}>
// //                 <div style={styles.orderItemLeft}>
// //                   <div style={styles.orderItemIcon}>👗</div>
// //                   <div>
// //                     <div style={styles.orderItemName}>{order.name}</div>
// //                     <div style={styles.orderItemDate}>{order.date}</div>
// //                   </div>
// //                 </div>
// //                 <div style={styles.orderItemRight}>
// //                   <span style={{
// //                     ...styles.orderStatus,
// //                     ...(order.status === 'Ready' ? styles.orderStatusReady : styles.orderStatusProgress)
// //                   }}>
// //                     {order.status}
// //                   </span>
// //                   <span style={styles.orderItemPrice}>{order.price}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Upcoming Appointment */}
// //         <section style={styles.section}>
// //           <div style={styles.sectionHeader}>
// //             <div>
// //               <span style={styles.sectionBadge}>Schedule</span>
// //               <h2 style={styles.sectionTitle}>Upcoming Appointment</h2>
// //             </div>
// //           </div>
// //           <div style={styles.appointmentCard}>
// //             <div style={styles.appointmentCardLeft}>
// //               <div style={styles.appointmentIcon}>📅</div>
// //               <div>
// //                 <div style={styles.appointmentTitle}>{userData.upcomingAppointment.type}</div>
// //                 <div style={styles.appointmentDateTime}>
// //                   <Clock size={14} />
// //                   {userData.upcomingAppointment.date} · {userData.upcomingAppointment.time}
// //                 </div>
// //               </div>
// //             </div>
// //             <span style={styles.appointmentStatus}>Pending</span>
// //           </div>
// //         </section>

// //         {/* Featured Designs */}
// //         <section style={styles.section}>
// //           <div style={styles.sectionHeader}>
// //             <div>
// //               <span style={styles.sectionBadge}>Trending</span>
// //               <h2 style={styles.sectionTitle}>Featured Designs</h2>
// //             </div>
// //             <button style={styles.sectionSeeAll}>
// //               See all <ChevronRight size={16} />
// //             </button>
// //           </div>
// //           <div style={styles.designsGrid}>
// //             {featuredDesigns.map((design) => (
// //               <div key={design.id} style={styles.designCard}>
// //                 <div style={{ ...styles.designImage, backgroundImage: `url(${design.image})` }}>
// //                   <button style={styles.designFav}>
// //                     <Heart size={16} color="#FFFFFF" />
// //                   </button>
// //                 </div>
// //                 <div style={styles.designContent}>
// //                   <div style={styles.designHeader}>
// //                     <span style={styles.designName}>{design.name}</span>
// //                     <span style={styles.designRating}>★ {design.rating}</span>
// //                   </div>
// //                   <div style={styles.designFooter}>
// //                     <span style={styles.designCategory}>{design.category}</span>
// //                     <span style={styles.designPrice}>{design.price}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Product Card Showcase */}
// //         <section style={styles.section}>
// //           <div style={styles.sectionHeader}>
// //             <div>
// //               <span style={styles.sectionBadge}>Featured</span>
// //               <h2 style={styles.sectionTitle}>Trending Now</h2>
// //             </div>
// //           </div>
// //           <ProductCard />
// //         </section>

// //         {/* Footer */}
// //         <footer style={styles.footer}>
// //           <div style={styles.footerInner}>
// //             <div style={styles.footerBrand}>
// //               <h3 style={styles.footerLogo}>
// //                 Tailor<span style={styles.footerLogoAccent}>Connect</span>
// //               </h3>
// //               <p style={styles.footerTagline}>Measured once. Fitted always.</p>
// //               <div style={styles.footerSocial}>
// //                 <span style={styles.socialIcon}>📱</span>
// //                 <span style={styles.socialIcon}>📘</span>
// //                 <span style={styles.socialIcon}>🐦</span>
// //               </div>
// //             </div>
// //             <div style={styles.footerLinks}>
// //               <h4 style={styles.footerLinksTitle}>Quick Links</h4>
// //               <ul style={styles.footerLinksList}>
// //                 <li><a href="#" style={styles.footerLink}>About Us</a></li>
// //                 <li><a href="#" style={styles.footerLink}>How It Works</a></li>
// //                 <li><a href="#" style={styles.footerLink}>Pricing</a></li>
// //                 <li><a href="#" style={styles.footerLink}>Contact</a></li>
// //               </ul>
// //             </div>
// //             <div style={styles.footerContact}>
// //               <h4 style={styles.footerLinksTitle}>Contact</h4>
// //               <ul style={styles.footerLinksList}>
// //                 <li style={styles.footerContactItem}><Phone size={16} /> +233 20 123 4567</li>
// //                 <li style={styles.footerContactItem}><Mail size={16} /> info@tailorconnect.com</li>
// //                 <li style={styles.footerContactItem}><MapPin size={16} /> Accra, Ghana</li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div style={styles.footerBottom}>
// //             <span>&copy; 2026 TailorConnect. All rights reserved.</span>
// //           </div>
// //         </footer>
// //       </main>

// //       {/* Responsive Styles */}
// //       <style>{`
// //         @media (min-width: 768px) {
// //           .desktop-nav { display: flex !important; }
// //           .menu-button { display: none !important; }
// //         }

// //         @media (max-width: 767px) {
// //           .desktop-nav { display: none !important; }
// //           .menu-button { display: inline-flex !important; }
// //           .tagline { display: none !important; }
// //           .welcome-stats { flex-wrap: wrap !important; gap: 8px !important; }
// //           .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //           .quick-actions { grid-template-columns: repeat(2, 1fr) !important; }
// //           .designs-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //           .footer-inner { grid-template-columns: 1fr !important; gap: 24px !important; }
// //           .measurement-card-inner { flex-direction: column !important; }
// //         }

// //         @media (max-width: 480px) {
// //           .welcome-title { font-size: 22px !important; }
// //           .stat-card { padding: 12px !important; }
// //           .stat-card-number { font-size: 18px !important; }
// //           .quick-action { padding: 14px !important; }
// //           .design-card { border-radius: 12px !important; }
// //           .design-image { height: 120px !important; }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     backgroundColor: '#F5F7FA',
// //     fontFamily: 'Inter, -apple-system, sans-serif',
// //     paddingBottom: '80px',
// //   },
// //   header: {
// //     backgroundColor: '#FFFFFF',
// //     borderBottom: '1px solid #DCE4EE',
// //     position: 'sticky',
// //     top: 0,
// //     zIndex: 50,
// //     padding: '0 16px',
// //   },
// //   headerInner: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     height: '64px',
// //   },
// //   headerLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   logo: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //   },
// //   logoAccent: {
// //     color: '#1A6FD4',
// //   },
// //   tagline: {
// //     fontSize: '12px',
// //     color: '#5C7A9A',
// //   },
// //   desktopNav: {
// //     display: 'none',
// //     alignItems: 'center',
// //     gap: '28px',
// //   },
// //   navLink: {
// //     color: '#5C7A9A',
// //     fontSize: '14px',
// //     textDecoration: 'none',
// //     fontWeight: '500',
// //     transition: 'color 0.2s',
// //   },
// //   navLinkActive: {
// //     color: '#1A6FD4',
// //     fontSize: '14px',
// //     textDecoration: 'none',
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //   },
// //   iconButton: {
// //     padding: '8px',
// //     borderRadius: '50%',
// //     border: 'none',
// //     background: 'transparent',
// //     cursor: 'pointer',
// //     transition: 'background 0.2s',
// //   },
// //   menuButton: {
// //     padding: '8px',
// //     borderRadius: '50%',
// //     border: 'none',
// //     background: 'transparent',
// //     cursor: 'pointer',
// //     display: 'inline-flex',
// //   },
// //   main: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '24px 16px',
// //   },
// //   welcomeSection: {
// //     marginBottom: '28px',
// //   },
// //   welcomeContent: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //     flexWrap: 'wrap',
// //     gap: '16px',
// //   },
// //   welcomeTitle: {
// //     fontSize: '28px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //     margin: 0,
// //     fontFamily: 'Fraunces, serif',
// //   },
// //   welcomeSubtitle: {
// //     color: '#5C7A9A',
// //     fontSize: '15px',
// //     marginTop: '4px',
// //   },
// //   welcomeStats: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '16px',
// //     padding: '12px 20px',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '12px',
// //     border: '1px solid #DCE4EE',
// //   },
// //   welcomeStat: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   welcomeStatNumber: {
// //     fontSize: '18px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //   },
// //   welcomeStatLabel: {
// //     fontSize: '11px',
// //     color: '#5C7A9A',
// //     fontWeight: '500',
// //   },
// //   welcomeStatDivider: {
// //     width: '1px',
// //     height: '30px',
// //     backgroundColor: '#DCE4EE',
// //   },
// //   statsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(4, 1fr)',
// //     gap: '12px',
// //     marginBottom: '24px',
// //   },
// //   statCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '14px',
// //     padding: '16px',
// //     border: '1px solid #DCE4EE',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //     transition: 'box-shadow 0.2s',
// //   },
// //   statCardIcon: {
// //     width: '44px',
// //     height: '44px',
// //     borderRadius: '12px',
// //     backgroundColor: '#E8F4FB',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexShrink: 0,
// //   },
// //   statCardContent: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   statCardNumber: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //     lineHeight: '1.2',
// //   },
// //   statCardLabel: {
// //     fontSize: '12px',
// //     color: '#5C7A9A',
// //     fontWeight: '500',
// //   },
// //   measurementCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '16px',
// //     padding: '24px',
// //     border: '1px solid #DCE4EE',
// //     marginBottom: '24px',
// //     cursor: 'pointer',
// //     transition: 'box-shadow 0.2s',
// //   },
// //   measurementCardInner: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     gap: '20px',
// //   },
// //   measurementCardContent: {
// //     flex: 1,
// //   },
// //   measurementBadge: {
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     color: '#1A6FD4',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //     backgroundColor: '#E8F4FB',
// //     padding: '4px 12px',
// //     borderRadius: '50px',
// //   },
// //   measurementCardTitle: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //     marginTop: '8px',
// //     marginBottom: '4px',
// //     fontFamily: 'Fraunces, serif',
// //   },
// //   measurementCardDesc: {
// //     fontSize: '14px',
// //     color: '#5C7A9A',
// //     marginTop: '4px',
// //     maxWidth: '400px',
// //   },
// //   measurementCardFooter: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     marginTop: '16px',
// //     paddingTop: '16px',
// //     borderTop: '1px solid #DCE4EE',
// //   },
// //   measurementProgress: {
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#5C7A9A',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //   },
// //   measurementCTA: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#1A6FD4',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //   },
// //   measurementCardIcon: {
// //     width: '80px',
// //     height: '80px',
// //     borderRadius: '16px',
// //     backgroundColor: '#E8F4FB',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexShrink: 0,
// //   },
// //   quickActions: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(4, 1fr)',
// //     gap: '12px',
// //     marginBottom: '24px',
// //   },
// //   quickAction: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '14px',
// //     padding: '18px',
// //     border: '1px solid #DCE4EE',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s',
// //     textAlign: 'center',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     gap: '4px',
// //     background: 'none',
// //   },
// //   quickActionLabel: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //     marginTop: '4px',
// //   },
// //   quickActionDesc: {
// //     fontSize: '11px',
// //     color: '#5C7A9A',
// //   },
// //   section: {
// //     marginBottom: '32px',
// //   },
// //   sectionHeader: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     marginBottom: '16px',
// //   },
// //   sectionBadge: {
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     color: '#1A6FD4',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //   },
// //   sectionTitle: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //     margin: '4px 0 0',
// //     fontFamily: 'Fraunces, serif',
// //   },
// //   sectionSeeAll: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#1A6FD4',
// //     border: 'none',
// //     background: 'none',
// //     cursor: 'pointer',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '4px',
// //   },
// //   orderList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   orderItem: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '12px',
// //     padding: '16px',
// //     border: '1px solid #DCE4EE',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   orderItemLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   orderItemIcon: {
// //     fontSize: '24px',
// //   },
// //   orderItemName: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //   },
// //   orderItemDate: {
// //     fontSize: '12px',
// //     color: '#5C7A9A',
// //   },
// //   orderItemRight: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   orderStatus: {
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     padding: '4px 12px',
// //     borderRadius: '50px',
// //   },
// //   orderStatusReady: {
// //     backgroundColor: '#DCFCE7',
// //     color: '#22C55E',
// //   },
// //   orderStatusProgress: {
// //     backgroundColor: '#FEF3C7',
// //     color: '#F59E0B',
// //   },
// //   orderItemPrice: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //   },
// //   appointmentCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '12px',
// //     padding: '16px',
// //     border: '1px solid #DCE4EE',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   appointmentCardLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   appointmentIcon: {
// //     fontSize: '24px',
// //   },
// //   appointmentTitle: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //   },
// //   appointmentDateTime: {
// //     fontSize: '13px',
// //     color: '#5C7A9A',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '6px',
// //     marginTop: '2px',
// //   },
// //   appointmentStatus: {
// //     padding: '4px 12px',
// //     backgroundColor: '#FEF3C7',
// //     color: '#F59E0B',
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     borderRadius: '50px',
// //   },
// //   designsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(4, 1fr)',
// //     gap: '16px',
// //   },
// //   designCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: '14px',
// //     overflow: 'hidden',
// //     border: '1px solid #DCE4EE',
// //     cursor: 'pointer',
// //     transition: 'box-shadow 0.2s',
// //   },
// //   designImage: {
// //     height: '160px',
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     position: 'relative',
// //   },
// //   designFav: {
// //     position: 'absolute',
// //     top: '8px',
// //     right: '8px',
// //     padding: '6px',
// //     backgroundColor: 'rgba(0,0,0,0.4)',
// //     borderRadius: '50%',
// //     border: 'none',
// //     cursor: 'pointer',
// //     backdropFilter: 'blur(4px)',
// //   },
// //   designContent: {
// //     padding: '12px',
// //   },
// //   designHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //   },
// //   designName: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //   },
// //   designRating: {
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#F59E0B',
// //   },
// //   designFooter: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginTop: '4px',
// //   },
// //   designCategory: {
// //     fontSize: '12px',
// //     color: '#5C7A9A',
// //   },
// //   designPrice: {
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     color: '#1A6FD4',
// //   },
// //   footer: {
// //     marginTop: '48px',
// //     paddingTop: '32px',
// //     borderTop: '1px solid #DCE4EE',
// //   },
// //   footerInner: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(3, 1fr)',
// //     gap: '32px',
// //   },
// //   footerBrand: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   footerLogo: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#0A0F1E',
// //     margin: 0,
// //   },
// //   footerLogoAccent: {
// //     color: '#1A6FD4',
// //   },
// //   footerTagline: {
// //     fontSize: '14px',
// //     color: '#5C7A9A',
// //     margin: 0,
// //   },
// //   footerSocial: {
// //     display: 'flex',
// //     gap: '12px',
// //   },
// //   socialIcon: {
// //     fontSize: '20px',
// //     cursor: 'pointer',
// //   },
// //   footerLinks: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   footerLinksTitle: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#0A0F1E',
// //     margin: '0 0 8px',
// //   },
// //   footerLinksList: {
// //     listStyle: 'none',
// //     padding: 0,
// //     margin: 0,
// //     fontSize: '14px',
// //     color: '#5C7A9A',
// //   },
// //   footerLink: {
// //     color: '#5C7A9A',
// //     textDecoration: 'none',
// //     display: 'block',
// //     padding: '4px 0',
// //   },
// //   footerContactItem: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     padding: '4px 0',
// //   },
// //   footerBottom: {
// //     marginTop: '32px',
// //     paddingTop: '16px',
// //     borderTop: '1px solid #DCE4EE',
// //     textAlign: 'center',
// //     fontSize: '12px',
// //     color: '#5C7A9A',
// //   },
// // };

// // export default Home;

// // pages/Home.jsx
// import React, { useState } from 'react';
// import {
//   Search,
//   SlidersHorizontal,
//   Heart,
//   Home as HomeIcon,
//   ShoppingBag,
//   User,
//   ChevronRight,
//   Bell,
//   Menu,
// } from 'lucide-react';

// // Import components
// import CardGrid from '../components/CardGrid';
// import Hero from '../components/Hero';
// import ProductCard from '../components/ProductCard';

// const Home = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const filters = ['All', 'Jackets', 'Jeans'];

//   const [designs] = useState([
//     {
//       id: 1,
//       name: 'Casual Hoodie Brown',
//       category: 'Casual Men',
//       price: '$45.00',
//       oldPrice: null,
//       image:
//         'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//       id: 2,
//       name: 'Casual Hoodie Black',
//       category: 'Casual Men',
//       price: '$48.00',
//       oldPrice: null,
//       image:
//         'https://images.unsplash.com/photo-1556821861-8fc04c3b0946?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//       id: 3,
//       name: 'Fitted Wedding Gown',
//       category: 'Wedding',
//       price: '$120.00',
//       oldPrice: '$150.00',
//       image:
//         'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
//     },
//     {
//       id: 4,
//       name: 'Ankara Two-Piece',
//       category: 'Women Wear',
//       price: '$38.00',
//       oldPrice: null,
//       image:
//         'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80',
//     },
//   ]);

//   const [activeTab, setActiveTab] = useState('home');

//   return (
//     <div style={styles.phoneFrame}>
//       <div style={styles.container}>
//         {/* Status Bar */}
//         <div style={styles.statusBar}>
//           <span style={styles.time}>9:41</span>
//           <div style={styles.statusIcons}>
//             <span style={styles.statusIcon}>●</span>
//             <span style={styles.statusIcon}>WiFi</span>
//             <span style={styles.statusIcon}>🔋</span>
//           </div>
//         </div>

//         {/* Header */}
//         <header style={styles.header}>
//           <div style={styles.headerLeft}>
//             <h1 style={styles.brand}>Expiration Fashion</h1>
//           </div>
//           <div style={styles.headerRight}>
//             <button style={styles.iconButton}>
//               <Bell size={20} color="#0A0F1E" />
//             </button>
//             <button style={styles.iconButton}>
//               <Menu size={20} color="#0A0F1E" />
//             </button>
//           </div>
//         </header>

//         {/* Search Bar */}
//         <div style={styles.searchWrapper}>
//           <div style={styles.searchBar}>
//             <Search size={18} color="#8E8EA0" />
//             <span style={styles.searchPlaceholder}>Search</span>
//           </div>
//           <button style={styles.filterButton}>
//             <SlidersHorizontal size={18} color="#0A0F1E" />
//           </button>
//         </div>

//         {/* Filter Chips */}
//         <section style={styles.chipsRow}>
//           {filters.map((filter) => {
//             const isActive = filter === activeFilter;
//             return (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 style={{
//                   ...styles.chip,
//                   ...(isActive ? styles.chipActive : {}),
//                 }}
//               >
//                 {filter}
//               </button>
//             );
//           })}
//         </section>

//         {/* Special For You Section */}
//         <div style={styles.sectionHeader}>
//           <h2 style={styles.sectionTitle}>Special For You</h2>
//           <button style={styles.seeAll}>See All</button>
//         </div>

//         {/* Product Grid */}
//         <section style={styles.grid}>
//           {designs.map((design) => (
//             <div key={design.id} style={styles.card}>
//               <div
//                 style={{
//                   ...styles.cardImage,
//                   backgroundImage: `url(${design.image})`,
//                 }}
//               />
//               <div style={styles.cardBody}>
//                 <span style={styles.cardName}>{design.name}</span>
//                 <span style={styles.cardPrice}>{design.price}</span>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* Hero Section */}
//         <div style={styles.heroWrapper}>
//           <Hero />
//         </div>

//         {/* Categories Section */}
//         <section style={styles.sectionSpacing}>
//           <div style={styles.sectionHeader}>
//             <h2 style={styles.sectionTitle}>Shop by Category</h2>
//             <button style={styles.seeAll}>
//               See All <ChevronRight size={14} />
//             </button>
//           </div>
//           <CardGrid />
//         </section>

//         {/* Product Card Showcase */}
//         <section style={styles.sectionSpacing}>
//           <div style={styles.sectionHeader}>
//             <h2 style={styles.sectionTitle}>Trending Now</h2>
//           </div>
//           <ProductCard />
//         </section>
//       </div>

//       {/* Bottom Navigation */}
//       <nav style={styles.bottomNav}>
//         <button
//           onClick={() => setActiveTab('home')}
//           style={styles.navButton}
//           aria-label="Home"
//         >
//           <span
//             style={{
//               ...styles.navIconWrap,
//               ...(activeTab === 'home' ? styles.navIconWrapActive : {}),
//             }}
//           >
//             <HomeIcon
//               size={20}
//               color={activeTab === 'home' ? '#FFFFFF' : '#8E8EA0'}
//             />
//           </span>
//         </button>

//         <button
//           onClick={() => setActiveTab('shopping')}
//           style={styles.navButton}
//           aria-label="Shopping"
//         >
//           <span
//             style={{
//               ...styles.navIconWrap,
//               ...(activeTab === 'shopping' ? styles.navIconWrapActive : {}),
//             }}
//           >
//             <ShoppingBag
//               size={20}
//               color={activeTab === 'shopping' ? '#FFFFFF' : '#8E8EA0'}
//             />
//           </span>
//         </button>

//         <button
//           onClick={() => setActiveTab('favorites')}
//           style={styles.navButton}
//           aria-label="Favorites"
//         >
//           <span
//             style={{
//               ...styles.navIconWrap,
//               ...(activeTab === 'favorites' ? styles.navIconWrapActive : {}),
//             }}
//           >
//             <Heart
//               size={20}
//               color={activeTab === 'favorites' ? '#FFFFFF' : '#8E8EA0'}
//               fill={activeTab === 'favorites' ? '#FFFFFF' : 'none'}
//             />
//           </span>
//         </button>

//         <button
//           onClick={() => setActiveTab('profile')}
//           style={styles.navButton}
//           aria-label="Profile"
//         >
//           <span
//             style={{
//               ...styles.navIconWrap,
//               ...(activeTab === 'profile' ? styles.navIconWrapActive : {}),
//             }}
//           >
//             <User
//               size={20}
//               color={activeTab === 'profile' ? '#FFFFFF' : '#8E8EA0'}
//             />
//           </span>
//         </button>
//       </nav>
//     </div>
//   );
// };

// const styles = {
//   phoneFrame: {
//     maxWidth: '390px',
//     margin: '0 auto',
//     minHeight: '100vh',
//     backgroundColor: '#F8F8FA',
//     fontFamily: 'Inter, -apple-system, sans-serif',
//     position: 'relative',
//     paddingBottom: '84px',
//   },
//   container: {
//     padding: '16px 20px',
//   },
//   statusBar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: '8px',
//     marginBottom: '4px',
//   },
//   time: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//   },
//   statusIcons: {
//     display: 'flex',
//     gap: '4px',
//     fontSize: '12px',
//     color: '#0A0F1E',
//   },
//   statusIcon: {
//     fontSize: '12px',
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   headerLeft: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   brand: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     margin: 0,
//     fontFamily: 'Fraunces, serif',
//   },
//   headerRight: {
//     display: 'flex',
//     gap: '8px',
//   },
//   iconButton: {
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     border: 'none',
//     background: 'transparent',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   searchWrapper: {
//     display: 'flex',
//     gap: '10px',
//     marginBottom: '16px',
//   },
//   searchBar: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     backgroundColor: '#FFFFFF',
//     borderRadius: '12px',
//     padding: '12px 16px',
//     border: '1px solid #EEEEF0',
//   },
//   searchPlaceholder: {
//     fontSize: '14px',
//     color: '#8E8EA0',
//   },
//   filterButton: {
//     width: '44px',
//     height: '44px',
//     borderRadius: '12px',
//     border: '1px solid #EEEEF0',
//     backgroundColor: '#FFFFFF',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     flexShrink: 0,
//   },
//   chipsRow: {
//     display: 'flex',
//     gap: '8px',
//     marginBottom: '20px',
//   },
//   chip: {
//     padding: '8px 20px',
//     borderRadius: '50px',
//     border: '1px solid #EEEEF0',
//     backgroundColor: '#FFFFFF',
//     color: '#8E8EA0',
//     fontSize: '14px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//     flexShrink: 0,
//     transition: 'all 0.2s',
//   },
//   chipActive: {
//     backgroundColor: '#0A0F1E',
//     borderColor: '#0A0F1E',
//     color: '#FFFFFF',
//   },
//   sectionHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '14px',
//   },
//   sectionTitle: {
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//     margin: 0,
//     fontFamily: 'Fraunces, serif',
//   },
//   seeAll: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#8E8EA0',
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '14px',
//     marginBottom: '8px',
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     border: '1px solid #EEEEF0',
//     cursor: 'pointer',
//     transition: 'transform 0.2s',
//   },
//   cardImage: {
//     height: '160px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   cardBody: {
//     padding: '10px 12px 14px',
//   },
//   cardName: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#0A0F1E',
//     display: 'block',
//     marginBottom: '4px',
//   },
//   cardPrice: {
//     fontSize: '15px',
//     fontWeight: '700',
//     color: '#0A0F1E',
//   },
//   heroWrapper: {
//     marginTop: '24px',
//     marginBottom: '8px',
//   },
//   sectionSpacing: {
//     marginTop: '32px',
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

// export default Home;