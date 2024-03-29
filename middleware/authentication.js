const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require('jsonwebtoken');
const User = require("../model/userModel")



exports.isAuthentication = catchAsyncErrors( async(req,res,next) => {
  
    const { token } = req.cookies;
   if(!token){
     return next(new ErrorHander("Please login to see this page",401))
   }
   const decodedData = jwt.verify(token , process.env.JWT_SECRET);

   req.user = await User.findById(decodedData.id);

   next();

})
