const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Order = new Schema({

  
  
  id_customer: { type: String,require:true},
  status:{ type: String,require:true},
  book:{type:Date},
  delivery:{type:Date},

  address:{type:String},
  phonenumber:{type:String},
  note:{type:String},
  total:{type:String}

  




});

module.exports=mongoose.model('Order',Order)