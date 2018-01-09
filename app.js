const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.listen(3000, () => console.log('You are now listening to port 3000'))

app.get('/api/shout/:word', (req, res) => {
  res.send(`${req.params.word.toUpperCase()}`)
})

app.use(bodyParser())

app.post('/api/array/merge', (req, res) => {
  let arrayA = req.body.a
  let arrayB = req.body.b
  let fullArray
  if(Array.isArray(arrayA) === false || Array.isArray(arrayB) === false) {
    res.status(400).json({ "error": "Must be an array" })
  } else {
    let mergeArray = []
    arrayA.length > arrayB.length ? fullArray = arrayA : fullArray = arrayB
    let index = 0
    do {
      mergeArray.push(arrayA[index])
      mergeArray.push(arrayB[index])
      index++
    } while(index < fullArray.length)
    let outputArray = mergeArray.filter(index => index !== undefined)
    res.json({ "result": outputArray })
  }
})
