'use strict'

var mongoose = require('mongoose');
var Product = mongoose.model('Products');

exports.fetch = (req, res) => {
    Product.find({ title: req.params.title }, (err, products) => {
        if (err)
            res.send(err);
        res.json(products);
    });
};

exports.fetch_all = (req, res) => {
    var query = {};
    if (req.params.availableOnly)
        query = { inventory_count: { $gt: 0 } };

    Product.find(query, (err, products) => {
        if (err)
            res.send(err);
        res.json(products);
    });
};

exports.purchase = (req, res) => {
    var query = { title: req.params.title }
    Product.find(query, (err, products) => {
        if (err)
            res.send(err);
        if (products.length == 0)
            res.send('No product was found with title = ' + req.params.title);
        else if (products[0].inventory_count <= 0)
            res.send('No available inventory for the product with title = ' + req.params.title);
        else {
            Product.updateOne(query, { $inc: { inventory_count: -1 } }, (err) => {
                if (err)
                    res.send(err);
                res.send('Purchase successful');
            });
        }
    })
};