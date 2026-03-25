import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import path from 'path';

const app = express();
const PORT = 3001; // INDIVIDUAL PORT FOR ADMIN
const db = new Database('messages.db');

app.use(cors());
app.use(express.json());

// Serve individual admin files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect root to admin.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'admin.html'));
});

// --- ADMIN API ---

// GET: All Inquiries
app.get('/api/admin/messages', (req, res) => {
    try {
        const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// PATCH: Update Status
app.patch('/api/admin/messages/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        db.prepare('UPDATE messages SET status = ? WHERE id = ?').run(status, id);
        res.json({ success: true, message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ error: 'Update failed' });
    }
});

// DELETE: Remove Inquiry
app.delete('/api/admin/messages/:id', (req, res) => {
    const { id } = req.params;
    try {
        db.prepare('DELETE FROM messages WHERE id = ?').run(id);
        res.json({ success: true, message: 'Message deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Delete failed' });
    }
});

app.listen(PORT, () => {
    console.log(`🔒 Admin Portal running individually at http://localhost:${PORT}`);
});
