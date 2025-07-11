const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const setupSwagger = require('./swagger');

require('dotenv').config();

app.use(express.json());

app.use('/api/orders', orderRoutes);

// Setup Swagger documentation
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})