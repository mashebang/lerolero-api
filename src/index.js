const generator = require('./sentences')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const result = generator('defaults')
  res.status(200).send({ result })
})

app.get('/:id', (req, res) => {
  try {
    const result = generator(req.params.id)
    res.status(200).send({ result })
  } catch(e) {
    res.status(404).send({ error: e.message })
  }
})

app.listen(port, () => {
  console.log('app running', port)
})
