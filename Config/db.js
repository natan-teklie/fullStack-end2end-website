const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    host:process.env.DB_HOST,
    password:process.env.DB_PASS
});

module.exports ={pool}