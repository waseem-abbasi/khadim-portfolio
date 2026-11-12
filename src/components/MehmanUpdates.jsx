import React, { useState } from 'react';
import { MEHMAN_UPDATES, KHADIM_PROFILE } from '../data/contentData';

export const MehmanUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeUpdateModal, setActiveUpdateModal] = useState(null);

  const categories = ['All', 'Urs Mubarak', 'Chhati Sharif', 'Mehman Nawazi', 'Ziyarat Timing', 'Tabarruk Post'];

  const filteredUpdates = selectedCategory === 'All' 
    ? MEHMAN_UPDATES 
    : MEHMAN_UPDATES.filter(item => item.category === selectedCategory);

  return (
    <section id="mehman-updates" className="py-5 bg-sand position-relative">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <span className="pulse-live"></span>
            <span>All India Zaireen Information Desk</span>
          </div>
          <h2 className="section-main-title font-serif">
            Mehman & Zaireen Taaza Updates
          </h2>
          <div className="gold-divider">
            <i className="bi bi-star-fill"></i>
          </div>
          <p className="section-desc">
            Hazrat Khwaja Garib Nawaz (R.A.) ke darbar aane wale tamam All India ke mehmano ke liye zaroori elaanat, Urs Mubarak ki tareekhein, aur rehaish (stay) ke intazamat.
          </p>
        </div>

        {/* Live Urs Mubarak Highlights Banner */}
        <div 
          className="card text-white mb-4 overflow-hidden border-0 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #021a14 0%, #052e23 60%, #0a4736 100%)',
            borderLeft: '6px solid var(--accent-gold)'
          }}
        >
          <div className="card-body p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="badge bg-danger text-white px-3 py-2 rounded-pill fw-bold mb-2">
                  <i className="bi bi-bell-fill me-1"></i> Ahem Ittela / Notice Board
                </span>
                <h3 className="font-serif text-gold-light fw-bold mb-2">
                  Ajmer Sharif Urs Mubarak & Mehman-Khana Advance Booking
                </h3>
                <p className="text-white-50 mb-3" style={{ fontSize: '1.05rem' }}>
                  Khadim Sahab ki taraf se tamam all India ke mehmano se guzarish hai ki Urs Mubarak ke dauran bheed se bachne ke liye kamre (rooms/guest house) pehle se book karwa lein. Train se aane se pehle apna pahaunchne ka waqt hume zaroor batayein.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20hume%20Ajmer%20Urs%20Mubarak%20ke%20liye%20Room%20aur%20Ziyarat%20ki%20jaankari%20chahiye.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Stay Enquiry on WhatsApp
                  </a>
                  <a 
                    href={`tel:${KHADIM_PROFILE.phone1.replace(/\s+/g, '')}`} 
                    className="btn btn-outline-gold rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-telephone-fill me-2"></i> Call: {KHADIM_PROFILE.phone1}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="p-3 rounded-4 bg-black bg-opacity-30 border border-warning border-opacity-25">
                  <i className="bi bi-calendar-event text-gold display-4 mb-2 d-block"></i>
                  <h6 className="text-gold fw-bold mb-1">Chhati Sharif & Urs Helpline</h6>
                  <p className="text-white-50 small mb-2">24 Ghante Mehman Rahnumai Dastyab</p>
                  <span className="badge bg-success px-3 py-1">Open 24/7 For Pilgrims</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold transition ${
                selectedCategory === cat 
                  ? 'btn-gold shadow' 
                  : 'btn-outline-secondary text-dark bg-white'
              }`}
            >
              {cat === 'All' ? 'Sabhi Updates (All)' : cat}
            </button>
          ))}
        </div>

        {/* Updates Grid */}
        <div className="row g-4">
          {filteredUpdates.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card h-100 gold-border-card p-3 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className={`badge bg-${item.badgeColor} rounded-pill px-2 py-1`}>
                      {item.badge}
                    </span>
                    <span className="text-muted small">
                      <i className="bi bi-calendar3 me-1"></i>
                      {item.date}
                    </span>
                  </div>

                  <h5 className="font-serif fw-bold text-emerald mb-2" style={{ fontSize: '1.15rem' }}>
                    {item.title}
                  </h5>

                  <p className="text-muted small mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2 border-top d-flex justify-content-between align-items-center">
                  <span className="badge bg-light text-dark border">
                    {item.category}
                  </span>
                  <button 
                    type="button"
                    onClick={() => setActiveUpdateModal(item)}
                    className="btn btn-sm btn-outline-gold rounded-pill px-3"
                  >
                    Poori Khabar <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Group / Broadcast Invite Box */}
        <div className="mt-5 p-4 rounded-4 bg-white border border-warning border-opacity-50 text-center shadow-sm">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <h5 className="font-serif text-emerald fw-bold mb-1">
                <i className="bi bi-broadcast text-danger me-2"></i>
                Daily Mehman WhatsApp Broadcast Me Judein
              </h5>
              <p className="text-muted mb-0 small">
                Har roz Dargah Sharif ki taaza tasveer, Fatiha timings, aur mausam ki jaankari sidhe apne phone par payein.
              </p>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <a 
                href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20kripya%20mujhe%20Apne%20Daily%20Dargah%20Updates%20Broadcast%20me%20shamil%20karein.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp rounded-pill px-4 py-2"
              >
                <i className="bi bi-whatsapp me-2"></i> Join Daily Updates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Update Detail Modal */}
      {activeUpdateModal && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              <div className="modal-header bg-emerald text-white rounded-top-4 border-bottom border-warning">
                <h5 className="modal-title font-serif text-gold-light fw-bold">
                  {activeUpdateModal.title}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setActiveUpdateModal(null)}
                />
              </div>
              <div className="modal-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className={`badge bg-${activeUpdateModal.badgeColor} px-3 py-1 rounded-pill`}>
                    {activeUpdateModal.badge}
                  </span>
                  <span className="text-muted small">
                    <i className="bi bi-clock me-1"></i> {activeUpdateModal.date}
                  </span>
                </div>
                <div className="p-3 bg-sand rounded-3 mb-3 border">
                  <p className="mb-0 text-dark fw-semibold">
                    {activeUpdateModal.summary}
                  </p>
                </div>
                <h6 className="fw-bold text-emerald mb-2">Tafseelat (Full Details):</h6>
                <p className="text-muted" style={{ lineHeight: '1.7' }}>
                  {activeUpdateModal.details}
                </p>
              </div>
              <div className="modal-footer bg-light rounded-bottom-4">
                <a 
                  href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Tafseel%20Padhi%20maine:%20${encodeURIComponent(activeUpdateModal.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp rounded-pill px-3 py-2 btn-sm"
                >
                  <i className="bi bi-whatsapp me-1"></i> WhatsApp Pe Rabta Karein
                </a>
                <button 
                  type="button" 
                  className="btn btn-secondary rounded-pill px-3 py-2 btn-sm"
                  onClick={() => setActiveUpdateModal(null)}
                >
                  Band Karein
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
