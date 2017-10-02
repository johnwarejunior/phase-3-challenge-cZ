const { Client } = require('pg')
const client = new Client({
  user: 'johnware',
  host: 'localhost',
  database: process.env.NODE_ENV === 'test' ? 'hotel_db_test' : 'hotel_db',
  port: 5432
})

client.connect()

module.exports = client
