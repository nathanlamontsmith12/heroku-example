const { Sequelize, DataTypes } = require('sequelize');

// NOTE: postgres connection string format is 
// postgres:// <user> @localhost: <port> / <psql_database_name> 
// without spaces 
// find port in psql via \conninfo command 

const DB_CONNECTION_STRING = process.env.DATABASE_URI;
const sequelize = new Sequelize(DB_CONNECTION_STRING);

sequelize.authenticate()
    .then( ()=> {
        console.log("CONNECTED");
    })
    .catch( (err) => {
        console.error("DID NOT CONNECT", err)
    });

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    username: {type: DataTypes.STRING},
    is_admin: {type: DataTypes.BOOLEAN}
}, {
    timestamps: false
    // omitNull: true
}); 

// THIS IS A GOTCHA: if you don't pass the timestamps: false option, sequelize will automatically 
// try to insert createdAt and updatedAt values into EVERY record created on EVERY model 
// kind of annoying -- this should be opt-in, not opt-out, but w/e 

// also, bc we have postgres handling ids as primary keys via SERIAL, 
// we need to set omitNull to true -- otherwise sequelize will try to create 
// the ids itself, with value NULL.... 

// hmm..  couldn't get omitNull to work, but there's a workaround using fields in the create() call 


module.exports = {
    User
}; 