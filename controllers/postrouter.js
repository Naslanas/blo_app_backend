const express=require("express")
const router = express.Router()
const postModel=require("../Models/postModel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=post.save()
    res.json(
        {
            status:"success"
        }
    )
})

router.post("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userId","name age mobile address pincode email -_id")         //populate---fields that we want
    .exec()
    res.json(result)
})

module.exports=router