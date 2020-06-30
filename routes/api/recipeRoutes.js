// Routes to the api for items and updating mongo model
// RecipeRoutes is where the routes/express router are used
const express = require('express');
const router = express.Router();

// RecipeModel from mongoose model
const RecipeModel = require('../../models/recipeModel');

// @route GET api/recipes
// @desc Get all recipes
// @access Public
router.get('/recipes', (req, res) => {
    RecipeModel.find()
        .sort({ date: -1 }) // sort dates in decending order
        .then(recipes => res.json(recipes))
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/newRecipe', (req, res) => {
    const newRecipe = new RecipeModel({
        name: req.body.name
    });
    
    newRecipe.save() // To save new item to DB
        .then(recipe => res.json(recipe)) // to spit that item out as JSON
})

// @route DELETE api/items/:id
// @desc DELETE a Item
// @access Public
router.delete('recipes/:id', (req, res) => {
    RecipeModel.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;