\c hotel_db

COPY guests (id, name, email) FROM '/Users/johnware/Desktop/learners-guild/phase-3-challenge-c/part-2/csvFiles/guests.csv' DELIMITER ',' CSV HEADER;

COPY rooms (id, room_num, capacity) FROM '/Users/johnware/Desktop/learners-guild/phase-3-challenge-c/part-2/csvFiles/rooms.csv' DELIMITER ',' CSV HEADER;

COPY bookings (id, room_id, guest_id, check_in, check_out) FROM '/Users/johnware/Desktop/learners-guild/phase-3-challenge-c/part-2/csvFiles/bookings.csv' DELIMITER ',' CSV HEADER;


-- UPDATE rooms
-- SET available = false
-- FROM bookings
-- WHERE bookings.check_in <= DATE '2017-08-27'
-- AND bookings.check_out > DATE '2017-08-27'
-- AND bookings.room_id = rooms.id;
