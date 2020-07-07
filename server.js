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
const db_pwd = process.env.DB_PWD
const port = process.env.PORT || 5000;

//Body Parser middleware
app.use(bodyParser.json());

app.get("/test", (req, res) => {
///recipeScraper("https://www.centraltexasfoodbank.org/recipe/cheesy-macaroni-bake")
recipeScraper("https://www.centraltexasfoodbank.org/recipe/strawberry-basil-infused-water")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/chicken-lettuce-wraps")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/zucchini-noodles")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/peanut-butter-hummus")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/overnight-oats")
// recipeScraper("https://www.centraltexasfoodbank.org/recipe/grilled-cheese-mushroom-spinach-and-tomato") //
  .then((recipe) => {
    res.send(recipe)
    console.log(JSON.stringify(recipe));
  })
  .then((err) => {
    console.log(err);
    })
  });

/* The path to access will be:
"mongodb+srv://ACCBootcampRecipe:<password>@cluster0-6o8hs.mongodb.net/<dbname>?retryWrites=true&w=majority"

DB_NAME and DB_PWD are in .env file. */

let mongoUrl = `mongodb+srv://ACCBootcampRecipe:${db_pwd}@cluster0-6o8hs.mongodb.net/${db_name}?retryWrites=true&w=majority`

//console.log('----mongoUrl: ' + mongoUrl) 
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

<<<<<<< HEAD
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
=======
app.listen(port, () => console.log(`App listening on port ${port}`));
>>>>>>> 9dbfb36e855e1f632269cda3dd2cdd66b561b971
