import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('your Database').then(()=>
        console.log("DB connected"));
}