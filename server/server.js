const express = require('express');
const app = express();
const { static } = express;
const path = require('path');

app.use('/public', static(path.join(__dirname, '../public')));
app.use('/client', static(path.join(__dirname, '../client')));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
});

// mounted routes
const apiRouter = require(__dirname + '/api-router.ts')
app.use('/api', apiRouter)

module.exports = app;