const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'ruud',
    password: 'password',
    database: 'store',
    port: 3307
});

connection.connect(error => {
    if (error) {
        console.error('Database connection failed:', error);
        return;
    }
    console.log("Successfully connected to the database.");
});

const getData = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
};

module.exports = { getData };
