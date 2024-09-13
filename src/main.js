const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'node_app'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

const CREATE_TABLE = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
`;

db.query(CREATE_TABLE);

const CREATE_USER = `
    INSERT INTO users (name) VALUES ('Willerson');
`;

db.query(CREATE_USER);

app.get('/', (req, res) => {
    const GET_USERS = `
        SELECT * FROM users;
    `;



    db.query(GET_USERS, (error, users) => {
      let response = `
          <h1>Full Cycle Rocks!</h1>
          <ul>    
      `;

      if(error) {
        response += "<li>Error to fetch data</li>";
      }
      
      Array.from(users).forEach(value => {
        response += "<li>"+ value.name +"</li>";
      });

      response += "</ul>";
      return res.send(response);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
