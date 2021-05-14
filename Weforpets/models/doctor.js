const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
	Speciality:String,
    Name:String,
    Phonenumber: String,
    Location: String,
})

const doctor = mongoose.model('doctor', doctorSchema);

module.exports = doctor;