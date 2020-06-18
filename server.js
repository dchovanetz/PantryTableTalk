const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QRCode = require("qrcode");

const items = require('./routes/api/itemsRoutes')

const port = process.env.PORT || 5000;



//doesn't work
const recipe1 = "garden-avocado-dip"
const recipe2 = "lentil-tacos"
const recipe7 = "grilled-cheese-mushroom-spinach-and-tomato"
const recipe10= "turnips-olives"

//does work
const recipe3 = "swiss-chard-lentils"
const recipe4 = "carrot-raisin-salad"
const recipe5 = "breakfast-banana-split"
const recipe6 = "pineapple-beet-smoothie"

const recipe11 = "nabos-con-aceitunas"


const url = "https://www.centraltexasfoodbank.org/recipe/"

//Body Parser middleware
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    recipeScraper(`${url}/${recipe10}`)
.then(recipe => {
  console.log(recipe)
})
.then(err => {
  console.log(err)
})

    res.json({message: "Hello from server.js! ;)"})
});

mongoose
  .connect('mongodb://localhost:27017/Pantry_Talk', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB connected...."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/itemsRoutes', items); // on top on file


app.listen(port, () => console.log(`App listening on port ${port}`))