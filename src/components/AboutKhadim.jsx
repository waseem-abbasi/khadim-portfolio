import React from 'react';
import { KHADIM_PROFILE } from '../data/contentData';

export const AboutKhadim = () => {
  return (
    <section id="about" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          {/* Left Column: Image & Credentials */}
          <div className="col-lg-5">
            <div className="position-relative">
              <div 
                className="overflow-hidden rounded-4 shadow-lg border border-warning"
                style={{ maxHeight: '500px' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
                  alt="Khadim Sahab Dargah Ajmer" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Floating Badge */}
              <div 
                className="position-absolute bottom-0 start-50 translate-middle-x p-3 rounded-4 bg-emerald text-white text-center shadow-lg border border-warning"
                style={{ width: '85%', marginBottom: '-25px' }}
              >
                <div className="d-flex justify-content-around align-items-center">
                  <div>
                    <div className="text-gold fw-bold fs-4">28+</div>
                    <div className="small text-white-50">Saal Ki Khidmat</div>
                  </div>
                  <div className="border-start border-warning border-opacity-50 ps-3">
                    <div className="text-gold fw-bold fs-4">Gaddi Nashin</div>
                    <div className="small text-white-50">Khandani Silsila</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Heritage */}
          <div className="col-lg-7 pt-4 pt-lg-0">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
              <i className="bi bi-award-fill"></i>
              <span>Khandani Khadim-e-Khas</span>
            </div>

            <h2 className="section-main-title text-start font-serif mb-3">
              Masha'Allah! Hazrat Khwaja Garib Nawaz (R.A.) Ki Khidmat Hamara Fakhr Hai
            </h2>

            <p className="lead text-emerald fw-semibold mb-3">
              "Mohabbat Sab Ke Liye, Nafrat Kisi Se Nahi" (Love towards all, Malice towards none)
            </p>

            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              Hamara khandan naslan-baad-naslan Hazrat Sultan-ul-Hind Khwaja Moinuddin Hasan Chishti Sanjari Summa Ajmeri (R.A.) ke mazar-e-aqdas ki khidmat me mashghool hai. Ajmer Sharif aane wale har mehman ko be-khauf aur aaram-deh mahol faraham karna hamara deeni aur insani farz hai.
            </p>

            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              Chahe aap Hindustan ke kisi bhi kone (Kashmir se Kanyakumari, Gujarat se Assam) se tashreef la rahe hon, ya beroon-e-mulk (foreign) se, hum aapki aur aapke poore parivar ki behtareen mehman-nawazi ke liye mustaid hain.
            </p>

            {/* Core Values */}
            <div className="row g-3 mt-2 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-sand border">
                  <i className="bi bi-check2-circle text-gold fs-5"></i>
                  <span className="small fw-bold text-dark">Khaalis Chishti Silsila & Barkat</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-sand border">
                  <i className="bi bi-check2-circle text-gold fs-5"></i>
                  <span className="small fw-bold text-dark">Bina Kisi Bhedbhav Sabhi Ka Swagat</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-sand border">
                  <i className="bi bi-check2-circle text-gold fs-5"></i>
                  <span className="small fw-bold text-dark">Shanti, Hifazat & Pur-Sukoon Ziyarat</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-sand border">
                  <i className="bi bi-check2-circle text-gold fs-5"></i>
                  <span className="small fw-bold text-dark">Sacchai & Shafafiyat (Transparency)</span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a 
                href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Assalamu%20Alaikum%20Khadim%20Sahab,%20main%20Aapke%20bare%20me%20aur%20Ajmer%20aane%20ke%20bare%20me%20baat%20karna%20chahta%20hoon.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-emerald text-white btn-gold px-4 py-2 rounded-pill fw-bold"
              >
                <i className="bi bi-chat-quote-fill me-2"></i> Khadim Sahab Se Rabta Karein
              </a>

              <a 
                href="#services" 
                className="btn btn-outline-secondary px-4 py-2 rounded-pill"
              >
                Khidmat Ki List Dekhein
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
