const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({

  _id:{type:String},
  _nameproduct:{type:String},
  _idcate:{type:String},
  _img:{type:String},
  _slug:{type:String},
  _amount:{type:Number},
  _price:{type:Number},
  _detail:{type:String},
  _v:{type:String},
  _procedure:{type:String},
  _booth:{type:Boolean},
  





});

module.exports=mongoose.model('Product',Product)