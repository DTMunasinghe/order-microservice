const productService = require('../services/productService');

const createProduct = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('[ProductController] Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }   
};

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('[ProductController] Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.error('[ProductController] Error fetching product by Id:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deleted = await productService.deleteProduct(req.params.id);
         if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('[ProductController] Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct
};