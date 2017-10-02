const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, () => console.log('You are now listening to port 3000'))

app.get('/api/shout/:word', (req, res) => {
  res.send(`${req.params.word.toUpperCase()}`)
})
