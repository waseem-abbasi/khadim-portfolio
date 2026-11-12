# Hazrat Khwaja Garib Nawaz (R.A.) Khadim Portfolio & Mehman Seva Portal

Assalamu Alaikum! Yeh ek modern, responsive aur spiritual **React.js + Bootstrap 5** portfolio portal hai, jise khas taur par Hazrat Khwaja Moinuddin Hasan Chishti (R.A.), Dargah Sharif, Ajmer ke Khadim Sahab ke liye design kiya gaya hai. Iski madad se All India ke mehmano (zaireen) tak pahunch aasan ho sakegi.

---

## 🌟 Mukhya Khasiyat (Key Features)

1. **React.js & Bootstrap 5 Modern Architecture**:
   - Tez (super fast) Vite build system.
   - Bootstrap 5 + Bootstrap Icons + Islamic Sufi Aesthetics (Emerald Green `#052e23`, Royal Gold `#d4af37`, ivory warm backgrounds).
   - 100% Mobile responsive (har screen par behtareen dikhta hai).

2. **Mehman Updates Section (All India Zaireen Information Desk)**:
   - Salana Urs Mubarak ke taaza elaanat aur stay notices.
   - Mahana 6th Chhati Sharif schedule.
   - Daily Asthana Sharif timing (Morning & Evening Khidmat, Sandal Mali).
   - All India Speed Post Tabarruk delivery alerts.
   - WhatsApp Daily Broadcast join button.

3. **Photo Gallery (Jisme Khadim Sahab Ki Photo Ho)**:
   - Dedicated categories: *Khadim Sahab*, *Dargah Sharif*, *Chadar Peshi*, *Deg & Langar*, *Mehman-Nawazi*.
   - Interactive Lightbox Popup with zoom, descriptions aur WhatsApp share.
   - Apni asal photo lagane ka aasan tareeqa.

4. **Donation / Niyaz Integration (Razorpay + UPI QR + Bank Details)**:
   - **Razorpay Checkout Integrated**: Instant payment for Deg Niyaz, Chadar Peshi, Langar.
   - Built-in Sandbox/Demo mode: Testing ke waqt bina live key ke bhi complete checkout aur receipt kaam karega.
   - Live Razorpay Key lagane ke liye sirf `src/data/contentData.js` me key paste karni hai.
   - **Direct UPI QR Code**: PhonePe, Google Pay, Paytm, BHIM scan & pay.
   - **Bank Account Transfer Card**: 1-Click Copy account number, IFSC, aur branch details.
   - **Digital Receipt Generator**: Automatic Confetti celebration aur 1-Click WhatsApp share receipt with Khadim Sahab!

5. **Online Dua Request Form**:
   - Jo mehman Ajmer nahi aa sakte, wo apna naam, shehar aur dua intention darj kar sakte hain.
   - Auto-generated Dua Token aur direct formatted WhatsApp message!

6. **Travel Guide (Kaise Pahunchein)**:
   - Ajmer Junction, Kishangarh Airport, Jaipur Airport, aur Nizam Gate (Gate No. 1) guide.
   - Station receive helpline.

7. **24x7 Quick Helpline**:
   - Floating WhatsApp button, direct call button, aur top-scroll.

---

## 🚀 Local Machine Par Kaise Chalayein (Run Locally)

Apne computer par project folder me terminal kholiye aur run karein:

```bash
# Dependencies pehle se installed hain, fir bhi check karne ke liye:
npm install

# Development server shuru karein:
npm run dev
```

Browser me `http://localhost:5173` kholein.

---

## ⚡ Vercel Par Deploy Kaise Karein (Deploy to Vercel in 2 Minutes)

Is project me **`vercel.json`** pehle se tayar hai, isliye Vercel par deployment 100% smooth aur zero-error hoga!

### Tareeqa 1: GitHub Ke Zariye (Sabse Aasan & Recommended)

1. Apne code ko GitHub repository par push karein:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Khadim Portfolio"
   git branch -M main
   # Apni nayi GitHub repo ka URL yahan dalein:
   git remote add origin https://github.com/AAPKA_USERNAME/khadim-portfolio.git
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) par login karein (GitHub se sign in karein).
3. **"Add New Project"** par click karein aur apni `khadim-portfolio` repository select karein.
4. Framework me **Vite** automatically select ho jayega.
5. **Deploy** button dabayein!
6. Kuch hi seconds me aapki website live ho jayegi (e.g. `khadim-portfolio.vercel.app`).

### Tareeqa 2: Vercel CLI Se Seedha Deploy Karein

```bash
npm install -g vercel
vercel
```
Prompt aane par Enter press karte jayein, project live ho jayega!

---

## 📝 Apna Data & Photo Kaise Badlein (Customization)

### 1. Phone Number, Naam, UPI & Bank Details Badalne Ke Liye:
File kholiye: `src/data/contentData.js`
Yahan par aap aasani se change kar sakte hain:
- `name`: Apna shahi naam
- `phone1`, `phone2`: Apne phone number
- `whatsapp`: Apna WhatsApp number (bina + sign ke)
- `upiId`: Apna UPI ID (jaise `9829012345@paytm` ya `khadim@sbi`)
- `accountNumber`, `ifscCode`: Apne bank details
- `razorpayKeyId`: Apna Razorpay Live Key ID (jaise `rzp_live_xxxxxxxx`)

### 2. Gallery Me Apni Asal Photo Kaise Lagayein:
1. Apni photo ko `public/images/` folder me save karein (jaise `public/images/khadim-photo.jpg`).
2. File `src/data/contentData.js` me `GALLERY_PHOTOS` array me `imageUrl: "/images/khadim-photo.jpg"` likh dein!

---

## 🔒 Razorpay Integration Details

- Frontend checkout script pehle se `index.html` me load kiya gaya hai (`https://checkout.razorpay.com/v1/checkout.js`).
- Jab tak aap `razorpayKeyId` me apni original live key nahi daalte, tab tak system **Interactive Demo/Simulation Mode** me kaam karega taaki aap bina paise katey receipt aur poora flow test kar sakein.
- Jaise hi aap apni live key daalenge, real transaction start ho jayega.

---

Dargah Hazrat Khwaja Garib Nawaz (R.A.) ke tufaile aapki khidmat me barkat ata farmaye!
