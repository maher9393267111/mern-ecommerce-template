const express = require("express");
const router = express.Router();


const {CreateProduct,
    getAllProducts,
  

} = require("../controllers/product");



router.post("/add-product", CreateProduct);

router.get("/all-products", getAllProducts);


module.exports = router;