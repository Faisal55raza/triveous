const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs =  require('bcryptjs')
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
   name:{
    type: String,
    required:[true,"Please enter your name"],
    maxLength:[30,"cannot exceed 30 characters"],
    minLength:[5,"should exceed 5 characters"]
   },
   email:{
    type: String,
    required:[true,"Please enter your email"],
    unique:true,
    validate:[validator.isEmail,"Please enter a valid mail"]
   },
   password:{
    type: String,
    required:[true,"Please enter your password"],
    minLength:[7,"should exceed 5 characters"],
    select:false
   },
   cart:{
    cartItems:[
        { item: {
          type:mongoose.Schema.ObjectId,
          ref:'Product'
       },
       item_price:{
        type:Number
       },
       Quantity:{
        type:Number
       } 
        }
      ],
      total:{
        type:Number,
        default:0
      }
},
}
);
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcryptjs.hash(this.password,10)
});

userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}
userSchema.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
  };
module.exports = mongoose.model("User",userSchema);