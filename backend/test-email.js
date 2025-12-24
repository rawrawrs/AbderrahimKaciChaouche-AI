const fetch = require('node-fetch');

async function testEmailService() {
  try {
    console.log('Testing email service...');
    
    const testData = {
      name: "Test User",
      email: "test@example.com",
      role: "Developer",
      phone: "+1234567890",
      company: "Test Company",
      details: "This is a test message from the AAIS website contact form.",
      language: "en"
    };
    
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    console.log('Response Status:', response.status);
    console.log('Response Data:', result);
    
    if (response.ok && result.success) {
      console.log('✅ Email service test successful!');
      console.log('Message:', result.message);
    } else {
      console.log('❌ Email service test failed!');
      console.log('Error:', result.message);
    }
  } catch (error) {
    console.log('❌ Email service test failed!');
    console.log('Error:', error.message);
  }
}

// Run the test
testEmailService();