const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({

  _id:{type:String},
  name:{type:String},
 
  image:{type:String},
  slug:{type:String},
  amount:{type:Number},
  price:{type:Number},
  detail:{type:String},
  
  origin:{type:String},
  lock:{type:Boolean},
  trend:{type:Boolean},
  





});

module.exports=mongoose.model('Product',Product)