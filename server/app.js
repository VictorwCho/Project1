const express = require('express');
const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'employees'
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