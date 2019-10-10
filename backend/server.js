// Load the .env file in this directory into the environmental vars
require('dotenv').config();

// Require Express
const express = require('express');
const app = express();

// sequelize 
const sequelize = require('./db/sequelize.js');

console.log(sequelize);


// Set port to default to the PORT in the environmental vars (like Heroku)
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`<h1>Welcome!</h1><p>The PORT is: ${port} && ${process.env.TESTING}</p>`);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
