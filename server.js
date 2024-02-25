 const express =require('express');
 const bodyparser = require('body-parser');
 const app = express();
 const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const errorMiddleware = require('./middleware/error');
const product = require('./routes/productRoute');
const cart = require('./routes/cartRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');


dotenv.config({
    path:"config/config.env"
});

mongoose.connect(process.env.DB_URI).then((data) =>{
console.log(`MongoDB connected with server: ${data.connection.host}`)}).catch((err) => console.error(err));




app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser())

app.use("/triveous/",product);
 app.use("/triveous/",user);
 app.use("/triveous/",cart);
 app.use("/triveous/",order);
 


app.use(errorMiddleware);

app.listen(process.env.PORT,()=>{
    console.log('server is working on http://localhost:'+process.env.PORT);
});
