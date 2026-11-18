import React from 'react';

export const Logo = ({ 
  variant = "horizontal", 
  className = "", 
  showSubtitle = true,
  onClick
}) => {
  if (variant === "badge") {
    return (
      <div 
        onClick={onClick}
        className={`relative inline-flex flex-col items-center select-none group cursor-pointer ${className}`}
      >
        <svg 
          viewBox="0 0 160 160" 
          className="w-36 h-36 md:w-44 md:h-44 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="badgeBurgundy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A31212" />
              <stop offset="100%" stopColor="#660000" />
            </linearGradient>
            <path id="curveTop" d="M 28 80 A 52 52 0 0 1 132 80" />
            <path id="curveBottom" d="M 132 80 A 52 52 0 0 1 28 80" />
          </defs>

          {/* Outer Ring */}
          <circle cx="80" cy="80" r="76" fill="#FBFBF9" stroke="#E5E0D0" strokeWidth="2" />
          
          {/* Main Rich Burgundy Roundel */}
          <circle cx="80" cy="80" r="70" fill="url(#badgeBurgundy)" stroke="#D97706" strokeWidth="3" />
          
          {/* Inner Dashed Ring */}
          <circle cx="80" cy="80" r="64" fill="none" stroke="#FEF3C7" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.85" />
          
          {/* Arc Text Top */}
          <text fill="#FEF3C7" fontSize="8" fontWeight="800" letterSpacing="2.5" textAnchor="middle">
            <textPath href="#curveTop" startOffset="50%">
              ARTISAN CRAFT DELI
            </textPath>
          </text>

          {/* Center Sandwich Illustration */}
          <g transform="translate(80, 54) scale(0.68)">
            <path d="M-36 -8 C-36 -22, 36 -22, 36 -8 C36 -5, 33 -2, 28 -2 L-28 -2 C-33 -2, -36 -5, -36 -8 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="2.5"/>
            <path d="M-34 0 Q-28 6, -22 0 Q-16 6, -10 0 Q-4 6, 2 0 Q8 6, 14 0 Q20 6, 26 0 Q32 6, 34 0" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round"/>
            <polygon points="-32,5 34,4 26,11 -28,11" fill="#F59E0B" />
            <rect x="-33" y="12" width="66" height="7" rx="3.5" fill="#E11D48" />
            <rect x="-35" y="20" width="70" height="6" rx="3" fill="#9F1239" />
            <rect x="-34" y="27" width="68" height="8" rx="4" fill="#FDE68A" stroke="#B45309" strokeWidth="2.5"/>
          </g>

          {/* Typography DELI */}
          <text x="80" y="96" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="900" fontSize="20" fill="#FFFFFF" letterSpacing="1">
            DELI
          </text>
          
          {/* Ribbon ON MAIN STREET */}
          <rect x="28" y="101" width="104" height="15" rx="3" fill="#D97706" />
          <text x="80" y="112" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="7.5" fill="#FFFFFF" letterSpacing="1.5">
            ON MAIN STREET
          </text>

          {/* Stars */}
          <text x="38" y="98" textAnchor="middle" fontSize="8" fill="#FBBF24">★</text>
          <text x="122" y="98" textAnchor="middle" fontSize="8" fill="#FBBF24">★</text>

          {/* Arc Text Bottom */}
          <text fill="#FEF3C7" fontSize="7" fontWeight="700" letterSpacing="2" textAnchor="middle">
            <textPath href="#curveBottom" startOffset="50%">
              FUQUAY-VARINA, NC
            </textPath>
          </text>
        </svg>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2.5 cursor-pointer whitespace-nowrap flex-shrink-0 ${className}`} onClick={onClick}>
        <div className="w-10 h-10 rounded-xl bg-burgundy-700 border-2 border-amber-500 flex items-center justify-center text-white shadow-md relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600 to-burgundy-900" />
          <span className="relative font-black text-xs text-amber-200 tracking-normal whitespace-nowrap">DMS</span>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <span className="font-extrabold text-base tracking-tight text-burgundy-700 leading-tight whitespace-nowrap">
            Deli on Main Street
          </span>
          <span className="text-[10px] font-semibold text-charcoal-500 uppercase tracking-wider whitespace-nowrap">
            Downtown Fuquay-Varina
          </span>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-3.5 whitespace-nowrap flex-shrink-0 ${className}`} onClick={onClick}>
        <div className="w-12 h-12 rounded-xl bg-burgundy-800 border-2 border-amber-400/80 flex items-center justify-center text-white shadow-lg relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy-700 to-black/60" />
          <div className="relative text-center leading-none">
            <span className="block font-black text-sm tracking-wider text-amber-300 whitespace-nowrap">DMS</span>
            <span className="block text-[8px] font-bold text-amber-100 tracking-widest mt-0.5 whitespace-nowrap">DELI</span>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-serif font-black text-xl tracking-tight text-white whitespace-nowrap">
              Deli on Main Street
            </span>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 whitespace-nowrap">
              Downtown
            </span>
          </div>
          {showSubtitle && (
            <span className="text-xs text-charcoal-300 font-medium tracking-wide whitespace-nowrap mt-1">
              Downtown Fuquay-Varina, NC • Est. 2024
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal (Navbar)
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none group flex-shrink-0 whitespace-nowrap ${className}`} onClick={onClick}>
      {/* Icon Badge */}
      <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-burgundy-700 via-burgundy-800 to-burgundy-950 p-[2px] shadow-md transition-all duration-300 group-hover:shadow-burgundy-900/30 group-hover:scale-105 flex-shrink-0 border border-amber-500/40">
        <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-burgundy-700 to-burgundy-900 flex flex-col items-center justify-center text-center p-1 relative overflow-hidden">
          {/* Subtle shine overlay */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 rounded-full blur-sm transform rotate-45 pointer-events-none" />
          
          {/* Mini Sandwich Icon graphic */}
          <div className="flex flex-col items-center justify-center space-y-[2px]">
            <div className="w-6 h-[4px] bg-amber-200 rounded-t-sm" />
            <div className="w-6 h-[2.5px] bg-emerald-400 rounded-full" />
            <div className="w-6 h-[3px] bg-rose-400 rounded-sm" />
            <div className="w-6 h-[3.5px] bg-amber-200 rounded-b-sm" />
          </div>
          <span className="font-black text-[9px] text-amber-300 tracking-normal whitespace-nowrap leading-none mt-1">
            DMS
          </span>
        </div>
      </div>

      {/* Typography Block */}
      <div className="flex flex-col justify-center whitespace-nowrap flex-shrink-0">
        <div className="flex items-center gap-2 whitespace-nowrap leading-none">
          <span className="font-serif font-black text-lg md:text-xl tracking-tight text-burgundy-700 whitespace-nowrap leading-none group-hover:text-burgundy-800 transition-colors">
            Deli on Main Street
          </span>
          <span className="whitespace-nowrap text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 leading-none inline-block">
            Fuquay-Varina
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-semibold text-charcoal-500 tracking-normal whitespace-nowrap mt-1 leading-none">
            Craft Sandwiches &amp; Dinners-To-Go
          </span>
        )}
      </div>
    </div>
  );
};
