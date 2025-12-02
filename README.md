# 🏥 MedSentry AI - World-Class Medical Triage Assistant

<div align="center">

![MedSentry AI](https://img.shields.io/badge/MedSentry-AI-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green?style=for-the-badge&logo=fastapi)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-orange?style=for-the-badge)

**A world-class, production-ready medical triage assistant powered by Google Gemini AI**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

MedSentry AI is a comprehensive, world-class medical triage and analysis platform that provides evidence-based medical guidance. Built with cutting-edge technology and modern design principles, it offers an exceptional user experience while maintaining the highest standards of medical safety and compliance.

### ✨ Key Highlights

- 🎨 **World-Class UI/UX**: Modern, responsive design with smooth animations and gradients
- 🚀 **High Performance**: Optimized backend with caching and efficient API calls
- 🔒 **Enterprise Security**: JWT authentication, rate limiting, and comprehensive error handling
- 📊 **Analytics Dashboard**: Real-time insights into consultation patterns
- 📱 **Mobile-First**: PWA support with perfect mobile responsiveness
- 🌍 **Multi-Language**: Support for English, Urdu, and Hindi
- 🎯 **AI-Powered**: Advanced medical analysis using Google Gemini 2.0 Flash

---

## 🎯 Features

### Core Medical Features

- **Symptom Triage**: Comprehensive symptom analysis with emergency detection
- **Medical Document Analysis**: OCR and analysis of PDFs, images, and lab reports
- **Medication Checking**: Drug interaction and contraindication analysis
- **Lab Value Interpretation**: Clinical pathology analysis
- **Medical Q&A**: Evidence-based medical information
- **Health Tracking**: Personal health metrics tracking
- **Conversation History**: Persistent conversation tracking with context

### UI/UX Features

- **Modern Design System**: Gradient-based design with glassmorphism effects
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Loading States**: Beautiful skeleton loaders
- **Error Handling**: Comprehensive error boundaries and user-friendly messages
- **Dark Mode**: Full dark mode support
- **Accessibility**: WCAG compliant with keyboard navigation
- **Responsive Design**: Perfect on all devices

### Technical Features

- **Analytics API**: Real-time dashboard with consultation statistics
- **Enhanced Logging**: Comprehensive logging system
- **Error Tracking**: Global exception handling
- **Performance Monitoring**: Response time tracking
- **PWA Support**: Installable web app
- **Type Safety**: Full TypeScript coverage

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ 
- **Python** 3.11+
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/med-sentry-ai.git
cd med-sentry-ai
```

#### 2. Backend Setup

```bash
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
GOOGLE_API_KEY=your_gemini_api_key_here
SECRET_KEY=your_super_secret_key_here
DATABASE_URL=sqlite:///./sql_app.db
EOF

# Run the server
uvicorn main:app --reload --port 8000
```

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

#### 4. Access the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📁 Project Structure

```
med-sentry-ai/
├── frontend/
│   ├── app/
│   │   ├── page.tsx              # Main chat interface
│   │   ├── dashboard/            # History dashboard
│   │   ├── analytics/            # Analytics dashboard
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── globals.css           # Enhanced design system
│   ├── components/
│   │   ├── chat-interface.tsx    # Main chat component
│   │   ├── triage-card.tsx       # Enhanced triage display
│   │   ├── sidebar.tsx           # Navigation sidebar
│   │   ├── analytics-dashboard.tsx # Analytics component
│   │   ├── health-tracker.tsx    # Health metrics tracker
│   │   ├── loading-skeleton.tsx  # Loading states
│   │   ├── error-boundary.tsx    # Error handling
│   │   └── ui/                   # UI components
│   └── public/
│       └── manifest.json         # PWA manifest
├── backend/
│   ├── main.py                   # FastAPI app with enhanced features
│   ├── models.py                 # Database models
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # Environment variables
└── README.md                     # This file
```

---

## 🎨 Design System

### Color Palette

- **Primary**: Sky Blue (#0ea5e9) - Medical trust and professionalism
- **Gradients**: Multi-color gradients for modern aesthetics
- **Triage Colors**: 
  - 🟢 Low: Green (#22c55e)
  - 🟡 Medium: Yellow (#eab308)
  - 🔴 High: Red (#ef4444)

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive typography scale
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Components

All components feature:
- Smooth animations and transitions
- Hover effects and micro-interactions
- Responsive design
- Dark mode support
- Accessibility features

---

## 🔌 API Endpoints

### Medical Endpoints

- `POST /triage` - Analyze symptoms
- `POST /upload/analyze` - Analyze medical documents
- `POST /medication/check` - Check medication interactions
- `POST /lab/interpret` - Interpret lab values
- `POST /medical/question` - Answer medical questions

### Data Endpoints

- `GET /history` - Get conversation history
- `GET /history/{id}` - Get specific conversation
- `GET /analytics` - Get analytics data

### Authentication

- `POST /register` - Register new user
- `POST /token` - Login and get JWT token
- `GET /users/me` - Get current user info

---

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 16.0.5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5

### Backend

- **Framework**: FastAPI
- **Database**: SQLite (dev) / PostgreSQL (prod ready)
- **ORM**: SQLAlchemy
- **Authentication**: JWT (python-jose)
- **Security**: bcrypt, slowapi (rate limiting)
- **AI**: Google Gemini 2.0 Flash

### DevOps

- **Logging**: Python logging module
- **Error Tracking**: Global exception handlers
- **Performance**: Response time monitoring

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Bcrypt password hashing
- ✅ Rate limiting (20 requests/minute)
- ✅ CORS configuration
- ✅ Input validation
- ✅ SQL injection protection (ORM)
- ✅ Error message sanitization
- ✅ Environment variable security

---

## 📊 Analytics & Monitoring

The application includes comprehensive analytics:

- Total consultations count
- Triage level distribution
- Recent activity tracking
- Response time monitoring
- Error logging

Access analytics at `/analytics` route.

---

## 🎯 Best Practices

### Code Quality

- TypeScript for type safety
- Pydantic models for validation
- Comprehensive error handling
- Logging for debugging
- Code organization and modularity

### Medical Safety

- ⚠️ **Educational purposes only** disclaimer
- Conservative triage logic
- Emergency detection
- Evidence-based responses
- No definitive diagnosis
- Clear when to seek professional care

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Docker)

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Environment Variables

Ensure these are set in production:

```env
GOOGLE_API_KEY=your_production_key
SECRET_KEY=strong_random_secret_key
DATABASE_URL=postgresql://user:pass@host/db
```

---

## 📝 Development

### Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### Code Formatting

```bash
# Frontend
cd frontend
npm run lint
npm run format

# Backend
cd backend
black .
flake8 .
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## ⚠️ Medical Disclaimer

**IMPORTANT**: MedSentry AI is for **EDUCATIONAL PURPOSES ONLY**. This application does not provide medical advice, diagnosis, or treatment. Always consult a licensed healthcare professional for medical concerns. In case of emergency, call 911 immediately.

---

## 🙏 Acknowledgments

- Google Gemini AI for medical analysis capabilities
- Next.js team for the amazing framework
- FastAPI for the high-performance backend
- All open-source contributors

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/med-sentry-ai/issues)
- **Documentation**: See `/docs` folder
- **Email**: support@medsentry.ai

---

<div align="center">

**Built with ❤️ for better healthcare**

⭐ Star this repo if you find it helpful!

</div>
