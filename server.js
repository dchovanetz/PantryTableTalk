const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QRCode = require("qrcode");

const items = require('./routes/api/itemsRoutes');

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

//test for push

const url = 'https://www.centraltexasfoodbank.org/recipe/swiss-chard-lentils';
recipeScraper(url)
  .then((recipe) => {
    console.log(recipe);
    res.json(recipe);
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(port, () => console.log(`App listening on port ${port}`))