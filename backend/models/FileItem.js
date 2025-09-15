import mongoose from "mongoose";


const FileItemSchema = new mongoose.Schema(
    {
        key:{
            type:String,
            required:true,
            index:true
        },
        originalName:String,
        contentType:String,
        size:Number,
        title:String,
        desccription:String
    },{
        timestamps:true
    }
)

export default mongoose.model("FileItem",FileItemSchema)