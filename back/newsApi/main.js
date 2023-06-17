const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose  = require("mongoose");
dotenv.config();


const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const NewsSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    info: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    disc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("news", NewsSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/news", async (req, res) => {
  try {
    const get = await News.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/news/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getNewsId = await News.findById(getId);
    res.send(getNewsId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/news", (req, res) => {
  const getBody = req.body;
  const postNews = new News(getBody);
  postNews.save();
  res.send(postNews);
});

app.delete("/news/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const deletNews = await News.findByIdAndDelete(deletBody);
    res.send(deletNews);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server qalxdi, port:", PORT);
});