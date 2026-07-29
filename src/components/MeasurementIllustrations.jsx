// components/MeasurementIllustrations.jsx

const chestSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Body outline */}
    <ellipse cx="100" cy="110" rx="45" ry="60" fill="#F0F4FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Chest tape */}
    <path d="M65 90 Q100 75 135 90" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" />
    <circle cx="65" cy="90" r="4" fill="#1A6FD4" />
    <circle cx="135" cy="90" r="4" fill="#1A6FD4" />
    {/* Label */}
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">CHEST</text>
  </svg>
);

const shoulderSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Shoulder line */}
    <line x1="40" y1="80" x2="160" y2="80" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="80" r="4" fill="#1A6FD4" />
    <circle cx="160" cy="80" r="4" fill="#1A6FD4" />
    {/* Arrows */}
    <polygon points="40,70 30,80 40,90" fill="#1A6FD4" />
    <polygon points="160,70 170,80 160,90" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">SHOULDER</text>
  </svg>
);

const sleeveSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Arm outline */}
    <rect x="75" y="40" width="50" height="100" rx="25" fill="#F0F4FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Sleeve line */}
    <line x1="100" y1="40" x2="100" y2="140" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="100" cy="40" r="4" fill="#1A6FD4" />
    <circle cx="100" cy="140" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">SLEEVE</text>
  </svg>
);

const waistSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Waist tape */}
    <path d="M55 110 Q100 95 145 110" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" />
    <circle cx="55" cy="110" r="4" fill="#1A6FD4" />
    <circle cx="145" cy="110" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">WAIST</text>
  </svg>
);

const stomachSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Stomach tape */}
    <ellipse cx="100" cy="115" rx="50" ry="15" stroke="#1A6FD4" strokeWidth="3" fill="none" />
    <circle cx="50" cy="115" r="4" fill="#1A6FD4" />
    <circle cx="150" cy="115" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">STOMACH</text>
  </svg>
);

const seatSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Seat tape */}
    <ellipse cx="100" cy="130" rx="55" ry="20" stroke="#1A6FD4" strokeWidth="3" fill="none" />
    <circle cx="45" cy="130" r="4" fill="#1A6FD4" />
    <circle cx="155" cy="130" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">SEAT</text>
  </svg>
);

const frontRiseSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Front rise line */}
    <line x1="100" y1="95" x2="100" y2="155" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="100" cy="95" r="4" fill="#1A6FD4" />
    <circle cx="100" cy="155" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">FRONT RISE</text>
  </svg>
);

const backRiseSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Back rise line */}
    <line x1="100" y1="95" x2="100" y2="155" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="100" cy="95" r="4" fill="#8B5CF6" />
    <circle cx="100" cy="155" r="4" fill="#8B5CF6" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#8B5CF6" fontWeight="600">BACK RISE (Optional)</text>
  </svg>
);

const thighSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Thigh tape */}
    <ellipse cx="100" cy="135" rx="40" ry="18" stroke="#1A6FD4" strokeWidth="3" fill="none" />
    <circle cx="60" cy="135" r="4" fill="#1A6FD4" />
    <circle cx="140" cy="135" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">THIGH</text>
  </svg>
);

const kneeSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Knee tape */}
    <ellipse cx="100" cy="130" rx="35" ry="15" stroke="#1A6FD4" strokeWidth="3" fill="none" />
    <circle cx="65" cy="130" r="4" fill="#1A6FD4" />
    <circle cx="135" cy="130" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">KNEE</text>
  </svg>
);

const legOpeningSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Leg opening */}
    <rect x="70" y="140" width="60" height="15" rx="5" stroke="#1A6FD4" strokeWidth="3" fill="none" />
    <circle cx="70" cy="147" r="4" fill="#1A6FD4" />
    <circle cx="130" cy="147" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">LEG OPENING</text>
  </svg>
);

const pantsLengthSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Pants length line */}
    <line x1="100" y1="60" x2="100" y2="160" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="100" cy="60" r="4" fill="#1A6FD4" />
    <circle cx="100" cy="160" r="4" fill="#1A6FD4" />
    {/* Arrows */}
    <polygon points="90,60 100,50 110,60" fill="#1A6FD4" />
    <polygon points="90,160 100,170 110,160" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">PANTS LENGTH</text>
  </svg>
);

const jacketLengthSvg = (
  <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '160px', height: 'auto' }}>
    <rect x="20" y="20" width="160" height="160" rx="10" fill="#F5F9FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Jacket body */}
    <rect x="60" y="50" width="80" height="90" rx="10" fill="#F0F4FF" stroke="#1A6FD4" strokeWidth="1.5" />
    {/* Jacket length line */}
    <line x1="100" y1="50" x2="100" y2="140" stroke="#1A6FD4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,3" />
    <circle cx="100" cy="50" r="4" fill="#1A6FD4" />
    <circle cx="100" cy="140" r="4" fill="#1A6FD4" />
    <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#1A6FD4" fontWeight="600">JACKET LENGTH</text>
  </svg>
);