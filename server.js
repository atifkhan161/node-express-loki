//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var interceptor = require('express-interceptor');
var underscore = require("underscore");
var loki = require('lokijs');

//App level config
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(cors());
app.use(errorInterceptor);
app._ = underscore;
var db = new loki('app_data/app_db.json', {autosave: true, autoload: true, throttledSaves: true});


db.loadDatabase({}, function (result) {
    //All controller routes
    require('./router/routes')(app);
    require('./router/emp.controller')(app, db);

    // put your log call here.
    var server = app.listen(3009, function () {
        console.log("We have started our server on port 3000");
    });
});
//Interceptor
function errorInterceptor(err, req, res, next) {
    // Do logging and user-friendly error message display
    console.error(err);
    res.status(500).send({status: 500, message: 'internal error', type: 'internal'});
};