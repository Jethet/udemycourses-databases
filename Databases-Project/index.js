const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER,
  host: "localhost",
  database: "database_project_MigraCode",
  password: process.env.PGPASSWORD,
  port: 5432,
});

// LANGUAGES
app.get("/languages", function (req, res) {
  pool.query("SELECT * FROM languages", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/languages", (req, res) => {
  const data = {
    name: req.body.name,
  };

  pool
    .query("INSERT INTO languages (name) VALUES ($1);", [data.name])
    .then(() => res.send(`Language ${data.name} has been added.`))
    .catch((e) => console.error(e));
});

app.delete("/languages/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM languages WHERE id = $1;", [id])
    .then(() => res.send(`Language with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// STUDENTS
app.get("/students", function (req, res) {
  pool.query("SELECT * FROM students", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/students", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone_number: req.body.phone_number,
    batch: req.body.batch,
    status: req.body.status,
    language: req.body.language,
  };

  pool
    .query(
      "INSERT INTO students (name, email, address, phone_number, batch, status, language) VALUES ($1, $2, $3, $4, $5, $6, $7);",
      [
        data.name,
        data.email,
        data.address,
        data.phone_number,
        data.batch,
        data.status,
        data.language,
      ]
    )
    .then(() => res.send(`Student ${data.name} has been created.`))
    .catch((e) => console.error(e));
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM students WHERE id = $1;", [id])
    .then(() => res.send(`Student with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// TEACHERS
app.get("/teachers", function (req, res) {
  pool.query("SELECT * FROM teachers", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/teachers", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
    language: req.body.language,
  };

  pool
    .query(
      "INSERT INTO teachers (name, email, country, language) VALUES ($1, $2, $3, $4);",
      [data.name, data.email, data.country, data.language]
    )
    .then(() => res.send(`Teacher ${data.name} has been created.`))
    .catch((e) => console.error(e));
});

app.delete("/teachers/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM teachers WHERE id = $1;", [id])
    .then(() => res.send(`Teacher with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// STAFF
app.get("/staff", function (req, res) {
  pool.query("SELECT * FROM staff", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/staff", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    bank_account: req.body.bank_account,
    phone_number: req.body.phone_number,
    position: req.body.position,
    language: req.body.language,
  };

  pool
    .query(
      "INSERT INTO teachers (name, email, address, bank_account, phone_number, position, language) VALUES ($1, $2, $3, $4, $5, $6, $7);",
      [
        data.name,
        data.email,
        data.address,
        data.bank_account,
        data.phone_number,
        data.position,
        data.language,
      ]
    )
    .then(() => res.send(`Teacher ${data.name} has been created.`))
    .catch((e) => console.error(e));
});

app.delete("/staff/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM staff WHERE id = $1;", [id])
    .then(() => res.send(`Staff member with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// MODULES
app.get("/modules", function (req, res) {
  pool.query("SELECT * FROM modules", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/modules", (req, res) => {
  const data = {
    name: req.body.name,
    language: req.body.language,
  };

  pool
    .query("INSERT INTO modules (name, language) VALUES ($1, $2);", [
      data.name,
      data.language,
    ])
    .then(() => res.send(`Module ${data.name} has been created.`))
    .catch((e) => console.error(e));
});

app.delete("/modules/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM modules WHERE id = $1;", [id])
    .then(() => res.send(`Module with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// CLASSES
app.get("/classes", function (req, res) {
  pool.query("SELECT * FROM classes", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/classes", (req, res) => {
  const data = {
    datetime: req.body.datetime,
    topic: req.body.topic,
    teacher: req.body.teacher,
  };

  pool
    .query("INSERT INTO classes (datetime, topic, teacher) VALUES ($1, $2, $3);", [
      data.datetime,
      data.topic,
      data.teacher,
    ])
    .then(() => res.send(`Class ${data.topic} has been created.`))
    .catch((e) => console.error(e));
});

app.delete("/classes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM classes WHERE id = $1;", [id])
    .then(() => res.send(`Class with id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

// ATTENDANCE
app.get("/attendance", function (req, res) {
  pool.query("SELECT * FROM attendance", (error, result) => {
    res.json(result.rows);
  });
});

app.post("/attendance", (req, res) => {
  const student_id = req.body.student_id;
  const class_id = req.body.class_id;

  pool
    .query("INSERT INTO attendance (student_id, class_id) VALUES ($1, $2);", [
      student_id,
      class_id,
    ])
    .then(() => res.send(`Attendance data for student ${student_id} successfully added.`))
    .catch((e) => console.error(e));
});

app.delete("/attendance/:id", (req, res) => {
  const id = parseInt(req.params.id);

  pool
    .query("DELETE FROM attendance WHERE id = $1;", [id])
    .then(() => res.send(`Attendance data for id ${id} successfully deleted.`))
    .catch((e) => console.error(e));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
