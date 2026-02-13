# 🏢 LuxeStay Apartments

A premium luxury apartment showcase website featuring stunning animations, modern UI/UX, and an integrated inquiry system.

## ✨ Features

- **Stunning Hero Section** with background video and smooth animations
- **Interactive Amenities Showcase** with beautiful gold-accented icons
- **Responsive Design** that works seamlessly across all devices
- **Glass Morphism UI** with elegant gold accents
- **Smooth Animations** powered by Framer Motion
- **Contact Form** with email integration via Nodemailer
- **Modern Icon System** using Lucide React icons
- **About Page** with mission, vision, and company values
- **Featured Apartments** gallery with hover effects

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Gmail account (for email functionality)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd rainbow-apartment
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Configure Email Service

Create a `.env` file in the `server` directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, you need to generate an App Password:
1. Go to Google Account Settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use that password in the `.env` file

### 5. Run the Application

#### Option A: Using the Start Script (Windows)
```bash
start.bat
```

#### Option B: Manual Start

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd server
npm start
```

## 🌐 Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## 📁 Project Structure

```
rainbow-apartment/
├── public/              # Static assets (videos, images)
├── server/              # Backend server
│   ├── server.js        # Express server & email handler
│   ├── package.json     # Backend dependencies
│   └── .env            # Environment variables
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── GlassCard.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Inquiries.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Frontend dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Key Components

### Home Page
- Hero section with video background
- Statistics showcase
- Signature living features
- Featured apartments gallery
- Exceptional amenities with icons
- Testimonials section
- Call-to-action section

### About Page
- Company overview
- Core values showcase
- Mission & vision statements
- Amenities & services with video previews
- Contact call-to-action

### Inquiries Page
- Contact form with validation
- Real-time form status feedback
- Contact information cards with animated icons
- Email integration

## 🎯 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start Express server
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be modified in `vite.config.js`.

### Email Configuration
Email functionality is handled by Nodemailer. Configure SMTP settings in `server/.env`.

## 🎨 Customization

### Colors
The primary gold accent color is `#d4af37`. Update this in:
- `src/index.css` (CSS variables)
- Component inline styles

### Content
- Update apartment listings in `src/pages/Home.jsx`
- Modify company information in `src/pages/About.jsx`
- Change contact details in `src/pages/Inquiries.jsx`

### Assets
Place images and videos in the `public/` directory for optimal loading.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend Deployment (Heroku/Railway)
Deploy the `server` directory with environment variables configured.

## 🐛 Troubleshooting

### Port Already in Use
- Frontend: Change port in `vite.config.js`
- Backend: Change port in `server/server.js`

### Email Not Sending
- Verify Gmail App Password is correct
- Check `.env` file configuration
- Ensure 2FA is enabled on Gmail account

### Video Not Playing
- Ensure video files are in `public/` directory
- Check video format compatibility (MP4 recommended)
- Verify file paths in component code

## 📄 License

This project is private and proprietary.

## 👥 Support

For support or inquiries, contact: info@luxestay.com

## 🙏 Acknowledgments

- Framer Motion for animation capabilities
- Lucide React for beautiful icons
- React team for the amazing framework
- Vite for blazing fast development experience

---

**Built with ❤️ for luxury living**
