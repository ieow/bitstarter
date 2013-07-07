var express = require('express');
var fs = require('fs');

var app = express()

app.configure( function() {
	app.use(express.logger());

	app.set('views', __dirname + '/client/views');
	app.set("view options", {layout: false});

	app.use(express.static(__dirname + '/client'));

	//app.engine('html' , require('jade').__express);
});





//
// app.get('/', function(request, response) {
//   response.send('Hello World 2!');
// });
app.get('/', function(request, response) {
//	response.render('index.html');
	response.sendfile('client/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
