const express = require("express");
const { getALLProducts,createProduct,getProductDetails,getCategory} = require("../controller/productController");
const { isAuthentication } = require("../middleware/authentication");

const router = express.Router();

router.route("/products/category").get(getCategory)
router.route("/products").get(getALLProducts)
router.route("/product/new").post(isAuthentication , createProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router