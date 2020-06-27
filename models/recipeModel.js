//Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    }
});

module.exports = RecipeModel = mongoose.model("recipe", RecipeSchema);