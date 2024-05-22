const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres',
    user: 'ruud',
    password: 'password',
    database: 'store',
    port: 5432
});

pool.connect(error => {
    if (error) {
        console.error('Database connection failed:', error);
        return;
    }
    console.log("Successfully connected to the database.");
});

module.exports = pool;