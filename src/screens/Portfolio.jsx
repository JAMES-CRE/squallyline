// screens/Portfolio.jsx
import React, { useState } from 'react';
import {
  Home,
  Ruler,
  Grid3x3,
  Package,
  User,
  Heart,
  Search,
  Filter,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Traditional',
    "Men's Wear",
    'Wedding',
    "Women's Wear",
    'Suit',
    'Casual',
  ];

  const designs = [
    {
      id: 1,
      name: 'Kaba & Slit',
      category: 'Traditional',
      price: 'GHS 450',
      bg: '#EADFC2',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Agbada Set',
      category: "Men's Wear",
      price: 'GHS 600',
      bg: '#DCE4EE',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Fitted Wedding Gown',
      category: 'Wedding',
      price: 'GHS 1,200',
      bg: '#F2E4E4',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      name: 'Ankara Two-Piece',
      category: "Women's Wear",
      price: 'GHS 380',
      bg: '#F4E0C8',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 5,
      name: 'Slim Fit Suit',
      category: 'Suit',
      price: 'GHS 950',
      bg: '#DDE3E8',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 6,
      name: 'Casual Shirt',
      category: 'Casual',
      price: 'GHS 180',
      bg: '#E6EAD9',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleDesignClick = (id) => {
    navigate(`/designs/${id}`);
  };

  const filteredDesigns = designs
    .filter((d) => activeCategory === 'All' || d.category === activeCategory)
    .filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button onClick={() => navigate('/home')} style={styles.backButton}>
          ← Back to Home
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <span style={styles.eyebrow}>Portfolio</span>
          <h1 style={styles.pageTitle}>Our Work</h1>
          <p style={styles.pageSubtitle}>
            Browse completed pieces by category.
          </p>
        </div>

        {/* Search Bar */}
        <div style={styles.searchWrapper}>
          <div style={styles.searchBar}>
            <Search size={18} color="#8E8EA0" />
            <input
              type="text"
              placeholder="Search designs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            {searchQuery && (
              <button onClick={clearSearch} style={styles.clearButton}>
                <X size={16} color="#8E8EA0" />
              </button>
            )}
          </div>
          <button style={styles.filterButton}>
            <Filter size={18} color="#0A0F1E" />
          </button>
        </div>

        {/* Category Chips */}
        <div style={styles.chipRow}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                ...styles.chip,
                ...(activeCategory === category ? styles.chipActive : {}),
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div style={styles.resultsCount}>
          <span>{filteredDesigns.length} designs found</span>
        </div>

        {/* Gallery Grid */}
        <div style={styles.galleryGrid}>
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              onClick={() => handleDesignClick(design.id)}
              style={styles.designCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                  onClick={(e) => toggleFavorite(design.id, e)}
                  style={{
                    ...styles.favButton,
                    ...(favorites.includes(design.id)
                      ? styles.favButtonActive
                      : {}),
                  }}
                >
                  <Heart
                    size={16}
                    color={
                      favorites.includes(design.id) ? '#FF4444' : '#FFFFFF'
                    }
                    fill={favorites.includes(design.id) ? '#FF4444' : 'none'}
                  />
                </button>
              </div>
              <div style={styles.meta}>
                <div style={styles.name}>{design.name}</div>
                <div style={styles.price}>{design.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div style={styles.emptyState}>
            <Grid3x3 size={48} color="#DCE4EE" />
            <h3 style={styles.emptyTitle}>No designs found</h3>
            <p style={styles.emptyText}>
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav style={styles.bottomNav}>
        <button
          onClick={() => navigate('/home')}
          style={styles.navButton}
          aria-label="Home"
        >
          <span style={styles.navIconWrap}>
            <Home size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/measurements')}
          style={styles.navButton}
          aria-label="Measure"
        >
          <span style={styles.navIconWrap}>
            <Ruler size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/portfolio')}
          style={styles.navButton}
          aria-label="Portfolio"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <Grid3x3 size={20} color="#FFFFFF" />
          </span>
        </button>
        <button
          onClick={() => navigate('/tracking')}
          style={styles.navButton}
          aria-label="Orders"
        >
          <span style={styles.navIconWrap}>
            <Package size={20} color="#8E8EA0" />
          </span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          style={styles.navButton}
          aria-label="Profile"
        >
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
    transition: 'color 0.2s',
  },
  pageHeader: {
    marginBottom: '20px',
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
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#5C7A9A',
    margin: 0,
    lineHeight: 1.5,
  },
  searchWrapper: {
    display: 'flex',
    gap: '10px',
    marginBottom: '16px',
  },
  searchBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '10px 14px',
    border: '1.5px solid #DCE4EE',
    transition: 'border-color 0.2s',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    color: '#0A0F1E',
    background: 'transparent',
  },
  clearButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s',
  },
  chipRow: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    marginBottom: '16px',
    paddingBottom: '4px',
  },
  chip: {
    padding: '8px 18px',
    borderRadius: '50px',
    border: '1.5px solid #DCE4EE',
    backgroundColor: '#FFFFFF',
    color: '#5C7A9A',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  chipActive: {
    backgroundColor: '#0A0F1E',
    borderColor: '#0A0F1E',
    color: '#FFFFFF',
  },
  resultsCount: {
    fontSize: '13px',
    color: '#8E8EA0',
    marginBottom: '16px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  designCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    overflow: 'hidden',
    border: '1px solid #F1F1F4',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  designThumb: {
    height: '150px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  favButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },
  favButtonActive: {
    backgroundColor: 'rgba(255,68,68,0.3)',
  },
  meta: {
    padding: '10px 12px 12px',
  },
  name: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
  },
  price: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1A6FD4',
    marginTop: '2px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0A0F1E',
    marginTop: '12px',
    marginBottom: '4px',
  },
  emptyText: {
    fontSize: '14px',
    color: '#8E8EA0',
    margin: 0,
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
  .portfolio-back-button:hover {
    color: #1A6FD4;
  }

  .portfolio-search-bar:focus-within {
    border-color: #1A6FD4;
    box-shadow: 0 0 0 3px rgba(26,111,212,0.1);
  }

  .portfolio-filter-button:hover {
    background-color: #F5F9FF;
    border-color: #1A6FD4;
  }

  .portfolio-chip:hover:not(.portfolio-chip-active) {
    border-color: #1A6FD4;
    color: #0A0F1E;
  }

  .portfolio-fav-button:hover {
    background-color: rgba(0,0,0,0.5);
  }

  @media (max-width: 480px) {
    .portfolio-title {
      font-size: 24px !important;
    }
    .portfolio-subtitle {
      font-size: 13px !important;
    }
    .portfolio-back-button {
      font-size: 13px !important;
    }
    .portfolio-gallery-grid {
      gap: 12px !important;
    }
    .portfolio-design-thumb {
      height: 120px !important;
    }
    .portfolio-design-card {
      border-radius: 12px !important;
    }
  }

  @media (max-width: 360px) {
    .portfolio-title {
      font-size: 22px !important;
    }
    .portfolio-design-thumb {
      height: 100px !important;
    }
    .portfolio-name {
      font-size: 13px !important;
    }
    .portfolio-price {
      font-size: 12px !important;
    }
    .portfolio-meta {
      padding: 8px 10px 10px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Portfolio;