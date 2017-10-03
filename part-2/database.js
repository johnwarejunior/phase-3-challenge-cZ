const client = require('./pg')

const guests = function() {
  return client.query(`SELECT * FROM guests`)
  .then(result => result.rows)
  .catch(error => console.log(error))
}

const rooms = function() {
  return client.query(`SELECT room_num, capacity, available FROM rooms`)
  .then(result => result.rows)
  .catch(error => console.log(error))
}

const availableRooms = function() {
  return client.query(`SELECT room_num, capacity, available FROM rooms WHERE available = true`)
  .then(result => result.rows)
  .catch(error => console.log(error))
}

const bookings = function() {
  return client.query(`SELECT room_num, name, check_in, check_out FROM bookings
  JOIN rooms ON rooms.id = bookings.room_id
  JOIN guests ON guests.id = bookings.guest_id
  WHERE check_out > CURRENT_DATE`)
  .then(result => result.rows)
  .catch(error => console.log(error))
}

const currentBookings = function(room) {
  return client.query(`SELECT room_num, name, check_in, check_out FROM bookings
  JOIN rooms ON rooms.id = bookings.room_id
  JOIN guests ON guests.id = bookings.guest_id
  WHERE check_out > CURRENT_DATE
  AND room_num = $1`, [room])
  .then(result => result.rows)
  .catch(error => console.log(error))
}

module.exports = {
  guests,
  rooms,
  availableRooms,
  bookings,
  currentBookings
}
