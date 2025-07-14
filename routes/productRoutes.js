const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProductController');

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               sku:
 *                 type: string
 *               stock_quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post('/', controller.createProduct);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieves all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products
 */
router.get('/', controller.getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retrieves a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The UUID of the product
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 */
router.get('/:id', controller.getProductById);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deletes a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The UUID of the product
 *     responses:
 *       204:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 */
router.delete('/:id', controller.deleteProduct);

module.exports = router;
