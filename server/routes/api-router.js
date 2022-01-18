const { models: { Piece, Artist } } = require('../db/db');
const apiRouter = require('express').Router();

apiRouter.get('/piece', async(request, response, next) => {
    try {
        console.log(request.body);
    } catch (error) {
        console.log('PIECE POST ROUTE ERROR');
        next(error);
    }
});

module.exports = apiRouter;
