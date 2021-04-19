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
            const posts = await PostsService.getBrandPosts(req.app.get('db'), req.params.brand_id);
            return res.status(200).json(posts);
        } catch (err) {
            next(err);
        }
    });

module.exports = postsRouter;