const express = require('express')
const app = express()

app.use(express.json())

app.get('/names', (req, res) => {
  res.send('Serhii')
})

app.post('/api/v1', (req, res) => {
  const { dataInfo } = req.body
  res.status(200).json({ dataInfo })
})

app.listen(5000, console.log('Listening port 5000'))
