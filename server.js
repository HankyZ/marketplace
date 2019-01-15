var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Product = require('./api/models/product'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/marketplace_db')
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });;

// import routes
var routes = require('./api/routes/marketplace_routes');
routes(app);

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('todo list RESTful API server started on: ' + port);