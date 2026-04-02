import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Database from 'better-sqlite3';
import session from 'express-session';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// --- 1. Middleware & Session ---
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'yjfire-dev-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true in HTTPS production
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
}));

// Auth Guard Middleware
const requireAuth = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    } else {
        res.status(401).json({ error: 'Authentication required' });
    }
};

// --- 2. Database Initialization ---
const db = new Database('messages.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    location TEXT,
    service_type TEXT,
    timeline TEXT,
    status TEXT DEFAULT 'New',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// --- 2. Middleware ---
app.use(cors());
app.use(express.json());

// Serve static files from Vite's build folder
app.use(express.static(path.join(__dirname, 'dist')));

// --- 3. Public API: Contact Form Submission ---
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message, location, service_type, timeline } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    try {
        // Save to DB
        const stmt = db.prepare('INSERT INTO messages (name, email, phone, message, location, service_type, timeline) VALUES (?, ?, ?, ?, ?, ?, ?)');
        stmt.run(name, email, phone, message, location || null, service_type || 'Unspecified', timeline || 'Planning');

        // Email Notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST || 'smtp.gmail.com',
                port: process.env.EMAIL_PORT || 587,
                auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
            });

            await transporter.sendMail({
                from: `"YJ Firesolutions" <${process.env.EMAIL_USER}>`,
                to: process.env.CONTACT_RECEIVER_EMAIL || 'info@yjfiresolutions.com',
                subject: `New Inquiry from ${name}`,
                html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Message:</strong> ${message}</p>`,
            });
        }

        res.status(200).json({ success: true, message: 'Message sent! We\'ll be in touch.' });
    } catch (err) {
        console.error('❌ Contact error:', err);
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

// --- 4. Admin Authentication ---

// Login API
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    const adminUser = process.env.ADMIN_USER || 'admin';
    const adminPass = process.env.ADMIN_PASS || 'yjfire2026';

    if (username === adminUser && password === adminPass) {
        req.session.isAdmin = true;
        res.json({ success: true, message: 'Logged in successfully' });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Logout API
app.get('/api/admin/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Check Session
app.get('/api/admin/check-session', (req, res) => {
    res.json({ authenticated: !!req.session.isAdmin });
});

// --- 5. Private API: Admin Management (PROTECTED) ---

// GET: All Inquiries
app.get('/api/admin/messages', requireAuth, (req, res) => {
    try {
        const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

// PATCH: Update Status
app.patch('/api/admin/messages/:id', requireAuth, (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        db.prepare('UPDATE messages SET status = ? WHERE id = ?').run(status, id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Update failed' });
    }
});

// DELETE: Remove Lead
app.delete('/api/admin/messages/:id', requireAuth, (req, res) => {
    const { id } = req.params;
    try {
        db.prepare('DELETE FROM messages WHERE id = ?').run(id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Delete failed' });
    }
});

// --- 6. Routing (PROTECTED /admin) ---

// Login Page (PUBLIC)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'login.html'));
});

// Admin Dashboard (PROTECTED)
app.get('/admin', (req, res, next) => {
    if (req.session.isAdmin) {
        res.sendFile(path.join(__dirname, 'dist', 'admin.html'));
    } else {
        res.redirect('/login');
    }
});

// Fallback: If no other route matches, serve main site
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Unified YJ Backend Live at http://localhost:${PORT}`);
    console.log(`🔒 Admin Dashboard available at http://localhost:${PORT}/admin`);
});
