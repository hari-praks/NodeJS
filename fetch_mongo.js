var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/mydb';
var str = "";

app.get('/',function(req,res){
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('Doctor').find();
       cursor.each(function(err, item) {
      
           if (item != null) {
                   str = str + "  Name  " + item.name + "</br>";
           }
       });
       res.send(str);
            db.close();
        });
    });
var server = app.listen(3000, function () {
					var host = server.address().address
					var port = server.address().port
					console.log("Example app listening at http://%s:%s//", host,port)})