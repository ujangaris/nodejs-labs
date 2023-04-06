const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// running server
app.listen(3000, () => {
  console.log(`App listening on port ${port}`)
})

// Global middleware
// app.use(require('./diluar_kota'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Specific middleware
// app.use(require('./diluar_kota'))

//specific middleware
app.get('/kantor', require('./didalam_kota'), (req, res) => {
  res.send('Hello World!')
})
app.get('/healing', require('./diluar_kota'), (req, res) => {
  res.send('Hello World!')
})
