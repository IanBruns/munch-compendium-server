const express = require('express');
const BrandsService = require('./brands-service');

const brandsRouter = express.Router();

brandsRouter.route('/')
    .get(async (req, res, next) => {
        try {
            brands = await BrandsService.getBrands(req.app.get('db'));
            return res.status(200).json(brands);
        } catch (err) {
            next(err);
        }
    });

module.exports = brandsRouter;