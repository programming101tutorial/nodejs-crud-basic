const app = require('express');
const route = app.Router();

require('./auth')(route);

module.exports = route;