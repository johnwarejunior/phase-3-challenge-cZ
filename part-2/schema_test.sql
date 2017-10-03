DROP DATABASE IF EXISTS hotel_db_test;
CREATE DATABASE hotel_db_test;

\c hotel_db_test

DROP TABLE IF EXISTS guests;
CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(75) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  room_num VARCHAR(20),
  capacity INTEGER,
  available BOOLEAN DEFAULT true
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  guest_id INTEGER REFERENCES guests(id),
  check_in DATE,
  check_out DATE
);
