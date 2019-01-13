'use strict';

module.exports = (app, db) => {
    var marketplace = require('../controllers/marketplace_controller');

    // marketplace routes
    app.route('/fetch/title=:title').get(marketplace.fetch);

    app.route('/fetch_all').get(marketplace.fetch_all);

    app.route('/purchase/:title').get(marketplace.purchase);
};