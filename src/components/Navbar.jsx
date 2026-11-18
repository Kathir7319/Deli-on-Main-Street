import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Phone, MapPin, Clock, Menu, X, 
  ChevronRight, Calendar, Sparkles, AlertCircle 
} from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/deliData';

export const Navbar = ({ activePage, setActivePage }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home & Menu' },
    { id: 'catering', label: 'Family Meals & Catering', badge: 'Pre-Order Due Sun' },
    { id: 'story', label: 'Our Story & Heritage' },
    { id: 'location', label: 'Hours & Parking Guide' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Ribbon */}
      <div className="bg-burgundy-900 text-cream-200 text-xs py-2 px-4 border-b border-burgundy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Status Left */}
          <div className="hidden xl:flex items-center gap-2 text-[11px] text-amber-300 whitespace-nowrap flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-semibold">Kitchen Open Today: 10:30 AM – 7:30 PM</span>
          </div>

          {/* Announcement Center */}
          <div className="w-full xl:w-auto text-center flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="bg-amber-400 text-burgundy-950 text-[10px] uppercase font-black px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
              Weekly Pre-Orders
            </span>
            <span className="text-xs text-cream-100">
              Slow-Roasted Lasagna &amp; Glazed Pork due <strong className="text-white underline">Sunday by 5:00 PM</strong> for curbside pickup!
            </span>
            <button 
              onClick={() => handleNavClick('catering')} 
              className="text-amber-300 hover:text-white font-bold ml-1 hidden sm:inline underline whitespace-nowrap"
            >
              Order Now &rarr;
            </button>
          </div>

          {/* Location / Phone Right */}
          <div className="hidden xl:flex items-center gap-4 text-[11px] text-cream-300 whitespace-nowrap flex-shrink-0">
            <a href="tel:9193461060" className="hover:text-white flex items-center gap-1 font-semibold whitespace-nowrap">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>(919) 346-1060</span>
            </a>
            <span>•</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>604 N Main St, Fuquay</span>
            </span>
          </div>

        </div>
      </div>

      {/* Main Glass Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-md border-b border-charcoal-200 py-2.5' 
          : 'bg-[#FBFBF9]/95 border-b border-charcoal-200/60 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Brand Logo (Left) */}
          <Logo 
            variant="horizontal" 
            onClick={() => handleNavClick('home')} 
          />

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                    isActive 
                      ? 'bg-burgundy-700 text-white shadow-sm ring-1 ring-burgundy-700' 
                      : 'text-charcoal-700 hover:text-burgundy-700 hover:bg-cream-300/80'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.badge && (
                    <span className={`whitespace-nowrap text-[9px] uppercase px-1.5 py-0.5 rounded-full font-black tracking-wider leading-none ${
                      isActive ? 'bg-amber-400 text-burgundy-950' : 'bg-amber-100 text-amber-900 border border-amber-300/80'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Phone Button: Compact on lg, full on xl */}
            <a 
              href="tel:9193461060"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-charcoal-300 hover:border-burgundy-700 text-charcoal-700 hover:text-burgundy-700 text-xs font-semibold transition whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-burgundy-700 flex-shrink-0" />
              <span className="hidden xl:inline whitespace-nowrap">Call Ahead: </span>
              <span className="font-mono font-bold whitespace-nowrap">(919) 346-1060</span>
            </a>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-white border border-charcoal-300 hover:border-burgundy-700 text-charcoal-800 hover:text-burgundy-700 shadow-sm transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-burgundy-700 flex-shrink-0" />
              <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">Basket</span>
              {itemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-burgundy-700 text-white text-[11px] font-bold flex items-center justify-center animate-bounce flex-shrink-0">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Quick Order Online Button */}
            <button
              onClick={() => {
                if (activePage !== 'home') {
                  setActivePage('home');
                }
                setTimeout(() => {
                  const menuEl = document.getElementById('digital-menu');
                  if (menuEl) {
                    menuEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }
                }, 50);
              }}
              className="hidden sm:flex items-center gap-1.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition whitespace-nowrap flex-shrink-0"
            >
              <span className="whitespace-nowrap">Order Online</span>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-charcoal-300 text-charcoal-800 hover:bg-cream-200 transition flex-shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBFBF9] border-b border-charcoal-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="bg-cream-200 p-3.5 rounded-2xl border border-charcoal-200 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block">Current Operating Status</span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>Open Today: 10:30 AM – 7:30 PM</span>
              </div>
              <p className="text-[11px] text-charcoal-600 mt-1">
                604 N Main St • Free pickup lot behind on Depot St.
              </p>
            </div>

            <div className="space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition ${
                    activePage === item.id 
                      ? 'bg-burgundy-700 text-white' 
                      : 'text-charcoal-800 hover:bg-cream-200'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.badge && (
                    <span className="whitespace-nowrap text-[9px] uppercase px-2 py-0.5 rounded-full font-black tracking-wider bg-amber-400 text-burgundy-950">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-charcoal-200 grid grid-cols-2 gap-2">
              <a
                href="tel:9193461060"
                className="w-full py-3 px-3 text-center bg-white border border-charcoal-300 rounded-xl text-xs font-bold text-charcoal-800 flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-burgundy-700 flex-shrink-0" />
                <span className="whitespace-nowrap">(919) 346-1060</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 px-3 text-center bg-burgundy-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">Basket ({itemCount})</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Mobile Sticky Quick Bar */}
      <div className="lg:hidden fixed bottom-3 left-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => {
            setActivePage('home');
            setTimeout(() => {
              const menuEl = document.getElementById('digital-menu');
              if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          className="flex-1 bg-burgundy-700 text-white font-bold text-xs py-3.5 px-4 rounded-2xl shadow-xl shadow-burgundy-900/30 flex items-center justify-center gap-2 border border-burgundy-600 active:scale-95 transition whitespace-nowrap"
        >
          <span>Explore Sandwiches</span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-charcoal-900 text-white font-bold p-3.5 rounded-2xl shadow-xl flex items-center justify-center border border-charcoal-700 active:scale-95 transition flex-shrink-0"
          aria-label="View basket"
        >
          <ShoppingBag className="w-5 h-5 text-amber-300" />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-burgundy-600 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
