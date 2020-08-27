const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.POST
const route = require('./app/routes/index');
const bodyParser = require('body-parser');
require('./config/database.config').connect();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1', route);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})