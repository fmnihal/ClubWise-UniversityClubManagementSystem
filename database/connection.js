const { Sequelize } = require('sequelize');

// Replace the database credentials with your actual database details
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
