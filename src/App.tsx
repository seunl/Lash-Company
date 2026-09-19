import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CandyBarPage } from './pages/CandyBarPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPressPage } from './pages/ReviewsPressPage';
import { BookingContactPage } from './pages/BookingContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();

  // Hash-based routing synchronization for multipage feel & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'candy-bar', 'gallery', 'reviews', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically based on page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: "Eyelash Extensions Upper Kirby Houston | The Lash Company - Since 2007",
      about: "Meet Sophia Navarro | Master Lash Artist & NovaLash VP | The Lash Company",
      services: "American Volume & Lash Extension Pricing Houston | The Lash Company",
      'candy-bar': "The Life is Suite Candy Bar Experience | The Lash Company Houston",
      gallery: "Before & After Lash Results Upper Kirby | The Lash Company",
      reviews: "Reviews & Press Features | 4.6★ Birdeye & Google | The Lash Company",
      contact: "Book Appointment & Upper Kirby Studio Map | The Lash Company"
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF7] text-[#121212] selection:bg-[#F9E4E8] selection:text-[#121212] relative">
      
      {/* Sticky Top Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Body with smooth transition */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'candy-bar' && (
          <CandyBarPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPressPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <BookingContactPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Editorial Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile-Only Sticky Bottom Bar ("Book in 60 Seconds" + Quick Call) */}
      <StickyMobileBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}
