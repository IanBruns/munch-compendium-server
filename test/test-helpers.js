function cleanTables(db) {
    return db.transaction(async trx =>
        await trx.raw(
            `TRUNCATE
                brands,
                posts;
            `
        )
            .then(() =>
                Promise.all([
                    trx.raw(`ALTER SEQUENCE posts_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE brands_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`SELECT setval('posts_id_seq', 0)`),
                    trx.raw(`SELECT setval('brands_id_seq', 0)`),
                ])
            )
    )
}

function makeBrandsArray() {
    return [
        {
            id: 1,
            brand_name: `Wendy's`
        },
        {
            id: 2,
            brand_name: `Carl's Jr`
        }
    ];
}

function makePostsArray() {
    return [
        {
            id: 1,
            brand_id: 1,
            episode_number: 1,
            episode_title: 'Title for Episode 1',
            episode_link: 'Link for Episode 1',
            campaign: 'Brand for campaign 1',
            pr_link: 'Link for campaign 1'
        },
        {
            id: 2,
            brand_id: 2,
            episode_number: 2,
            episode_title: 'Title for Episode 2',
            episode_link: 'Link for Episode 2',
            campaign: 'Brand for campaign 2',
            pr_link: null
        },
        {
            id: 3,
            brand_id: 2,
            episode_number: 3,
            episode_title: 'Title for Episode 3',
            episode_link: 'Link for Episode 3',
            campaign: 'Brand for campaign 3',
            pr_link: 'Link for campaign 3'
        },
    ]
}

function makeExpectedPostsArray() {
    return [
        {
            id: 1,
            brand_name: `Wendy's`,
            brand_id: 1,
            episode_number: 1,
            episode_title: 'Title for Episode 1',
            episode_link: 'Link for Episode 1',
            campaign: 'Brand for campaign 1',
            pr_link: 'Link for campaign 1'
        },
        {
            id: 2,
            brand_name: `Carl's Jr`,
            brand_id: 2,
            episode_number: 2,
            episode_title: 'Title for Episode 2',
            episode_link: 'Link for Episode 2',
            campaign: 'Brand for campaign 2',
            pr_link: null
        },
        {
            id: 3,
            brand_name: `Carl's Jr`,
            brand_id: 2,
            episode_number: 3,
            episode_title: 'Title for Episode 3',
            episode_link: 'Link for Episode 3',
            campaign: 'Brand for campaign 3',
            pr_link: 'Link for campaign 3'
        },
    ]
}

function makeMunchFixtures() {
    const testBrands = makeBrandsArray();
    const testPosts = makePostsArray();

    return { testBrands, testPosts };
}

async function seedTables(db) {
    const brands = makeBrandsArray();
    const posts = makePostsArray();

    await db.into('brands').insert(brands);
    await db.raw(
        `SELECT setval('brands_id_seq', ?)`,
        [brands[brands.length - 1].id],
    );

    await db.into('posts').insert(posts);
    await db.raw(
        `SELECT setval('posts_id_seq', ?)`,
        [posts[posts.length - 1].id],
    );
}

module.exports = {
    cleanTables,
    makeBrandsArray,
    makePostsArray,
    seedTables,
    makeMunchFixtures,
    makeExpectedPostsArray,
}