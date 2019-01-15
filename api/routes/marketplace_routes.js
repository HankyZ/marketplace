'use strict';

module.exports = (app, db) => {
    var marketplace = require('../controllers/marketplace_controller');

    // marketplace routes
    app.route('/fetch/title/:title').get(marketplace.fetch);

    app.route('/fetch_all/:availableOnly?').get(marketplace.fetch_all);

    app.route('/purchase/title/:title').get(marketplace.purchase);
};