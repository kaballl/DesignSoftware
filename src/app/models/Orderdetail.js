const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Orderdetail = new Schema({

  
  
    idorder: { type: String,require:true},
    idproduct: { type: String,require:true},
    nameproduct:{type:String},
    amount:{ type: Number, default: 0 },
    total:{type:Number}
  




});

module.exports=mongoose.model('Orderdetail',Orderdetail)