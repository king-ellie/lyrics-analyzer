const express = require('express');
const app = express();
const { static } = express;
const path = require('path');
const routes = require('./routes/router.js');

app.use('/public', static(path.join(__dirname, '../public')));

app.use('/client', static(path.join(__dirname, '../client')));

app.use(express.json());

app.use(routes);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
