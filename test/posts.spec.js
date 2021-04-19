const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('posts endpoints', () => {
    let db;

    const testPosts = helpers.makeExpectedPostsArray();

    before(`Make knex instance`, () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        });

        app.set('db', db);
    });

    after('disconnect from db', () => db.destroy());

    before('cleanup', () => helpers.cleanTables(db));

    afterEach('cleanup', () => helpers.cleanTables(db));

    describe(`GET /posts requests`, () => {
        beforeEach(`Seed Database`, () => helpers.seedTables(db));

        it('Returns all items', () => {
            return supertest(app)
                .get(`/api/posts`)
                .expect(200, testPosts);
        });
    });

    describe('GET /posts/brands/:brand_id', () => {
        beforeEach(`Seed Database`, () => helpers.seedTables(db));

        it('returns only the Carls Jr posts', () => {
            const testId = 2;
            const cjTests = testPosts.filter(post => post.brand_id === testId);

            return supertest(app)
                .get(`/api/posts/brands/${testId}`)
                .expect(200, cjTests);
        });
    });
});