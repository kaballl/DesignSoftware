const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({

  
  
  nameuser:{type:String},
  lock:{type:Boolean},
  id_product:{type:String},
  message:{type:String}
  




});

module.exports=mongoose.model('Comment',Comment)