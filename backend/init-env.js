const fs = require('fs');
const path = require('path');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('Creating .env file from .env.example...');
  
  // Copy .env.example to .env if it exists
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('.env file created successfully!');
    console.log('');
    console.log('Please update the .env file with your actual credentials:');
    console.log('1. Open backend/.env in a text editor');
    console.log('2. Replace "your_app_password_here" with your Gmail App Password');
    console.log('3. Save the file');
    console.log('');
    console.log('For Gmail App Password:');
    console.log('1. Enable 2-Factor Authentication on your Gmail account');
    console.log('2. Generate an App Password specifically for this application');
    console.log('3. Use the App Password in place of your regular password');
  } else {
    // Create a basic .env file
    const envContent = `# Email Configuration
EMAIL_USER=algeriaaisolutions@gmail.com
EMAIL_PASS=your_app_password_here

# Server Configuration
PORT=3001
`;
    fs.writeFileSync(envPath, envContent);
    console.log('.env file created successfully!');
    console.log('');
    console.log('Please update the .env file with your actual credentials.');
  }
} else {
  console.log('.env file already exists. Skipping creation.');
}

console.log('');
console.log('Initialization complete!');
console.log('Run "npm run dev" to start the email service.');