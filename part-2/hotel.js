const {
  guests,
  rooms,
  availableRooms,
  bookings,
  currentBookings
} = require('./database.js')

const client = require('./pg')
const print = require('node-print')
const userInput = process.argv[3]

switch(process.argv[2]) {
  case 'guests':
    guests()
      .then(result => {
        client.end()
        print.pt(result)
      })
      .catch(error => console.log(error))
      break
  case 'rooms':
    if(!userInput) {
      rooms()
      .then(result => {
        client.end()
        print.pt(result)
      })
      .catch(error => console.log(error))
      break
    } else if (userInput === '--available') {
    availableRooms()
    .then(result => {
      client.end()
      print.pt(result)
    })
    .catch(error => console.log(error))
    break
  } else {
    console.log('What do you want to know?')
    console.log('Here are your choices:  rooms --available, rooms, guests, bookings, and bookings followed by room.')
    client.end()
    break
  }

  case 'bookings':
    if(!userInput) {
      bookings()
      .then(result => {
        client.end()
        print.pt(result)
      })
      .catch(error => console.log(error))
      break
    } else {
      currentBookings(userInput)
      .then(result => {
        client.end()
        print.pt(result)
      })
      .catch(error => console.log(error))
      break
    }

    default:
    console.log('Enter a request for hotel')
    console.log('Here are your choices: rooms --available, rooms guests, bookings, and bookings followed by room.')
    client.end()
}
