const express = require("express")
require("dotenv").config();

const app = express()
app.use(express.json())

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
    host: 'localhost',
    database: 'database_project_MigraCode',
    password: process.env.PGPASSWORD,
    port: 5432
});

// STUDENTS
app.get("/students", function(req, res) {
    pool.query('SELECT * FROM students', (error, result) => {
        res.json(result.rows);
    });
});

app.post("/students", (req, res) => {
  pool.query('INSERT')
})

// TEACHERS
app.get("/teachers", function(req, res) {
  pool.query('SELECT * FROM teachers', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/teachers", (req, res) => {
pool.query('INSERT')
})

// STAFF
app.get("/staff", function(req, res) {
  pool.query('SELECT * FROM staff', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/staff", (req, res) => {
pool.query('INSERT')
})

// CLASSES
app.get("/classes", function(req, res) {
  pool.query('SELECT * FROM classes', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/classes", (req, res) => {
pool.query('INSERT')
})

// MODULES
app.get("/modules", function(req, res) {
  pool.query('SELECT * FROM modules', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/modules", (req, res) => {
pool.query('INSERT')
})

// LANGUAGES
app.get("/languages", function(req, res) {
  pool.query('SELECT * FROM languages', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/languages", (req, res) => {
pool.query('INSERT')
})

// ATTENDANCE
app.get("/attendance", function(req, res) {
  pool.query('SELECT * FROM attendance', (error, result) => {
      res.json(result.rows);
  });
});

app.post("/attendance", (req, res) => {
pool.query('INSERT')
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})