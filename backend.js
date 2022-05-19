


const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();



// app
const app = express();

const catRoutes =require('./routes/category');
const productRoutes =require('./routes/product');





// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());
app.use(express.static("public"));



// routes middleware

 app.use('/api/category',catRoutes)
    app.use('/api/product',productRoutes)


// mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/ecom-template?retryWrites=true&w=majority
// process.env.MONGODB_URL
mongoose
    .connect(
      //  process.env.MONGODB_URL,
        "mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/ecom-template?retryWrites=true&w=majority" ,
        {
        useNewUrlParser: true,
     
    })
    .then(() => console.log('DB Connected'));



    

//PORT 

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})