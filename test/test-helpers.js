function cleanTables(db) {
    return db.transaction(async trx =>
        await trx.raw(
            `TRUNCATE
            usersbrands,
                posts,
                brands,
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

module.exports = {
    cleanTables
}