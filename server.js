const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QRCode = require("qrcode");

const items = require('./routes/api/itemsRoutes')

const port = process.env.PORT || 5000;




const recipe1 = "garden-avocado-dip"
const recipe2 = "lentil-tacos"
const recipe7 = "grilled-cheese-mushroom-spinach-and-tomato"
const recipe10= "turnips-olives"


const recipe3 = "swiss-chard-lentils"
const recipe4 = "carrot-raisin-salad"
const recipe5 = "breakfast-banana-split"
const recipe6 = "pineapple-beet-smoothie"
const recipe10= "turnips-olives"
const recipe11 = "nabos-con-aceitunas"

const url = "https://www.centraltexasfoodbank.org/recipe/"


mongoose
  .connect('mongodb://localhost:27017/Pantry_Talk', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB connected...."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/itemsRoutes', items); // on top on file


app.listen(port, () => console.log(`App listening on port ${port}`))