const Sequelize = require('sequelize');

const DB_CONNECTION_STRING = process.env.DATABASE_URI;

console.log(DB_CONNECTION_STRING);
const sequelize = new Sequelize(DB_CONNECTION_STRING);

module.exports = sequelize; 