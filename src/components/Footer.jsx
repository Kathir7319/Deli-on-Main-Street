import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, Download, ShieldCheck, 
  Car, Heart, ArrowUp, Instagram, Facebook, ExternalLink 
} from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/deliData';

export const Footer = ({ setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadLogoSvg = () => {
    const link = document.createElement('a');
    link.href = '/logo.svg';
    link.download = 'Deli-on-Main-Street-Logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-200 border-t-4 border-burgundy-700 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          
          {/* Col 1 & 2: Brand Info & Logo Download */}
          <div className="lg:col-span-2 space-y-4">
            <Logo 
              variant="footer" 
              onClick={() => {
                setActivePage('home');
                scrollToTop();
              }} 
            />

            <p className="text-xs text-charcoal-400 leading-relaxed max-w-sm">
              Artisan craft deli sandwiches, rotating daily scratch soups, morning hearth bakery, and chef-prepared family dinners-to-go. Handcrafted daily in historic Downtown Fuquay-Varina, North Carolina.
            </p>

            {/* Logo Download Card */}
            <div className="bg-charcoal-800/80 p-3.5 rounded-2xl border border-charcoal-700/80 max-w-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  Official Brand Assets
                </span>
                <span className="text-[10px] bg-charcoal-700 text-charcoal-300 px-2 py-0.5 rounded font-mono">
                  SVG Vector
                </span>
              </div>
              <p className="text-[11px] text-charcoal-400">
                Created bespoke for Deli on Main Street. Download the vector logo files for signs, menus, and uniforms.
              </p>
              <button
                type="button"
                onClick={downloadLogoSvg}
                className="w-full bg-burgundy-700 hover:bg-burgundy-600 text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Deli on Main Street Logo (.SVG)</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-charcoal-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Synced directly with Square POS v2 Terminal</span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Explore Deli
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActivePage('home'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left"
                >
                  Signature Sandwiches
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('home'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left"
                >
                  Daily Soups &amp; Bakery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('catering'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left flex items-center gap-1 text-amber-400 font-semibold"
                >
                  <span>Weekly Family Dinners</span>
                  <span className="text-[9px] bg-burgundy-800 px-1.5 py-0.2 rounded">Due Sun</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('catering'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left"
                >
                  Corporate &amp; School Catering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('story'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left"
                >
                  Our Heritage &amp; Farms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('location'); scrollToTop(); }}
                  className="hover:text-amber-300 transition text-left"
                >
                  Downtown Parking Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Schedule */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Hours of Service
            </h4>
            <div className="text-xs space-y-2 text-charcoal-300">
              <div>
                <span className="font-semibold text-white block">Monday – Saturday</span>
                <span className="text-charcoal-400">10:30 AM – 7:30 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Sunday</span>
                <span className="text-charcoal-400">Closed (Pre-orders due 5 PM)</span>
              </div>
              <div className="pt-2 border-t border-charcoal-800">
                <span className="text-[11px] text-amber-400 font-bold block">Curbside Pickup Days:</span>
                <span className="text-[11px] text-charcoal-400 block">Tuesday &amp; Thursday 4:00 - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 5: Location & Wayfinding */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Downtown Location
            </h4>
            <div className="text-xs space-y-2 text-charcoal-300">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-burgundy-500 flex-shrink-0 mt-0.5" />
                <span>
                  604 N Main St<br />
                  Historic Downtown District<br />
                  Fuquay-Varina, NC 27526
                </span>
              </p>
              <p className="flex items-center gap-1.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href="tel:9193461060" className="hover:text-white font-mono font-bold">
                  (919) 346-1060
                </a>
              </p>
              <a
                href="https://share.google/YL28BXXcrL96BPrb4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>★ 4.3 on Google (234 Reviews)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="p-2.5 bg-charcoal-800/80 rounded-xl border border-charcoal-700/60 text-[11px] text-charcoal-400 space-y-1">
                <div className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Car className="w-3 h-3" />
                  <span>Depot St Parking Lot</span>
                </div>
                <p>Free large municipal lot directly behind the shop for lunch rush and curbside pickup.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Deli on Main Street. All rights reserved. Downtown Fuquay-Varina, NC.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
