const express = require('express');

const postsRouter = express.Router();

postsRouter.route('/')
    .get((req, res, next) => {
        return res.status(200).json([]);
    });

module.exports = postsRouter;