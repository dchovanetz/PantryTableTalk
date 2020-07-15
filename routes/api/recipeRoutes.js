// Routes to the api for recipes and updating mongo model
// ItemsRoutes is where the routes/express router are used
const express = require("express");
const router = express.Router();

// RecipeModel from mongoose model
const RecipeModel = require("../../models/recipeModel");
const recipeScraper = require("recipe-scraper");

// @route GET api/recipes
// @desc Get all recipes
// @access Public
router.get("/", (req, res) => {
  RecipeModel.find()
    //    .sort({ dateAdded: -1 }) // sort dates in descending order
    .sort({ dateAdded: -1 }) // sort dates in ascending alphabetical order
    .then((recipes) => res.json(recipes));
});

// Get individual recipe
router.get("/:id", (req, res) => {
  RecipeModel.find({ _id: req.params.id }).then((recipe) => res.json(recipe));
});

// @route POST api/recipes
// @desc Create a recipe
// @access Public
router.post("/recipeMaker", (req, res) => {
  recipeScraper(req.body.recipeUrl)
    .then((recipe) => {
      let newRecipe = new RecipeModel({
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        time: recipe.time,
        servings: recipe.servings,
        image: recipe.image,
        youTube_Url: recipe.youTube_Url,
        serving_size: recipe.serving_size,
        qrcode: recipe.qrcode,
      });
      return newRecipe;
    })
    .then((newRecipe) => {
      console.log(newRecipe);
      newRecipe
        .save() // To save new recipe to DB
        .then((recipe) => res.json(recipe)) // to spit that recipe out as JSON
        .catch((err) => console.log("Not saved to db: " + err));
    });
});

// @route DELETE api/recipes/:id
// @desc DELETE a Recipe
// @access Public
router.delete("/:id", (req, res) => {
  RecipeModel.findById(req.params.id)
    .then((recipe) => recipe.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
