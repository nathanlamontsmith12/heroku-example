// Load the .env file in this directory into the environmental vars
require('dotenv').config();

// Require Express
const express = require('express');
const app = express();

// Set port to default to the PORT in the environmental vars (like Heroku)
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(
    `<h1>Welcome!</h1><p>The PORT is: ${port}</p><p>The DATABASE_URL is: ${
      process.env.DATABASE_URL
    }</p><p>See the <a target="_blank" href="https://github.com/mattlgroff/example-heroku-app/blob/master/README.md">Heroku Workshop Readme Here</a></p>`
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
