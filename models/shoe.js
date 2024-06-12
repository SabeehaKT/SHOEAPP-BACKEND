const mongoose = require ("mongoose")
const schema = mongoose.Schema(
{
    "name":{type:String,required:true},
    "email":{type:String,required:true},
    "size":{type:String,required:true},
    "company":{type:String,required:true}
}
)

const shoemodel=mongoose.model("shoes",schema);
module.exports={shoemodel}