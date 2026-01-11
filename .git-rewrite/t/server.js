const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Email transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'tobsolutionsllc@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

// Twilio client for SMS
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'tobsolutionsllc@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Send SMS notification if phone number is provided for YOU
    if (process.env.TWILIO_PHONE_FROM && process.env.YOUR_PHONE) {
      await twilioClient.messages.create({
        body: `New contact form submission from ${name} (${email})`,
        from: process.env.TWILIO_PHONE_FROM,
        to: process.env.YOUR_PHONE
      });
    }

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting TOB Solutions LLC',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>I received your message and will get back to you shortly.</p>
        <p>Best regards,<br>Trenton O'Bannon<br>TOB Solutions LLC</p>
      `
    });

    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
