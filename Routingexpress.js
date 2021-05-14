var express = require('express');  
var app = express();  
app.get('/router.html', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('You entered this page using get method');  
   res.sendFile( __dirname + "/" + "router.html" );  
})  
app.post('/router.html', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('You entered this page using post method');  
})  
app.delete('/del_student', function (req, res) {  
   console.log("Got a DELETE request for /del_student");  
   res.send('I am Deleted!');  
}) 

var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
}) 