const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.resolve(__dirname, '../database.sqlite');
const db = new Database(dbPath);

try {
    db.prepare(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT,
            type TEXT
        )
    `).run();
} catch (error) {
    console.error("Erro ao criar o banco ou tabela:", error);
}

module.exports = db;