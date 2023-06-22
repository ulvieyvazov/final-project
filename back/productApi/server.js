const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const ProductsSchema = new Schema(
    {
        img: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        innovation: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            require: true,
        },
        detailimg: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            require: true,
        },
        reviews: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        availability: {
            type: String,
            require: true,
        },
        brand: {
            type: String,
            require: true,
        },
        sku: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
        discount: {
            type: Number,
            require: true,
        },
        fulldisc:
        {
            productfulldisc: {
                type: String,
                require: true,
            },
            etiam1: {
                type: String,
                require: true,
            },
            etiam2: {
                type: String,
                require: true
            },
        },

        specification:
        {
            general:
            {
                material: {
                    type: String,
                    require: true
                },
                engine: {
                    type: String,
                    require: true
                },
                batteryVolt: {
                    type: String,
                    require: true
                },
                batteryType: {
                    type: String,
                    require: true
                },
                speeds: {
                    type: Number,
                    require: true
                },
                weight: {
                    type: Number,
                    require: true
                },
            },


            dimensions:
            {
                length: {
                    type: String,
                    require: true
                },
                width: {
                    type: String,
                    require: true
                },
                height: {
                    type: String,
                    require: true
                },
            },

        },

        // reviewsDetali: [
        //     {
        //         profilImg: {
        //             type: String,
        //         },
        //         reviewsName: {
        //             type: String,
        //             require: true
        //         },
        //         reviewsrating: {
        //             type: Number,
        //             require: true
        //         },
        //         reviewsComment: {
        //             type: String,
        //             require: true
        //         },
        //         reviewsDate: {
        //             type: String,
        //             require: true
        //         }                
        //     }
        // ]
        // "reviewsDetali": [

        //     {
        //         "profilImg": "",
        //         "reviewsName": "Samantha Smith",
        //         "reviewsrating": 4,
        //         "reviewsComment": "Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum",
        //         "reviewsDate": "27 May, 2018"   
        //     }
        // ]
    },
    { timestamps: true }
);

const Products = mongoose.model("products", ProductsSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/products", async (req, res) => {
    try {
        const get = await Products.find({});
        res.send(get);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const getId = req.params.id;
        const getProductsId = await Products.findById(getId);
        res.send(getProductsId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

app.post("/products", (req, res) => {
    const getBody = req.body;
    const postProducts = new Products(getBody);
    postProducts.save();
    res.send(postProducts);
});

app.delete("/products/:id", async (req, res) => {
    try {
        const deletBody = req.params.id;
        const deletProducts = await Products.findByIdAndDelete(deletBody);
        res.send(deletProducts);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

app.put("/products/:id", async (req, res) => {
    try {
        const updateId = req.params.id;
        const updatedUser = req.body
        const result = await Products.findByIdAndUpdate(updateId, updatedUser, { new: true });
        res.send(result);
    } catch (err) {
        res.status(404).json({ message: "Not exist" });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server qalxdi, port:", PORT);
});