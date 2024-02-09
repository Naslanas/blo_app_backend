const express=require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const signupRoute=require("./controllers/signupRouter")
const postRouter=require("./controllers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nasla:nasla1711@cluster0.f8gbros.mongodb.net/BlogDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.use("/api/blog",signupRoute)
app.use("/api/post",postRouter)

app.listen(3001,()=>{
    console.log("Server Running")
})