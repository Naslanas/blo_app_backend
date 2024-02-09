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

module.exports=router