import React from 'react';
import { TESTIMONIALS } from '../data/contentData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-chat-heart-fill text-danger"></i>
            <span>Mehmanon Ki Zubani</span>
          </div>
          <h2 className="section-main-title font-serif">
            Hindustan Bhar Ke Zaireen Ke Ta'assurat
          </h2>
          <div className="gold-divider">
            <i className="bi bi-star-fill"></i>
          </div>
          <p className="section-desc">
            Mumbai, Delhi, Hyderabad, Srinagar, Kolkata aur har soobey se aaye mehmanon ka aitmad aur duayein.
          </p>
        </div>

        <div className="row g-4">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 gold-border-card p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="text-warning mb-2 fs-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>

                  <p className="text-muted small fst-italic mb-3" style={{ lineHeight: '1.7' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-top d-flex align-items-center gap-2">
                  <div 
                    className="rounded-circle bg-emerald text-gold fw-bold d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', minWidth: '40px' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="fw-bold text-emerald mb-0" style={{ fontSize: '0.95rem' }}>
                      {t.name}
                    </h6>
                    <small className="text-muted" style={{ fontSize: '0.78rem' }}>
                      <i className="bi bi-geo-alt me-1"></i>
                      {t.city}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
