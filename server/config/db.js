const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_db_username',
    password: 'your_db_password',
    database: 'markdown_editor'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
