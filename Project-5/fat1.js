var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
res.sendFile( __dirname + "/" + "order.html" );})



app.post('/products',urlencodedParser, function (req, res) {
// Prepare output in JSON format
response = { CID:req.body.cid,first_name:req.body.fname,last_name:req.body.lname,OID:req.body.oid,MID:req.body.mid,
	date:req.body.date,time:req.body.time,Quantity:req.body.quantity};
console.log(req.body)
MongoClient.connect('mongodb://localhost:27017/', function(err, db)
	{ if (err) throw err;
		console.log("Connected to Database");
		var dbo=db.db("fat");
		dbo.collection('order').insert(response, function(err, result)
			{ if (err) throw err;
				console.log("1 document inserted in your mongodb database" ); });});
				console.log(response); // display in node console window
				res.end(JSON.stringify(response));})
				var server = app.listen(3000, function () {
					var host = server.address().address
					var port = server.address().port
					console.log("Example app listening at http://%s:%s//", host,port)}) 