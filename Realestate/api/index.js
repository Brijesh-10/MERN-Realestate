import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
const port =  3000;
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected donkey");
}).catch((err)=>{
    console.log(err);
});
const app=express();
app.listen(port,()=>{
    console.log('server is running  donkeys',port);
})
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || ' Internal server error idiot';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})

