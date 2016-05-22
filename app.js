var express = require('express');
var app = express();
var path = require('path');

var port = 8080;

app.use(express.static('src'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, function(){
	console.log('Example app listening on port '+ port);
});