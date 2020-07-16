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


// DB_NAME and DB_PWD are in .env file. */

// URL to access our shared DB
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
app.use("/api/recipes", recipes); // on top of file

//test for push

app.listen(port, () => console.log(`App listening on port ${port}`));
