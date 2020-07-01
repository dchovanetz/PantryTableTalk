//Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Recipe must have a name'],
        unique: true
    },
    ingredients: {
        type: [String],              //array
        required: [true, 'At least one ingredient is required']
    },
    instructions: {
        type: [String],              //array
        required: [true, 'At least one instruction is required']
    },
    time: {
        prep: {type: String},
        cook: {type: String},
        active: {type: String},     //may be empty
        inactive: {type: String},   //may be empty
        ready: {type: String},      //may be empty
        total: {type: String}       //may be empty
    },
    servings: {
        type: String
    },
    serving_size: {
        type: String           //placeholder, not populated for now
    },
    image: {
        type: String
    },
    youTube_Url : {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
})

// mongoose.model(collection, schema)
// When building model, passing in collection - standard practice 
// Capitalized and singular
// Mongo will convert to lowercase and pluralize -  recipes

<<<<<<< HEAD

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
=======
module.exports = RecipeModel = mongoose.model("Recipe", RecipeSchema);
>>>>>>> master
