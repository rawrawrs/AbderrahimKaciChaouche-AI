const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      role,
      phone,
      company,
      details,
      language = 'en'
    } = req.body;

    // Create transporter
    const transporter = createTransporter();

    // Email content based on language
    const subject = language === 'fr' 
      ? `Nouveau message de contact de ${name}` 
      : `New Contact Message from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #264653;">${subject}</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2a9d8f; margin-top: 0;">${language === 'fr' ? 'Détails du contact' : 'Contact Details'}</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">${language === 'fr' ? 'Nom complet' : 'Full Name'}:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">${language === 'fr' ? 'Email' : 'Email'}:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2a9d8f;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">${language === 'fr' ? 'Rôle' : 'Role'}:</td>
              <td style="padding: 8px 0;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">${language === 'fr' ? 'Téléphone' : 'Phone'}:</td>
              <td style="padding: 8px 0;">${phone || (language === 'fr' ? 'Non fourni' : 'Not provided')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">${language === 'fr' ? 'Entreprise/Organisation' : 'Company/Organization'}:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #2a9d8f;">${language === 'fr' ? 'Détails de la demande/projet' : 'Request/Project Details'}</h3>
          <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px;">
            <p style="white-space: pre-wrap;">${details}</p>
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
          <p>${language === 'fr' ? 'Ce message a été envoyé via le formulaire de contact du site web AAIS.' : 'This message was sent via the AAIS website contact form.'}</p>
        </div>
      </div>
    `;

    const textContent = `
${language === 'fr' ? 'NOUVEAU MESSAGE DE CONTACT' : 'NEW CONTACT MESSAGE'}
====================================

${language === 'fr' ? 'Détails du contact' : 'Contact Details'}:
----------------------------
${language === 'fr' ? 'Nom complet' : 'Full Name'}: ${name}
${language === 'fr' ? 'Email' : 'Email'}: ${email}
${language === 'fr' ? 'Rôle' : 'Role'}: ${role}
${language === 'fr' ? 'Téléphone' : 'Phone'}: ${phone || (language === 'fr' ? 'Non fourni' : 'Not provided')}
${language === 'fr' ? 'Entreprise/Organisation' : 'Company/Organization'}: ${company}

${language === 'fr' ? 'Détails de la demande/projet' : 'Request/Project Details'}:
----------------------------
${details}

${language === 'fr' ? 'Ce message a été envoyé via le formulaire de contact du site web AAIS.' : 'This message was sent via the AAIS website contact form.'}
    `;

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: textContent,
      html: htmlContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({
      success: true,
      message: language === 'fr' 
        ? 'Merci pour votre message ! Nous vous répondrons bientôt.' 
        : 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: language === 'fr' 
        ? 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.' 
        : 'An error occurred while sending your message. Please try again.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Email service is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});

module.exports = app;