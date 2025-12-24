# Quick Start Guide

Get the AAIS website up and running in minutes!

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git (optional)

## Step 1: Clone or Download Repository

If you have Git installed:
```bash
git clone <repository-url>
cd aais-landing-ignite-71-main
```

Or download and extract the ZIP file to your preferred location.

## Step 2: Install Dependencies

Install frontend dependencies:
```bash
npm install
```

Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

## Step 3: Configure Email Service

1. Set up Gmail App Password:
   - Enable 2-Factor Authentication on your Gmail account
   - Generate an App Password specifically for this application
   - Keep this password secure

2. Configure environment variables:
   ```bash
   cd backend
   cp .env.example .env
   ```

3. Edit `backend/.env`:
   ```
   EMAIL_USER=algeriaaisolutions@gmail.com
   EMAIL_PASS=your_gmail_app_password_here
   PORT=3001
   ```

## Step 4: Start Development Servers

### Option 1: Using Provided Scripts (Windows)

Command Prompt:
```bash
start-dev.bat
```

PowerShell:
```bash
.\start-dev.ps1
```

### Option 2: Manual Start

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd backend
npm run dev
```

## Step 5: Access the Website

Open your browser and navigate to:
- http://localhost:5173

The website will automatically redirect to the French version (/fr). 
You can also access:
- English: http://localhost:5173/en
- French: http://localhost:5173/fr

## Step 6: Test Email Functionality

Fill out the contact form on either language version and submit. 
You should receive an email at algeriaaisolutions@gmail.com with the form details.

## Troubleshooting

### Common Issues:

1. **Port in use**: Change PORT in `backend/.env`
2. **Email not sending**: Verify Gmail App Password
3. **CORS errors**: Usually resolved automatically
4. **Form validation**: All fields except phone are required

### Need Help?

Check the detailed documentation:
- [Development Guide](DEVELOPMENT.md)
- [Architecture Overview](ARCHITECTURE.md)
- [Backend README](backend/README.md)

## Production Deployment

For production deployment:

1. Build frontend:
   ```bash
   npm run build
   ```

2. Start backend in production mode:
   ```bash
   cd backend
   npm start
   ```

3. Deploy static files from `dist/` folder
4. Ensure backend is accessible at the expected API endpoint

## Next Steps

- Customize content in component files
- Add more languages if needed
- Integrate with analytics services
- Set up automated deployment