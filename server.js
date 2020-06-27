const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QRCode = require("qrcode");

const items = require('./routes/api/itemsRoutes');
const recipes = require('./routes/api/recipeRoutes');

const port = process.env.PORT || 5000;


const recipeUrl = "https://www.centraltexasfoodbank.org/recipe/garden-avocado-dip"

recipeScraper(recipeUrl)
.then(recipe => {
  console.log(recipe)
})
.catch(error => {
  console.log(error)
})


mongoose
  .connect('mongodb://localhost:27017/Pantry_Talk', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB connected...."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/itemsRoutes', items); // on top on file
app.use('/api/recipeRoutes', recipes); // on top on file

//test for push

app.listen(port, () => console.log(`App listening on port ${port}`))