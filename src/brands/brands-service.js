const BrandsService = {
    getBrands(db) {
        return db.select('*')
            .from('brands');
    },
}

module.exports = BrandsService;