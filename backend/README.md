# AAIS Email Service

This is a simple backend service to handle contact form submissions and send emails.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Rename `.env.example` to `.env` and update the values:

```env
# Email Configuration
EMAIL_USER=algeriaaisolutions@gmail.com
EMAIL_PASS=your_app_password_here

# Server Configuration
PORT=3001
```

**Note:** For Gmail, you'll need to use an App Password instead of your regular password:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password specifically for this application
3. Use the App Password in place of your regular password

### 3. Run the Service

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoint

The service exposes one endpoint for contact form submissions:

```
POST /api/contact
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "CTO",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "details": "I'm interested in your AI solutions...",
  "language": "en" // or "fr"
}
```

### Response

```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

## Integration with Frontend

The frontend contact forms are configured to send POST requests to `http://localhost:3001/api/contact`. Make sure the backend service is running on port 3001.

## Troubleshooting

### Emails Not Sending

1. Check that your `.env` file contains the correct EMAIL_USER and EMAIL_PASS
2. Verify that you're using an App Password (not your regular Gmail password)
3. Ensure 2-Factor Authentication is enabled on your Gmail account
4. Check that the Gmail account allows access from less secure apps (if using regular password)

### CORS Issues

The service is configured to accept requests from any origin. If you encounter CORS issues, update the `cors()` configuration in `server.js`.

### Port Conflicts

If port 3001 is already in use, change the PORT value in your `.env` file.