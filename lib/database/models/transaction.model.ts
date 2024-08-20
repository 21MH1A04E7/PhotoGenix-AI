import mongoose,{Document,Types} from "mongoose";

export interface ITransaction extends Document {
    createdAt?: Date;
    stripeId: string;
    amount: number;
    plan?: string;
    credits?: number;
    buyer?: Types.ObjectId;
  }

const TransactionSchema= new mongoose.Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },
    stripeId:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true
    },
    plan:{
        type:String,
    },
    credits:{
        type:Number,
    },
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Transaction=mongoose.models?.Transaction||mongoose.model("Transaction",TransactionSchema)
export default Transaction