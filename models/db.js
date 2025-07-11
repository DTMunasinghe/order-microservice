const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: (msg) => console.log('[DB]', msg), // logs every SQL query
  pool: {
    max: 10,      // max connections in pool
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.authenticate()
  .then(() => console.log('[DB] Connection to DB established'))
  .catch(err => console.error('[DB] Unable to connect to DB:', err));

module.exports = sequelize;
