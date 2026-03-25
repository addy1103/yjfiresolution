import Database from 'better-sqlite3';
const db = new Database('messages.db');
try {
    db.exec("ALTER TABLE messages ADD COLUMN status TEXT DEFAULT 'New'");
} catch (e) {
    // Column likely already exists
}
db.prepare("UPDATE messages SET status = 'New' WHERE status IS NULL OR status = 'undefined'").run();
console.log('Database updated successfully!');
process.exit(0);
