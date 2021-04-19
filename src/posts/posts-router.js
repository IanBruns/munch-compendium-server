const express = require('express');
const PostsService = require('./posts-service');

const postsRouter = express.Router();

postsRouter.route('/')
    .get(async (req, res, next) => {
        try {
            const posts = await PostsService.getPosts(req.app.get('db'));
            return res.status(200).json(posts);
        } catch (err) {
            next(err);
        }
    });

postsRouter.route('/brands/:brand_id')
    .get(async (req, res, next) => {
        try {
            //To see if the brand even exists first
            const brand = await PostsService.checkBrandId(req.app.get('db'), req.params.brand_id);
            if (!brand) {
                return res.status(404).send({
                    error: { message: 'No Munch Squads for this brand...yet' }
                });
            }

            const posts = await PostsService.getBrandPosts(req.app.get('db'), req.params.brand_id);
            return res.status(200).json(posts);
        } catch (err) {
            next(err);
        }
    });

module.exports = postsRouter;