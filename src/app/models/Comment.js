const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({

  
  
  _nameuser:{type:String},
  _idproduct:{type:String},
  _message:{type:String}
  




});

module.exports=mongoose.model('Comment',Comment)