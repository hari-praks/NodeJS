/*For Connection*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("Student", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

/* Inserting Multiple Record*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var obj1 = [
  { name: "Deepak", age: "18",Dateofbirth :"02/01/2002",Yearofadmission:"2019"},
  { name: "Pooja", age: "19",Dateofbirth :"18/08/2001",Yearofadmission:"2019"},
  { name: "Samisksha", age: "17",Dateofbirth :"10/11/2003",Yearofadmission:"2020"},
  { name: "Surendar", age: "19",Dateofbirth :"26/08/2002",Yearofadmission:"2019"}

  ];
  dbo.collection("Student").insertMany(obj1, function(err, res) {
    if (err) throw err;
    console.log("No of documents inserted:"+res.insertedCount);
    db.close();
  });
});

/* For Fetching Data*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("Student").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


/* Sorting records*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("Student").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/* For updating*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { Dateofbirth: "18/08/2001" };
  var newvalues = { $set: {name: "Kevin", age: "25" } };
  dbo.collection("Student").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

/* Limiting  to 4 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("Student").find().limit(4).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/*For greater than query*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { age:{$gt:"25"}};
  dbo.collection("Student").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
