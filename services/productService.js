const Product = require('../models/ProductModel');

const createProduct = async (productData) => {
    const newProduct = await Product.create(productData);
    return newProduct.toJSON();
};

const getProducts = async() => {
    return await Product.findAll({
        order: [['created_at', 'DESC']]
    });
};

const getProductById = async (id) => {
    return await Product.findByPk(id);
};

const deleteProduct = async (id) => {
    const product = Product.findByPk(id);

    if (!product)
        return false;

    await Product.destroy();
    return true;
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct
};
