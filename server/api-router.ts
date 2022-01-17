const { models: { Piece, Artist } } = require('./db/db')
const apiRouter = require('express').Router()

apiRouter.get('/piece', async(/*req, res, next: Function */) => {
    try {
        console.log("Post route hit")
    } catch (error) {
        console.log('PIECE POST ROUTE ERROR');
        // next(error);
    };
});

module.exports = apiRouter