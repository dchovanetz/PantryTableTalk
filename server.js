require("dotenv").config(); // for .env w/ db password
const express = require("express");
const app = express();
const recipeScraper = require("recipe-scraper");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QRCode = require("qrcode");

const items = require("./routes/api/itemsRoutes");
const recipes = require("./routes/api/recipeRoutes");

//const db_name = process.env.DB_NAME
//const pwd = process.env.PWD
const port = process.env.PORT || 5000;

//Body Parser middleware
app.use(bodyParser.json());

app.get("/test", (req, res) => {
recipeScraper("https://www.centraltexasfoodbank.org/recipe/creamy-tomato-soup")
  .then((recipe) => {
    console.log(recipe);
    res.json({recipe: recipe})
  })
  .then((err) => {
    console.log(err);
    })
  });

    /*
"mongodb+srv://ACCBootcampRecipe:<password>@cluster0-6o8hs.mongodb.net/<dbname>?retryWrites=true&w=majority"
*/
    //The path to access will be:
    /* `mongodb+srv://ACCBootcampRecipe:W${pwd}@cluster0-6o8hs.mongodb.net/${db_name}?retryWrites=true&w=majority`
DB_NAME and PWD are in .env file. npm install dotenv
*/

   


mongoose
  .connect("mongodb://localhost:27017/Pantry_Talk", {
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
