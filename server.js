var express = require('express');
var app =express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware')


// var middleware = {
//       requireAunthentication: function (req, res, next) {
//       	console.log('private rout!e hit');
//       	next();
//       },
//       logger: function (req, res, next) {
//       	// new Date().toString()
//       	console.log('request' + new Date().toString() +req.method+ ' '+ req.originalUrl);
//       	next();
//       } 
// };

// app.use(middleware.requireAunthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAunthentication, function (req, res) {
     res.send('Hello Express');

});

/// about

// about us
app.get('/about', function (req, res) {
     res.send('About Us');

});

 app.use(express.static(__dirname+ '/public'))
console.log(__dirname);
app.listen(PORT, function () {
	console.log('Express server started on port' )
});