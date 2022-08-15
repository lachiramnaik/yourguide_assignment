const mongoose = require('mongoose');
require('dotenv').config();
//db connection
const db = process.env.dblink;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify:false,
}).then(() => console.log('Database connected'));