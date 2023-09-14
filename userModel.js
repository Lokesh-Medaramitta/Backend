const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('newnode.db'); // Replace with your database file name

// Create the "users" table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT
  )
`);
