const config = require('../config');

const PostsService = {
    getPosts(db) {
        return db.select('*')
            .from('posts');
    }
};

module.exports = PostsService;