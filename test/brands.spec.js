const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('brands endpoints', () => {
    let db;

    before(`Make knex instance`, () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        });

        app.set('db', db);
    });

    const { testBrands } = helpers.makeMunchFixtures();

    after('disconnect from db', () => db.destroy());

    before('cleanup', () => helpers.cleanTables(db));

    afterEach('cleanup', () => helpers.cleanTables(db));

    describe('Get /api/brands', () => {
        beforeEach(`Seed Database`, () => helpers.seedTables(db));

        it('returns all brands', () => {
            return supertest(app)
                .get('/api/brands')
                .expect(200, testBrands);
        });
    });
});