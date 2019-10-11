// Load the .env file in this directory into the environmental vars
require('dotenv').config();

// Set port to default to the PORT in the environmental vars (like Heroku)
const port = process.env.PORT || 3001;

// sequelize 
const { sequelize } = require('./db/sequelize.js');

// Require Express, controllers & other middleware 
const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController'); 
const bodyParser = require('body-parser');


// apply middleware 
app.use(bodyParser.json());

app.use("/user", userController);
app.use("/category", categoryController);

app.get("/", (req, res)=>{
  res.send("<h1>Basic Index Page</h1>");
});

sequelize.sync({force: true})
  .then(()=>{
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err)=>{
    console.error(err);
  });
