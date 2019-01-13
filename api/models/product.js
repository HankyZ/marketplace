'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the product'
    },
    price: {
        type: Number,
        required: 'Kindly enter the price of the product'
    },
    inventory_count: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Products', ProductSchema);