const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customer = new Schema({

  
  address:{type:String},
  avatar:{type:String},
  email:{type:String},
  lock:{type:Boolean},
  
  name:{type:String},
  password:{type:String},
  username:{type:String}
  




});

module.exports=mongoose.model('Customer',Customer)