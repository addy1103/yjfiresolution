import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Database from 'better-sqlite3';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Vite build folder (dist)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Database Setup
const db = new Database('messages.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    status TEXT DEFAULT 'New',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date() });
});

// Contact Form Endpoint (PUBLIC)
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    console.log('📬 New form submission:', name);

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    try {
        // 1. Save to Database
        const stmt = db.prepare('INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)');
        stmt.run(name, email, phone, message);

        // 2. Setup Email
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
            port: process.env.EMAIL_PORT || 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"YJ Firesolutions" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || 'info@yjfiresolutions.com',
            subject: `New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            html: `
        <h3>New Website Inquiry</h3>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
        };

        // 3. Send Email
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log('📧 Email sent successfully');
        } else {
            console.log('⚠️ Email skipped (No credentials). Inquiry saved in database instead.');
        }

        res.status(200).json({
            success: true,
            message: 'Message saved! We will be in touch soon.'
        });
    } catch (error) {
        console.error('❌ Error handling submission:', error);
        res.status(500).json({ error: 'Internal server error. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
