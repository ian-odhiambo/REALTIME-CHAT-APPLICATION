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
        minlenght:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:"",
    }
});


const 