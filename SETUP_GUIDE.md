# 🌈 RA RAINBOW APARTMENT - COMPLETE SETUP GUIDE

## 🎯 PROJECT OVERVIEW

A production-ready luxury apartment website featuring:
- ✨ Glassmorphism UI with gold gradient theme
- 🎬 Framer Motion animations
- 📱 Fully responsive design
- 📧 Email inquiry system
- 🚀 React + Node.js architecture

---

## 📋 PREREQUISITES

Before starting, ensure you have:
- Node.js v16+ installed
- npm or yarn package manager
- Gmail account (for email functionality)
- Code editor (VS Code recommended)

---

## 🚀 INSTALLATION STEPS

### Step 1: Navigate to Project
```bash
cd rainbow-apartment
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

---

## 🔐 EMAIL CONFIGURATION

### Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Click "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Search for "App passwords" or visit: https://myaccount.google.com/apppasswords
5. Select "Mail" and "Windows Computer" (or Other)
6. Click "Generate"
7. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### Configure .env File

Edit `server/.env`:
```env
EMAIL=yourgmail@gmail.com
PASSWORD=xxxx xxxx xxxx xxxx
PORT=5000
```

⚠️ **IMPORTANT**: Use the App Password, NOT your regular Gmail password!

---

## 🏃 RUNNING THE APPLICATION

### Option 1: Run Both Servers Separately

**Terminal 1 - Backend:**
```bash
cd server
node server.js
```
You should see: ✅ Server running on port 5000

**Terminal 2 - Frontend:**
```bash
npm run dev
```
You should see: Local: http://localhost:5173

### Option 2: Using npm scripts (Recommended)

Add to `package.json`:
```json
"scripts": {
  "dev": "vite",
  "server": "cd server && node server.js",
  "start": "concurrently \"npm run dev\" \"npm run server\""
}
```

Then run:
```bash
npm start
```

---

## 🌐 ACCESSING THE WEBSITE

Open your browser and visit:
```
http://localhost:5173
```

### Pages Available:
- **Home** - `/` - Hero, stats, apartments, amenities, testimonials
- **About** - `/about` - Company info, mission, vision, amenities
- **Inquiries** - `/inquiries` - Contact form with email integration

---

## 🎨 DESIGN FEATURES

### Color Scheme
- Background: Dark gradient (#151822 → #0d0f14)
- Gold gradient: #d4af37 → #f5d77b
- Glass effect: rgba(255,255,255,0.05) with blur

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300, 400, 600, 700

### Animations
- Fade-in on scroll
- Hover lift effects
- Smooth transitions
- Mobile menu slide-down

---

## 📱 RESPONSIVE BREAKPOINTS

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

Mobile features:
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons
- Optimized font sizes

---

## 🧪 TESTING THE CONTACT FORM

1. Navigate to Inquiries page
2. Fill in all fields:
   - Name
   - Email
   - Phone
   - Message
3. Click "Send Inquiry"
4. Check your Gmail inbox for the inquiry email

---

## 🐛 TROUBLESHOOTING

### Backend won't start
- Check if port 5000 is available
- Verify .env file exists in server folder
- Ensure all dependencies are installed

### Email not sending
- Verify Gmail App Password is correct
- Check 2-Step Verification is enabled
- Ensure .env EMAIL matches your Gmail
- Check server console for error messages

### Frontend not loading
- Clear browser cache
- Check if port 5173 is available
- Verify all npm packages installed
- Run `npm install` again

### CORS errors
- Ensure backend is running on port 5000
- Check axios URL in Inquiries.jsx matches backend port

---

## 📦 PROJECT STRUCTURE

```
rainbow-apartment/
│
├── src/                          # React Frontend
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with mobile menu
│   │   ├── Footer.jsx           # 3-column footer
│   │   └── GlassCard.jsx        # Reusable glass card
│   ├── pages/
│   │   ├── Home.jsx             # Main landing page
│   │   ├── About.jsx            # About company page
│   │   └── Inquiries.jsx        # Contact form page
│   ├── App.jsx                  # Router setup
│   ├── main.jsx                 # Entry point
│   └── styles.css               # Global styles
│
├── server/                       # Node.js Backend
│   ├── server.js                # Express server
│   ├── .env                     # Environment variables
│   └── package.json             # Server dependencies
│
├── package.json                  # Frontend dependencies
└── README.md                     # Documentation
```

---

## 🚀 DEPLOYMENT

### Frontend (Vercel)

1. Push code to GitHub
2. Visit https://vercel.com
3. Import repository
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy

### Backend (Render)

1. Push code to GitHub
2. Visit https://render.com
3. Create new Web Service
4. Connect repository
5. Set build command: `cd server && npm install`
6. Set start command: `cd server && node server.js`
7. Add environment variables (EMAIL, PASSWORD)
8. Deploy

### Update Frontend API URL

After deploying backend, update `src/pages/Inquiries.jsx`:
```javascript
await axios.post("https://your-backend-url.onrender.com/send", form);
```

---

## 🔒 SECURITY BEST PRACTICES

- ✅ Never commit .env file
- ✅ Use App Passwords, not regular passwords
- ✅ Add .env to .gitignore
- ✅ Validate all form inputs
- ✅ Keep dependencies updated
- ✅ Use HTTPS in production

---

## 📝 CUSTOMIZATION

### Change Colors
Edit `src/styles.css`:
```css
.gold-text {
  background: linear-gradient(90deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### Add New Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

### Modify Content
- Home page: `src/pages/Home.jsx`
- About page: `src/pages/About.jsx`
- Contact info: `src/components/Footer.jsx`

---

## 🎯 FEATURES CHECKLIST

- ✅ Glassmorphism UI
- ✅ Gold gradient theme
- ✅ Responsive design
- ✅ Mobile hamburger menu
- ✅ Framer Motion animations
- ✅ React Router navigation
- ✅ Contact form with validation
- ✅ Email integration (Nodemailer)
- ✅ Express backend API
- ✅ CORS enabled
- ✅ Environment variables
- ✅ Professional folder structure

---

## 📞 SUPPORT

For issues or questions:
- Check troubleshooting section above
- Review console logs for errors
- Verify all dependencies installed
- Ensure .env configured correctly

---

## 📄 LICENSE

MIT License - Free to use and modify

---

**Built with ❤️ for luxury living**

🌈 RA Rainbow Apartments - Where Luxury Meets Comfort
