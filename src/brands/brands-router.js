const express = require('express');
const BrandsService = require('./brands-service');

const brandsRouter = express.Router();

postsRouter.route('/')
    .get(async (req, res, next) => {
        try {
            return res.status(200).json([]);
        } catch (err) {
            next(err);
        }
    });