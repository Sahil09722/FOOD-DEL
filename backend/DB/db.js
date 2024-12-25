import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDB = async () => {
 try{
   await mongoose.connect(process.env.MONGODB_URI);
   console.log("MongoDb connected");
 }
 catch(err){
    console.error(err.message);
    process.exit(1);}
}
export default connectDB;