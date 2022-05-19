const express = require("express");
const router = express.Router();


const {CreateCategory,getAllCategory 

  

} = require("../controllers/category");



router.post("/add-category", CreateCategory);

router.get("/get-all-category", getAllCategory);


module.exports = router;