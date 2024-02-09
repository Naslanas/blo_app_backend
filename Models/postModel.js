const mongoose=require("mongoose")
const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref : "register" //collection name in signupModel.js
        },

        post:{
            type:String,
            required:true
        },

        postedDate:{
            type:Date,
            default : Date.now
        }
    }
)

module.exports=mongoose.model("post",postSchema)