//Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});


// recipeScraper Schema from documentation
// {
//     name: "",
//     ingredients: [],
//     instructions: [],
//     servings: "",
//     image: "",
//     time: {
//       prep: "",
//       cook: "",
//       active: "",
//       inactive: "",
//       ready: "",
//       total: ""
//     }
// }

module.exports = RecipeModel = mongoose.model("recipe", RecipeSchema);