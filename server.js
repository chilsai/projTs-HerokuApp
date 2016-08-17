var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express(); 
var http = require('http').Server(app);

var port = process.env.PORT || 8200;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({
    type: 'application/octetstream',
    limit: '10mb'
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {	
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/oauthCallback', function(req, res) {	
    res.sendFile(path.join(__dirname + '/public/views/oauthcallback.html'));
});

app.get('/oauthCallback', function(req, res) {	
    res.sendFile(path.join(__dirname + '/public/views/oauthcallback.html'));
});

app.get('/resource/projts__StopTimer', function(req, res) {	
    res.sendFile(path.join(__dirname + '/public/resource/StopTimer.jpg'));
});

app.get('/resource/projts__TimerGif', function(req, res) {	
    res.sendFile(path.join(__dirname + '/public/resource/TimerGif.gif'));
});


http.listen(port, function(){
	console.log('listening on *:1990');
});

module.exports = http;
