const Order = require("../model/orderModel");
const Product = require("../model/productModel");
const User = require("../model/userModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create New Order
exports.newOrder = catchAsyncErrors( async(req,res,next) => {
    const {
        shippingInfo,
        paymentInfo,
    } = req.body;
    const user = await User.findById(req.user._id).populate('cart.cartItems.item');
     const orderItems = user.cart.cartItems;
     const itemsPrice = user.cart.total;
     let taxPrice = 0.1*itemsPrice;
     let shippingPrice = 70;
     let totalPrice = itemsPrice+taxPrice+shippingPrice;
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user : req.user._id,
    });
    user.cart=null;
    await user.save();
    res.status(201).json({
        success:true,
        order
    });
   
    
});
//Get Single Order
exports.getSingleOrder = catchAsyncErrors( async(req,res,next) => {
     const order = await Order.findById(req.params.id).populate("user","name email");

     if(!order){
        return next(new ErrorHander("Order not found with this Id",404));
     }

     res.status(200).json({
        success:true,
        order
     })
});
//Get the user orders
exports.myOrder = catchAsyncErrors( async(req,res,next) => {
    const order = await Order.find({ user:req.user._id});

    if(!order){
       return next(new ErrorHander("Order not found with this Id",404));
    }

    res.status(200).json({
       success:true,
       order
    })
});

