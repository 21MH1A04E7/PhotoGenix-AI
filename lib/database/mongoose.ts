import mongoose,{Mongoose} from "mongoose";

const MONGODB_URL=process.env.MONGODB_URL

interface MongooseConnection{
    connect:Mongoose|null;
    promise:Promise<Mongoose>|null;
}

let catched:MongooseConnection=(global as any).mongoose

if(!catched){
    catched=(global as any).mongoose={
        connect:null,
        promise:null
    }
}

export const connectToDatabase=async()=>{
    if(catched.connect) return catched.connect
    if(!MONGODB_URL) throw new Error('pls provide the mongodb url')
    catched.promise=catched.promise||mongoose.connect(MONGODB_URL,{
        dbName:'photogenix',
        bufferCommands:false
    })
    catched.connect=await catched.promise
    return catched.connect
}