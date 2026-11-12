import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MehmanUpdates } from './components/MehmanUpdates';
import { AboutKhadim } from './components/AboutKhadim';
import { KhidmatServices } from './components/KhidmatServices';
import { Gallery } from './components/Gallery';
import { Donation } from './components/Donation';
import { OnlineDua } from './components/OnlineDua';
import { TravelGuide } from './components/TravelGuide';
import { Testimonials } from './components/Testimonials';
import { ContactFooter } from './components/ContactFooter';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const scrollToDonation = () => {
    const el = document.getElementById('donation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDua = () => {
    const el = document.getElementById('dua');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <Navbar 
        onOpenDonationModal={scrollToDonation} 
        onOpenDuaModal={scrollToDua} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow-1">
        <Hero 
          onOpenDonationModal={scrollToDonation} 
          onOpenDuaModal={scrollToDua} 
        />
        
        <MehmanUpdates />

        <AboutKhadim />

        <KhidmatServices 
          onOpenDonationModal={scrollToDonation} 
          onOpenDuaModal={scrollToDua} 
        />

        <Gallery />

        <Donation />

        <OnlineDua />

        <TravelGuide />

        <Testimonials />
      </main>

      {/* Footer */}
      <ContactFooter 
        onOpenDonationModal={scrollToDonation} 
        onOpenDuaModal={scrollToDua} 
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenDuaModal={scrollToDua} />
    </div>
  );
}

export default App;
