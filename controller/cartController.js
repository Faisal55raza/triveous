const Product = require("../model/productModel");
const User = require("../model/userModel");
const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Get all cart Items
exports.getCart = catchAsyncErrors(async(req,res,next) => {
    const user = await User.findById(req.user._id).populate('cart.cartItems.item');
    let cart = user.cart;

   
    res.status(200).json({
        success:true,
        cart
        
        
    })    
})
//Add a item to the cart
exports.addtoCart = catchAsyncErrors(async(req,res,next) => {

    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Poduct not found",404))

    }
    const user = await User.findById(req.user.id);
 
    let total_price = user.cart.total+product.price;
    user.cart.total=total_price;
    const newProduct = {
          item:req.params.id,
          item_price:product.price,
          Quantity:1
    }
    var a = user.cart.cartItems;
    
    a.push(newProduct);
   
    user.cart.cartItems=a;
    await user.save();

    res.status(201).json({
        succes:true,
        
    })

    
})
//Increase a cart Quantity
exports.increaseCart = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Poduct not found",404))

    }
    var user = await User.findById(req.user.id);
    let total_price = user.cart.total+product.price;
    user.cart.total=total_price;
    var arr= user.cart.cartItems;
    arr.map((it)=> {
       if(it.item==req.params.id){
        it.Quantity=it.Quantity+1;
        it.item_price = it.item_price + product.price; 
       }
    })
    user.cart.cartItems=arr;
    await user.save();

    res.status(201).json({
        succes:true,
    
    })

    
})
//Decrease a cart Quantity
exports.decreaseCart = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Poduct not found",404))

    }
    var user = await User.findById(req.user.id);
    let total_price = user.cart.total-product.price;
    user.cart.total=total_price;
    var arr= user.cart.cartItems;
    var flag=0
    arr.forEach((it)=> {
       if(it.item==req.params.id){
        it.item_price = it.item_price - product.price; 
        it.Quantity=it.Quantity-1;
         if(it.Quantity==0){
            flag=1;
         }
       }
    })
    if(flag==1){
        var newarr =arr.filter((it) => it.item!=req.params.id)
        arr=newarr;
    }
    user.cart.cartItems=arr;
    await user.save();

    res.status(201).json({
        succes:true,
   
    })

    
})
//delete a cart item
exports.deleteCart = catchAsyncErrors(async(req,res,next) => {
    
    var user = await User.findById(req.user.id);
    
   
    var arr= user.cart.cartItems;
    var total_price;
    arr.map((it)=> {
       if(it.item==req.params.id){
         total_price = user.cart.total-(it.item_price*it.Quantity);
       }
    })
    var newarr =arr.filter((it) => it.item!=req.params.id)
    arr=newarr;
    user.cart.cartItems=arr;
    user.cart.total=total_price;
    await user.save();

    res.status(201).json({
        succes:true,

    })

    
})
