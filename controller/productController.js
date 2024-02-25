const Product = require("../model/productModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


exports.createProduct = catchAsyncErrors(async(req,res,next) => {
    req.body.user = req.user.id;
     
    
    const product = await Product.create(req.body);
    res.status(201).json({
        succes:true,
        product,
    })
})

exports.getCategory = catchAsyncErrors(async(req,res,next) => {
   const categories = await Product.find().distinct('category');
   res.status(200).json({
    succes:true,
    categories
   })
})



exports.getALLProducts = catchAsyncErrors(async(req,res,next) => {
   

  products = await Product.find();

  res.status(200).json({
    success: true,
    products,
})
})

exports.getProductDetails = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Poduct not found",404))
    }

        res.status(200).json({
            succes:true,
            product,
           
        })
    
})
;
