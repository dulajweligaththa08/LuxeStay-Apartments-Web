# ⚡ QUICK START REFERENCE

## 🚀 START SERVERS

### Windows (Easy Way)
```bash
# Double-click start.bat
# OR
start.bat
```

### Manual Start
```bash
# Terminal 1 - Backend
cd server
node server.js

# Terminal 2 - Frontend
npm run dev
```

## 🌐 URLs
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📁 KEY FILES

### Frontend
- `src/pages/Home.jsx` - Main landing page
- `src/pages/About.jsx` - About company
- `src/pages/Inquiries.jsx` - Contact form
- `src/components/Navbar.jsx` - Navigation
- `src/components/Footer.jsx` - Footer
- `src/styles.css` - Global styles

### Backend
- `server/server.js` - Express API
- `server/.env` - Email config

## 🎨 DESIGN TOKENS

### Colors
```css
Gold Gradient: #d4af37 → #f5d77b
Dark BG: #151822 → #0d0f14
Glass: rgba(255,255,255,0.05)
Border: rgba(255,255,255,0.08)
```

### Spacing
```css
Border Radius: 20px
Padding: 30px-60px
Gap: 20px-40px
```

## 🔧 COMMON TASKS

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

### Change Email
Edit `server/.env`:
```env
EMAIL=newemail@gmail.com
PASSWORD=new-app-password
```

### Modify Colors
Edit `src/styles.css`:
```css
.gold-text {
  background: linear-gradient(90deg, #COLOR1, #COLOR2);
}
```

## 📦 DEPENDENCIES

### Frontend
- react
- react-router-dom
- framer-motion
- axios

### Backend
- express
- nodemailer
- cors
- dotenv

## 🐛 QUICK FIXES

### Port Already in Use
```bash
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Email Not Sending
1. Check .env file exists
2. Verify App Password (not regular password)
3. Enable 2-Step Verification
4. Check Gmail settings

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 RESPONSIVE BREAKPOINTS

```css
Mobile: < 768px
Tablet: 768px - 1199px
Desktop: 1200px+
```

## ✨ ANIMATION PROPS

```jsx
// Fade in
initial={{opacity:0}}
animate={{opacity:1}}

// Slide up
initial={{y:30}}
animate={{y:0}}

// Scale
initial={{scale:0.9}}
animate={{scale:1}}

// Delay
transition={{delay:0.2}}
```

## 🔐 SECURITY CHECKLIST

- [ ] .env in .gitignore
- [ ] Using App Password
- [ ] No credentials in code
- [ ] CORS configured
- [ ] Input validation active

## 📞 SUPPORT

- Check SETUP_GUIDE.md for detailed instructions
- Review FEATURES.md for complete feature list
- See README.md for project overview

---

**Quick Tip**: Use `start.bat` to launch both servers instantly!
