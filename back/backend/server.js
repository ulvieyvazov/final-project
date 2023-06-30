const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

app.use('/api/users',require('./routes/AuthRoutes'))
// app.use('/users',require('./routes/usersRoutes'))

const port = 8000;
app.listen(port, () => {
    console.log("Server Worked");
});

mongoose.set("strictQuery", true);

mongoose
    .connect(
        "mongodb+srv://Ulvi:012345@cluster0.z4qeg4x.mongodb.net/",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((err) => {
        console.log(err);
    });