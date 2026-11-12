import React from 'react';
import { KHADIM_PROFILE } from '../data/contentData';

export const Hero = ({ onOpenDonationModal, onOpenDuaModal }) => {
  return (
    <section id="hero" className="position-relative text-white overflow-hidden py-5" style={{
      background: 'linear-gradient(170deg, #021a14 0%, #052e23 45%, #083c2e 80%, #02140f 100%)',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Decorative Golden Ambient Circles */}
      <div 
        className="position-absolute rounded-circle" 
        style={{
          width: '500px',
          height: '500px',
          top: '-150px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        className="position-absolute rounded-circle" 
        style={{
          width: '450px',
          height: '450px',
          bottom: '-100px',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative py-lg-4" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold-dark mb-3">
              <span className="pulse-live"></span>
              <span className="small fw-bold">All India Mehman & Zaireen Seva Portal</span>
            </div>

            <h1 className="display-4 fw-bold mb-3 font-serif" style={{ lineHeight: '1.2' }}>
              <span className="d-block text-gold-light" style={{ fontSize: '1.4rem', fontFamily: 'var(--font-calligraphy)', letterSpacing: '1px' }}>
                السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </span>
              Khwaja Garib Nawaz (R.A.) Dargah Sharif, Ajmer
            </h1>

            <p className="lead text-white-50 mb-3" style={{ fontSize: '1.18rem', fontWeight: '400' }}>
              Main <strong className="text-gold">{KHADIM_PROFILE.name}</strong>, Dargah Hazrat Khwaja Moinuddin Hasan Chishti (R.A.) ka khadim hoon. Hindustan ke har shehar, gaon aur kasbe se aane wale mehmanon ke liye Ziyarat, Mehman-Khana (Stay), Chadar Peshi, Langar Niyaz aur Dua ki khidmat me 24 ghante hazir hoon.
            </p>

            {/* Quick Feature Badges */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
              <span className="badge bg-dark bg-opacity-50 border border-warning text-gold px-3 py-2 rounded-pill">
                <i className="bi bi-shield-check me-1"></i> Khandani Khadim
              </span>
              <span className="badge bg-dark bg-opacity-50 border border-warning text-gold px-3 py-2 rounded-pill">
                <i className="bi bi-house-door-fill me-1"></i> Mehman-Khana Stay
              </span>
              <span className="badge bg-dark bg-opacity-50 border border-warning text-gold px-3 py-2 rounded-pill">
                <i className="bi bi-gift-fill me-1"></i> Tabarruk by Speed Post
              </span>
              <span className="badge bg-dark bg-opacity-50 border border-warning text-gold px-3 py-2 rounded-pill">
                <i className="bi bi-flower1 me-1"></i> Chadar & Deg Niyaz
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
              <button 
                type="button" 
                onClick={onOpenDonationModal}
                className="btn btn-gold btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-credit-card-2-front-fill fs-5"></i>
                <span>Niyaz / Donation Karein</span>
              </button>

              <a 
                href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Assalamu%20Alaikum%20Khadim%20Sahab,%20hum%20Ajmer%20Sharif%20Ziyarat%20ke%20liye%20rabta%20kar%20rahe%20hain.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-whatsapp fs-5"></i>
                <span>WhatsApp Helpline</span>
              </a>

              <button 
                type="button" 
                onClick={onOpenDuaModal}
                className="btn btn-outline-gold btn-lg px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-envelope-heart fs-5"></i>
                <span>Online Dua Bhejein</span>
              </button>
            </div>

            {/* Direct Call Quick Bar */}
            <div className="text-center text-lg-start">
              <small className="text-white-50">
                <i className="bi bi-headset me-1 text-gold"></i> Ziyarat ya Room Booking ke liye turant call karein:&nbsp;
                <a href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`} className="text-gold fw-bold text-decoration-none">
                  {KHADIM_PROFILE.phone1}
                </a> / 
                <a href={`tel:${KHADIM_PROFILE.phone2.replace(/\s+/g, '')}`} className="text-gold fw-bold text-decoration-none ms-1">
                  {KHADIM_PROFILE.phone2}
                </a>
              </small>
            </div>
          </div>

          {/* Right Column: Prestigious Visual Card of Khadim Sahab */}
          <div className="col-lg-5">
            <div className="position-relative mx-auto" style={{ maxWidth: '420px' }}>
              <div 
                className="p-3 rounded-4 shadow-lg"
                style={{
                  background: 'rgba(5, 46, 35, 0.75)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid var(--accent-gold)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)'
                }}
              >
                <div className="position-relative overflow-hidden rounded-3 mb-3" style={{ height: '360px' }}>
                  <img 
                    src="	https://elevatexindia.cloud/profile/uploads/user_121_99af731ac38f894d.jpg" 
                    alt="Syed Khadim Sahab Chishti" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-3"
                    style={{ background: 'linear-gradient(to top, rgba(2, 26, 20, 0.95), transparent)' }}
                  >
                    <span className="badge badge-gold-dark mb-1">
                      <i className="bi bi-patch-check-fill text-gold me-1"></i> Khadim-e-Khwaja
                    </span>
                    <h5 className="font-serif fw-bold text-white mb-0">{KHADIM_PROFILE.name}</h5>
                    <small className="text-gold-light">{KHADIM_PROFILE.title}</small>
                  </div>
                </div>

                {/* Quick Info Grid inside card */}
                <div className="row g-2 text-center text-light small">
                  <div className="col-6">
                    <div className="p-2 rounded bg-black bg-opacity-30 border border-warning border-opacity-25">
                      <div className="text-gold fw-bold fs-5">{KHADIM_PROFILE.experienceYears}</div>
                      <div className="text-white-50" style={{ fontSize: '0.78rem' }}>Khadmani Khidmat</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 rounded bg-black bg-opacity-30 border border-warning border-opacity-25">
                      <div className="text-gold fw-bold fs-5">{KHADIM_PROFILE.devoteesServed}</div>
                      <div className="text-white-50" style={{ fontSize: '0.78rem' }}>Mehman Hosted</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <a 
                    href="#mehman-updates" 
                    className="text-gold text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1 hover-gold"
                  >
                    <span>Taaza Mehman Updates & Urs Notification Padhein</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="row mt-5 pt-4 g-3 border-top border-warning border-opacity-25 text-center">
          <div className="col-6 col-md-3">
            <div className="text-gold fw-bold font-serif fs-3">28+</div>
            <div className="text-white-50 small">Saalon Ka Aitmad & Khidmat</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-gold fw-bold font-serif fs-3">28 States</div>
            <div className="text-white-50 small">All India Zaireen Connected</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-gold fw-bold font-serif fs-3">24x7</div>
            <div className="text-white-50 small">Station Receive & Room Seva</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="text-gold fw-bold font-serif fs-3">100%</div>
            <div className="text-white-50 small">Aman, Mohabat & Adab</div>
          </div>
        </div>
      </div>
    </section>
  );
};
