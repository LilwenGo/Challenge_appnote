const Database = require('better-sqlite3');
const db = new Database('database/notes.db');

function init() {
    db.exec("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,content TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);");
};

module.exports = {init};