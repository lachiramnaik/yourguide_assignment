const mongoose = require('mongoose');
var studentsSchema = mongoose.Schema({
  name: String,
  email: String,
  phonenumber: Number,
  age: Number,
  isstudent: Boolean,
  highestqualification: String,
  interests: [String]

});
module.exports = mongoose.model("student", studentsSchema);