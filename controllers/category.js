//cereate category
const categoyModel = require("../models/category");

exports.CreateCategory = async (req, res) => {
  const { name, image } = req.body;

  console.log(name, image);

  const folder = "category";

  console.log("req.body--->", req.body.name);

  const newcat = new categoyModel({
    name: name,
    image: image,
  });

  try {
    await newcat.save();

    res.status(201).json(newcat);
  } catch (error) {
    res.status(500).json({ er:'somethin wrong',message: error.message });
  }
};




//  get all category

exports.getAllCategory = async (req, res) => {


    try {
        const allCategory = await categoyModel.find();
    
        res.status(200).json(allCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }