import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://geetha:9299101112@cluster0.llcfhfm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}