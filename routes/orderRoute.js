const express  = require("express");
const router = express.Router();
const { isAuthentication} = require("../middleware/authentication");
const { newOrder, getSingleOrder, myOrder} = require("../controller/OrderController");

router.route("/order/new").post( isAuthentication, newOrder);
router.route("/order/:id").get( isAuthentication, getSingleOrder);
router.route("/orders/me").get( isAuthentication, myOrder);



module.exports = router;