const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const BillingSchema = new Schema(
    {
        fname: {
            type: String,
            require: true,
        },
        lname: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        state: {
            type: String,
            require: true,
        },
        phone: {
            type: Number,
            require: true,
        },
        notes: {
            type: String,
        },
        suite: {
            type: String,
        },
    },
    { timestamps: true }
);

const Billing = mongoose.model("billing", BillingSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/billing", async (req, res) => {
    try {
        const get = await Billing.find({});
        res.send(get);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

app.get("/billing/:id", async (req, res) => {
    try {
        const getId = req.params.id;
        const getBillingId = await Billing.findById(getId);
        res.send(getBillingId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

app.post("/billing", (req, res) => {
    const getBody = req.body;
    const postBilling = new Billing(getBody);
    postBilling.save();
    res.send(postBilling);
});

app.delete("/billing/:id", async (req, res) => {
    try {
        const deletBody = req.params.id;
        const deletBilling = await Billing.findByIdAndDelete(deletBody);
        res.send(deletBilling);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server qalxdi, port:", PORT);
});