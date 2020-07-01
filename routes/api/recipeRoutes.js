// Routes to the api for recipes and updating mongo model
// ItemsRoutes is where the routes/express router are used
const express = require('express');
const router = express.Router();

// RecipeModel from mongoose model
const RecipeModel = require('../../models/recipeModel');

// @route GET api/recipes
// @desc Get all recipes
// @access Public
router.get('/', (req, res) => {
    RecipeModel.find()
        .sort({ dateAdded: -1 }) // sort dates in descending order
        .then(recipes => res.json(recipes))
})

// @route POST api/recipes
// @desc Create a recipe
// @access Public
router.post('/', (req, res) => {
    const newRecipe = new RecipeModel({
        name: req.body.name
    });
    
    newRecipe.save() // To save new recipe to DB
        .then(recipe => res.json(recipe)) // to spit that recipe out as JSON
})

// @route DELETE api/recipes/:id
// @desc DELETE a Recipe
// @access Public
router.delete('/:id', (req, res) => {
    RecipeModel.findById(req.params.id)
        .then(recipe => recipe.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;