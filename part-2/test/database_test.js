process.env.NODE_ENV = 'test';
const client = require('pg');

const {
  guests,
  rooms,
  availableRooms,
  bookings,
  currentBookings
} = require('../database.js')

const expect = require('chai').expect

describe('guests', function() {
  it('should output a list of all guests', function() {
    return guests()
    .then(result => {
      expect(result).to.have.lengthOf(20)
    })
  })
  it('should list Janie Powers as the tenth guest', function() {
    return guests()
    .then(result => {
      expect(result[9].name).to.equal('Janie Powers')
    })
  })
})

describe('rooms', function() {
  it('should list all room numbers, their capacities and availability', function() {
    return rooms()
    .then(result => {
      expect(result).to.have.lengthOf(18)
    })
  })
  it('should list room 5A as the last room', function() {
    return rooms()
    .then(result => {
      expect(result[17].room_num).to.equal('5A')
    })
  })
})

describe('availableRooms', function() {
  it('should output available rooms with their capacities', function() {
    return availableRooms()
    .then(result => {
      expect(result).to.have.lengthOf(16)
    })
  })
  it('should output only available rooms', function() {
    return availableRooms()
    .then(result => {
      expect(result[3].available).to.equal(true)
    })
  })
})

describe('bookings', function() {
  it('should output all booked rooms', function() {
    return bookings()
    .then(result => {
      expect(result).to.have.lengthOf(35)
    })
  })
  it('should output bookings after current date', function() {
    return bookings()
    .then(result => {
      expect(result[3].check_out).to.be.above(new Date())
    })
  })
})

describe('currentBookings', function() {
  it('should output all reservations for 3A', function() {
    return currentBookings('3A')
    .then(result => {
      expect(result).to.have.lengthOf(1)
    })
  })
  it('should output all bookings for 3A', function() {
    return currentBookings('3A')
    .then(result => {
      result.forEach(index => expect(index.room_num).to.equal('3A'))
    })
  })
})
