const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const QRCode = require("qrcode");

const port = process.env.PORT || 5000;



const recipe1 = "garden-avocado-dip"
const recipe2 = "lentil-tacos"
const recipe7 = "grilled-cheese-mushroom-spinach-and-tomato"
const recipe3 = "swiss-chard-lentils"
const recipe4 = "carrot-raisin-salad"
const recipe5 = "breakfast-banana-split"
const recipe6 = "pineapple-beet-smoothie"
const recipe10= "turnips-olives"
const recipe11 = "nabos-con-aceitunas"

const url = "https://www.centraltexasfoodbank.org/recipe/"

app.post("/test", (req, res) => {
  recipeScraper(`${url}/${recipe10}`)
  .then(recipe => {
  res.json({recipe})
  .then(err => {
  console.log(err)
    })
  })
});



app.listen(port, () => console.log(`App listening on port ${port}`))