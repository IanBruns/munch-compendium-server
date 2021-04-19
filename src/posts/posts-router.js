const express = require('express');
const PostsService = require('./posts-service');

const postsRouter = express.Router();

postsRouter.route('/')
    .get(async (req, res, next) => {
        const posts = await PostsService.getPosts(req.app.get('db'));
        return res.status(200).json(posts);
    });

postsRouter.route('/brands/:brand_id')
    .get(async (req, res, next) => {
        const posts = await PostsService.getPosts(req.app.get('db'));
        return res.status(200).json(posts);
    });

module.exports = postsRouter;