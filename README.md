# AAIS Landing Page

This is the official landing page for Algeria AI Solutions (AAIS), featuring a bilingual (English/French) website with contact form functionality.

## Features

- **Bilingual Support**: English (/en) and French (/fr) versions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Fully functional contact form with email notifications
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and structured content

## Project Structure

```
.
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── translations/      # Language translation files
│   ├── assets/             # Images, videos, and other static assets
│   └── App.tsx             # Main application component
├── backend/                # Email service backend
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
├── public/                 # Static assets
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install frontend dependencies:
   ```bash
   npm install
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Environment Setup

1. Configure backend environment variables:
   ```bash
   cd backend
   cp .env.example .env
   ```
   
2. Edit `backend/.env` and add your Gmail credentials:
   ```
   EMAIL_USER=algeriaaisolutions@gmail.com
   EMAIL_PASS=your_app_password_here
   PORT=3001
   ```

**Note**: For Gmail, you'll need to use an App Password:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password specifically for this application
3. Use the App Password in place of your regular password

### Development

#### Running the Application

You can run both frontend and backend services using the provided scripts:

**Windows (Command Prompt):**
```bash
start-dev.bat
```

**Windows (PowerShell):**
```bash
.\start-dev.ps1
```

**Manual Start:**

1. Start frontend (in root directory):
   ```bash
   npm run dev
   ```

2. Start backend (in backend directory):
   ```bash
   cd backend
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Production Build

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the backend in production mode:
   ```bash
   cd backend
   npm start
   ```

## API Endpoints

The backend exposes the following endpoint:

### Contact Form Submission
```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "CTO",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "details": "I'm interested in your AI solutions...",
  "language": "en"
}
```

## Routing

- `/` → Redirects to `/fr` (default French version)
- `/en` → English homepage
- `/en/contact` → English contact page
- `/fr` → French homepage
- `/fr/contact` → French contact page

## Customization

### Adding New Languages

1. Create translation files in `src/translations/`
2. Update the language detection logic in components
3. Add new routes in `src/App.tsx`

### Modifying Content

All content is managed through:
- Component files in `src/components/`
- Translation files in `src/translations/`
- Static assets in `src/assets/`

## Troubleshooting

### Emails Not Sending

1. Check that your `.env` file contains the correct EMAIL_USER and EMAIL_PASS
2. Verify that you're using an App Password (not your regular Gmail password)
3. Ensure 2-Factor Authentication is enabled on your Gmail account

### CORS Issues

The service is configured to accept requests from any origin. If you encounter CORS issues, update the `cors()` configuration in `backend/server.js`.

### Port Conflicts

If port 3001 is already in use, change the PORT value in your `backend/.env` file.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/your-repo-name)

To deploy this site to Netlify, you can:

1. Click the "Deploy to Netlify" button above
2. Or, follow these steps:
   - Push your code to a GitHub repository
   - Log in to your Netlify account
   - Click "New site from Git"
   - Select your repository
   - Use the following build settings:
     - **Build Command:** `npm run build`
     - **Publish Directory:** `dist`
     - **Environment Variables:** Add any needed environment variables

### Build for Production

To build the project for production:

1. Run the build command:
   ```bash
   npm run build
   ```
   
2. The built files will be in the `dist` directory

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or modification is strictly prohibited.

© 2025 Algeria AI Solutions (AAIS). All rights reserved.