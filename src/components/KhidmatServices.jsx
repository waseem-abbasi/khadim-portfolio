import React from 'react';
import { SERVICES_LIST, KHADIM_PROFILE } from '../data/contentData';

export const KhidmatServices = ({ onOpenDonationModal, onOpenDuaModal }) => {
  return (
    <section id="services" className="py-5 bg-sand position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-star-fill"></i>
            <span>Zaireen Ke Liye Khas Suvidhayein</span>
          </div>
          <h2 className="section-main-title font-serif">
            Ajmer Sharif Ki Mukammal Khidmat
          </h2>
          <div className="gold-divider">
            <i className="bi bi-gem"></i>
          </div>
          <p className="section-desc">
            Hindustan bhar se aane wale aashiqan-e-khwaja ke liye safar se lekar Ziyarat aur wapsi tak har qadam par mukammal sahara aur khidmat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {SERVICES_LIST.map((srv, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 gold-border-card p-4 d-flex flex-column justify-content-between">
                <div>
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center bg-emerald text-gold mb-3 shadow-sm"
                    style={{ width: '60px', height: '60px' }}
                  >
                    <i className={`bi ${srv.icon} fs-3`}></i>
                  </div>
                  <h5 className="font-serif fw-bold text-emerald mb-2">
                    {srv.title}
                  </h5>
                  <p className="text-muted small" style={{ lineHeight: '1.7' }}>
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-top mt-3">
                  <a 
                    href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20mujhe%20is%20khidmat%20ke%20bare%20me%20poochna%20hai:%20${encodeURIComponent(srv.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald text-decoration-none small fw-bold d-inline-flex align-items-center gap-1 hover-gold"
                  >
                    <span>Is Khidmat Ke Liye Rabta Karein</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-5 p-4 rounded-4 bg-emerald text-white text-center position-relative overflow-hidden shadow-lg border border-warning">
          <div className="row align-items-center">
            <div className="col-lg-8 text-lg-start mb-3 mb-lg-0">
              <h4 className="font-serif fw-bold text-gold-light mb-1">
                Kya Aap Ajmer Aane Ka Program Bana Rahe Hain?
              </h4>
              <p className="text-white-50 mb-0">
                Pehle se ittehad dene par hamari team aapko station par receive karne aur aaram-deh kamra faraham karne ke liye taiyar rahegi.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a 
                href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20hum%20Ajmer%20aane%20ka%20program%20bana%20rahe%20hain.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-gold rounded-pill px-4 py-3 fw-bold"
              >
                <i className="bi bi-calendar-check me-2"></i> Pehle Se Room Book Karein
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
