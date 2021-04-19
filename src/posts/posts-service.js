const config = require('../config');

const PostsService = {
    getPosts(db) {
        return db.select('p.*', 'b.brand_name')
            .from('posts as p')
            .fullOuterJoin('brands as b', 'b.id', 'p.brand_id');
    },
    getBrandPosts(db, brand_id) {
        return db.select('p.*', 'b.brand_name')
            .from('posts as p')
            .fullOuterJoin('brands as b', 'b.id', 'p.brand_id')
            .where({ brand_id });
    },
    checkBrandId(db, id) {
        return db.select('*')
            .from('brands')
            .where({ id })
            .first();
    }
};

module.exports = PostsService;