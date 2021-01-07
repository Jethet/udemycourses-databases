drop table if exists teachers, students, staff, classes, languages, modules, attendance;

CREATE TABLE languages
(
  id SERIAL,
  name TEXT CHECK (name IN ('English', 'Spanish'))
)

CREATE TABLE students
(
  id SERIAL,
  name VARCHAR(20),
  email VARCHAR(20),
  address VARCHAR(60),
  phone_number VARCHAR(20),
  status VARCHAR(15),
  language TEXT REFERENCES languages  (name)
);

CREATE TABLE teachers
(
  id SERIAL,
  name VARCHAR(20),
  email VARCHAR(20),
  country VARCHAR(20),
  language TEXT REFERENCES languages (name)
);

CREATE TABLE staff
(
  id SERIAL,
  name VARCHAR(20),
  email VARCHAR(20),
  address VARCHAR(60),
  phone_number VARCHAR(20),
  bank_account VARCHAR(25),
  position TEXT,
  language TEXT REFERENCES languages (name)
);

CREATE TABLE modules
(
  id SERIAL,
  name VARCHAR(20),
  language TEXT REFERENCES languages (name)
)

CREATE TABLE classes
(
  id SERIAL,
  datetime DATETIME,
  topic VARCHAR(20),
  teacher TEXT REFERENCES teachers (id)
)

CREATE TABLE attendance
(
  id SERIAL,
  student_id TEXT REFERENCES students (id),
  class_id TEXT REFERENCES classes (id)
)