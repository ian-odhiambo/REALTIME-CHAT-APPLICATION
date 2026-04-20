import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min.lenght:6
    }
});