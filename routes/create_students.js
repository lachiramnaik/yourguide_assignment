var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var studentsSchema = require('../studentsschema');

router.post('/', function (req, res) {
    var studentsInfo = req.body;
    try {
        var newStudent = new studentsSchema({
            name: studentsInfo.name,
            email: studentsInfo.email,
            phonenumber: studentsInfo.phonenumber,
            age: studentsInfo.age,
            isstudent: studentsInfo.isstudent,
            highestqualification: studentsInfo.highestqualification,
            interests: studentsInfo.interests

        });
        newStudent.save();
        return res.status(200).send({ message : "success"});
            
    } catch (error) {
        console.log(error);
        return res.status(500).send('getting error in addstudents');
    }

})


module.exports = router;