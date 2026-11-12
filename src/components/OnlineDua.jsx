import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { KHADIM_PROFILE } from '../data/contentData';

export const OnlineDua = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    city: '',
    phone: '',
    duaType: 'Barkat & Rozi',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [duaToken, setDuaToken] = useState('');

  const duaCategories = [
    'Barkat & Rozi Karobar',
    'Bimari Se Shifa-e-Kamila',
    'Nek Aulaad Ki Tamanna',
    'Shadi / Achha Rishta',
    'Nazar-e-Bad & Balaon Se Hifazat',
    'Qarz & Pareshani Se Nijaat',
    'Imtihan / Naukri Me Kamyabi',
    'Aam Fatiha & Khairiyat'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Kripya apna naam aur phone number zaroor bharein.');
      return;
    }

    const token = 'DUA-' + Math.floor(100000 + Math.random() * 900000);
    setDuaToken(token);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Assalamu Alaikum Khadim Sahab,
Maine Asthana Sharif par Dua ke liye darkhwast bheji hai:
📌 Token No: ${duaToken}
👤 Naam: ${formData.name}
👪 Walida / Family: ${formData.parentName || 'N/A'}
📍 Shehar: ${formData.city || 'India'}
🎯 Maqsad / Hajat: ${formData.duaType}
📝 Dua Darkhwast: ${formData.message || 'Khair-o-Barkat aur aafiyat ki dua farmaiye.'}

Kripya darbar-e-khwaja me hamare haq me khas dua farmaiye.`;
    return `https://wa.me/${KHADIM_PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="dua" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-envelope-heart-fill text-danger"></i>
            <span>Dua Ki Darkhwast</span>
          </div>
          <h2 className="section-main-title font-serif">
            Asthana Aaliya Me Online Dua Request
          </h2>
          <div className="gold-divider">
            <i className="bi bi-moon-stars-fill"></i>
          </div>
          <p className="section-desc">
            Agar aap kisi majboori, bimari ya doori ki wajah se Ajmer nahi aa sakte, to apna naam aur hajat darj karein. Khadim Sahab roza-e-mubarak par aapke haq me khas dua mangenge.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card rounded-4 border border-warning shadow-lg overflow-hidden">
              <div className="card-header bg-emerald text-white p-4 text-center border-bottom border-warning">
                <span className="font-calligraphy text-gold fs-4 d-block mb-1">
                  ادْعُونِي أَسْتَجِبْ لَكُمْ
                </span>
                <h5 className="font-serif fw-bold text-gold-light mb-0">
                  "Tum Mujhe Pukaro, Main Tumhari Dua Qubool Karunga"
                </h5>
                <small className="text-white-50">Dua bil-khasusan Asthana Mubarak me padhi jayegi</small>
              </div>

              <div className="card-body p-4 p-lg-5 bg-sand">
                {submitted ? (
                  <div className="text-center py-4">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success text-white mb-3"
                      style={{ width: '70px', height: '70px' }}
                    >
                      <i className="bi bi-check2 fs-1"></i>
                    </div>

                    <h4 className="font-serif text-emerald fw-bold mb-2">
                      Alhamdulillah! Aapki Dua Darkhwast Darj Ho Gayi
                    </h4>
                    <p className="text-muted mb-3">
                      Aapka Dua Token Number: <strong className="text-emerald">{duaToken}</strong>
                    </p>

                    <div className="p-3 bg-white rounded-3 border mb-4 text-start small" style={{ maxWidth: '450px', margin: '0 auto' }}>
                      <div className="mb-1"><strong>Zaireen:</strong> {formData.name}</div>
                      <div className="mb-1"><strong>Shehar:</strong> {formData.city}</div>
                      <div className="mb-1"><strong>Dua Maqsad:</strong> {formData.duaType}</div>
                      <div><strong>Khadim Note:</strong> Insha'Allah Asthana Sharif me Sandal Mali aur Fatiha ke waqt aapke naam ki dua ki jayegi.</div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <a 
                        href={getWhatsAppMessageUrl()}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp rounded-pill px-4 py-3 fw-bold"
                      >
                        <i className="bi bi-whatsapp me-2 fs-5"></i>
                        Yeh Dua Seedha Khadim Sahab Ko WhatsApp Karein
                      </a>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary rounded-pill px-4 py-3"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', parentName: '', city: '', phone: '', duaType: 'Barkat & Rozi', message: '' });
                        }}
                      >
                        Doosri Dua Bhejein
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold text-emerald">
                          Aapka Poora Naam (Full Name) *
                        </label>
                        <input 
                          type="text" 
                          className="form-control rounded-3" 
                          placeholder="e.g. Mohammad Asif / Suresh Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold text-emerald">
                          Walida (Maa) ya Parivar Ke Naam
                        </label>
                        <input 
                          type="text" 
                          className="form-control rounded-3" 
                          placeholder="Dua me naam shamil karne ke liye"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold text-emerald">
                          Shehar & State (City) *
                        </label>
                        <input 
                          type="text" 
                          className="form-control rounded-3" 
                          placeholder="e.g. Mumbai, Maharashtra"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-bold text-emerald">
                          WhatsApp / Mobile No *
                        </label>
                        <input 
                          type="tel" 
                          className="form-control rounded-3" 
                          placeholder="e.g. 9820011223"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-bold text-emerald">
                          Dua Ki Niyyat / Kis Maqsad Ke Liye?
                        </label>
                        <select 
                          className="form-select rounded-3"
                          value={formData.duaType}
                          onChange={(e) => setFormData({ ...formData, duaType: e.target.value })}
                        >
                          {duaCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-bold text-emerald">
                          Apni Darkhwast / Pareshani Tafseel Se Likhein:
                        </label>
                        <textarea 
                          className="form-control rounded-3" 
                          rows="4"
                          placeholder="Khadim Sahab se jo bhi dua karwana chahte hain, wo yahan likhein (shifa, aulad, rozi, karobar, aafiyat)..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      <div className="col-12 text-center pt-2">
                        <button 
                          type="submit" 
                          className="btn btn-gold btn-lg px-5 py-3 rounded-pill fw-bold shadow"
                        >
                          <i className="bi bi-send-fill me-2"></i>
                          Dua Darkhwast Darj Karein (Submit Free)
                        </button>
                        <div className="text-muted small mt-2">
                          <i className="bi bi-check-circle-fill text-success me-1"></i>
                          Dua darkhwast bilkul muft (Free) hai. Darbar me sabhi ke liye dua ki jati hai.
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
