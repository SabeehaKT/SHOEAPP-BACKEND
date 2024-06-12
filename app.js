const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {shoemodel} = require("./models/shoe")

const app=express()
app.use(cors())
app.use(express.json())


app.post("/add",(req,res)=>{
    let input = req.body
    let shoe = new shoemodel(input)
    shoe.save()
    res.json({"status":"added"})
})

app.listen(8089,()=>{
    console.log("Server started")
})