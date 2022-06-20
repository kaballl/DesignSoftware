const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customer = new Schema({

  
  _address:{type:String},
  _avatar:{type:String},
  _email:{type:String},
  _lock:{type:Boolean},
  
  _name:{type:String},
  _password:{type:String},
  _username:{type:String}
  




});

module.exports=mongoose.model('Customer',Customer)