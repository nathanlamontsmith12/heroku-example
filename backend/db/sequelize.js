const { Sequelize, DataTypes } = require('sequelize');

// NOTE: postgres connection string format is 
// postgres:// <user> @localhost: <port> / <psql_database_name> 
// without spaces 
// find port in psql via \conninfo command 

const DB_CONNECTION_STRING = process.env.DATABASE_URI;
const sequelize = new Sequelize(DB_CONNECTION_STRING);

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING},
    is_admin: {type: DataTypes.BOOLEAN}
}); 

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING}
});

// NEEDS the autoIncrement: true  --> this properly sets type SERIAL in psql ! 

User.belongsToMany(Category, {through: "users_categories"});
Category.belongsToMany(User, {through: "users_categories"});

module.exports = {
    User,
    Category,
    sequelize
}; 
