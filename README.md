
# SGSA Church Website

Official website for St. Gebreal & St. Arsema Ethiopian Orthodox Tewahedo Church in Toronto, Canada.

This project is designed to serve the church community through worship information, church announcements, spiritual resources, media galleries, donation support, and community engagement.

## 🌍 Mission

SGSA Church serves the Greater Toronto Area (GTA) and welcomes believers from all surrounding communities and beyond the region.

This is a spiritual home for worship, prayer, fasting, and Orthodox tradition rooted in the Ethiopian Orthodox Tewahedo faith. The church is open to anyone seeking spiritual growth, guidance, and connection with God, regardless of location.

Our mission is to preserve the ancient Orthodox faith, support the community, and provide a place of worship, unity, and spiritual life for all believers.

## ✝ Features

- Modern responsive church website
- Ethiopian Orthodox church design
- Home, About, Services, Media, Events, and Contact pages
- Mobile-friendly navigation
- Worship schedule section
- Church leadership and ministry pages
- Media gallery for church events and worship
- Donation and membership pages
- Clean and scalable React + Vite architecture

---

## 🛠 Built With

- React
- Vite
- Tailwind CSS
- React Router DOM



## 🙏 Acknowledgment

Developed for the SGSA Church community with dedication to Orthodox faith, tradition, and service.


### PRODUCTION SCAFFOLD


church-project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                  # MongoDB connection    with retry + graceful shutdown
│   │   │   ├── cloudinary.js          # Media storage config for images/documents
│   │   │   ├── env.js                 # Centralized env validation and loading
│   │   │   └── cors.js                # Allowed origins and credential rules
│   │   │
│   │   ├── core/
│   │   │   ├── app.js                 # Express app setup: middleware, routes, error handling
│   │   │   ├── security.js            # Helmet, XSS protection, rate limits, CSRF rules
│   │   │   └── constants.js           # Shared constants and app-wide values
│   │   │
│   │   ├── controllers/               # HTTP-only request/response handlers
│   │   │   ├── authController.js
│   │   │   ├── adminController.js
│   │   │   ├── donationController.js
│   │   │   ├── eventController.js
│   │   │   ├── memberController.js
│   │   │   └── serviceController.js
│   │   │
│   │   ├── services/                  # Business logic layer
│   │   │   ├── authService.js
│   │   │   ├── adminService.js
│   │   │   ├── donationService.js     # Stripe/payment workflow, receipt logic
│   │   │   ├── emailService.js        # Transactional emails and alerts
│   │   │   ├── eventService.js
│   │   │   ├── memberService.js
│   │   │   └── serviceService.js
│   │   │
│   │   ├── models/                    # Mongoose schemas with indexes and timestamps
│   │   │   ├── Admin.js
│   │   │   ├── Donation.js
│   │   │   ├── Event.js
│   │   │   ├── Member.js
│   │   │   ├── Service.js
│   │   │   ├── AuditLog.js            # Tracks admin actions for accountability
│   │   │   └── ContactMessage.js
│   │   │
│   │   ├── routes/
│   │   │   ├── index.js               # Route aggregator
│   │   │   ├── authRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   └── v1/
│   │   │       ├── donationRoutes.js
│   │   │       ├── eventRoutes.js
│   │   │       ├── memberRoutes.js
│   │   │       ├── serviceRoutes.js
│   │   │       └── publicRoutes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js      # JWT verification from HttpOnly cookies
│   │   │   ├── roleMiddleware.js      # Admin / staff authorization checks
│   │   │   ├── errorMiddleware.js     # Centralized error formatter
│   │   │   ├── rateLimiter.js         # Brute-force and abuse prevention
│   │   │   ├── validateRequest.js     # Schema validation wrapper
│   │   │   └── notFound.js            # 404 handler
│   │   │
│   │   ├── validators/
│   │   │   ├── authვალidators.js      # Login/register schema rules
│   │   │   ├── donationValidators.js
│   │   │   ├── eventValidators.js
│   │   │   ├── memberValidators.js
│   │   │   └── serviceValidators.js
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.js                 # Token creation/verification helpers
│   │   │   ├── logger.js              # Structured logs for app and errors
│   │   │   ├── asyncHandler.js        # Avoid repetitive try/catch
│   │   │   ├── pagination.js
│   │   │   ├── sanitize.js            # Input cleanup helpers
│   │   │   └── dateHelpers.js
│   │   │
│   │   ├── jobs/
│   │   │   ├── emailQueue.js          # Background email processing
│   │   │   ├── donationReceiptJob.js  # Reliable receipt sending
│   │   │   └── reminderJob.js         # Event/service reminders
│   │   │
│   │   ├── audit/
│   │   │   └── auditService.js        # Write admin activity and sensitive changes
│   │   │
│   │   ├── tests/
│   │   │   ├── auth.test.js
│   │   │   ├── donation.test.js
│   │   │   ├── event.test.js
│   │   │   └── member.test.js
│   │   │
│   │   └── server.js                  # App bootstrap and production startup
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── locales/
│   │       ├── en/common.json         # English translations
│   │       └── am/common.json         # Amharic translations
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosClient.js          # Credentials-enabled API client
│   │   │   └── endpoints.js           # Central API path definitions
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── styles/global.css
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── LanguageSwitcher.jsx
│   │   │   │   └── SEO.jsx
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   └── EmptyState.jsx
│   │   │   └── forms/
│   │   │       ├── DonationForm.jsx
│   │   │       ├── LoginForm.jsx
│   │   │       └── ContactForm.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useDonations.js
│   │   │   ├── useEvents.js
│   │   │   └── useMembers.js
│   │   │
│   │   ├── layouts/
│   │   │   ├── MainLayout.jsx
│   │   │   ├── AdminLayout.jsx
│   │   │   └── AuthLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── public/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── Events.jsx
│   │   │   │   ├── Donate.jsx
│   │   │   │   └── Contact.jsx
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   └── dashboard/
│   │   │       ├── DashboardOverview.jsx
│   │   │       ├── ManageMembers.jsx
│   │   │       ├── ManageEvents.jsx
│   │   │       ├── ManageDonations.jsx
│   │   │       └── FinancialReports.jsx
│   │   │
│   │   ├── routes/
│   │   │   ├── AppRoutes.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── store/
│   │   │   └── uiStore.js             # Optional global UI state
│   │   │
│   │   ├── utils/
│   │   │   ├── formatters.js
│   │   │   ├── validators.js
│   │   │   └── constants.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
│
├── shared/
│   ├── schemas/                       # Shared validation rules for frontend/backend
│   │   ├── auth.schema.js
│   │   ├── donation.schema.js
│   │   ├── event.schema.js
│   │   └── member.schema.js
│   └── types/
│       └── common.types.js
│
├── infra/
│   ├── nginx/
│   │   └── default.conf               # Reverse proxy + HTTPS-ready config
│   ├── docker/
│   │   └── docker-compose.yml          # Local production-like environment
│   └── scripts/
│       ├── deploy.sh
│       └── backup-db.sh
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── security.md
│   └── deployment.md
│
├── .github/
│   └── workflows/
│       └── ci.yml                     # Lint, test, build pipeline
│
├── README.md
└── .gitignore

# 1. Navigate into the backend directory
cd backend

# 2. Create a package.json file for the backend
npm init -y

# 3. Install the security and utility packages we used
npm install express mongoose dotenv zod helmet cors express-rate-limit express-mongo-sanitize hpp cookie-parser winston

# 4. Create  inner folder structure
mkdir -p src/config src/core src/controllers src/services src/models src/routes/v1 src/middleware src/validators src/utils src/jobs src/audit src/tests

# 1. From the root 'church-project/', navigate into the frontend directory
cd frontend

# 2. Initialize a clean React project using Vite
npm create vite@latest . -- --template react

# 3. Install core frontend libraries (Axios, React Router, React Query)
npm install axios react-router-dom @tanstack/react-query

# 4. Install Tailwind CSS for styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Create structured frontend folders
mkdir -p src/api src/assets/styles src/components/common src/components/ui src/components/forms src/context src/hooks src/layouts src/pages/public src/pages/auth src/pages/dashboard src/routes src/store src/utils


React Login Form
      ↓
POST /api/auth/login
      ↓
Express Auth Controller
      ↓
Check MongoDB user
      ↓
Create JWT
      ↓
Send HttpOnly Cookie
      ↓
React detects user via /me
      ↓
Dashboard unlocks
