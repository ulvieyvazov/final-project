const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    idComment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", CommentSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/comment", async (req, res) => {
  try {
    const get = await Comment.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/comment/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getCommentId = await Comment.findById(getId);
    res.send(getCommentId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/comment", (req, res) => {
  const getBody = req.body;
  const postComment = new Comment(getBody);
  postComment.save();
  res.send(postComment);
});

app.delete("/comment/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const deletComment = await Comment.findByIdAndDelete(deletBody);
    res.send(deletComment);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server qalxdi, port:", PORT);
});