'use strict';

/**
 * backend
 */

// libs
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.use(express.static(__dirname + '/public')); //load frontend
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(methodOverride('_method'));

// start app
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});