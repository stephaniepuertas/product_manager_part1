const mongoose = require("mongoose")

// DEFINE SCHEMA
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title required"],
        minLength:[2, "Title must be 2 characters long"]
    },
    price:{
        type:Number,
        required:[true, "List a price"]
    },
    description:{
        type:String,
        required:[true, "Must write description"],
        minLength:[2, "description must be 2 characters long"]
    
    // under30Minutes:{
    //     type:Boolean,
    //     required:true
    }
}, {timestamps:true});

// REGISTER SHCEMA
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;