require('babel-core/register')({
    presets: ['react', 'env', 'stage-1']
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// REQUEST HANDLER FOR SERVER-SIDE RENDERING
var requestHandler = require('./requestHandler.js');

var httpProxy = require('http-proxy');
var app = express();
app.use(logger('dev'));

// PROXY TO API
const apiProxy = httpProxy.createProxyServer({
    target: 'http://localhost:3001'
});

app.use('/api', function(req, res) {
    apiProxy.web(req, res);
});
// END OF PROXY proxy.web(req, res, { target: 'http://mytarget.com:8080' }, function(e) { ... });

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(requestHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
