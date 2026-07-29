// components/BottomNav.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  Calendar, // ← Add this import
} from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 'home',
      icon: Home,
      label: 'Home',
      path: '/home',
      activePaths: ['/home']
    },
    {
      id: 'measure',
      icon: Ruler,
      label: 'Measure',
      path: '/measurements',
      activePaths: ['/measurements']
    },
    {
      id: 'portfolio',
      icon: Grid3x3,
      label: 'Portfolio',
      path: '/portfolio',
      activePaths: ['/portfolio', '/designs']
    },
    {
      id: 'bookings', // ← Changed from 'orders' to 'bookings'
      icon: Calendar,
      label: 'Book',
      path: '/bookings',
      activePaths: ['/bookings']
    },
    {
      id: 'profile',
      icon: User,
      label: 'Profile',
      path: '/profile',
      activePaths: ['/profile']
    },
  ];

  const isActive = (item) => {
    return item.activePaths.some(path => location.pathname.startsWith(path));
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav style={styles.bottomNav}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item);

        return (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            style={styles.navButton}
            aria-label={item.label}
          >
            <span
              style={{
                ...styles.navIconWrap,
                ...(active ? styles.navIconWrapActive : {}),
              }}
            >
              <Icon
                size={22}
                color={active ? '#FFFFFF' : '#8E8EA0'}
              />
            </span>
            <span style={{
              ...styles.navLabel,
              ...(active ? styles.navLabelActive : {}),
            }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

const styles = {
  bottomNav: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 32px)',
    maxWidth: '400px',
    backgroundColor: '#0A0F1E',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
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
    backgroundColor: '#1A6FD4',
  },
  navLabel: {
    fontSize: '10px',
    color: '#8E8EA0',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  navLabelActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
};

export default BottomNav;