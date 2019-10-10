// Load the .env file in this directory into the environmental vars
require('dotenv').config();

// Require Express
const express = require('express');
const app = express();

// sequelize 
const { User } = require('./db/sequelize.js');

// console.log(sequelize);


// Set port to default to the PORT in the environmental vars (like Heroku)
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`<h1>Welcome!</h1><p>The PORT is: ${port} && ${process.env.TESTING}</p>`);
});

app.get('/nate', async (req, res) => {
  try {

    const nate = await User.create({
      username: "Nathan Smith", 
      is_admin: true
    }, { fields: ["username", "is_admin"] }); 
    
    // the FIELDS object tells sequelize to only concern itself with those fields in creation; this way IDs are ignored 
    // (bc we have set up postgres to make those automatically and we don't want sequelize to try to insert them)
    
    console.log(nate);

    res.send(nate); 

  } catch (err) {
    console.log(err); 
    res.send(err);
  }
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
