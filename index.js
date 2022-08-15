var express = require('express');
var app = express();
const cors = require('cors');
const dbconnection = require('./dbconnection');
var studentsSchema = require('./studentsschema');
//most importtent thing using express json
app.use(cors());
app.use(express.json());


//Create students
const create_students = require('./routes/create_students')
app.use('/createstudent', create_students)

//Get students
const get_all_students = require('./routes/get_all_students')
app.use('/getallstudents', get_all_students)

//delete student by id
app.delete('/deletestudent/:id', async(req, res) => {
    try {
        await studentsSchema.findByIdAndDelete(req.params.id)
        return res.status(200).send({ message: "success", data: "Document deleted successfully" })

    } catch (error) {
        console.log(error);
    }
});


//get student profile by id
app.get('/getstudent/:id', async(req, res) => {
    try {
        const userdata = await studentsSchema.findById(req.params.id)
        return res.json(userdata);
    } catch (error) {
        console.log(error);
    }
})


//edit student by id
app.put('/editstudent/:id', async(req, res) => {
    try {
        var studentsInfo = req.body;
        const studentid = req.params.id;
        const edit = {
            name: studentsInfo.name,
            email: studentsInfo.email,
            phonenumber: studentsInfo.phonenumber,
            age: studentsInfo.age,
            isstudent: studentsInfo.isstudent,
            highestqualification: studentsInfo.highestqualification,
            interests: studentsInfo.interests
        }
        await studentsSchema.findOneAndUpdate(studentid, edit);
        return res.status(200).send({ message: 'updatd succesfully' });

    } catch (error) {
        console.log(error);
    }
})


app.listen(3000, () => console.log('server is running'));