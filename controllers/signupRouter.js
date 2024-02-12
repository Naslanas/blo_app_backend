const express=require("express")
const signupModel = require("../Models/signupModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.get("/viewuser",async(req,res)=>{
    let result=await signupModel.find()
    res.json(result)

})

router.post("/register",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password

//     hashPasswordGenerator(password).then(
//         (hashedPassword)=>{
//             console.log(hashedPassword)
//             data.password=hashedPassword
//             console.log(data)
//             let signup=new signupModel(data)
//             let result=signup.save()
//             res.json(
//             {
//             status:"success"
//          }
//     )
// })

    const hashedPassword=await hashPasswordGenerator(password)
    data.password.hashedPassword
    let signup=new signupModel(data)
    let result=await signup.save()
    res.json(
        {
            status:"success"
        }
    )


        })

        router.post("/login",async(req,res)=>{
            let input=req.body
            let email=req.body.email
            let data=await signupModel.findOne({"email":email})
            if(!data){
                return res.json(
                    {
                        status:"Invalid email id"
                    }
                )
            }

            console.log(data)
            let dbPassword=data.password
            let inputPassword=req.body.password
            console.log(dbPassword)
            console.log(inputPassword)

            const match=await bcrypt.compare(inputPassword,dbPassword)
            if(!match)
            {
                    return res.json(
                        {
                            status:"Invalid password"
                        }
                    )
            }

            res.json({
                status:"success","userdata":data
            })
        })


module.exports=router