var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var studentsSchema = require('../studentsschema');

router.get('/', async (req, res) => {
    try {
        const studentslist = await studentsSchema.find();
        return res.json(studentslist);
    } catch (error) {
        console.log(error);
        return res.status(500).send('getting error in getstudents');
    }
})


module.exports = router;