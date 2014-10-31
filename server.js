
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

res.render('pinboard', {
 });

});




server = http.createServer(app);
server.listen(process.env.PORT || 8080);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
