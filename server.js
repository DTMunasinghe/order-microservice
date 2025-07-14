const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const setupSwagger = require('./swagger');
const productRoutes = require('./routes/productRoutes');

require('dotenv').config();

app.use(express.json());

app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

// Setup Swagger documentation
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})