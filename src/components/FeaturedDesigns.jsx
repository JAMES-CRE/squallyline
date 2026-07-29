// components/FeaturedDesigns.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const FeaturedDesigns = ({ designs = null, onDesignClick = null }) => {
  const navigate = useNavigate();

  const defaultDesigns = [
    { 
      id: 1, 
      name: 'Kaba & Slit', 
      price: 'GHS 450', 
      category: 'Women Wear', 
      bg: '#EADFC2',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400&q=80',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Agbada Set', 
      price: 'GHS 600', 
      category: 'Men Wear', 
      bg: '#DCE4EE',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Fitted Wedding Gown', 
      price: 'GHS 1,200', 
      category: 'Wedding', 
      bg: '#F2E4E4',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
      rating: 4.7
    },
  ];

  const data = designs || defaultDesigns;

  const handleClick = (design) => {
    if (onDesignClick) {
      onDesignClick(design);
    } else {
      navigate(`/designs/${design.id}`);
    }
  };

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    console.log('Toggle favorite:', id);
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {data.map((design) => (
          <div 
            key={design.id}
            style={styles.card}
            onClick={() => handleClick(design)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            }}
          >
            {/* Image */}
            <div style={{...styles.imageWrapper, background: design.bg}}>
              <img 
                src={design.image} 
                alt={design.name} 
                style={styles.image}
              />
              
              {/* Gradient Overlay */}
              <div style={styles.overlay} />

              {/* Favorite Button */}
              <button 
                onClick={(e) => toggleFavorite(e, design.id)}
                style={styles.favButton}
              >
                <Heart size={16} color="#FFFFFF" fill="none" />
              </button>

              {/* Rating Badge */}
              <div style={styles.ratingBadge}>
                <Star size={12} color="#F59E0B" fill="#F59E0B" />
                <span>{design.rating}</span>
              </div>
            </div>

            {/* Content - Bottom */}
            <div style={styles.content}>
              <div>
                <span style={styles.name}>{design.name}</span>
                <span style={styles.category}>{design.category}</span>
              </div>
              <span style={styles.price}>{design.price}</span>
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
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  imageWrapper: {
    position: 'relative',
    height: '140px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.02) 100%)',
  },
  favButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    zIndex: 2,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    padding: '2px 10px',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.1)',
    zIndex: 2,
  },
  ratingBadgeSpan: {
    fontSize: '11px',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    padding: '10px 12px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A0F1E',
    display: 'block',
  },
  category: {
    fontSize: '11px',
    color: '#8E8EA0',
    display: 'block',
    marginTop: '1px',
  },
  price: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1A6FD4',
    whiteSpace: 'nowrap',
  },
};

// Add hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .featured-card:hover .featured-image {
    transform: scale(1.05);
  }

  .featured-fav-button:hover {
    background-color: rgba(255,68,68,0.4) !important;
  }

  .featured-fav-button:active {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    .featured-grid {
      gap: 16px !important;
    }
    .featured-image-wrapper {
      height: 160px !important;
    }
    .featured-name {
      font-size: 15px !important;
    }
    .featured-price {
      font-size: 15px !important;
    }
  }

  @media (max-width: 480px) {
    .featured-grid {
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 8px !important;
    }
    .featured-image-wrapper {
      height: 100px !important;
    }
    .featured-content {
      padding: 6px 8px 8px !important;
    }
    .featured-name {
      font-size: 11px !important;
    }
    .featured-category {
      font-size: 9px !important;
    }
    .featured-price {
      font-size: 11px !important;
    }
    .featured-rating-badge {
      display: none !important;
    }
    .featured-fav-button {
      width: 26px !important;
      height: 26px !important;
      top: 6px !important;
      right: 6px !important;
    }
    .featured-fav-button svg {
      width: 13px !important;
      height: 13px !important;
    }
  }

  @media (max-width: 360px) {
    .featured-grid {
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 6px !important;
    }
    .featured-image-wrapper {
      height: 85px !important;
    }
    .featured-content {
      padding: 4px 6px 6px !important;
    }
    .featured-name {
      font-size: 10px !important;
    }
    .featured-category {
      font-size: 8px !important;
    }
    .featured-price {
      font-size: 10px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default FeaturedDesigns;