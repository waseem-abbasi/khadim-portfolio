import React, { useState, useEffect } from 'react';
import { KHADIM_PROFILE } from '../data/contentData';

export const FloatingActions = ({ onOpenDuaModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-action-bar">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="float-btn bg-dark text-gold border border-warning"
          title="Scroll to Top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      {/* Online Dua Quick Pill */}
      <button
        type="button"
        onClick={onOpenDuaModal}
        className="float-btn btn-gold text-dark"
        title="Online Dua Bhejein"
      >
        <i className="bi bi-envelope-heart-fill"></i>
      </button>

      {/* Direct Call */}
      <a
        href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`}
        className="float-btn bg-primary text-white"
        title="Direct Call Helpline"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Assalamu%20Alaikum%20Khadim%20Sahab,%20main%20Ajmer%20Sharif%20Ziyarat%20ke%20liye%20rabta%20kar%20raha%20hoon.`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn btn-whatsapp text-white"
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};
