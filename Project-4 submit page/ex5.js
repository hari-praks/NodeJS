var express =require('express'); 
var app =express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
res.sendFile('ex5.html'); 
}); 
app.post('/submit-studentdata', function (req, res) { 
	var name =req.body.firstName + ' ' + req.body.lastName;
	res.send(name + ' Submitted Successfully!'); });
var server = app.listen(5000, function () {
console.log('Node server is running..');
});