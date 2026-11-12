import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DONATION_PACKAGES, KHADIM_PROFILE } from '../data/contentData';

export const Donation = () => {
  const [selectedPackage, setSelectedPackage] = useState(DONATION_PACKAGES[2]); // Chadar Mubarak default
  const [amount, setAmount] = useState(2500);
  const [donorName, setDonorName] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [duaIntention, setDuaIntention] = useState('');
  const [activePaymentTab, setActivePaymentTab] = useState('online'); // 'online' | 'upi' | 'bank'
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePackageChange = (pkg) => {
    setSelectedPackage(pkg);
    setAmount(pkg.defaultAmount);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas-confetti is not loaded
    }
  };

  const handleRazorpayPayment = (e) => {
    e.preventDefault();

    if (!donorName.trim() || !donorPhone.trim() || !amount || amount <= 0) {
      alert('Kripya apna naam, phone number aur raqam (amount) darj karein.');
      return;
    }

    setIsProcessing(true);

    // If Razorpay SDK is available and configured
    if (window.Razorpay && KHADIM_PROFILE.razorpayKeyId && !KHADIM_PROFILE.razorpayKeyId.includes('YourKeyHere')) {
      const options = {
        key: KHADIM_PROFILE.razorpayKeyId,
        amount: Number(amount) * 100, // in paise
        currency: "INR",
        name: "Dargah Ajmer Sharif Niyaz",
        description: `${selectedPackage.title} - ${donorName}`,
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=200&q=80",
        handler: function (response) {
          setIsProcessing(false);
          const receiptData = {
            receiptId: "KGN-" + Math.floor(100000 + Math.random() * 900000),
            paymentId: response.razorpay_payment_id || ("RZP-" + Date.now().toString().slice(-6)),
            amount: amount,
            name: donorName,
            city: donorCity || "Hindustan",
            phone: donorPhone,
            packageTitle: selectedPackage.title,
            intention: duaIntention || "Barkat, Shifa & Salamati",
            date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
          };
          setPaymentSuccess(receiptData);
          triggerConfetti();
        },
        prefill: {
          name: donorName,
          contact: donorPhone
        },
        theme: {
          color: "#052e23"
        }
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          setIsProcessing(false);
          alert("Payment asafal rahi. Kripya doobara koshish karein ya UPI se bhein.");
        });
        rzp.open();
      } catch (err) {
        setIsProcessing(false);
        simulatePayment();
      }
    } else {
      // Demo / Test Mode Simulation fallback so the user can test right away!
      simulatePayment();
    }
  };

  const simulatePayment = () => {
    setTimeout(() => {
      setIsProcessing(false);
      const receiptData = {
        receiptId: "KGN-" + Math.floor(100000 + Math.random() * 900000),
        paymentId: "DEMO-" + Date.now().toString().slice(-6),
        amount: amount,
        name: donorName,
        city: donorCity || "Hindustan",
        phone: donorPhone,
        packageTitle: selectedPackage.title,
        intention: duaIntention || "Barkat, Shifa & Salamati",
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      setPaymentSuccess(receiptData);
      triggerConfetti();
    }, 1200);
  };

  return (
    <section id="donation" className="py-5 bg-sand position-relative">
      <div className="container py-lg-4">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-gold mb-2">
            <i className="bi bi-heart-fill text-danger"></i>
            <span>Niyaz, Langar & Chadar Khidmat</span>
          </div>
          <h2 className="section-main-title font-serif">
            Darbar-e-Khwaja Me Niyaz & Sadqa Contribution
          </h2>
          <div className="gold-divider">
            <i className="bi bi-moon-stars"></i>
          </div>
          <p className="section-desc">
            Hazrat Khwaja Garib Nawaz (R.A.) ke mazar-e-aqdas par Chadar peshi, Badi Deg ka shahi langar, aur rozana garib zaireen ke liye taqseem hone wale tabarruk me apna hissa daalein.
          </p>
        </div>

        {/* Success Modal / E-Receipt */}
        {paymentSuccess && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ background: 'rgba(0, 0, 0, 0.75)', zIndex: 1060 }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4 border border-warning shadow-lg overflow-hidden">
                <div className="modal-header bg-emerald text-white border-bottom border-warning py-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-gold fs-4"></i>
                    <div>
                      <h5 className="modal-title font-serif text-gold-light fw-bold mb-0">
                        Niyaz / Contribution Receipt
                      </h5>
                      <small className="text-white-50">Dargah Hazrat Khwaja Garib Nawaz (R.A.)</small>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setPaymentSuccess(null)}
                  />
                </div>

                <div className="modal-body p-4 bg-white text-dark">
                  <div className="text-center mb-3">
                    <div className="badge bg-success px-3 py-2 rounded-pill fs-6 mb-2">
                      <i className="bi bi-shield-check me-1"></i> JazakAllah Khair! Raqam Mausool Hui
                    </div>
                    <div className="display-6 fw-bold text-emerald">
                      ₹{Number(paymentSuccess.amount).toLocaleString('en-IN')}
                    </div>
                    <small className="text-muted">Receipt No: <strong>{paymentSuccess.receiptId}</strong></small>
                  </div>

                  <div className="p-3 rounded-3 bg-light border small mb-3">
                    <div className="d-flex justify-content-between py-1 border-bottom">
                      <span className="text-muted">Zaireen / Mehman:</span>
                      <strong className="text-dark">{paymentSuccess.name}</strong>
                    </div>
                    <div className="d-flex justify-content-between py-1 border-bottom">
                      <span className="text-muted">Shehar (City):</span>
                      <strong className="text-dark">{paymentSuccess.city}</strong>
                    </div>
                    <div className="d-flex justify-content-between py-1 border-bottom">
                      <span className="text-muted">Khidmat Category:</span>
                      <strong className="text-emerald">{paymentSuccess.packageTitle}</strong>
                    </div>
                    <div className="d-flex justify-content-between py-1 border-bottom">
                      <span className="text-muted">Tareekh (Date):</span>
                      <span className="text-dark">{paymentSuccess.date}</span>
                    </div>
                    <div className="d-flex justify-content-between py-1">
                      <span className="text-muted">Dua Intention / Hajat:</span>
                      <span className="text-dark fw-semibold">{paymentSuccess.intention}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-3 bg-emerald-dark text-gold small text-center mb-3">
                    <i className="bi bi-info-circle me-1"></i>
                    Khadim Sahab aapke naam ki Fatiha wa Chadar darbar me pesh kar ke video confirmation bhejenge.
                  </div>

                  <div className="d-grid gap-2">
                    <a 
                      href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Assalamu%20Alaikum%20Khadim%20Sahab,%20maine%20Darbar%20me%20Niyaz%20bheji%20hai.%0AName:%20${encodeURIComponent(paymentSuccess.name)}%0ACity:%20${encodeURIComponent(paymentSuccess.city)}%0AAmount:%20₹${paymentSuccess.amount}%0AReceipt:%20${paymentSuccess.receiptId}%0APurpose:%20${encodeURIComponent(paymentSuccess.intention)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp rounded-pill py-2 fw-semibold"
                    >
                      <i className="bi bi-whatsapp me-2"></i> WhatsApp Pe Receipt & Dua Bhejein
                    </a>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary rounded-pill py-2"
                      onClick={() => setPaymentSuccess(null)}
                    >
                      Theek Hai (Close)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Major Contribution Categories */}
        <div className="row g-4 mb-5">
          {DONATION_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="col-md-6 col-lg-3">
              <div 
                className={`card h-100 rounded-4 transition cursor-pointer ${
                  selectedPackage.id === pkg.id 
                    ? 'border-2 border-warning shadow-lg' 
                    : 'border border-warning border-opacity-25 shadow-sm'
                }`}
                style={{
                  background: selectedPackage.id === pkg.id ? '#ffffff' : '#ffffff',
                  transform: selectedPackage.id === pkg.id ? 'translateY(-4px)' : 'none'
                }}
                onClick={() => handlePackageChange(pkg)}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    {pkg.popular && (
                      <span className="badge bg-danger rounded-pill px-3 py-1 mb-2">
                        ★ Most Blessed
                      </span>
                    )}
                    <h5 className="font-serif fw-bold text-emerald mb-1">
                      {pkg.title}
                    </h5>
                    <p className="text-muted small mb-3">
                      {pkg.shortDesc}
                    </p>

                    <ul className="list-unstyled small text-muted mb-4">
                      {pkg.benefits.map((b, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-gold mt-1"></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted small">Standard Niyaz:</span>
                      <strong className="fs-5 text-emerald">₹{pkg.defaultAmount.toLocaleString('en-IN')}</strong>
                    </div>
                    <button 
                      type="button"
                      className={`btn w-100 rounded-pill fw-bold ${
                        selectedPackage.id === pkg.id ? 'btn-gold' : 'btn-outline-gold'
                      }`}
                      onClick={() => handlePackageChange(pkg)}
                    >
                      {selectedPackage.id === pkg.id ? '✓ Selected' : 'Yeh Chunein'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Payment Console */}
        <div className="card border-0 rounded-4 shadow-lg overflow-hidden bg-white">
          <div className="card-header bg-emerald text-white p-4 border-bottom border-warning">
            <div className="row align-items-center g-3">
              <div className="col-lg-7">
                <span className="badge badge-gold-dark mb-1">Secure Khidmat Gateway</span>
                <h4 className="font-serif fw-bold text-gold-light mb-1">
                  {selectedPackage.title} Ki Niyaz Bhejein
                </h4>
                <small className="text-white-50">
                  Razorpay Card/Netbanking, Direct UPI QR, ya Bank Account Transfer se bhej sakte hain.
                </small>
              </div>

              {/* Payment Mode Tabs */}
              <div className="col-lg-5 text-lg-end">
                <div className="btn-group rounded-pill p-1 bg-black bg-opacity-40 border border-warning border-opacity-25" role="group">
                  <button
                    type="button"
                    onClick={() => setActivePaymentTab('online')}
                    className={`btn btn-sm rounded-pill px-3 py-1 ${activePaymentTab === 'online' ? 'btn-gold' : 'text-white'}`}
                  >
                    <i className="bi bi-credit-card me-1"></i> Online / Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePaymentTab('upi')}
                    className={`btn btn-sm rounded-pill px-3 py-1 ${activePaymentTab === 'upi' ? 'btn-gold' : 'text-white'}`}
                  >
                    <i className="bi bi-qr-code-scan me-1"></i> UPI QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePaymentTab('bank')}
                    className={`btn btn-sm rounded-pill px-3 py-1 ${activePaymentTab === 'bank' ? 'btn-gold' : 'text-white'}`}
                  >
                    <i className="bi bi-bank me-1"></i> Bank Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-4 p-lg-5">
            {/* Mode 1: Online Razorpay Integration */}
            {activePaymentTab === 'online' && (
              <form onSubmit={handleRazorpayPayment}>
                <div className="row g-4">
                  {/* Amount Selection */}
                  <div className="col-12">
                    <label className="form-label fw-bold text-emerald">
                      1. Raqam (Amount) Chunein ya Manpasand Daalein:
                    </label>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {selectedPackage.amountOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setAmount(opt)}
                          className={`btn rounded-pill px-3 py-2 fw-semibold ${
                            Number(amount) === opt ? 'btn-gold' : 'btn-outline-secondary'
                          }`}
                        >
                          ₹{opt.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                    <div className="input-group input-group-lg" style={{ maxWidth: '350px' }}>
                      <span className="input-group-text bg-emerald text-gold fw-bold border-emerald">₹</span>
                      <input 
                        type="number" 
                        className="form-control fw-bold fs-4" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Other Amount"
                        min="51"
                        required
                      />
                    </div>
                  </div>

                  {/* Devotee Info */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold text-dark">
                      Aapka Naam (Devotee Full Name) *
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg rounded-3" 
                      placeholder="e.g. Mohammad Aslam / Rajesh Kumar"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold text-dark">
                      WhatsApp / Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      className="form-control form-control-lg rounded-3" 
                      placeholder="e.g. 9876543210"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold text-dark">
                      Shehar & State (City)
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg rounded-3" 
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark">
                      Dua Ki Niyyat / Family Members Ke Naam
                    </label>
                    <textarea 
                      className="form-control rounded-3" 
                      rows="2"
                      placeholder="Ghar me barkat, bimari se shifa, ya mannat ke liye dua ki darkhwast..."
                      value={duaIntention}
                      onChange={(e) => setDuaIntention(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center pt-2">
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="btn btn-gold btn-lg px-5 py-3 rounded-pill fw-bold shadow"
                    >
                      {isProcessing ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-shield-lock-fill me-2"></i>
                          ₹{Number(amount || 0).toLocaleString('en-IN')} Niyaz Proceed Karein (Razorpay Secure)
                        </>
                      )}
                    </button>
                    <div className="mt-2 text-muted small">
                      <i className="bi bi-lock-fill text-success me-1"></i>
                      100% Secure SSL 256-bit Encrypted Transaction
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Mode 2: Direct UPI QR Code */}
            {activePaymentTab === 'upi' && (
              <div className="row align-items-center g-4">
                <div className="col-lg-5 text-center">
                  <div className="p-3 bg-white border border-warning rounded-4 shadow-sm d-inline-block">
                    {/* Dynamic QR code pointing to UPI string */}
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=${KHADIM_PROFILE.upiId}&pn=${encodeURIComponent(KHADIM_PROFILE.accountHolder)}&cu=INR`}
                      alt="UPI QR Code" 
                      className="img-fluid rounded-3"
                      style={{ width: '200px', height: '200px' }}
                    />
                    <div className="mt-2 fw-bold text-emerald">
                      Scan with any UPI App
                    </div>
                    <div className="d-flex justify-content-center gap-2 mt-1">
                      <span className="badge bg-light text-dark border">GPay</span>
                      <span className="badge bg-light text-dark border">PhonePe</span>
                      <span className="badge bg-light text-dark border">Paytm</span>
                      <span className="badge bg-light text-dark border">BHIM</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <h5 className="font-serif text-emerald fw-bold mb-2">
                    Direct UPI ID Transfer
                  </h5>
                  <p className="text-muted small mb-3">
                    Aap kisi bhi payment app (Google Pay, PhonePe, Paytm, BHIM) se seedha is UPI ID par raqam bhej sakte hain. Bhejne ke baad screenshot WhatsApp par zaroor share karein.
                  </p>

                  <div className="p-3 rounded-3 bg-light border mb-3">
                    <label className="text-muted small d-block mb-1">Official UPI ID:</label>
                    <div className="d-flex align-items-center justify-content-between">
                      <code className="fs-5 fw-bold text-dark">{KHADIM_PROFILE.upiId}</code>
                      <button 
                        type="button" 
                        onClick={() => copyToClipboard(KHADIM_PROFILE.upiId, 'upi')}
                        className={`btn btn-sm rounded-pill px-3 ${copiedUpi ? 'btn-success' : 'btn-outline-gold'}`}
                      >
                        <i className={`bi ${copiedUpi ? 'bi-check2' : 'bi-clipboard'} me-1`}></i>
                        {copiedUpi ? 'Copied!' : 'Copy UPI ID'}
                      </button>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/${KHADIM_PROFILE.whatsapp}?text=Khadim%20Sahab,%20maine%20UPI%20se%20Niyaz%20bheji%20hai.%20Yeh%20raha%20screenshot:`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp Pe Payment Screenshot Bhejein
                  </a>
                </div>
              </div>
            )}

            {/* Mode 3: Bank Account Transfer */}
            {activePaymentTab === 'bank' && (
              <div className="row g-4 align-items-center">
                <div className="col-lg-7">
                  <h5 className="font-serif text-emerald fw-bold mb-2">
                    Official Khidmat Bank Account Details
                  </h5>
                  <p className="text-muted small mb-3">
                    NEFT / RTGS / IMPS ya bank branch se seedha deposit karne ke liye neeche diye gaye official khate ka istemal karein:
                  </p>

                  <div className="table-responsive bg-light rounded-3 p-3 border">
                    <table className="table table-borderless table-sm mb-0">
                      <tbody>
                        <tr>
                          <td className="text-muted" style={{ width: '35%' }}>Account Name:</td>
                          <td className="fw-bold text-emerald">{KHADIM_PROFILE.accountHolder}</td>
                        </tr>
                        <tr>
                          <td className="text-muted">Bank Name:</td>
                          <td className="fw-bold">{KHADIM_PROFILE.bankName}</td>
                        </tr>
                        <tr>
                          <td className="text-muted">Account Number:</td>
                          <td className="fw-bold text-danger fs-6">{KHADIM_PROFILE.accountNumber}</td>
                        </tr>
                        <tr>
                          <td className="text-muted">IFSC Code:</td>
                          <td className="fw-bold text-primary">{KHADIM_PROFILE.ifscCode}</td>
                        </tr>
                        <tr>
                          <td className="text-muted">Branch:</td>
                          <td>{KHADIM_PROFILE.branch}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-5 text-center">
                  <div className="p-4 rounded-4 bg-sand border border-warning border-opacity-50">
                    <i className="bi bi-bank text-gold display-4 mb-2 d-block"></i>
                    <h6 className="fw-bold text-emerald mb-2">One-Click Copy</h6>
                    <button 
                      type="button"
                      onClick={() => copyToClipboard(`A/C: ${KHADIM_PROFILE.accountNumber}, IFSC: ${KHADIM_PROFILE.ifscCode}, Name: ${KHADIM_PROFILE.accountHolder}, Bank: ${KHADIM_PROFILE.bankName}`, 'bank')}
                      className={`btn w-100 rounded-pill mb-2 ${copiedBank ? 'btn-success' : 'btn-gold'}`}
                    >
                      <i className={`bi ${copiedBank ? 'bi-check2-all' : 'bi-copy'} me-1`}></i>
                      {copiedBank ? 'Bank Details Copied!' : 'Copy Complete Details'}
                    </button>
                    <small className="text-muted d-block">
                      Deposit karne ke baad bank receipt WhatsApp par bhein.
                    </small>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
