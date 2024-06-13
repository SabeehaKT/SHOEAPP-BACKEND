const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {shoemodel} = require("./models/shoe")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sabeeha02:sabeehamongodb@cluster0.05m7a.mongodb.net/shoedb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input = req.body
    let shoe = new shoemodel(input)
    shoe.save()
    res.json({"status":"added"})
})

app.get("/view",(req,res)=>{
    shoemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

app.listen(8089,()=>{
    console.log("Server started")
})