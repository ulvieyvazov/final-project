const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const MessageSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
        }
    },
    { timestamps: true }
);

const Message = mongoose.model("message", MessageSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/message", async (req, res) => {
    try {
        const get = await Message.find({});
        res.send(get);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

app.get("/message/:id", async (req, res) => {
    try {
        const getId = req.params.id;
        const getMessageId = await Message.findById(getId);
        res.send(getMessageId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

app.post("/message", (req, res) => {
    const getBody = req.body;
    const postMessage = new Message(getBody);
    postMessage.save();
    res.send(postMessage);
});

app.delete("/message/:id", async (req, res) => {
    try {
        const deletBody = req.params.id;
        const deletMessage = await Message.findByIdAndDelete(deletBody);
        res.send(deletMessage);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server qalxdi, port:", PORT);
});