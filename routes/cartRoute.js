const express  = require("express");
const router = express.Router();
const { isAuthentication} = require("../middleware/authentication");
const { addtoCart,decreaseCart,deleteCart,increaseCart,getCart} = require("../controller/cartController");

router.route("/cart/get").get( isAuthentication, getCart);
router.route("/cart/add/:id").post( isAuthentication, addtoCart);
router.route("/cart/increase/:id").put( isAuthentication, increaseCart);
router.route("/cart/decrease/:id").put( isAuthentication,decreaseCart);
router.route("/cart/delete/:id").delete( isAuthentication,deleteCart);



module.exports = router;