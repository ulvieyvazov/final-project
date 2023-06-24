const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require('cors')
const Userroute = require('./routes/Userroutes')
app.use(cors())
dotenv.config();

const DB = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose.connect(DB, {})
.then(() => console.log('Database is connected'))
.catch((error) => console.error('Database connect error:', error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', Userroute);

app.listen(PORT, () => {
    console.log('connected ' + PORT);
})