const express=require("express")
const signupModel = require("../Models/signupModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/register",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password

    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let signup=new signupModel(data)
            let result=signup.save()
            res.json(
            {
            status:"success"
         }
    )
})

        })
    

    //let data=req.body
    /*let name=req.body.name
    let age=req.body.age
    let mobile=req.body.mobile
    let address=req.body.address
    let pincode=req.body.pincode
    let email=req.body.email
    let password=req.body.password*/



module.exports=router