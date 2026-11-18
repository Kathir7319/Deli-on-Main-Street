import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReceiptModal } from './components/ReceiptModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { CateringPage } from './pages/CateringPage';
import { StoryPage } from './pages/StoryPage';
import { LocationPage } from './pages/LocationPage';

export function App() {
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'catering', 'story', 'location'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Sync hash with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'catering', 'story', 'location'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#2B2B2B] antialiased selection:bg-[#8B0000] selection:text-white">
        
        {/* Navigation */}
        <Navbar activePage={activePage} setActivePage={handlePageChange} />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-1">
          {activePage === 'home' && <HomePage setActivePage={handlePageChange} />}
          {activePage === 'catering' && <CateringPage setActivePage={handlePageChange} />}
          {activePage === 'story' && <StoryPage setActivePage={handlePageChange} />}
          {activePage === 'location' && <LocationPage setActivePage={handlePageChange} />}
        </main>

        {/* Slide-over Cart & Checkout */}
        <CartDrawer />

        {/* Digital Order Receipt */}
        <ReceiptModal />

        {/* Floating Notification Toast */}
        <Toast />

        {/* Global Footer */}
        <Footer setActivePage={handlePageChange} />

      </div>
    </CartProvider>
  );
}

export default App;
