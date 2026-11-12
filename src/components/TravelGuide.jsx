import React from 'react';
import { TRAVEL_STEPS, KHADIM_PROFILE } from '../data/contentData';

export const TravelGuide = () => {
  return (
    <section id="travel" className="py-5 bg-sand position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Safar Ki Rahnumai</span>
          </div>
          <h2 className="section-main-title font-serif">
            Ajmer Sharif Kaise Pahunchein?
          </h2>
          <div className="gold-divider">
            <i className="bi bi-compass"></i>
          </div>
          <p className="section-desc">
            All India ke mehmano ke liye train, flight aur local conveyance ki zaroori jaankari, taaki aapka safar aasan aur aafiyat-bhara rahe.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="row g-4 mb-5">
          {TRAVEL_STEPS.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 gold-border-card p-4 text-center">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center bg-emerald text-gold fw-bold fs-4 mx-auto mb-3 shadow-sm"
                  style={{ width: '56px', height: '56px' }}
                >
                  {item.step}
                </div>
                <h5 className="font-serif fw-bold text-emerald mb-1">
                  {item.title}
                </h5>
                <span className="badge badge-gold mb-3 d-inline-block">
                  {item.distance}
                </span>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Tips Card */}
        <div className="card rounded-4 border-0 shadow-lg bg-white overflow-hidden">
          <div className="row g-0">
            <div className="col-lg-4 bg-emerald text-white p-4 p-lg-5 d-flex flex-column justify-content-between">
              <div>
                <span className="badge badge-gold-dark mb-2">Pehli Baar Aane Walon Ke Liye</span>
                <h4 className="font-serif text-gold-light fw-bold mb-3">
                  Zaroori Mehman Hidayat
                </h4>
                <p className="text-white-50 small mb-4">
                  Dargah Sharif aate waqt in zaroori baton ka khayal rakhein taaki kisi tarah ki preshani na ho.
                </p>
              </div>

              <div className="p-3 rounded-3 bg-black bg-opacity-30 border border-warning border-opacity-25 text-center">
                <small className="text-gold fw-bold d-block mb-1">Station Se Call Karein:</small>
                <a href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`} className="text-white text-decoration-none fw-bold fs-6">
                  <i className="bi bi-telephone-outbound text-gold me-2"></i>
                  {KHADIM_PROFILE.phone1}
                </a>
              </div>
            </div>

            <div className="col-lg-8 p-4 p-lg-5">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-check-circle-fill text-success fs-4 mt-1"></i>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Station Par Receive Service</h6>
                      <p className="text-muted small mb-0">
                        Aap train pahunchne se 2 ghante pehle hume train ka naam aur samay bata dein.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-check-circle-fill text-success fs-4 mt-1"></i>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Safe Room & Luggage Locker</h6>
                      <p className="text-muted small mb-0">
                        Mehman-Khana me parivar ke liye surakshit kamre aur saman rakhne ka pakka intezam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-check-circle-fill text-success fs-4 mt-1"></i>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Dargah Gate No. 1 (Nizam Gate)</h6>
                      <p className="text-muted small mb-0">
                        Main gate se enter hotey hi hamara daftarr bilkul nazdeek hai.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <i className="bi bi-check-circle-fill text-success fs-4 mt-1"></i>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Anjan Logon Se Savdhan</h6>
                      <p className="text-muted small mb-0">
                        Bazar me anjan dukaandaron ya dalalon ke bahkawe me na aayein, seedha Khadim Sahab se milein.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
