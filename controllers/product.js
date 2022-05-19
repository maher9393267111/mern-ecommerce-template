const ProductModel = require('../models/product');


exports.CreateProduct = async (req, res) => {
    const { name, 
        images,
         colorimages,
        price,
        tags,
        discount,
        colors ,
        oldprice,category } = req.body;
  
    console.log(req.body);
  
    const folder = "category";
  
    // console.log("req.body--->", req.body.name);
  
    const newproduct = ProductModel({
      name: name,
      images,
      colorimages,price,tags,oldprice,category,discount,colors : colors? colors : [],
    });
  
    try {
       await newproduct.save();
    console.log("new product--->");
  
      res.status(201).json({message:'product is created successfully',product:newproduct});
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };




  // all products

    exports.getAllProducts = async (req, res) => {
        try {
            const products = await ProductModel.find().populate('category','name');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }