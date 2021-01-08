drop table if exists teachers, students, staff, classes, languages, modules, attendance;

CREATE TABLE languages
(
  id    SERIAL PRIMARY KEY,
  name  TEXT
)

CREATE TABLE students
(
  id           SERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  email        VARCHAR(20) NOT NULL,
  address      TEXT,
  phone_number TEXT NOT NULL,
  batch        VARCHAR(9) CHECK (batch IN ('JULY2020-1', 'JULY2020-2', 'MAR2020-1', 'MAR2020-1', 'OCT2019')),
  status       TEXT CHECK (status IN ('Studying', 'Graduated', 'Dropped Out')),
  language     SERIAL REFERENCES languages (id)
);

CREATE TABLE teachers
(
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  email      VARCHAR(20) NOT NULL,
  country    TEXT,
  language   SERIAL REFERENCES languages (id)
);

CREATE TABLE staff
(
  id           SERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  email        VARCHAR(20) NOT NULL,
  address      TEXT,
  bank_account VARCHAR(20) NOT NULL,
  phone_number TEXT NOT NULL,
  position     TEXT,
  language     SERIAL REFERENCES languages (id)
);

CREATE TABLE modules
(
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(20) NOT NULL,
  language  SERIAL REFERENCES languages (id)
)

CREATE TABLE classes
(
  id        SERIAL PRIMARY KEY,
  datetime  DATETIME NOT NULL,
  topic     SERIAL REFERENCES modules (id),
  teacher   SERIAL REFERENCES teachers (id)
)

CREATE TABLE attendance
(
  id          SERIAL PRIMARY KEY,
  student_id  SERIAL REFERENCES students (id),
  class_id    SERIAL REFERENCES classes (id)
)