'use strict'

var mongoose = require('mongoose');
var Product = mongoose.model('Products');

exports.fetch = (req, res) => {
    console.log('finding product with title = ' + req.params.title);
    Product.find({ title: req.params.title }, (err, products) => {
        if (err)
            res.send(err);
        console.log("found product = " + products);
        res.json(products);
    });
};

exports.fetch_all = (req, res) => {
    Product.find({}, function (err, products) {
        if (err)
            res.send(err);
        res.json(products);
    });
};

exports.purchase = (req, res) => {

};