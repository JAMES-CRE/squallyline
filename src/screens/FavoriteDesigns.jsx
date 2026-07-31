// screens/FavoriteDesigns.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  ArrowLeft,
  Heart,
  Grid3x3,
  Package,
  User,
  Home,
  Ruler,
  Calendar,
  Trash2,
  ShoppingBag,
  Star,
  ChevronRight,
} from 'lucide-react';

const FavoriteDesigns = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Kaba & Slit',
      price: 'GHS 450',
      category: 'Women Wear',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 234,
      bg: '#EADFC2',
    },
    {
      id: 2,
      name: 'Agbada Set',
      price: 'GHS 600',
      category: 'Men Wear',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviews: 189,
      bg: '#DCE4EE',
    },
    {
      id: 3,
      name: 'Fitted Wedding Gown',
      price: 'GHS 1,200',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      reviews: 456,
      bg: '#F2E4E4',
    },
    {
      id: 4,
      name: 'Ankara Two-Piece',
      price: 'GHS 380',
      category: 'Women Wear',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      reviews: 312,
      bg: '#F4E0C8',
    },
    {
      id: 5,
      name: 'Slim Fit Suit',
      price: 'GHS 950',
      category: 'Suit',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 167,
      bg: '#DDE3E8',
    },
    {
      id: 6,
      name: 'Casual Shirt',
      price: 'GHS 180',
      category: 'Casual',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      reviews: 289,
      bg: '#E6EAD9',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Women Wear', 'Men Wear', 'Wedding', 'Suit', 'Casual'];

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDesignClick = (id) => {
    navigate(`/designs/${id}`);
  };

  const filteredFavorites = selectedCategory === 'All'
    ? favorites
    : favorites.filter((item) => item.category === selectedCategory);

  return (
    <div style={{
      ...styles.container,
      backgroundColor: colors.mainBg,
    }}>
      {/* Main Content */}
      <main style={styles.main}>
        {/* Back Button */}
        <button 
          onClick={() => navigate('/profile')} 
          style={{
            ...styles.backButton,
            color: colors.secondaryText,
          }}
        >
          <ArrowLeft size={18} /> Back to Profile
        </button>

        {/* Page Header */}
        <div style={styles.pageHeader}>
          <div style={styles.headerTop}>
            <div>
              <span style={{
                ...styles.eyebrow,
                backgroundColor: colors.primaryLight,
                color: colors.primary,
              }}>
                My Collection
              </span>
              <h1 style={{
                ...styles.pageTitle,
                color: colors.heading,
              }}>
                Favorite Designs
              </h1>
              <p style={{
                ...styles.pageSubtitle,
                color: colors.secondaryText,
              }}>
                {favorites.length} designs saved to your favorites
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={styles.filterSection}>
          <div style={styles.filterScroll}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.filterChip,
                  ...(selectedCategory === category ? { ...styles.filterChipActive, backgroundColor: colors.primary, color: colors.btnText } : { backgroundColor: colors.cardBg, color: colors.secondaryText }),
                  borderColor: selectedCategory === category ? colors.primary : colors.border,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {favorites.length === 0 && (
          <div style={styles.emptyState}>
            <Heart size={64} color={colors.border} />
            <h3 style={{
              ...styles.emptyTitle,
              color: colors.heading,
            }}>
              No favorites yet
            </h3>
            <p style={{
              ...styles.emptyText,
              color: colors.secondaryText,
            }}>
              Start exploring designs and save your favorites
            </p>
            <button
              onClick={() => navigate('/portfolio')}
              style={{
                ...styles.browseButton,
                backgroundColor: colors.primary,
                color: colors.btnText,
              }}
            >
              Browse Designs
            </button>
          </div>
        )}

        {/* Favorites Grid */}
        {favorites.length > 0 && (
          <div style={styles.favoritesGrid}>
            {filteredFavorites.map((design) => (
              <div
                key={design.id}
                style={{
                  ...styles.designCard,
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
                onClick={() => handleDesignClick(design.id)}
              >
                {/* Image */}
                <div style={{
                  ...styles.designImage,
                  background: design.bg,
                }}>
                  <img 
                    src={design.image} 
                    alt={design.name} 
                    style={styles.designImageInner}
                  />
                  {/* Gradient Overlay */}
                  <div style={styles.imageOverlay} />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFavorite(design.id);
                    }}
                    style={{
                      ...styles.removeFavButton,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    <Trash2 size={16} color="#FFFFFF" />
                  </button>

                  {/* Rating Badge */}
                  <div style={{
                    ...styles.ratingBadge,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                  }}>
                    <Star size={12} color="#F59E0B" fill="#F59E0B" />
                    <span style={styles.ratingText}>{design.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={styles.designContent}>
                  <div style={styles.designHeader}>
                    <span style={{
                      ...styles.designName,
                      color: colors.heading,
                    }}>
                      {design.name}
                    </span>
                    <Heart size={16} color="#FF4444" fill="#FF4444" />
                  </div>
                  <div style={styles.designMeta}>
                    <span style={{
                      ...styles.designCategory,
                      color: colors.secondaryText,
                    }}>
                      {design.category}
                    </span>
                    <span style={{
                      ...styles.designReviews,
                      color: colors.tertiaryText,
                    }}>
                      {design.reviews} reviews
                    </span>
                  </div>
                  <div style={styles.designFooter}>
                    <span style={{
                      ...styles.designPrice,
                      color: colors.primary,
                    }}>
                      {design.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/placeorder');
                      }}
                      style={{
                        ...styles.orderButton,
                        backgroundColor: colors.primary,
                        color: colors.btnText,
                      }}
                    >
                      <ShoppingBag size={14} /> Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      {/* <nav style={{
        ...styles.bottomNav,
        backgroundColor: colors.navBg,
        borderColor: 'rgba(255,255,255,0.06)',
      }}>
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
          <span style={styles.navIconWrap}>
            <Package size={20} color={colors.navText} />
          </span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          style={styles.navButton}
          aria-label="Profile"
        >
          <span style={{ ...styles.navIconWrap, ...styles.navIconWrapActive }}>
            <User size={20} color="#FFFFFF" />
          </span>
        </button>
      </nav> */}
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
    maxWidth: '1200px',
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
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  filterSection: {
    marginBottom: '20px',
  },
  filterScroll: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '4px',
  },
  filterChip: {
    padding: '8px 20px',
    borderRadius: '50px',
    border: '1.5px solid',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  filterChipActive: {
    backgroundColor: '#1A56DB',
    color: '#FFFFFF',
    borderColor: '#1A56DB',
  },
  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  designCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  designImage: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  designImageInner: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.02) 100%)',
  },
  removeFavButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.2s',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 12px',
    borderRadius: '50px',
    backdropFilter: 'blur(4px)',
  },
  ratingText: {
    fontSize: '12px',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  designContent: {
    padding: '14px 16px 16px',
  },
  designHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '4px',
  },
  designName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  designMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  designCategory: {
    fontSize: '13px',
  },
  designReviews: {
    fontSize: '12px',
  },
  designFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  designPrice: {
    fontSize: '18px',
    fontWeight: '700',
  },
  orderButton: {
    padding: '6px 16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '16px',
    marginBottom: '8px',
  },
  emptyText: {
    fontSize: '15px',
    marginBottom: '24px',
  },
  browseButton: {
    padding: '12px 32px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
    boxShadow: '0 4px 16px rgba(26, 86, 219, 0.2)',
  },
  bottomNav: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 48px)',
    maxWidth: '600px',
    borderRadius: '50px',
    border: '1px solid',
    boxShadow: '0 8px 32px rgba(15, 23, 42, 0.3)',
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
  .favorite-designs-back-button:hover {
    color: #1A56DB !important;
  }

  .favorite-designs-filter-chip:hover:not(.favorite-designs-filter-chip-active) {
    border-color: #1A56DB !important;
    color: #1A56DB !important;
  }

  .favorite-designs-design-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1) !important;
  }

  .favorite-designs-remove-fav-button:hover {
    background-color: rgba(220, 38, 38, 0.8) !important;
  }

  .favorite-designs-order-button:hover {
    background-color: #1A3A8A !important;
  }

  .favorite-designs-browse-button:hover {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  @media (max-width: 480px) {
    .favorite-designs-title {
      font-size: 24px !important;
    }
    .favorite-designs-back-button {
      font-size: 13px !important;
    }
    .favorite-designs-favorites-grid {
      grid-template-columns: 1fr !important;
    }
    .favorite-designs-design-image {
      height: 160px !important;
    }
    .favorite-designs-header-top {
      flex-direction: column !important;
      gap: 12px !important;
    }
    .favorite-designs-filter-scroll {
      gap: 6px !important;
    }
    .favorite-designs-filter-chip {
      padding: 6px 14px !important;
      font-size: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .favorite-designs-title {
      font-size: 22px !important;
    }
    .favorite-designs-design-name {
      font-size: 14px !important;
    }
    .favorite-designs-design-price {
      font-size: 16px !important;
    }
    .favorite-designs-order-button {
      padding: 4px 12px !important;
      font-size: 12px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default FavoriteDesigns;