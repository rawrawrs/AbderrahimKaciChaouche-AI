# Development Guide

## Running the Application

### 1. Frontend (Vite React App)

From the root directory:

```bash
npm run dev
```

The frontend will be available at http://localhost:5173

### 2. Backend (Email Service)

From the `backend` directory:

```bash
cd backend
npm run dev
```

The backend will be available at http://localhost:3001

### 3. Running Both Services

To run both services simultaneously, you can use two terminal windows or a process manager like `concurrently`:

```bash
# Install concurrently (if not already installed)
npm install -g concurrently

# Run both services
concurrently "npm run dev" "cd backend && npm run dev"
```

## Environment Setup

### Frontend
The frontend is configured to send contact form submissions to the backend at `http://localhost:3001/api/contact`.

### Backend
Before running the backend, you need to configure the `.env` file:

1. Rename `backend/.env.example` to `backend/.env`
2. Update the email credentials:
   ```
   EMAIL_USER=algeriaaisolutions@gmail.com
   EMAIL_PASS=your_app_password_here
   ```

**Note:** For Gmail, you'll need to use an App Password instead of your regular password:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password specifically for this application
3. Use the App Password in place of your regular password

## Testing the Email Service

You can test the email service using curl or a tool like Postman:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "role": "Developer",
    "phone": "+1234567890",
    "company": "Test Company",
    "details": "This is a test message.",
    "language": "en"
  }'
```

## Deployment

For production deployment:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Run the backend in production mode:
   ```bash
   cd backend
   npm start
   ```

3. Serve the frontend build files through a web server or CDN
4. Ensure the backend is accessible at the expected API endpoint