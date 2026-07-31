// screens/OrderHistory.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';
import {
  ArrowLeft,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  ChevronRight,
  Search,
  Filter,
  Eye,
  RefreshCw,
  Home,
  Ruler,
  Grid3x3,
  User,
  ShoppingBag,
  Star,
} from 'lucide-react';

const OrderHistory = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const [orders] = useState([
    {
      id: 101,
      designName: 'Kaba & Slit',
      category: 'Women Wear',
      price: 'GHS 450',
      status: 'Delivered',
      date: 'Jul 20, 2026',
      estimatedDelivery: 'Jul 25, 2026',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 102,
      designName: 'Agbada Set',
      category: 'Men Wear',
      price: 'GHS 600',
      status: 'In Progress',
      date: 'Jul 18, 2026',
      estimatedDelivery: 'Jul 28, 2026',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=200&q=80',
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 103,
      designName: 'Fitted Wedding Gown',
      category: 'Wedding',
      price: 'GHS 1,200',
      status: 'Ready',
      date: 'Jul 15, 2026',
      estimatedDelivery: 'Jul 22, 2026',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=200&q=80',
      rating: 4.7,
      reviews: 456,
    },
    {
      id: 104,
      designName: 'Ankara Two-Piece',
      category: 'Women Wear',
      price: 'GHS 380',
      status: 'Cancelled',
      date: 'Jul 12, 2026',
      estimatedDelivery: 'Jul 19, 2026',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=200&q=80',
      rating: 4.6,
      reviews: 312,
    },
    {
      id: 105,
      designName: 'Slim Fit Suit',
      category: 'Suit',
      price: 'GHS 950',
      status: 'Delivered',
      date: 'Jul 10, 2026',
      estimatedDelivery: 'Jul 15, 2026',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      reviews: 167,
    },
  ]);

  const statusFilters = ['All', 'Delivered', 'In Progress', 'Ready', 'Cancelled'];

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': { bg: '#DCFCE7', text: '#059669' },
      'In Progress': { bg: '#FEF3C7', text: '#D97706' },
      'Ready': { bg: '#DBEAFE', text: '#2563EB' },
      'Cancelled': { bg: '#FEE2E2', text: '#DC2626' },
    };
    return colors[status] || { bg: '#F1F5F9', text: '#64748B' };
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Delivered': return CheckCircle;
      case 'In Progress': return RefreshCw;
      case 'Ready': return Clock;
      case 'Cancelled': return AlertCircle;
      default: return Package;
    }
  };

  const filteredOrders = orders
    .filter((order) => filterStatus === 'All' || order.status === filterStatus)
    .filter((order) =>
      order.designName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const clearSearch = () => {
    setSearchQuery('');
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
          <span style={{
            ...styles.eyebrow,
            backgroundColor: colors.primaryLight,
            color: colors.primary,
          }}>
            My Orders
          </span>
          <h1 style={{
            ...styles.pageTitle,
            color: colors.heading,
          }}>
            Order History
          </h1>
          <p style={{
            ...styles.pageSubtitle,
            color: colors.secondaryText,
          }}>
            {orders.length} orders placed
          </p>
        </div>

        {/* Search Bar */}
        <div style={styles.searchWrapper}>
          <div style={{
            ...styles.searchBar,
            borderColor: colors.border,
            backgroundColor: colors.cardBg,
          }}>
            <Search size={18} color={colors.secondaryText} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                ...styles.searchInput,
                color: colors.text,
              }}
            />
            {searchQuery && (
              <button onClick={clearSearch} style={styles.clearButton}>
                <X size={16} color={colors.secondaryText} />
              </button>
            )}
          </div>
        </div>

        {/* Status Filters */}
        <div style={styles.filterSection}>
          <div style={styles.filterScroll}>
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                style={{
                  ...styles.filterChip,
                  ...(filterStatus === status 
                    ? { ...styles.filterChipActive, backgroundColor: colors.primary, color: colors.btnText } 
                    : { backgroundColor: colors.cardBg, color: colors.secondaryText }),
                  borderColor: filterStatus === status ? colors.primary : colors.border,
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          ...styles.resultsCount,
          color: colors.secondaryText,
        }}>
          {filteredOrders.length} order{filteredOrders.length !== 1 ? 's' : ''} found
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div style={styles.emptyState}>
            <ShoppingBag size={64} color={colors.border} />
            <h3 style={{
              ...styles.emptyTitle,
              color: colors.heading,
            }}>
              No orders found
            </h3>
            <p style={{
              ...styles.emptyText,
              color: colors.secondaryText,
            }}>
              {searchQuery || filterStatus !== 'All' 
                ? 'Try adjusting your search or filter'
                : 'Start shopping and your orders will appear here'}
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

        {/* Orders List */}
        {filteredOrders.length > 0 && (
          <div style={styles.ordersList}>
            {filteredOrders.map((order) => {
              const StatusIcon = getStatusIcon(order.status);
              const statusColors = getStatusColor(order.status);

              return (
                <div
                  key={order.id}
                  style={{
                    ...styles.orderCard,
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border,
                  }}
                >
                  <div style={styles.orderCardInner}>
                    {/* Image */}
                    <div style={styles.orderImage}>
                      <img 
                        src={order.image} 
                        alt={order.designName} 
                        style={styles.orderImageInner} 
                      />
                    </div>

                    {/* Content */}
                    <div style={styles.orderContent}>
                      <div style={styles.orderHeader}>
                        <div>
                          <div style={{
                            ...styles.orderName,
                            color: colors.heading,
                          }}>
                            {order.designName}
                          </div>
                          <div style={{
                            ...styles.orderCategory,
                            color: colors.secondaryText,
                          }}>
                            {order.category}
                          </div>
                        </div>
                        <span style={{
                          ...styles.orderStatus,
                          backgroundColor: statusColors.bg,
                          color: statusColors.text,
                        }}>
                          <StatusIcon size={12} style={styles.statusIconSmall} />
                          {order.status}
                        </span>
                      </div>

                      <div style={styles.orderDetails}>
                        <div style={styles.orderDetailItem}>
                          <span style={{
                            ...styles.orderDetailLabel,
                            color: colors.tertiaryText,
                          }}>
                            Order #
                          </span>
                          <span style={{
                            ...styles.orderDetailValue,
                            color: colors.text,
                          }}>
                            {order.id}
                          </span>
                        </div>
                        <div style={styles.orderDetailItem}>
                          <span style={{
                            ...styles.orderDetailLabel,
                            color: colors.tertiaryText,
                          }}>
                            Date
                          </span>
                          <span style={{
                            ...styles.orderDetailValue,
                            color: colors.text,
                          }}>
                            {order.date}
                          </span>
                        </div>
                        <div style={styles.orderDetailItem}>
                          <span style={{
                            ...styles.orderDetailLabel,
                            color: colors.tertiaryText,
                          }}>
                            Est. Delivery
                          </span>
                          <span style={{
                            ...styles.orderDetailValue,
                            color: colors.text,
                          }}>
                            {order.estimatedDelivery}
                          </span>
                        </div>
                      </div>

                      <div style={styles.orderFooter}>
                        <span style={{
                          ...styles.orderPrice,
                          color: colors.primary,
                        }}>
                          {order.price}
                        </span>
                        <div style={styles.orderActions}>
                          <button
                            onClick={() => navigate(`/tracking`)}
                            style={{
                              ...styles.viewButton,
                              borderColor: colors.border,
                              color: colors.secondaryText,
                            }}
                          >
                            <Eye size={16} /> Track
                          </button>
                          <button
                            onClick={() => navigate(`/placeorder`)}
                            style={{
                              ...styles.reorderButton,
                              backgroundColor: colors.primary,
                              color: colors.btnText,
                            }}
                          >
                            <RefreshCw size={14} /> Reorder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav style={{
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
      </nav>
    </div>
  );
};

// Add X icon import
const X = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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
    marginBottom: '20px',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
  },
  pageHeader: {
    marginBottom: '20px',
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
  searchWrapper: {
    marginBottom: '16px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '10px',
    padding: '10px 14px',
    border: '1.5px solid',
    transition: 'all 0.2s',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    background: 'transparent',
  },
  clearButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterSection: {
    marginBottom: '12px',
  },
  filterScroll: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '4px',
  },
  filterChip: {
    padding: '6px 16px',
    borderRadius: '50px',
    border: '1.5px solid',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  resultsCount: {
    fontSize: '13px',
    marginBottom: '16px',
  },
  ordersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  orderCard: {
    borderRadius: '12px',
    border: '1px solid',
    padding: '16px',
    transition: 'all 0.2s',
  },
  orderCardInner: {
    display: 'flex',
    gap: '16px',
  },
  orderImage: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    overflow: 'hidden',
    flexShrink: 0,
  },
  orderImageInner: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  orderContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  orderName: {
    fontSize: '15px',
    fontWeight: '600',
  },
  orderCategory: {
    fontSize: '12px',
  },
  orderStatus: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 12px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    whiteSpace: 'nowrap',
  },
  statusIconSmall: {
    width: '12px',
    height: '12px',
  },
  orderDetails: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  orderDetailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  orderDetailLabel: {
    fontSize: '11px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
  orderDetailValue: {
    fontSize: '13px',
    fontWeight: '500',
  },
  orderFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4px',
  },
  orderPrice: {
    fontSize: '17px',
    fontWeight: '700',
  },
  orderActions: {
    display: 'flex',
    gap: '8px',
  },
  viewButton: {
    padding: '6px 14px',
    borderRadius: '8px',
    border: '1px solid',
    background: 'transparent',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  reorderButton: {
    padding: '6px 14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.2s',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '12px',
    marginBottom: '4px',
  },
  emptyText: {
    fontSize: '14px',
    marginBottom: '16px',
  },
  browseButton: {
    padding: '10px 28px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '14px',
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
  .order-history-back-button:hover {
    color: #1A56DB !important;
  }

  .order-history-search-bar:focus-within {
    border-color: #1A56DB !important;
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1) !important;
  }

  .order-history-filter-chip:hover:not(.order-history-filter-chip-active) {
    border-color: #1A56DB !important;
    color: #1A56DB !important;
  }

  .order-history-order-card:hover {
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06) !important;
  }

  .order-history-view-button:hover {
    border-color: #1A56DB !important;
    color: #1A56DB !important;
  }

  .order-history-reorder-button:hover {
    background-color: #1A3A8A !important;
  }

  .order-history-browse-button:hover {
    background-color: #1A3A8A !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(26, 86, 219, 0.3) !important;
  }

  @media (max-width: 480px) {
    .order-history-title {
      font-size: 24px !important;
    }
    .order-history-back-button {
      font-size: 13px !important;
    }
    .order-history-order-card-inner {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .order-history-order-image {
      width: 100% !important;
      height: 120px !important;
    }
    .order-history-order-header {
      flex-wrap: wrap !important;
    }
    .order-history-order-details {
      flex-wrap: wrap !important;
    }
    .order-history-order-footer {
      flex-direction: column !important;
      gap: 8px !important;
      align-items: stretch !important;
    }
    .order-history-order-actions {
      justify-content: stretch !important;
    }
    .order-history-view-button,
    .order-history-reorder-button {
      flex: 1 !important;
      justify-content: center !important;
    }
  }

  @media (max-width: 360px) {
    .order-history-title {
      font-size: 22px !important;
    }
    .order-history-order-name {
      font-size: 14px !important;
    }
    .order-history-order-price {
      font-size: 15px !important;
    }
    .order-history-order-details {
      gap: 12px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default OrderHistory;