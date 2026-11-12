import React, { useState } from 'react';
import { GALLERY_PHOTOS, KHADIM_PROFILE } from '../data/contentData';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'Khadim Sahab', 'Dargah Sharif', 'Chadar Peshi', 'Deg & Langar', 'Mehman Nawazi'];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === activeCategory);

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  const navigatePhoto = (direction) => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredPhotos.length - 1;
    if (nextIndex >= filteredPhotos.length) nextIndex = 0;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <section id="gallery" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-camera-fill"></i>
            <span>Mubarak Manazir & Tasveerat</span>
          </div>
          <h2 className="section-main-title font-serif">
            Dargah Sharif & Khadim Sahab Photo Gallery
          </h2>
          <div className="gold-divider">
            <i className="bi bi-flower2"></i>
          </div>
          <p className="section-desc">
            Hazrat Khwaja Garib Nawaz (R.A.) ke aastan-e-aaliya ke noorani manazir, Khadim Sahab ki dua majlis, Chadar Mubarak peshi, aur Langar-e-Aam ki yaaddasht tasveerein.
          </p>
        </div>

        {/* Khadim Sahab Special Focus Banner */}
        <div className="p-3 mb-4 rounded-4 bg-sand border border-warning border-opacity-50 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center bg-emerald text-gold"
              style={{ width: '45px', height: '45px', minWidth: '45px' }}
            >
              <i className="bi bi-person-badge fs-4"></i>
            </div>
            <div>
              <span className="fw-bold text-emerald d-block">
                Khadim Sahab Ki Asal Tasveerein (Personal Photos & Khidmat)
              </span>
              <small className="text-muted">
                Khadim Sahab ke zariye Dastarbandi, dua, aur all-India mehmano ki khidmat ke lamhat.
              </small>
            </div>
          </div>
          <button 
            type="button" 
            onClick={() => setActiveCategory('Khadim Sahab')}
            className="btn btn-sm btn-outline-gold rounded-pill px-3"
          >
            Khadim Sahab Photos <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold transition ${
                activeCategory === cat 
                  ? 'btn-gold shadow' 
                  : 'btn-outline-secondary text-dark bg-light'
              }`}
            >
              {cat === 'All' ? 'Sabhi Tasveerein (All)' : cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="row g-4">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="col-sm-6 col-lg-4">
              <div 
                className="gold-border-card overflow-hidden h-100 position-relative group-hover cursor-pointer"
                onClick={() => openLightbox(photo)}
                style={{ cursor: 'pointer' }}
              >
                <div className="position-relative overflow-hidden" style={{ height: '260px' }}>
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title}
                    className="w-100 h-100 object-fit-cover transition-transform"
                    style={{ transition: 'transform 0.4s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    loading="lazy"
                  />
                  <div 
                    className="position-absolute top-0 start-0 m-3"
                  >
                    <span className="badge badge-gold-dark shadow-sm">
                      {photo.category}
                    </span>
                  </div>
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                    style={{ background: 'linear-gradient(to top, rgba(2, 26, 20, 0.9), transparent)' }}
                  >
                    <h6 className="font-serif fw-bold mb-1 text-gold-light">{photo.title}</h6>
                    <small className="text-white-50 d-block text-truncate">{photo.description}</small>
                  </div>
                </div>

                <div className="p-3 bg-white d-flex justify-content-between align-items-center">
                  <small className="text-muted fw-semibold">
                    <i className="bi bi-eye-fill text-gold me-1"></i> Badi Tasveer Dekhein
                  </small>
                  <span className="btn btn-sm btn-light rounded-circle text-gold">
                    <i className="bi bi-arrows-fullscreen"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on how user can put their own real photos */}
        <div className="mt-5 p-3 rounded-3 bg-light border text-center small text-muted">
          <i className="bi bi-info-circle-fill text-gold me-2"></i>
          <strong>Photo Badalna Aasan Hai:</strong> Aap apni koi bhi photo computer se <code>public/images/</code> folder me daal kar <code>contentData.js</code> me naam update kar sakte hain.
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ background: 'rgba(0, 0, 0, 0.88)', zIndex: 1060 }}
          onClick={closeLightbox}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white border border-warning rounded-4 overflow-hidden shadow-lg">
              <div className="modal-header border-bottom border-secondary py-2 px-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-gold text-dark fw-bold">
                    {selectedPhoto.category}
                  </span>
                  <h6 className="modal-title font-serif text-gold-light fw-bold mb-0">
                    {selectedPhoto.title}
                  </h6>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeLightbox}
                />
              </div>

              <div className="modal-body p-0 position-relative text-center bg-black" style={{ minHeight: '380px', maxHeight: '70vh' }}>
                <img 
                  src={selectedPhoto.imageUrl} 
                  alt={selectedPhoto.title}
                  className="img-fluid w-100 object-fit-contain" 
                  style={{ maxHeight: '70vh' }}
                />

                {/* Left & Right Navigation Buttons */}
                <button 
                  type="button"
                  onClick={() => navigatePhoto(-1)}
                  className="btn btn-dark bg-opacity-75 text-gold position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-left fs-5"></i>
                </button>
                <button 
                  type="button"
                  onClick={() => navigatePhoto(1)}
                  className="btn btn-dark bg-opacity-75 text-gold position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="bi bi-chevron-right fs-5"></i>
                </button>
              </div>

              <div className="modal-footer border-top border-secondary py-3 px-4 d-flex justify-content-between align-items-center">
                <p className="text-white-50 mb-0 small text-start">
                  {selectedPhoto.description}
                </p>
                <div className="d-flex gap-2">
                  <a 
                    href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20maine%20yeh%20photo%20dekhi%20hai:%20${encodeURIComponent(selectedPhoto.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-whatsapp rounded-pill px-3"
                  >
                    <i className="bi bi-whatsapp me-1"></i> WhatsApp Pe Poochein
                  </a>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-secondary rounded-pill px-3"
                    onClick={closeLightbox}
                  >
                    Band Karein
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
