var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/doctor',{useNewUrlParser: true});

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const docSchema = new mongoose.Schema({
   "Speciality":String,
  "Phonenumber": Number,
  "NameofDoctor": String,
 "ClinicAddress": String,
});

const doctor = mongoose.model("doctorpage",docSchema)

app.post('/update', function(req,res){
    var sname = req.body.Specialityname;
    var Pnumber = req.body.Phonenumber;
    var name = req.body.Name;
    var Caddress = req.body.ClinicAddress;


    doctor.findOneAndUpdate({splname:sname},{"Phonenumber": Pnumber, "NameofDoctor":name,"ClinicAddress":Caddress},function(err){
      if(err){
        console.log(err);
      }
      else{
        res.send("Updated in Mongodb database");
      }
    })
  })

app.get("/",function(req,res){
  res.sendFile(__dirname + "/table.html")
})

app.listen(3000,function(){
  console.log("server has started on 3000");
})
