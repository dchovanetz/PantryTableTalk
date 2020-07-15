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

<<<<<<< HEAD

app.get('/demo', (req, res) => {
  console.log('A request made on /demo')
  let fakeRecipe = [{
    title: 'Mac and Cheese',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg',
    id: 122
  }]
  res.send(fakeRecipe)
})


app.post('/getUniqueRecipe', (req, res) => {
  console.log(req.body.id)
  res.send({
    title: 'Mac and Cheese',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg',
    id: 122,
    cook: 'microwave 50 minutes'
  })
})
    /*
=======
/* The path to access will be:
>>>>>>> master
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
<<<<<<< HEAD
app.use("/api/itemsRoutes", items); // on top of file--> shopping list
app.use("/api/recipeRoutes", recipes); // on top of file--> json
=======
app.use("/api/itemsRoutes", items); // on top of file
app.use("/api/recipes", recipes); // on top of file
>>>>>>> master

//test for push

app.listen(port, () => console.log(`App listening on port ${port}`));
