// Routes to the api for items and updating mongo model
// ItemsRoutes is where the routes/express router are used
const express = require('express');
const router = express.Router();

// ItemModel from mongoose model
const ItemModel = require('../../models/itemModel');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    ItemModel.find()
        .sort({ date: -1 }) // sort dates in decending order
        .then(items => res.json(items))
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
    const newItem = new ItemModel({
        name: req.body.name
    });
    
    newItem.save() // To save new item to DB
        .then(item => res.json(item)) // to spit that item out as JSON
})

// @route DELETE api/items/:id
// @desc DELETE a Item
// @access Public
router.delete('/:id', (req, res) => {
    ItemModel.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;