import React, { useState } from 'react';
import { KHADIM_PROFILE } from '../data/contentData';

export const Navbar = ({ onOpenDonationModal, onOpenDuaModal }) => {
  const [navExpanded, setNavExpanded] = useState(false);

  const toggleNav = () => setNavExpanded(!navExpanded);
  const closeNav = () => setNavExpanded(false);

  return (
    <header className="sticky-top shadow-sm" style={{ zIndex: 1030 }}>
      {/* Top Sacred Bar */}
      <div className="bg-emerald-dark text-light py-1 border-bottom border-warning border-opacity-25" style={{ fontSize: '0.85rem' }}>
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center gap-3">
            <span className="font-calligraphy text-gold fw-bold" style={{ fontSize: '1.05rem', letterSpacing: '1px' }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="d-none d-md-inline text-light opacity-75">
              | Dargah Hazrat Khwaja Moinuddin Hasan Chishti (R.A.), Ajmer Sharif
            </span>
          </div>

          <div className="d-flex align-items-center gap-3 ms-auto">
            <a 
              href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`} 
              className="text-gold-light text-decoration-none d-flex align-items-center gap-1 hover-gold"
            >
              <i className="bi bi-telephone-fill text-gold"></i>
              <span className="fw-semibold">{KHADIM_PROFILE.phone1}</span>
            </a>
            <span className="opacity-50">|</span>
            <a 
              href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Assalamu%20Alaikum%20Khadim%20Sahab,%20mujhe%20Ajmer%20Sharif%20Ziyarat%20ke%20silsile%20me%20rabta%20karna%20hai.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="badge bg-success text-white text-decoration-none d-flex align-items-center gap-1 px-2 py-1"
            >
              <i className="bi bi-whatsapp"></i>
              <span>24/7 WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-emerald navbar-dark py-2 border-bottom" style={{ borderColor: 'var(--border-gold)' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#hero" onClick={closeNav}>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center border border-warning"
              style={{ width: '46px', height: '46px', background: 'radial-gradient(circle, #d4af37 20%, #052e23 100%)' }}
            >
              <i className="bi bi-moon-stars-fill text-white fs-5"></i>
            </div>
            <div>
              <div className="font-serif fw-bold text-gold" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>
                Kaji Syed Hussainuddin
              </div>
              <small className="text-white-50 d-block" style={{ fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                Khadim-e-Khwaja Garib Nawaz (R.A.) | Ajmer
              </small>
            </div>
          </a>

          {/* Mobile Toggler */}
          <button 
            className="navbar-toggler border-warning text-gold" 
            type="button" 
            onClick={toggleNav}
            aria-controls="mainNavbar" 
            aria-expanded={navExpanded} 
            aria-label="Toggle navigation"
          >
            <i className={`bi ${navExpanded ? 'bi-x-lg' : 'bi-list'} fs-3`}></i>
          </button>

          <div className={`collapse navbar-collapse ${navExpanded ? 'show' : ''}`} id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold text-center">
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#hero" onClick={closeNav}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#about" onClick={closeNav}>
                  About Khadim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-3 d-flex align-items-center justify-content-center gap-1" href="#mehman-updates" onClick={closeNav}>
                  <span className="pulse-live"></span>
                  <span className="text-gold-light fw-bold">Mehman Updates</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#services" onClick={closeNav}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#gallery" onClick={closeNav}>
                  Photo Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#dua" onClick={closeNav}>
                  Online Dua
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 px-3 hover-text-gold" href="#travel" onClick={closeNav}>
                  How to Reach
                </a>
              </li>
            </ul>

            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3 mt-lg-0">
              <button 
                type="button" 
                className="btn btn-sm btn-outline-gold px-3 py-2 rounded-pill"
                onClick={() => { closeNav(); onOpenDuaModal(); }}
              >
                <i className="bi bi-envelope-heart-fill me-1"></i> Dua Bhejein
              </button>
              <button 
                type="button" 
                className="btn btn-sm btn-gold px-3 py-2 rounded-pill"
                onClick={() => { closeNav(); onOpenDonationModal(); }}
              >
                <i className="bi bi-heart-fill me-1 text-danger"></i> Niyaz / Donation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
