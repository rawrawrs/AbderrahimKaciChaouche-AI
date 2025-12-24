# AAIS Website Architecture

```
                    ┌─────────────────────────────┐
                    │        User Browser         │
                    │   (Visits website URLs)     │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │    Vite React Frontend      │
                    │    (Serves static files)    │
                    │   http://localhost:5173     │
                    └─────────────┬───────────────┘
                                  │
                       ┌──────────▼──────────┐
                       │                     │
                       ▼                     ▼
            ┌─────────────────┐    ┌──────────────────┐
            │   /en (English) │    │   /fr (French)   │
            │   Homepage       │    │   Homepage       │
            └─────────────────┘    └──────────────────┘
                       │                     │
                       └──────────┬──────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │    Contact Form Submit      │
                    │  (AJAX POST to backend)     │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   Node.js Express Backend   │
                    │    Email Service API        │
                    │   http://localhost:3001     │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │      Gmail SMTP Server      │
                    │  (Sends emails to self)     │
                    │  algeriaaisolutions@gmail.com│
                    └─────────────────────────────┘
```

## Component Details

### 1. Frontend (Vite + React + TypeScript)
- **Framework**: Vite with React and TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router for navigation
- **Languages**: English (/en) and French (/fr)
- **Forms**: Controlled components with validation

### 2. Backend (Node.js + Express)
- **Server**: Express.js
- **Email**: Nodemailer with Gmail SMTP
- **CORS**: Enabled for all origins
- **Environment**: dotenv for configuration

### 3. Data Flow

1. User visits website (English or French version)
2. User fills out contact form
3. Frontend validates form data
4. Frontend sends POST request to backend API
5. Backend receives and processes request
6. Backend sends email via Gmail SMTP
7. Email is delivered to algeriaaisolutions@gmail.com

### 4. Security Considerations

- **Frontend**: Publicly accessible static files
- **Backend**: 
  - Environment variables for credentials
  - CORS enabled (could be restricted in production)
  - No database (stateless service)
- **Email**: 
  - Uses App Password instead of regular password
  - Sends emails only to self (no external recipients)

## Deployment Architecture

For production deployment:

```
Internet Users ───► CDN/Reverse Proxy ───► Frontend Static Files
                             │
                             ▼
                    Backend API Server (Node.js)
                             │
                             ▼
                   Gmail SMTP (Email Service)
```

### Hosting Options:

1. **Frontend**: 
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

2. **Backend**:
   - Heroku
   - AWS EC2
   - DigitalOcean Droplet
   - Self-hosted server

### Environment Variables Needed:

```
# Frontend (build time)
None required

# Backend (runtime)
EMAIL_USER=algeriaaisolutions@gmail.com
EMAIL_PASS=your_app_password_here
PORT=3001
```