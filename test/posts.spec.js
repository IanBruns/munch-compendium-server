const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('posts endpoints', () => {
    let db;

    const { testBrands, testPosts } = helpers.makeMunchFixtures();

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
});