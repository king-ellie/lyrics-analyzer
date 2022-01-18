const { Router } = require('express');
const apiRouter = require('./api-router.js');

const routes = Router();

routes.use('/api', apiRouter);

module.exports = routes;
