import mongoose,{ Document }  from "mongoose";

export interface User_type extends Document{
    clearkId:string,
    email:string,
    username:string,
    photo:string,
    firstName:string,
    lastName:string,
    planId:number,
    creditBlance:number
}

const UserSchema = new mongoose.Schema({
    clearkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    planId:{
        type:Number,
        default:1
    },
    creditBlance:{
        type:Number,
        default:10
    }
})

const User=mongoose.models?.User||mongoose.model("User",UserSchema)
export default User
