// Disable SSL cert validation (for dev/testing only!)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const setupSwagger = require('./swagger');
const productRoutes = require('./routes/productRoutes');
const checkJwt = require('./middlewares/authMiddleware');

require('dotenv').config();

app.use(express.json());

app.use('/api/orders', checkJwt, orderRoutes);
app.use('/api/products', checkJwt, productRoutes);

// Setup Swagger documentation
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})