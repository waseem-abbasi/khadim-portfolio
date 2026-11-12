import React from 'react';
import { KHADIM_PROFILE } from '../data/contentData';

export const ContactFooter = ({ onOpenDonationModal, onOpenDuaModal }) => {
  return (
    <footer id="contact" className="bg-emerald-dark text-white pt-5 pb-3 border-top border-warning border-opacity-50">
      <div className="container py-4">
        <div className="row g-5">
          {/* Col 1: Identity & Darbar */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center border border-warning"
                style={{ width: '48px', height: '48px', background: 'radial-gradient(circle, #d4af37 20%, #052e23 100%)' }}
              >
                <i className="bi bi-moon-stars-fill text-white fs-4"></i>
              </div>
              <div>
                <h5 className="font-serif fw-bold text-gold mb-0">{KHADIM_PROFILE.name}</h5>
                <small className="text-white-50">{KHADIM_PROFILE.title}</small>
              </div>
            </div>

            <p className="text-white-50 small" style={{ lineHeight: '1.8' }}>
              Dargah Hazrat Khwaja Moinuddin Hasan Chishti (R.A.), Ajmer Sharif, Rajasthan. All India ke aane wale mehmano ki khidmat, rehaish, Ziyarat aur Dua me 24 ghante hazir.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a 
                href={`https://wa.me/${KHADIM_PROFILE.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp rounded-circle"
                style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a 
                href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`}
                className="btn btn-sm btn-outline-gold rounded-circle"
                style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a 
                href={`mailto:${KHADIM_PROFILE.email}`}
                className="btn btn-sm btn-outline-gold rounded-circle"
                style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-sm-6 col-lg-2">
            <h6 className="font-serif text-gold-light fw-bold mb-3">Zaroori Links</h6>
            <ul className="list-unstyled small text-white-50" style={{ lineHeight: '2' }}>
              <li><a href="#hero" className="text-white-50 text-decoration-none hover-gold">Ghar (Home)</a></li>
              <li><a href="#about" className="text-white-50 text-decoration-none hover-gold">About Khadim</a></li>
              <li><a href="#mehman-updates" className="text-white-50 text-decoration-none hover-gold">Mehman Updates</a></li>
              <li><a href="#services" className="text-white-50 text-decoration-none hover-gold">Khidmat & Services</a></li>
              <li><a href="#gallery" className="text-white-50 text-decoration-none hover-gold">Photo Gallery</a></li>
              <li><a href="#travel" className="text-white-50 text-decoration-none hover-gold">Kaise Pahunchein</a></li>
            </ul>
          </div>

          {/* Col 3: Seva & Contribution */}
          <div className="col-sm-6 col-lg-3">
            <h6 className="font-serif text-gold-light fw-bold mb-3">Darbar Seva</h6>
            <ul className="list-unstyled small text-white-50" style={{ lineHeight: '2' }}>
              <li>
                <button onClick={onOpenDonationModal} className="btn btn-link p-0 text-white-50 text-decoration-none hover-gold small">
                  Badi & Chhoti Deg Niyaz
                </button>
              </li>
              <li>
                <button onClick={onOpenDonationModal} className="btn btn-link p-0 text-white-50 text-decoration-none hover-gold small">
                  Chadar Sharif & Gulab Peshi
                </button>
              </li>
              <li>
                <button onClick={onOpenDuaModal} className="btn btn-link p-0 text-white-50 text-decoration-none hover-gold small">
                  Online Dua Request (Free)
                </button>
              </li>
              <li>
                <a href="#mehman-updates" className="text-white-50 text-decoration-none hover-gold">
                  Urs Mubarak Room Booking
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Tabarruk%20Courier%20chahiye`} className="text-white-50 text-decoration-none hover-gold">
                  Speed Post Tabarruk Order
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Office Address & Contact */}
          <div className="col-lg-3">
            <h6 className="font-serif text-gold-light fw-bold mb-3">Office & Mehman-Khana</h6>
            <div className="small text-white-50 mb-3" style={{ lineHeight: '1.7' }}>
              <div className="d-flex gap-2 mb-2">
                <i className="bi bi-geo-alt text-gold fs-5"></i>
                <span>{KHADIM_PROFILE.officeAddress}</span>
              </div>
              <div className="d-flex gap-2 mb-2">
                <i className="bi bi-telephone text-gold"></i>
                <div>
                  <a href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`} className="text-white text-decoration-none d-block">
                    {KHADIM_PROFILE.phone1}
                  </a>
                  <a href={`tel:${KHADIM_PROFILE.phone2.replace(/\s+/g, '')}`} className="text-white text-decoration-none d-block">
                    {KHADIM_PROFILE.phone2}
                  </a>
                </div>
              </div>
              <div className="d-flex gap-2">
                <i className="bi bi-envelope text-gold"></i>
                <span>{KHADIM_PROFILE.email}</span>
              </div>
            </div>

            <div className="p-2 rounded bg-black bg-opacity-30 border border-warning border-opacity-25 small text-gold">
              <i className="bi bi-shield-check me-1"></i> 24 Ghante Helpline Active
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Blessing */}
        <div className="row mt-5 pt-3 border-top border-warning border-opacity-25 text-center text-white-50 small">
          <div className="col-md-6 text-md-start mb-2 mb-md-0">
            © {new Date().getFullYear()} {KHADIM_PROFILE.name} - All Rights Reserved.
          </div>
          <div className="col-md-6 text-md-end text-gold-light font-serif">
            Ya Khwaja Garib Nawaz (R.A.) Karam Farmaiye
          </div>
        </div>
      </div>
    </footer>
  );
};
