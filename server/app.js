require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_EMPLOYEES
});


// create express connection
const app = express();

// Selects Employee by name
app.get('/employee/:name', (req, res, next) => {
    let name = req.params.name
    let sql = `SELECT * FROM employees WHERE first_name='${name}'`
    db.query(sql, (err, results, fields) => {
        if (err) {
            throw err;
        }
        res.send(results)
    })
})

app.listen('3000', () => {
    console.log('Server started on port 3000')
});