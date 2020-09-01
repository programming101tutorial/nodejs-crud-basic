const express = require('express')
const app = express()
require('dotenv').config()
const route = require('./app/routes/index');
const routePub = require('./app/routes/public');
const bodyParser = require('body-parser');
const auth = require('./app/middlewares/auth');
const error = require('./app/helpers/error');
const {response} = require('./app/helpers/response');
require('./config/database.config').connect();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(response);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('', routePub);
app.use('/api/v1', auth.authenticateToken, route);

app.use(error.error500);
app.use(error.notFound);

app.listen(process.env.POST, () => {
  console.log(`Example app listening at http://localhost:${process.env.POST}`)
})