const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo :{
     
    address : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
        default:"India"
    },
    pinCode : {
        type : Number,
        required : true,
    },
    phoneNo : {
        type : Number,
        required : true,
    },
    AlternatePhoneNo : {
        type : Number,
    },
   },
   orderItems:[
   ],
   user:{
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true,
   },
   paymentInfo : {
    id : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    }
   },
   paidAt : {
    type : Date,
    required : true,
   },
   itemsPrice : {
    type : Number,
    default : 0,
    required : true,
   },
   taxPrice : {
    type : Number,
    default : 0,
    required : true,
   },
   shippingPrice : {
    type : Number,
    default : 0,
    required : true,
   },
   totalPrice : {
    type : Number,
    default : 0,
    required : true,
   },
   orderStatus : {
    type : String,
    required:true,
    default:"Processing",
   },
   deliveredAt : Date,
   cretedAt : {
    type : Date,
    default:Date.now,
   },
   


});

module.exports = mongoose.model("Order",orderSchema);
