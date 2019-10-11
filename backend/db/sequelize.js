const { Sequelize, DataTypes } = require('sequelize');

// NOTE: postgres connection string format is 
// postgres:// <user> @localhost: <port> / <psql_database_name> 
// without spaces 
// find port in psql via \conninfo command 

const DB_CONNECTION_STRING = process.env.DATABASE_URI;
const sequelize = new Sequelize(DB_CONNECTION_STRING);

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    username: {type: DataTypes.STRING},
    is_admin: {type: DataTypes.BOOLEAN}
}); 

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    title: {type: DataTypes.STRING}
})

User.belongsToMany(Category, {through: "users_categories"});
Category.belongsToMany(User, {through: "users_categories"});

sequelize.sync({force: true});

module.exports = {
    User,
    Category
}; 
