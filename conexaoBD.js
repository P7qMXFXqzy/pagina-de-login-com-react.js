const express = require('express');
const mysql = require('mysql');


const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abcd',
  database: 'projetoreact',
});

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Example endpoint to retrieve data from MySQL
app.get('/7xRgYpK2tL', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
