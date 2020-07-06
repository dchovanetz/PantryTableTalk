require("dotenv").config(); // for .env w/ db password
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors())

const recipeScraper = require("recipe-scraper");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QRCode = require("qrcode");

const items = require("./routes/api/itemsRoutes");
const recipes = require("./routes/api/recipeRoutes");

const db_name = process.env.DB_NAME
const pwd = process.env.PWD
const port = process.env.PORT || 5000;

console.log(`-------db_name:  ${db_name}`);
console.log(`-------pwd:  ${pwd}`);

//Body Parser middleware
app.use(bodyParser.json());

app.get("/test", (req, res) => {
//recipeScraper("https://www.centraltexasfoodbank.org/recipe/cheesy-macaroni-bake")
//recipeScraper("https://www.centraltexasfoodbank.org/recipe/strawberry-basil-infused-water")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/chicken-lettuce-wraps")
//recipeScraper("https://www.centraltexasfoodbank.org/recipe/zucchini-noodles")
//recipeScraper("https://www.centraltexasfoodbank.org/recipe/peanut-butter-hummus")
//recipeScraper("https://www.centraltexasfoodbank.org/recipe/overnight-oats")
recipeScraper("https://www.centraltexasfoodbank.org/recipe/grilled-cheese-mushroom-spinach-and-tomato") //
  .then((recipe) => {
    res.send(recipe)
    console.log(JSON.stringify(recipe));
  })
  .then((err) => {
    console.log(err);
    })
  });

    /*
"mongodb+srv://ACCBootcampRecipe:<password>@cluster0-6o8hs.mongodb.net/<dbname>?retryWrites=true&w=majority"
*/
    //The path to access will be:
    /* `mongodb+srv://ACCBootcampRecipe:${pwd}@cluster0-6o8hs.mongodb.net/${db_name}?retryWrites=true&w=majority`

DB_NAME and PWD are in .env file. npm install dotenv
*/
//let mongoUrl = 'mongodb+srv://ACCBootcampRecipe:ACCrocksMS@cluster0-6o8hs.mongodb.net/Pantry_Talk?retryWrites=true&w=majority'

let mongoUrl = `mongodb+srv://ACCBootcampRecipe:${pwd}@cluster0-6o8hs.mongodb.net/${db_name}?retryWrites=true&w=majority`


mongoose
  //.connect("mongodb://localhost:27017/Pantry_Talk", {
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected...."))
  .catch((err) => console.log(err));


// Use Routes
app.use("/api/itemsRoutes", items); // on top of file
app.use("/api/recipeRoutes", recipes); // on top of file

//test for push

app.listen(port, () => console.log(`App listening on port ${port}`));
