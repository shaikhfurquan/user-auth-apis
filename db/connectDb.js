import mongoose from "mongoose";
import status from 'http-status'
import dotenv from "dotenv";
dotenv.config()
const DB_URL = process.env.DB_URL


const connectDb = () =>{
    mongoose.connect(DB_URL).then(()=>{
        console.log(`Connected to ${DB_URL}`);
    }).catch((err) =>{
        console.log(`Failed to connect ${DB_URL}` , err.message);
    })
}


export default connectDb