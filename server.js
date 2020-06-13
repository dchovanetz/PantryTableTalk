const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const QRCode = require("qrcode");

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



app.listen(port, () => console.log(`App listening on port ${port}`))